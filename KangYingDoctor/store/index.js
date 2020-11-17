import Vue from 'vue'
import Vuex from 'vuex'
import timStore from './modules/timStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hasLogin: false,
        userInfo: {},
    },
    mutations: {
        LOGIN(state, e) {
            state.hasLogin = true
            state.userInfo = e
        },
        LOGOUT(state, e) {
            state.hasLogin = false
            state.userInfo = {}
        }
    },
    actions: {
        LOGIN(store, e) {
            store.commit('LOGIN', e)
        },
        LOGOUT(store, e) {
            store.commit('LOGOUT', e)
        }
    },
    getters: {
        hasLogin(state) {
            return state.hasLogin
        },
        userInfo(state) {
            return state.userInfo
        }
    },
    modules: {
        timStore
    }
})

export default store
