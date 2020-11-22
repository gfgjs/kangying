import {
	HOST
} from './config.js'
import store from '../store/index.js'
export const test = () => {
	// console.log(fetch)
}

let __token = ''
let uni

export const request = (e = {}, api, method ,contentType) => {
	method = method || 'POST'
	contentType = contentType || 'application/x-www-form-urlencoded'

	// let uni = e.uni

	if (!__token) {
		__token = uni.getStorageSync('LOGIN_MESSAGE').token
	}

	if (e.token) {
		__token = e.token
	}

	if(!e.noLoading){
		uni.showLoading()
	}
	return uni.request({
		method,
		url: HOST + api,
		data: e.data || {},
		header: {
			'Authorization': __token,
			'Content-Type': contentType //自定义请求头信息
		}
	}).then(res => {
		uni.hideLoading()
		res = res[1].data
		return res
	}).then(res => {
		// 遇到错误码，重新登录
		// 可以使用getApp()和uni
		return res
	}).catch(e=>{
		console.log('---api---:',HOST+api,';','---err---:',e);
		return e
	})
}
// 初始化https
export const request_init = e=>{
	uni = e.uni
}
// 清除token
export const request_clearToken = () => {
	__token = ''
}
// 获取最新版本
export const request_version = e => {
	return request(e, '/v1/p/version')
}
// 上传图片

export const request_uploadImg = e => {
	return new Promise((resolve, reject) => {
		e.uni.chooseImage({
			success: (chooseImageRes) => {
				const tempFilePaths = chooseImageRes.tempFilePaths;
				e.uni.uploadFile({
					url: HOST + '/v1/p/upload_img', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					name: 'img',
					formData: {
						'user': 'kangying'
					},
					success: (uploadFileRes) => {
						resolve(JSON.parse(uploadFileRes.data))
					},
					fail: (err) => {
						reject(err)
					}
				})
			}
		})
	})
}

//通用上传图片

export const uploadImg = e => {
	return new Promise((resolve, reject) => {
		e.uni.uploadFile({
			url: HOST + '/v1/p/upload_img', //仅为示例，非真实的接口地址
			filePath: e.filePath,
			name: 'img',
			formData: {
				'user': 'kangying'
			},
			success: (uploadFileRes) => {
				resolve(JSON.parse(uploadFileRes.data))
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

// 即时通讯im
export const request_imInit = e => {
	return request(e, '/v1/p/im/init')
}
// 存储聊天消息到后台
export const request_saveMsg = e => {
	return request(e, '/v1/p/im/saveMsg','POST','application/json')
}
export const request_getConversation = e => {
	return request(e, '/v1/p/im/getConversation', 'GET')
}
export const request_getMsg = e => {
	return request(e, '/v1/p/im/getMsg', 'GET')
}
// 登录相关
export const request_sendReSms = e => {
	return request(e, '/v1/p/user/sendReSms')
}
export const request_sendLoginSms = e => {
	return request(e, '/v1/p/user/sendLoginSms')
}
export const request_register = e => {
	return request(e, '/v1/p/doctor/register')
}

export const request_codeLogin = e => {
	return request(e, '/v1/p/user/codeLogin')
}
export const request_login = e => {
	return request(e, '/v1/p/doctor/login')
}
export const request_userInfo = e => {
	return request(e, '/v1/d/doctor/info')
}
export const request_upUserInfo = e => {
	return request(e, '/v1/u/user/up')
}
// 用户相关
export const request_getAddressList = e => {
	return request(e, '/v1/u/address/list', 'GET')
}
export const request_getUserSig = e => {
	return request(e, '/v1/p/im/getUserSig','GET')
}
// 地址相关 获取区域列表
export const request_getAreaList = e => {
	return request(e, '/v1/p/area/list', 'GET')
}
export const request_addAddress = e => {
	return request(e, '/v1/u/address/add')
}
export const request_editAddress = e => {
	return request(e, '/v1/u/address/edit')
}
export const request_delAddress = e => {
	return request(e, '/v1/u/address/del')
}



// 文章
export const request_articleList = e => {
	return request(e, '/v1/p/article/list', 'GET')
}
export const request_articleDetail = e => {
	return request(e, '/v1/p/article/detail', 'GET')
}
// 我的就诊卡列表
export const request_patientList = e => {
	return request(e, '/v1/u/patient_card/list', 'GET')
}
// 新建就诊卡
export const request_patientCardAdd = e => {
	return request(e, '/v1/u/patient_card/add', 'POST')
}

// 科室列表
export const request_cates = e => {
	return request(e, '/v1/p/doctor/cates', 'GET')
}
// 医生列表
export const request_doctorList = e => {
	return request(e, '/v1/p/doctor/list', 'GET')
}
// 医生详情
export const request_doctorInfo = e => {
	return request(e, '/v1/p/doctor/info', 'GET')
}

// 医生首页
// 设置就诊状态
export const request_changeWorkStatus = e => {
	return request(e, '/v1/d/doctor/changeWorkStatus')
}
// 获取首页数量
export const request_patientData = e => {
	return request(e, '/v1/d/patientData', 'GET')
}
// 医生获取病例
export const request_getUserLast = e => {
	return request(e, '/v1/d/getUserLastV2', 'GET')
}
// 医生获取病例
export const request_recordList = e => {
	return request(e, '/v1/d/recordList', 'GET')
}
// 医生修改病例
export const request_recordUp = e => {
	return request(e, '/v1/d/record/up', 'POST', 'application/json')
}
// 医生更新病例状态
export const request_recordNotice = e => {
	return request(e, '/v1/d/record/notice', 'POST')
}
// 医生获取病例信息
export const request_recordInfo = e => {
	return request(e, '/v1/d/record/info', 'GET')
}

// 医生获取体检订单列表
export const request_pexamOrders = e => {
	return request(e, '/v1/d/pexamOrders', 'GET')
}
// 医生获取药方订单列表
export const request_checkOrders = e => {
	return request(e, '/v1/d/checkOrders', 'GET')
}
// 医生审核药方订单
export const request_checkOrder = e => {
	return request(e, '/v1/d/checkOrder', 'POST')
}
// 医生审核待发货订单
export const request_getWaitSendOrder = e => {
	return request(e, '/v1/d/getWaitSendOrder', 'GET')
}
// 医生审核已发货订单
export const request_getOverOrder = e => {
	return request(e, '/v1/d/getOverOrder', 'GET')
}
// 医生发货
export const request_sendMedicineOrder = e => {
	return request(e, '/v1/d/sendMedicineOrder', 'POST')
}
// 获取物流公司列表
export const request_expressList = e => {
	return request(e, '/v1/p/express/list', 'GET')
}
// 结算收入
export const request_balance = e => {
	return request(e, '/v1/d/doctor/balance', 'GET')
}


// 药品相关
// 购药首页搜索关键词
export const request_medHeaderData = e => {
	return request(e, '/v1/p/medicine/headerData', 'GET')
}
export const request_medCates = e => {
	return request(e, '/v1/p/medicine/cate', 'GET')
}
export const request_medList = e => {
	return request(e, '/v1/p/medicine/list', 'GET')
}
export const request_medInfo = e => {
	return request(e, '/v1/p/medicine/info', 'GET')
}
export const request_searchHot = e => {
	return request(e, '/v1/p/search/hot', 'GET')
}