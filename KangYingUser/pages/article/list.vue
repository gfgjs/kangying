<template>
	<view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="wrap bottom-banner" v-for="item in articleList" v-bind:key="item.id"
		 :style="`background: url(${item.article_thumb});`">
			<view class="mask" @click="navToArticle('/pages/article/article',item.id)">
				<image src="../../static/home/3.png" mode=""></image>
				<view>
					{{item.article_title}}
				</view>
				<view class="doctor">
					<image :src="item.header"></image>
					<view class="">
						{{item.doctorText}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request_articleList
	} from '../../common/https.js'
	export default {
		data() {
			return {
				articleList: [],
				page: 1,
			};
		},
		onLoad() {
			this.uploadData()
		},
		onReachBottom(e) {
			this.uploadData()
		},
		onPullDownRefresh() {
			this.page = 1
			this.articleList = []
			this.uploadData()
		},
		methods: {
			uploadData() {
				request_articleList({
					uni,
					data: {
						page: this.page,
						page_size: 10
					}
				}).then(res => {
					uni.stopPullDownRefresh()
					if (res.code === 0) {
						if (res.data.length) {
							this.articleList = this.articleList.concat(res.data)
							this.page++
						} else {
							this.$api.msg('没有更多数据')
						}
					}
				})
			},
			navToArticle(url, id) {
				this.$pageTo({
					url: url + '?id=' + id
				})
			},
		}
	}
</script>

<style lang="scss">
	.bottom-banner {
		height: 42vw;
		width: 94vw;
		margin: 0 auto 20px;
		padding: 0;
		border-radius: 4px;
		background-repeat: no-repeat !important;
		background-size: 100% 100% !important;

		overflow: hidden;

		// display: flex;
		// flex-direction: column;

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
</style>
