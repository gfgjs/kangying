<!-- 电子病历 -->
<template>
	<view class="page">
		<view class="row-title">就诊人信息</view>
		<view class="row border-bottom">
			<view class="title">患者姓名:</view>
			<view class="little-title">{{info.p_name}}</view>
		</view>
		<view class="row border-bottom">
			<view class="title">性别:</view>
			<view class="little-title">{{info.p_gender}}</view>
		</view>
		<view class="row border-bottom">
			<view class="title">年龄:</view>
			<view class="little-title">24</view>
		</view>
		<!-- <view class="row border-bottom">
			<view class="title">既往病史:</view>
			<view class="little-title">12元</view>
		</view> -->
		<view class="row border-bottom">
			<view class="title">主诉:</view>
			<view class="little-title">
				<input type="text" v-model="p_narrate" placeholder="填写病人主诉">
			</view>
		</view>
		<view class="row">
			<view class="title">辅助检查</view>
		</view>
		<view class="row">
			<view class="add-button" @click="addCheck">
				<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="textarea-box">
			<view class="row-title">诊断信息及建议</view>
			<textarea value="" v-model="diagnosis" placeholder="请输入诊断信息" />
		</view>
		<!-- <view class="row-title ">诊断信息</view>
		<view class="row border-bottom">
			<view class="tag">消化不良<uni-icons type="closeempty"></uni-icons></view>
			<view class="tag">消化不良<uni-icons type="closeempty"></uni-icons></view>
			<view class="button">更改诊断</view>
		</view>
		<view class="row">
			<view class="tag">消化不良<uni-icons type="closeempty"></uni-icons></view>
			<view class="tag">消化不良<uni-icons type="closeempty"></uni-icons></view>
			<view class="button">更改诊断</view>
		</view> -->
		<!-- <view class="textarea-box">
			<view class="row-title">医生建议</view>
			<textarea value="" placeholder="请输入建议" />
		</view> -->
		<view class="button save-button" @click="update">保存设置</view>
	</view>
</template>

<script>
	import {request_recordUp} from '../../common/https.js'
	export default {
		data() {
			return {
				info:{},
				p_narrate:'',
				diagnosis:''
			};
		},
		onLoad(e) {
			this.info = e
			this.log(e);
		},
		methods:{
			update(){
				request_recordUp({
					uni,
					data:{
						p_narrate:this.p_narrate,//（主诉 文本）、
						diagnosis:this.diagnosis,//（诊断结果 文本）、
						record_id:this.info.record_id,//（病历ID）、
						goods:[],//（开的药 数组）、
						exams:[],//（暂时先为空数组）
					}
				}).then(res=>{
					if(res.code === 0){
						this.$api.msg(res.data)
						setTimeout(()=>{
							uni.navigateBack()
						},1000)
					}else{
						this.$api.msg(res.err)
					}
				})
			},
			addCheck(){
				this.$api.msg('暂不可使用')
				return
				this.$pageTo({
					url:'/pages/doctor/check-list'
				})
			}
		}
	}
</script>

<style lang="scss">
	page,.page{
		padding: 0 20px;
		padding-bottom: 60px;
	}
	.common-place{
		background-color: white;
	}
	.row-title{
		padding-left: 0;
	}
	.border-bottom{
		border-bottom: 1px solid #F8F5F5;
	}
	input{
		background-color: #F7F7F7;
		padding: 4px 10px;
		height: 45px;
	}
	.row{
		display: flex;
		height: 54px;
		align-items: center;
		position: relative;
		.title{
			color: #000000;
			font-weight: 400;
			font-size: 16px;
			min-width: 4rem;
		}
		.little-title{
			margin-left: 20px;
			color: #363636;
		}
		.tag{
			border: 1px solid $base-color;
			padding: 4px 6px ;
			font-size: 14px;
			border-radius: 100px;
			color: $base-color;
			margin-right: 10px;
			display: flex;
			align-items: center;
		}
		.button{
			width: 4rem;
			position: absolute;
			right: 0;
		}
	}
	.textarea-box{
		padding: 10px 0;
		margin-bottom: 14px;
		textarea{
			background-color: #F6F6F6;
			width: 100%;
			margin: 10px 0;
			border-radius: 4px;
			padding: 10px;
		}
	}
	.add-button{
		height: 50px;
		width: 50px;
		border-radius: 4px;
		background-color: #F7F7F7;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	}
	.save-button{
		margin: 0 auto;	
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 54px;
	}

</style>
