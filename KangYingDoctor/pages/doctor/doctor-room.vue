<!-- 诊疗室 -->
<template>
	<view>
		<view class="search-box">
			<view class="input-box">
				<uni-icons type="search" size="22" color="#C9C9C9"></uni-icons>
				<input type="text" value="" placeholder="搜索患者" v-model="searchText"/>
				<uni-icons type="mic-filled" size="22" color="#C9C9C9"></uni-icons>
			</view>
		</view>
		<view class="common-place" style="height: 84px;"></view>


		<transition name="slide-fade">
			<view v-if="!searchText">
				<view class="item" v-for="(item,index) in list" :key='index' @click="openList(item.id)" :class="item.id==openId&&'open-list'">
					<view class="title-row">
						<uni-icons type="arrowright" size="16" color="#9E9E9E" class="arrowright"></uni-icons>
						<view class="title">{{item.title}}</view>
						<view class="count">{{item.count}}</view>
					</view>
					<view class="list" @click.stop>
						<view class="item-content" v-for="i in item.children" :key='i'>
							<image src="../../static/doctor/patient-header.png" mode=""></image>
							<view class="right">
								<view class="name">刘佳佳</view>
								<view class="text">那么医生我应该怎样去服用这些药品呢那么医生我应该怎样去服用这些药品呢?</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</transition>
	
		<transition name="slide-fade">
			<view class="search-list" v-if="searchText">
				
			</view>
		</transition>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '新患者',
						id: 1,
						count: 12,
						children: [1, 2, 3, 4]
					},
					{
						title: '全部患者',
						id: 2,
						count: 12,
						children: [1, 2, 3, 4]
					},
					{
						title: '未回复患者',
						id: 3,
						count: 12,
						children: [1, 2, 3, 4]
					}
				],
				openId: 0, // 0关闭 1 2 3
				searchText:'',
			}
		},
		methods: {
			openList(id) {
				if (id == this.openId) {
					this.openId = 0
				} else {
					this.openId = id
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-box {
		position: fixed;
		width: 100%;
		padding: 0 20px;
		height: 80px;
		background-color: $base-color;
		box-shadow: 0px 8px 21px 0px rgba(94, 182, 170, 0.2);
		z-index: 1;
		display: flex;
		align-items: center;

		.input-box {
			width: 100%;
			height: 44px;
			border-radius: 25px;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;

			input {
				width: 100%;
				padding-left: 10px;
			}
		}
	}

	.item {
		border-bottom: #FBFBFB 1px solid;

		.title-row {
			display: flex;
			align-items: center;
			height: 64px;
			padding: 0 20px;
			position: relative;

			.arrowright {
				// transition: all linear .1s;
				margin-top: 1px;
			}

			.title {
				margin-left: 10px;
				color: #333333;
			}

			.count {
				position: absolute;
				right: 30px;
				font-size: 16px;
				color: #9E9E9E;
			}
		}

		.list {
			height: 0;
			overflow: hidden;
			// transition: .1s linear all;
		}

		.item-content {
			padding: 0 30px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 74px;

			image {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}

			.right {
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 70%;

				.name {
					font-size: 16px;
					color: #494949;
				}

				.text {
					margin-top: 5px;
					font-size: 14px;
					color: #9E9E9E;
					width: 100%;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
	}


	.open-list {
		.title-row {
			.arrowright {
				transform: rotate(90deg);
			}
		}

		.list {
			height: auto;
		}
	}
</style>
