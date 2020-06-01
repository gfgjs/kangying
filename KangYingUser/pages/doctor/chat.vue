<!-- 聊天页 -->
<template>
	<view>
		<view class="row doctor-row">
			<view class="message doctor-message">
				Hi,欢迎来到孙春玲医生候诊室，初次就诊需要您
				填写
			</view>
		</view>
		<view class="row user-row">
			<view class="message user-message">
				您好大夫，我这边胃痛比较严重
			</view>
		</view>
		<view class="row doctor-row">
			<image src="../../static/home/15.png" mode=""></image>
			<view class="message doctor-message">
				请填写您的检查信息以及预约检查的相关时
				间,方便医生为您安排下一步治疗
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
	page{
		background-color: #fbfdfe;
	}
	.row {
		margin: 20px 0;
		padding: 0 20px;
		width: 100%;
		display: flex;
		align-items: center;

		.message {
			/* 去掉头像所占宽度 */
			max-width: calc(100% - 70px);
			font-size: 14px;
			padding: 10px 20px;
		}
		image{
			width: 50px;
			height: 50px;
			margin-right: 10px;
		}
	}

	.doctor-row {
		justify-content: flex-start;

		.message {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.14);
			border-radius: 3px 20px 3px 20px;
		}
	}

	.user-row {
		justify-content: flex-end;

		.message {
			background: $base-color;
			box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.24);
			border-radius: 20px 3px 20px 3px;
			color: white;
		}
	}
</style>
