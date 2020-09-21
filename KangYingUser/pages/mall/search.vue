<template>
	<view>
		<view class="content" v-if="!searchInput">
			<view class="row-title" v-if="historyKeys.length">搜索历史 <uni-icons type="trash" @click="clearHistoryKeys"></uni-icons>
			</view>
			<view class="list">
				<view class="item" v-for="item in historyKeys" @click="clickKey(item)">{{item}}</view>
			</view>
			<view class="row-title" v-if="hotKeys.length">热门搜索</view>
			<view class="list">
				<view class="item" @click="clickKey(item)" v-for="item in hotKeys" :key="item">{{item}}</view>
			</view>
		</view>

		<productList :list='resultList' v-if="searchInput"></productList>

	</view>
</template>

<script>
	import productList from '../../components/product-list.vue'
	import {
		request_medList,
		request_searchHot
	} from '@/common/https.js'
	import {
		readSearchKey,
		saveSearchKey,
		clearSearchKey
	} from '../../common/util.js'
	let timer
	export default {
		components: {
			productList
		},
		data() {
			return {
				result: [],
				resultList: [],
				page: 1,
				searchInput: '',
				hotKeys: [],
				historyKeys: []
			};
		},
		watch: {
			searchInput(e) {
				if (!e.length) {
					this.page = 1
					this.resultList = []
				}
				// this.search()
			}
		},
		onPullDownRefresh() {
			this.page = 1
			this.resultList = []
			this.search()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)

		},
		onReachBottom(e) {
			this.search()
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.searchInput && this.search()
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchInput = e.text
		},
		onNavigationBarSearchInputConfirmed(e) {
			this.searchInput && this.search()
		},
		onLoad(e) {
			e.key && this.clickKey(e.key)
		},
		onShow() {
			this.historyKeys = readSearchKey(uni)
			request_searchHot({
				uni
			}).then(res => {
				if (res.code === 0) {
					this.hotKeys = res.data
				}
			})
		},
		methods: {
			clearHistoryKeys() {
				uni.showModal({
					content: '确认删除所有搜索记录？将不可恢复！',
					success: e => {
						if (e.confirm) {
							clearSearchKey(uni)
							this.historyKeys = []
						}
					}
				})
			},
			clickKey(key) {
				// #ifdef APP-PLUS  
				var webView = this.$mp.page.$getAppWebview();

				// 修改buttons  
				// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
				// webView.setTitleNViewButtonStyle(0, {  
				//     text: 'hello',  
				// });  

				// 修改按钮上的角标  
				// index: 按钮索引, text: 角标文本内容  
				// webView.setTitleNViewButtonBadge({  
				//     index: 0,  
				//     text: 10,  
				// });  

				// 设置 searchInput的 focus  
				// focus: true | false  
				webView.setTitleNViewSearchInputFocus(true)

				// 设置 searchInput的 text  
				webView.setTitleNViewSearchInputText(key)
				this.searchInput = key
				// #endif
				// #ifdef H5
				let inputSearch = document.querySelector('.uni-input-input[type=search]');
				var evt = new InputEvent('input', {
					inputType: 'insertText',
					data: key,
					dataTransfer: null,
					isComposing: false
				});
				if (inputSearch) {
					inputSearch.value = key;
					inputSearch.dispatchEvent(evt);
				}
				// #endif
				this.search()
			},
			search() {
				clearTimeout(timer)
				timer = setTimeout(() => {
					saveSearchKey(uni, this.searchInput)
					this.getList()
				}, 400)
			},
			getList() {
				request_medList({
					uni,
					data: {
						page: this.page,
						page_size: 10,
						// w_cate: 1,
						keyword: this.searchInput
					}
				}).then(res => {
					uni.stopPullDownRefresh()
					if (res.code === 0) {
						if (res.data.length) {
							this.resultList = this.resultList.concat(res.data)
							this.page++
						} else {
							if (this.resultList.length) {
								this.$api.msg('没有更多数据了')
							} else {
								this.$api.msg('暂无数据')
							}
						}
					} else {
						this.$api.msg(res.err)
					}
				})
			}
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
