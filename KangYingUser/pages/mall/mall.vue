<template>
	<view class="wrap">
		<view class="nav-place"></view>
		<view class="list type">
			<view class="item" v-for="(i,index) in headerData[0]" :key="index+'_1'" @click="toSearch(i.title)">
				<image :src="i.icon" mode=""></image>
				<view class="text">{{i.title}}</view>
			</view>
		</view>
		<view class="row-title">家庭常备药</view>
		<view class="list tags">
			<view class="item" v-for="(i,index) in headerData[1]" :key="index+'_2'" @click="toSearch(i.title)">{{i.title}}</view>
		</view>
		<view class="row-title">主题馆</view>
		<view class="list subject">
			<view class="item" v-for="(i,index) in headerData[2]" :key="index+'_3'" @click="toSearch(i.title)"
			:style="`background:url(${i.icon})`"
			>
				<view>{{i.title}}</view>
				<view class="little">{{i.desc}}</view>
			</view>
		</view>
		<view class="list tabs">
			<view class="tab" :class="tabCurr==index&&'tab-curr'"
			v-for="(item,index) in medCates"
			:key="'medCates_'+index"
			@click="tabChange(item,index)">
				<!-- <view class="title">{{item.cate_name.slice(0,2)}}</view> -->
				<view class="title">{{item.cate_name}}</view>
				<view class="bar"></view>
			</view>
			<!-- <view class="line"></view> -->
		</view>
		<view class="list bottom">
			<view class="item" v-for="(item,index) in medList" :key="'medList_'+index" @click="$pageTo({url:'/pages/mall/product?id='+item.id})">
				<image :src="item.m_thumb" mode=""></image>
				<view class="title name">{{item.m_name}}</view>
				<view class="little-title brief">{{item.sub_title}}</view>
				<view class="bottom-row">
					<view class="price">
						<view class="title">{{item.sale_price}}</view>
						<view class="little-title">{{item.original_price}}</view>
					</view>
					<uni-icons type="plus-filled" class="icon" size="24" @click.native.stop="addToCart(item)"></uni-icons>
				</view>
			</view>
			<view v-if="!medList.length" class="no-data">
				暂无数据
			</view>
		</view>
	</view>
</template>

<script>
	import {request_medHeaderData,request_medCates,request_medList,request_cartAdd} from '../../common/https.js'
	export default {
		data() {
			return {
				tabCurr: 0,
				headerData:[],
				medCates:[],
				medList:[]
			};
		},
		onLoad(e) {
            if(e.text){
                this.$pageTo({
                    url:'/pages/mall/search',
                    options: {key:e.text}
                })
            }
		},
		onShow() {
			this.refresh()
			// #ifdef APP-PLUS
			// let webView = this.$mp.page.$getAppWebview()
			// // 设置 searchInput的 text
			// webView.setTitleNViewSearchInputText('')
			// #endif

			// #ifdef H5
			// let inputSearch = document.querySelector('.uni-input-input[type=search]')
			// var evt = new InputEvent('input', {
			// 	inputType: 'insertText',
			// 	data: '',
			// 	dataTransfer: null,
			// 	isComposing: false
			// });
			// if (inputSearch) {
			// 	inputSearch.value = ''
			// 	inputSearch.dispatchEvent(evt)
			// }
			// #endif
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'/pages/mall/search'
			})
		},
		onPullDownRefresh() {
			this.refresh()
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},500)
		},
		methods: {
			addToCart(item){
				request_cartAdd({
					uni,data:{goods_id:item.id,goods_number:1}
				}).then(res=>{
					this.$api.msg(res.data||res.err)
				})
			},
			refresh(){
				request_medHeaderData({
					uni
				}).then(res=>{
					this.headerData = res.data
				})
				request_medCates({
					uni
				}).then(res=>{
					this.medCates = res.data
					this.tabChange(res.data[0],0)
				})
			},
			toSearch(key){
				uni.navigateTo({
					url:'./search?key='+key
				})
			},
			tabChange(item,index) {
				this.tabCurr = index
				console.log(item);
				request_medList({
					uni,
					data:{
						keyword:'',
						m_cate:item.id,
						page:1,
						page_size:6
					}
				}).then(res=>{
					this.medList = res.data
				})
			}
		}
	}
</script>

<style lang="scss">
	page,
	.wrap {
		width: 100%;
	}

	.nav-place {
		background-color: $base-color;
	}

	.list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
	}

	.type {
		padding: 20px 0;

		.item {
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 14px;

			image {
				height: 60px;
				width: 60px;
				padding: 10px;
			}
		}
	}

	.tags {
		.item {
			border-radius: 6px;
			padding: 4px 10px;
			border: 1px solid rgba(243, 243, 243, 1);
			margin: 0 10px 20px;
			color: #333333;
			font-size: 14px;
		}
	}

	.subject {
		justify-content: space-between;

		.item {
			width: 49%;
			height: 80px;
			border-radius: 4px;
			background-color: #f2f5fa;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 16px;
			font-weight: bold;
			padding: 10px;
			margin-bottom: 8px;
			background-size: 100% 100%!important;

			.little {
				font-size: 14px;
				color: #82868C;
				font-weight: initial;
			}
		}
	}

	.tabs {
		display: flex;
		justify-content: space-between;
		padding: 20px 0;
		align-items: center;
		overflow-x: scroll;
		flex-wrap: nowrap;
		width: calc(100% - 40px);
		margin: 0 auto;

		.line {
			width: 1px;
			height: 30px;
			background-color: rgba(235, 235, 235, 1);
		}

		.tab {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-shrink: 0;
			margin: 0 10px;
			transition: all .1s linear;

			.title {
				font-size: 16px;
				font-weight: bold;
			}

			.little {
				padding-top: 10px;
				font-size: 13px;
				color: #6C6C6C;
				transition: all .1s linear;
			}

			.bar {
				width: 24px;
				height: 3px;
				margin-top: 14px;
				transition: all .1s linear;
			}
		}

		.tab-curr {
			color: $base-color;

			.little {
				color: $base-color;
			}

			.bar {
				background-color: $base-color;
			}
		}

	}

	.bottom {
		background:rgba(242,245,250,1);
		padding: 20px;
		justify-content: space-between;
		.item {
			margin-bottom: 8px;
			background-color: white;
			width: 49%;
			border-radius: 4px;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			box-shadow: 0 0 2px #eeeeee;

			image {
				width: 100%;
				height: 40vw;
			}
			.name,.brief{
				padding: 4px 0;
				width: 90%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			.bottom-row {
				width: 90%;
				padding: 6px 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.price{
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.title {
					color: #F71A1A;
					padding-right: 10px;
				}

				.little-title {
					text-decoration: line-through;
				}
			}
		}

		.icon {
			color: $base-color !important;
		}
	}



</style>
