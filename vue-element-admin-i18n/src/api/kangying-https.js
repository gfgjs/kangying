import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store/index'

const auth_https = axios.create({
    baseURL: process.env.VUE_APP_BASE_KANG_YING_AUTH,
    timeout: 5000
})
const https = axios.create({
    baseURL: process.env.VUE_APP_BASE_KANG_YING,
    timeout: 5000
})
// response interceptor
auth_https.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.err,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
https.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.err,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
export function login(query) {
    return auth_https({
        url: '/open/login',
        method: 'post',
        data: query
    })
}
export function permission(query) {
    return auth_https({
        url: '/admin/role/roleAccess',
        method: 'get',
        headers:{
            'Authorization':store.getters.token
        }
        // data: query
    })
}
export function getHospitalList(query) {
    return https({
        url: '/p/hospital/list',
        method: 'get',
        params: query
    })
}
export function getUserList(query) {
    return auth_https({
        url: '/admin/user/list',
        method: 'get',
        params: query
    })
}
export function getOrderList(query) {
    return auth_https({
        url: '/admin/user/list',
        method: 'get',
        params: query
    })
}
export function getDoctorList(query) {
    return auth_https({
        url: '/admin/doctor/list',
        method: 'get',
        params: query
    })
}
/*
* GreatSir:
/admin/order/records 问诊订单
/admin/order/medicines 药品订单

GreatSir:
/admin/order/pes 体检订单

* */
export function getRecordsList(query) {
    return auth_https({
        url: '/admin/order/records',
        method: 'get',
        params: query
    })
}
export function getMedicinesList(query) {
    return auth_https({
        url: '/admin/order/medicines',
        method: 'get',
        params: query
    })
}
export function getPesList(query) {
    return auth_https({
        url: '/admin/order/pes',
        method: 'get',
        params: query
    })
}
export function getVersionList(query) {
    return auth_https({
        url: '/admin/version/list',
        method: 'get',
        params: query
    })
}
export function saveAppVersion(query) {
    return auth_https({
        url: '/admin/version/saveAppVersion',
        method: 'post',
        data: query
    })
}
export function roleList(query) {
    return auth_https({
        url: '/admin/role/roleList',
        method: 'get',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        params: query
    })
}
export function roleDetail(query) {
    return auth_https({
        url: '/admin/role/roleDetail',
        method: 'get',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        params: query
    })
}
export function roleAdd(query) {
    return auth_https({
        url: '/admin/role/roleAdd',
        method: 'post',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        data: query
    })
}
export function roleUpdate(query) {
    return auth_https({
        url: '/admin/role/roleUpdate',
        method: 'post',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        data: query
    })
}

export function nodeList(query) {
    return auth_https({
        url: '/admin/role/nodeList',
        method: 'get',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        params: query
    })
}
export function adminUserList(query) {
    return auth_https({
        url: '/admin/adminUser/list',
        method: 'get',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        params: query
    })
}
export function adminUserSave(query) {
    return auth_https({
        url: '/admin/adminUser/save',
        method: 'post',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        data: query
    })
}
export function adminUserDel(query) {
    return auth_https({
        url: '/admin/adminUser/del',
        method: 'post',
        headers:{
            'Authorization':localStorage.getItem('ky_token')
        },
        data: query
    })
}
