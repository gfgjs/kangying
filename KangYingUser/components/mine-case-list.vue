<template>

	<view class="wrap choose">
		<view class="" v-if="0">
			<view class="row row-title">就诊人信息</view>
			<radio-group>
				<label v-for="i in 10" :key='i' class="row person">
					<view>患者姓名：张大伟</view>
					<radio></radio>
				</label>
			</radio-group>
			<view class="button">
				下一步，身份验证
			</view>
		</view>
		<view class="content " v-if="1">
			<view class="row row-title">
				<view class="left">
					就诊人信息：张**
					<uni-icons type="arrowdown"></uni-icons>
				</view>
				<view class="right">筛选</view>
			</view>
			<view class="item" v-for="(item,index) in list" :key='index'>
				<view class="left">
					<view class="circle box-shadow">
						<view class="dot"></view>
					</view>
					<!-- <view class="v-line"></view> -->
				</view>
				<view class="right box-shadow">
					<view class="row title">{{formatDate(item.create_time)}} {{item.dept}}</view>
					<view class="row little-title">诊断：</view>
					<view class="row little-title">
						检查报告：
						<view class="buttons">
							<view class="button">血常规报告</view>
							<view class="button">尿常规报告</view>
						</view>
					</view>
					<view class="row little-title">
						电子处方：
						<view class="buttons">
							<view class="button">血常规报告</view>
						</view>
					</view>
					<view class="row little-title">
						{{item.d_name}}大夫 创建
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		formatDate,
		formatMinute
	} from '@/common/util.js'
	export default {
		data() {
			return {
				formatDate,
				formatMinute
			};
		},
		props: ['list'],
		mounted() {
			console.log(222);
			console.log(this.list);
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
		background-color: white;
		padding-bottom: 96px;

		.choose {
			.row {
				border-bottom: solid 1px #F8F5F5;
			}

			.person {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10px 20px;
				font-size: 16px;

				radio {
					margin: 20px;
				}

			}

			.button {
				width: 200px;
				position: fixed;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 18px;
			}

		}

		.content {
			.row {
				display: flex;
				justify-content: space-between;
			}

			.row-title {
				.right {
					font-weight: 400;
				}
			}

			.item {
				display: flex;
				justify-content: space-between;
				margin-top: 30px;
				border-radius: 4px;

				.left {
					width: 10%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;

					.circle {
						width: 16px;
						height: 16px;
						background: rgba(243, 243, 243, .8);
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 10px;

						.dot {
							width: 7px;
							height: 7px;
							background: $base-color;
							border-radius: 50%;
						}
					}

					.v-line {
						width: 1px;
						height: 90%;
						background: rgba(243, 243, 243, 1);
					}

				}

				.right {
					width: 90%;
					padding: 0 20px;
					margin-right: 10px;

					.title {
						font-weight: 600;
						color: #444444;
						font-size: 15px;
					}

					.little-title {
						color: #2A2A2A;
					}

					.row {
						padding: 10px 0;
						width: 100%;
						display: flex;
						justify-content: space-between;
						width: 100%;
						align-items: center;
					}
				}

				.box-shadow {
					box-shadow: 0 0 12px #efefef;
				}

				.buttons {
					display: flex;

					.button {
						width: 100px;
						border-radius: 18px;
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
