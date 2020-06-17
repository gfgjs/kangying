
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/guide/guide","pages/index/index","pages/index/mine","pages/index/patient","pages/mine/setting","pages/mine/suggest","pages/doctor/add-medicine","pages/doctor/pharmacist-order","pages/doctor/test-order","pages/doctor/drug-audit","pages/doctor/prescription","pages/doctor/set-price","pages/doctor/image-exam","pages/doctor/check-list","pages/doctor/patient","pages/doctor/elec-case","pages/doctor/auxiliary-list","pages/doctor/register-role","pages/doctor/doctor-room","pages/doctor/consulting-desk","pages/login/register"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"医生端","navigationBarBackgroundColor":"#5EB6AA","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#C2CAD5","selectedColor":"#5eb6aa","borderStyle":"#d3d3d3","backgroundColor":"#ffffff","fontSize":"14","list":[{"pagePath":"pages/index/index","iconPath":"static/index/index.png","selectedIconPath":"static/index/index-curr.png","text":"首页"},{"pagePath":"pages/index/patient","iconPath":"static/index/online.png","selectedIconPath":"static/index/online-curr.png","text":"在线医院"},{"pagePath":"pages/index/mine","iconPath":"static/index/mine.png","selectedIconPath":"static/index/mine-curr.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"KangYingDoctor","compilerVersion":"2.7.9","entryPagePath":"pages/guide/guide","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/guide/guide","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent"}}},{"path":"/pages/index/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/index/patient","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"default","titleText":"患者管理"}}},{"path":"/pages/mine/setting","meta":{},"window":{}},{"path":"/pages/mine/suggest","meta":{},"window":{}},{"path":"/pages/doctor/add-medicine","meta":{},"window":{"titleNView":{"type":"default","buttons":[{"text":"下一步","fontSize":"16","background":"rgba(0,0,0,0)"}]}}},{"path":"/pages/doctor/pharmacist-order","meta":{},"window":{}},{"path":"/pages/doctor/test-order","meta":{},"window":{}},{"path":"/pages/doctor/drug-audit","meta":{},"window":{}},{"path":"/pages/doctor/prescription","meta":{},"window":{}},{"path":"/pages/doctor/set-price","meta":{},"window":{}},{"path":"/pages/doctor/image-exam","meta":{},"window":{}},{"path":"/pages/doctor/check-list","meta":{},"window":{}},{"path":"/pages/doctor/patient","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/doctor/elec-case","meta":{},"window":{}},{"path":"/pages/doctor/auxiliary-list","meta":{},"window":{}},{"path":"/pages/doctor/register-role","meta":{},"window":{}},{"path":"/pages/doctor/doctor-room","meta":{},"window":{}},{"path":"/pages/doctor/consulting-desk","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});