<template>
	<view class="wrap">
		<view class="nav-place"></view>
		<view class="list type">
			<view class="item" v-for="i in 8" :key="i">
				<image src="../../static/home/8.png" mode=""></image>
				<view class="text">中西药品</view>
			</view>
		</view>
		<view class="row-title">家庭常备药</view>
		<view class="list tags">
			<view class="item" v-for="i in 20" :key="i">{{i}}</view>
		</view>
		<view class="row-title">主题馆</view>
		<view class="list subject">
			<view class="item" v-for="i in 4" :key="i">
				<view>儿童安全用药</view>
				<view class="little">换季宝宝必备药</view>
			</view>
		</view>
		<view class="list tabs">
			<view class="tab" :class="tabCurr==1&&'tab-curr'" @click="tabChange(1)">
				<view class="title">儿童</view>
				<view class="little">儿童用药</view>
				<view class="bar"></view>
			</view>
			<view class="line"></view>
			<view class="tab" :class="tabCurr==2&&'tab-curr'" @click="tabChange(2)">
				<view class="title">皮肤</view>
				<view class="little">皮肤科用药</view>
				<view class="bar"></view>
			</view>
			<view class="line"></view>
			<view class="tab" :class="tabCurr==3&&'tab-curr'" @click="tabChange(3)">
				<view class="title">五官</view>
				<view class="little">五官用药</view>
				<view class="bar"></view>
			</view>
			<view class="line"></view>
			<view class="tab" :class="tabCurr==4&&'tab-curr'" @click="tabChange(4)">
				<view class="title">骨科</view>
				<view class="little">关节用药</view>
				<view class="bar"></view>
			</view>
		</view>
		<view class="list bottom">
			<view class="item" v-for="i in 6" :key="i">
				<image src="../../static/med.png" mode=""></image>
				<view class="title name">汤臣倍健 牛初乳加钙咀嚼片</view>
				<view class="little-title brief">儿童 青少年钙片淡淡奶香味</view>
				<view class="bottom-row">
					<view class="price">
						<view class="title">994</view>
						<view class="little-title">1200</view>
					</view>
					<uni-icons type="plus-filled" class="icon"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurr: 1,
			};
		},
		mounted() {
			
			// #ifdef APP-PLUS  
			// var webView = this.$mp.page.$getAppWebview();  
			// console.log(this.$mp.page.$getAppWebview());
			
			// 修改buttons  
			// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
			// webView.setTitleNViewButtonStyle(0, {  
			//     text: 'hello',  
			// });  
			
			// for(let i in webView){
			// 	console.log(i)
			// }
			 // webView.setTitleNViewBackButtonStyles({
				//  background:'red'
			 // })
			
			// #endif
			
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'./search'
			})
		},
		methods: {
			tabChange(index) {
				this.tabCurr = index
			}
		}
	}
</script>

<style lang="scss">
	page,
	.wrap {
		width: 100%;
	}

	.nav-place {
		background-color: $base-color;
	}

	.list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	.type {
		padding: 20px 0;

		.item {
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 14px;

			image {
				height: 60px;
				width: 60px;
			}
		}
	}

	.tags {
		.item {
			border-radius: 6px;
			padding: 4px 10px;
			border: 1px solid rgba(243, 243, 243, 1);
			margin: 0 10px 20px;
			color: #333333;
			font-size: 14px;
		}
	}

	.subject {
		justify-content: space-between;

		.item {
			width: 49%;
			height: 80px;
			border-radius: 4px;
			background-color: #f2f5fa;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 16px;
			font-weight: bold;
			padding: 10px;
			margin-bottom: 8px;

			.little {
				font-size: 14px;
				color: #82868C;
				font-weight: initial;
			}
		}
	}

	.tabs {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		align-items: center;

		.line {
			width: 1px;
			height: 30px;
			background-color: rgba(235, 235, 235, 1);
		}

		.tab {
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all .1s linear;

			.title {
				font-size: 16px;
				font-weight: bold;
			}

			.little {
				padding-top: 10px;
				font-size: 13px;
				color: #6C6C6C;
				transition: all .1s linear;
			}

			.bar {
				width: 24px;
				height: 3px;
				margin-top: 14px;
				transition: all .1s linear;
			}
		}

		.tab-curr {
			color: $base-color;

			.little {
				color: $base-color;
			}

			.bar {
				background-color: $base-color;
			}
		}

	}

	.bottom {
		background:rgba(242,245,250,1);
		padding: 20px;
		justify-content: space-between;
		.item {
			margin-bottom: 8px;
			background-color: white;
			width: 49%;
			border-radius: 4px;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			box-shadow: 0 0 2px #eeeeee;

			image {
				width: 100%;
				height: 40vw;
			}
			.name,.brief{
				padding: 4px 0;
				width: 90%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			.bottom-row {
				width: 90%;
				padding: 6px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.price{
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.title {
					color: #F71A1A;
					padding-right: 10px;
				}

				.little-title {
					text-decoration: line-through;
				}
			}
		}

		.icon {
			color: $base-color !important;
		}
	}


	
</style>
