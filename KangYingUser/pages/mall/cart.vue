<template>
	<view>
		<view class="item" v-for="(item,index) in goods" :key='item.id'>
			<view class="checkbox" @click="checkItem(index,item)">
				<!-- <uni-icons type="circle" class="uncheck" size="24"></uni-icons> -->
				<uni-icons type="checkbox-filled" class="uncheck" :class="item.checked&&'checked'" size="24"></uni-icons>
			</view>
			<image src="../../static/med.png" mode=""></image>
			<view class="message">
				<view class="title">汤臣倍健 牛初乳加钙咀嚼片 60 片装</view>
				<view class="little-title">北京同仁堂大药房（太古店）</view>
				<view class="row">
					<view class="left">
						<view class="price">￥1.28</view>
						<view class="little-title">200</view>
					</view>
					<view class="count">
						<uni-icons type="plus-filled" size="24"></uni-icons>
						<input type="number" maxlength="3" value="2">
						<uni-icons type="minus-filled" size="24"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="checkbox">
				<uni-icons type="checkbox-filled" class="uncheck" :class="isAllSelect&&'checked'"  size="24" @click="selectAll">全选</uni-icons>
			</view>
			<view class="price">￥{{priceInteger}}.<view class="little-price">{{priceFraction}}</view></view>
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
						count: 5,
						price:5
					},
					{
						id: 2,
						checked: false,
						count: 5,
						price:5.12
					},
					{
						id: 3,
						checked: false,
						count: 5,
						price:5
					},
					
				],
				isAllSelect:false,
				totlaPrice:0,
				priceInteger:0,
				priceFraction:'00'
				
			};
		},
		methods:{
			checkItem(index,item){
				item.checked = !item.checked
				this.$set(this.goods,index,item)
				this.judgeAllSelect()
				this.calcTotalPrice()
			},
			// 计算总价
			calcTotalPrice(){
				
				let price = 0
				this.goods.map((item,index)=>{
					if(item.checked){
						price += item.price
					}
				})
				
				this.totlaPrice = price
				
				price = price.toFixed(2).toString().split('.')
				
				this.priceInteger = price[0]
				this.priceFraction = price[1]
			},
			// 判断是否点亮全选
			judgeAllSelect(){
				let value = 0
				
				this.goods.map((item,index)=>{	
					value += item.checked
				})
			
				// 如果全部被选中
				if(value === this.goods.length){
					this.selectAll()
				}else if(!value){
					this.selectAll()
				}else{
					this.isAllSelect = false
				}
			},
			selectAll(){
				this.goods.map((item,index)=>{
					
					item.checked = !this.isAllSelect
					
					this.$set(this.goods,index,item)
				})
				
				this.calcTotalPrice()
				this.isAllSelect = !this.isAllSelect
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
						width: 30px;
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
		.price{
			width: 40%;
			text-align: right;
			font-weight: bold;
			display: flex;
			align-items: baseline;
			justify-content: flex-end;
			.little-price{
				font-weight: 400;
				font-size: 16px;
			}
		}
		.button{
			height: 100%;
			border-radius: 0;
		}
	}

	.common-place {
		background-color: #f7f9fc;
	}
</style>
