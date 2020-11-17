import TIM from './tim-js.js'
import {SDK_APP_ID} from './config'
// 初始化 SDK 实例
const tim = TIM.create({
    SDKAppID:SDK_APP_ID
})

// 无日志级别4
tim.setLogLevel(4)

export default tim