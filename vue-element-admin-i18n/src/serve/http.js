import axios from 'axios'
import APIS from './apis/'
import Vue from 'vue'
import utils from '@/utils'
import ddConfig from './ddConfig.js'
import router from '@/router/index'

let loading = null
const vm = new Vue()
/**
 * 请求拦截器
 */

axios.interceptors.request.use(config => {
    const api = APIS[config.apiName]
    const token = ddConfig.access_token || sessionStorage.getItem('token')
    config.url = process.env.VUE_APP_HOST + api.url
    config.method = api.method
    config.responseType = api.responseType ? api.responseType : 'json'
    config.method === 'post' ? config.data = config.apiParams : config.params = config.apiParams
    config.headers.Authorization = `Bearer ${token}`
    if (api.type === 'upload') {
        config.headers.serverName = 'supper'
    }
    if (api.showLoading) {
        loading = vm.$loading({
            text: api.loadingText || '请求中···',
            spinner: 'el-icon-loading',
            background: 'rgba(255, 255, 255, 0.6)'
        })
    }
    return config
})

/**
 * 返回拦截器
 */
axios.interceptors.response.use(res => {
    if (loading) {
        loading.close()
    }
    const { code } = res.data
    if (1 || code === '000' || res.data instanceof Blob) { // 请求成功
        return res.data
    } else if (code === '036' || code === '037') {
        if (utils.isInDingTalk()) {
            window.location.reload()
        } else {
            sessionStorage.removeItem('token')
            window.location.reload()
        }
    } else if (code === '1100') {
        // 无权限
        router.replace({ name: 'noAccess' })
        return Promise.reject(res.data.msg)
    }
    vm.$message.error(res.data.msg)
    return Promise.reject(res.data.msg)
}, err => {
    console.log(err)
    const message = '请求-错误，请稍后重试！'
    if (loading) {
        loading.close()
    }
    vm.$message.error(message)
    return Promise.reject(message)
})

/**
 * 基于Axios封装http方法
 * @param apiName {String} 接口名称
 * @param apiParams {Object} 接口参数
 */
const http = (apiName, apiParams = {}) => {
    return new Promise((resolve, reject) => {
        axios({ apiName, apiParams }).then(res => {
            const data = res instanceof Blob ? res : res.list ? res.list : res.data
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default http
