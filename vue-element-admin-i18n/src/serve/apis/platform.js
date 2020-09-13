/**
 * ==================================
 * ==================================
 * 平台相关API接口文件
 * ==================================
 * ==================================
 */

const platformApis = {
	/**
	 * 帐号密码登录
	 */
	login: {
		url: '/platform/api/auth/login',
		method: 'post',
		showLoading: false
	},
	/**
	 * 获取验证码
	 */
	getLoginCode: {
		url: '/platform/api/auth/getLoginCode',
		method: 'post',
		showLoading: true
	},

	/**
	 * 验证码登录
	 */
	phoneLogin: {
		url: '/platform/api/auth/phoneLogin',
		method: 'post',
		showLoading: true
	},

	/**
	 * 钉钉免登
	 */
	getToken: {
		url: '/platform/api/auth/dingInnerLogin',
		method: 'post',
		showLoading: false
	},

	/**
	 * ticket登录
	 */
	ssoLogin: {
		url: '/platform/api/auth/ssoLogin',
		method: 'post',
		showLoading: false
	},
	/**
	 * 获取用户信息
	 */
	getUserInfo: {
		url: '/forum/api/admin/user/userDetail',
		method: 'get',
		showLoading: true
	},
	userFilter: {
		url: '/common/api/employee/pageEmployeesFuzzy',
		method: 'get',
		showLoading: false
	},
	/**
	 * 上传图片
	 */
	upload2Oss: {
		url: '/common/api/huawei/upload',
		method: 'post',
		showLoading: true,
		type: 'upload'
	},
	getDeptList: {
		url: '/common/api/department/listAllDepartments',
		method: 'get',
		showLoading: false
	}
};

export default platformApis;
