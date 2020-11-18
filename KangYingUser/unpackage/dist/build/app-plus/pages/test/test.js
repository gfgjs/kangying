!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e){t.exports={"no-data":{display:"flex",justifyContent:"center",paddingTop:"30",paddingRight:"30",paddingBottom:"30",paddingLeft:"30",fontSize:"14",color:"#cccccc",width:100},"uni-radio-input-checked":{backgroundColor:"#5eb6aa",borderColor:"#5eb6aa"},"uni-switch-input-checked":{backgroundColor:"#5eb6aa",borderColor:"#5eb6aa"},"rich-text-img-width":{maxWidth:100},"linear-background":{backgroundImage:"linear-gradient(114deg, #70d8c9 0%, #5eb6aa 74%)"},"box-shadow":{boxShadow:"0px 0px 19px 2px rgba(11, 126, 255, 0.1)"},price:{color:"#F71A1A"},bold:{fontWeight:"bold"},ellipsis:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},"nav-place":{paddingTop:"44",boxSizing:"content-box"},"common-place":{height:"10"},"foot-place":{height:"50"},"row-title":{paddingTop:"20",paddingRight:"20",paddingBottom:"20",paddingLeft:"20",display:"flex",alignItems:"center",fontSize:"16",fontWeight:"bold","content::before":"''","width::before":"4","height::before":"20","position::before":"absolute","left::before":0,"background::before":"#5eb6aa","boxShadow::before":"0px 8px 21px 0px rgba(36, 131, 253, 0.3)","borderTopRightRadius::before":"3","borderBottomRightRadius::before":"3"},title:{fontWeight:"bold",fontSize:"16"},"little-title":{fontSize:"13",color:"#5D5D5D"},button:{backgroundColor:"#5eb6aa",color:"#FFFFFF",width:36,fontSize:"14",height:"36",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4",transitionDuration:100,transitionTimingFunction:"linear",boxShadow:"0px 0px 19px 1px rgba(112, 216, 201, 0.1)",backgroundImage:"linear-gradient(114deg, #70d8c9 0%, #5eb6aa 74%)","opacity:active":.8},"@TRANSITION":{button:{duration:100,timingFunction:"linear"}},"button-cancel":{background:"#e9eaeb",color:"#7C7C7C",boxShadow:"0px 0px 19px 1px rgba(233, 234, 235, 0.4)"}}},function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,u,a,c){var d,l="function"==typeof t?t.options:t;if(a){l.components||(l.components={});var f=Object.prototype.hasOwnProperty;for(var p in a)f.call(a,p)&&!f.call(l.components,p)&&(l.components[p]=a[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):o&&(d=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(l.functional){l._injectStyles=d;var h=l.render;l.render=function(t,e){return d.call(e),h(t,e)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,d):[d]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},,function(t,e,n){"use strict";var r=n(13),o=n(9),i=n(1);var s=Object(i.a)(o.default,r.b,r.c,!1,null,null,"3d119945",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(19).default,this.options.style):Object.assign(this.options.style,n(19).default)}).call(s),e.default=s.exports},function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)},e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(u.length>1){var c=u.pop();a=u.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=u[0];console[s](a)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SDK_APP_ID=e.HOST=void 0;e.HOST="https://app.loopyun.com";e.SDK_APP_ID=1400440995},,,,function(t,e,n){"use strict";var r=n(10),o=n.n(r);e.default=o.a},function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(5),i=(n(17),n(22)),s=t("TXTRTC-SdkWX"),u={data:function(){return{remoteVideoHeight:0,sdkAppId:1400440995,roomId:"",vvh:100,localUserId:"",localUserSig:"",remoteUserId:"",remoteUserSig:"",watingStatus:!0,ptop:0,watingHeight:0,watingWidth:0,callInfo:{},innerAudioContext:{},hasMuteAudio:!1,hasMuteVideo:!1,hasMuteCalling:!1,windowStatus:0}},watch:{windowStatus:function(t){t&&this.enterRoom()}},onLoad:function(t){var e=this;uni.getSystemInfo({success:function(t){e.watingWidth=t.windowWidth,e.watingHeight=t.windowHeight}}),s.checkPermission((function(t){r("log",t," at pages/test/test.nvue:132")})),s.setListener((function(t){r("log",t," at pages/test/test.nvue:137"),"onEnterRoom"==t.type||"onExitRoom"==t.type||"onSwitchRole"==t.type||"onUserVideoAvailable"==t.type&&e.onUserVideoAvailable(t.data)}))},beforeDestroy:function(){this.exitRoom()},methods:{rePermission:function(){s.checkPermission((function(t){r("log",t," at pages/test/test.nvue:161")}))},onUserVideoAvailable:function(t){var e=t.userId,n=t.available,r=this.$refs.remoteVideoView;n?r.startRemoteView(e):r.stopRemoteView(e)},enterRoom:function(t){var e=this,n=Date.now();(0,i.request_getUserSig)({uni:uni,data:{userId:n}}).then((function(t){s.enterRoom({sdkAppId:o.SDK_APP_ID,roomId:11111,role:20,userId:n,userSig:t.data},0),e.startVideo()}))},startVideo:function(){var t=this;this.stopVideo(),r("log","========="," at pages/test/test.nvue:199"),setTimeout((function(){s.startLocalAudio(),t.$refs.videoView.startLocalPreview(!0)}))},stopLocalPreview:function(){s.stopLocalAudio(),this.$refs.videoView.stopLocalPreview()},stopVideo:function(){s.stopLocalAudio();var t=this.$refs.videoView;t&&t.stopLocalPreview()},exitRoom:function(){this.stopVideo(),s.exitRoom()},createGroup:function(){},joinGroup:function(){}},computed:{}};e.default=u}).call(this,n(16).default,n(4).default)},function(t,e){t.exports={box:{flex:1},buttons:{position:"fixed",top:"100"},button:{width:"100",color:"#FF0000",flex:1,marginTop:"4",marginRight:"4",marginBottom:"4",marginLeft:"4","opacity:active":.5},"remote-view":{flex:8},"bottom-outer":{flex:2,flexDirection:"row"},"local-view":{flex:3},"handle-outer":{flex:7,justifyContent:"center",flexDirection:"row"},"handle-buttons":{flex:1,flexDirection:"column",justifyContent:"center"},"button-text":{fontSize:"14",flexDirection:"column"},wating:{position:"fixed",backgroundColor:"#5eb6aa",justifyContent:"center",alignItems:"center"},"w-button":{position:"fixed",bottom:"100",width:"100",height:"40",borderColor:"#FFFFFF",borderStyle:"solid",borderWidth:"1",borderRadius:"4",justifyContent:"center",alignItems:"center"},answer:{right:"50",borderColor:"#008000"},refuse:{left:"50",borderColor:"#FF0000"},"wating-answer":{transform:"translateX(-50%)",position:"fixed"},"wating-tips":{transform:"translateX(-50%)",position:"fixed",bottom:"400",borderWidth:0},"w-b-text":{color:"#FFFFFF"}}},,function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["box"]},[1===t.windowStatus?n("view",{staticStyle:{flex:"1"}},[n("txtrtc_video_view",{ref:"remoteVideoView",staticClass:["video-view","remote-view"]}),n("view",{staticClass:["bottom-outer"]},[n("txtrtc_video_view",{ref:"videoView",staticClass:["video-view","local-view"]}),n("view",{staticClass:["handle-outer"]},[n("view",{staticClass:["handle-buttons"]},[n("view",{staticClass:["button"],on:{click:t.exitRoom}},[n("u-text",{staticClass:["button-text"],staticStyle:{color:"red"}},[t._v("\u6302\u65ad")])]),n("view",{staticClass:["button"],on:{click:function(t){}}},[n("u-text",{staticClass:["button-text"]},[t._v("\u51ef\u7b52\u901a\u8bdd")])])]),n("view",{staticClass:["handle-buttons"]},[n("view",{staticClass:["button"]},[n("u-text",{staticClass:["button-text"]},[t._v("\u7b52\u6444\u50cf\u5934")])]),n("view",{staticClass:["button"]},[n("u-text",{staticClass:["button-text"]},[t._v("\u51ef\u65af\u8bdd\u7b52")])])]),n("view",{staticClass:["handle-buttons"]},[n("view",{staticClass:["button"]},[n("u-text",{staticClass:["button-text"]},[t._v("\u524d\u7f6e")]),n("u-text",{staticClass:["button-text"]},[t._v("\u6444\u50cf\u5934")])])])])],1)],1):t._e(),0===t.windowStatus?n("view",{staticClass:["wating"],on:{click:function(e){t.windowStatus=1}}},[n("view",{staticClass:["w-button","wating-tips"]},[n("u-text",{staticClass:["w-b-text"]},[t._v("\u7b49\u5f85\u63a5\u542c...")])]),n("view",{staticClass:["w-button","answer"],on:{click:function(t){}}},[n("u-text",{staticClass:["w-b-text"]},[t._v("\u63a5\u542c")])]),n("view",{staticClass:["w-button","refuse"],on:{click:function(t){}}},[n("u-text",{staticClass:["w-b-text"]},[t._v("\u62d2\u7edd")])])]):t._e()])])},o=[]},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(15).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=g,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=e.createNamespacedHelpers=e.Store=e.default=void 0;var r=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function i(t){return null!==t&&"object"==typeof t}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.hasChild=function(t){return t in this._children},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){o(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,u);var a=function(t){this.register([],t,!1)};a.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},a.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},a.prototype.update=function(t){!function t(e,n,r){0;if(n.update(r),r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},a.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new s(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&o(e.modules,(function(e,o){r.register(t.concat(o),e,n)}))},a.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)},a.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return e.hasChild(n)};var c;var d=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new a(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var i=this,s=this.dispatch,u=this.commit;this.dispatch=function(t,e){return s.call(i,t,e)},this.commit=function(t,e,n){return u.call(i,t,e,n)},this.strict=o;var d=this._modules.root.state;_(this,d,[],this._modules.root),h(this,d),n.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){r.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){r.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=d;var l={state:{configurable:!0}};function f(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function p(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};o(i,(function(e,n){s[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var u=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:s}),c.config.silent=u,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),c.nextTick((function(){return r.$destroy()})))}function _(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!i&&!o){var u=m(e,n.slice(0,-1)),a=n[n.length-1];t._withCommit((function(){c.set(u,a,r.state)}))}var d=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=v(n,r,o),s=i.payload,u=i.options,a=i.type;return u&&u.root||(a=e+a),t.dispatch(a,s)},commit:r?t.commit:function(n,r,o){var i=v(n,r,o),s=i.payload,u=i.options,a=i.type;u&&u.root||(a=e+a),t.commit(a,s,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,n)}}}),o}(t,s,n);r.forEachMutation((function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,r.state,e)}))}(t,s+n,e,d)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,r,o,d)})),r.forEachGetter((function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,s+n,e,d)})),r.forEachChild((function(r,i){_(t,e,n.concat(i),r,o)}))}function m(t,e){return e.reduce((function(t,e){return t[e]}),t)}function v(t,e,n){return i(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=v(t,e,n),i=o.type,s=o.payload,u=(o.options,{type:i,payload:s}),a=this._mutations[i];a&&(this._withCommit((function(){a.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(u,r.state)})))},d.prototype.dispatch=function(t,e){var n=this,r=v(t,e),o=r.type,i=r.payload,s={type:o,payload:i},u=this._actions[o];if(u){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(t){0}var a=u.length>1?Promise.all(u.map((function(t){return t(i)}))):u[0](i);return new Promise((function(t,e){a.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(t){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(t){0}e(t)}))}))}},d.prototype.subscribe=function(t,e){return f(t,this._subscribers,e)},d.prototype.subscribeAction=function(t,e){return f("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])})),p(this)},d.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},d.prototype.hotUpdate=function(t){this._modules.update(t),p(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,l);var b=S((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=O(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n}));e.mapState=b;var y=S((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=O(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));e.mapMutations=y;var w=S((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||O(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0})),n}));e.mapGetters=w;var x=S((function(t,e){var n={};return C(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=O(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));e.mapActions=x;var q=function(t){return{mapState:b.bind(null,t),mapGetters:w.bind(null,t),mapMutations:y.bind(null,t),mapActions:x.bind(null,t)}};function C(t){return function(t){return Array.isArray(t)||i(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function S(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function O(t,e,n){return t._modulesNamespaceMap[n]}e.createNamespacedHelpers=q;var E={Store:d,install:g,version:"3.4.0",mapState:b,mapMutations:y,mapGetters:w,mapActions:x,createNamespacedHelpers:q};e.default=E},,function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},,function(t,e,n){"use strict";n.r(e);n(14);var r=n(3);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),r.default.mpType="page",r.default.route="pages/test/test",r.default.el="#root",new Vue(r.default)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.request_payPexam=e.request_examInfo=e.request_examList=e.request_searchHot=e.request_medInfo=e.request_medList=e.request_medCates=e.request_medHeaderData=e.request_doctorInfo=e.request_doctorList=e.request_cates=e.request_patientCardAdd=e.request_patientList=e.request_articleDetail=e.request_articleList=e.request_searchHome=e.request_delAddress=e.request_editAddress=e.request_addAddress=e.request_getAreaList=e.request_recordLast=e.request_prescriptionInfo=e.request_prescriptionPay=e.request_prescriptionList=e.request_recordList=e.request_recordAdd=e.request_orderPay=e.request_orderConfirm=e.request_orderCancel=e.request_orderInfo=e.request_orderList=e.request_orderSubmit=e.request_getFreight=e.request_cartDel=e.request_cartAdd=e.request_cartList=e.request_getUserSig=e.request_getAddressList=e.request_upUserInfo=e.request_userInfo=e.request_login=e.request_codeLogin=e.request_register=e.request_sendLoginSms=e.request_sendReSms=e.request_imInit=e.request_uploadImg=e.request_version=e.request_clearToken=e.request_init=e.request=void 0;var r,o=n(5),i="",s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0,u=arguments.length>3?arguments[3]:void 0;return s=s||"POST",u=u||"application/x-www-form-urlencoded",i||(i=r.getStorageSync("LOGIN_MESSAGE").token),e.token&&(i=e.token),e.noLoading||r.showLoading(),r.request({method:s,url:o.HOST+n,data:e.data||{},header:{Authorization:i,"Content-Type":u}}).then((function(t){return e.noLoading||r.hideLoading(),t=t[1].data})).then((function(t){return t})).catch((function(e){return t("log","---api---:",o.HOST+n,";","---err---:",e," at common/https.js:46"),e}))};e.request=s;e.request_init=function(t){r=t.uni};e.request_clearToken=function(){i=""};e.request_version=function(t){return s(t,"/v1/p/version")};e.request_uploadImg=function(t){return new Promise((function(e,n){t.uni.chooseImage({success:function(r){var i=r.tempFilePaths;t.uni.uploadFile({url:o.HOST+"/v1/p/upload_img",filePath:i[0],name:"img",formData:{user:"kangying"},success:function(t){e(JSON.parse(t.data))},fail:function(t){n(t)}})}})}))};e.request_imInit=function(t){return s(t,"/v1/p/im/init")};e.request_sendReSms=function(t){return s(t,"/v1/p/user/sendReSms")};e.request_sendLoginSms=function(t){return s(t,"/v1/p/user/sendLoginSms")};e.request_register=function(t){return s(t,"/v1/p/user/register")};e.request_codeLogin=function(t){return s(t,"/v1/p/user/codeLogin")};e.request_login=function(t){return s(t,"/v1/p/user/login")};e.request_userInfo=function(t){return s(t,"/v1/u/user/info")};e.request_upUserInfo=function(t){return s(t,"/v1/u/user/up")};e.request_getAddressList=function(t){return s(t,"/v1/u/address/list","GET")};e.request_getUserSig=function(t){return s(t,"/v1/p/im/getUserSig","GET")};e.request_cartList=function(t){return s(t,"/v1/u/cart/list")};e.request_cartAdd=function(t){return s(t,"/v1/u/cart/add")};e.request_cartDel=function(t){return s(t,"/v1/u/cart/del")};e.request_getFreight=function(t){return s(t,"/v1/u/medicine/getFreight","GET")};e.request_orderSubmit=function(t){return s(t,"/v1/u/medicine/orderSubmit",null,"application/json")};e.request_orderList=function(t){return s(t,"/v1/u/medicine/orderList","GET")};e.request_orderInfo=function(t){return s(t,"/v1/u/medicine/orderInfo","GET")};e.request_orderCancel=function(t){return s(t,"/v1/u/medicine/orderCancel","GET")};e.request_orderConfirm=function(t){return s(t,"/v1/u/medicine/orderConfirm","POST")};e.request_orderPay=function(t){return s(t,"/v1/u/medicine/orderPay")};e.request_recordAdd=function(t){return s(t,"/v1/u/record/add")};e.request_recordList=function(t){return s(t,"/v1/u/record/list")};e.request_prescriptionList=function(t){return s(t,"/v1/u/prescription/list")};e.request_prescriptionPay=function(t){return s(t,"/v1/u/prescription/pay")};e.request_prescriptionInfo=function(t){return s(t,"/v1/u/prescription/info","GET")};e.request_recordLast=function(t){return s(t,"/v1/u/record/last","GET")};e.request_getAreaList=function(t){return s(t,"/v1/p/area/list","GET")};e.request_addAddress=function(t){return s(t,"/v1/u/address/add")};e.request_editAddress=function(t){return s(t,"/v1/u/address/edit")};e.request_delAddress=function(t){return s(t,"/v1/u/address/del")};e.request_searchHome=function(t){return s(t,"/v1/p//search/home","GET")};e.request_articleList=function(t){return s(t,"/v1/p/article/list","GET")};e.request_articleDetail=function(t){return s(t,"/v1/p/article/detail","GET")};e.request_patientList=function(t){return s(t,"/v1/u/patient_card/list","GET")};e.request_patientCardAdd=function(t){return s(t,"/v1/u/patient_card/add","POST")};e.request_cates=function(t){return s(t,"/v1/p/doctor/cates","GET")};e.request_doctorList=function(t){return s(t,"/v1/p/doctor/list","GET")};e.request_doctorInfo=function(t){return s(t,"/v1/p/doctor/info","GET")};e.request_medHeaderData=function(t){return s(t,"/v1/p/medicine/headerData","GET")};e.request_medCates=function(t){return s(t,"/v1/p/medicine/cate","GET")};e.request_medList=function(t){return s(t,"/v1/p/medicine/list","GET")};e.request_medInfo=function(t){return s(t,"/v1/p/medicine/info","GET")};e.request_searchHot=function(t){return s(t,"/v1/p/search/hot","GET")};e.request_examList=function(t){return s(t,"/v1/p/physical_exam/list","GET")};e.request_examInfo=function(t){return s(t,"/v1/p/physical_exam/info","GET")};e.request_payPexam=function(t){return s(t,"/v1/u/payPexam")}}).call(this,n(4).default)}]);