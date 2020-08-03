<template>
	<view class="list">
		<view class="item" v-for="(item,index) in list" :key="index" @click="$pageTo({url:'/pages/mall/product?id='+item.id})">
			<image :src="item.m_thumb" mode=""></image>
			<view class="right">
				<view class="name">【买送共发120片】{{item.m_name}} {{item.spec}}</view>
				<view class="row brief">
					<view class="data">已售出<view class="price">{{item.sale}}</view>份/<view class="price">{{item.stock}}</view>库存</view>
					<view class="price bold">￥{{item.sale_price}} <text v-if="item.original_price" class="little-title" style="text-decoration: line-through;font-weight: 400;">￥{{item.original_price}}</text></view>
				</view>
				<view class="row">
					<view class="address">{{item.desc}}</view>
					<uni-icons type="plus-filled" class="plus" size="24" @click.stop="addToCart(item)"></uni-icons>
				</view>
			</view>
		</view>
		<view class="no-data" v-if="!list.length">
			请搜索药品名
		</view>
	</view>
</template>

<script>
	import {request_cartAdd} from '../common/https.js'

	export default {
		name: 'productList',
		props: ['list'],
		data() {
			return {

			}
		},
		watch: {
		},
		mounted() {
		},
		methods: {
			addToCart(item){
				request_cartAdd({
					uni,data:{goods_id:item.id,goods_number:1}
				}).then(res=>{
					this.$api.msg(res.data||res.err)
				})
			},
		},
		updated() {
		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;

		// padding: 0 20px;
		// background-color: red;
		.item {
			display: flex;
			justify-content: space-between;
			background: none;
			width: 100%;
			border-bottom: solid 1px rgba(247, 249, 252, 1);
			padding-bottom: 20px;

			.right {
				width: calc(100% - 100px);

				.name {
					font-size: 14px;
					width: 100%;
				}

				.row {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 6px 0;
					font-size: 14px;

					.data {
						display: flex;
					}

					.plus {
						color: $base-color !important;
					}
				}
			}
		}

		image {
			width: 80px;
			height: 80px;
			padding: 10px;
		}
	}
</style>
