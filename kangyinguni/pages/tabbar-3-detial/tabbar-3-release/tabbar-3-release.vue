<template>
    <view class="content" @click="goPage">
        页面 - 发图文
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {
            goPage: () => {
                uni.switchTab({
                    url:'../../../App'
                })
            }
        }
    }
</script>

<style>
    .content {
        text-align: center;
        height: 400upx;
        margin-top: 200upx;
    }
</style>
