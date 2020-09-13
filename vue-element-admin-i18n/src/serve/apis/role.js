const roleApis = {
	roleList: {
		url: "/forum/api/admin/role/roleList",
		method: "get",
		showLoading: true
	},
	roleAdd: {
		url: "/forum/api/admin/role/roleAdd",
		method: "post",
		showLoading: true
	},
	roleUpdate: {
		url: "/forum/api/admin/role/roleUpdate",
		method: "post",
		showLoading: true
	},
	roleDelete: {
		url: "/forum/api/admin/role/roleDelete",
		method: "post",
		showLoading: true
	},
	adminAmountSave: {
		url: "/forum/api/admin/role/adminSave",
		method: "post",
		showLoading: true
	},
	nodeList: {
		url: "/forum/api/admin/role/nodeList",
		method: "get",
		showLoading: true
	},
	roleNode: {
		url: "/forum/api/admin/role/nodeSave",
		method: "post",
		showLoading: true
	},
	getDept: {
		url: "/forum/api/open/getDept",
		method: "get",
		showLoading: true
	},
	getRoleAccess: {
		url: "/forum/api/admin/role/roleAccess",
		method: "get",
		showLoading: false
	}
};
export default roleApis;
