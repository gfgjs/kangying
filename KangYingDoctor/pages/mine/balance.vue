<template>
	<view>
		<view class="row-title">我的余额</view>
		<view class="row">
			{{balance}} 元
		</view>
		<view class="button" @click="getMoney">提现</view>
	</view>
</template>

<script>
	import {request_balance} from '../../common/https.js'
	export default {
		data() {
			return {
				balance:0
			};
		},
		onLoad() {
		
			request_balance({uni}).then(res=>{
				this.balance = res.data
				console.log(res);
			})
		},
		methods:{
			getMoney(){
				this.$api.msg('暂未开放')
			}
		}
	}
</script>

<style lang="scss">
.row{
	padding: 0 50px 30px;
	color: $base-color;
	border-bottom: 1px solid $base-color;
}
.button{
	margin: 100px auto 0;
}
</style>
