<template>
	<view>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<view class="row-title">基础体检套餐</view>
		<view class="item" v-for="i in 32" :key='i'>
			<view class="row">
				<view class="title">常规基础体检套餐检查(男) 32项</view>
				<view class="price">￥22.6</view>
			</view>
			<view class="row">
				<view class="tags">
					<view class="tag">脑血流图</view>
					<view class="tag">动脉硬化检测</view>
				</view>
				<view class="button">立即预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.common-place{
		background-color: rgba(247,251,255,1);
	}
	page{
		// padding: 0 20px;
	}
	.item{
		width: calc(100vw - 40px);
		margin: 0 auto;
		padding: 20px 0;
		.row{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 0;
			.title{
				font-weight: 400;
			}
			.price{
				color: $base-color;
			}
			
			.tags{
				display: flex;
				.tag{
					font-size: 12px;
					color: $base-color;
					background:rgba(240,247,255,1);
					border-radius:26px;
					padding: 4px 10px;
					margin-right: 6px;
				}
			}
			.button{
				width: 100px;
			}
		}
		border-top: solid 1px #F8F5F5;
	}
</style>
