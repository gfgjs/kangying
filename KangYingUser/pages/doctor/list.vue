<template>
	<view>
		<view class="screen">
			<picker mode="selector" :range="onlineStatus" @change="pickerChange($event,'onlineStatus')">
				<view class="little-title">{{onlineStatus[onlineStatusValue]||'在线状态'}}<uni-icons type="arrowdown" size="14"></uni-icons></view>
			</picker>
			<picker mode="selector" :range="level" @change="pickerChange($event,'level')">
				<view class="little-title">{{level[levelValue]||'职称'}}<uni-icons type="arrowdown" size="14"></uni-icons></view>
			</picker>
			<!-- <picker mode="selector" :range="array">
				<view class="little-title">价格<uni-icons type="arrowdown" size="14"></uni-icons></view>
			</picker> -->
			<picker mode="selector" :range="deptCode" @change="pickerChange($event,'deptCode')">
				<view class="little-title">{{deptCode[deptCodeValue]||'科室'}}<uni-icons type="arrowdown" size="14"></uni-icons></view>
			</picker>
			<!-- <uni-icons type="list"></uni-icons> -->
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="no-data" v-if="!doctorList.length">暂无数据，点我刷新</view>
		<view class="doctor" v-for="(item,index) in doctorList" @click="viewDoctorHome(item,index)" :key='item.id'>
			<view class="top">
				<image :src="item.avatar" mode=""></image>
				<view class="right">
					<view class="row">
						<view class="title">{{item.user_name}}</view>
						<view class="little-title">{{item.level_name}}</view>
						<!-- <view class="level">
							<uni-icons type="star-filled" color="#FBBB27"></uni-icons>
							4.8
						</view> -->
					</view>
					<view class="row little-title">
						{{item.hospital_name}}丨{{item.dept_name}}
					</view>
					<view class="row price-row">
						<view class="tags">
							<view class="doctor-tag" :class="'doctor-tag-'+((ind+1)%2 + 1)" v-for="(i,ind) in item.tags" :key="ind">
								<uni-icons class="tag-icon" type="person"></uni-icons>
								{{i}}
							</view>
						</view>
						<view class="price title">
							￥{{item.fee}}
						</view>
					</view>
					<view class="row tags">
						<view class="illness-tag" v-for="i in item.speciality" :key='i'>{{i}}</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="left">
					<view class="count">
						<view class="title">{{item.reply_num}}</view>
						<view class="little-title">总回复</view>
					</view>
					<view class="count">
						<view class="title">{{item.waiting_num}}</view>
						<view class="little-title">候诊人数</view>
					</view>
				</view>
				<view class="button" @click.stop="chatWithDoctor(item,index)">立即咨询</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {request_doctorList,request_cates} from '../../common/https.js'
	export default {
		data() {
			return {
				onlineStatus:['全部','仅在线'],
				onlineStatusValue:'',
				level:['医师', '主治医师', '副主任医师', '主任医师'],
				levelValue:'',
				deptCode:[],
				deptCodeValue:'',
				deptIndex:[],
				
				doctorList:[],
				
				page:1,
				page_size:10
			};
		},
		onLoad(e) {
			this.refresh()
			request_cates({
				uni
			}).then(res => {
				res.data.splice(0, 1)
				const arr = res.data
				const deptCode = []
				const deptIndex = []
				arr.map(item => {
					item.children.map(it => {
						deptCode.push(it.label)
						deptIndex.push(it.value) // 科室名称：科室代码。是否会出现多个相同科室名称但代码不同的情况？
					})
				})
				this.deptCode = deptCode
				this.deptIndex = deptIndex
			})
		},
		onPullDownRefresh() {
			this.refresh()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onReachBottom(){
			this.search()
		},
		methods:{
			refresh(){
				this.page = 1
				this.doctorList = []
				this.levelValue = null,
				this.deptCodeValue = null,
				this.onlineStatusValue = null
				this.search()
			},
			search(){
				request_doctorList({
					uni,
					data:{
						page:this.page,
						page_size:this.page_size,
						dept_code:this.deptIndex[this.deptCodeValue],
						level:this.level[this.levelValue],
						online_status:this.onlineStatusValue
					}
				}).then(res=>{
					if(res.code === 0){
						if(res.data&&res.data.length){
							this.doctorList = this.doctorList.concat(res.data)
							this.page = this.page + 1
						}else{
							this.$api.msg('无查询结果')
						}
					}else{
						this.$api.msg(res.err)
					}
				})
			},
			pickerChange(e,key){
				this[key+'Value'] =e.detail.value
				this.page = 1
				this.doctorList = []
				setTimeout(()=>{
					this.search()
				})
			},
			viewDoctorHome(item,index){
				this.$pageTo({
					url:'/pages/doctor/doctor?id='+item.id
				})
			},
			chatWithDoctor(item,index){
				this.$pageTo({
					url:'/pages/doctor/doctor',
					options:{
						id:item.id,
						im_username:item.im_username,
						chatNow:true,
						price:item.fee
					}
				})
				// this.$pageTo({
				// 	needLogin:true,
				// 	url:'/pages/doctor/chat?im_username='+item.im_username
				// })
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: $page-color-base;
	}
	.screen{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 30px;
		position: fixed;
		height: 40px;
		background-color: white;
		width: 100%;
		z-index: 1;
		
		picker{
			margin-right: 15px;
		}
	}
	.doctor{
		margin: 20px auto;
		width: calc(100vw - 20px);
		background-color: white;
		border-radius: 4px;
		box-shadow: 0 0 2px #eeeeee;
		padding: 10px 20px;
		// display: flex;
		// flex-direction: column;
		.top{
			border-bottom: solid 1px #FBFBFB;
			display: flex;
			width: 100%;
			padding-bottom: 10px;
			.right{
				width: calc(100% - 60px);
				padding-left: 10px;
			}
			.level{
				background-color: #FFF8EB;
				border-radius: 20px;
				padding: 0 6px;
				color: #FBBB27;
				display: flex;
				align-items: center;
				font-size: 14px;
				font-weight: bold;
			}
			.price{
				font-size: 20px;
			}
			.row{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 6px 0;
			}
			image{
				width: 60px;height: 60px;
				margin-top: 10px;
				border-radius: 50%;
				
			}
			.tags{
				display: flex;
				justify-content: flex-start;
				view{
					font-size: 14px;
					margin-right: 6px;
				}
				.doctor-tag{
					border-radius: 10px;
					padding: 2px 6px;
				}
				.doctor-tag-1{
					background:rgba(235,239,253,1);
					border-radius:19px;
					color: #4EA6FF;
					.uni-icons{
						color: #4EA6FF!important;
					}
				}
				.doctor-tag-2{
					background:rgba(253,245,241,1);
					border-radius:19px;
					color: #FF5D69;
					.uni-icons{
						color: #FF5D69!important;
					}
				}
			}
			.illness-tag{
				background:rgba(248,251,254,1);
				border-radius:3px;
				padding: 2px 6px;
			}
			
			.price-row{
				justify-content: space-between;
				width: 100%;
			}
		}
		.bottom{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 10px;
			.button{
				border-radius: 18px;
			}
			.left{
				display: flex;
				.count{
					display: flex;
					flex-direction: column;
					align-items: center;
					view{
						padding: 2px 10px;
					}
				}
			}
		}
	}
</style>
