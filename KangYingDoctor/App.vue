<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

import {
    readLoginMessage,
    saveLoginMessage
} from './common/util.js'

import {
    request_userInfo,
    request_imInit,
    request_clearToken,
    request_getUserSig
} from './common/https'

import IM from './common/im'

let tim = IM.tim
let TIM = IM.TIM

export default {
    globalData: {
        regMessage: {},
        tempMedicineList: {}, // 医生开出药方时的临时存储
    },
    data() {
        return {
            hasHide: false
        }
    },

    watch: {
        hasLogin(status) {
            // 监听自动登录，true则登录im
            if (status) {
                IM.login(this.userInfo)
            } else {
                IM.logout()
            }
        },
        CALL_STATE(state) {
            if (state === 1) {
                this.$pageTo({
                    url: '/pages/doctor/telephone'
                })
            }
        }
    },
    onLaunch: function () {
        //初始化IM
        IM.init({
            uni,
            request_getUserSig,
            appThis: this
        })
        // 启动时尝试登录获取用户信息
        // 如果失败，则在手机号登录后或手机号注册后再次尝试
        this.login()

        //APP端点击im通知消息进入消息列表，后面改成进入相应聊天页面
        //#ifdef APP-PLUS
        plus.push.addEventListener('click', e => {
            setTimeout(() => {
                if(e.payload){
                    try{
                        const {conversationID} = JSON.parse(e.payload)
                        if(conversationID){
                            this.$pageTo({
                                url:'/pages/doctor/chat-view',
                                options:{
                                    conversationID
                                }
                            })
                        }
                    }catch {
                        uni.navigateTo({
                            url: '/pages/doctor/consulting-desk'
                        })
                    }
                }
            })
        })

        let main = plus.android.runtimeMainActivity();
        //重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast
        plus.nativeUI.toast = (function (str) {
            if (str === '再按一次退出应用') {
                main.moveTaskToBack(false);
                return false;
            } else {
                uni.showToast({
                    title: str,
                    icon: 'none',
                })
            }
        });
        // #endif
    },
    onShow: function () {
        this.hasHide = false
        console.log('App Show')
    },
    onHide: function () {
        this.hasHide = true
        console.log('App Hide');
    },
    methods: {
        login() {
            request_userInfo({
                uni
            }).then(res => {
                if (res.code === 0) {
                    // vuex存储临时登录状态
                    this.LOGIN(res.data)
                } else {
                    // token失效等情况
                    this.$api.msg(res.err)
                }
            })
        },
        // 退出登录
        logout() {
            saveLoginMessage(uni, {})
            request_clearToken()
            this.LOGOUT()
            uni.reLaunch({
                url: '/pages/login/login'
            })
        },
        ...mapActions(['LOGIN', 'LOGOUT','UPDATE_CALL_STATE'])
    },
    computed: {
        ...mapGetters(['hasLogin', 'userInfo','CALL_STATE', 'TIM', 'tim'])
    }
}
</script>


<style lang="scss">
//#ifndef APP-PLUS-NVUE
/* 每个页面公共css */
*,
page,
view,
input,
button {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.no-data {
    display: flex;
    justify-content: center;
    padding: 30px;
    font-size: 14px;
    color: #cccccc;
}

// radio选中的颜色
.uni-radio-input-checked {
    background-color: $base-color !important;
    border-color: $base-color !important;
}

.uni-switch-input-checked {
    background-color: $base-color !important;
    border-color: $base-color !important;
}

// 富文本中的图片最大宽度，防止超出屏幕，需使用document加载此类名
.rich-text-img-width {
    max-width: 100%;
}

.linear-background {
    // background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
    background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
}

.box-shadow {
    box-shadow: 0px 0px 19px 2px rgba(11, 126, 255, 0.1)
}

.price {
    color: #F71A1A;
}

.bold {
    font-weight: bold;
}

.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

/* 顶部标题栏占位高度 */
.nav-place {
    height: var(--status-bar-height);
    padding-top: 44px;
    box-sizing: content-box;
}

.common-place {
    height: 10px;
    background-color: $base-background-color;
}

.foot-place {
    height: 50px;
}

.row-title {
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #444444;
}

.row-title::before {
    content: '';
    width: 4px;
    height: 20px;
    background-color: $base-color;
    position: absolute;
    left: 0;
    background: $base-color;
    box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.title {
    font-weight: bold;
    font-size: 16px;
}

.little-title {
    font-size: 13px;
    color: #5D5D5D;
}

.border-bottom {
    border-bottom: 1px solid #F8F5F5;
}

/* 过渡 */
.slide-fade-enter-active {
    transition: all .1s ease;
}

.slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}

.button {
    background-color: $base-color;
    color: white;
    width: 36vw;
    font-size: 14px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all .1s linear;
    // box-shadow: 0 0 12px rgba(25, 133, 253, .2);
    box-shadow: 0px 0px 19px 1px rgba(112, 216, 201, 0.1);
    // background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
    background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
}

.button-cancel {
    background: rgba(233, 234, 235, 1);
    color: #7C7C7C;
    box-shadow: 0px 0px 19px 1px rgba(233, 234, 235, .4);
}

.button:active {
    opacity: .8;
    // box-shadow: 0 0 2px $base-color;
}

//#endif
</style>
