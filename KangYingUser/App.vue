<script>
import {
    request_userInfo,
    request_version,
    request_clearToken,
    request_getUserSig
} from './common/https.js'
import {
    saveLoginMessage,
    readLoginMessage
} from 'common/util.js'
import {
    mapGetters,
    mapActions
} from 'vuex'

import IM from './common/im.js'

let tim = IM.tim
let TIM = IM.TIM

let userIdHead = 'u_' // userId前缀，用户端为u_，医生端为d_

export default {
    globalData: {
        verifyCodeCountDown: 0,
        registerMessage: {
            mobile: '',
            userName: '',
            idcard: '',
            sex: '',
            verifyCode: '',
            password: '',
            confirmPassword: ''
        },
        tempOrderGoods: [], // 在购物车点击结算时，临时保存商品信息
        tempOrderAddress: null, // 选择地址时用到 {}
    },
    data() {
        return {
            hasHide: false,
            onCalling: false,
        }
    },
    onPullDownRefresh() {
        setTimeout(() => {
            uni.stopPullDownRefresh()
        }, 500)
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
        },
        REMOTE_CALL_STATE(state) {
            // console.log('REMOTE_CALL_STATE:====', state)
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
                uni.navigateTo({
                    url: '/pages/doctor/chat-list'
                })
            })
        })

        // 检查更新
        this.updateApp()

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
    onShow() {
        this.hasHide = false

        // setInterval(()=>{
        // 	// #ifdef APP-PLUS
        // 	var webView = this.$mp.page.$getAppWebview();

        // 	// 修改buttons
        // 	// index: 按钮索引, style {WebviewTitleNViewButtonStyles }
        // 	webView.setTitleNViewButtonStyle(0, {
        // 	    redDot: STATUS,
        // 	});
        // 	STATUS = !STATUS
        // 	// #endif
        // },1000)
    },
    onHide: function () {
        this.hasHide = true
        console.log('App Hide')
    },
    methods: {
        // 根据token获取用户信息
        login() {
            return new Promise((resolve) => {
                const message = readLoginMessage(uni)
                if (message.token) {
                    request_userInfo({
                        uni,
                        token: message.token,
                        data: {}
                    }).then(res => {
                        if (res.code === 0) {
                            // vuex存储临时登录状态
                            this.LOGIN(res.data)
                        } else {
                            // token失效等情况
                            this.$api.msg(res.err)
                        }
                        setTimeout(() => {
                            resolve(true)
                        })
                    })
                }
            })
        },
        // 退出登录
        logout() {
            saveLoginMessage(uni, {})
            request_clearToken()
            this.LOGOUT()
            uni.switchTab({
                url: '/pages/index/index'
            })
        },
        getQuery(variable) {
            const query = window.location.search.substring(1);
            const vars = query.split("&");
            for (let i = 0; i < vars.length; i++) {
                const pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return false
        },
        updateApp() {
            uni.getSystemInfo({
                success: (res) => {
                    if (res.platform == "android") {
                        request_version({
                            uni
                        }).then(res => {
                            if (res.code === 0) {
                                plus.runtime.getProperty(plus.runtime.appid, (inf) => {
                                    if (res.data.version_code > inf.versionCode) {
                                        uni.showModal({
                                            title: '检测到有新版本，是否更新？',
                                            content: res.data.version_desc,
                                            success(modal) {
                                                if (modal.confirm) {
                                                    plus.runtime.openURL(res.data.apk_link)
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                }
            })
        },
        ...mapActions(['LOGIN', 'LOGOUT', 'UPDATE_CALL_STATE'])
    },
    computed: {
        ...mapGetters(['hasLogin', 'userInfo', 'CALL_STATE', 'TIM', 'tim'])
    }
}
</script>

<style lang="scss">
// @import url("//at.alicdn.com/t/font_1852111_3ce9eljus1w.css");

/* 每个页面公共css */
*,
page,
view,
input,
button {
    box-sizing: border-box;
}

.no-data {
    display: flex;
    justify-content: center;
    padding: 30px;
    font-size: 14px;
    color: #cccccc;
    width: 100%;
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
}

.row-title::before {
    content: '';
    width: 4px;
    height: 20px;
    // background-color: red;
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
</style>
