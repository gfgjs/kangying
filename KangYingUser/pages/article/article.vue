<template>
	<view>
		<view class="article">
			<view class="title"> 吃对茄子是补品，吃错了是“砒霜”，2个错误吃法建议立马停止</view>
			<view class="row little-title">
				<image src="../../static/home/15.png" mode=""></image>
				<view>张伊利</view>
				<view>05-22</view>
				<view>13:57</view>
			</view>
			<view>
				<view>富文本</view>
				夏季到了，很多蔬菜开始上市了，茄子就是5月餐桌上最为常见的食物，油焖茄子、凉拌茄子备受欢迎。不过茄子虽好，但是吃错了堪比“砒霜”，随时都会要命了。今天介绍几种茄子的错误吃法，很多人不明所以，反倒觉得口味比较独特，其实一直在伤害自己的身体，快来看看吧：
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="comment">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page{
		// padding: 14px;
		background:rgba(249,250,251,1);
	}
	.article{
		padding: 14px;
		background-color: white;
	}
	.row{
		
		display: flex;
		align-items: center;
		image{
			width: 40px;
			height: 40px;
		}
		padding: 20px 0;
		view{
			margin-left: 10px;
		}
	}
	.comment{
		background-color: white;
		
		width: 100%;
		.item{
			padding: 10px 20px;
			width: 100%;
			display: flex;
			align-items: center;
			image{
				width: 60px;
				height: 60px;
				margin-right: 10px;
			}
			.right{
				width: 100%;
				.name{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.time{
					margin-top: 10px;
				}
			}
		}
	}
	.release{
		width: 100%;
		height: 50px;
		padding: 0 20px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		input{
			height: 40px;
			background-color: rgba(239,239,239,1);
			width: 65%;
			border-radius: 4px;
			padding: 0 20px;
		}
		.button{
			width: 100px;
			border-radius: 20px;
		}
	}
</style>
