<template>
	<view>
		<view class="item" v-for="(i,index) in list" :key='i' :style="`background: url(../../static/index/reg${index+1}.png);`">
			<text class="title">成为{{i}}</text>
			<text class="little-title">在线快速注册成为{{i}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					list:['医生','药师','导诊','体检师']
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item{
		width: 60vw;
		height: 30vw;
		margin: 20px 0;
		background-size: 100% 100%!important;
		border-radius: 4px;
		box-shadow: 0 0 2px #eeeeee;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 10px;
		.little-title{
			margin-top: 10px;
		}
	}
</style>
