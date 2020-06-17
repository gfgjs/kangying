import {
	HOST
} from './config.js'

export const test = () => {
	// console.log(fetch)
}

let __token = ''

export const request = (e = {}, api, method = 'POST') => {
	let uni = e.uni
	if (!__token) {
		__token = uni.getStorageSync('LOGIN_MESSAGE').token
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
		return res
	})
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
						resolve(uploadFileRes.data)
					},
					fail: (err) => {
						reject(err)
					}
				})
			}
		})
	})
}
// 登录相关
export const request_sendReSms = e => {
	return request(e, '/v1/p/user/sendReSms')
}
export const request_sendLoginSms = e => {
	return request(e, '/v1/p/user/sendLoginSms')
}
export const request_register = e => {
	return request(e, '/v1/p/user/register')
}
export const request_codeLogin = e => {
	return request(e, '/v1/p/user/codeLogin')
}
export const request_login = e => {
	return request(e, '/v1/p/user/login')
}
export const request_userInfo = e => {
	return request(e, '/v1/u/user/info')
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
