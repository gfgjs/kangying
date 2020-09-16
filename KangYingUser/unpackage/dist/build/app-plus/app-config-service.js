
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/guide/guide","pages/index/index","pages/doctor/case","pages/article/article","pages/doctor/see-the-doctor","pages/mall/mall","pages/mall/search","pages/index/online","pages/index/mine","pages/login/login","pages/login/register","pages/card/bind","pages/card/create","pages/doctor/list","pages/doctor/doctor","pages/doctor/chat","pages/mall/cart","pages/doctor/archives","pages/mine/message","pages/mall/create-order","pages/mine/address","pages/mall/pay-result","pages/mine/info","pages/mall/order","pages/mall/order-list","pages/mine/check-appoint","pages/mall/product","pages/article/list","pages/login/verify-code","pages/login/setPassword","pages/card/list","pages/card/card","pages/doctor/chat-list","pages/mine/edit-address","pages/mall/order-details","pages/mine/check-details","pages/mine/create-check-order","pages/mine/feedback","pages/doctor/webview"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"天心医疗","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","enablePullDownRefresh":true},"tabBar":{"color":"#C2CAD5","selectedColor":"#5eb6aa","backgroundColor":"#ffffff","fontSize":"14","list":[{"pagePath":"pages/index/index","iconPath":"static/index/index.png","selectedIconPath":"static/index/index-curr.png","text":"首页"},{"pagePath":"pages/index/online","iconPath":"static/index/online.png","selectedIconPath":"static/index/online-curr.png","text":"在线医院"},{"pagePath":"pages/index/mine","iconPath":"static/index/mine.png","selectedIconPath":"static/index/mine-curr.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"康盈医疗用户端","compilerVersion":"2.8.11","entryPagePath":"pages/guide/guide","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/guide/guide","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"找医生、找医院、查疾病","disabled":false,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":false},{"fontSrc":"/static/iconfont.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","float":"left"}]}}},{"path":"/pages/doctor/case","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/article/article","meta":{},"window":{}},{"path":"/pages/doctor/see-the-doctor","meta":{},"window":{"titleNView":{"type":"transparent","backButton":{"background":"rgba(0,0,0,0)"},"searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"找医生、找医院、查疾病","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/iconfont.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","float":"left"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","background":"rgba(0,0,0,0)","redDot":false}]}}},{"path":"/pages/mall/mall","meta":{},"window":{"enablePullDownRefresh":true,"titleNView":{"type":"transparent","backButton":{"background":"rgba(0,0,0,0)"},"searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"药品名称和种类","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/mall/search","meta":{},"window":{"enablePullDownRefresh":true,"titleNView":{"type":"default","backButton":{"background":"rgba(0,0,0,0)"},"searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"药品名称和种类","disabled":false,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"搜索","fontSize":"14","color":"#303133","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/index/online","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":{"type":"default","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"找医生、找医院、查疾病","disabled":false,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":false},{"fontSrc":"/static/iconfont.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","float":"left"}]}}},{"path":"/pages/index/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":false}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarBackgroundColor":"white"}},{"path":"/pages/card/bind","meta":{},"window":{"navigationBarTitleText":"绑定就诊卡"}},{"path":"/pages/card/create","meta":{},"window":{}},{"path":"/pages/doctor/list","meta":{},"window":{}},{"path":"/pages/doctor/doctor","meta":{},"window":{"titleNView":{"type":"transparent","backButton":{"background":"rgba(0,0,0,0)"}}}},{"path":"/pages/doctor/chat","meta":{},"window":{"titleNView":{"type":"default","backButton":{"background":"rgba(0,0,0,0)"}},"softinputMode":"adjustResize"}},{"path":"/pages/mall/cart","meta":{},"window":{}},{"path":"/pages/doctor/archives","meta":{},"window":{}},{"path":"/pages/mine/message","meta":{},"window":{}},{"path":"/pages/mall/create-order","meta":{},"window":{}},{"path":"/pages/mine/address","meta":{},"window":{}},{"path":"/pages/mall/pay-result","meta":{},"window":{}},{"path":"/pages/mine/info","meta":{},"window":{"navigationBarBackgroundColor":"white"}},{"path":"/pages/mall/order","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/mall/order-list","meta":{},"window":{}},{"path":"/pages/mine/check-appoint","meta":{},"window":{}},{"path":"/pages/mall/product","meta":{},"window":{"titleNView":{"type":"default","backButton":{"background":"rgba(0,0,0,0)"},"buttons":[{"fontSrc":"/static/iconfont.ttf","text":"","fontSize":"26","color":"#303133","background":"rgba(0,0,0,0)","redDot":false}]}}},{"path":"/pages/article/list","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/login/verify-code","meta":{},"window":{}},{"path":"/pages/login/setPassword","meta":{},"window":{}},{"path":"/pages/card/list","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/card/card","meta":{},"window":{}},{"path":"/pages/doctor/chat-list","meta":{},"window":{"navigationBarBackgroundColor":"#5EB6AA","navigationBarTextStyle":"white"}},{"path":"/pages/mine/edit-address","meta":{},"window":{}},{"path":"/pages/mall/order-details","meta":{},"window":{}},{"path":"/pages/mine/check-details","meta":{},"window":{}},{"path":"/pages/mine/create-check-order","meta":{},"window":{}},{"path":"/pages/mine/feedback","meta":{},"window":{}},{"path":"/pages/doctor/webview","meta":{},"window":{"titleNView":{"type":"transparent"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
