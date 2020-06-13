<!-- 聊天页 -->
<template>
	<view>
		<view class="row doctor-row">
			<view class="message doctor-message">
				Hi,欢迎来到孙春玲医生候诊室，初次就诊需要您
				填写
			</view>
		</view>
		<view class="row user-row" v-for="i in 10">
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
		<view class="row time-row">22:33</view>
		
		<view class="bottom-handle">
			<view class="little">
				<uni-icons type="mic" class="icon" size="24"></uni-icons>
				<view class="input-box">
					<input class="input"></input>
				</view>
				<uni-icons type="star" class="icon" size="24"></uni-icons>
				<uni-icons type="plus" class="icon" size="24"></uni-icons>
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
		overflow-y: scroll;
		padding-bottom: 100px;
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
	.time-row{
		justify-content: center;
		padding: 20px;
		color: #383838;
		font-size: 14px;
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
	.bottom-handle{
		width: 100%;
		position: fixed;
		bottom: 0;
		padding: 0 10px;
		// background-color: yellow;
		background-color: white;
		box-shadow: 0 0 12px #efefef;
		.little{
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;
			.input-box{
				background-color: white;
				width: 82%;
				border-radius: 2px;
				.input{
					width: 100%;
					height: 50px;
					border-radius: 6px;
					background-color: #F6F6F6;
					border: 7px solid white;
					padding: 6px 10px 6px 10px;
					font-size: 16px;
				}
			}
			.icon{
				width: 60px;
			}
		}
	}
</style>
