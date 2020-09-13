<template>
	<div class="personSelection">
		<div class="dialog-mask">
			<div
				class="dialog-box"
				v-loading="loading"
				element-loading-text="拼命加载中"
				element-loading-background="rgba(255,255,255, 0.7)"
				element-loading-spinner="el-icon-loading"
			>
				<div class="dialog-header">
					<p class="dialog-tip"><span>角色授权</span></p>
					<span @click="closedialog"
						>
                        <img src="../../../assets/images/close.png"/>
                    </span>
				</div>
				<div class="dialog-content">
					<el-row style="margin-top: 20px;">
						<el-col style="width: 250px">
							<div class="tree-name">组织架构列表:</div>
							<div class="select-box">
								<div class="input-search">
									<el-input
										v-model="textVal"
										class="input-searchstyle"
										placeholder="搜索"
										clearable
									></el-input>
									<el-button plain type="danger" @click="search(textVal)"> 搜索</el-button>
								</div>
								<div class="block">
									<div class="nav">
										<span
											v-for="(item, index) in navList"
											:key="index"
											v-if="index > navList.length - 4"
										>
											<b
												v-if="
													index !== navList.length - 1
												"
												@click="getDept(item.id)"
											>
												{{ item.name }} ></b
											>
											<b v-else class="nav-last">{{
												item.name
											}}</b>
										</span>
									</div>
									<el-checkbox
										v-model="checkAll"
										class="is_checkall"
										@change="changeAllState"
										>全选</el-checkbox
									>
									<el-tree
										:data="data"
										class="tree"
										ref="tree"
										show-checkbox
										node-key="id"
										default-expand-all
										:expand-on-click-node="false"
										@check="currentChange"
										:render-content="renderContent"
									>
									</el-tree>
								</div>
							</div>
						</el-col>
						<el-col style="width: 250px">
							<div class="tree-name">已选列表:</div>
							<div class="select-box">
								<ul class="selectList">
									<li
										v-for="(item, index) in roleList"
										class="selectItem"
										:key="index"
									>
										<span class="selecticon">
											<img
												v-if="item.is_staff === 0"
												src="../../../assets/images/wenjian.svg"
											/>
											<img
												v-if="
													item.is_staff === 1 &&
														item.avatar
												"
												:src="item.avatar"
											/>
											<img
												v-if="
													item.is_staff === 1 &&
														!item.avatar
												"
												src="../../../assets/images/preson.svg"
											/>
											{{ item.name }}
										</span>
										<i @click="delSelect(item)"
											><img
												src="../../../assets/images/close.png"
											/>
										</i>
									</li>
								</ul>
							</div>
						</el-col>
					</el-row>
					<el-row>
						<div class="dialog-addbtn">
							<span class="icondel" @click="closedialog"
								>取消</span
							><span class="comfirm" @click="comfirmAdd"
								>确定</span
							>
						</div>
					</el-row>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import preson from '../../../assets/images/preson.svg';
import wenjian from '../../../assets/images/wenjian.svg';

export default {
	props: {
		roleNode: {
			type: Array,
			default: []
		},
		app_id: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			data: [],
			loading: false,
			paramsObj: {
				//传入参数
				name: '',
				app_id: '',
				id: ''
			},
			roleList: [],
			navList: [],
			checkAll: false,
			textVal: '' //搜索框人员搜索
		};
	},
	mounted() {
		Object.assign(this.paramsObj, { app_id: this.app_id });
		this.getChildRole();
	},
	computed: {
		selectArrId() {
			let ArrId = [];
			this.roleList.some(item => {
				ArrId.push(item.id);
			});
			return ArrId;
		}
	},
	methods: {
		renderContent(h, { node, data, store }) {
			//树型结构模板渲染
			data.checked = node.checked;
			return (
				<div class="tree-node-div">
					{data.is_staff === 1 ? (
						data.avatar ? (
							<img src={data.avatar} />
						) : (
							<img src={preson} />
						)
					) : (
						<img src={wenjian} />
					)}
					{data.has_child === 1 ? (
						<div class="custom-tree-node">
							<div class="tree-node-name">
								<span title={data.name}>{data.name}</span>
								<p>{data.parent}</p>
							</div>
							<div>
								{node.checked ? (
									<el-button
										size="mini"
										type="text"
										style="color:#999"
									>
										下级
									</el-button> //选中，有子集的禁止点击
								) : (
									<el-button
										size="mini"
										type="text"
										on-click={() => this.getChild(data)}
									>
										下级
									</el-button>
								) //没选中，有子集的禁止点击
								}
							</div>
						</div>
					) : (
						<div class="custom-tree-node-preson">
							<span title={data.name}>{data.name}</span>
							<p>{data.parent}</p>
						</div>
					)}
				</div>
			);
		},
		currentChange(data, node) {
			//点击复选框，修改权限列表
			if (this.roleList.findIndex(item => item.id === data.id) === -1) {
				//添加权限
				this.roleList.push(data);
			} else {
				//删除权限
				let index = this.roleList.findIndex(
					item => item.id === data.id
				);
				this.roleList.splice(index, 1);
			}
			this.checkAll = this.ischeckAll();
		},
		ischeckAll() {
			let isChildAll =
				this.data.slice().findIndex(item => item.checked === false) < 0;
			return isChildAll;
		},
		changeAllState(isCheck) {
			if (isCheck === true) {
				//全选点击
				this.data.forEach(element => {
					if (
						this.roleList.findIndex(
							item => item.id === element.id
						) === -1
					) {
						//比对有没有选中，没有就加入进去
						this.roleList.push(element);
					}
				});
			} else {
				this.roleList = this.roleList.slice().filter(item => {
					//筛选掉出相同的人
					return (
						this.data.findIndex(item1 => item.id === item1.id) < 0
					);
				});
			}
			this.setCheckedKeys(this.selectArrId); //设置默认高亮效果
		},
		getChild(data) {
			//获得子集数据
			Object.assign(this.paramsObj, { id: data.id, name: '' });
			this.getNextChildRole();
		},
		closedialog() {
			//关闭弹框
			this.$emit('closePerson');
		},
		comfirmAdd() {
			//确认修改应用的权限
			if (!this.roleList.length) {
				this.waFu('请选择部门和人员');
				return false;
			}
			console.log(this.roleList);
			this.$emit('closePerson', this.roleList);
		},
		delSelect(data) {
			//点击权限列表删除按钮
			let index = this.roleList.findIndex(item => item.id === data.id);
			this.roleList.splice(index, 1);
			this.setCheckedKeys(this.selectArrId);
		},
		setCheckedKeys(keyArr) {
			//设置选中状态
			this.$refs.tree.setCheckedKeys(keyArr);
		},
		getChildRole() {
			//获得权限列表，以及组织架构节点
			this.$http('getDept', this.paramsObj).then(res => {
				console.log(res);
				this.data = res.list;
				this.roleList = this.roleNode.length
					? this.roleNode
					: res.app_role_list; //是否有传入的值
				if (
					JSON.stringify(this.data) === JSON.stringify(this.roleList)
				) {
					this.checkAll = true;
				}
				this.navList = res.nav;
				this.setCheckedKeys(this.selectArrId);
			});
		},
		getNextChildRole() {
			//获取子集以及面包削的方法
			this.$http('getDept', this.paramsObj).then(res => {
				console.log(res);
				this.data = res.list;
				this.navList = res.nav;
				this.setCheckedKeys(this.selectArrId);
				this.$nextTick(() => {
					//设置全选效果
					if (this.data.length) {
						this.checkAll = this.ischeckAll();
					} else {
						this.checkAll = false;
					}
				});
			});
		},
		getDept(id) {
			//点击面包削返回所在的组织建构
			Object.assign(this.paramsObj, { id: id, name: '' });
			this.getNextChildRole();
		},
		search() {
			//搜索功能
			Object.assign(this.paramsObj, { id: '', name: this.textVal });
			this.getNextChildRole();
		}
	}
};
</script>
<style>
.tree .tree-node-div {
	display: flex;
	flex: 1;
}
.tree .tree-node-div img {
	margin: auto 3px;
	width: 15px;
	height: 15px;
}
.tree .custom-tree-node {
	display: flex;
	flex: 1;
	justify-content: space-between;
	padding: 5px 0;
	margin-right: 10px;
}
.tree .tree-node-name {
	margin: auto 0;
	width: 150px;
	text-overflow: ellipsis;
	overflow: hidden;
}
.tree .el-tree-node p,
.tree .custom-tree-node-preson p {
	color: #999;
	font-size: 12px;
	width: 150px;
	text-overflow: ellipsis;
	overflow: hidden;
}
.tree .el-tree-node {
	height: 35px;
}
.custom-tree-node,
.custom-tree-node-preson {
	font-size: 14px;
	padding-right: 8px;
}
.is_checkall {
	padding-left: 10px;
}
.dialog-mask {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
}
.dialog-box {
	position: absolute;
	width: 580px;
	left: 50%;
	top: 50%;
	margin-top: -300px;
	margin-left: -290px;
	background: #fff;
	border-radius: 3px;
	padding: 20px;
	box-sizing: border-box;
}
.dialog-header {
	display: flex;
}
.dialog-tip {
	flex: 1;
}
.dialog-tip span {
	color: #222222;
	font-size: 18px;
}
.tree-name {
	font-size: 14px;
	color: #333;
	margin-bottom: 10px;
}
.input-search {
	margin-top: 10px;
	margin-left: 10px;
	margin-bottom: 10px;
}
.input-search .input-searchstyle {
	width: 155px;
	height: 28px;
	padding-left: 10px;
	line-height: 28px;
	margin-right: 10px;
}
.nav {
	color: #409eff;
	padding: 10px;
	font-size: 12px;
	cursor: pointer;
}
.nav-last {
	color: #333333;
	cursor: auto;
}
.select-box {
	border: 1px solid #ddd;
	height: 400px;
	width: 270px;
	overflow-y: scroll;
	overflow-x: hidden;
}
.selectList {
	margin: 0 15px 0 25px;
}
.selectItem {
	display: flex;
	font-size: 14px;
	list-style: none;
	color: #333;
	line-height: 28px;
}
.selecticon {
	flex: 1;
	width: 150px;
	text-overflow: ellipsis;
	overflow: hidden;
}
.selecticon img {
	vertical-align: middle;
	margin: 0 5px;
	width: 15px;
	height: 15px;
}
.dialog-addbtn {
	text-align: right;
	margin-top: 16px;
}
.dialog-btn span,
.dialog-addbtn span {
	display: inline-block;
	width: 64px;
	height: 28px;
	text-align: center;
	border-radius: 3px;
	line-height: 28px;
	margin: 0 10px;
	font-size: 12px;
	cursor: pointer;
}
.icondel {
	border: 1px solid #ebebeb;
	color: #333333;
}
.comfirm {
	background: #b81b22;
	color: #fff;
}
</style>
