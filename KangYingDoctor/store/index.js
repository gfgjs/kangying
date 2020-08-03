import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		jimHasLogin: false,
		userInfo: {},
		iMessageList: [], // 
		jimMsgs: {}, // jim 消息漫游 {username:array}
	},
	mutations: {
		LOGIN(state, e) {
			state.hasLogin = true
			state.userInfo = e
		},
		LOGOUT(state, e) {
			state.hasLogin = false
			state.userInfo = {}
			state.jimMsgs = {}
		},
		JIMLOGIN(state, e) {
			state.jimHasLogin = true
		},
		JIMLOGOUT(state, e) {
			state.jimHasLogin = false
		},
		UPDATE_IMASSAGELIST(state, e) {
			if (e instanceof Array) {
				state.iMessageList = state.iMessageList.concat(e)
			} else if (e instanceof Object) {
				state.iMessageList.push(e)
			}
		},
		UPDATE_JIMMSGS(state, e) {
			if(e){
				let obj = state.jimMsgs
				let arr = obj[e.from_username] || []
				arr = arr.concat(e.msgs||e.messages)
				obj[e.from_username] = arr
				state.jimMsgs = {...obj}
			}
		}
	},
	actions: {
		LOGIN(store, e) {
			store.commit('LOGIN', e)
		},
		LOGOUT(store, e) {
			store.commit('LOGOUT', e)
		},
		JIMLOGIN(store, e) {
			store.commit('JIMLOGIN', e)
		},
		JIMLOGOUT(store, e) {
			store.commit('JIMLOGOUT', e)
		},
		UPDATE_IMASSAGELIST(store, e) {
			store.commit('UPDATE_IMASSAGELIST', e)
		},
		UPDATE_JIMMSGS(store, e) {
			store.commit('UPDATE_JIMMSGS', e)
		},

	},
	getters: {
		hasLogin(state) {
			return state.hasLogin
		},
		jimHasLogin(state) {
			return state.jimHasLogin
		},
		userInfo(state) {
			return state.userInfo
		},
		iMessageList(state) {
			return state.iMessageList
		},
		jimMsgs(state) {
			return state.jimMsgs
		}
	}
})

export default store
