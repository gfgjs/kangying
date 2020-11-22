<!-- 聊天页 -->
<template>
    <view id="chat">
        <view class="common-place"></view>
        <view class="row doctor-row">
            <view class="message doctor-message">
                <!-- 请填写您的检查信息以及预约检查的相关时间，方便医生为您安排下一步治疗 -->
                欢迎使用天心医疗在线问诊服务
            </view>
        </view>

        <view v-for="(item,index) in currentMessageList" :key='index'>
            <!--距离上一条消息间隔超过10分钟则显示本条消息的时间-->
            <view class="row time-row"
                  v-if="index>0&&(item.time-currentMessageList[index-1].time>600)">
                {{ formatDate(item.time * 1000) }} {{ formatMinute(item.time * 1000) }}
            </view>
            <view class="row"
                  :class="item.from === chatInfo.userID?'doctor-row':'user-row'">
                <!--对方头像-->
                <image class="avatar" v-if="item.from === chatInfo.userID" :src="chatInfo.avatar"
                       mode=""></image>

                <!--普通文字消息-->
                <view class="message" v-if="item.type==='TIMTextElem'">
                    {{ item.payload.text }}
                </view>

                <!--音视频通话消息-->
                <view class="message" v-if="item.type==='TIMCustomElem' && item.payload.description==='telephone'">
                    {{ item.payload.data }}
                </view>

                <!--图片消息-->
                <view class="message" v-if="item.type==='TIMCustomElem' && item.payload.description==='image'">
                    <image class="message-image" :src="item.payload.data" @click="viewImage([item.payload.data])"
                           mode="widthFix"></image>
                </view>

                <!--链接消息 页面内跳转-->
                <view class="message patient-card-message"
                      v-if="item.type==='TIMCustomElem' && item.payload.description==='PAGE_LINK'">
                    <view class="title card-title">
                        <uni-icons type="star" color="#E80505"></uni-icons>
                        {{ item.payload.data }}
                        <uni-icons type="star" color="#E80505"></uni-icons>
                    </view>
                    <view v-if="userID.split('_')[0]==='u'"
                          style="text-decoration: underline;margin-top: 10px;"
                          @click="$pageTo({url:'/pages/doctor/case',options:JSON.parse(item.payload.extension)})"
                    >
                        前往查看详情
                    </view>
                </view>

                <!--就诊卡消息-->
                <view class="message patient-card-message"
                      v-if="item.type==='TIMCustomElem' && item.payload.description==='patientCard'">
                    <view class="title card-title">
                        <uni-icons type="star" color="#E80505"></uni-icons>
                        {{ item.payload.data }}
                        <uni-icons type="star" color="#E80505"></uni-icons>
                    </view>
                    <view class="card-content">
                        <view v-for="(item,index) in JSON.parse(item.payload.extension)" :key="index">
                            {{ index }}：{{ item }}
                        </view>
                    </view>
                    <view v-if="userID.split('_')[0]==='u'"
                          style="text-decoration: underline;margin-top: 10px;"
                          @click="$emit('changePatientCard')"
                    >
                        点此切换就诊卡
                    </view>
                </view>

                <!--应用内页面跳转，如跳转到电子处方-->
                <view class="message link" v-if="item.type==='TIMCustomElem' && item.payload.description==='page'"
                      @click="$pageTo(JSON.parse(item.payload.extension))">
                    {{ item.payload.data }}
                </view>
                <!--本人头像-->
                <image class="avatar" style="margin-left: 4px;" v-if="item.from !== chatInfo.userID"
                       :src="userInfo.avatar" mode=""></image>
            </view>
        </view>

        <view id="bottom-place"></view>
        <view class="bottom-handle">
            <view class="little">
                <!-- <uni-icons type="mic" class="icon" size="24"></uni-icons> -->
                <view class="input-box">
					<textarea class="input" @focus="messageInputFocus" @blur="messageInputBlur" placeholder="输入想说的话"
                              auto-height fixed
                              v-model="messageInput"></textarea>
                </view>
                <uni-icons type="camera" class="icon" size="28" @click="sendMore"></uni-icons>
                <view v-if="messageInput" @touchend.prevent="sendMessage()" class="button">
                    <text>发送</text>
                </view>
                <uni-icons v-else type="plus" @click="moreHandle" class="icon" size="28"></uni-icons>
            </view>
        </view>
    </view>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
import IM from '../../common/im.js'
import store from "../../store";

import chatView from './chat-view'
import {formatDate, formatMinute} from "../../common/util";

export default {
    name: 'chat',
    components: {
        'chat-view': chatView
    },
    data() {
        return {
            messageInput: '',
            pageScrollLength: 100, // 页面滚动长度
            chatInfo: {},
            disableAutoScroll: false, // 当用户下拉加载历史消息时禁止自动滚动
            hasShowLastTime: false, // 已经显示最后消息时间？已显示则本次页面周期内不再更新
            formatDate,
            formatMinute
        };
    },
    watch: {
        isSDKReady(e) {
            if (e) {
                this.afterSDKReady()
            }
        },
        currentMessageList(list) {
            this.scrollToBottom()
        }
    },
    props: ['initChatInfo'],
    mounted() {
        this.chatInfo = this.initChatInfo

        uni.setNavigationBarTitle({
            title: this.chatInfo.nick
        })

        if (this.isSDKReady) {
            this.afterSDKReady()
        }

        setTimeout(() => {
            this.scrollToBottom()
        }, 300)
    },
    methods: {
        reachBottom() {
            this.disableAutoScroll = false
        },
        pullDownRefresh() {
            this.disableAutoScroll = true
            store.dispatch('getMessageList', this.chatInfo.conversationID).then(() => {
                uni.stopPullDownRefresh()
            })
        },
        afterSDKReady() {
            let ID = this.chatInfo.conversationID
            ID = ID || ('C2C' + this.chatInfo.userID)
            // 只传入userID时，用于未建立conversation时
            store.commit('updateCurrentConversation', {conversationID: ID})
            store.dispatch('getMessageList', ID)

            // 未传入对面用户头像等信息时需要从tim后台获取
            IM.tim.getUserProfile({
                userIDList: [this.chatInfo.userID] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
            }).then((imResponse) => {
                const info = imResponse.data[0]
                this.chatInfo = {...this.chatInfo, ...info}
                uni.setNavigationBarTitle({
                    title: info.nick
                })
                // console.log(imResponse.data); // 存储用户资料的数组 - [Profile]
            }).catch(function (imError) {
                // console.warn('getUserProfile error:', imError); // 获取其他用户资料失败的相关信息
            });
        },
        scrollToBottom() {
            if (!this.disableAutoScroll) {
                setTimeout(() => {
                    this.getRect('#chat').then(res => {
                        res = res || {height: 1000}
                        this.pageScrollLength += res.height
                        uni.pageScrollTo({
                            scrollTop: this.pageScrollLength,
                            duration: 100
                        })
                    })
                })
            }
        },
        // 获取页面某个元素的高度等信息
        getRect(selector) {
            return new Promise((resolve) => {
                let view = uni.createSelectorQuery().select(selector);
                view.fields({
                    size: true,
                    rect: true,
                    scrollOffset: true
                }, (res) => {
                    resolve(res);
                }).exec();
            })
        },
        // 拨打电话
        telephone(type) {
            this.UPDATE_CURRENT_CALL({
                targetUserID: this.chatInfo.userID, // 被叫
                callingID: this.userID, // 主叫
                type,
                roomId: Number(Math.random().toString().slice(2, 11))
            }).then(() => {
                this.UPDATE_CALL_STATE(1) // 切换本地为等待状态
            })
        },
        // 点击输入框时，滚动页面到最底部
        messageInputFocus() {
            setTimeout(() => {
                this.scrollToBottom()
            }, 100)
        },
        messageInputBlur() {

        },
        // 打开更多弹框
        moreHandle() {
            this.$emit('moreHandle', 'open')
        },
        viewImage(urls) {
            uni.previewImage({
                urls,
                longPressActions: {
                    itemList: ['保存图片'],
                    success: (data) => {
                        uni.saveImageToPhotosAlbum({
                            filePath: urls[0],
                            success: () => {
                                this.$api.msg('图片已保存至相册！')
                            }
                        })
                        // console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
                    },
                    fail: function (err) {
                        console.log(err.errMsg);
                    }
                }
            })
        },
        sendMore() {
            IM.sendImage(this.chatInfo.userID).then(res => {

            })
        },
        emoji() {
            // this.$jim.loginOut()
        },
        sendMessage() {
            IM.sendText(this.chatInfo.userID, this.messageInput)
            this.messageInput = ''
        },
        ...mapActions(['UPDATE_CURRENT_CALL', 'UPDATE_CALL_STATE'])
    },
    computed: {
        ...mapGetters(['userID', 'userInfo', 'isSDKReady', 'currentConversation', 'currentMessageList', "conversationList"])
    }
}
</script>

<style lang="scss">
page {
    background-color: #fbfdfe;
    height: 100%;
}

.row {
    margin-bottom: 20px;
    padding: 0 10px;
    width: 100%;
    display: flex;
    align-items: center;

    .message {
        /* 去掉头像所占宽度 */
        max-width: calc(100% - 70px);
        font-size: 14px;
        padding: 10px 20px;

        .message-image {
            max-height: 100%;
            max-width: 100%;
        }
    }

    .patient-card-message {
        .card-title {
            .uni-icons {
                margin: 0 4px;
            }
        }

        .card-content {
            view {
                margin-top: 5px;
            }
        }
    }

    .link {
        text-decoration: underline;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 10px;
    }
}

.time-row {
    justify-content: center;
    padding: 20px;
    color: #383838;
    font-size: 14px;
}

.doctor-row {
    justify-content: flex-start;

    .message {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.04);
        border-radius: 3px 12px 3px 12px;
        color: #444444;

        .image-tips {
            color: $base-color;
            display: flex;
            align-items: center;
        }
    }
}

.user-row {
    justify-content: flex-end;

    .message {
        background: $base-color;
        box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.14);
        border-radius: 12px 3px 12px 3px;
        color: white;

        .image-tips {
            color: white;
            display: flex;
            align-items: center;
        }
    }
}

.bottom-handle {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 10px;
    background-color: white;
    box-shadow: 0 0 12px #efefef;

    .little {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 50px;
        padding: 5px 0;

        .input-box {
            flex: 1;
            background-color: white;
            width: 82%;
            border-radius: 2px;
            margin-right: 14px;

            .input {
                box-sizing: content-box;
                padding: 5px 0 5px 10px;
                width: 100%;
                background-color: #F6F6F6;
                font-size: 18px;
            }
        }

        .button {
            height: 32px;
            padding: 0 4px;
            width: 3rem;
            transition: all 1s linear;
        }

        .icon {
            width: 40px;
        }
    }
}

#bottom-place {
    height: 60px;
}
</style>
