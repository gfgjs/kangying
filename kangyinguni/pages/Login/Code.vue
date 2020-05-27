<template>
	<view>
		<view class="wrap text">
			我们已经给您绑定的手机号<span class="blue">185*****071</span>发送了短信验证码，请正确填写验证码
		</view>
		<view class="wrap input-row">
			<view class="row">
				<view class="little" v-for="i in 6" :key='i'>{{inputs[i-1]}}</view>
			</view>
			<input id="inputCode" type="number" maxlength="6" value="" v-model="inputs"/>
		</view>
		<view class="wrap tips blue text">
			60秒后重新获取（32秒）
		</view>
		<button type="primary" @click="submit">提交</button>
		<view >
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputs: ''
			};
		},
		methods: {
			submit(){
				if(this.inputs.length!=6){
					uni.showToast({
						icon:'none',
						title:'验证码有误'
					})
				}else{
					uni.switchTab({
							url:'../tabbar/Home/Home'
					})
				}
			}
		},
		watch: {
			inputs: function(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="less">
	* {
		box-sizing: border-box;
	}

	page {
		padding: 20px 0;
	}
	.blue{
		color: #1986FD;
	}
	.text{
		font-size: 16px;
	}
	.wrap{
		width: 84vw;
		margin-left: 8vw;
	}
	.input-row {
		padding: 40px 0;
		position: relative;
		.row{
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: space-between;
			.little {
				width: 40px;
				height: 40px;
				border: 1px solid rgba(233, 236, 239, 1);
				caret-color: #1986FD;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #1986FD;
			}
		}
		
		#inputCode{
			// background-color: red;
			border: 1px solid rgba(233, 236, 239, 1);
			width: 100%;
			height: 120px;
			z-index: 1;
			position: absolute;
			// left: 0;
			top: 0;
			opacity: 0;
		}
	}
	button{
		width: 80%;
		margin-top: 20px;
	}
</style>
