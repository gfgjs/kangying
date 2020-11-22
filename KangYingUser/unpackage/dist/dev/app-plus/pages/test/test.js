"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!********************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "no-data": {
    "display": "flex",
    "justifyContent": "center",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "fontSize": "14",
    "color": "#cccccc",
    "width": 100
  },
  "uni-radio-input-checked": {
    "backgroundColor": "#5eb6aa",
    "borderColor": "#5eb6aa"
  },
  "uni-switch-input-checked": {
    "backgroundColor": "#5eb6aa",
    "borderColor": "#5eb6aa"
  },
  "rich-text-img-width": {
    "maxWidth": 100
  },
  "linear-background": {
    "backgroundImage": "linear-gradient(114deg, #70d8c9 0%, #5eb6aa 74%)"
  },
  "box-shadow": {
    "boxShadow": "0px 0px 19px 2px rgba(11, 126, 255, 0.1)"
  },
  "price": {
    "color": "#F71A1A"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "ellipsis": {
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "whiteSpace": "nowrap"
  },
  "nav-place": {
    "paddingTop": "44",
    "boxSizing": "content-box"
  },
  "common-place": {
    "height": "10"
  },
  "foot-place": {
    "height": "50"
  },
  "row-title": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "display": "flex",
    "alignItems": "center",
    "fontSize": "16",
    "fontWeight": "bold",
    "content::before": "''",
    "width::before": "4",
    "height::before": "20",
    "position::before": "absolute",
    "left::before": 0,
    "background::before": "#5eb6aa",
    "boxShadow::before": "0px 8px 21px 0px rgba(36, 131, 253, 0.3)",
    "borderTopRightRadius::before": "3",
    "borderBottomRightRadius::before": "3"
  },
  "title": {
    "fontWeight": "bold",
    "fontSize": "16"
  },
  "little-title": {
    "fontSize": "13",
    "color": "#5D5D5D"
  },
  "button": {
    "backgroundColor": "#5eb6aa",
    "color": "#FFFFFF",
    "width": 36,
    "fontSize": "14",
    "height": "36",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "4",
    "transitionDuration": 100,
    "transitionTimingFunction": "linear",
    "boxShadow": "0px 0px 19px 1px rgba(112, 216, 201, 0.1)",
    "backgroundImage": "linear-gradient(114deg, #70d8c9 0%, #5eb6aa 74%)",
    "opacity:active": 0.8
  },
  "@TRANSITION": {
    "button": {
      "duration": 100,
      "timingFunction": "linear"
    }
  },
  "button-cancel": {
    "background": "#e9eaeb",
    "color": "#7C7C7C",
    "boxShadow": "0px 0px 19px 1px rgba(233, 234, 235, 0.4)"
  }
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 11 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 12 */
/*!*********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/common/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.SDK_APP_ID = exports.HOST = void 0; // 后台请求地址\nvar HOST = \"https://app.loopyun.com\";\n// tim及音视频 appId\nexports.HOST = HOST;var SDK_APP_ID = 1400440995;exports.SDK_APP_ID = SDK_APP_ID;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJIT1NUIiwiU0RLX0FQUF9JRCJdLCJtYXBwaW5ncyI6IjBHQUFBO0FBQ08sSUFBTUEsSUFBSSxHQUFHLHlCQUFiO0FBQ1A7b0JBQ08sSUFBTUMsVUFBVSxHQUFHLFVBQW5CLEMiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkI7lj7Dor7fmsYLlnLDlnYBcclxuZXhwb3J0IGNvbnN0IEhPU1QgPSBcImh0dHBzOi8vYXBwLmxvb3B5dW4uY29tXCJcclxuLy8gdGlt5Y+K6Z+z6KeG6aKRIGFwcElkXHJcbmV4cG9ydCBjb25zdCBTREtfQVBQX0lEID0gMTQwMDQ0MDk5NVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!*******************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/main.js?{"page":"pages%2Ftest%2Ftest"} ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/test/test.nvue?mpType=page */ 17);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/test/test'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGVzdC90ZXN0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGVzdC90ZXN0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 18);\n/* harmony import */ var _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.nvue?vue&type=script&lang=js&mpType=page */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 23).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 23).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3d119945\",\n  false,\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/test/test.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1NTJmNGU4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiM2QxMTk5NDVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVzdC90ZXN0Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=template&id=7552f4e8&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=template&id=7552f4e8&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["box"] }, [
        _vm.windowStatus === 1
          ? _c(
              "view",
              { staticStyle: { flex: "1" } },
              [
                _c("txtrtc_video_view", {
                  ref: "remoteVideoView",
                  staticClass: ["video-view", "remote-view"]
                }),
                _c(
                  "view",
                  { staticClass: ["bottom-outer"] },
                  [
                    _c("txtrtc_video_view", {
                      ref: "videoView",
                      staticClass: ["video-view", "local-view"]
                    }),
                    _c("view", { staticClass: ["handle-outer"] }, [
                      _c("view", { staticClass: ["handle-buttons"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: _vm.exitRoom }
                          },
                          [
                            _c(
                              "u-text",
                              {
                                staticClass: ["button-text"],
                                staticStyle: { color: "red" }
                              },
                              [_vm._v("挂断")]
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: function($event) {} }
                          },
                          [
                            _c("u-text", { staticClass: ["button-text"] }, [
                              _vm._v("凯筒通话")
                            ])
                          ]
                        )
                      ]),
                      _c("view", { staticClass: ["handle-buttons"] }, [
                        _c("view", { staticClass: ["button"] }, [
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("筒摄像头")
                          ])
                        ]),
                        _c("view", { staticClass: ["button"] }, [
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("凯斯话筒")
                          ])
                        ])
                      ]),
                      _c("view", { staticClass: ["handle-buttons"] }, [
                        _c("view", { staticClass: ["button"] }, [
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("前置")
                          ]),
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("摄像头")
                          ])
                        ])
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm.windowStatus === 0
          ? _c(
              "view",
              {
                staticClass: ["wating"],
                on: {
                  click: function($event) {
                    _vm.windowStatus = 1
                  }
                }
              },
              [
                _c("view", { staticClass: ["w-button", "wating-tips"] }, [
                  _c("u-text", { staticClass: ["w-b-text"] }, [
                    _vm._v("等待接听...")
                  ])
                ]),
                _c(
                  "view",
                  {
                    staticClass: ["w-button", "answer"],
                    on: { click: function($event) {} }
                  },
                  [
                    _c("u-text", { staticClass: ["w-b-text"] }, [
                      _vm._v("接听")
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: ["w-button", "refuse"],
                    on: { click: function($event) {} }
                  },
                  [
                    _c("u-text", { staticClass: ["w-b-text"] }, [
                      _vm._v("拒绝")
                    ])
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLG9kQUFHLEVBQUMiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _config = __webpack_require__(/*! ../../common/config */ 12);\n\nvar _vuex = __webpack_require__(/*! vuex */ 11);\n\n\n\n\nvar _https = __webpack_require__(/*! ../../common/https.js */ 22); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//插件对象\nvar sdkwx = __webpack_provided_uni_dot_requireNativePlugin('TXTRTC-SdkWX');var _default = { data: function data() {return { remoteVideoHeight: 0, sdkAppId: 1400440995, roomId: '', vvh: 100, localUserId: '', localUserSig: '', remoteUserId: '', remoteUserSig: '', watingStatus: true, ptop: 0, watingHeight: 0, watingWidth: 0, callInfo: {}, innerAudioContext: {}, hasMuteAudio: false, hasMuteVideo: false, hasMuteCalling: false, windowStatus: 0 };}, // onBackPress(options) {\n  // \tif (options.from === 'navigateBack') {\n  // \t\treturn false\n  // \t}\n  // \tuni.showModal({\n  // \t\ttitle: '提示',\n  // \t\tcontent: '将结束通话，是否确定？',\n  // \t\tsuccess: e => {\n  // \t\t\tif (e.confirm) {\n  // \t\t\t\tthis.hungupCalling()\n  // \t\t\t}\n  // \t\t}\n  // \t})\n  // \treturn true\n  // },\n  watch: { windowStatus: function windowStatus(e) {e && this.enterRoom();} }, onLoad: function onLoad(o) {var _this = this;uni.getSystemInfo({ success: function success(e) {_this.watingWidth = e.windowWidth;_this.watingHeight = e.windowHeight;} });\n\n    // this.callInfo = o\n\n    // this.roomId = o.recordId // 病例Id作为房间Id\n    // this.localUserId = o[o.role + 'Id'] // 本机账号\n    // this.remoteUserId = o[o.remoteRole + 'Id']\n\n    //预加载签名\n    // this.checkSig()\n\n    //检查权限\n    sdkwx.checkPermission(function (res) {\n      __f__(\"log\", res, \" at pages/test/test.nvue:132\");\n    });\n\n    // 设置事件回调\n    sdkwx.setListener(function (res) {\n      __f__(\"log\", res, \" at pages/test/test.nvue:137\");\n\n      if (res.type == \"onEnterRoom\") {\n        //进入房间回调\n\n      } else if (res.type == \"onExitRoom\") {\n        //离开房间回调\n\n      } else if (res.type == \"onSwitchRole\") {\n        //角色转换回调\n\n      } else if (res.type == \"onUserVideoAvailable\") {\n        //远端用户视频可用回调\n        _this.onUserVideoAvailable(res.data);\n      }\n    });\n\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.exitRoom();\n  },\n  methods: {\n    rePermission: function rePermission() {\n      sdkwx.checkPermission(function (res) {\n        __f__(\"log\", res, \" at pages/test/test.nvue:161\");\n      });\n    },\n    onUserVideoAvailable: function onUserVideoAvailable(data) {\n      var userId = data.userId;\n      var available = data.available;\n\n      var remoteVideoView = this.$refs.remoteVideoView;\n      if (available) {\n        // this.remoteVideoHeight = 300;\n        remoteVideoView.startRemoteView(userId);\n      } else {\n        // this.remoteVideoHeight = 0;\n        remoteVideoView.stopRemoteView(userId);\n      }\n    },\n    enterRoom: function enterRoom(id) {var _this2 = this;\n      var us = Date.now();\n      (0, _https.request_getUserSig)({\n        uni: uni,\n        data: {\n          userId: us } }).\n\n      then(function (res) {\n        var scene = 0; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;\n        sdkwx.enterRoom({\n          sdkAppId: _config.SDK_APP_ID,\n          roomId: 11111, // 只能为数字或者可转化为数字\n          role: 20, //20主播 21 观众\n          userId: us,\n          userSig: res.data },\n        scene);\n\n        _this2.startVideo();\n      });\n    },\n    startVideo: function startVideo() {var _this3 = this;\n      this.stopVideo();\n      __f__(\"log\", '=========', \" at pages/test/test.nvue:199\");\n\n      setTimeout(function () {\n        // //设置角色主播\n        // sdkwx.switchRole(20); //20主播 21 观众\n\n        //开启音频\n        sdkwx.startLocalAudio();\n\n        //开始视频\n        var videoView = _this3.$refs.videoView;\n        videoView.startLocalPreview(true);\n      });\n    },\n    stopLocalPreview: function stopLocalPreview() {\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView.stopLocalPreview();\n    },\n    stopVideo: function stopVideo() {\n      // //设置角色观众\n      // sdkwx.switchRole(20); //20主播 21 观众\n\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView && videoView.stopLocalPreview();\n    },\n    exitRoom: function exitRoom() {\n      this.stopVideo();\n      //退出房间\n      sdkwx.exitRoom();\n    },\n    createGroup: function createGroup() {\n\n    },\n    joinGroup: function joinGroup() {\n    } },\n\n  computed: {} };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGVzdC90ZXN0Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQTs7QUFFQTs7Ozs7QUFLQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRBO0FBYUEsMkUsZUFFQSxFQUNBLElBREEsa0JBQ0EsQ0FDQSxTQUNBLG9CQURBLEVBRUEsb0JBRkEsRUFHQSxVQUhBLEVBSUEsUUFKQSxFQUtBLGVBTEEsRUFNQSxnQkFOQSxFQU9BLGdCQVBBLEVBUUEsaUJBUkEsRUFTQSxrQkFUQSxFQVVBLE9BVkEsRUFXQSxlQVhBLEVBWUEsY0FaQSxFQWNBLFlBZEEsRUFlQSxxQkFmQSxFQWlCQSxtQkFqQkEsRUFrQkEsbUJBbEJBLEVBbUJBLHFCQW5CQSxFQXFCQSxlQXJCQSxHQXVCQSxDQXpCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxXQUNBLFlBREEsd0JBQ0EsQ0FEQSxFQUNBLENBRUEsc0JBQ0EsQ0FKQSxFQTVDQSxFQWtEQSxNQWxEQSxrQkFrREEsQ0FsREEsRUFrREEsa0JBQ0Esb0JBQ0EsOEJBQ0Esa0NBQ0Esb0NBQ0EsQ0FKQTs7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BSEEsTUFHQTtBQUNBOztBQUVBLE9BSEEsTUFHQTtBQUNBOztBQUVBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBOztBQWtCQSxHQTNGQTtBQTRGQSxlQTVGQSwyQkE0RkE7QUFDQTtBQUNBLEdBOUZBO0FBK0ZBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBTEE7QUFNQSx3QkFOQSxnQ0FNQSxJQU5BLEVBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkEsYUFuQkEscUJBbUJBLEVBbkJBLEVBbUJBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFDQSxvQkFEQSxFQUZBOztBQUtBLFVBTEEsQ0FLQTtBQUNBLHNCQURBLENBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsdUJBRkEsRUFFQTtBQUNBLGtCQUhBLEVBR0E7QUFDQSxvQkFKQTtBQUtBLDJCQUxBO0FBTUEsYUFOQTs7QUFRQTtBQUNBLE9BaEJBO0FBaUJBLEtBdENBO0FBdUNBLGNBdkNBLHdCQXVDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FWQTtBQVdBLEtBdERBO0FBdURBLG9CQXZEQSw4QkF1REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBOURBO0FBK0RBLGFBL0RBLHVCQStEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXpFQTtBQTBFQSxZQTFFQSxzQkEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlFQTtBQStFQSxlQS9FQSx5QkErRUE7O0FBRUEsS0FqRkE7QUFrRkEsYUFsRkEsdUJBa0ZBO0FBQ0EsS0FuRkEsRUEvRkE7O0FBb0xBLGNBcExBLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8dmlldyBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgIDx2aWV3IHN0eWxlPVwiZmxleDoxO1wiIHYtaWY9XCJ3aW5kb3dTdGF0dXM9PT0xXCI+XHJcbiAgICAgICAgICAgIDx0eHRydGNfdmlkZW9fdmlldyBjbGFzcz0ndmlkZW8tdmlldyByZW1vdGUtdmlldycgcmVmPVwicmVtb3RlVmlkZW9WaWV3XCI+PC90eHRydGNfdmlkZW9fdmlldz5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJib3R0b20tb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0eHRydGNfdmlkZW9fdmlldyBjbGFzcz0ndmlkZW8tdmlldyBsb2NhbC12aWV3JyByZWY9XCJ2aWRlb1ZpZXdcIj48L3R4dHJ0Y192aWRlb192aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoYW5kbGUtb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImhhbmRsZS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiZXhpdFJvb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+5oyC5patPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+5Yev562S6YCa6K+dPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGFuZGxlLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7nrZLmkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7lh6/mlq/or53nrZI8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoYW5kbGUtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidXR0b24tdGV4dFwiPuWJjee9rjwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7mkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ3YXRpbmdcIiB2LWlmPVwid2luZG93U3RhdHVzPT09MFwiIEBjbGljaz1cIndpbmRvd1N0YXR1cz0xXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gd2F0aW5nLXRpcHNcIiA+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+562J5b6F5o6l5ZCsLi4uPC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gYW5zd2VyXCIgQGNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5o6l5ZCsPC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gcmVmdXNlXCIgQGNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5ouS57udPC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy/mj5Lku7blr7nosaFcclxuXHJcbmltcG9ydCB7U0RLX0FQUF9JRH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgcmVxdWVzdF9nZXRVc2VyU2lnXHJcbn0gZnJvbSAnLi4vLi4vY29tbW9uL2h0dHBzLmpzJ1xyXG5cclxudmFyIHNka3d4ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1RYVFJUQy1TZGtXWCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlb0hlaWdodDogMCxcclxuICAgICAgICAgICAgc2RrQXBwSWQ6IDE0MDA0NDA5OTUsXHJcbiAgICAgICAgICAgIHJvb21JZDogJycsXHJcbiAgICAgICAgICAgIHZ2aDogMTAwLFxyXG4gICAgICAgICAgICBsb2NhbFVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIGxvY2FsVXNlclNpZzogJycsXHJcbiAgICAgICAgICAgIHJlbW90ZVVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIHJlbW90ZVVzZXJTaWc6ICcnLFxyXG4gICAgICAgICAgICB3YXRpbmdTdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIHB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdhdGluZ0hlaWdodDogMCxcclxuICAgICAgICAgICAgd2F0aW5nV2lkdGg6IDAsXHJcblxyXG4gICAgICAgICAgICBjYWxsSW5mbzoge30sXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0OiB7fSxcclxuXHJcbiAgICAgICAgICAgIGhhc011dGVBdWRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc011dGVWaWRlbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc011dGVDYWxsaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHdpbmRvd1N0YXR1czogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gb25CYWNrUHJlc3Mob3B0aW9ucykge1xyXG4gICAgLy8gXHRpZiAob3B0aW9ucy5mcm9tID09PSAnbmF2aWdhdGVCYWNrJykge1xyXG4gICAgLy8gXHRcdHJldHVybiBmYWxzZVxyXG4gICAgLy8gXHR9XHJcblxyXG4gICAgLy8gXHR1bmkuc2hvd01vZGFsKHtcclxuICAgIC8vIFx0XHR0aXRsZTogJ+aPkOekuicsXHJcbiAgICAvLyBcdFx0Y29udGVudDogJ+Wwhue7k+adn+mAmuivne+8jOaYr+WQpuehruWumu+8nycsXHJcbiAgICAvLyBcdFx0c3VjY2VzczogZSA9PiB7XHJcbiAgICAvLyBcdFx0XHRpZiAoZS5jb25maXJtKSB7XHJcbiAgICAvLyBcdFx0XHRcdHRoaXMuaHVuZ3VwQ2FsbGluZygpXHJcbiAgICAvLyBcdFx0XHR9XHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy8gXHR9KVxyXG5cclxuICAgIC8vIFx0cmV0dXJuIHRydWVcclxuICAgIC8vIH0sXHJcbiAgICB3YXRjaDp7XHJcbiAgICAgIHdpbmRvd1N0YXR1cyhlKXtcclxuXHJcbiAgICAgICAgICBlJiZ0aGlzLmVudGVyUm9vbSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQobykge1xyXG4gICAgICAgIHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGluZ1dpZHRoID0gZS53aW5kb3dXaWR0aFxyXG4gICAgICAgICAgICAgICAgdGhpcy53YXRpbmdIZWlnaHQgPSBlLndpbmRvd0hlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jYWxsSW5mbyA9IG9cclxuXHJcbiAgICAgICAgLy8gdGhpcy5yb29tSWQgPSBvLnJlY29yZElkIC8vIOeXheS+i0lk5L2c5Li65oi/6Ze0SWRcclxuICAgICAgICAvLyB0aGlzLmxvY2FsVXNlcklkID0gb1tvLnJvbGUgKyAnSWQnXSAvLyDmnKzmnLrotKblj7dcclxuICAgICAgICAvLyB0aGlzLnJlbW90ZVVzZXJJZCA9IG9bby5yZW1vdGVSb2xlICsgJ0lkJ11cclxuXHJcbiAgICAgICAgLy/pooTliqDovb3nrb7lkI1cclxuICAgICAgICAvLyB0aGlzLmNoZWNrU2lnKClcclxuXHJcbiAgICAgICAgLy/mo4Dmn6XmnYPpmZBcclxuICAgICAgICBzZGt3eC5jaGVja1Blcm1pc3Npb24oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDorr7nva7kuovku7blm57osINcclxuICAgICAgICBzZGt3eC5zZXRMaXN0ZW5lcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PSBcIm9uRW50ZXJSb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+b5YWl5oi/6Ze05Zue6LCDXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09IFwib25FeGl0Um9vbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL+emu+W8gOaIv+mXtOWbnuiwg1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMudHlwZSA9PSBcIm9uU3dpdGNoUm9sZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL+inkuiJsui9rOaNouWbnuiwg1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMudHlwZSA9PSBcIm9uVXNlclZpZGVvQXZhaWxhYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+c56uv55So5oi36KeG6aKR5Y+v55So5Zue6LCDXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXNlclZpZGVvQXZhaWxhYmxlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGJlZm9yZURlc3Ryb3koKXtcclxuICAgICAgdGhpcy5leGl0Um9vbSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlUGVybWlzc2lvbigpIHtcclxuICAgICAgICAgICAgc2Rrd3guY2hlY2tQZXJtaXNzaW9uKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Vc2VyVmlkZW9BdmFpbGFibGUoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdXNlcklkID0gZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIHZhciBhdmFpbGFibGUgPSBkYXRhLmF2YWlsYWJsZTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZW1vdGVWaWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnJlbW90ZVZpZGVvVmlldztcclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdGVWaWRlb0hlaWdodCA9IDMwMDtcclxuICAgICAgICAgICAgICAgIHJlbW90ZVZpZGVvVmlldy5zdGFydFJlbW90ZVZpZXcodXNlcklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVtb3RlVmlkZW9IZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmVtb3RlVmlkZW9WaWV3LnN0b3BSZW1vdGVWaWV3KHVzZXJJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudGVyUm9vbShpZCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cyA9IERhdGUubm93KClcclxuICAgICAgICAgICAgcmVxdWVzdF9nZXRVc2VyU2lnKHtcclxuICAgICAgICAgICAgICAgIHVuaSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzY2VuZSA9IDA7IC8v6KeG6aKR6YCa6K+dID0gMDvop4bpopHkupLliqjnm7Tmkq0gPSAxO+ivremfs+mAmuivnSA9IDI76K+t6Z+z5LqS5Yqo55u05pKtID0gMztcclxuICAgICAgICAgICAgICAgIHNka3d4LmVudGVyUm9vbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2RrQXBwSWQ6IFNES19BUFBfSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiAxMTExMSwgLy8g5Y+q6IO95Li65pWw5a2X5oiW6ICF5Y+v6L2s5YyW5Li65pWw5a2XXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogMjAsIC8vMjDkuLvmkq0gMjEg6KeC5LyXXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1cyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyU2lnOiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSwgc2NlbmUpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFZpZGVvKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0VmlkZW8oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFZpZGVvKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PScpXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIC8v6K6+572u6KeS6Imy5Li75pKtXHJcbiAgICAgICAgICAgICAgICAvLyBzZGt3eC5zd2l0Y2hSb2xlKDIwKTsgLy8yMOS4u+aSrSAyMSDop4LkvJdcclxuXHJcbiAgICAgICAgICAgICAgICAvL+W8gOWQr+mfs+mikVxyXG4gICAgICAgICAgICAgICAgc2Rrd3guc3RhcnRMb2NhbEF1ZGlvKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vop4bpopFcclxuICAgICAgICAgICAgICAgIHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgICAgIHZpZGVvVmlldy5zdGFydExvY2FsUHJldmlldyh0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BMb2NhbFByZXZpZXcoKSB7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i6Z+z6aKRXHJcbiAgICAgICAgICAgIHNka3d4LnN0b3BMb2NhbEF1ZGlvKCk7XHJcblxyXG4gICAgICAgICAgICAvL+WBnOatouinhumikVxyXG4gICAgICAgICAgICB2YXIgdmlkZW9WaWV3ID0gdGhpcy4kcmVmcy52aWRlb1ZpZXc7XHJcbiAgICAgICAgICAgIHZpZGVvVmlldy5zdG9wTG9jYWxQcmV2aWV3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wVmlkZW8oKSB7XHJcbiAgICAgICAgICAgIC8vIC8v6K6+572u6KeS6Imy6KeC5LyXXHJcbiAgICAgICAgICAgIC8vIHNka3d4LnN3aXRjaFJvbGUoMjApOyAvLzIw5Li75pKtIDIxIOinguS8l1xyXG5cclxuICAgICAgICAgICAgLy/lgZzmraLpn7PpopFcclxuICAgICAgICAgICAgc2Rrd3guc3RvcExvY2FsQXVkaW8oKTtcclxuXHJcbiAgICAgICAgICAgIC8v5YGc5q2i6KeG6aKRXHJcbiAgICAgICAgICAgIHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgdmlkZW9WaWV3ICYmIHZpZGVvVmlldy5zdG9wTG9jYWxQcmV2aWV3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGl0Um9vbSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKVxyXG4gICAgICAgICAgICAvL+mAgOWHuuaIv+mXtFxyXG4gICAgICAgICAgICBzZGt3eC5leGl0Um9vbSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVHcm91cCgpIHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBqb2luR3JvdXAoKSB7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi52aWRlby12aWV3IHtcclxufVxyXG5cclxuLnJlbW90ZS12aWV3IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZmxleDogODtcclxuXHJcbn1cclxuXHJcbi5ib3R0b20tb3V0ZXIge1xyXG4gICAgZmxleDogMjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5sb2NhbC12aWV3IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZsZXg6IDM7XHJcbiAgICAvL21pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5oYW5kbGUtb3V0ZXIge1xyXG4gICAgZmxleDogNztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhhbmRsZS1idXR0b25zIHtcclxuICAgIGZsZXg6MTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcblxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLndhdGluZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC53LWJ1dHRvbnMge1xyXG4vLyBcdGhlaWdodDogMTAwcHg7XHJcbi8vIFx0d2lkdGg6IDMwMHB4O1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuLnctYnV0dG9uIHtcclxuICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFuc3dlciB7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWZ1c2Uge1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4ud2F0aW5nLWFuc3dlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi53YXRpbmctdGlwcyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDQwMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4udy1iLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/common/https.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.request_payPexam = exports.request_examInfo = exports.request_examList = exports.request_searchHot = exports.request_medInfo = exports.request_medList = exports.request_medCates = exports.request_medHeaderData = exports.request_doctorInfo = exports.request_doctorList = exports.request_cates = exports.request_patientCardAdd = exports.request_patientList = exports.request_articleDetail = exports.request_articleList = exports.request_searchHome = exports.request_delAddress = exports.request_editAddress = exports.request_addAddress = exports.request_getAreaList = exports.request_recordLast = exports.request_prescriptionInfo = exports.request_prescriptionPay = exports.request_prescriptionList = exports.request_recordList = exports.request_recordAdd = exports.request_orderPay = exports.request_orderConfirm = exports.request_orderCancel = exports.request_orderInfo = exports.request_orderList = exports.request_orderSubmit = exports.request_getFreight = exports.request_cartDel = exports.request_cartAdd = exports.request_cartList = exports.request_getUserSig = exports.request_getAddressList = exports.request_upUserInfo = exports.request_userInfo = exports.request_login = exports.request_codeLogin = exports.request_register = exports.request_sendLoginSms = exports.request_sendReSms = exports.request_getMsg = exports.request_getConversation = exports.request_saveMsg = exports.request_imInit = exports.request_uploadImg = exports.request_version = exports.request_clearToken = exports.request_init = exports.request = void 0;var _config = __webpack_require__(/*! ./config.js */ 12);\n\n\n\nvar __token = '';\nvar uni;\n\nvar request = function request() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var api = arguments.length > 1 ? arguments[1] : undefined;var method = arguments.length > 2 ? arguments[2] : undefined;var contentType = arguments.length > 3 ? arguments[3] : undefined;\n  method = method || 'POST';\n  contentType = contentType || 'application/x-www-form-urlencoded';\n\n  // let uni = e.uni\n\n  if (!__token) {\n    __token = uni.getStorageSync('LOGIN_MESSAGE').token;\n  }\n\n  if (e.token) {\n    __token = e.token;\n  }\n  if (!e.noLoading) {\n    uni.showLoading();\n  }\n\n  // uni.startPullDownRefresh()\n  return uni.request({\n    method: method,\n    url: _config.HOST + api,\n    data: e.data || {},\n    header: {\n      'Authorization': __token,\n      'Content-Type': contentType //自定义请求头信息\n    } }).\n  then(function (res) {\n    if (!e.noLoading) {\n      uni.hideLoading();\n    }\n    // uni.stopPullDownRefresh()\n    res = res[1].data;\n    return res;\n  }).then(function (res) {\n    // 遇到错误码，重新登录\n    // 可以使用getApp()和uni\n    return res;\n  }).catch(function (e) {\n    __f__(\"log\", '---api---:', _config.HOST + api, ';', '---err---:', e, \" at common/https.js:46\");\n    return e;\n  });\n};\n// 初始化https\nexports.request = request;var request_init = function request_init(e) {\n  uni = e.uni;\n};\n// 清除token\nexports.request_init = request_init;var request_clearToken = function request_clearToken() {\n  __token = '';\n};\n// 获取最新版本\nexports.request_clearToken = request_clearToken;var request_version = function request_version(e) {\n  return request(e, '/v1/p/version');\n};\n// 上传图片\nexports.request_version = request_version;\nvar request_uploadImg = function request_uploadImg(e) {\n  return new Promise(function (resolve, reject) {\n    e.uni.chooseImage({\n      success: function success(chooseImageRes) {\n        var tempFilePaths = chooseImageRes.tempFilePaths;\n        e.uni.uploadFile({\n          url: _config.HOST + '/v1/p/upload_img',\n          filePath: tempFilePaths[0],\n          name: 'img',\n          formData: {\n            'user': 'kangying' },\n\n          success: function success(uploadFileRes) {\n            resolve(JSON.parse(uploadFileRes.data));\n          },\n          fail: function fail(err) {\n            reject(err);\n          } });\n\n      } });\n\n  });\n};\n// 即时通讯im\nexports.request_uploadImg = request_uploadImg;var request_imInit = function request_imInit(e) {\n  return request(e, '/v1/p/im/init');\n};\n// 存储聊天消息到后台\nexports.request_imInit = request_imInit;var request_saveMsg = function request_saveMsg(e) {\n  return request(e, '/v1/p/im/saveMsg', 'POST', 'application/json');\n};exports.request_saveMsg = request_saveMsg;\n\nvar request_getConversation = function request_getConversation(e) {\n  return request(e, '/v1/p/im/getConversation', 'GET');\n};exports.request_getConversation = request_getConversation;\nvar request_getMsg = function request_getMsg(e) {\n  return request(e, '/v1/p//im/getMsg', 'GET');\n};\n// 登录相关\nexports.request_getMsg = request_getMsg;var request_sendReSms = function request_sendReSms(e) {\n  return request(e, '/v1/p/user/sendReSms');\n};exports.request_sendReSms = request_sendReSms;\nvar request_sendLoginSms = function request_sendLoginSms(e) {\n  return request(e, '/v1/p/user/sendLoginSms');\n};exports.request_sendLoginSms = request_sendLoginSms;\nvar request_register = function request_register(e) {\n  return request(e, '/v1/p/user/register');\n};exports.request_register = request_register;\nvar request_codeLogin = function request_codeLogin(e) {\n  return request(e, '/v1/p/user/codeLogin');\n};exports.request_codeLogin = request_codeLogin;\nvar request_login = function request_login(e) {\n  return request(e, '/v1/p/user/login');\n};exports.request_login = request_login;\nvar request_userInfo = function request_userInfo(e) {\n  return request(e, '/v1/u/user/info');\n};exports.request_userInfo = request_userInfo;\nvar request_upUserInfo = function request_upUserInfo(e) {\n  return request(e, '/v1/u/user/up');\n};\n// 用户相关\nexports.request_upUserInfo = request_upUserInfo;var request_getAddressList = function request_getAddressList(e) {\n  return request(e, '/v1/u/address/list', 'GET');\n};exports.request_getAddressList = request_getAddressList;\nvar request_getUserSig = function request_getUserSig(e) {\n  return request(e, '/v1/p/im/getUserSig', 'GET');\n};\n// 查询购物车\nexports.request_getUserSig = request_getUserSig;var request_cartList = function request_cartList(e) {\n  return request(e, '/v1/u/cart/list');\n};\n// 添加到购物车\nexports.request_cartList = request_cartList;var request_cartAdd = function request_cartAdd(e) {\n  return request(e, '/v1/u/cart/add');\n};\n// 删除购物车\nexports.request_cartAdd = request_cartAdd;var request_cartDel = function request_cartDel(e) {\n  return request(e, '/v1/u/cart/del');\n};\n// 根据地址查询运费\nexports.request_cartDel = request_cartDel;var request_getFreight = function request_getFreight(e) {\n  return request(e, '/v1/u/medicine/getFreight', 'GET');\n};\n// 提交订单\nexports.request_getFreight = request_getFreight;var request_orderSubmit = function request_orderSubmit(e) {\n  return request(e, '/v1/u/medicine/orderSubmit', null, 'application/json');\n};\n// 获取订单列表\nexports.request_orderSubmit = request_orderSubmit;var request_orderList = function request_orderList(e) {\n  return request(e, '/v1/u/medicine/orderList', 'GET');\n};\n// 获取订单详情\nexports.request_orderList = request_orderList;var request_orderInfo = function request_orderInfo(e) {\n  return request(e, '/v1/u/medicine/orderInfo', 'GET');\n};exports.request_orderInfo = request_orderInfo;\nvar request_orderCancel = function request_orderCancel(e) {\n  return request(e, '/v1/u/medicine/orderCancel', 'GET');\n};\n// 用户确认收货\nexports.request_orderCancel = request_orderCancel;var request_orderConfirm = function request_orderConfirm(e) {\n  return request(e, '/v1/u/medicine/orderConfirm', 'POST');\n};\n\n// 支付订单\nexports.request_orderConfirm = request_orderConfirm;var request_orderPay = function request_orderPay(e) {\n  return request(e, '/v1/u/medicine/orderPay');\n};\n// 创建问诊订单\nexports.request_orderPay = request_orderPay;var request_recordAdd = function request_recordAdd(e) {\n  return request(e, '/v1/u/record/add');\n};\n// 获取病例\nexports.request_recordAdd = request_recordAdd;var request_recordList = function request_recordList(e) {\n  return request(e, '/v1/u/record/list');\n};\n// 获取我的电子药方\nexports.request_recordList = request_recordList;var request_prescriptionList = function request_prescriptionList(e) {\n  return request(e, '/v1/u/prescription/list');\n};\n// 根据处方id支付电子药方\nexports.request_prescriptionList = request_prescriptionList;var request_prescriptionPay = function request_prescriptionPay(e) {\n  return request(e, '/v1/u/prescription/pay');\n};\n// 根据处方id查询电子药方\nexports.request_prescriptionPay = request_prescriptionPay;var request_prescriptionInfo = function request_prescriptionInfo(e) {\n  return request(e, '/v1/u/prescription/info', 'GET');\n};\n// 查询最近的问诊订单\nexports.request_prescriptionInfo = request_prescriptionInfo;var request_recordLast = function request_recordLast(e) {\n  return request(e, '/v1/u/record/last', 'GET');\n};\n\n\n// 地址相关 获取区域列表\nexports.request_recordLast = request_recordLast;var request_getAreaList = function request_getAreaList(e) {\n  return request(e, '/v1/p/area/list', 'GET');\n};exports.request_getAreaList = request_getAreaList;\nvar request_addAddress = function request_addAddress(e) {\n  return request(e, '/v1/u/address/add');\n};exports.request_addAddress = request_addAddress;\nvar request_editAddress = function request_editAddress(e) {\n  return request(e, '/v1/u/address/edit');\n};exports.request_editAddress = request_editAddress;\nvar request_delAddress = function request_delAddress(e) {\n  return request(e, '/v1/u/address/del');\n};\n// 主页搜索\nexports.request_delAddress = request_delAddress;var request_searchHome = function request_searchHome(e) {\n  return request(e, '/v1/p//search/home', 'GET');\n};\n\n// 文章\nexports.request_searchHome = request_searchHome;var request_articleList = function request_articleList(e) {\n  return request(e, '/v1/p/article/list', 'GET');\n};exports.request_articleList = request_articleList;\nvar request_articleDetail = function request_articleDetail(e) {\n  return request(e, '/v1/p/article/detail', 'GET');\n};\n// 我的就诊卡列表\nexports.request_articleDetail = request_articleDetail;var request_patientList = function request_patientList(e) {\n  return request(e, '/v1/u/patient_card/list', 'GET');\n};\n// 新建就诊卡\nexports.request_patientList = request_patientList;var request_patientCardAdd = function request_patientCardAdd(e) {\n  return request(e, '/v1/u/patient_card/add', 'POST');\n};\n\n// 科室列表\nexports.request_patientCardAdd = request_patientCardAdd;var request_cates = function request_cates(e) {\n  return request(e, '/v1/p/doctor/cates', 'GET');\n};\n// 医生列表\nexports.request_cates = request_cates;var request_doctorList = function request_doctorList(e) {\n  return request(e, '/v1/p/doctor/list', 'GET');\n};\n// 医生详情\nexports.request_doctorList = request_doctorList;var request_doctorInfo = function request_doctorInfo(e) {\n  return request(e, '/v1/p/doctor/info', 'GET');\n};\n\n// 药品相关\n// 购药首页搜索关键词\nexports.request_doctorInfo = request_doctorInfo;var request_medHeaderData = function request_medHeaderData(e) {\n  return request(e, '/v1/p/medicine/headerData', 'GET');\n};exports.request_medHeaderData = request_medHeaderData;\nvar request_medCates = function request_medCates(e) {\n  return request(e, '/v1/p/medicine/cate', 'GET');\n};exports.request_medCates = request_medCates;\nvar request_medList = function request_medList(e) {\n  return request(e, '/v1/p/medicine/list', 'GET');\n};exports.request_medList = request_medList;\nvar request_medInfo = function request_medInfo(e) {\n  return request(e, '/v1/p/medicine/info', 'GET');\n};exports.request_medInfo = request_medInfo;\nvar request_searchHot = function request_searchHot(e) {\n  return request(e, '/v1/p/search/hot', 'GET');\n};\n\n// 获取体检套餐列表\nexports.request_searchHot = request_searchHot;\nvar request_examList = function request_examList(e) {\n  return request(e, '/v1/p/physical_exam/list', 'GET');\n};exports.request_examList = request_examList;\nvar request_examInfo = function request_examInfo(e) {\n  return request(e, '/v1/p/physical_exam/info', 'GET');\n};exports.request_examInfo = request_examInfo;\nvar request_payPexam = function request_payPexam(e) {\n  return request(e, '/v1/u/payPexam');\n};exports.request_payPexam = request_payPexam;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2h0dHBzLmpzIl0sIm5hbWVzIjpbIl9fdG9rZW4iLCJ1bmkiLCJyZXF1ZXN0IiwiZSIsImFwaSIsIm1ldGhvZCIsImNvbnRlbnRUeXBlIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsIm5vTG9hZGluZyIsInNob3dMb2FkaW5nIiwidXJsIiwiSE9TVCIsImRhdGEiLCJoZWFkZXIiLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJjYXRjaCIsInJlcXVlc3RfaW5pdCIsInJlcXVlc3RfY2xlYXJUb2tlbiIsInJlcXVlc3RfdmVyc2lvbiIsInJlcXVlc3RfdXBsb2FkSW1nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJjaG9vc2VJbWFnZVJlcyIsInRlbXBGaWxlUGF0aHMiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJ1cGxvYWRGaWxlUmVzIiwiSlNPTiIsInBhcnNlIiwiZmFpbCIsImVyciIsInJlcXVlc3RfaW1Jbml0IiwicmVxdWVzdF9zYXZlTXNnIiwicmVxdWVzdF9nZXRDb252ZXJzYXRpb24iLCJyZXF1ZXN0X2dldE1zZyIsInJlcXVlc3Rfc2VuZFJlU21zIiwicmVxdWVzdF9zZW5kTG9naW5TbXMiLCJyZXF1ZXN0X3JlZ2lzdGVyIiwicmVxdWVzdF9jb2RlTG9naW4iLCJyZXF1ZXN0X2xvZ2luIiwicmVxdWVzdF91c2VySW5mbyIsInJlcXVlc3RfdXBVc2VySW5mbyIsInJlcXVlc3RfZ2V0QWRkcmVzc0xpc3QiLCJyZXF1ZXN0X2dldFVzZXJTaWciLCJyZXF1ZXN0X2NhcnRMaXN0IiwicmVxdWVzdF9jYXJ0QWRkIiwicmVxdWVzdF9jYXJ0RGVsIiwicmVxdWVzdF9nZXRGcmVpZ2h0IiwicmVxdWVzdF9vcmRlclN1Ym1pdCIsInJlcXVlc3Rfb3JkZXJMaXN0IiwicmVxdWVzdF9vcmRlckluZm8iLCJyZXF1ZXN0X29yZGVyQ2FuY2VsIiwicmVxdWVzdF9vcmRlckNvbmZpcm0iLCJyZXF1ZXN0X29yZGVyUGF5IiwicmVxdWVzdF9yZWNvcmRBZGQiLCJyZXF1ZXN0X3JlY29yZExpc3QiLCJyZXF1ZXN0X3ByZXNjcmlwdGlvbkxpc3QiLCJyZXF1ZXN0X3ByZXNjcmlwdGlvblBheSIsInJlcXVlc3RfcHJlc2NyaXB0aW9uSW5mbyIsInJlcXVlc3RfcmVjb3JkTGFzdCIsInJlcXVlc3RfZ2V0QXJlYUxpc3QiLCJyZXF1ZXN0X2FkZEFkZHJlc3MiLCJyZXF1ZXN0X2VkaXRBZGRyZXNzIiwicmVxdWVzdF9kZWxBZGRyZXNzIiwicmVxdWVzdF9zZWFyY2hIb21lIiwicmVxdWVzdF9hcnRpY2xlTGlzdCIsInJlcXVlc3RfYXJ0aWNsZURldGFpbCIsInJlcXVlc3RfcGF0aWVudExpc3QiLCJyZXF1ZXN0X3BhdGllbnRDYXJkQWRkIiwicmVxdWVzdF9jYXRlcyIsInJlcXVlc3RfZG9jdG9yTGlzdCIsInJlcXVlc3RfZG9jdG9ySW5mbyIsInJlcXVlc3RfbWVkSGVhZGVyRGF0YSIsInJlcXVlc3RfbWVkQ2F0ZXMiLCJyZXF1ZXN0X21lZExpc3QiLCJyZXF1ZXN0X21lZEluZm8iLCJyZXF1ZXN0X3NlYXJjaEhvdCIsInJlcXVlc3RfZXhhbUxpc3QiLCJyZXF1ZXN0X2V4YW1JbmZvIiwicmVxdWVzdF9wYXlQZXhhbSJdLCJtYXBwaW5ncyI6ImtuREFBQTs7OztBQUlBLElBQUlBLE9BQU8sR0FBRyxFQUFkO0FBQ0EsSUFBSUMsR0FBSjs7QUFFTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFzQyxLQUFyQ0MsQ0FBcUMsdUVBQWpDLEVBQWlDLEtBQTdCQyxHQUE2Qix1REFBeEJDLE1BQXdCLHVEQUFoQkMsV0FBZ0I7QUFDekRELFFBQU0sR0FBR0EsTUFBTSxJQUFJLE1BQW5CO0FBQ0FDLGFBQVcsR0FBR0EsV0FBVyxJQUFJLG1DQUE3Qjs7QUFFQTs7QUFFQSxNQUFJLENBQUNOLE9BQUwsRUFBYztBQUNWQSxXQUFPLEdBQUdDLEdBQUcsQ0FB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QyxTQUFPRCxPQUFPLENBQUNDLENBQUQsRUFBSSxrQkFBSixFQUF3QixLQUF4QixDQUFkO0FBQ0gsQ0FGTTs7QUFJUDs7QUFFTyxJQUFNa0YsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBbEYsQ0FBQyxFQUFJO0FBQ2pDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLDBCQUFKLEVBQWdDLEtBQWhDLENBQWQ7QUFDSCxDQUZNLEM7QUFHQSxJQUFNbUYsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBbkYsQ0FBQyxFQUFJO0FBQ2pDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLDBCQUFKLEVBQWdDLEtBQWhDLENBQWQ7QUFDSCxDQUZNLEM7QUFHQSxJQUFNb0YsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBcEYsQ0FBQyxFQUFJO0FBQ2pDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLGdCQUFKLENBQWQ7QUFDSCxDQUZNLEMiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSE9TVFxyXG59IGZyb20gJy4vY29uZmlnLmpzJ1xyXG5cclxubGV0IF9fdG9rZW4gPSAnJ1xyXG5sZXQgdW5pXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IChlID0ge30sIGFwaSwgbWV0aG9kLCBjb250ZW50VHlwZSkgPT4ge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kIHx8ICdQT1NUJ1xyXG4gICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cclxuICAgIC8vIGxldCB1bmkgPSBlLnVuaVxyXG5cclxuICAgIGlmICghX190b2tlbikge1xyXG4gICAgICAgIF9fdG9rZW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ0xPR0lOX01FU1NBR0UnKS50b2tlblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRva2VuKSB7XHJcbiAgICAgICAgX190b2tlbiA9IGUudG9rZW5cclxuICAgIH1cclxuICAgIGlmICghZS5ub0xvYWRpbmcpIHtcclxuICAgICAgICB1bmkuc2hvd0xvYWRpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVuaS5zdGFydFB1bGxEb3duUmVmcmVzaCgpXHJcbiAgICByZXR1cm4gdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICB1cmw6IEhPU1QgKyBhcGksXHJcbiAgICAgICAgZGF0YTogZS5kYXRhIHx8IHt9LFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IF9fdG9rZW4sXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSAvL+iHquWumuS5ieivt+axguWktOS/oeaBr1xyXG4gICAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAoIWUubm9Mb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKClcclxuICAgICAgICByZXMgPSByZXNbMV0uZGF0YVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyDpgYfliLDplJnor6/noIHvvIzph43mlrDnmbvlvZVcclxuICAgICAgICAvLyDlj6/ku6Xkvb/nlKhnZXRBcHAoKeWSjHVuaVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS1hcGktLS06JywgSE9TVCArIGFwaSwgJzsnLCAnLS0tZXJyLS0tOicsIGUpO1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICB9KVxyXG59XHJcbi8vIOWIneWni+WMlmh0dHBzXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2luaXQgPSBlPT57XHJcbiAgICB1bmkgPSBlLnVuaVxyXG59XHJcbi8vIOa4hemZpHRva2VuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2NsZWFyVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBfX3Rva2VuID0gJydcclxufVxyXG4vLyDojrflj5bmnIDmlrDniYjmnKxcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfdmVyc2lvbiA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3ZlcnNpb24nKVxyXG59XHJcbi8vIOS4iuS8oOWbvueJh1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfdXBsb2FkSW1nID0gZSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGUudW5pLmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgc3VjY2VzczogKGNob29zZUltYWdlUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmlsZVBhdGhzID0gY2hvb3NlSW1hZ2VSZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgICAgICAgIGUudW5pLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogSE9TVCArICcvdjEvcC91cGxvYWRfaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndXNlcic6ICdrYW5neWluZydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh1cGxvYWRGaWxlUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh1cGxvYWRGaWxlUmVzLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4vLyDljbPml7bpgJrorq9pbVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9pbUluaXQgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9pbS9pbml0JylcclxufVxyXG4vLyDlrZjlgqjogYrlpKnmtojmga/liLDlkI7lj7BcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3Rfc2F2ZU1zZyA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2ltL3NhdmVNc2cnLCdQT1NUJywnYXBwbGljYXRpb24vanNvbicpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2dldENvbnZlcnNhdGlvbiA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2ltL2dldENvbnZlcnNhdGlvbicsICdHRVQnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2dldE1zZyA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wLy9pbS9nZXRNc2cnLCAnR0VUJylcclxufVxyXG4vLyDnmbvlvZXnm7jlhbNcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3Rfc2VuZFJlU21zID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvdXNlci9zZW5kUmVTbXMnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3NlbmRMb2dpblNtcyA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3VzZXIvc2VuZExvZ2luU21zJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9yZWdpc3RlciA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3VzZXIvcmVnaXN0ZXInKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2NvZGVMb2dpbiA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3VzZXIvY29kZUxvZ2luJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9sb2dpbiA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3VzZXIvbG9naW4nKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3VzZXJJbmZvID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvdXNlci9pbmZvJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF91cFVzZXJJbmZvID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvdXNlci91cCcpXHJcbn1cclxuLy8g55So5oi355u45YWzXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2dldEFkZHJlc3NMaXN0ID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvYWRkcmVzcy9saXN0JywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZ2V0VXNlclNpZyA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2ltL2dldFVzZXJTaWcnLCAnR0VUJylcclxufVxyXG4vLyDmn6Xor6LotK3nianovaZcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfY2FydExpc3QgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9jYXJ0L2xpc3QnKVxyXG59XHJcbi8vIOa3u+WKoOWIsOi0reeJqei9plxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9jYXJ0QWRkID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvY2FydC9hZGQnKVxyXG59XHJcbi8vIOWIoOmZpOi0reeJqei9plxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9jYXJ0RGVsID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvY2FydC9kZWwnKVxyXG59XHJcbi8vIOagueaNruWcsOWdgOafpeivoui/kOi0uVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9nZXRGcmVpZ2h0ID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvbWVkaWNpbmUvZ2V0RnJlaWdodCcsICdHRVQnKVxyXG59XHJcbi8vIOaPkOS6pOiuouWNlVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9vcmRlclN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS91L21lZGljaW5lL29yZGVyU3VibWl0JywgbnVsbCwgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG59XHJcbi8vIOiOt+WPluiuouWNleWIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9vcmRlckxpc3QgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9tZWRpY2luZS9vcmRlckxpc3QnLCAnR0VUJylcclxufVxyXG4vLyDojrflj5borqLljZXor6bmg4VcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3Rfb3JkZXJJbmZvID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvbWVkaWNpbmUvb3JkZXJJbmZvJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3Rfb3JkZXJDYW5jZWwgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9tZWRpY2luZS9vcmRlckNhbmNlbCcsICdHRVQnKVxyXG59XHJcbi8vIOeUqOaIt+ehruiupOaUtui0p1xyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9vcmRlckNvbmZpcm0gPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9tZWRpY2luZS9vcmRlckNvbmZpcm0nLCAnUE9TVCcpXHJcbn1cclxuXHJcbi8vIOaUr+S7mOiuouWNlVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9vcmRlclBheSA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS91L21lZGljaW5lL29yZGVyUGF5JylcclxufVxyXG4vLyDliJvlu7rpl67or4rorqLljZVcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcmVjb3JkQWRkID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvcmVjb3JkL2FkZCcpXHJcbn1cclxuLy8g6I635Y+W55eF5L6LXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3JlY29yZExpc3QgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9yZWNvcmQvbGlzdCcpXHJcbn1cclxuLy8g6I635Y+W5oiR55qE55S15a2Q6I2v5pa5XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3ByZXNjcmlwdGlvbkxpc3QgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9wcmVzY3JpcHRpb24vbGlzdCcpXHJcbn1cclxuLy8g5qC55o2u5aSE5pa5aWTmlK/ku5jnlLXlrZDoja/mlrlcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcHJlc2NyaXB0aW9uUGF5ID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvcHJlc2NyaXB0aW9uL3BheScpXHJcbn1cclxuLy8g5qC55o2u5aSE5pa5aWTmn6Xor6LnlLXlrZDoja/mlrlcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcHJlc2NyaXB0aW9uSW5mbyA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS91L3ByZXNjcmlwdGlvbi9pbmZvJywgJ0dFVCcpXHJcbn1cclxuLy8g5p+l6K+i5pyA6L+R55qE6Zeu6K+K6K6i5Y2VXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3JlY29yZExhc3QgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9yZWNvcmQvbGFzdCcsICdHRVQnKVxyXG59XHJcblxyXG5cclxuLy8g5Zyw5Z2A55u45YWzIOiOt+WPluWMuuWfn+WIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9nZXRBcmVhTGlzdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2FyZWEvbGlzdCcsICdHRVQnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2FkZEFkZHJlc3MgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9hZGRyZXNzL2FkZCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZWRpdEFkZHJlc3MgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9hZGRyZXNzL2VkaXQnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2RlbEFkZHJlc3MgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9hZGRyZXNzL2RlbCcpXHJcbn1cclxuLy8g5Li76aG15pCc57SiXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3NlYXJjaEhvbWUgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC8vc2VhcmNoL2hvbWUnLCAnR0VUJylcclxufVxyXG5cclxuLy8g5paH56ugXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2FydGljbGVMaXN0ID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvYXJ0aWNsZS9saXN0JywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfYXJ0aWNsZURldGFpbCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2FydGljbGUvZGV0YWlsJywgJ0dFVCcpXHJcbn1cclxuLy8g5oiR55qE5bCx6K+K5Y2h5YiX6KGoXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3BhdGllbnRMaXN0ID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvcGF0aWVudF9jYXJkL2xpc3QnLCAnR0VUJylcclxufVxyXG4vLyDmlrDlu7rlsLHor4rljaFcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcGF0aWVudENhcmRBZGQgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9wYXRpZW50X2NhcmQvYWRkJywgJ1BPU1QnKVxyXG59XHJcblxyXG4vLyDnp5HlrqTliJfooahcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfY2F0ZXMgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9kb2N0b3IvY2F0ZXMnLCAnR0VUJylcclxufVxyXG4vLyDljLvnlJ/liJfooahcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZG9jdG9yTGlzdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2RvY3Rvci9saXN0JywgJ0dFVCcpXHJcbn1cclxuLy8g5Yy755Sf6K+m5oOFXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2RvY3RvckluZm8gPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9kb2N0b3IvaW5mbycsICdHRVQnKVxyXG59XHJcblxyXG4vLyDoja/lk4Hnm7jlhbNcclxuLy8g6LSt6I2v6aaW6aG15pCc57Si5YWz6ZSu6K+NXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X21lZEhlYWRlckRhdGEgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9tZWRpY2luZS9oZWFkZXJEYXRhJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfbWVkQ2F0ZXMgPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9tZWRpY2luZS9jYXRlJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfbWVkTGlzdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL21lZGljaW5lL2xpc3QnLCAnR0VUJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9tZWRJbmZvID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvbWVkaWNpbmUvaW5mbycsICdHRVQnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3NlYXJjaEhvdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3NlYXJjaC9ob3QnLCAnR0VUJylcclxufVxyXG5cclxuLy8g6I635Y+W5L2T5qOA5aWX6aSQ5YiX6KGoXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9leGFtTGlzdCA9IGUgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3BoeXNpY2FsX2V4YW0vbGlzdCcsICdHRVQnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2V4YW1JbmZvID0gZSA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvcGh5c2ljYWxfZXhhbS9pbmZvJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcGF5UGV4YW0gPSBlID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9wYXlQZXhhbScpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**********************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 24);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "flex": 1
  },
  "buttons": {
    "position": "fixed",
    "top": "100"
  },
  "button": {
    "width": "100",
    "color": "#FF0000",
    "flex": 1,
    "marginTop": "4",
    "marginRight": "4",
    "marginBottom": "4",
    "marginLeft": "4",
    "opacity:active": 0.5
  },
  "remote-view": {
    "flex": 8
  },
  "bottom-outer": {
    "flex": 2,
    "flexDirection": "row"
  },
  "local-view": {
    "flex": 3
  },
  "handle-outer": {
    "flex": 7,
    "justifyContent": "center",
    "flexDirection": "row"
  },
  "handle-buttons": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "button-text": {
    "fontSize": "14",
    "flexDirection": "column"
  },
  "wating": {
    "position": "fixed",
    "backgroundColor": "#5eb6aa",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "w-button": {
    "position": "fixed",
    "bottom": "100",
    "width": "100",
    "height": "40",
    "borderColor": "#FFFFFF",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderRadius": "4",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "answer": {
    "right": "50",
    "borderColor": "#008000"
  },
  "refuse": {
    "left": "50",
    "borderColor": "#FF0000"
  },
  "wating-answer": {
    "transform": "translateX(-50%)",
    "position": "fixed"
  },
  "wating-tips": {
    "transform": "translateX(-50%)",
    "position": "fixed",
    "bottom": "400",
    "borderWidth": 0
  },
  "w-b-text": {
    "color": "#FFFFFF"
  }
}

/***/ })
/******/ ]);