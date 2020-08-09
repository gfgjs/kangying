<template>
	<view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="row-title">个人信息</view>
		<view class="content">
			<view class="row">
				<view class="title">与您的关系</view>
				<input type="text" placeholder="请输入">
			</view>
			<view class="row">
				<view class="title">患者姓名</view>
				<input type="text" placeholder="请输入">
			</view>
			<view class="row">
				<view class="title">患者性别</view>
				<input type="text" placeholder="请输入">
			</view>
			<view class="row">
				<view class="title">出生日期</view>
				<picker mode="date">
					<view class="little-title">2013-12-12<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="row">
				<view class="title">身高</view>
				<input type="text" placeholder="请输入">
				<view class="unit">cm</view>
			</view>
			<view class="row">
				<view class="title">体重</view>
				<input type="text" placeholder="请输入">
				<view class="unit">kg</view>
			</view>
			<view class="row">
				<view class="title">BMI</view>
				<input type="text" placeholder="请输入">
			</view>
			<view class="row">
				<view class="title">腰围</view>
				<input type="text" placeholder="请输入">
				<view class="unit">cm</view>
			</view>
			<view class="row">
				<view class="title">肝功能</view>
				<radio-group class="radio-group">
					<label class="radio">
						<radio value="r1" checked="true" />正常</label>
					<label class="radio">
						<radio value="r2" />异常</label>
				</radio-group>
			</view>
			<view class="button">立即建档</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #fbfdfe;
	}

	.row-title {
		background-color: white;
	}

	.radio-group {
		font-size: 14px;

		label {
			margin-right: 10px;
		}
	}

	.content {
		background-color: white;
		padding: 10px 26px;

		.row {
			display: flex;
			padding: 20px 0;
			border-bottom: 1px solid #eeeeee;
			position: relative;

			.title {
				width: 40%;
				font-weight: 400;
			}

			.unit {
				position: absolute;
				right: 0;
			}
		}

		.button {
			border-radius: 20px;
			
			margin: 20px auto 50px;
		}
	}
</style>
