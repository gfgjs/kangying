!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=24)}([function(t,e){t.exports={}},function(t,e,o){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"==typeof __channelId__&&__channelId__}function r(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var s=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=n(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SDK_APP_ID=e.HOST=void 0;e.HOST="https://app.loopyun.com";e.SDK_APP_ID=1400440995},function(t,e,o){"use strict";function n(t,e,o,n,i,r,s,a,u,c){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=o,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";var n=o(13),i=o(7),r=o(3);var s=Object(r.a)(i.default,n.b,n.c,!1,null,null,"5a328dd0",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(19).default,this.options.style):Object.assign(this.options.style,o(19).default)}).call(s),e.default=s.exports},,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=g,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=e.createNamespacedHelpers=e.Store=e.default=void 0;var n=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach((function(o){return e(t[o],o)}))}function r(t){return null!==t&&"object"==typeof t}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var o=t.state;this.state=("function"==typeof o?o():o)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.hasChild=function(t){return t in this._children},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){i(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,a);var u=function(t){this.register([],t,!1)};u.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,o){return t+((e=e.getChild(o)).namespaced?o+"/":"")}),"")},u.prototype.update=function(t){!function t(e,o,n){0;if(o.update(n),n.modules)for(var i in n.modules){if(!o.getChild(i))return void 0;t(e.concat(i),o.getChild(i),n.modules[i])}}([],this.root,t)},u.prototype.register=function(t,e,o){var n=this;void 0===o&&(o=!0);var r=new s(e,o);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&i(e.modules,(function(e,i){n.register(t.concat(i),e,o)}))},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];e.getChild(o).runtime&&e.removeChild(o)},u.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];return e.hasChild(o)};var c;var l=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var o=t.plugins;void 0===o&&(o=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var r=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(r,t,e)},this.commit=function(t,e,o){return a.call(r,t,e,o)},this.strict=i;var l=this._modules.root.state;v(this,l,[],this._modules.root),h(this,l),o.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){n.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){n.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=l;var f={state:{configurable:!0}};function p(t,e,o){return e.indexOf(t)<0&&(o&&o.prepend?e.unshift(t):e.push(t)),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;v(t,o,[],t._modules.root,!0),h(t,o,e)}function h(t,e,o){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};i(r,(function(e,o){s[o]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,o,{get:function(){return t._vm[o]},enumerable:!0})}));var a=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:s}),c.config.silent=a,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),n&&(o&&t._withCommit((function(){n._data.$$state=null})),c.nextTick((function(){return n.$destroy()})))}function v(t,e,o,n,i){var r=!o.length,s=t._modules.getNamespace(o);if(n.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=n),!r&&!i){var a=m(e,o.slice(0,-1)),u=o[o.length-1];t._withCommit((function(){c.set(a,u,n.state)}))}var l=n.context=function(t,e,o){var n=""===e,i={dispatch:n?t.dispatch:function(o,n,i){var r=_(o,n,i),s=r.payload,a=r.options,u=r.type;return a&&a.root||(u=e+u),t.dispatch(u,s)},commit:n?t.commit:function(o,n,i){var r=_(o,n,i),s=r.payload,a=r.options,u=r.type;a&&a.root||(u=e+u),t.commit(u,s,a)}};return Object.defineProperties(i,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var o={},n=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,n)===e){var r=i.slice(n);Object.defineProperty(o,r,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=o}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,o)}}}),i}(t,s,o);n.forEachMutation((function(e,o){!function(t,e,o,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){o.call(t,n.state,e)}))}(t,s+o,e,l)})),n.forEachAction((function(e,o){var n=e.root?o:s+o,i=e.handler||e;!function(t,e,o,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var i,r=o.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(i=r)&&"function"==typeof i.then||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}(t,n,i,l)})),n.forEachGetter((function(e,o){!function(t,e,o,n){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return o(n.state,n.getters,t.state,t.getters)}}(t,s+o,e,l)})),n.forEachChild((function(n,r){v(t,e,o.concat(r),n,i)}))}function m(t,e){return e.reduce((function(t,e){return t[e]}),t)}function _(t,e,o){return r(t)&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}function g(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:o});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[o].concat(t.init):o,e.call(this,t)}}function o(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},l.prototype.commit=function(t,e,o){var n=this,i=_(t,e,o),r=i.type,s=i.payload,a=(i.options,{type:r,payload:s}),u=this._mutations[r];u&&(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,n.state)})))},l.prototype.dispatch=function(t,e){var o=this,n=_(t,e),i=n.type,r=n.payload,s={type:i,payload:r},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,o.state)}))}catch(t){0}var u=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){u.then((function(e){try{o._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,o.state)}))}catch(t){0}t(e)}),(function(t){try{o._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,o.state,t)}))}catch(t){0}e(t)}))}))}},l.prototype.subscribe=function(t,e){return p(t,this._subscribers,e)},l.prototype.subscribeAction=function(t,e){return p("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},l.prototype.watch=function(t,e,o){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,o)},l.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},l.prototype.registerModule=function(t,e,o){void 0===o&&(o={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),o.preserveState),h(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var o=m(e.state,t.slice(0,-1));c.delete(o,t[t.length-1])})),d(this)},l.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},l.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,f);var y=E((function(t,e){var o={};return x(e).forEach((function(e){var n=e.key,i=e.val;o[n]=function(){var e=this.$store.state,o=this.$store.getters;if(t){var n=O(this.$store,"mapState",t);if(!n)return;e=n.context.state,o=n.context.getters}return"function"==typeof i?i.call(this,e,o):e[i]},o[n].vuex=!0})),o}));e.mapState=y;var b=E((function(t,e){var o={};return x(e).forEach((function(e){var n=e.key,i=e.val;o[n]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];var n=this.$store.commit;if(t){var r=O(this.$store,"mapMutations",t);if(!r)return;n=r.context.commit}return"function"==typeof i?i.apply(this,[n].concat(e)):n.apply(this.$store,[i].concat(e))}})),o}));e.mapMutations=b;var w=E((function(t,e){var o={};return x(e).forEach((function(e){var n=e.key,i=e.val;i=t+i,o[n]=function(){if(!t||O(this.$store,"mapGetters",t))return this.$store.getters[i]},o[n].vuex=!0})),o}));e.mapGetters=w;var C=E((function(t,e){var o={};return x(e).forEach((function(e){var n=e.key,i=e.val;o[n]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];var n=this.$store.dispatch;if(t){var r=O(this.$store,"mapActions",t);if(!r)return;n=r.context.dispatch}return"function"==typeof i?i.apply(this,[n].concat(e)):n.apply(this.$store,[i].concat(e))}})),o}));e.mapActions=C;var A=function(t){return{mapState:y.bind(null,t),mapGetters:w.bind(null,t),mapMutations:b.bind(null,t),mapActions:C.bind(null,t)}};function x(t){return function(t){return Array.isArray(t)||r(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function E(t){return function(e,o){return"string"!=typeof e?(o=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,o)}}function O(t,e,o){return t._modulesNamespaceMap[o]}e.createNamespacedHelpers=A;var S={Store:l,install:g,version:"3.4.0",mapState:y,mapMutations:b,mapGetters:w,mapActions:C,createNamespacedHelpers:A};e.default=S},function(t,e,o){"use strict";var n=o(8),i=o.n(n);e.default=i.a},function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(6),r=o(2);function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=t("TXTRTC-SdkWX"),l={data:function(){return{watingHeight:0,watingWidth:0,innerAudioContext:{},hasMuteAudio:!1,hasMuteVideo:!1,hasMuteCalling:!1,cameraTypeStatus:!0}},watch:{REMOTE_CALL_STATE:function(t){switch(t){case 2:this.remoteAnswer();break;case 3:this.remoteRefuse();break;case 5:this.remoteHungup()}}},onLoad:function(){var t=this;this.startWatingAudio(),uni.getSystemInfo({success:function(e){t.watingWidth=e.windowWidth,t.watingHeight=e.windowHeight}}),this.rePermission(),c.setListener((function(e){"onEnterRoom"==e.type?n("log","\u8fdb\u5165\u623f\u95f4"," at pages/doctor/telephone.nvue:131"):"onExitRoom"==e.type?n("log","\u79bb\u5f00\u623f\u95f4"," at pages/doctor/telephone.nvue:134"):"onUserVideoAvailable"==e.type&&t.onUserVideoAvailable(e.data)}))},onBackPress:function(t){var e=this;return"navigateBack"!==t.from&&(uni.showModal({title:"\u63d0\u793a",content:"\u5c06\u7ed3\u675f\u901a\u8bdd\uff0c\u662f\u5426\u786e\u5b9a\uff1f",success:function(t){t.confirm&&e.hungupCalling()}}),!0)},beforeDestroy:function(){this.UPDATE_CALL_STATE(0),this.UPDATE_REMOTE_CALL_STATE(0),this.UPDATE_CURRENT_CALL({}),this.stopWatingAudio()},methods:a({startWatingAudio:function(){var t=uni.createInnerAudioContext();t.autoplay=!0,t.loop=!0,t.src="http://localhost/static/telephone.wav",t.onPlay((function(){n("log","\u5f00\u59cb\u64ad\u653e"," at pages/doctor/telephone.nvue:171")})),t.onError((function(t){n("log",t.errMsg," at pages/doctor/telephone.nvue:174"),n("log",t.errCode," at pages/doctor/telephone.nvue:175")})),this.innerAudioContext=t},stopWatingAudio:function(){try{this.innerAudioContext&&(this.innerAudioContext&&this.innerAudioContext.stop(),this.innerAudioContext&&this.innerAudioContext.destroy())}catch(t){n("log","err:",t," at pages/doctor/telephone.nvue:186")}},remoteAnswer:function(){this.UPDATE_CALL_STATE(4),this.enterRoom(),this.stopWatingAudio()},remoteRefuse:function(){uni.navigateBack(),this.stopWatingAudio()},remoteHungup:function(){this.exitRoom()},answerCalling:function(){var t=this;this.UPDATE_CALL_STATE(2).then((function(){t.UPDATE_CALL_STATE(4).then((function(){t.enterRoom()}))})),this.stopWatingAudio()},refuseCalling:function(){this.UPDATE_CALL_STATE(3),uni.navigateBack()},hungupCalling:function(){this.UPDATE_CALL_STATE(5),this.exitRoom(),this.stopWatingAudio()},rePermission:function(){c.checkPermission((function(t){n("log",t," at pages/doctor/telephone.nvue:228")}))},onUserVideoAvailable:function(t){var e=t.userId,o=t.available,n=this.$refs.remoteVideoView;o&&n?n.startRemoteView(e):n.stopRemoteView(e)},muteCalling:function(){this.hasMuteCalling=!this.hasMuteCalling,this.muteLocalAudio(),this.muteLocalVideo()},muteLocalVideo:function(){if(this.hasMuteVideo=!this.hasMuteVideo,c.muteLocalVideo(),this.hasMuteVideo){var t=this.$refs.videoView;t&&t.stopLocalPreview(!0)}else{var e=this.$refs.videoView;e&&e.startLocalPreview(!0)}},muteLocalAudio:function(){this.hasMuteAudio=!this.hasMuteAudio,c.muteLocalAudio(),this.hasMuteAudio?c.stopLocalAudio():c.startLocalAudio()},enterRoom:function(){var t=this;setTimeout((function(){c.enterRoom({sdkAppId:r.SDK_APP_ID,roomId:t.currentCall.roomId,role:20,userId:t.userID,userSig:t.userSig},0),setTimeout((function(){t.startVideo()}))}))},startVideo:function(){var t=this;this.stopVideo(),setTimeout((function(){c.startLocalAudio(),t.$refs.videoView.startLocalPreview(!0)}))},changeCamera:function(){this.cameraTypeStatus=!this.cameraTypeStatus;var t=this.$refs.videoView;t.stopLocalPreview(),t.startLocalPreview(this.cameraTypeStatus)},stopLocalPreview:function(){c.stopLocalAudio(),this.$refs.videoView.stopLocalPreview()},stopVideo:function(){c.stopLocalAudio();var t=this.$refs.videoView;t&&t.stopLocalPreview()},exitRoom:function(){this.stopVideo(),c.exitRoom(),uni.navigateBack()}},(0,i.mapActions)(["UPDATE_CALL_STATE","UPDATE_REMOTE_CALL_STATE","UPDATE_CURRENT_CALL"])),computed:a({},(0,i.mapGetters)(["userInfo","CALL_STATE","REMOTE_CALL_STATE","userSig","userID","currentCall"]))};e.default=l}).call(this,o(17).default,o(1).default)},function(t,e){t.exports={box:{flex:1},buttons:{position:"fixed",top:"100"},button:{width:"100",color:"#FF0000",flex:1,paddingTop:"8",paddingRight:"10",paddingBottom:"8",paddingLeft:"10","opacity:active":.5},"remote-view":{flex:8},"bottom-outer":{flex:2,flexDirection:"row"},"local-view":{flex:3},"handle-outer":{flex:7,justifyContent:"center",flexDirection:"row"},"handle-buttons":{flex:1},"button-style":{flex:2,justifyContent:"center",alignItems:"center",backgroundColor:"#5EB6AA",boxShadow:"0px 0px 19px 1px rgba(112, 216, 201, 0.1)",backgroundImage:"linear-gradient(114deg, #70d8c9 0%, #5EB6AA 74%)"},"button-text":{fontSize:"14",color:"#666666"},wating:{position:"fixed",backgroundColor:"#5EB6AA",justifyContent:"center",alignItems:"center"},"w-button":{position:"fixed",bottom:"100",width:"100",height:"40",borderColor:"rgba(255,255,255,0.5)",borderStyle:"solid",borderWidth:"1",borderRadius:"4",justifyContent:"center",alignItems:"center",boxShadow:"0px 0px 19px 1px rgba(255, 255, 255, 0.4)",backgroundColor:"#E80505"},answer:{right:"50",backgroundColor:"#49C628"},refuse:{left:"50",backgroundColor:"#E80505"},"wating-answer":{transform:"translateX(-50%)",position:"fixed"},"wating-tips":{transform:"translateX(-50%)",position:"fixed",bottom:"400",borderWidth:0},"w-b-text":{color:"#eeeeee",fontSize:"14"}}},,,,function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["box"]},[4==t.CALL_STATE?o("view",{staticStyle:{flex:"1"}},[o("txtrtc_video_view",{ref:"remoteVideoView",staticClass:["video-view","remote-view"]}),o("view",{staticClass:["bottom-outer"]},[o("txtrtc_video_view",{ref:"videoView",staticClass:["video-view","local-view"]}),o("view",{staticClass:["handle-outer"]},[o("view",{staticClass:["handle-buttons"]},[o("view",{staticClass:["button"],on:{click:t.hungupCalling}},[o("view",{staticClass:["button-style"]},[o("u-text",{staticClass:["button-text"],staticStyle:{color:"red"}},[t._v("\u6302\u65ad")])])]),o("view",{staticClass:["button"],on:{click:t.muteCalling}},[o("view",{staticClass:["button-style"]},[o("u-text",{staticClass:["button-text"]},[t._v(t._s(t.hasMuteCalling?"\u7ee7\u7eed":"\u6682\u505c")+"\u901a\u8bdd")])])])]),o("view",{staticClass:["handle-buttons"]},[o("view",{staticClass:["button"],on:{click:t.muteLocalVideo}},[o("view",{staticClass:["button-style"]},[o("u-text",{staticClass:["button-text"]},[t._v(t._s(t.hasMuteVideo?"\u5f00\u542f":"\u5173\u95ed")+"\u6444\u50cf\u5934")])])]),o("view",{staticClass:["button"],on:{click:t.muteLocalAudio}},[o("view",{staticClass:["button-style"]},[o("u-text",{staticClass:["button-text"]},[t._v(t._s(t.hasMuteAudio?"\u5f00\u542f":"\u5173\u95ed")+"\u8bdd\u7b52")])])])]),o("view",{staticClass:["handle-buttons"]},[o("view",{staticClass:["button"],on:{click:t.changeCamera}},[o("view",{staticClass:["button-style"]},[o("u-text",{staticClass:["button-text"]},[t._v(t._s(t.cameraTypeStatus?"\u524d\u7f6e":"\u540e\u7f6e"))]),o("u-text",{staticClass:["button-text"]},[t._v("\u6444\u50cf\u5934")])])])])])],1)],1):o("view",{staticClass:["wating"]},[t.currentCall.targetUserID===t.userID?o("view",[o("view",{staticClass:["wating-tips"],style:"left:"+t.watingWidth/2+"px;"},[o("u-text",{staticClass:["w-b-text"]},[t._v("\u7b49\u5f85\u63a5\u542c...")])]),o("view",{staticClass:["w-button","answer"],on:{click:t.answerCalling}},[o("u-text",{staticClass:["w-b-text"]},[t._v("\u63a5\u542c")])]),o("view",{staticClass:["w-button","refuse"],on:{click:t.refuseCalling}},[o("u-text",{staticClass:["w-b-text"]},[t._v("\u62d2\u7edd")])])]):o("view",[o("view",{staticClass:["wating-tips"],style:"left:"+t.watingWidth/2+"px;"},[o("u-text",{staticClass:["w-b-text"]},[t._v("\u6b63\u5728\u547c\u53eb...")])]),o("view",{staticClass:["w-button","wating-answer"],style:"left:"+t.watingWidth/2+"px;",on:{click:t.hungupCalling}},[o("u-text",{staticClass:["w-b-text"]},[t._v("\u6302\u65ad")])])])])])])},i=[]},,function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(16).default,Vue.prototype.__$appStyle__)},function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},,function(t,e,o){"use strict";o.r(e);var n=o(9),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=i.a},,,,,function(t,e,o){"use strict";o.r(e);o(15);var n=o(4);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),n.default.mpType="page",n.default.route="pages/doctor/telephone",n.default.el="#root",new Vue(n.default)}]);