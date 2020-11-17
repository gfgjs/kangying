import Vue from 'vue'
import Vuex from 'vuex'
import timStore from './modules/timStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hasLogin: false,
        userInfo: {},
        currentPatientCard:null, // 当前使用的就诊卡，被发送一次后重置为null
    },
    mutations: {
        LOGIN(state, e) {
            state.hasLogin = true
            state.userInfo = e
        },
        LOGOUT(state, e) {
            state.hasLogin = false
            state.userInfo = {}
        },
        UPDATE_CURRENT_PATIENT_CARD(state,e){
            state.currentPatientCard = e
        }
    },
    actions: {
        LOGIN(store, e) {
            store.commit('LOGIN', e)
        },
        LOGOUT(store, e) {
            store.commit('LOGOUT', e)
        },
        UPDATE_CURRENT_PATIENT_CARD(store, e) {
            store.commit('UPDATE_CURRENT_PATIENT_CARD', e)
        }
    },
    getters: {
        hasLogin(state) {
            return state.hasLogin
        },
        userInfo(state) {
            return state.userInfo
        },
        currentPatientCard(state) {
            return state.currentPatientCard
        }
    },
    modules: {
        timStore
    }
})

export default store
