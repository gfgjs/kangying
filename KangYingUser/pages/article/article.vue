<template>
	<view>
		<view class="article">
			<view class="title">{{article.article_title}}</view>
			<view class="row little-title">
				<!-- <image :src="article.article_thumb" mode=""></image> -->
				<!-- <view>张伊利</view> -->
				<view>{{formatDate(article.create_time)}}</view>
				<view class="minute">{{formatMinute(article.create_time)}}</view>
			</view>
			<rich-text id="article-content" :nodes='nodes'>
				<!-- 富文本 -->
			</rich-text>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<!-- <view class="comment">
			<view class="row-title">
				文章评论（2）
			</view>
			<view class="item" v-for="i in 3" :key="i">
				<image src="../../static/home/15.png" mode=""></image>
				<view class="right">
					<view class="name">
						<view class="title">越过山丘</view>
						<uni-icons type="hand-thumbsup" color="gray"></uni-icons>
					</view>
					<view class="time little-title">1小时前</view>
				</view>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="release">
			<input type="text" value="" placeholder="发布您的评论" />
			<view class="button">发表评论</view>
		</view> -->
	</view>
</template>

<script>
	import {
		request_articleDetail
	} from '../../common/https.js'
	import htmlParser from '../../common/html-parser.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'

	const FAIL_CONTENT = '<p>获取信息失败</p>';
	let count = 0
	export default {
		data() {
			return {
				formatMinute,
				formatDate,
				article: {},
				nodes: []
			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onLoad(e) {
			request_articleDetail({
				uni,
				data: {
					id: e.id
				}
			}).then(res => {
				if (res.code === 0) {
					this.article = res.data
					
					let nodes = htmlParser(res.data.article_content)
					this.nodes = this.parseImg(nodes)
					
					// document.getElementById('article-content').innerHTML = res.data.article_content
					// document.querySelectorAll('#article-content img').forEach(item => {
					// 	item.classList.add('rich-text-img-width')
					// })
				} else {
					this.nodes = FAIL_CONTENT
				}
			})
		},
		methods: {
			parseImg(nodes = []) {
				return nodes.map(item => {
					item.style = item.style || ''
					if (item.name === 'img') {
						console.log(item);
						// item.attrs.style = item.style + ';max-width:100%;'
						item.attrs.style = 'max-width:100%;'
					}
					item.children && item.children.length && (item.children = this.parseImg(item.children))
					count++
					return item
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		// padding: 14px;
		background: rgba(249, 250, 251, 1);
	}

	.article {
		padding: 14px;
		background-color: white;

		.title {
			text-align: center;
		}
	}

	.row {

		display: flex;
		align-items: center;
		justify-content: center;

		image {
			width: 40px;
			height: 40px;
		}

		padding: 20px 0;

		.minute {
			margin-left: 10px;
		}
	}

	.comment {
		background-color: white;

		width: 100%;

		.item {
			padding: 10px 20px;
			width: 100%;
			display: flex;
			align-items: center;

			image {
				width: 60px;
				height: 60px;
				margin-right: 10px;
			}

			.right {
				width: 100%;

				.name {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.time {
					margin-top: 10px;
				}
			}
		}
	}

	.release {
		width: 100%;
		height: 50px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;

		input {
			height: 40px;
			background-color: rgba(239, 239, 239, 1);
			width: 65%;
			border-radius: 4px;
			padding: 0 20px;
		}

		.button {
			width: 100px;
			border-radius: 20px;
		}
	}
</style>
