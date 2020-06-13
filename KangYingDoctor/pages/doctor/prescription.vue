<template>
	<view>
		<view class="row-title row">就诊人信息</view>
		<view class="row">
			<view class="title">患者姓名</view>
			<view class="little-title">章是是</view>
		</view>
		<view class="row">
			<view class="title">性别</view>
			<view class="little-title">男</view>
		</view>
		<view class="row">
			<view class="title">年龄</view>
			<view class="little-title">25</view>
		</view>
		<view class="row">
			<view class="title">既往病史</view>
			<view class="little-title">高血压、药物过敏</view>
		</view>
		<view class="row">
			<view class="title">临床诊断</view>
			<view class="little-title">食欲下降、精神不振等</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="row-title row">选择药品</view>
		<view class="medicine">
			<view class="row">
				<view class="title">药品名称</view>
				<view class="little-title">阿莫西林</view>
			</view>
			<view class="row">
				<view class="title">数量</view>
				<view class="little-title">
					<uni-icons type="plus" size="22"></uni-icons>
					<text class="number">10</text>
					<uni-icons type="minus" size="22"></uni-icons>
				</view>
			</view>
			<view class="row">
				<view class="title">规格</view>
				<view class="little-title">32岁</view>
			</view>
			<view class="row">
				<view class="title">用法用量</view>
				<view class="little-title">
					<view class="row">每日<input type="text" placeholder="1">次</view>
					 <view class="row">每次<input type="text" placeholder="1包"></view>
				</view>
			</view>
			<view class="row">
				<view class="title">其它</view>
				<view class="little-title"><input type="text" class="other" placeholder="请输入其它注意事项"></view>
			</view>
		</view>

		<view class="button">
			<uni-icons type="plusempty" color="white" size="20"></uni-icons>添加西药
		</view>
	</view>
</template>
<!-- 开药方 -->
<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0 20px;
	}

	.row-title {
		padding-left: 0;
		font-size: 20px;
	}

	.row {
		border-bottom: 1px solid #F8F5F5;
		display: flex;
		height: 54px;
		align-items: center;

		.title {
			min-width: 5rem;
			font-weight: 400;
			color: black;
		}

		.title:after {
			content: ' :';
		}

		.little-title {
			font-size: 16px;
			color: #363636;
			display: flex;
			align-items: center;
			width: 100%;
			.number{
				padding: 0 10px;
			}
			.uni-icons{
				color: $base-color!important;
			}
			.row{
				margin-right: 20px;
			}
			input{
				width: 2.4rem;
				background-color: #F5F5F5;
				padding-left: 4px;
				border-radius: 4px;
			}
			.other{
				width: 100%;
				height: 40px;
			}
		}
	}

	.button {
		display: flex;
		align-items: center;
		margin: 30px auto 50px;
		font-size: 16px;

		.uni-icons {
			margin-top: 2px;
		}
	}
</style>
