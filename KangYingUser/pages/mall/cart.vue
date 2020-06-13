<template>
	<view>
		<view class="item" v-for="(item,index) in goods" :key='item.id' @longpress="deleteItem(item,index)">
			<view class="checkbox" @click="checkItem(item,item)">
				<!-- <uni-icons type="circle" class="uncheck" size="24"></uni-icons> -->
				<uni-icons type="checkbox-filled" class="uncheck" :class="item.checked&&'checked'" size="24"></uni-icons>
			</view>
			<image src="../../static/med.png" mode=""></image>
			<view class="message">
				<view class="title">汤臣倍健 牛初乳加钙咀嚼片 60 片装</view>
				<view class="little-title">北京同仁堂大药房（太古店）</view>
				<view class="row">
					<view class="left">
						<view class="price">￥{{item.price}}</view>
						<view class="little-title">200</view>
					</view>
					<view class="count">
						<uni-icons type="minus-filled" size="24" @click="subCount(item,index)"></uni-icons>
						<input type="number" maxlength="3" value="2" v-model="item.count" @change='inputChange(item,index)'>
						<uni-icons type="plus-filled" size="24" @click="addCount(item,index)"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="checkbox">
				<uni-icons type="checkbox-filled" class="uncheck" :class="isAllSelect&&'checked'" size="24" @click="selectAll">全选</uni-icons>
			</view>
			<view class="price">￥{{priceInteger}}.<view class="little-price">{{priceFraction}}</view>
			</view>
			<view class="button">去结算</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
						id: 1,
						checked: false,
						count: 0,
						price: 5
					},
					{
						id: 2,
						checked: false,
						count: 0,
						price: 5.12
					},
					{
						id: 3,
						checked: false,
						count: 0,
						price: 5
					},
					{
						id: 4,
						checked: false,
						count: 0,
						price: 1
					},
					{
						id: 5,
						checked: false,
						count: 0,
						price: 6
					},
				],
				isAllSelect: false,
				totlaPrice: 0,
				priceInteger: 0,
				priceFraction: '00'

			};
		},
		methods: {
			deleteItem(item, index) {
				uni.showModal({
					content: '删除此项？',
					success: (res) => {
						if (res.confirm) {
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
				this.checkItem(item, index, true)
			},
			addCount(item, index) {
				item.count++
				item.checked = true

				this.checkItem(item, index, true)
			},
			subCount(item, index) {
				if (item.count > 1) {
					item.count--
					item.checked = true
					this.checkItem(item, index, true)
				} else {
					this.$api.msg('最少需要 1 件')
				}
			},
			// 每条商品独立成组件，否则不会差量更新，未实现
			checkItem(item, index, isChecked) {

				item.checked = isChecked || !item.checked
				if (item.checked && !item.count) {
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
