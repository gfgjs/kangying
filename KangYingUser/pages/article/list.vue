<template>
	<view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="bottom-banner" v-for="item in bottomBanner" v-bind:key="item.id" 
		:style="`background: url(${item.background});`">
			<view class="mask" @click="navTo('/pages/article/article')">
				<image src="../../static/home/3.png" mode=""></image>
				<view>
					{{item.content}}
				</view>
				<view class="doctor">
					<image :src="item.doctorImg"></image>
					<view class="">
						{{item.doctorText}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bottomBanner: [{
						id: 1,
						background: '../../static/home/23.png',
						doctorImg: '../../static/home/15.png',
						content: '【科普】有些隔夜饭菜不致癌？真正致癌的食物到底有哪些',
						doctorText: '戴医生 上海长江医院'
					},
					{
						id: 2,
						background: '../../static/home/10.png',
						doctorImg: '../../static/home/15.png',
						content: '【科普】夏季来临，有哪些搭配的茶是清热去火气的',
						doctorText: '戴医生 上海长江医院'
					}
				]
			};
		},
		methods:{
			navTo(url){
				uni.navigateTo({
					url
				})
			}
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
