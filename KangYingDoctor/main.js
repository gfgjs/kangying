import Vue from 'vue'
import store from './store'
import App from './App'
import JMessage from './common/jmessage-wxapplet-sdk-1.4.3.min.js'
// import Json from './Json' //测试用数据

const jim = new JMessage()
Vue.prototype.$jim = jim

const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	json,
	prePage
};

// 拦截路由跳转，所有跳转应使用此方法
// 记录最后所在页面
// 判断下个页面是否需要登录时

const __updateLastPage = (e = {}) => {
	Vue.prototype.$lastPage = e
}
const __pageTo = (e = {}) => {
	e.navigateType = '$pageTo'
	
	// e.disrecord 默认false，为true则不记录，例如跳转到login页时
	if (!e.disrecord) {
		Vue.prototype.$lastPage = e
	}
	
	if(e.needLogin && !Vue.prototype.$store.state.hasLogin){
		uni.showModal({
			content: "是否前往登录？",
			success: (res) => {
				if (res.confirm) {
					uni.navigateTo({
						url:'/pages/login/login'
					})
				} else if (res.cancel) {
					
				}
			}
		})
	}else{
		
		uni.navigateTo(e)
	}
}
const __switchTab = (e = {}) => {
	e.navigateType = '$switchTab'
	if (!e.disrecord) {
		Vue.prototype.$lastPage = e
	}
	uni.switchTab(e)
}
Vue.prototype.$lastPage = {}
Vue.prototype.$pageTo = __pageTo
Vue.prototype.$switchTab = __switchTab
Vue.prototype.$updateLastPage = __updateLastPage

Vue.prototype.log = e=>{
	if(typeof e === 'object'){
		console.log(JSON.parse(JSON.stringify(e)));
	}else{
		console.log(e);
	}
}

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
