<template>
    <view>
        <chat ref="chat" v-if="chatInfo" @moreHandle="moreHandle" :initChatInfo="chatInfo"></chat>
        <uni-popup ref="moreHandle">
            <view class="more-handle">
                <view class="row" @click="moreClick('/pages/doctor/elec-case')">
                    <view class="left">
                        填写病例
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="moreClick('/pages/doctor/prescription')">
                    <view class="left">
                        电子处方
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="moreClick('/pages/doctor/patient')">
                    <view class="left">
                        查看患者
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <!--        <view class="row" @click="$emit('telephone','audio')">-->
                <!--            <view class="left">-->
                <!--                语音通话-->
                <!--            </view>-->
                <!--            <uni-icons type="arrowright"></uni-icons>-->
                <!--        </view>-->
                <view class="row" @click="telephone('video')">
                    <view class="left">
                        视频通话
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="finishChat">
                    <view class="left">
                        结束问诊
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import chat from "./chat";
import {request_getUserLast, request_recordNotice} from "../../common/https";
import IM from '../../common/im'
import {mapGetters} from 'vuex'

export default {
    name: 'chat-view',
    components: {chat},
    data() {
        return {
            chatInfo: null,
            record_id: null,
            targetUserID: ''
        }
    },
    computed:{
        ...mapGetters(['currentConversation'])
    },
    onLoad(e) {
        e.userID = e.userID || (e.conversationID.split('C2C')[1])
        this.chatInfo = e
        
        this.targetUserID = e.userID
        request_getUserLast({
            data: {user_id: this.targetUserID.split('_')[1]},
            noLoading: true
        }).then(res => {
            this.record_id = res.data
        })
    },
    onPullDownRefresh() {
        this.$refs.chat.pullDownRefresh()
    },
    onReachBottom() {
        this.$refs.chat.reachBottom()
    },
    methods: {
        finishChat() {
            this.$refs.moreHandle.close()
            uni.showModal({
                title: '提示',
                content: '确定要结束问诊吗？',
                success: e => {
                    if (e.confirm) {
                        IM.sendText(this.targetUserID,'问诊已结束，感谢您的使用！')
                        this.changeRecordStatus(2)
                    }
                }
            })
        },
        changeRecordStatus(status) {
            request_recordNotice({
                data: {
                    record_id: this.record_id,
                    status
                }
            }).then(res => {
                if (res.code === 0) {
                    // this.targetInfo.status = res.data
                }
            })
        },
        moreClick(target) {
            this.$pageTo({
                url: target,
                options: {
                    record_id: this.record_id,
                    targetUserID: this.targetUserID
                }
            })
            this.$refs.moreHandle.close()
        },
        telephone(type) {
            this.$refs.moreHandle.close()
            this.$refs.chat.telephone(type)
        },
        moreHandle(type) {
            this.$refs.moreHandle[type]()
        }
    }
}
</script>

<style lang="scss">

.more-handle {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;

    .row {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .left {
            display: flex;
            align-items: center;
            font-size: 16px;

            image {
                width: 31px;
                height: 31px;
                margin-right: 10px;
            }
        }
    }
}
</style>
