<template>
	<view>
		<view class="content" v-if="!resultStatus">
			<view class="row-title">搜索历史 <uni-icons type="trash"></uni-icons>
			</view>
			<view class="list">
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
			</view>
			<view class="row-title">热门搜索</view>
			<view class="list">
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
				<view class="item">感冒药</view>
			</view>
		</view>

		<productList v-if="resultStatus"></productList>

	</view>
</template>

<script>
	import productList from '../../components/product-list.vue'
	export default {
		components: {
			productList
		},
		data() {
			return {
				result: [],
				resultStatus: true
			};
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
	}

	.row-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;

		.item {
			padding: 6px 12px;
			background: rgba(245, 250, 255, 1);
			border-radius: 5px;
			margin: 0 14px 14px 0;
			font-size: 14px;
		}
	}
</style>
