const root = '/portal/api'
const Apis = {

    bannerList: {
        url: root + '/admin/banner/bannerList',
        method: 'get',
        showLoading: true
    },
    bannerDetail: {
        url: root + '/admin/banner/bannerDetail',
        method: 'get',
        showLoading: true
    },
    bannerAdd: {
        url: root + '/admin/banner/bannerAdd',
        method: 'post',
        showLoading: true
    },
    bannerUpdate: {
        url: root + '/admin/banner/bannerUpdate',
        method: 'post',
        showLoading: true
    },
    bannerDelete: {
        url: root + '/admin/banner/bannerDelete',
        method: 'post',
        showLoading: true
    },
    // -------------新闻----------------------
    newsList: {
        url: root + '/admin/news/newsList',
        method: 'get',
        showLoading: true
    },
    newsDetail: {
        url: root + '/admin/news/newsDetail',
        method: 'get',
        showLoading: true
    },
    newsAdd: {
        url: root + '/admin/news/newsAdd',
        method: 'post',
        showLoading: true
    },
    newsUpdate: {
        url: root + '/admin/news/newsUpdate',
        method: 'post',
        showLoading: true
    },
    newsDelete: {
        url: root + '/admin/news/newsDelete',
        method: 'post',
        showLoading: true
    },
    // -------------公告----------------------
    noticeList: {
        url: root + '/admin/notice/index',
        method: 'get',
        showLoading: true
    },
    noticeAdd: {
        url: root + '/admin/notice/add',
        method: 'post',
        showLoading: true
    },
    noticeDetail: {
        url: root + '/admin/notice/noticeDetail',
        method: 'get',
        showLoading: true
    },
    noticeDel: {
        url: root + '/admin/notice/deleteNotice',
        method: 'get',
        showLoading: true
    },
    noReadPerson: {
        url: root + '/admin/notice/noReadPerson',
        method: 'get',
        showLoading: true
    },
    readPerson: {
        url: root + '/admin/notice/readPerson',
        method: 'get',
        showLoading: true
    },
    downloadReadPerson: {
        url: root + '/admin/notice/exportAlreadyRead',
        method: 'get',
        responseType: 'blob',
        showLoading: false
    },
    // ---------奖惩动态管理------------
    rewardsList: { // t= 1,2,3,4,5,6,7
        url: root + '/admin/data/list',
        method: 'get',
        showLoading: true
    },
    importDayReport: {
        url: root + '/admin/import/dayReport',
        method: 'post',
        showLoading: true
    },
    importHomeLetter: {
        url: root + '/admin/import/homeBook',
        method: 'post',
        showLoading: true
    },
    importFaceVisit: {
        url: root + '/admin/import/faceVisit',
        method: 'post',
        showLoading: true
    },
    // 导入荣誉榜
    importHonorList: {
        url: root + '/admin/import/honor',
        method: 'post',
        showLoading: true
    },
    // 导入品控产品-
    importProductList: {
        url: root + '/admin/import/cp',
        method: 'post',
        showLoading: true
    },
    // 导入品控服务-
    importServiceList: {
        url: root + '/admin/import/cs',
        method: 'post',
        showLoading: true
    },
    // 导入品控投诉-
    importComplaintList: {
        url: root + '/admin/import/cc',
        method: 'post',
        showLoading: true
    }

}
export default Apis
