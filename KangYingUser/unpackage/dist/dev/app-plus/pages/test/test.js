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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
/* 19 */
/*!*******************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/main.js?{"page":"pages%2Ftest%2Ftest"} ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/test/test.nvue?mpType=page */ 20);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/test/test'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGVzdC90ZXN0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGVzdC90ZXN0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 21);\n/* harmony import */ var _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.nvue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3d119945\",\n  false,\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/test/test.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Rlc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTUyZjRlOCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Rlc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiM2QxMTk5NDVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVzdC90ZXN0Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*******************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=template&id=7552f4e8&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
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
      _c(
        "view",
        [
          _c("txtrtc_video_view", {
            ref: "videoView",
            staticStyle: { width: "100%", height: "300px" }
          }),
          _c("txtrtc_video_view", {
            ref: "remoteVideoView",
            style: "width: 100%;height: " + _vm.remoteVideoHeight + "px;"
          }),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.anchorEnterRoom()
                }
              }
            },
            [_vm._v("主播进入房间")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.audienceEnterRoom()
                }
              }
            },
            [_vm._v("观众进入房间")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.startVideo()
                }
              }
            },
            [_vm._v("上麦")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.stopVideo()
                }
              }
            },
            [_vm._v("下麦")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.sendMessage()
                }
              }
            },
            [_vm._v("发消息")]
          ),
          _c(
            "button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.exitRoom()
                }
              }
            },
            [_vm._v("离开房间")]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLG9kQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n//插件对象\n\nvar sdkwx = __webpack_provided_uni_dot_requireNativePlugin('TXTRTC-SdkWX');var _default =\n\n{\n  data: function data() {\n    return {\n      remoteVideoHeight: 100,\n      sdkAppId: 1400440995,\n      roomId: 12333,\n      u1: {\n        userId: 1,\n        userSig: 'eJwtzFELgjAUhuH-cq5DztY2nNBVCCERC4XQO3NTTlaoiUXRf8-Uy*-54P1Aso*9wXUQAPcQVtMm6*49lTQxW-Bh67xpyELABKIQqLWcH-dqqHOjSyk5Is7a0*1vCtc*95liS4WqsXnO6kMRJ5e6PZqwV8VpMPydRjrbCibTnblGZa7aCp9duoHvDxL7L7Q_' },\n\n      u2: {\n        userId: 2,\n        userSig: 'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zIhwlDB4pTsxIKCzBQlK0MTAwMTEwNLS1OITGpFQWZRKlDc1NTUyMDAACJakpkLEjMzMLYwsjAyhooWZ6YDzXTMTw92iSpw9ipLcTHPjTKrCozRD83wqPB0cc8OcLQIM8ouzcopTXEuCgu3sFWqBQA96zAT' } };\n\n\n  },\n  onLoad: function onLoad() {\n    //检查权限\n    sdkwx.checkPermission(function (res) {\n      __f__(\"log\", res, \" at pages/test/test.nvue:38\");\n    });\n    var that = this;\n    //设置事件回调\n    sdkwx.setListener(function (res) {\n      __f__(\"log\", res, \" at pages/test/test.nvue:43\");\n      if (res.type == \"onEnterRoom\") {\n        //进入房间回调\n        __f__(\"log\", res, \" at pages/test/test.nvue:46\");\n      } else if (res.type == \"onExitRoom\") {\n        //离开房间回调\n        __f__(\"log\", res, \" at pages/test/test.nvue:49\");\n      } else if (res.type == \"onSwitchRole\") {\n        //角色转换回调\n        __f__(\"log\", res, \" at pages/test/test.nvue:52\");\n      } else if (res.type == \"onUserVideoAvailable\") {\n        //远端用户视频可用回调\n        __f__(\"log\", res, \" at pages/test/test.nvue:55\");\n        that.onUserVideoAvailable(res.data);\n      }\n    });\n\n    // //初始化IM\n    // txim.initSDK(this.sdkAppId, {}, function(res) {\n    // \tconsole.log(res);\n    // \tif (res.type == \"onConnectSuccess\") {\n\n    // \t}\n    // });\n    // //消息监听\n    // txim.addSimpleMsgListener(function(res) {\n    // \tconsole.log(res);\n    // });\n  },\n  methods: {\n    onUserVideoAvailable: function onUserVideoAvailable(data) {\n\n      var userId = data.userId;\n      var available = data.available;\n\n      var remoteVideoView = this.$refs.remoteVideoView;\n      if (available) {\n        this.remoteVideoHeight = 300;\n        remoteVideoView.startRemoteView(userId);\n      } else {\n        this.remoteVideoHeight = 0;\n        remoteVideoView.stopRemoteView(userId);\n      }\n    },\n    anchorEnterRoom: function anchorEnterRoom() {\n      this.isAnchor = true;\n\n      //加入房间\n      var scene = 1; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;\n\n      sdkwx.enterRoom(_objectSpread({\n        sdkAppId: this.sdkAppId,\n        roomId: this.roomId,\n        role: 20 },\n      this.u1),\n      scene);\n\n      // //登录IM\n      // var that = this;\n      // txim.login(userID, userSig, function(res) {\n      // \tconsole.log(res);\n      // \tif (res.code == 0) {\n      // \t\tconsole.log(\"login im success\");\n      // \t\t//创建群\n      // \t\tthat.createGroup();\n      // \t}\n      // });\n\n      //开启音频\n      sdkwx.startLocalAudio();\n\n      //开始视频\n      var videoView = this.$refs.videoView;\n      videoView.startLocalPreview(true); //true为前置摄像头 false为后置摄像头\n    },\n    audienceEnterRoom: function audienceEnterRoom() {\n      //观众加入房间\n      var scene = 1; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;\n      var userID = \"1\"; //用户id\n      var userSig =\n      \"eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoZQweKU7MSCgswUJStDEwMDYwsLI2MTiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxaztDS3sDSwNIOakpkONDOkIEY-OEY-Ncq83Mki1TkkO6SqssLfxSw8J8rHrzilOCsyMqksKTzEwiMg0tNWqRYAeHIwwQ__\";\n      sdkwx.enterRoom({\n        sdkAppId: this.sdkAppId,\n        roomId: this.roomId,\n        role: 21, //20主播 21 观众\n        userId: userID,\n        userSig: userSig },\n      scene);\n\n      // //登录IM\n      // var that = this;\n      // txim.login(userID, userSig, function(res) {\n      // \tconsole.log(res);\n      // \tif (res.code == 0) {\n      // \t\tconsole.log(\"login im success\");\n      // \t\t//加入群\n      // \t\tthat.joinGroup();\n      // \t}\n      // });\n    },\n    startVideo: function startVideo() {\n      //设置角色主播\n      sdkwx.switchRole(20); //20主播 21 观众\n\n      //开启音频\n      sdkwx.startLocalAudio();\n\n      //开始视频\n      var videoView = this.$refs.videoView;\n      videoView.startLocalPreview(true);\n    },\n    stopVideo: function stopVideo() {\n      //设置角色观众\n      sdkwx.switchRole(21); //20主播 21 观众\n\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView.stopLocalPreview();\n    },\n    exitRoom: function exitRoom() {\n      //退出房间\n      sdkwx.exitRoom();\n\n      // if (this.isAnchor) {\n      // \t//解散群\n      // \tvar groupID = this.roomId;\n      // \ttxim.dismissGroup(groupID, function(res) {\n      // \t\tconsole.log(res);\n      // \t});\n      // } else {\n      // \t//退出群\n      // \tvar groupID = this.roomId;\n      // \ttxim.quitGroup(groupID, function(res) {\n      // \t\tconsole.log(res);\n      // \t});\n      // }\n    },\n    createGroup: function createGroup() {\n      // //创建群\n      // var groupType = \"AVChatRoom\";\n      // var groupID = this.roomId;\n      // var groupName = this.roomId;\n      // txim.createGroup(groupType, groupID, groupName, function(res) {\n      // \tconsole.log(res);\n      // });\n    },\n    joinGroup: function joinGroup() {\n      // //加入群\n      // var groupID = this.roomId;\n      // var message = \"\";\n      // txim.joinGroup(groupID, message, function(res) {\n      // \tconsole.log(res);\n      // });\n    },\n    sendMessage: function sendMessage() {\n      // //发群消息\n      // var text = \"test text\";\n      // var groupID = this.roomId;\n      // var priority = 1;\n      // txim.sendGroupTextMessage(text, groupID, priority, function(res) {\n      // \tconsole.log(res);\n      // });\n      // //发送自定义消息\n      // /*var customData = \"\";\n      // txim.sendGroupCustomMessage(customData, groupID, priority, function(res){\n      // \tconsole.log(res);\n      // });//*/\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGVzdC90ZXN0Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFFQSwyRTs7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsMEJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBQ0EsaUJBREE7QUFFQSxtTkFGQSxFQUpBOztBQVFBO0FBQ0EsaUJBREE7QUFFQSxtTkFGQSxFQVJBOzs7QUFhQSxHQWZBO0FBZ0JBLFFBaEJBLG9CQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FwREE7QUFxREE7QUFDQSx3QkFEQSxnQ0FDQSxJQURBLEVBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZEE7QUFlQSxtQkFmQSw2QkFlQTtBQUNBOztBQUVBO0FBQ0Esb0JBSkEsQ0FJQTs7QUFFQTtBQUNBLCtCQURBO0FBRUEsMkJBRkE7QUFHQSxnQkFIQTtBQUlBLGFBSkE7QUFLQSxXQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQTdCQSxDQTZCQTtBQUNBLEtBN0NBO0FBOENBLHFCQTlDQSwrQkE4Q0E7QUFDQTtBQUNBLG9CQUZBLENBRUE7QUFDQSx1QkFIQSxDQUdBO0FBQ0E7QUFDQSw0TUFEQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSwyQkFGQTtBQUdBLGdCQUhBLEVBR0E7QUFDQSxzQkFKQTtBQUtBLHdCQUxBO0FBTUEsV0FOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEVBO0FBdUVBLGNBdkVBLHdCQXVFQTtBQUNBO0FBQ0EsMkJBRkEsQ0FFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBakZBO0FBa0ZBLGFBbEZBLHVCQWtGQTtBQUNBO0FBQ0EsMkJBRkEsQ0FFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBNUZBO0FBNkZBLFlBN0ZBLHNCQTZGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlHQTtBQStHQSxlQS9HQSx5QkErR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkhBO0FBd0hBLGFBeEhBLHVCQXdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0hBO0FBZ0lBLGVBaElBLHlCQWdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0lBLEVBckRBLEUiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dHh0cnRjX3ZpZGVvX3ZpZXcgcmVmPVwidmlkZW9WaWV3XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtoZWlnaHQ6MzAwcHg7XCI+PC90eHRydGNfdmlkZW9fdmlldz5cclxuXHRcdDx0eHRydGNfdmlkZW9fdmlldyByZWY9XCJyZW1vdGVWaWRlb1ZpZXdcIiA6c3R5bGU9XCJgd2lkdGg6IDEwMCU7aGVpZ2h0OiAke3JlbW90ZVZpZGVvSGVpZ2h0fXB4O2BcIj48L3R4dHJ0Y192aWRlb192aWV3PlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImFuY2hvckVudGVyUm9vbSgpXCI+5Li75pKt6L+b5YWl5oi/6Ze0PC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYXVkaWVuY2VFbnRlclJvb20oKVwiPuinguS8l+i/m+WFpeaIv+mXtDwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInN0YXJ0VmlkZW8oKVwiPuS4ium6pjwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInN0b3BWaWRlbygpXCI+5LiL6bqmPC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic2VuZE1lc3NhZ2UoKVwiPuWPkea2iOaBrzwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImV4aXRSb29tKClcIj7nprvlvIDmiL/pl7Q8L2J1dHRvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8v5o+S5Lu25a+56LGhXHJcblxyXG5cdHZhciBzZGt3eCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdUWFRSVEMtU2RrV1gnKTtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZW1vdGVWaWRlb0hlaWdodDogMTAwLFxyXG5cdFx0XHRcdHNka0FwcElkOiAxNDAwNDQwOTk1LFxyXG5cdFx0XHRcdHJvb21JZDogMTIzMzMsXHJcblx0XHRcdFx0dTE6IHtcclxuXHRcdFx0XHRcdHVzZXJJZDogMSxcclxuXHRcdFx0XHRcdHVzZXJTaWc6ICdlSnd0ekZFTGdqQVVodUgtY3E1RHp0WTJuTkJWQ0NFUkM0WFFPM05UVGxhb2lVWFJmOC1VeSotNTRQMUFzbyo5d1hVUUFQY1FWdE1tNio0OWxUUXhXLUJoNjd4cHlFTEFCS0lRcUxXY0gtZHFxSE9qU3lrNUlzN2EwKjF2Q3RjKjk1bGlTNFdxc1huTzZrTVJKNWU2UFpxd1Y4VnBNUHlkUmpyYkNpYlRuYmxHWmE3YUNwOWR1b0h2RHhMN0w3UV8nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1Mjoge1xyXG5cdFx0XHRcdFx0dXNlcklkOiAyLFxyXG5cdFx0XHRcdFx0dXNlclNpZzogJ2VKeXJWZ3J4Q2RZclN5MVNzbEl5MGpOUTBnSHpNMU5TODBveTB6SWh3bERCNHBUc3hJS0N6QlFsSzBNVEF3TVRFd05MUzFPSVRHcEZRV1pSS2xEYzFOVFV5TURBQUNKYWtwa0xFak16TUxZd3NqQXlob29XWjZZRHpYVE1UdzkyaVNwdzlpcExjVEhQalRLckNvelJEODN3cVBCMGNjOE9jTFFJTThvdXpjb3BUWEV1Q2d1M3NGV3FCUUE5NnpBVCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdC8v5qOA5p+l5p2D6ZmQXHJcblx0XHRcdHNka3d4LmNoZWNrUGVybWlzc2lvbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvL+iuvue9ruS6i+S7tuWbnuiwg1xyXG5cdFx0XHRzZGt3eC5zZXRMaXN0ZW5lcihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGlmIChyZXMudHlwZSA9PSBcIm9uRW50ZXJSb29tXCIpIHtcclxuXHRcdFx0XHRcdC8v6L+b5YWl5oi/6Ze05Zue6LCDXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzLnR5cGUgPT0gXCJvbkV4aXRSb29tXCIpIHtcclxuXHRcdFx0XHRcdC8v56a75byA5oi/6Ze05Zue6LCDXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzLnR5cGUgPT0gXCJvblN3aXRjaFJvbGVcIikge1xyXG5cdFx0XHRcdFx0Ly/op5LoibLovazmjaLlm57osINcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChyZXMudHlwZSA9PSBcIm9uVXNlclZpZGVvQXZhaWxhYmxlXCIpIHtcclxuXHRcdFx0XHRcdC8v6L+c56uv55So5oi36KeG6aKR5Y+v55So5Zue6LCDXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0dGhhdC5vblVzZXJWaWRlb0F2YWlsYWJsZShyZXMuZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIC8v5Yid5aeL5YyWSU1cclxuXHRcdFx0Ly8gdHhpbS5pbml0U0RLKHRoaXMuc2RrQXBwSWQsIHt9LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHQvLyBcdGlmIChyZXMudHlwZSA9PSBcIm9uQ29ubmVjdFN1Y2Nlc3NcIikge1xyXG5cclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHQvLyAvL+a2iOaBr+ebkeWQrFxyXG5cdFx0XHQvLyB0eGltLmFkZFNpbXBsZU1zZ0xpc3RlbmVyKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25Vc2VyVmlkZW9BdmFpbGFibGUoZGF0YSkge1xyXG5cclxuXHRcdFx0XHR2YXIgdXNlcklkID0gZGF0YS51c2VySWQ7XHJcblx0XHRcdFx0dmFyIGF2YWlsYWJsZSA9IGRhdGEuYXZhaWxhYmxlO1xyXG5cclxuXHRcdFx0XHR2YXIgcmVtb3RlVmlkZW9WaWV3ID0gdGhpcy4kcmVmcy5yZW1vdGVWaWRlb1ZpZXc7XHJcblx0XHRcdFx0aWYgKGF2YWlsYWJsZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdGVWaWRlb0hlaWdodCA9IDMwMDtcclxuXHRcdFx0XHRcdHJlbW90ZVZpZGVvVmlldy5zdGFydFJlbW90ZVZpZXcodXNlcklkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdGVWaWRlb0hlaWdodCA9IDA7XHJcblx0XHRcdFx0XHRyZW1vdGVWaWRlb1ZpZXcuc3RvcFJlbW90ZVZpZXcodXNlcklkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFuY2hvckVudGVyUm9vbSgpIHtcclxuXHRcdFx0XHR0aGlzLmlzQW5jaG9yID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Ly/liqDlhaXmiL/pl7RcclxuXHRcdFx0XHR2YXIgc2NlbmUgPSAxOyAvL+inhumikemAmuivnSA9IDA76KeG6aKR5LqS5Yqo55u05pKtID0gMTvor63pn7PpgJror50gPSAyO+ivremfs+S6kuWKqOebtOaSrSA9IDM7XHJcblxyXG5cdFx0XHRcdHNka3d4LmVudGVyUm9vbSh7XHJcblx0XHRcdFx0XHRzZGtBcHBJZDogdGhpcy5zZGtBcHBJZCxcclxuXHRcdFx0XHRcdHJvb21JZDogdGhpcy5yb29tSWQsXHJcblx0XHRcdFx0XHRyb2xlOiAyMCwgLy8yMOS4u+aSrSAyMSDop4LkvJdcclxuXHRcdFx0XHRcdC4uLnRoaXMudTFcclxuXHRcdFx0XHR9LCBzY2VuZSk7XHJcblxyXG5cdFx0XHRcdC8vIC8v55m75b2VSU1cclxuXHRcdFx0XHQvLyB2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Ly8gdHhpbS5sb2dpbih1c2VySUQsIHVzZXJTaWcsIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdC8vIFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHQvLyBcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibG9naW4gaW0gc3VjY2Vzc1wiKTtcclxuXHRcdFx0XHQvLyBcdFx0Ly/liJvlu7rnvqRcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC5jcmVhdGVHcm91cCgpO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0XHQvL+W8gOWQr+mfs+mikVxyXG5cdFx0XHRcdHNka3d4LnN0YXJ0TG9jYWxBdWRpbygpO1xyXG5cclxuXHRcdFx0XHQvL+W8gOWni+inhumikVxyXG5cdFx0XHRcdHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuXHRcdFx0XHR2aWRlb1ZpZXcuc3RhcnRMb2NhbFByZXZpZXcodHJ1ZSk7IC8vdHJ1ZeS4uuWJjee9ruaRhOWDj+WktCBmYWxzZeS4uuWQjue9ruaRhOWDj+WktFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdWRpZW5jZUVudGVyUm9vbSgpIHtcclxuXHRcdFx0XHQvL+inguS8l+WKoOWFpeaIv+mXtFxyXG5cdFx0XHRcdHZhciBzY2VuZSA9IDE7IC8v6KeG6aKR6YCa6K+dID0gMDvop4bpopHkupLliqjnm7Tmkq0gPSAxO+ivremfs+mAmuivnSA9IDI76K+t6Z+z5LqS5Yqo55u05pKtID0gMztcclxuXHRcdFx0XHR2YXIgdXNlcklEID0gXCIxXCI7IC8v55So5oi3aWRcclxuXHRcdFx0XHR2YXIgdXNlclNpZyA9XHJcblx0XHRcdFx0XHRcImVKeXJWZ3J4Q2RZclN5MVNzbEl5MGpOUTBnSHpNMU5TODBveTB6TEJ3b1pRd2VLVTdNU0Nnc3dVSlN0REV3TURZd3NMSTJNVGlFeHFSVUZtVVNwUTNOVFUxTWpBd0FBaVdwS1pDeGF6dERTM3NEU3dOSU9ha3BrT05ET2tJRVktT0VZLU5jcTgzTWtpMVRra082U3Fzc0xmeFN3OEo4ckhyemlsT0NzeU1xa3NLVHpFd2lNZzB0TldxUllBZUhJd3dRX19cIjtcclxuXHRcdFx0XHRzZGt3eC5lbnRlclJvb20oe1xyXG5cdFx0XHRcdFx0c2RrQXBwSWQ6IHRoaXMuc2RrQXBwSWQsXHJcblx0XHRcdFx0XHRyb29tSWQ6IHRoaXMucm9vbUlkLFxyXG5cdFx0XHRcdFx0cm9sZTogMjEsIC8vMjDkuLvmkq0gMjEg6KeC5LyXXHJcblx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJRCxcclxuXHRcdFx0XHRcdHVzZXJTaWc6IHVzZXJTaWdcclxuXHRcdFx0XHR9LCBzY2VuZSk7XHJcblxyXG5cdFx0XHRcdC8vIC8v55m75b2VSU1cclxuXHRcdFx0XHQvLyB2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Ly8gdHhpbS5sb2dpbih1c2VySUQsIHVzZXJTaWcsIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdC8vIFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHQvLyBcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibG9naW4gaW0gc3VjY2Vzc1wiKTtcclxuXHRcdFx0XHQvLyBcdFx0Ly/liqDlhaXnvqRcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC5qb2luR3JvdXAoKTtcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhcnRWaWRlbygpIHtcclxuXHRcdFx0XHQvL+iuvue9ruinkuiJsuS4u+aSrVxyXG5cdFx0XHRcdHNka3d4LnN3aXRjaFJvbGUoMjApOyAvLzIw5Li75pKtIDIxIOinguS8l1xyXG5cclxuXHRcdFx0XHQvL+W8gOWQr+mfs+mikVxyXG5cdFx0XHRcdHNka3d4LnN0YXJ0TG9jYWxBdWRpbygpO1xyXG5cclxuXHRcdFx0XHQvL+W8gOWni+inhumikVxyXG5cdFx0XHRcdHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuXHRcdFx0XHR2aWRlb1ZpZXcuc3RhcnRMb2NhbFByZXZpZXcodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b3BWaWRlbygpIHtcclxuXHRcdFx0XHQvL+iuvue9ruinkuiJsuinguS8l1xyXG5cdFx0XHRcdHNka3d4LnN3aXRjaFJvbGUoMjEpOyAvLzIw5Li75pKtIDIxIOinguS8l1xyXG5cclxuXHRcdFx0XHQvL+WBnOatoumfs+mikVxyXG5cdFx0XHRcdHNka3d4LnN0b3BMb2NhbEF1ZGlvKCk7XHJcblxyXG5cdFx0XHRcdC8v5YGc5q2i6KeG6aKRXHJcblx0XHRcdFx0dmFyIHZpZGVvVmlldyA9IHRoaXMuJHJlZnMudmlkZW9WaWV3O1xyXG5cdFx0XHRcdHZpZGVvVmlldy5zdG9wTG9jYWxQcmV2aWV3KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGV4aXRSb29tKCkge1xyXG5cdFx0XHRcdC8v6YCA5Ye65oi/6Ze0XHJcblx0XHRcdFx0c2Rrd3guZXhpdFJvb20oKTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuaXNBbmNob3IpIHtcclxuXHRcdFx0XHQvLyBcdC8v6Kej5pWj576kXHJcblx0XHRcdFx0Ly8gXHR2YXIgZ3JvdXBJRCA9IHRoaXMucm9vbUlkO1xyXG5cdFx0XHRcdC8vIFx0dHhpbS5kaXNtaXNzR3JvdXAoZ3JvdXBJRCwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIFx0Ly/pgIDlh7rnvqRcclxuXHRcdFx0XHQvLyBcdHZhciBncm91cElEID0gdGhpcy5yb29tSWQ7XHJcblx0XHRcdFx0Ly8gXHR0eGltLnF1aXRHcm91cChncm91cElELCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHQvLyBcdH0pO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y3JlYXRlR3JvdXAoKSB7XHJcblx0XHRcdFx0Ly8gLy/liJvlu7rnvqRcclxuXHRcdFx0XHQvLyB2YXIgZ3JvdXBUeXBlID0gXCJBVkNoYXRSb29tXCI7XHJcblx0XHRcdFx0Ly8gdmFyIGdyb3VwSUQgPSB0aGlzLnJvb21JZDtcclxuXHRcdFx0XHQvLyB2YXIgZ3JvdXBOYW1lID0gdGhpcy5yb29tSWQ7XHJcblx0XHRcdFx0Ly8gdHhpbS5jcmVhdGVHcm91cChncm91cFR5cGUsIGdyb3VwSUQsIGdyb3VwTmFtZSwgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRqb2luR3JvdXAoKSB7XHJcblx0XHRcdFx0Ly8gLy/liqDlhaXnvqRcclxuXHRcdFx0XHQvLyB2YXIgZ3JvdXBJRCA9IHRoaXMucm9vbUlkO1xyXG5cdFx0XHRcdC8vIHZhciBtZXNzYWdlID0gXCJcIjtcclxuXHRcdFx0XHQvLyB0eGltLmpvaW5Hcm91cChncm91cElELCBtZXNzYWdlLCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRNZXNzYWdlKCkge1xyXG5cdFx0XHRcdC8vIC8v5Y+R576k5raI5oGvXHJcblx0XHRcdFx0Ly8gdmFyIHRleHQgPSBcInRlc3QgdGV4dFwiO1xyXG5cdFx0XHRcdC8vIHZhciBncm91cElEID0gdGhpcy5yb29tSWQ7XHJcblx0XHRcdFx0Ly8gdmFyIHByaW9yaXR5ID0gMTtcclxuXHRcdFx0XHQvLyB0eGltLnNlbmRHcm91cFRleHRNZXNzYWdlKHRleHQsIGdyb3VwSUQsIHByaW9yaXR5LCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0Ly8gLy/lj5HpgIHoh6rlrprkuYnmtojmga9cclxuXHRcdFx0XHQvLyAvKnZhciBjdXN0b21EYXRhID0gXCJcIjtcclxuXHRcdFx0XHQvLyB0eGltLnNlbmRHcm91cEN1c3RvbU1lc3NhZ2UoY3VzdG9tRGF0YSwgZ3JvdXBJRCwgcHJpb3JpdHksIGZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdC8vIH0pOy8vKi9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ })
/******/ ]);