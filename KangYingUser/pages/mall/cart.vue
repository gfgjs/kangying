<template>
	<view>
		<view class="item" v-for="(item,index) in goods" :key='item.id' @longpress="deleteItem(item,index)">
			<view class="checkbox" @click="checkItem(item,index)">
				<!-- <uni-icons type="circle" class="uncheck" size="24"></uni-icons> -->
				<uni-icons type="checkbox-filled" class="uncheck" :class="item.checked&&'checked'" size="24"></uni-icons>
			</view>
			<image :src="item.goods_info.m_thumb" mode=""></image>
			<view class="message">
				<view class="title">{{item.goods_info.m_name}}</view>
				<view class="little-title">{{item.goods_info.spec}}</view>
				<view class="little-title ellipsis">{{item.goods_info.desc}}</view>
				<view class="row">
					<view class="left">
						<view class="price">￥{{item.price}}</view>
						<view class="little-title">{{item.goods_info.original_price}}</view>
					</view>
					<view class="count">
						<uni-icons type="minus-filled" size="24" @click="subCount(item,index)"></uni-icons>
						<input type="number" maxlength="3" value="2" v-model="item.count" @change='inputChange(item,index)'>
						<uni-icons type="plus-filled" size="24" @click="addCount(item,index)"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="no-data" v-if="!goods.length">暂无数据</view>
		<view class="bottom">
			<view class="checkbox">
				<uni-icons type="checkbox-filled" class="uncheck" :class="isAllSelect&&'checked'" size="24" @click="selectAll">全选</uni-icons>
			</view>
			<view class="price">￥{{priceInteger}}.<view class="little-price">{{priceFraction}}</view>
			</view>
			<view class="button" @click="toSettlement">去结算</view>
		</view>
	</view>
</template>

<script>
	import {request_cartList,request_cartAdd,request_cartDel} from '../../common/https.js'
	export default {
		data() {
			return {
				goods: [
					// {
					// 	id: 1,
					// 	checked: false,
					// 	count: 0,
					// 	price: 5
					// }
				],
				isAllSelect: false,
				totlaPrice: 0,
				priceInteger: 0,
				priceFraction: '00'

			}
		},
		onShow() {
			request_cartList({
				uni
			}).then(res=>{
				this.isAllSelect = false
				this.goods = res.data.map((item,index)=>{
					return {
						...item,
						count:item.goods_number,
						price:item.goods_info.sale_price,
						checked:false
					}
				})
			})
		},
		methods: {
			toSettlement(){
				let array = []
				this.goods.map((item, index) => {
					if (item.checked) {
						array.push(item)
					}
				})
				if(!array.length){
					this.$api.msg('请先选择药品！')
					return
				}
				getApp().globalData.tempOrderGoods = array
				this.$pageTo({
					url:'/pages/mall/create-order'
				})
			},
			editGoodCount(id,number){
				request_cartAdd({
					uni,data:{goods_id:id,goods_number:number}
				}).then(res=>{
					this.$api.msg(res.data||res.err)
				})
			},
			deleteItem(item, index) {
				uni.showModal({
					content: '删除此项？',
					success: (res) => {
						if (res.confirm) {
							request_cartDel({
								uni,data:{
									is_all:false,
									id:item.id
								}
							}).then(res=>{
								this.$api.msg(res.data||res.err)
							})
							this.goods.splice(index, 1)
							this.calcTotalPrice()
						}
					}
				})
			},
			inputChange(item, index) {
				if (item.count < 1) {
					item.count = 1
				}
				item.count = parseInt(item.count)
				this.editGoodCount(item.goods_info.id,item.count - item.goods_number)
				this.checkItem(item, index, true)
			},
			addCount(item, index) {
				this.editGoodCount(item.goods_info.id,1)
				item.count++
				item.checked = true

				this.checkItem(item, index, true)
			},
			subCount(item, index) {
				if (item.count > 1) {
					item.count--
					item.checked = true
					this.checkItem(item, index, true)
					this.editGoodCount(item.goods_info.id,-1)
				} else {
					this.$api.msg('最少需要 1 件')
				}
			},
			// 每条商品独立成组件，否则不会差量更新，未实现
			checkItem(item, index, isChecked) {

				item.checked = isChecked || !item.checked
				if (item.checked && !item.count) {
					this.editGoodCount(item.goods_info.id,1)
					item.count = 1
				}
				this.$set(this.goods, index, item)
				this.judgeAllSelect()
				this.calcTotalPrice()
			},
			// 计算总价
			calcTotalPrice() {

				let price = 0
				this.goods.map((item, index) => {
					if (item.checked) {
						price += (item.price * item.count)
					}
				})

				this.totlaPrice = price

				price = price.toFixed(2).toString().split('.')

				this.priceInteger = price[0]
				this.priceFraction = price[1]
			},
			// 判断是否点亮全选
			judgeAllSelect() {
				let value = 0

				this.goods.map((item, index) => {
					value += item.checked
				})

				// 如果全部被选中
				if (value === this.goods.length) {
					// this.selectAll()
					this.isAllSelect = true
				} else if (!value) {
					this.isAllSelect = false
				} else {
					this.isAllSelect = false
				}
			},
			selectAll() {
				this.goods.map((item, index) => {

					item.checked = !this.isAllSelect

					if (item.checked && !item.count) {
						item.count = 1
					}

					this.$set(this.goods, index, item)
				})

				this.calcTotalPrice()
				this.judgeAllSelect()
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f7f9fc;
		padding-bottom: 90px;
	}

	.uni-icons {
		color: $base-color !important;
		transition: all linear .1s;
	}

	.uncheck {
		color: #cccccc !important;
	}

	/* 选中则覆盖样式 */
	.checked {
		color: $base-color !important;
	}

	.checkbox {
		width: 30px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item {
		margin-top: 20px;
		background-color: white;
		display: flex;
		padding: 10px;





		image {
			width: 120px;
			height: 120px;
		}

		.message {
			width: calc(100% - 150px);
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.title {
				font-weight: 600;
			}

			.row {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					display: flex;
					align-items: center;

					.little-title {
						text-decoration: line-through;
						margin-left: 8px;
					}
				}

				.count {
					display: flex;
					align-items: center;

					input {
						text-align: center;
						padding-bottom: 2px;
						width: 2rem;
					}
				}
			}

		}
	}

	.bottom {
		background-color: white;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		padding-left: 10px;
		height: 50px;
		box-shadow: 0 0 2px #eeeeee;

		.price {
			width: 40%;
			text-align: right;
			font-weight: bold;
			display: flex;
			align-items: baseline;
			justify-content: flex-end;

			.little-price {
				font-weight: 400;
				font-size: 16px;
			}
		}

		.button {
			height: 100%;
			border-radius: 0;
		}
	}

	.common-place {
		background-color: #f7f9fc;
	}
</style>
