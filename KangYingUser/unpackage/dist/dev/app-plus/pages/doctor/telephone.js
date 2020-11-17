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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/main.js?{"page":"pages%2Fdoctor%2Ftelephone"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_doctor_telephone_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/doctor/telephone.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_doctor_telephone_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_doctor_telephone_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/doctor/telephone'\n        _pages_doctor_telephone_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_doctor_telephone_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsZ0ZBQUc7QUFDWCxRQUFRLGdGQUFHO0FBQ1gsUUFBUSxnRkFBRztBQUNYLGdCQUFnQixnRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kb2N0b3IvdGVsZXBob25lLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZG9jdG9yL3RlbGVwaG9uZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
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
/* 4 */
/*!********************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?mpType=page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telephone.nvue?vue&type=template&id=2817df01&mpType=page */ 5);\n/* harmony import */ var _telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telephone.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./telephone.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 13).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./telephone.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 13).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"c74a6178\",\n  false,\n  _telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/doctor/telephone.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUVBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90ZWxlcGhvbmUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODE3ZGYwMSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGVsZXBob25lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGVsZXBob25lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3RlbGVwaG9uZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3RlbGVwaG9uZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYzc0YTYxNzhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZG9jdG9yL3RlbGVwaG9uZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=template&id=2817df01&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./telephone.nvue?vue&type=template&id=2817df01&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_template_id_2817df01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=template&id=2817df01&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        _vm.CALL_STATE == 4
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
                            on: { click: _vm.hungupCalling }
                          },
                          [
                            _c("view", { staticClass: ["button-style"] }, [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["button-text"],
                                  staticStyle: { color: "red" }
                                },
                                [_vm._v("挂断")]
                              )
                            ])
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: _vm.muteCalling }
                          },
                          [
                            _c("view", { staticClass: ["button-style"] }, [
                              _c("u-text", { staticClass: ["button-text"] }, [
                                _vm._v(
                                  _vm._s(_vm.hasMuteCalling ? "继续" : "暂停") +
                                    "通话"
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _c("view", { staticClass: ["handle-buttons"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: _vm.muteLocalVideo }
                          },
                          [
                            _c("view", { staticClass: ["button-style"] }, [
                              _c("u-text", { staticClass: ["button-text"] }, [
                                _vm._v(
                                  _vm._s(_vm.hasMuteVideo ? "开启" : "关闭") +
                                    "摄像头"
                                )
                              ])
                            ])
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: _vm.muteLocalAudio }
                          },
                          [
                            _c("view", { staticClass: ["button-style"] }, [
                              _c("u-text", { staticClass: ["button-text"] }, [
                                _vm._v(
                                  _vm._s(_vm.hasMuteAudio ? "开启" : "关闭") +
                                    "话筒"
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _c("view", { staticClass: ["handle-buttons"] }, [
                        _c(
                          "view",
                          {
                            staticClass: ["button"],
                            on: { click: _vm.changeCamera }
                          },
                          [
                            _c("view", { staticClass: ["button-style"] }, [
                              _c("u-text", { staticClass: ["button-text"] }, [
                                _vm._v(
                                  _vm._s(_vm.cameraTypeStatus ? "前置" : "后置")
                                )
                              ]),
                              _c("u-text", { staticClass: ["button-text"] }, [
                                _vm._v("摄像头")
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          : _c("view", { staticClass: ["wating"] }, [
              _vm.currentCall.targetUserID === _vm.userID
                ? _c("view", [
                    _c(
                      "view",
                      {
                        staticClass: ["wating-tips"],
                        style: "left:" + _vm.watingWidth / 2 + "px;"
                      },
                      [
                        _c("u-text", { staticClass: ["w-b-text"] }, [
                          _vm._v("等待接听...")
                        ])
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["w-button", "answer"],
                        on: { click: _vm.answerCalling }
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
                        on: { click: _vm.refuseCalling }
                      },
                      [
                        _c("u-text", { staticClass: ["w-b-text"] }, [
                          _vm._v("拒绝")
                        ])
                      ]
                    )
                  ])
                : _c("view", [
                    _c(
                      "view",
                      {
                        staticClass: ["wating-tips"],
                        style: "left:" + _vm.watingWidth / 2 + "px;"
                      },
                      [
                        _c("u-text", { staticClass: ["w-b-text"] }, [
                          _vm._v("正在呼叫...")
                        ])
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["w-button", "wating-answer"],
                        style: "left:" + _vm.watingWidth / 2 + "px;",
                        on: { click: _vm.hungupCalling }
                      },
                      [
                        _c("u-text", { staticClass: ["w-b-text"] }, [
                          _vm._v("挂断")
                        ])
                      ]
                    )
                  ])
            ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!********************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./telephone.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZiLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZWxlcGhvbmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVsZXBob25lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 11);\n\n\n\n\nvar _config = __webpack_require__(/*! ../../common/config.js */ 12);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\nvar sdkwx = __webpack_provided_uni_dot_requireNativePlugin('TXTRTC-SdkWX');var _default =\n\n{\n  data: function data() {\n    return {\n      // 等待界面\n      watingHeight: 0,\n      watingWidth: 0,\n\n      // 铃声用\n      innerAudioContext: {},\n\n      // 通话中控制\n      hasMuteAudio: false,\n      hasMuteVideo: false,\n      hasMuteCalling: false,\n\n      cameraTypeStatus: true // true前置 false后置\n    };\n  },\n  watch: {\n    REMOTE_CALL_STATE: function REMOTE_CALL_STATE(state) {\n      var _this = this;\n      switch (state) {\n        case 2:\n          _this.remoteAnswer();\n          break;\n        case 3:\n          _this.remoteRefuse();\n          break;\n        case 5:\n          _this.remoteHungup();\n          break;\n        default:\n          break;}\n\n    } },\n\n  onLoad: function onLoad() {var _this2 = this;\n    this.startWatingAudio();\n    uni.getSystemInfo({\n      success: function success(e) {\n        _this2.watingWidth = e.windowWidth;\n        _this2.watingHeight = e.windowHeight;\n      } });\n\n\n    //检查权限\n    this.rePermission();\n\n    //设置事件回调\n    sdkwx.setListener(function (res) {\n      if (res.type == \"onEnterRoom\") {\n        //进入房间回调\n        __f__(\"log\", '进入房间', \" at pages/doctor/telephone.nvue:131\");\n      } else if (res.type == \"onExitRoom\") {\n        //离开房间回调\n        __f__(\"log\", '离开房间', \" at pages/doctor/telephone.nvue:134\");\n      } else if (res.type == \"onUserVideoAvailable\") {\n        //远端用户视频可用回调\n        _this2.onUserVideoAvailable(res.data);\n      }\n    });\n  },\n  onBackPress: function onBackPress(options) {var _this3 = this;\n    if (options.from === 'navigateBack') {\n      return false;\n    }\n\n    uni.showModal({\n      title: '提示',\n      content: '将结束通话，是否确定？',\n      success: function success(e) {\n        if (e.confirm) {\n          _this3.hungupCalling();\n        }\n      } });\n\n\n    return true;\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.UPDATE_CALL_STATE(0);\n    this.UPDATE_REMOTE_CALL_STATE(0);\n    this.UPDATE_CURRENT_CALL({});\n    this.stopWatingAudio();\n  },\n  methods: _objectSpread({\n    startWatingAudio: function startWatingAudio() {\n      var innerAudioContext = uni.createInnerAudioContext();\n      innerAudioContext.autoplay = true;\n      innerAudioContext.loop = true;\n      innerAudioContext.src = 'http://localhost/static/telephone.wav';\n      innerAudioContext.onPlay(function () {\n        __f__(\"log\", '开始播放', \" at pages/doctor/telephone.nvue:171\");\n      });\n      innerAudioContext.onError(function (res) {\n        __f__(\"log\", res.errMsg, \" at pages/doctor/telephone.nvue:174\");\n        __f__(\"log\", res.errCode, \" at pages/doctor/telephone.nvue:175\");\n      });\n      this.innerAudioContext = innerAudioContext;\n    },\n    stopWatingAudio: function stopWatingAudio() {\n      try {\n        if (this.innerAudioContext) {\n          this.innerAudioContext && this.innerAudioContext.stop();\n          this.innerAudioContext && this.innerAudioContext.destroy();\n        }\n      } catch (e) {\n        __f__(\"log\", 'err:', e, \" at pages/doctor/telephone.nvue:186\");\n      }\n    },\n    //远端接听\n    remoteAnswer: function remoteAnswer() {\n      this.UPDATE_CALL_STATE(4); // 设置为通话中\n      this.enterRoom();\n      this.stopWatingAudio();\n    },\n    //远端拒绝\n    remoteRefuse: function remoteRefuse() {\n      uni.navigateBack();\n      this.stopWatingAudio();\n    },\n    //远端挂断\n    remoteHungup: function remoteHungup() {\n      this.exitRoom();\n    },\n    //本地接听\n    answerCalling: function answerCalling() {var _this4 = this;\n      // 接听电话\n      this.UPDATE_CALL_STATE(2).then(function () {\n        // 应答后设置本地为通话中\n        _this4.UPDATE_CALL_STATE(4).then(function () {\n          _this4.enterRoom();\n        });\n      });\n      this.stopWatingAudio();\n    },\n    //本地拒绝\n    refuseCalling: function refuseCalling() {\n      this.UPDATE_CALL_STATE(3);\n      uni.navigateBack();\n    },\n    //本地挂断\n    hungupCalling: function hungupCalling() {\n      this.UPDATE_CALL_STATE(5);\n      this.exitRoom();\n      this.stopWatingAudio();\n    },\n    rePermission: function rePermission() {\n      sdkwx.checkPermission(function (res) {\n        __f__(\"log\", res, \" at pages/doctor/telephone.nvue:228\");\n      });\n    },\n    onUserVideoAvailable: function onUserVideoAvailable(data) {\n      var userId = data.userId;\n      var available = data.available;\n\n      var remoteVideoView = this.$refs.remoteVideoView;\n      if (available && remoteVideoView) {\n        remoteVideoView.startRemoteView(userId);\n      } else {\n        remoteVideoView.stopRemoteView(userId);\n      }\n    },\n    muteCalling: function muteCalling() {\n      this.hasMuteCalling = !this.hasMuteCalling;\n\n      this.muteLocalAudio();\n      this.muteLocalVideo();\n    },\n    muteLocalVideo: function muteLocalVideo() {\n      this.hasMuteVideo = !this.hasMuteVideo;\n      sdkwx.muteLocalVideo();\n      if (!this.hasMuteVideo) {\n        //开始视频\n        var videoView = this.$refs.videoView;\n        videoView && videoView.startLocalPreview(true);\n      } else {\n        //开始视频\n        var _videoView = this.$refs.videoView;\n        _videoView && _videoView.stopLocalPreview(true);\n      }\n    },\n    muteLocalAudio: function muteLocalAudio() {\n      this.hasMuteAudio = !this.hasMuteAudio;\n      sdkwx.muteLocalAudio();\n      if (!this.hasMuteAudio) {\n        sdkwx.startLocalAudio();\n      } else {\n        sdkwx.stopLocalAudio();\n      }\n    },\n    enterRoom: function enterRoom() {var _this5 = this;\n      setTimeout(function () {\n        var scene = 0; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;\n        sdkwx.enterRoom({\n          sdkAppId: _config.SDK_APP_ID,\n          roomId: _this5.currentCall.roomId, // 主叫ID作为roomId，只能为数字或者可转化为数字\n          role: 20, //20主播 21 观众\n          userId: _this5.userID,\n          userSig: _this5.userSig },\n        scene);\n        setTimeout(function () {\n          _this5.startVideo();\n        });\n      });\n    },\n    startVideo: function startVideo() {var _this6 = this;\n      this.stopVideo();\n\n      setTimeout(function () {\n        // //设置角色主播\n        // sdkwx.switchRole(20); //20主播 21 观众\n\n        //开启音频\n        sdkwx.startLocalAudio();\n\n        //开始视频\n        var videoView = _this6.$refs.videoView;\n        videoView.startLocalPreview(true);\n      });\n    },\n    changeCamera: function changeCamera() {\n      this.cameraTypeStatus = !this.cameraTypeStatus;\n      var videoView = this.$refs.videoView;\n      videoView.stopLocalPreview();\n      videoView.startLocalPreview(this.cameraTypeStatus);\n    },\n    stopLocalPreview: function stopLocalPreview() {\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView.stopLocalPreview();\n    },\n    stopVideo: function stopVideo() {\n      // //设置角色观众\n      // sdkwx.switchRole(20); //20主播 21 观众\n\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView && videoView.stopLocalPreview();\n    },\n    exitRoom: function exitRoom() {\n      this.stopVideo();\n      //退出房间\n      sdkwx.exitRoom();\n      uni.navigateBack();\n    } },\n  (0, _vuex.mapActions)(['UPDATE_CALL_STATE', 'UPDATE_REMOTE_CALL_STATE', 'UPDATE_CURRENT_CALL'])),\n\n  computed: _objectSpread({},\n  (0, _vuex.mapGetters)(['userInfo', 'CALL_STATE', 'REMOTE_CALL_STATE', 'userSig', 'userID', 'currentCall'])) };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZG9jdG9yL3RlbGVwaG9uZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQTs7Ozs7QUFLQSxvRTs7QUFFQSwyRTs7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBRkE7QUFHQSxvQkFIQTs7QUFLQTtBQUNBLDJCQU5BOztBQVFBO0FBQ0EseUJBVEE7QUFVQSx5QkFWQTtBQVdBLDJCQVhBOztBQWFBLDRCQWJBLENBYUE7QUFiQTtBQWVBLEdBakJBO0FBa0JBO0FBQ0EscUJBREEsNkJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBWEE7O0FBYUEsS0FoQkEsRUFsQkE7O0FBb0NBLFFBcENBLG9CQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOzs7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FYQTtBQVlBLEdBN0RBO0FBOERBLGFBOURBLHVCQThEQSxPQTlEQSxFQThEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUEE7OztBQVVBO0FBQ0EsR0E5RUE7QUErRUEsZUEvRUEsMkJBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBGQTtBQXFGQTtBQUNBLG9CQURBLDhCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBLEtBZEE7QUFlQSxtQkFmQSw2QkFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkE7QUFDQSxnQkExQkEsMEJBMEJBO0FBQ0EsZ0NBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxLQTlCQTtBQStCQTtBQUNBLGdCQWhDQSwwQkFnQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQ0E7QUFvQ0E7QUFDQSxnQkFyQ0EsMEJBcUNBO0FBQ0E7QUFDQSxLQXZDQTtBQXdDQTtBQUNBLGlCQXpDQSwyQkF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BTEE7QUFNQTtBQUNBLEtBbERBO0FBbURBO0FBQ0EsaUJBcERBLDJCQW9EQTtBQUNBO0FBQ0E7QUFDQSxLQXZEQTtBQXdEQTtBQUNBLGlCQXpEQSwyQkF5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdEQTtBQThEQSxnQkE5REEsMEJBOERBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQWxFQTtBQW1FQSx3QkFuRUEsZ0NBbUVBLElBbkVBLEVBbUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0E3RUE7QUE4RUEsZUE5RUEseUJBOEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBbkZBO0FBb0ZBLGtCQXBGQSw0QkFvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEdBO0FBaUdBLGtCQWpHQSw0QkFpR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXpHQTtBQTBHQSxhQTFHQSx1QkEwR0E7QUFDQTtBQUNBLHNCQURBLENBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsMkNBRkEsRUFFQTtBQUNBLGtCQUhBLEVBR0E7QUFDQSwrQkFKQTtBQUtBLGlDQUxBO0FBTUEsYUFOQTtBQU9BO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FaQTtBQWFBLEtBeEhBO0FBeUhBLGNBekhBLHdCQXlIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQSxLQXZJQTtBQXdJQSxnQkF4SUEsMEJBd0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdJQTtBQThJQSxvQkE5SUEsOEJBOElBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXJKQTtBQXNKQSxhQXRKQSx1QkFzSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FoS0E7QUFpS0EsWUFqS0Esc0JBaUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRLQTtBQXVLQSxpR0F2S0EsQ0FyRkE7O0FBOFBBO0FBQ0EsNEdBREEsQ0E5UEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICA8dmlldyB2LWlmPVwiQ0FMTF9TVEFURT09NFwiIHN0eWxlPVwiZmxleDoxO1wiPlxyXG4gICAgICAgICAgICA8dHh0cnRjX3ZpZGVvX3ZpZXcgY2xhc3M9J3ZpZGVvLXZpZXcgcmVtb3RlLXZpZXcnIHJlZj1cInJlbW90ZVZpZGVvVmlld1wiPjwvdHh0cnRjX3ZpZGVvX3ZpZXc+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYm90dG9tLW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dHh0cnRjX3ZpZGVvX3ZpZXcgY2xhc3M9J3ZpZGVvLXZpZXcgbG9jYWwtdmlldycgcmVmPVwidmlkZW9WaWV3XCI+PC90eHRydGNfdmlkZW9fdmlldz5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGFuZGxlLW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoYW5kbGUtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImh1bmd1cENhbGxpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidXR0b24tdGV4dFwiIHN0eWxlPVwiY29sb3I6IHJlZDtcIj7mjILmlq08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJtdXRlQ2FsbGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+e3sgaGFzTXV0ZUNhbGxpbmcgPyAn57un57utJyA6ICfmmoLlgZwnIH196YCa6K+dPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGFuZGxlLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJtdXRlTG9jYWxWaWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+e3sgaGFzTXV0ZVZpZGVvID8gJ+W8gOWQrycgOiAn5YWz6ZetJyB9feaRhOWDj+WktDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cIm11dGVMb2NhbEF1ZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvbi1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj57eyBoYXNNdXRlQXVkaW8gPyAn5byA5ZCvJyA6ICflhbPpl60nIH196K+d562SPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGFuZGxlLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJjaGFuZ2VDYW1lcmFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidXR0b24tdGV4dFwiPnt7IGNhbWVyYVR5cGVTdGF0dXMgPyAn5YmN572uJyA6ICflkI7nva4nIH19PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7mkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ3YXRpbmdcIiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDx2aWV3IHYtaWY9XCJjdXJyZW50Q2FsbC50YXJnZXRVc2VySUQ9PT11c2VySURcIj5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwid2F0aW5nLXRpcHNcIiA6c3R5bGU9XCJgbGVmdDoke3dhdGluZ1dpZHRoLzJ9cHg7YFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidy1iLXRleHRcIj7nrYnlvoXmjqXlkKwuLi48L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInctYnV0dG9uIGFuc3dlclwiIEBjbGljaz1cImFuc3dlckNhbGxpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5o6l5ZCsPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ3LWJ1dHRvbiByZWZ1c2VcIiBAY2xpY2s9XCJyZWZ1c2VDYWxsaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ3LWItdGV4dFwiPuaLkue7nTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8dmlldyB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cIndhdGluZy10aXBzXCIgOnN0eWxlPVwiYGxlZnQ6JHt3YXRpbmdXaWR0aC8yfXB4O2BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5q2j5Zyo5ZG85Y+rLi4uPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ3LWJ1dHRvbiB3YXRpbmctYW5zd2VyXCIgOnN0eWxlPVwiYGxlZnQ6JHt3YXRpbmdXaWR0aC8yfXB4O2BcIiBAY2xpY2s9XCJodW5ndXBDYWxsaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ3LWItdGV4dFwiPuaMguaWrTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8v5o+S5Lu25a+56LGhXHJcblxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVycyxcclxuICAgIG1hcEFjdGlvbnNcclxufSBmcm9tICd2dWV4J1xyXG5cclxuaW1wb3J0IHtTREtfQVBQX0lEfSBmcm9tICcuLi8uLi9jb21tb24vY29uZmlnLmpzJ1xyXG5cclxudmFyIHNka3d4ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1RYVFJUQy1TZGtXWCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyDnrYnlvoXnlYzpnaJcclxuICAgICAgICAgICAgd2F0aW5nSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICB3YXRpbmdXaWR0aDogMCxcclxuXHJcbiAgICAgICAgICAgIC8vIOmTg+WjsOeUqFxyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dDoge30sXHJcblxyXG4gICAgICAgICAgICAvLyDpgJror53kuK3mjqfliLZcclxuICAgICAgICAgICAgaGFzTXV0ZUF1ZGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzTXV0ZVZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzTXV0ZUNhbGxpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgY2FtZXJhVHlwZVN0YXR1czogdHJ1ZSwgLy8gdHJ1ZeWJjee9riBmYWxzZeWQjue9rlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIFJFTU9URV9DQUxMX1NUQVRFKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3RlQW5zd2VyKClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW90ZVJlZnVzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdGVIdW5ndXAoKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRXYXRpbmdBdWRpbygpXHJcbiAgICAgICAgdW5pLmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0aW5nV2lkdGggPSBlLndpbmRvd1dpZHRoXHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGluZ0hlaWdodCA9IGUud2luZG93SGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL+ajgOafpeadg+mZkFxyXG4gICAgICAgIHRoaXMucmVQZXJtaXNzaW9uKClcclxuXHJcbiAgICAgICAgLy/orr7nva7kuovku7blm57osINcclxuICAgICAgICBzZGt3eC5zZXRMaXN0ZW5lcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMudHlwZSA9PSBcIm9uRW50ZXJSb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+b5YWl5oi/6Ze05Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+b5YWl5oi/6Ze0JylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMudHlwZSA9PSBcIm9uRXhpdFJvb21cIikge1xyXG4gICAgICAgICAgICAgICAgLy/nprvlvIDmiL/pl7Tlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnprvlvIDmiL/pl7QnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09IFwib25Vc2VyVmlkZW9BdmFpbGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgLy/ov5znq6/nlKjmiLfop4bpopHlj6/nlKjlm57osINcclxuICAgICAgICAgICAgICAgIHRoaXMub25Vc2VyVmlkZW9BdmFpbGFibGUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkJhY2tQcmVzcyhvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJvbSA9PT0gJ25hdmlnYXRlQmFjaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5bCG57uT5p2f6YCa6K+d77yM5piv5ZCm56Gu5a6a77yfJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odW5ndXBDYWxsaW5nKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLlVQREFURV9DQUxMX1NUQVRFKDApXHJcbiAgICAgICAgdGhpcy5VUERBVEVfUkVNT1RFX0NBTExfU1RBVEUoMClcclxuICAgICAgICB0aGlzLlVQREFURV9DVVJSRU5UX0NBTEwoe30pXHJcbiAgICAgICAgdGhpcy5zdG9wV2F0aW5nQXVkaW8oKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzdGFydFdhdGluZ0F1ZGlvKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbm5lckF1ZGlvQ29udGV4dCA9IHVuaS5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0Lmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnaHR0cDovL2xvY2FsaG9zdC9zdGF0aWMvdGVsZXBob25lLndhdic7XHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dCA9IGlubmVyQXVkaW9Db250ZXh0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wV2F0aW5nQXVkaW8oKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbm5lckF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQgJiYgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0ICYmIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnI6JywgZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ov5znq6/mjqXlkKxcclxuICAgICAgICByZW1vdGVBbnN3ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVVBEQVRFX0NBTExfU1RBVEUoNCkgLy8g6K6+572u5Li66YCa6K+d5LitXHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJSb29tKClcclxuICAgICAgICAgICAgdGhpcy5zdG9wV2F0aW5nQXVkaW8oKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ov5znq6/mi5Lnu51cclxuICAgICAgICByZW1vdGVSZWZ1c2UoKSB7XHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3BXYXRpbmdBdWRpbygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+i/nOerr+aMguaWrVxyXG4gICAgICAgIHJlbW90ZUh1bmd1cCgpIHtcclxuICAgICAgICAgICAgdGhpcy5leGl0Um9vbSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+acrOWcsOaOpeWQrFxyXG4gICAgICAgIGFuc3dlckNhbGxpbmcoKSB7XHJcbiAgICAgICAgICAgIC8vIOaOpeWQrOeUteivnVxyXG4gICAgICAgICAgICB0aGlzLlVQREFURV9DQUxMX1NUQVRFKDIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5bqU562U5ZCO6K6+572u5pys5Zyw5Li66YCa6K+d5LitXHJcbiAgICAgICAgICAgICAgICB0aGlzLlVQREFURV9DQUxMX1NUQVRFKDQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJSb29tKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFdhdGluZ0F1ZGlvKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5pys5Zyw5ouS57udXHJcbiAgICAgICAgcmVmdXNlQ2FsbGluZygpIHtcclxuICAgICAgICAgICAgdGhpcy5VUERBVEVfQ0FMTF9TVEFURSgzKVxyXG4gICAgICAgICAgICB1bmkubmF2aWdhdGVCYWNrKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5pys5Zyw5oyC5patXHJcbiAgICAgICAgaHVuZ3VwQ2FsbGluZygpIHtcclxuICAgICAgICAgICAgdGhpcy5VUERBVEVfQ0FMTF9TVEFURSg1KVxyXG4gICAgICAgICAgICB0aGlzLmV4aXRSb29tKClcclxuICAgICAgICAgICAgdGhpcy5zdG9wV2F0aW5nQXVkaW8oKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVQZXJtaXNzaW9uKCkge1xyXG4gICAgICAgICAgICBzZGt3eC5jaGVja1Blcm1pc3Npb24oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVXNlclZpZGVvQXZhaWxhYmxlKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJJZCA9IGRhdGEudXNlcklkO1xyXG4gICAgICAgICAgICB2YXIgYXZhaWxhYmxlID0gZGF0YS5hdmFpbGFibGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVtb3RlVmlkZW9WaWV3ID0gdGhpcy4kcmVmcy5yZW1vdGVWaWRlb1ZpZXc7XHJcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGUgJiYgcmVtb3RlVmlkZW9WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVWaWRlb1ZpZXcuc3RhcnRSZW1vdGVWaWV3KHVzZXJJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVWaWRlb1ZpZXcuc3RvcFJlbW90ZVZpZXcodXNlcklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXV0ZUNhbGxpbmcoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTXV0ZUNhbGxpbmcgPSAhdGhpcy5oYXNNdXRlQ2FsbGluZ1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tdXRlTG9jYWxBdWRpbygpXHJcbiAgICAgICAgICAgIHRoaXMubXV0ZUxvY2FsVmlkZW8oKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXV0ZUxvY2FsVmlkZW8oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTXV0ZVZpZGVvID0gIXRoaXMuaGFzTXV0ZVZpZGVvXHJcbiAgICAgICAgICAgIHNka3d4Lm11dGVMb2NhbFZpZGVvKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc011dGVWaWRlbykge1xyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vop4bpopFcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvVmlldyA9IHRoaXMuJHJlZnMudmlkZW9WaWV3O1xyXG4gICAgICAgICAgICAgICAgdmlkZW9WaWV3ICYmIHZpZGVvVmlldy5zdGFydExvY2FsUHJldmlldyh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5byA5aeL6KeG6aKRXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgICAgIHZpZGVvVmlldyAmJiB2aWRlb1ZpZXcuc3RvcExvY2FsUHJldmlldyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXV0ZUxvY2FsQXVkaW8oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTXV0ZUF1ZGlvID0gIXRoaXMuaGFzTXV0ZUF1ZGlvXHJcbiAgICAgICAgICAgIHNka3d4Lm11dGVMb2NhbEF1ZGlvKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc011dGVBdWRpbykge1xyXG4gICAgICAgICAgICAgICAgc2Rrd3guc3RhcnRMb2NhbEF1ZGlvKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNka3d4LnN0b3BMb2NhbEF1ZGlvKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW50ZXJSb29tKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gMDsgLy/op4bpopHpgJror50gPSAwO+inhumikeS6kuWKqOebtOaSrSA9IDE76K+t6Z+z6YCa6K+dID0gMjvor63pn7PkupLliqjnm7Tmkq0gPSAzO1xyXG4gICAgICAgICAgICAgICAgc2Rrd3guZW50ZXJSb29tKHtcclxuICAgICAgICAgICAgICAgICAgICBzZGtBcHBJZDogU0RLX0FQUF9JRCxcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6IHRoaXMuY3VycmVudENhbGwucm9vbUlkLCAvLyDkuLvlj6tJROS9nOS4unJvb21JZO+8jOWPquiDveS4uuaVsOWtl+aIluiAheWPr+i9rOWMluS4uuaVsOWtl1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IDIwLCAvLzIw5Li75pKtIDIxIOinguS8l1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclNpZzogdGhpcy51c2VyU2lnXHJcbiAgICAgICAgICAgICAgICB9LCBzY2VuZSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRWaWRlbygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRWaWRlbygpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAvL+iuvue9ruinkuiJsuS4u+aSrVxyXG4gICAgICAgICAgICAgICAgLy8gc2Rrd3guc3dpdGNoUm9sZSgyMCk7IC8vMjDkuLvmkq0gMjEg6KeC5LyXXHJcblxyXG4gICAgICAgICAgICAgICAgLy/lvIDlkK/pn7PpopFcclxuICAgICAgICAgICAgICAgIHNka3d4LnN0YXJ0TG9jYWxBdWRpbygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5byA5aeL6KeG6aKRXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgICAgIHZpZGVvVmlldy5zdGFydExvY2FsUHJldmlldyh0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZUNhbWVyYSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFUeXBlU3RhdHVzID0gIXRoaXMuY2FtZXJhVHlwZVN0YXR1c1xyXG4gICAgICAgICAgICBjb25zdCB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgdmlkZW9WaWV3LnN0b3BMb2NhbFByZXZpZXcoKTtcclxuICAgICAgICAgICAgdmlkZW9WaWV3LnN0YXJ0TG9jYWxQcmV2aWV3KHRoaXMuY2FtZXJhVHlwZVN0YXR1cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wTG9jYWxQcmV2aWV3KCkge1xyXG4gICAgICAgICAgICAvL+WBnOatoumfs+mikVxyXG4gICAgICAgICAgICBzZGt3eC5zdG9wTG9jYWxBdWRpbygpO1xyXG5cclxuICAgICAgICAgICAgLy/lgZzmraLop4bpopFcclxuICAgICAgICAgICAgY29uc3QgdmlkZW9WaWV3ID0gdGhpcy4kcmVmcy52aWRlb1ZpZXc7XHJcbiAgICAgICAgICAgIHZpZGVvVmlldy5zdG9wTG9jYWxQcmV2aWV3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wVmlkZW8oKSB7XHJcbiAgICAgICAgICAgIC8vIC8v6K6+572u6KeS6Imy6KeC5LyXXHJcbiAgICAgICAgICAgIC8vIHNka3d4LnN3aXRjaFJvbGUoMjApOyAvLzIw5Li75pKtIDIxIOinguS8l1xyXG5cclxuICAgICAgICAgICAgLy/lgZzmraLpn7PpopFcclxuICAgICAgICAgICAgc2Rrd3guc3RvcExvY2FsQXVkaW8oKTtcclxuXHJcbiAgICAgICAgICAgIC8v5YGc5q2i6KeG6aKRXHJcbiAgICAgICAgICAgIHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgdmlkZW9WaWV3ICYmIHZpZGVvVmlldy5zdG9wTG9jYWxQcmV2aWV3KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGl0Um9vbSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKVxyXG4gICAgICAgICAgICAvL+mAgOWHuuaIv+mXtFxyXG4gICAgICAgICAgICBzZGt3eC5leGl0Um9vbSgpXHJcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4ubWFwQWN0aW9ucyhbJ1VQREFURV9DQUxMX1NUQVRFJywgJ1VQREFURV9SRU1PVEVfQ0FMTF9TVEFURScsICdVUERBVEVfQ1VSUkVOVF9DQUxMJ10pXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFsndXNlckluZm8nLCAnQ0FMTF9TVEFURScsICdSRU1PVEVfQ0FMTF9TVEFURScsICd1c2VyU2lnJywgJ3VzZXJJRCcsICdjdXJyZW50Q2FsbCddKVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi52aWRlby12aWV3IHtcclxufVxyXG5cclxuLnJlbW90ZS12aWV3IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZmxleDogODtcclxuXHJcbn1cclxuXHJcbi5ib3R0b20tb3V0ZXIge1xyXG4gICAgZmxleDogMjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5sb2NhbC12aWV3IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGZsZXg6IDM7XHJcbiAgICAvL21pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5oYW5kbGUtb3V0ZXIge1xyXG4gICAgZmxleDogNztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhhbmRsZS1idXR0b25zIHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxlIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAxcHggcmdiYSgxMTIsIDIxNiwgMjAxLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExNGRlZywgIzcwZDhjOSAwJSwgJGJhc2UtY29sb3IgNzQlKTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5idXR0b24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuLndhdGluZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnctYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODA1MDU7XHJcbn1cclxuXHJcbi5hbnN3ZXIge1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlDNjI4O1xyXG59XHJcblxyXG4ucmVmdXNlIHtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgwNTA1O1xyXG59XHJcblxyXG4ud2F0aW5nLWFuc3dlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi53YXRpbmctdGlwcyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDQwMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4udy1iLXRleHQge1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
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
/* 13 */
/*!*****************************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./telephone.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 14);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_telephone_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingUser/pages/doctor/telephone.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingTop": "8",
    "paddingRight": "10",
    "paddingBottom": "8",
    "paddingLeft": "10",
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
    "flex": 1
  },
  "button-style": {
    "flex": 2,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#5eb6aa",
    "boxShadow": "0px 0px 19px 1px rgba(112, 216, 201, 0.1)",
    "backgroundImage": "linear-gradient(114deg, #70d8c9 0%, #5eb6aa 74%)"
  },
  "button-text": {
    "fontSize": "14",
    "color": "#666666"
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
    "borderColor": "rgba(255,255,255,0.5)",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderRadius": "4",
    "justifyContent": "center",
    "alignItems": "center",
    "boxShadow": "0px 0px 19px 1px rgba(255, 255, 255, 0.4)",
    "backgroundColor": "#E80505"
  },
  "answer": {
    "right": "50",
    "backgroundColor": "#49C628"
  },
  "refuse": {
    "left": "50",
    "backgroundColor": "#E80505"
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
    "color": "#eeeeee",
    "fontSize": "14"
  }
}

/***/ }),
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


/***/ })
/******/ ]);