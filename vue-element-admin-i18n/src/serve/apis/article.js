const articleApis = {
	getArticleList: {
		url: '/forum/api/admin/article/list',
		method: 'get',
		showLoading: true
	},
	articleAction: {
		url: '/forum/api/admin/article/action',
		method: 'post',
		showLoading: true
	},
	getArticleDetail: {
		url: '/forum/api/admin/article/detail',
		method: 'get',
		showLoading: true
	},
	articleAddImg: {
		url: '/forum/api/admin/article/addImg',
		method: 'post',
		showLoading: true
	},
	articleEditImg: {
		url: '/forum/api/admin/article/editImg',
		method: 'post',
		showLoading: true
	},
	articleAddVote: {
		url: '/forum/api/admin/article/addVote',
		method: 'post',
		showLoading: true
	},
	articleEditVote: {
		url: '/forum/api/admin/article/editVote',
		method: 'post',
		showLoading: true
	},



};
export default articleApis;