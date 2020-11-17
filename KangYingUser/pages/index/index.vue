<template>
    <view id="page-index-index">
        <!-- <view class="nav-place"></view> -->
        <!-- <view class="search-wrap">
            <view class="search">
                <uni-icons type="mic-filled" color="#C9C9C9" size="24"></uni-icons>
                <input type="text" placeholder="找医生、找医院、查疾病">
                <uni-icons type="search" color="#C9C9C9" size="24"></uni-icons>
            </view>
        </view> -->
        <view class="place linear-background"></view>

        <swiper class="swiper banner" indicator-color='rgba(0,0,0,.1)' indicator-active-color='rgba(0,0,0,.6)'
                :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
            <swiper-item>
                <image src="../../static/home/13.png" mode="aspectFill"></image>
            </swiper-item>
            <swiper-item>
                <image src="../../static/home/13.png" mode="aspectFill"></image>
            </swiper-item>
            <swiper-item>
                <image src="../../static/home/13.png" mode="aspectFill"></image>
            </swiper-item>
        </swiper>


        <view class="wrap func-1">
            <view class="top">
                <!-- <view @click="navTo('/pages/doctor/see-the-doctor')">
                    <image src="../../static/home/5.png" mode=""></image>
                    <view>网上看病</view>
                </view> -->
                <view @click="switchTab('/pages/index/online')">
                    <image src="../../static/home/5.png" mode=""></image>
                    <view>网上看病</view>
                </view>
                <view @click="$api.msg('请点击左上角咨询客服')">
                    <image src="../../static/home/6.png" mode=""></image>
                    <view>线下就诊</view>
                </view>
<!--                <view @click="navTo('/pages/test/test')">-->
<!--                    <image src="../../static/home/6.png" mode=""></image>-->
<!--                    <view>线下就诊</view>-->
<!--                </view>-->
                <view @click="navTo('/pages/mall/mall')">
                    <image src="../../static/home/7.png" mode=""></image>
                    <view>快速购药</view>
                </view>
            </view>
            <view class="bottom">
                <view class="item item-1" @click="navTo('/pages/doctor/list')">
                    <view>免费问医生</view>
                    <view class="little">有问题快速问医生</view>
                </view>
                <view class="item item-2" @click="navTo('/pages/doctor/case?tab=0')">
                    <view>云病例</view>
                    <view class="little">随时查看云病例</view>
                </view>
            </view>
        </view>
        <view class="wrap func-2">
            <view class="title">
                <view class="blue"></view>
                <view class="text">健康服务</view>
            </view>
            <view class="list">
                <view class="top">
                    <view class="item" @click="navTo('/pages/login/register')">
                        <view class="left">
                            <view class="big">注册建档</view>
                            <view class="little">在线完成注册建档</view>
                        </view>
                        <image src="../../static/home/22.png" mode="aspectFit"></image>
                    </view>
                    <view class="item" @click="navTo('检查预约')">
                        <view class="left">
                            <view class="big">检查预约</view>
                            <view class="little">在线预约身体检查</view>
                        </view>
                        <image src="../../static/home/20.png" mode="aspectFit"></image>
                    </view>
                </view>
                <view class="top">
                    <view class="item" @click="$pageTo({url:'/pages/doctor/case?tab=0',needLogin:true})">
                        <view class="left">
                            <view class="big">电子病历</view>
                            <view class="little">查看个人电子病历</view>
                        </view>
                        <image src="../../static/home/21.png" mode="aspectFit"></image>
                    </view>
                    <view class="item" @click="navTo('/pages/mine/check-appoint')">
                        <view class="left">
                            <view class="big">体检预约</view>
                            <view class="little">快速预约体检套餐</view>
                        </view>
                        <image src="../../static/home/17.png" mode="aspectFit"></image>
                    </view>
                </view>
            </view>
        </view>
        <view class="wrap func-3">
            <view class="title linear-background">
                <view class="content">特色服务</view>
            </view>
            <view class="list">
                <view class="item" @click="navTo('慢病管理')">
                    <image src="../../static/home/14.png" mode="aspectFit"></image>
                    <view>慢病管理</view>
                </view>
                <view class="item" @click="navTo('特色120')">
                    <image src="../../static/home/11.png" mode="aspectFit"></image>
                    <view>特色120</view>
                </view>
                <view class="item" @click="navTo('远程会诊')">
                    <image src="../../static/home/8.png" mode="aspectFit"></image>
                    <view>远程会诊</view>
                </view>
            </view>
        </view>
        <view class="wrap func-4" @click="navTo('/pages/article/list')">
            <view class="title">
                <view class="left">
                    <view class="blue"></view>
                    <view class="text">健康咨询</view>
                </view>
                <view class="right">
                    更多
                    <image src="../../static/home/4.png" mode="aspectFit"></image>
                </view>
            </view>
        </view>
        <view class="wrap bottom-banner" v-for="item in articleList" v-bind:key="item.id"
              :style="`background: url(${item.article_thumb});`">
            <view class="mask" @click="navToArticle('/pages/article/article',item.id)">
                <image src="../../static/home/3.png" mode=""></image>
                <view>
                    {{ item.article_title }}
                </view>
                <view class="doctor">
                    <image :src="item.header"></image>
                    <view class="">
                        {{ item.doctorText }}
                    </view>
                </view>
            </view>
        </view>

        <uni-popup ref="searchView">
            <scroll-view scroll-y class="search-view">
                <view class="doctor" v-for="(item,index) in searchResult.doctor" @click="viewDoctorHome(item,index)" :key='item.id'>
                    <view class="top">
                        <image :src="item.avatar" mode=""></image>
                        <view class="right">
                            <view class="row">
                                <view class="title">{{item.user_name}}</view>
                                <view class="little-title">{{item.level_name}}</view>
                                <!-- <view class="level">
                                    <uni-icons type="star-filled" color="#FBBB27"></uni-icons>
                                    4.8
                                </view> -->
                            </view>
                            <view class="row little-title">
                                {{item.hospital_name}}丨{{item.dept_name}}
                            </view>
                            <view class="row price-row">
                                <view class="tags">
                                    <view class="doctor-tag" :class="'doctor-tag-'+((ind+1)%2 + 1)" v-for="(i,ind) in item.tags" :key="ind">
                                        <uni-icons class="tag-icon" type="person"></uni-icons>
                                        {{i}}
                                    </view>
                                </view>
                                <view class="price title">
                                    ￥{{item.fee}}
                                </view>
                            </view>
                            <view class="row tags">
                                <view class="illness-tag" v-for="i in item.speciality" :key='i'>{{i}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="bottom">
                        <view class="left">
                            <view class="count">
                                <view class="title">{{item.reply_num}}</view>
                                <view class="little-title">总回复</view>
                            </view>
                            <view class="count">
                                <view class="title">{{item.waiting_num}}</view>
                                <view class="little-title">候诊人数</view>
                            </view>
                        </view>
                        <view class="button" @click.stop="chatWithDoctor(item,index)">立即咨询</view>
                    </view>
                </view>
                <view class="more-tips" @click="viewMore('doctor')">去搜索医生</view>
                <productList :list="searchResult.medicine||[]"></productList>
                <view class="more-tips" @click="viewMore('medicine')">去搜索药品</view>
                <view class="more-tips" @click="back()">返回</view>

            </scroll-view>
        </uni-popup>
    </view>
</template>

<script>
import {
    request_articleList
} from '../../common/https.js'
import {request_searchHome} from "../../common/https"
import productList from '../../components/product-list'


export default {
    components:{
        productList
    },
    data() {
        return {
            // 顶部轮播图
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 400,
            // 底部文章列表
            articleList: [],
            // 顶部搜索
            searchViewStatus: false,
            searchResult: {},
            searchText:'西'
        }
    },
    onNavigationBarButtonTap(e) {
        if (e.index === 0) {
            this.$pageTo({
                needLogin: true,
                url: '/pages/doctor/chat-list'
            })
        } else if (e.index === 1) {
            this.$pageTo({
                url: '/pages/doctor/webview'
            })
        }
    },
    onLoad() {
        // #ifdef APP-PLUS
        // let main = plus.android.runtimeMainActivity();
        // //为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台
        // plus.runtime.quit = function () {
        //     main.moveTaskToBack(false);
        // };
        // #endif
    },
    onShow() {
        request_articleList({uni, data: {page: 1, page_size: 2}}).then(res => {
            if (res.code === 0) {
                this.articleList = res.data
            }
        })

        // this.searchViewStatus = true
        // setTimeout(()=>{
        //     this.$refs.searchView.open()
        // })
        // uni.hideTabBar() //隐藏tab
        // request_searchHome({uni, data: {keyword: '西'}}).then(res => {
        //     console.log(JSON.parse(JSON.stringify(res.data.doctor[0])))
        //     console.log(JSON.parse(JSON.stringify(res.data.medicine[0])))
        //     this.searchResult = res.data
        // })
    },
    onNavigationBarSearchInputConfirmed(e) {
        this.searchViewStatus = true
        this.searchText = e.text
        this.$refs.searchView.open()

        uni.hideTabBar() //隐藏tab
        request_searchHome({uni, data: {keyword: e.text}}).then(res => {
            this.searchResult = res.data
            console.log(res)
        })
    },
    onPullDownRefresh() {
        setTimeout(() => {
            uni.stopPullDownRefresh()
        }, 500)
    },
    onBackPress(options) {
        if (options.from === 'navigateBack') {
            return false
        }
        if (this.searchViewStatus) {
            this.$refs.searchView.close()
            this.searchViewStatus = false
            uni.showTabBar() //显示tab

            return true
        }
        return false
    },
    methods: {
        back(){
            this.searchViewStatus = false
            this.$refs.searchView.close()
            uni.showTabBar() //显示tab
        },
        viewMore(type){
            this.searchViewStatus = false
            this.$refs.searchView.close()
            uni.showTabBar() //显示tab

            if(type==='doctor'){
                this.$pageTo({
                    url:'/pages/doctor/list',
                    options:{text:this.searchText}
                })
            }else{
                this.$pageTo({
                    url:'/pages/mall/mall',
                    options:{text:this.searchText}
                })
            }
            this.searchText = ''
        },
        clickResultItem(e) {
            this.searchViewStatus = false
            this.$refs.searchView.close()
            uni.showTabBar() //显示tab
        },
        navToArticle(url, id) {
            this.$pageTo({
                url: url + '?id=' + id
            })
        },
        navTo(url) {
            console.log(url);
            uni.navigateTo({
                url
            })
        },
        switchTab(url) {
            uni.switchTab({
                url
            })
        }
    }
}
</script>

<style lang="scss">
page {
    padding-bottom: 10px;
}

.nav-place {
    background-color: $base-color;
}

.place {
    height: calc(70px + 44px);
    // #ifdef APP-PLUS
    height: calc(70px + 44px + 44px);
    // #endif
    background-color: $base-color;
    box-shadow: 0px 6px 20px 0px $base-color;
}

.search-wrap {
    width: 100vw;
    background-color: $base-color;
    height: 80px;
    position: relative;

    .search {
        width: 92vw;
        height: 42px;
        position: absolute;
        left: 4vw;
        top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background: rgba(255, 255, 255, 1);
        border-radius: 43px;

        image {
            height: 24px;
            width: 22px;
        }
    }
}

.banner {
    width: 100vw;
    height: 100px;
    // background-color: red;
    margin: -50px 0 0 0;

    image {
        margin-left: 2%;
        width: 96%;
        height: 100px;
        border-radius: 6px;

    }
}

.wrap {
    width: 96%;
    background-color: white;
    margin: 10px 0 0 2%;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 8px #f1f1f1;
}

.func-1 {
    .top {
        display: flex;
        justify-content: space-between;
        // padding: 0 20px;

        view {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #272727;
            font-size: .7rem;

            image {
                width: 80px;
                height: 80px;
            }
        }
    }

    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 25px 0 0 0;

        .item-1 {
            background: url(../../static/home/1.png) no-repeat;
        }

        .item-2 {
            background: url(../../static/home/2.png) no-repeat;
        }

        .item {
            width: 48%;
            height: 80px;
            background-size: 100% 100%;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 10px 0 10px 10px;
            color: #2C2C2C;

            .little {
                font-size: 12px;
                color: #474747;
            }
        }


        image {
            width: 45%;
            height: 100px;
        }
    }

}

.func-2 {
    .title {
        display: flex;
        align-items: center;
        color: #0C0C0C;
        font-weight: bold;

        .blue {
            height: 20px;
            width: 4px;
            background-color: $base-color;
            border-radius: 4px;
        }

        .text {
            margin-left: 6px;
        }
    }

    .list {
        font-size: 12px;

        .top {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;

            .item {
                background-color: #E5F3FF;
                border-radius: 5px;
                display: flex;
                justify-content: space-around;
                width: 49%;

                .big {
                    font-size: 16px;
                    font-weight: bold;
                }

                .little {
                    color: #4E4E4E;
                }

                .left {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 10px 0;
                }
            }

            display: flex;

            image {
                width: 40px;
                height: 80px;
            }
        }
    }
}

.func-3 {
    padding: 0;
    overflow: hidden;

    .title {
        height: 50px;
        width: 100%;
        // background-color: red;

        background-size: 100%;
        // background: linear-gradient(90deg, rgba(48, 138, 252, 1), rgba(18, 116, 253, 1));
        color: white;

        .content {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: url(../../static/home/18.png) no-repeat;
            background-size: 80% 30%;
            background-position: 50%;
            font-size: 16px;
        }
    }

    .list {
        display: flex;
        justify-content: space-around;
        padding: 10px;

        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 15px;
            color: #272727;

            image {
                width: 70px;
                height: 70px;
            }
        }
    }
}

.func-4 {

    background-color: rgba(0, 0, 0, 0);

    .title {
        display: flex;
        justify-content: space-between;


        .left {
            color: #0C0C0C;
            font-weight: bold;
            display: flex;
            align-items: center;

            .blue {
                height: 20px;
                width: 4px;
                background-color: $base-color;
                border-radius: 4px;
            }

            .text {
                margin-left: 6px;
            }
        }

        .right {
            display: flex;
            align-items: center;
            color: #A5A5A5;
            font-size: 14px;

            image {
                width: 14px;
                height: 14px;
            }
        }

    }

}

.bottom-banner {
    padding: 0;
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;

    height: 42vw;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    .mask {
        background: rgba(0, 0, 0, 0.45);
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 10px 20px 0 20px;

        .doctor {
            color: #FFFFFF;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            image {
                width: 36px;
                height: 36px;
            }
        }
    }

    image {
        width: 12px;
        height: 12px;
    }
}


.search-view {
    background-color: white;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    padding-top: calc(44px);
    // #ifdef APP-PLUS
    padding-top: calc(44px + 44px);
    // #endif
    padding-left: 15px;
    padding-right: 15px;
    .more-tips{
        width: 100%;
        text-align: center;
        padding: 15px 0;
        color: $base-color;
        text-decoration: underline;
    }
    .doctor {
        margin: 20px auto;
        width: calc(100vw - 20px);
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 0 2px #eeeeee;
        padding: 10px 20px;

        .top {
            border-bottom: solid 1px #FBFBFB;
            display: flex;
            width: 100%;
            padding-bottom: 10px;

            .right {
                width: calc(100% - 60px);
                padding-left: 10px;
            }

            .level {
                background-color: #FFF8EB;
                border-radius: 20px;
                padding: 0 6px;
                color: #FBBB27;
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: bold;
            }

            .price {
                font-size: 20px;
            }

            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 6px 0;
            }

            image {
                width: 60px;
                height: 60px;
                margin-top: 10px;
                border-radius: 50%;

            }

            .tags {
                display: flex;
                justify-content: flex-start;

                view {
                    font-size: 14px;
                    margin-right: 6px;
                }

                .doctor-tag {
                    border-radius: 10px;
                    padding: 2px 6px;
                }

                .doctor-tag-1 {
                    background: rgba(235, 239, 253, 1);
                    border-radius: 19px;
                    color: #4EA6FF;

                    .uni-icons {
                        color: #4EA6FF !important;
                    }
                }

                .doctor-tag-2 {
                    background: rgba(253, 245, 241, 1);
                    border-radius: 19px;
                    color: #FF5D69;

                    .uni-icons {
                        color: #FF5D69 !important;
                    }
                }
            }

            .illness-tag {
                background: rgba(248, 251, 254, 1);
                border-radius: 3px;
                padding: 2px 6px;
            }

            .price-row {
                justify-content: space-between;
                width: 100%;
            }
        }

        .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;

            .button {
                border-radius: 18px;
            }

            .left {
                display: flex;

                .count {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    view {
                        padding: 2px 10px;
                    }
                }
            }
        }
    }
}


</style>
