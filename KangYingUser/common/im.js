import TIM from './tim-js.js'
import store from '../store/index.js'
import tim from './tim'
import {request_saveMsg, request_uploadImg} from './https'
import {SDK_APP_ID} from './config'

let uni, userID, request_getUserSig, userSig, userInfo

function init(e) {
    uni = e.uni
    request_getUserSig = e.request_getUserSig

    // 挂载tim到store
    store.dispatch('ADD_TIM', {tim, TIM})
    store.commit('SAVE_SDK_APP_ID', SDK_APP_ID)

    // 登录成功后会触发 SDK_READY 事件，该事件触发后，可正常使用 SDK 接口
    tim.on(TIM.EVENT.SDK_READY, onReadyStateUpdate)
    // SDK NOT READT
    tim.on(TIM.EVENT.SDK_NOT_READY, onReadyStateUpdate)
    // 收到新消息
    tim.on(TIM.EVENT.MESSAGE_RECEIVED, onReceiveMessage)
    // 会话列表更新
    tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, onUpdateConversationList)
    // 网络监测
    tim.on(TIM.EVENT.NET_STATE_CHANGE, onNetStateChange)
}

function onUpdateConversationList(event) {
    store.commit('updateConversationList', event.data)
}

function onNetStateChange(event) {
    console.log('tim 网络变化')
}

function onReadyStateUpdate({name}) {
    const isSDKReady = name === TIM.EVENT.SDK_READY
    // 本事件tim login后才触发
    store.dispatch('CHANGE_SDK_READY', isSDKReady)
    if (isSDKReady) {
        // 修改个人标配资料
        tim.updateMyProfile({
            nick: userInfo.user_name,
            avatar: userInfo.avatar,
            gender: userInfo.gender === '男' ? TIM.TYPES.GENDER_MALE : TIM.TYPES.GENDER_FEMALE,
            selfSignature: '我的个性签名',
            allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
        }).then(function (imResponse) {
            // console.log('更新资料成功', imResponse.data); // 更新资料成功
        }).catch(function (imError) {
            console.warn('更新资料失败:', imError); // 更新资料失败的相关信息
        });
    }
}

function login(info) {
    userInfo = info
    userID = userInfo.im_username
    getUserSig(userID).then(res => {
        store.commit('SAVE_USER_SIG', res)
        store.commit('SAVE_USER_ID', userID)
        tim.login({
            userID,
            userSig: res
        }).then((imResponse) => {
            // console.log(imResponse.data, 'im登录成功'); // 登录成功

            if (imResponse.data.repeatLogin === true) {
                // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
                console.log('标识账号已登录:', imResponse.data.errorInfo);
            }
        }).catch((imError) => {
            console.warn('登录失败:', imError); // 登录失败的相关信息
        })
    })
}

function logout() {
    tim.logout()
}

function onReceiveMessage({data: messageList}) {
    store.commit('pushCurrentMessageList', messageList)

    //#ifdef APP-PLUS
    messageList.map(message => {
        const {conversationID} = message
        const payload = JSON.stringify({
            conversationID
        })
        if (message.type === TIM.TYPES.MSG_TEXT) {
            plus.push.createMessage(message.nick + '：' + message.payload.text, payload)
        } else if (message.type === TIM.TYPES.MSG_CUSTOM) {
            if (message.payload.description === 'image') {
                plus.push.createMessage(message.nick + '：' + '[ 图片消息 ]', payload)
            } else if (message.payload.description === 'telephone') {
                plus.push.createMessage(message.nick + ' 邀请您进行语音/视频通话', payload)
            }
        }
    })
    //#endif

    handleVideoMessage(messageList)
}

function handleVideoMessage(messageList) {
    const videoMessageList = messageList.filter(
        message => message.type === TIM.TYPES.MSG_CUSTOM && message.payload.description === 'telephone'
    )

    if (videoMessageList.length === 0) return

    const videoPayload = JSON.parse(videoMessageList[0].payload.extension)
    // 有电话呼入
    store.dispatch('UPDATE_REMOTE_CALL_STATE', videoPayload.state)

    // 本机进入待接听状态
    if (videoPayload.state === 1) {
        store.dispatch('UPDATE_CURRENT_CALL', {
            callingID: videoMessageList[0].from, // 主叫方
            targetUserID: videoMessageList[0].to, // 被叫方，即本机
            type: videoPayload.type,
            roomId: videoPayload.roomId
        }).then(() => {
            store.dispatch('UPDATE_CALL_STATE', 1)
        })
    }
}

function isJsonStr(str) {
    try {
        JSON.parse(str)
        return true
    } catch {
        return false
    }
}

function getUserSig(userID) {
    return new Promise((resolve, reject) => {
        if (userSig) {
            resolve(userSig)
        } else {
            request_getUserSig({
                uni,
                data: {
                    userId: userID
                }
            }).then(res => {
                if (res.code === 0) {
                    userSig = res.data
                    resolve(res.data)
                } else {
                    reject()
                }
            }).catch((e) => {
                reject(e)
            })
        }
    })
}


function sendText(targetUserID, text) {
    let message = tim.createTextMessage({
        to: targetUserID,
        conversationType: TIM.TYPES.CONV_C2C,
        payload: {text}
    })

    sendMessage(message)
}

function sendImage(targetUserID) {
    return new Promise((resolve, reject) => {
        request_uploadImg({uni}).then(res => {
            if (res.code === 0) {
                let message = tim.createCustomMessage({
                    to: targetUserID,
                    conversationType: TIM.TYPES.CONV_C2C,
                    payload: {
                        data: res.data,
                        description: 'image',
                        extension: ''
                    }
                })
                sendMessage(message, () => resolve(true), () => reject())
            } else {
                reject()
            }
        })
    })
}

function telephone({state, data}) {
    // roomId 聊天室ID
    // type: video audio
    // state: 0-空闲 1-等待中 2-同意 3-拒绝 4-通话中 5-挂断通话 6-超时
    const {targetUserID, callingID, roomId, type} = store.state.timStore.currentCall
    const userID = store.state.timStore.userID
    let message = tim.createCustomMessage({
        to: targetUserID === userID ? callingID : targetUserID, // 被叫ID与本机相同，本地为被叫，则发消息给主叫方
        conversationType: TIM.TYPES.CONV_C2C,
        payload: {
            data, // String
            description: 'telephone', // String
            extension: JSON.stringify({type, state, roomId}) // String
        }
    })
    sendMessage(message)
}

function sendCustomMessage(payload, targetUserID) {
    let message = tim.createCustomMessage({
        to: targetUserID,
        conversationType: TIM.TYPES.CONV_C2C,
        payload
    })
    /*
    * payload:{
            data, // String
            description, // String
            extension // String
        }
    * */
    sendMessage(message)
}

function phone(e) {
    switch (e) {
        case 1:
            const callingID = store.state.timStore.currentCall.callingID
            const userID = store.state.timStore.userID
            if (store.state.timStore.CALL_STATE === 0 && userID === callingID) {
                //空闲状态 且 主叫方才执行发起通话
                telephone({state: e, data: '发起通话'})
            }
            break
        case 2:
            telephone({state: e, data: '已接听'})
            break
        case 3:
            telephone({state: e, data: '拒绝通话'})
            break
        case 5:
            telephone({state: e, data: '挂断通话'})
            break
        case 6:
            telephone({state: e, data: '超时，对方可能不在线'})
            break
        default:
            break
    }
}

function sendMessage(message, success, failed) {
    // 消息上屏
    store.commit('pushCurrentMessageList', message)

    // 发送消息
    tim.sendMessage(message).then(function (imResponse) {
        // 发送成功
        // console.log(store.state.timStore.currentConversation)
        console.log(imResponse, '发送成功');
        // if (typeof success === 'function') {
        //     success()
        // }
    }).catch(function (imError) {
        // 发送失败
        console.warn('发送失败:', imError);
        // if (typeof failed === 'function') {
        //     failed()
        // }
    })

    const {from, conversationID, ID, time, payload} = message
    request_saveMsg({
        data: {
            userID: from, // 用户ID
            conversationID, // 会话ID
            messageID: ID,// 消息ID
            patientID: '',// 就诊卡ID
            messageTime: time,
            payload, // 消息内容
            extra: '' // 额外的数据
        }
    }).then(res => {
        console.log(res, '===saveMsg')
    })
}

export default {
    tim,
    TIM,
    login,
    logout,
    init,
    sendText,
    sendImage,
    sendCustomMessage,
    phone,
    getUserSig
}
