import {
	HOST
} from './config.js'
import store from '../store/index.js'
export const test = () => {
	// console.log(fetch)
}

let __token = ''

export const request = (e = {}, api, method) => {
	method = method || 'POST'
	let uni = e.uni

	if (!__token) {
		__token = uni.getStorageSync('LOGIN_MESSAGE').token
	}

	if (e.token) {
		__token = e.token
	}

	uni.showLoading()
	return uni.request({
		method,
		url: HOST + api,
		data: e.data || {},
		header: {
			'Authorization': __token,
			'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	}).then(res => {
		uni.hideLoading()
		res = res[1].data
		return res
	}).then(res => {
		// 遇到错误码，重新登录
		// 可以使用getApp()和uni
		return res
	})
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
// 即时通讯im
export const request_imInit = e => {
	return request(e, '/v1/p/im/init')
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

export const request_recordList = e => {
	return request(e, '/v1/d/recordList', 'GET')
}