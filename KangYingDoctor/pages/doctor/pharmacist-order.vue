<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" 
				:key="item" 
				@click="clickTab(item,index)"
				:class="index==currIndex&&'item-checked'"
				>待确认</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="order-item">
			<view class="item-row border-bottom title">2020-05-25  14:29</view>
			<view class="item-row border-bottom">
				<view class="title">处方编号</view>
				<view class="right">1470215</view>
			</view>
			<view class="item-row border-bottom">
				<view class="title">患者姓名</view>
				<view class="right">1470215</view>
			</view>
			<view class="item-row">
				<view class="title">审批</view>
				<radio-group name="" class="right">
					<label>
						<radio /><text>通过</text>
						<radio class="right"/><text>驳回</text>
					</label>
				</radio-group>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currIndex:0,
				tabs:[1,2]
			};
		},
		methods:{
			clickTab(item,index){
				this.currIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: $base-background-color;
	}
	.header-place{
		height: 64px;
	}
	.header {
		position: fixed;
		width: 100%;
		padding: 10px 0;
		height: 64px;
		background-color: $base-color;
		.buttons-box{
			display: flex;
			height: 44px;
			// width: 50%;
			border: 1px solid white;
			border-radius: 4px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			
			.item{
				width: 30vw;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				color: white;
				transition: all linear .1s;
				// border: 1px solid white;
			}
			.item-checked{
				color: $base-color;
				background-color: white;
			}
		}
	}
	.order-item{
		background-color: white;
		padding:0 20px;
		font-size: 14px;
		color: #646464;
		margin-top: 10px;
		.title{
			font-size: 14px;
			color: #000000;
			min-width: 4rem;
		}
		.item-row{
			display: flex;
			height: 54px;
			align-items: center;
			.right{
				margin-left: 10px;
				label{
					display: flex;
					align-items: center;
				}
			}
		}
		.border-bottom{
			border-bottom: solid 1px #FBFBFB;
		}
	}

</style>
