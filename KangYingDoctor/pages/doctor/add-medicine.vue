<template>
	<view>
		<view class="search-box">
			<view class="input-box">
				<uni-icons type="search" size="22" color="#C9C9C9"></uni-icons>
				<input type="text" value="" placeholder="搜索药品" />
				<uni-icons type="mic-filled" size="22" color="#C9C9C9"></uni-icons>
			</view>
		</view>
		<scroll-view scroll-y="true" class="scroll-left">
			<view v-for="(item,index) in firstList" 
			:key="index" class="item " 
			:class="currIndex==index&&'item-checked'"
			 @click="clickFirst(item,index)">
				<view class="text">圣诞节案例三等奖可撒旦</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="scroll-right">
			<uni-collapse accordion="true">
				<uni-collapse-item title="标题文字" :showAnimation="true" class="item" v-for="i in 20" :key='i'>
					<view class="item-content" v-for="i in 4" :key='i'>
						<view class="left">
							<view class="name">少时诵诗书是所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所</view>
							<view class="bottom-row">
								<view class="norm">规格：30片/瓶</view>
								<view class="little-title">查看说明</view>
							</view>
						</view>
						<uni-icons type="plus-filled" size="24" class="icon"></uni-icons>
					</view>
					
				</uni-collapse-item>
				
			</uni-collapse>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				firstList:[1,2,3,4,5,6,1,5,6],
				currIndex:0
			};
		},
		methods:{
			clickFirst(item,index){
				this.currIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		position: fixed;
		width: 100%;
		padding: 18px 20px;
		background-color: $base-color;
		box-shadow: 0px 8px 21px 0px rgba(94, 182, 170, 0.2);
		z-index: 1;

		.input-box {
			width: 100%;
			height: 44px;
			border-radius: 25px;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;

			input {
				width: 100%;
				padding-left: 10px;
			}
		}
	}

	.scroll-left,
	.scroll-right {}

	.scroll-left {
		height: 100vh;
		padding-top: 80px;
		width: 30%;
		float: left;
		background-color: #f6fafd;

		.item {
			height: 50px;
			width: 100%;
			padding: 0 12px;
			display: flex;
			align-items: center;
			transition: all .1s linear;

			.text {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 14px;
				color: #2C2B2B;
			}
		}

		.item:active {
			opacity: .7;
		}

		.item-checked {
			background-color: white;
			position: relative;
		}

		.item-checked:after {
			content: '';
			width: 4px;
			height: 20px;
			background-color: $base-color;
			position: absolute;
			left: 0;
			margin-top: 1px;
			background: $base-color;
			box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
		}
	}

	.scroll-right {
		height: 100vh;
		padding-top: 80px;
		width: 70%;
		float: right;

		.item {
			border-bottom: 1px solid #F8F8F8;
			
			
			.item-content{
				padding: 10px 10px ;
				font-size: 14px;
				height: 70px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #e5e5e5;
				.left{
					display: flex;flex-direction: column;
					justify-content: space-around;
					height: 100%;
					.name{
						width: 55vw;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.bottom-row{
						display: flex;
						justify-content: space-between;
					}
				}
				.icon{
					color: $base-color!important;
				}
				
						
			}
			.item-content:first-of-type{
				border-top: 1px solid #e5e5e5;
			}
			.item-content:last-of-type{
				border: none;
			}
		}

	}
</style>
