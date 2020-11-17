import tim from '../../common/tim'
import store from "../index"
import IM from '../../common/im'

const timStore = {
    state: {
        tim: null,
        TIM: null,
        isSDKReady: false,
        CALL_STATE: 0, // 0-空闲 1-等待中 2-同意 3-拒绝 4-通话中 5-挂断通话 6-超时
        REMOTE_CALL_STATE: 0, // 远端通话状态 同上
        currentCall: {
            targetUserID: '', // 被叫方ID
            callingID:'', // 主叫方ID
            type:'video', // 呼叫类型：video audio
        },

        currentConversation: {}, // 当前会话
        currentMessageList: [], // 当前消息列表
        nextReqMessageID: '',
        isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
        conversationList: [],

        currentUserProfile: {},
        isLogin: false,
        userID: 0,
        userSig: '',
        sdkAppID: 0,
    },
    mutations: {
        CHANGE_SDK_READY(state, e) {
            state.isSDKReady = e
        },
        ADD_TIM(state, e) {
            state.tim = e.tim
            state.TIM = e.TIM
        },
        SAVE_USER_SIG(state,e){
          state.userSig = e
        },
        SAVE_USER_ID(state,e){
          state.userID = e
        },
        SAVE_SDK_APP_ID(state,e){
            state.sdkAppID = e
        },
        UPDATE_CALL_STATE(state, e) {
            if(e === 1){
                if(state.CALL_STATE===0){
                    IM.phone(e)
                }
            }else{
                IM.phone(e)
            }
            state.CALL_STATE = e
        },
        UPDATE_REMOTE_CALL_STATE(state, e) {
            state.REMOTE_CALL_STATE = e
        },
        UPDATE_CURRENT_CALL(state, e) {
            if(e){
                state.currentCall = {...state.currentCall,...e}
            }else{
                state.currentCall = {}
            }
        },
        /**
         * 更新当前会话
         * 调用时机: 切换会话时
         * @param {Object} state
         * @param {Conversation} conversation
         */
        updateCurrentConversation(state, conversation) {
            // 若是同一会话，则增量更新，解决进入chat页面只有conversationID的问题
            if(state.currentConversation.conversationID === conversation.conversationID){
                state.currentConversation = {...state.currentConversation,...conversation}
            }else{
                state.currentConversation = conversation
            }
            state.currentMessageList = []
            state.nextReqMessageID = ''
            state.isCompleted = false
        },
        /**
         * 更新会话列表
         * 调用时机：触发会话列表更新事件时。CONVERSATION_LIST_UPDATED
         * @param {Object} state
         * @param {Conversation[]} conversationList
         */
        updateConversationList(state, conversationList) {
            state.conversationList = conversationList
        },
        /**
         * 重置当前会话
         * 调用时机：需要重置当前会话时，例如：当前会话是一个群组，正好被踢出群时（被踢群事件触发），重置当前会话
         * @param {Object} state
         */
        resetCurrentConversation(state) {
            state.currentConversation = {}
        },
        /**
         * 将消息插入当前会话列表
         * 调用时机：收/发消息事件触发时
         * @param {Object} state
         * @param {Message[]|Message} data
         * @returns
         */
        pushCurrentMessageList(state, data) {
            // 还没当前会话，则跳过
            if (!state.currentConversation.conversationID) {
                return
            }
            if (Array.isArray(data)) {
                // 筛选出当前会话的消息
                const result = data.filter(item => item.conversationID === state.currentConversation.conversationID)
                state.currentMessageList = [...state.currentMessageList, ...result]
            } else if (data.conversationID === state.currentConversation.conversationID) {
                state.currentMessageList = [...state.currentMessageList, data]
            }
        },
        /**
         * 从当前消息列表中删除某条消息
         * @param {Object} state
         * @param {Message} message
         */
        removeMessage(state, message) {
            const index = state.currentMessageList.findIndex(({ID}) => ID === message.ID)
            if (index >= 0) {
                state.currentMessageList.splice(index, 1)
            }
        },
        reset(state) {
            Object.assign(state, {
                currentConversation: {},
                currentMessageList: [],
                nextReqMessageID: '',
                isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
                conversationList: []
            })
        }
    },
    actions: {
        ADD_TIM(store, e) {
            store.commit('ADD_TIM', e)
        },
        CHANGE_SDK_READY(store, e) {
            store.commit('CHANGE_SDK_READY', e)
        },
        UPDATE_CALL_STATE(store, e) {
            store.commit('UPDATE_CALL_STATE', e)
        },
        UPDATE_REMOTE_CALL_STATE(store, e) {
            store.commit('UPDATE_REMOTE_CALL_STATE', e)
        },
        UPDATE_CURRENT_CALL(store, e) {
            store.commit('UPDATE_CURRENT_CALL', e)
        },
        /**
         * 获取消息列表
         * 调用时机：打开某一会话时或下拉获取历史消息时
         * @param {Object} context
         * @param {String} conversationID
         */
        getMessageList(context, conversationID) {
            if (context.state.isCompleted) {
                uni.showToast({
                    title: '没有更多了',
                    icon: 'none',
                    mask: false,
                    duration: 1000
                })
                return
            }
            const {nextReqMessageID, currentMessageList} = context.state
            tim.getMessageList({conversationID, nextReqMessageID, count: 15}).then(imReponse => {
                // 更新messageID，续拉时要用到
                context.state.nextReqMessageID = imReponse.data.nextReqMessageID
                context.state.isCompleted = imReponse.data.isCompleted
                // 更新当前消息列表，从头部插入
                context.state.currentMessageList = [...imReponse.data.messageList, ...currentMessageList]
            })
        },
        /**
         * 切换会话
         * 调用时机：切换会话时
         * @param {Object} context
         * @param {String} conversationID
         */
        checkoutConversation(context, conversationID) {
            context.commit('resetCurrentMemberList')
            // 1.切换会话前，将切换前的会话进行已读上报
            if (context.state.currentConversation.conversationID) {
                const prevConversationID = context.state.currentConversation.conversationID
                tim.setMessageRead({conversationID: prevConversationID})
            }
            // 2.待切换的会话也进行已读上报
            tim.setMessageRead({conversationID})
            // 3. 获取会话信息
            return tim.getConversationProfile(conversationID).then(({data}) => {
                // 3.1 更新当前会话
                context.commit('updateCurrentConversation', data.conversation)
                // 3.2 获取消息列表
                context.dispatch('getMessageList', conversationID)
                // 3.3 拉取第一页群成员列表
                if (data.conversation.type === TIM.TYPES.CONV_GROUP) {
                    return context.dispatch('getGroupMemberList', data.conversation.groupProfile.groupID)
                }
                return Promise.resolve()
            })
        },
    },
    getters: {
        tim(state) {
            return state.tim
        },
        TIM(state) {
            return state.TIM
        },
        CALL_STATE(state) {
            return state.CALL_STATE
        },
        REMOTE_CALL_STATE(state) {
            return state.REMOTE_CALL_STATE
        },
        currentCall(state){
            return state.currentCall
        },
        userID(state){
            return state.userID
        },
        userSig(state){
          return state.userSig
        },
        sdkAppId(state){
          return state.sdkAppId
        },
        isSDKReady(state) {
            return state.isSDKReady
        },
        conversationList(state) {
            return state.conversationList
        },
        currentConversation(state) {
            return state.currentConversation
        },
        currentMessageList(state) {
            return state.currentMessageList
        },
        toAccount: state => {
            if (!state.currentConversation || !state.currentConversation.conversationID) {
                return ''
            }
            switch (state.currentConversation.type) {
                case 'C2C':
                    return state.currentConversation.conversationID.replace('C2C', '')
                case 'GROUP':
                    return state.currentConversation.conversationID.replace('GROUP', '')
                default:
                    return state.currentConversation.conversationID
            }
        },
        currentConversationType: state => {
            if (!state.currentConversation || !state.currentConversation.type) {
                return ''
            }
            return state.currentConversation.type
        },
        totalUnreadCount: state => {
            const result = state.conversationList.reduce((count, conversation) => {
                // 当前会话不计算总未读
                if (!store.getters.hidden && state.currentConversation.conversationID === conversation.conversationID) {
                    return count
                }
                return count + conversation.unreadCount
            }, 0)
            // titleNotify(result)
            return result
        },
        // 用于当前会话的图片预览
        imgUrlList: state => {
            return state.currentMessageList
                .filter(message => message.type === TIM.TYPES.MSG_IMAGE && !message.isRevoked) // 筛选出没有撤回并且类型是图片类型的消息
                .map(message => message.payload.imageInfoArray[0].url)
        }
    }
}

export default timStore