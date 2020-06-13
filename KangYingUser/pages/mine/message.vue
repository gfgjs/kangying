<template>
	<view>
		<view class="message" v-for="i in 20" :key="i">
			<view class="time">2020年05月20日 12:42</view>
			<view class="box">
				<view class="title">体检下单成功通知</view>
				<view class="content">当前您的候诊位置为第3位，前面还有2位候诊人，因为当前科室候诊人数较多，请耐心等待~</view>
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
		background-color: #f7f7f9;
	}
	.message{
		padding: 20px;
		.time,.box{
			margin: 15px 0;
			display: flex;
		}
		.time{
			font-size: 14px;
			padding: 4px 10px;
			margin: 0 auto;
			width: 50vw;
			background:rgba(0,0,0,.18);
			border-radius:4px;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
		}
		.box{
			flex-direction: column;
			background:rgba(255,255,255,1);
			border-radius:4px;
			
			padding: 10px;
			.content{
				color: #595959;
				font-size: 14px;
				margin-top: 15px;
			}
		}
	}
</style>
