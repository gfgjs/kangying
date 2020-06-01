import {
	HOST
} from './config.js'

export const test = () => {
	// console.log(fetch)
}

export const request = (e = {}, api) => {
	let uni = e.uni
	return uni.request({
		method: 'POST',
		url: HOST + api, //仅为示例，并非真实接口地址。
		data: e.data || {},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
		}
	}).then(res=>res=res[1].data)
}

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
