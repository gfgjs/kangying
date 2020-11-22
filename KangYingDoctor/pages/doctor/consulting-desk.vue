<!-- 咨询服务台 -->
<template>
    <view>
        <view class="header">
            <view class="buttons-box">
                <view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)"
                      :class="index==currIndex&&'item-checked'">{{ item }}
                </view>
            </view>
        </view>
        <view class="header-place"></view>
        <!--        <view class="row-title" style="display: flex;justify-content: space-between;">筛选就诊卡-->
        <!--            <picker class="left" :range="cardListNames" @change="cardChange">-->
        <!--                <view>{{ currentCard.p_name || '全部' }}-->
        <!--                    <uni-icons type="arrowdown"></uni-icons>-->
        <!--                </view>-->
        <!--            </picker>-->
        <!--        </view>-->
        <view v-if="currIndex===0">
            <view class="item-content" v-for="(item,index) in conversationList" :key='index' @click="toChat(item)">
                <image :src="item.userProfile.avatar" mode=""></image>
                <view class="right">
                    <view class="name">{{ item.userProfile.nick }}</view>
                    <view class="text" v-if="item.lastMessage.payload">
                        {{
                            item.lastMessage.payload.text
                            || (item.lastMessage.payload.description === 'image' && '[ 图片 ]')
                            || (item.lastMessage.payload.description === 'telephone' && '[ 语音/视频电话 ]')
                            || (item.lastMessage.payload.description === 'patientCard' && '[ 卡片信息 ]')
                            || (item.lastMessage.payload.description === 'PAGE_LINK' && '[ 链接信息 ]')
                        }}
                    </view>
                </view>
                <view>{{ formatMinute(item.lastMessage.lastTime * 1000) }}</view>
            </view>
            <view class="no-data" v-if="!conversationList.length">暂无数据</view>
        </view>
        <view v-if="currIndex===1">
            <view class="item-content" v-for="(item,index) in historyConversationList" :key='index' @click="chatWith(item.userID)">
                <image :src="item.avatar" mode=""></image>
                <view class="right">
                    <view class="name">{{ item.nick }}</view>
                </view>
            </view>
            <view class="no-data" v-if="!historyConversationList.length">暂无数据</view>
        </view>
    </view>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import {
    request_recordList,
    request_patientList
} from '../../common/https.js'
import IM from '../../common/im.js'
import store from "../../store";
import {formatDate, formatMinute} from "../../common/util";
import {request_getConversation} from "../../common/https";

export default {
    data() {
        return {
            currIndex: 0,
            tabs: ['当前对话', '历史对话'],
            chatList: [],
            testList: [],
            list: [],
            cardList: [],
            cardListNames: [],
            currentCard: {},
            caseList: [],
            formatDate,
            formatMinute,
            historyConversationList:[]
        };
    },
    watch: {
        isSDKReady(e) {
            if (e) {
                this.getConversationList()
            }
        },
        conversationList() {
            console.log(this.conversationList)
        },
    },
    onLoad() {
        if (this.isSDKReady) {
            this.getConversationList()
        }

        // request_patientList({
        //     uni,
        //     noLoading: true
        // }).then(res => {
        //     if (res.code === 0) {
        //         this.cardListNames = res.data.map(item => {
        //             return item.p_name
        //         })
        //         this.cardList = res.data
        //         // this.currentCard = this.cardList[0]
        //         this.getRecordList()
        //     }
        // })
    },
    onShow() {
        request_getConversation({uni, data: {user_id: this.userID}}).then(res => {
            if(res.data&&res.data.length){
                IM.tim.getUserProfile({
                    userIDList: res.data.map(item=>item.split('C2C')[1]) // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
                }).then((imResponse) => {
                    console.log(imResponse.data)
                    this.historyConversationList = imResponse.data
                    // console.log(imResponse.data); // 存储用户资料的数组 - [Profile]
                }).catch(function (imError) {
                    // console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
                });
            }
        })
    },
    onPullDownRefresh() {
        setTimeout(() => {
            uni.stopPullDownRefresh()
        }, 500)
    },
    methods: {
        chatWith(t) {
            this.$pageTo({
                uni,
                url: '/pages/doctor/chat-view',
                options: {
                    userID: t
                }
            })
        },
        getConversationList() {
            // 拉取会话列表
            IM.tim.getConversationList().then((imResponse) => {
                const conversationList = imResponse.data.conversationList; // 会话列表，用该列表覆盖原有的会话列表
                // this.conversationList = [].concat(conversationList)
            }).catch(function (imError) {
                console.warn('getConversationList error:', imError); // 获取会话列表失败的相关信息
            });
        },
        cardChange(e) {
            this.currentCard = this.cardList[e.detail.value]
            this.getRecordList()
        },
        getRecordList() {
            request_recordList({
                uni,
                noLoading: true,
                data: {
                    card_id: this.currentCard.id
                }
            }).then(res => {
                if (res.code === 0) {
                    this.list = res.data
                }
            })
        },
        clickTab(item, index) {
            this.currIndex = index
        },
        toChat(conversation) {
            store.commit('updateCurrentConversation', conversation)

            let {conversationID, userProfile} = conversation
            let {userID, avatar, gender, nick} = userProfile
            store.dispatch('getMessageList', conversationID)
            this.$pageTo({
                uni,
                url: '/pages/doctor/chat-view',
                options: {
                    conversationID,
                    userID,
                    avatar,
                    gender,
                    nick
                }
            })
        },
        ...mapActions([])
    },
    computed: {
        ...mapGetters(['isSDKReady', 'conversationList', 'userID'])
    }
}
</script>

<style lang="scss">
page {
    background-color: $base-background-color;
}

.header-place {
    height:44px;
}

.header {
    position: fixed;
    width: 100%;
    //padding: 10px 0;
    height: 44px;
    background-color: $base-color;
    z-index: 1;

    .buttons-box {
        display: flex;
        height: 40px;
        border: 1px solid white;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        .item {
            width: 30vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: white;
            transition: all linear .1s;
            // border: 1px solid white;
        }

        .item-checked {
            color: $base-color;
            background-color: white;
        }
    }
}

.item-content {
    padding: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 74px;

    image {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    .right {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;

        .name {
            font-size: 16px;
            color: #494949;
        }

        .text {
            margin-top: 5px;
            font-size: 14px;
            color: #9E9E9E;
            width: 80%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}
</style>
