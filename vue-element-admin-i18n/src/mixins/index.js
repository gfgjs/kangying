import ddConfig from '@/serve/ddConfig.js'
import Viewer from 'viewerjs'
export const exportExcel = (function() {
    return {
        methods: {
            dataToExcel(data, docName = 'excel') {
                const url = window.URL.createObjectURL(data)
                const link = document.createElement('a')
                link.href = url
                link.style.display = 'none'
                link.setAttribute('download', `${docName}.xls`)
                link.setAttribute('target', '_blank')
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }
        }
    }
})()

export const downloadFromUrl = (function() {
    return {
        methods: {
            downloadFromUrl(fileurl) {
                const fileName = fileurl.split('/').pop()
                const link = document.createElement('a')
                link.href = fileurl
                link.style.display = 'none'
                link.setAttribute('download', fileName)

                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }
        }
    }
})()

/**
 * 重置Form表单组件下的选项值
 *
 * @return  {[type]}  [return description]
 */
export const resetForm = (() => {
    return {
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
})()

export const confirm = (() => {
    return {
        methods: {
            confirm(tipText, callback, cancel) {
                this.$confirm(tipText, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                    .then(() => {
                        callback()
                    })
                    .catch(() => {
                        console.log(cancel)
                        cancel && cancel()
                        return false
                    })
            }
        }
    }
})()

export const uploadHeaders = (() => {
    const token = ddConfig.access_token || sessionStorage.getItem('token')
    return {
        data() {
            return {
                uploadHeaders: {
                    serverName: 'forum',
                    Authorization: `Bearer ${token}`
                },
                uploadUrl:
					process.env.VUE_APP_HOST + '/common/api/huawei/upload' // 图片上传地址
            }
        },
        methods: {
            isUploadSuccess(res) {
                if (res.code !== '000') {
                    this.$message.error(res.msg)
                    return false
                }
                this.$message.success({
                    message: '上传成功！',
                    duration: '1500'
                })
            }
        }
    }
})()
export const showViewer = (() => {
    return {
        methods: {
            showViewer(imgUrl) {
                const image = new Image()

                image.src = imgUrl

                const viewer = new Viewer(image, {
                    hidden: function() {
                        viewer.destroy()
                    }
                })

                // image.click();
                viewer.show()
            }
        }
    }
})()

export const validateForm = (() => {
    return {
        methods: {
            validateForm(form) {
                return new Promise((resolve, reject) => {
                    form.validate(valid => {
                        if (valid) {
                            resolve()
                        } else {
                            this.$message.error('请完善必填信息！')
                            // reject(new Error('请完善信息！'));
                        }
                    })
                })
            }
        }
    }
})()
