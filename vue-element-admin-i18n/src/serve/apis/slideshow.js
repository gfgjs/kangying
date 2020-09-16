const root = '/portal/api'
const Apis = {

    photoList: {
        url: root + '/admin/photo/photoList',
        method: 'get',
        showLoading: true
    },
    photoDelete: {
        url: root + '/admin/photo/photoDelete',
        method: 'post',
        showLoading: true
    },
    photoAdd: {
        url: root + '/admin/photo/photoAdd',
        method: 'post',
        showLoading: true
    },
    photoUpdate: {
        url: root + '/admin/photo/photoUpdate',
        method: 'post',
        showLoading: true
    },
    photoDetail: {
        url: root + '/admin/photo/photoDetail',
        method: 'get',
        showLoading: true
    }
}
export default Apis
