<template>
    <view>
        <view class="row-title" style="z-index: 999;">患者信息</view>
        <view class="place"></view>
        <!--		<view v-for="(item,index) in list" :key="index" class="item" @click="toChat(item)">-->
        <!--			<view class="image">-->
        <!--				<image :src="item.user_info.avatar" mode=""></image>-->
        <!--			</view>-->
        <!--			<view class="center">-->
        <!--				<view class="name">-->
        <!--					{{item.p_name}} <view class="little-title">{{formatDate(item.create_time)+' '+formatMinute(item.create_time)}}</view>-->
        <!--				</view>-->
        <!--				<view class="bottom">-->
        <!--					{{item.user_info.gender}} 丨 年龄：{{item.Age}}丨{{item.p_narrate||'无诊断信息'}}-->
        <!--				</view>-->
        <!--			</view>-->
        <!--			<view class="right">-->
        <!--				&lt;!&ndash; 患者复检 &ndash;&gt;-->
        <!--			</view>-->
        <!--		</view>-->
        <!--		<view class="no-data" v-if="!list.length">暂无数据</view>-->

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
</template>

<script>
import {formatDate, formatMinute} from '../../common/util.js'
import {request_recordList} from '../../common/https.js'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            formatDate, formatMinute,
            list: []
        };
    },
    onShow() {
        request_recordList({
            uni,
            noLoading: true, data: {status: 2}
        }).then(res => {
            this.list = res.data || []
        })
    },
    computed: {
        ...mapGetters(['conversationList'])
    },
    methods: {
        toChat(item) {
            this.$pageTo({
                url: '/pages/doctor/chat-view',
                options: {
                    conversationID: item.conversationID,
                    userID:item.userProfile.userID,
                    // record_id:item.id,
                    // im_username:item.user_info.im_username,
                    // p_im_name:item.user_info.im_username,
                    // p_avatar:item.user_info.avatar,
                    // p_gender:item.user_info.gender,
                    // ...item
                }
            })
        }
    }
}
</script>

<style lang="scss">
page {
    padding: 0 20px;

}

.place {
    height: 61px;
}

.row-title {
    // padding-left: 0;
    padding-right: 0;
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 2px #eeeeee;
    left: 0;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F8F8F8;
    padding: 15px 0;

    .image {
        white-space: nowrap;
        width: 50px;
        height: 50px;
        background-color: $base-color;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;

        image {
            width: 100%;
            height: 100%;
        }
    }

    .center {
        width: calc(100% - 130px);

        .name {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            color: #494949;
        }

        .bottom {
            font-size: 14px;
            color: #9E9E9E;
            margin-top: 10px;
        }
    }

    .right {
        width: 60px;
        color: $base-color;
        font-size: 14px;
        margin-left: 10px;
        white-space: nowrap;
    }
}

.image {

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
