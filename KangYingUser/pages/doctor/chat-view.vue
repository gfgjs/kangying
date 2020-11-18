<template>
    <view>
        <chat ref="chat" v-if="chatInfo"
              @moreHandle="moreHandle"
              @changePatientCard="changePatientCard"
              @hasMounted="hasMounted"
              :initChatInfo="chatInfo"></chat>
        <uni-popup ref="moreHandle">
            <view class="more-handle">
                <view class="row" @click="moreClick('/pages/doctor/case?tab=0')">
                    <view class="left">
                        查看病例
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="moreClick('/pages/doctor/case?tab=2')">
                    <view class="left">
                        电子处方
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="telephone('video')">
                    <view class="left">
                        视频通话
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
                <view class="row" @click="changePatientCard">
                    <view class="left">
                        切换就诊人
                    </view>
                    <uni-icons type="arrowright"></uni-icons>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import chat from './chat'
import IM from '../../common/im'
import {mapGetters, mapActions} from 'vuex'
import {request_recordAdd} from "../../common/https";
import store from "../../store";

export default {
    name: 'chat-view',
    components: {chat},
    data() {
        return {
            chatInfo: null,
            patientCard: null,
            relation_ships: ['本人', '父母', '配偶', '子女'], // 就诊人关系
        }
    },
    onLoad(e) {
        e.userID = e.userID || (e.conversationID.split('C2C')[1])
        this.chatInfo = e
    },
    onPullDownRefresh() {
        this.$refs.chat.pullDownRefresh()
    },
    onReachBottom() {
        this.$refs.chat.reachBottom()
    },
    onShow() {
        // setTimeout中执行，解决从医生页面进入病历卡已发送但不显示的问题
        setTimeout(()=>this.hasMounted())
    },
    computed: {
        ...mapGetters(["currentPatientCard"])
    },
    methods: {
        hasMounted() {
            if (this.currentPatientCard) {
                const {p_name, mobile, id_card, p_card, relation_ship} = this.currentPatientCard
                IM.sendCustomMessage({
                    data: '请确认当前使用的就诊卡', // String
                    description: 'patientCard', // String
                    extension: JSON.stringify({
                        "患者姓名": p_name,
                        "患者电话": mobile,
                        "身份证号": id_card,
                        "就诊卡号": p_card,
                        "与本人关系": this.relation_ships[relation_ship]
                    })// JSON String
                }, this.chatInfo.userID)

                // 根据就诊卡创建病例，已有未结束则切换为此就诊卡
                request_recordAdd({
                    noLoading: true,
                    data: {
                        p_card_id: this.currentPatientCard.id,
                        doctor_id: this.chatInfo.userID.split('_')[1]
                    }
                }).then(res => {
                    if (res.code === 0) {
                        this.UPDATE_CURRENT_PATIENT_CARD(null)
                    } else {
                        this.$api.msg(res.err)
                    }
                })
            }
        },
        moreClick(target) {
            this.$pageTo({
                url: target
            })
            this.$refs.moreHandle.close()
        },
        telephone(type) {
            this.$refs.moreHandle.close()
            this.$refs.chat.telephone(type)
        },
        moreHandle(type) {
            this.$refs.moreHandle[type]()
        },
        changePatientCard() {
            this.$pageTo({
                url: '/pages/card/list',
                options: {
                    pageFrom: 'chat'
                }
            })
            this.$refs.moreHandle.close()
        },
        ...mapActions(["UPDATE_CURRENT_PATIENT_CARD"])
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
