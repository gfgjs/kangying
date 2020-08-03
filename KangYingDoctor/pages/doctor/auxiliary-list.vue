<template>
	<view>
		<view class="item" v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['影像检查','医学检验','其他检查']
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 100%;
	}
	.item:nth-of-type(1){
		background: url(../../static/index/check-1.png);
	}
	.item:nth-of-type(2){
		background: url(../../static/index/check-2.png);
	}
	.item:nth-of-type(3){
		background: url(../../static/index/check-3.png);
	}
	.item{
		width: 75%;
		height: 33vw;
		background-size: 100% 100% !important;
		margin: 20px auto;
		color: white;
		display: flex;align-items: center;
		justify-content: center;
	}
</style>
