<template>
	<view>
		<view class="row-title">{{info.main_title}}</view>
		<view class="row-title little-title">{{info.sub_title}}</view>
		<view class="row-title little-title">体检价格 ￥{{info.price}}</view>

		<rich-text id="article-content" :nodes='nodes'>
			<!-- 富文本 -->
		</rich-text>
		<view class="common-place" style="height: 65px;"></view>
		<view class="bottom button" @click="nowAppoint">立即预约</view>
	</view>
</template>

<script>
	import {
		request_examInfo,
		request_payPexam
	} from '../../common/https.js'
	import htmlParser from '@/common/html-parser.js'
	import {
		mapGetters
	} from 'vuex'
	const FAIL_CONTENT = '<p>获取信息失败</p>';
	export default {
		data() {
			return {
				info: {},
				nodes: []
			};
		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title: '套餐详情'
			})
			request_examInfo({
				uni,
				data: {
					id: e.id
				}
			}).then(res => {
				if (res.code === 0) {
					this.info = res.data

					let nodes = htmlParser(res.data.desc)
					this.nodes = this.parseImg(nodes)

					// this.nodes = FAIL_CONTENT
				} else {
					this.$api.msg(res.err)
				}
			})
		},
		methods: {
			nowAppoint() {
				this.$pageTo({
					needLogin: true,
					url: '/pages/mine/create-check-order',
					options: {
						id:this.info.id,
						price:this.info.price
					}
				})
			},
			parseImg(nodes = []) {
				return nodes.map(item => {
					item.style = item.style || ''
					if (item.name === 'img') {
						// item.attrs.style = item.style + ';max-width:100%;'
						item.attrs.style = 'max-width:100%;'
					}
					item.children && item.children.length && (item.children = this.parseImg(item.children))
					return item
				})
			}
		}
	}
</script>

<style lang="scss">
	.little-title {}

	.bottom {
		width: 100%;
		height: 55px;
		position: fixed;
		bottom: 0;
		left: 0;
		border-radius: 0;
	}
</style>
