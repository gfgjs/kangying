<!-- 地址管理 -->
<template>
	<view>
		<radio-group>
			<view class="address-item" v-for="i in 5" :key='i'>
				<view class="row">
					<view>王大伟</view>
					<view>12222341123</view>
				</view>
				<view class="row little-title address-details">
					北京市 东城区 后海南街胡同24号
				</view>
				<view class="line"></view>
				<view class="buttons">
					<radio>设为默认地址</radio>
					<view class="right">
						<view>
							<uni-icons type="compose" size="22"></uni-icons>
							编辑
						</view>
						<view>
							<uni-icons type="trash" size="22"></uni-icons>
							删除
						</view>
					</view>
				</view>
			</view>
		</radio-group>
		<view class="button next">
			下一步
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
	page {
		background-color: $page-color-base;
		padding-bottom: 76px;
	}

	.address-item {
		width: 94vw;
		background-color: white;
		border-radius: 4px;
		margin: 20px auto;
		padding: 14px 0;
		box-shadow: 0 0 2px #eeeeee;

		.row {
			display: flex;
			justify-content: space-between;
			padding: 4px 0;
			padding: 0 14px;
		}

		.address-details {
			padding-top: 14px;
		}

		.line {
			width: 100%;
			height: 1px;
			background-color: #fcfcfc;
			margin: 12px 0;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			font-size: 15px;
			padding: 0 14px 0;

			view {
				display: flex;
				align-items: center;
			}

			.right {
				display: flex;

				view {
					margin-left: 20px;
				}
			}
		}
	}

	.next {
		border-radius: 20px;
		position: fixed;
		bottom: 20px;
		width: 140px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
