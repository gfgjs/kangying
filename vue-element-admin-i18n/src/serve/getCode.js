import * as dd from 'dingtalk-jsapi'
import ddConfig from './ddConfig.js'

const getCode = () => {
    return new Promise((resolve, reject) => {
        dd.runtime.permission.requestAuthCode({
            corpId: ddConfig.cropId,
            onSuccess: function(result) {
                resolve(result.code)
            },
            onFail: function(err) {
                alert(err.toString())
                reject(err)
            }

        })
    })
}

export default getCode
