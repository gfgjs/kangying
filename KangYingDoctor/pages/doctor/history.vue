<template>
    <view>
        <view v-for="(item,index) in messageList" :key='index'>
            <!--距离上一条消息间隔超过10分钟则显示本条消息的时间-->
            <view class="row time-row"
                  v-if="item&&index>0&&(item.time-messageList[index-1].time>600000)">
                {{ formatDate(item.time) }} {{ formatMinute(item.time) }}
            </view>
            <view class="row"
                  v-if="item"
                  :class="item.from === chatInfo.userID?'doctor-row':'user-row'">
                <!--对方头像-->
                <image class="avatar" v-if="item.from === chatInfo.userID" :src="chatInfo.avatar"
                       mode=""></image>

                <!--普通文字消息-->
                <view class="message" v-if="item.payload.text">
                    {{ item.payload.text }}
                </view>

                <!--音视频通话消息-->
                <view class="message" v-if="item.payload.description==='telephone'">
                    {{ item.payload.data }}
                </view>

                <!--图片消息-->
                <view class="message" v-if="item.payload.description==='image'">
                    <image class="message-image" :src="item.payload.data" @click="viewImage([item.payload.data])"
                           mode="widthFix"></image>
                </view>

                <!--链接消息 页面内跳转-->
                <view class="message patient-card-message"
                      v-if="item.payload.description==='PAGE_LINK'">
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
                      v-if="item.payload.description==='patientCard'">
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
                </view>

                <!--应用内页面跳转，如跳转到电子处方-->
                <view class="message link" v-if="item.payload.description==='page'"
                      @click="$pageTo(JSON.parse(item.payload.extension))">
                    {{ item.payload.data }}
                </view>
                <!--本人头像-->
                <image class="avatar" style="margin-left: 4px;" v-if="item.from !== chatInfo.userID"
                       :src="userInfo.avatar" mode=""></image>
            </view>
        </view>

    </view>
</template>

<script>
import {mapGetters} from 'vuex'
import {request_getMsg, request_getConversation} from '../../common/https'
import IM from "../../common/im"
import {formatMinute, formatDate} from '../../common/util'

export default {
    data() {
        return {
            messageList: [],
            page: 1,
            page_size: 10,
            chatInfo: {},
            formatMinute,
            formatDate
        }
    },
    computed: {
        ...mapGetters(['userID', 'userInfo'])
    },
    onLoad(e) {
        this.chatInfo = e

        this.getMessageList()

        IM.tim.getUserProfile({
            userIDList: [this.chatInfo.userID] // 请注意：即使只拉取一个用户的资料，也需要用数组类型，例如：userIDList: ['user1']
        }).then((imResponse) => {
            const info = imResponse.data[0]
            this.chatInfo = {...this.chatInfo, ...info}
            uni.setNavigationBarTitle({
                title: '与 ' + info.nick + ' 的聊天记录'
            })
        }).catch(function (imError) {
        })
    },
    onPullDownRefresh() {
        this.getMessageList()
        setTimeout(() => {
            uni.stopPullDownRefresh()
        }, 200)
    },
    methods: {
        refresh() {
            this.page = 1
            this.messageList = []
        },
        getMessageList() {
            request_getMsg({
                noLoading: true,
                data: {
                    conversation_id: this.chatInfo.conversationID,
                    user_id: this.userID,
                    page: this.page,
                    page_size: this.page_size
                }
            }).then(res => {
                if (res.code === 0) {
                    if (res.data && res.data.length) {
                        this.page++
                    } else {
                        this.$api.msg('没有更早的消息了')
                        return
                    }
                    const array = res.data.map(item => {
                        item.conversationID = item.conversation_id
                        item.userID = item.user_id

                        item.time = new Date(item.message_time)
                        item.from = item.user_id
                        item.to = item.conversation_id.split('C2C')[1]

                        try {
                            item.payload = JSON.parse(item.payload)
                            return item
                        } catch {
                            return null
                        }
                    })
                    this.messageList.unshift(...(array.reverse()))
                } else {
                    this.$api.msg(res.err)
                }
            })
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
        isJsonStr(str) {
            try {
                JSON.parse(str)
                return true
            } catch {
                return false
            }
        }
    }
}
</script>

<style lang="scss">
page {
    background-color: #fbfdfe;
    height: 100%;
}

.row {
    margin-top: 10px;
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
        box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.14);
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
        box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.24);
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
</style>
