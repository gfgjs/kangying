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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!**********************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/main.js?{"type":"appStyle"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/App.vue?vue&type=style&index=0&lang=scss ***!
  \***********************************************************************************/
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
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingDoctor/App.vue?vue&type=style&index=0&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

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
/*!**********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/common/https.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.request_searchHot = exports.request_medInfo = exports.request_medList = exports.request_medCates = exports.request_medHeaderData = exports.request_balance = exports.request_expressList = exports.request_sendMedicineOrder = exports.request_getOverOrder = exports.request_getWaitSendOrder = exports.request_checkOrder = exports.request_checkOrders = exports.request_pexamOrders = exports.request_recordInfo = exports.request_recordNotice = exports.request_recordUp = exports.request_recordList = exports.request_patientData = exports.request_changeWorkStatus = exports.request_doctorInfo = exports.request_doctorList = exports.request_cates = exports.request_patientCardAdd = exports.request_patientList = exports.request_articleDetail = exports.request_articleList = exports.request_delAddress = exports.request_editAddress = exports.request_addAddress = exports.request_getAreaList = exports.request_getUserSig = exports.request_getAddressList = exports.request_upUserInfo = exports.request_userInfo = exports.request_login = exports.request_codeLogin = exports.request_register = exports.request_sendLoginSms = exports.request_sendReSms = exports.request_imInit = exports.uploadImg = exports.request_uploadImg = exports.request_version = exports.request_clearToken = exports.request = exports.test = void 0;var _config = __webpack_require__(/*! ./config.js */ 13);\n\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar test = function test() {\n  // console.log(fetch)\n};exports.test = test;\n\nvar __token = '';\n\nvar request = function request() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var api = arguments.length > 1 ? arguments[1] : undefined;var method = arguments.length > 2 ? arguments[2] : undefined;var contentType = arguments.length > 3 ? arguments[3] : undefined;\n  method = method || 'POST';\n  contentType = contentType || 'application/x-www-form-urlencoded';\n\n  var uni = e.uni;\n\n  if (!__token) {\n    __token = uni.getStorageSync('LOGIN_MESSAGE').token;\n  }\n\n  if (e.token) {\n    __token = e.token;\n  }\n\n  if (!e.noLoading) {\n    uni.showLoading();\n  }\n  return uni.request({\n    method: method,\n    url: _config.HOST + api,\n    data: e.data || {},\n    header: {\n      'Authorization': __token,\n      'Content-Type': contentType //自定义请求头信息\n    } }).\n  then(function (res) {\n    uni.hideLoading();\n    res = res[1].data;\n    return res;\n  }).then(function (res) {\n    // 遇到错误码，重新登录\n    // 可以使用getApp()和uni\n    return res;\n  }).catch(function (e) {\n    __f__(\"log\", '---api---:', _config.HOST + api, ';', '---err---:', e, \" at common/https.js:45\");\n    return e;\n  });\n};\n\n// 清除token\nexports.request = request;var request_clearToken = function request_clearToken() {\n  __token = '';\n};\n// 获取最新版本\nexports.request_clearToken = request_clearToken;var request_version = function request_version(e) {\n  return request(e, '/v1/p/version');\n};\n// 上传图片\nexports.request_version = request_version;\nvar request_uploadImg = function request_uploadImg(e) {\n  return new Promise(function (resolve, reject) {\n    e.uni.chooseImage({\n      success: function success(chooseImageRes) {\n        var tempFilePaths = chooseImageRes.tempFilePaths;\n        e.uni.uploadFile({\n          url: _config.HOST + '/v1/p/upload_img', //仅为示例，非真实的接口地址\n          filePath: tempFilePaths[0],\n          name: 'img',\n          formData: {\n            'user': 'kangying' },\n\n          success: function success(uploadFileRes) {\n            resolve(JSON.parse(uploadFileRes.data));\n          },\n          fail: function fail(err) {\n            reject(err);\n          } });\n\n      } });\n\n  });\n};\n\n//通用上传图片\nexports.request_uploadImg = request_uploadImg;\nvar uploadImg = function uploadImg(e) {\n  return new Promise(function (resolve, reject) {\n    e.uni.uploadFile({\n      url: _config.HOST + '/v1/p/upload_img', //仅为示例，非真实的接口地址\n      filePath: e.filePath,\n      name: 'img',\n      formData: {\n        'user': 'kangying' },\n\n      success: function success(uploadFileRes) {\n        resolve(JSON.parse(uploadFileRes.data));\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};\n\n// 即时通讯im\nexports.uploadImg = uploadImg;var request_imInit = function request_imInit(e) {\n  return request(e, '/v1/p/im/init');\n};\n// 登录相关\nexports.request_imInit = request_imInit;var request_sendReSms = function request_sendReSms(e) {\n  return request(e, '/v1/p/user/sendReSms');\n};exports.request_sendReSms = request_sendReSms;\nvar request_sendLoginSms = function request_sendLoginSms(e) {\n  return request(e, '/v1/p/user/sendLoginSms');\n};exports.request_sendLoginSms = request_sendLoginSms;\nvar request_register = function request_register(e) {\n  return request(e, '/v1/p/doctor/register');\n};exports.request_register = request_register;\n\nvar request_codeLogin = function request_codeLogin(e) {\n  return request(e, '/v1/p/user/codeLogin');\n};exports.request_codeLogin = request_codeLogin;\nvar request_login = function request_login(e) {\n  return request(e, '/v1/p/doctor/login');\n};exports.request_login = request_login;\nvar request_userInfo = function request_userInfo(e) {\n  return request(e, '/v1/d/doctor/info');\n};exports.request_userInfo = request_userInfo;\nvar request_upUserInfo = function request_upUserInfo(e) {\n  return request(e, '/v1/u/user/up');\n};\n// 用户相关\nexports.request_upUserInfo = request_upUserInfo;var request_getAddressList = function request_getAddressList(e) {\n  return request(e, '/v1/u/address/list', 'GET');\n};exports.request_getAddressList = request_getAddressList;\nvar request_getUserSig = function request_getUserSig(e) {\n  return request(e, '/v1/p/im/getUserSig', 'GET');\n};\n// 地址相关 获取区域列表\nexports.request_getUserSig = request_getUserSig;var request_getAreaList = function request_getAreaList(e) {\n  return request(e, '/v1/p/area/list', 'GET');\n};exports.request_getAreaList = request_getAreaList;\nvar request_addAddress = function request_addAddress(e) {\n  return request(e, '/v1/u/address/add');\n};exports.request_addAddress = request_addAddress;\nvar request_editAddress = function request_editAddress(e) {\n  return request(e, '/v1/u/address/edit');\n};exports.request_editAddress = request_editAddress;\nvar request_delAddress = function request_delAddress(e) {\n  return request(e, '/v1/u/address/del');\n};\n\n\n\n// 文章\nexports.request_delAddress = request_delAddress;var request_articleList = function request_articleList(e) {\n  return request(e, '/v1/p/article/list', 'GET');\n};exports.request_articleList = request_articleList;\nvar request_articleDetail = function request_articleDetail(e) {\n  return request(e, '/v1/p/article/detail', 'GET');\n};\n// 我的就诊卡列表\nexports.request_articleDetail = request_articleDetail;var request_patientList = function request_patientList(e) {\n  return request(e, '/v1/u/patient_card/list', 'GET');\n};\n// 新建就诊卡\nexports.request_patientList = request_patientList;var request_patientCardAdd = function request_patientCardAdd(e) {\n  return request(e, '/v1/u/patient_card/add', 'POST');\n};\n\n// 科室列表\nexports.request_patientCardAdd = request_patientCardAdd;var request_cates = function request_cates(e) {\n  return request(e, '/v1/p/doctor/cates', 'GET');\n};\n// 医生列表\nexports.request_cates = request_cates;var request_doctorList = function request_doctorList(e) {\n  return request(e, '/v1/p/doctor/list', 'GET');\n};\n// 医生详情\nexports.request_doctorList = request_doctorList;var request_doctorInfo = function request_doctorInfo(e) {\n  return request(e, '/v1/p/doctor/info', 'GET');\n};\n\n// 医生首页 \n// 设置就诊状态\nexports.request_doctorInfo = request_doctorInfo;var request_changeWorkStatus = function request_changeWorkStatus(e) {\n  return request(e, '/v1/d/doctor/changeWorkStatus');\n};\n// 获取首页数量\nexports.request_changeWorkStatus = request_changeWorkStatus;var request_patientData = function request_patientData(e) {\n  return request(e, '/v1/d/patientData', 'GET');\n};\n\n// 医生获取病例\nexports.request_patientData = request_patientData;\nvar request_recordList = function request_recordList(e) {\n  return request(e, '/v1/d/recordList', 'GET');\n};\n// 医生修改病例\nexports.request_recordList = request_recordList;var request_recordUp = function request_recordUp(e) {\n  return request(e, '/v1/d/record/up', 'POST', 'application/json');\n};\n// 医生更新病例状态\nexports.request_recordUp = request_recordUp;var request_recordNotice = function request_recordNotice(e) {\n  return request(e, '/v1/d/record/notice', 'POST');\n};\n// 医生获取病例信息\nexports.request_recordNotice = request_recordNotice;var request_recordInfo = function request_recordInfo(e) {\n  return request(e, '/v1/d/record/info', 'GET');\n};\n\n// 医生获取体检订单列表\nexports.request_recordInfo = request_recordInfo;var request_pexamOrders = function request_pexamOrders(e) {\n  return request(e, '/v1/d/pexamOrders', 'GET');\n};\n// 医生获取药方订单列表\nexports.request_pexamOrders = request_pexamOrders;var request_checkOrders = function request_checkOrders(e) {\n  return request(e, '/v1/d/checkOrders', 'GET');\n};\n// 医生审核药方订单\nexports.request_checkOrders = request_checkOrders;var request_checkOrder = function request_checkOrder(e) {\n  return request(e, '/v1/d/checkOrder', 'POST');\n};\n// 医生审核待发货订单\nexports.request_checkOrder = request_checkOrder;var request_getWaitSendOrder = function request_getWaitSendOrder(e) {\n  return request(e, '/v1/d/getWaitSendOrder', 'GET');\n};\n// 医生审核已发货订单\nexports.request_getWaitSendOrder = request_getWaitSendOrder;var request_getOverOrder = function request_getOverOrder(e) {\n  return request(e, '/v1/d/getOverOrder', 'GET');\n};\n// 医生发货\nexports.request_getOverOrder = request_getOverOrder;var request_sendMedicineOrder = function request_sendMedicineOrder(e) {\n  return request(e, '/v1/d/sendMedicineOrder', 'POST');\n};\n// 获取物流公司列表\nexports.request_sendMedicineOrder = request_sendMedicineOrder;var request_expressList = function request_expressList(e) {\n  return request(e, '/v1/p/express/list', 'GET');\n};\n// 结算收入\nexports.request_expressList = request_expressList;var request_balance = function request_balance(e) {\n  return request(e, '/v1/d/doctor/balance', 'GET');\n};\n\n\n// 药品相关\n// 购药首页搜索关键词\nexports.request_balance = request_balance;var request_medHeaderData = function request_medHeaderData(e) {\n  return request(e, '/v1/p/medicine/headerData', 'GET');\n};exports.request_medHeaderData = request_medHeaderData;\nvar request_medCates = function request_medCates(e) {\n  return request(e, '/v1/p/medicine/cate', 'GET');\n};exports.request_medCates = request_medCates;\nvar request_medList = function request_medList(e) {\n  return request(e, '/v1/p/medicine/list', 'GET');\n};exports.request_medList = request_medList;\nvar request_medInfo = function request_medInfo(e) {\n  return request(e, '/v1/p/medicine/info', 'GET');\n};exports.request_medInfo = request_medInfo;\nvar request_searchHot = function request_searchHot(e) {\n  return request(e, '/v1/p/search/hot', 'GET');\n};exports.request_searchHot = request_searchHot;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2h0dHBzLmpzIl0sIm5hbWVzIjpbInRlc3QiLCJfX3Rva2VuIiwicmVxdWVzdCIsImUiLCJhcGkiLCJtZXRob2QiLCJjb250ZW50VHlwZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW4iLCJub0xvYWRpbmciLCJzaG93TG9hZGluZyIsInVybCIsIkhPU1QiLCJkYXRhIiwiaGVhZGVyIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwiY2F0Y2giLCJyZXF1ZXN0X2NsZWFyVG9rZW4iLCJyZXF1ZXN0X3ZlcnNpb24iLCJyZXF1ZXN0X3VwbG9hZEltZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2hvb3NlSW1hZ2UiLCJzdWNjZXNzIiwiY2hvb3NlSW1hZ2VSZXMiLCJ0ZW1wRmlsZVBhdGhzIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwidXBsb2FkRmlsZVJlcyIsIkpTT04iLCJwYXJzZSIsImZhaWwiLCJlcnIiLCJ1cGxvYWRJbWciLCJyZXF1ZXN0X2ltSW5pdCIsInJlcXVlc3Rfc2VuZFJlU21zIiwicmVxdWVzdF9zZW5kTG9naW5TbXMiLCJyZXF1ZXN0X3JlZ2lzdGVyIiwicmVxdWVzdF9jb2RlTG9naW4iLCJyZXF1ZXN0X2xvZ2luIiwicmVxdWVzdF91c2VySW5mbyIsInJlcXVlc3RfdXBVc2VySW5mbyIsInJlcXVlc3RfZ2V0QWRkcmVzc0xpc3QiLCJyZXF1ZXN0X2dldFVzZXJTaWciLCJyZXF1ZXN0X2dldEFyZWFMaXN0IiwicmVxdWVzdF9hZGRBZGRyZXNzIiwicmVxdWVzdF9lZGl0QWRkcmVzcyIsInJlcXVlc3RfZGVsQWRkcmVzcyIsInJlcXVlc3RfYXJ0aWNsZUxpc3QiLCJyZXF1ZXN0X2FydGljbGVEZXRhaWwiLCJyZXF1ZXN0X3BhdGllbnRMaXN0IiwicmVxdWVzdF9wYXRpZW50Q2FyZEFkZCIsInJlcXVlc3RfY2F0ZXMiLCJyZXF1ZXN0X2RvY3Rvckxpc3QiLCJyZXF1ZXN0X2RvY3RvckluZm8iLCJyZXF1ZXN0X2NoYW5nZVdvcmtTdGF0dXMiLCJyZXF1ZXN0X3BhdGllbnREYXRhIiwicmVxdWVzdF9yZWNvcmRMaXN0IiwicmVxdWVzdF9yZWNvcmRVcCIsInJlcXVlc3RfcmVjb3JkTm90aWNlIiwicmVxdWVzdF9yZWNvcmRJbmZvIiwicmVxdWVzdF9wZXhhbU9yZGVycyIsInJlcXVlc3RfY2hlY2tPcmRlcnMiLCJyZXF1ZXN0X2NoZWNrT3JkZXIiLCJyZXF1ZXN0X2dldFdhaXRTZW5kT3JkZXIiLCJyZXF1ZXN0X2dldE92ZXJPcmRlciIsInJlcXVlc3Rfc2VuZE1lZGljaW5lT3JkZXIiLCJyZXF1ZXN0X2V4cHJlc3NMaXN0IiwicmVxdWVzdF9iYWxhbmNlIiwicmVxdWVzdF9tZWRIZWFkZXJEYXRhIiwicmVxdWVzdF9tZWRDYXRlcyIsInJlcXVlc3RfbWVkTGlzdCIsInJlcXVlc3RfbWVkSW5mbyIsInJlcXVlc3Rfc2VhcmNoSG90Il0sIm1hcHBpbmdzIjoiKzRDQUFBOzs7QUFHQSxzRjtBQUNPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDekI7QUFDQSxDQUZNLEM7O0FBSVAsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBc0MsS0FBckNDLENBQXFDLHVFQUFqQyxFQUFpQyxLQUE3QkMsR0FBNkIsdURBQXhCQyxNQUF3Qix1REFBaEJDLFdBQWdCO0FBQzVERCxRQUFNLEdBQUdBLE1BQU0sSUFBSSxNQUFuQjtBQUNBQyxhQUFXLEdBQUdBLFdBQVcsSUFBSSxtQ0FBN0I7O0FBRUEsTUFBSUMsR0FBRyxHQUFHSixDQUFDLENBQUNJLEdBQVo7O0FBRUEsTUFBSSxDQUFDTixPQUFMLEVBQWM7QUFDYkEsV0FBTyxHQUFHTSxHQUFHLENBQUNDLGNBQUosQ0FBbUIsZUFBbkIsRUFBb0NDLEtBQTlDO0FBQ0E7O0FBRUQsTUFBSU4sQ0FBQyxDQUFDTSxLQUFOLEVBQWE7QUFDWlIsV0FBTyxH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QXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBeEUsQ0FBQyxFQUFJO0FBQ3pDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLDJCQUFKLEVBQWlDLEtBQWpDLENBQWQ7QUFDQSxDQUZNLEM7QUFHQSxJQUFNeUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBekUsQ0FBQyxFQUFJO0FBQ3BDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLHFCQUFKLEVBQTJCLEtBQTNCLENBQWQ7QUFDQSxDQUZNLEM7QUFHQSxJQUFNMEUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBMUUsQ0FBQyxFQUFJO0FBQ25DLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLHFCQUFKLEVBQTJCLEtBQTNCLENBQWQ7QUFDQSxDQUZNLEM7QUFHQSxJQUFNMkUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBM0UsQ0FBQyxFQUFJO0FBQ25DLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLHFCQUFKLEVBQTJCLEtBQTNCLENBQWQ7QUFDQSxDQUZNLEM7QUFHQSxJQUFNNEUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBNUUsQ0FBQyxFQUFJO0FBQ3JDLFNBQU9ELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJLGtCQUFKLEVBQXdCLEtBQXhCLENBQWQ7QUFDQSxDQUZNLEMiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEhPU1RcclxufSBmcm9tICcuL2NvbmZpZy5qcydcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4LmpzJ1xyXG5leHBvcnQgY29uc3QgdGVzdCA9ICgpID0+IHtcclxuXHQvLyBjb25zb2xlLmxvZyhmZXRjaClcclxufVxyXG5cclxubGV0IF9fdG9rZW4gPSAnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoZSA9IHt9LCBhcGksIG1ldGhvZCAsY29udGVudFR5cGUpID0+IHtcclxuXHRtZXRob2QgPSBtZXRob2QgfHwgJ1BPU1QnXHJcblx0Y29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFxyXG5cdGxldCB1bmkgPSBlLnVuaVxyXG5cdFxyXG5cdGlmICghX190b2tlbikge1xyXG5cdFx0X190b2tlbiA9IHVuaS5nZXRTdG9yYWdlU3luYygnTE9HSU5fTUVTU0FHRScpLnRva2VuXHJcblx0fVxyXG5cdFxyXG5cdGlmIChlLnRva2VuKSB7XHJcblx0XHRfX3Rva2VuID0gZS50b2tlblxyXG5cdH1cclxuXHRcclxuXHRpZighZS5ub0xvYWRpbmcpe1xyXG5cdFx0dW5pLnNob3dMb2FkaW5nKClcclxuXHR9XHJcblx0cmV0dXJuIHVuaS5yZXF1ZXN0KHtcclxuXHRcdG1ldGhvZCxcclxuXHRcdHVybDogSE9TVCArIGFwaSxcclxuXHRcdGRhdGE6IGUuZGF0YSB8fCB7fSxcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHQnQXV0aG9yaXphdGlvbic6IF9fdG9rZW4sXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSAvL+iHquWumuS5ieivt+axguWktOS/oeaBr1xyXG5cdFx0fVxyXG5cdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRyZXMgPSByZXNbMV0uZGF0YVxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdC8vIOmBh+WIsOmUmeivr+egge+8jOmHjeaWsOeZu+W9lVxyXG5cdFx0Ly8g5Y+v5Lul5L2/55SoZ2V0QXBwKCnlkox1bmlcclxuXHRcdHJldHVybiByZXNcclxuXHR9KS5jYXRjaChlPT57XHJcblx0XHRjb25zb2xlLmxvZygnLS0tYXBpLS0tOicsSE9TVCthcGksJzsnLCctLS1lcnItLS06JyxlKTtcclxuXHRcdHJldHVybiBlXHJcblx0fSlcclxufVxyXG5cclxuLy8g5riF6ZmkdG9rZW5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfY2xlYXJUb2tlbiA9ICgpID0+IHtcclxuXHRfX3Rva2VuID0gJydcclxufVxyXG4vLyDojrflj5bmnIDmlrDniYjmnKxcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfdmVyc2lvbiA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC92ZXJzaW9uJylcclxufVxyXG4vLyDkuIrkvKDlm77niYdcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3VwbG9hZEltZyA9IGUgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRlLnVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdHN1Y2Nlc3M6IChjaG9vc2VJbWFnZVJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRlbXBGaWxlUGF0aHMgPSBjaG9vc2VJbWFnZVJlcy50ZW1wRmlsZVBhdGhzO1xyXG5cdFx0XHRcdGUudW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0dXJsOiBIT1NUICsgJy92MS9wL3VwbG9hZF9pbWcnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRuYW1lOiAnaW1nJyxcclxuXHRcdFx0XHRcdGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHRcdCd1c2VyJzogJ2thbmd5aW5nJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6ICh1cGxvYWRGaWxlUmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoSlNPTi5wYXJzZSh1cGxvYWRGaWxlUmVzLmRhdGEpKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbi8v6YCa55So5LiK5Lyg5Zu+54mHXHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkSW1nID0gZSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGUudW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHR1cmw6IEhPU1QgKyAnL3YxL3AvdXBsb2FkX2ltZycsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcblx0XHRcdGZpbGVQYXRoOiBlLmZpbGVQYXRoLFxyXG5cdFx0XHRuYW1lOiAnaW1nJyxcclxuXHRcdFx0Zm9ybURhdGE6IHtcclxuXHRcdFx0XHQndXNlcic6ICdrYW5neWluZydcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogKHVwbG9hZEZpbGVSZXMpID0+IHtcclxuXHRcdFx0XHRyZXNvbHZlKEpTT04ucGFyc2UodXBsb2FkRmlsZVJlcy5kYXRhKSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5cclxuLy8g5Y2z5pe26YCa6K6vaW1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfaW1Jbml0ID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2ltL2luaXQnKVxyXG59XHJcbi8vIOeZu+W9leebuOWFs1xyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9zZW5kUmVTbXMgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvdXNlci9zZW5kUmVTbXMnKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3NlbmRMb2dpblNtcyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC91c2VyL3NlbmRMb2dpblNtcycpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcmVnaXN0ZXIgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvZG9jdG9yL3JlZ2lzdGVyJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfY29kZUxvZ2luID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3VzZXIvY29kZUxvZ2luJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9sb2dpbiA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9kb2N0b3IvbG9naW4nKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3VzZXJJbmZvID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL2RvY3Rvci9pbmZvJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF91cFVzZXJJbmZvID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS91L3VzZXIvdXAnKVxyXG59XHJcbi8vIOeUqOaIt+ebuOWFs1xyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9nZXRBZGRyZXNzTGlzdCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9hZGRyZXNzL2xpc3QnLCAnR0VUJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9nZXRVc2VyU2lnID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL2ltL2dldFVzZXJTaWcnLCdHRVQnKVxyXG59XHJcbi8vIOWcsOWdgOebuOWFsyDojrflj5bljLrln5/liJfooahcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZ2V0QXJlYUxpc3QgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvYXJlYS9saXN0JywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfYWRkQWRkcmVzcyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9hZGRyZXNzL2FkZCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZWRpdEFkZHJlc3MgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3UvYWRkcmVzcy9lZGl0JylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9kZWxBZGRyZXNzID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS91L2FkZHJlc3MvZGVsJylcclxufVxyXG5cclxuXHJcblxyXG4vLyDmlofnq6BcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfYXJ0aWNsZUxpc3QgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvYXJ0aWNsZS9saXN0JywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfYXJ0aWNsZURldGFpbCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9hcnRpY2xlL2RldGFpbCcsICdHRVQnKVxyXG59XHJcbi8vIOaIkeeahOWwseiviuWNoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9wYXRpZW50TGlzdCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9wYXRpZW50X2NhcmQvbGlzdCcsICdHRVQnKVxyXG59XHJcbi8vIOaWsOW7uuWwseiviuWNoVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9wYXRpZW50Q2FyZEFkZCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvdS9wYXRpZW50X2NhcmQvYWRkJywgJ1BPU1QnKVxyXG59XHJcblxyXG4vLyDnp5HlrqTliJfooahcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfY2F0ZXMgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvZG9jdG9yL2NhdGVzJywgJ0dFVCcpXHJcbn1cclxuLy8g5Yy755Sf5YiX6KGoXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2RvY3Rvckxpc3QgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL3AvZG9jdG9yL2xpc3QnLCAnR0VUJylcclxufVxyXG4vLyDljLvnlJ/or6bmg4VcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfZG9jdG9ySW5mbyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9kb2N0b3IvaW5mbycsICdHRVQnKVxyXG59XHJcblxyXG4vLyDljLvnlJ/pppbpobUgXHJcbi8vIOiuvue9ruWwseiviueKtuaAgVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9jaGFuZ2VXb3JrU3RhdHVzID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL2RvY3Rvci9jaGFuZ2VXb3JrU3RhdHVzJylcclxufVxyXG4vLyDojrflj5bpppbpobXmlbDph49cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcGF0aWVudERhdGEgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL2QvcGF0aWVudERhdGEnLCAnR0VUJylcclxufVxyXG5cclxuLy8g5Yy755Sf6I635Y+W55eF5L6LXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9yZWNvcmRMaXN0ID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL3JlY29yZExpc3QnLCAnR0VUJylcclxufVxyXG4vLyDljLvnlJ/kv67mlLnnl4XkvotcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfcmVjb3JkVXAgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL2QvcmVjb3JkL3VwJywgJ1BPU1QnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbn1cclxuLy8g5Yy755Sf5pu05paw55eF5L6L54q25oCBXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3JlY29yZE5vdGljZSA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvZC9yZWNvcmQvbm90aWNlJywgJ1BPU1QnKVxyXG59XHJcbi8vIOWMu+eUn+iOt+WPlueXheS+i+S/oeaBr1xyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9yZWNvcmRJbmZvID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL3JlY29yZC9pbmZvJywgJ0dFVCcpXHJcbn1cclxuXHJcbi8vIOWMu+eUn+iOt+WPluS9k+ajgOiuouWNleWIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9wZXhhbU9yZGVycyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvZC9wZXhhbU9yZGVycycsICdHRVQnKVxyXG59XHJcbi8vIOWMu+eUn+iOt+WPluiNr+aWueiuouWNleWIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9jaGVja09yZGVycyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvZC9jaGVja09yZGVycycsICdHRVQnKVxyXG59XHJcbi8vIOWMu+eUn+WuoeaguOiNr+aWueiuouWNlVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9jaGVja09yZGVyID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL2NoZWNrT3JkZXInLCAnUE9TVCcpXHJcbn1cclxuLy8g5Yy755Sf5a6h5qC45b6F5Y+R6LSn6K6i5Y2VXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X2dldFdhaXRTZW5kT3JkZXIgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL2QvZ2V0V2FpdFNlbmRPcmRlcicsICdHRVQnKVxyXG59XHJcbi8vIOWMu+eUn+WuoeaguOW3suWPkei0p+iuouWNlVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9nZXRPdmVyT3JkZXIgPSBlID0+IHtcclxuXHRyZXR1cm4gcmVxdWVzdChlLCAnL3YxL2QvZ2V0T3Zlck9yZGVyJywgJ0dFVCcpXHJcbn1cclxuLy8g5Yy755Sf5Y+R6LSnXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0X3NlbmRNZWRpY2luZU9yZGVyID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9kL3NlbmRNZWRpY2luZU9yZGVyJywgJ1BPU1QnKVxyXG59XHJcbi8vIOiOt+WPlueJqea1geWFrOWPuOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9leHByZXNzTGlzdCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9leHByZXNzL2xpc3QnLCAnR0VUJylcclxufVxyXG4vLyDnu5PnrpfmlLblhaVcclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfYmFsYW5jZSA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvZC9kb2N0b3IvYmFsYW5jZScsICdHRVQnKVxyXG59XHJcblxyXG5cclxuLy8g6I2v5ZOB55u45YWzXHJcbi8vIOi0reiNr+mmlumhteaQnOe0ouWFs+mUruivjVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9tZWRIZWFkZXJEYXRhID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL21lZGljaW5lL2hlYWRlckRhdGEnLCAnR0VUJylcclxufVxyXG5leHBvcnQgY29uc3QgcmVxdWVzdF9tZWRDYXRlcyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9tZWRpY2luZS9jYXRlJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfbWVkTGlzdCA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9tZWRpY2luZS9saXN0JywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RfbWVkSW5mbyA9IGUgPT4ge1xyXG5cdHJldHVybiByZXF1ZXN0KGUsICcvdjEvcC9tZWRpY2luZS9pbmZvJywgJ0dFVCcpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3Rfc2VhcmNoSG90ID0gZSA9PiB7XHJcblx0cmV0dXJuIHJlcXVlc3QoZSwgJy92MS9wL3NlYXJjaC9ob3QnLCAnR0VUJylcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/common/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.SDK_APP_ID = exports.HOST = void 0; // 后台请求地址\nvar HOST = \"https://app.loopyun.com\";\n// tim及音视频 appId\nexports.HOST = HOST;var SDK_APP_ID = 1400440995;exports.SDK_APP_ID = SDK_APP_ID;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJIT1NUIiwiU0RLX0FQUF9JRCJdLCJtYXBwaW5ncyI6IjBHQUFBO0FBQ08sSUFBTUEsSUFBSSxHQUFHLHlCQUFiO0FBQ1A7b0JBQ08sSUFBTUMsVUFBVSxHQUFHLFVBQW5CLEMiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkI7lj7Dor7fmsYLlnLDlnYBcclxuZXhwb3J0IGNvbnN0IEhPU1QgPSBcImh0dHBzOi8vYXBwLmxvb3B5dW4uY29tXCJcclxuLy8gdGlt5Y+K6Z+z6KeG6aKRIGFwcElkXHJcbmV4cG9ydCBjb25zdCBTREtfQVBQX0lEID0gMTQwMDQ0MDk5NVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/store/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 11));\nvar _timStore = _interopRequireDefault(__webpack_require__(/*! ./modules/timStore */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue.default.use(_vuex.default);\n\nvar store = new _vuex.default.Store({\n  state: {\n    hasLogin: false,\n    userInfo: {} },\n\n  mutations: {\n    LOGIN: function LOGIN(state, e) {\n      state.hasLogin = true;\n      state.userInfo = e;\n    },\n    LOGOUT: function LOGOUT(state, e) {\n      state.hasLogin = false;\n      state.userInfo = {};\n    } },\n\n  actions: {\n    LOGIN: function LOGIN(store, e) {\n      store.commit('LOGIN', e);\n    },\n    LOGOUT: function LOGOUT(store, e) {\n      store.commit('LOGOUT', e);\n    } },\n\n  getters: {\n    hasLogin: function hasLogin(state) {\n      return state.hasLogin;\n    },\n    userInfo: function userInfo(state) {\n      return state.userInfo;\n    } },\n\n  modules: {\n    timStore: _timStore.default } });var _default =\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImhhc0xvZ2luIiwidXNlckluZm8iLCJtdXRhdGlvbnMiLCJMT0dJTiIsImUiLCJMT0dPVVQiLCJhY3Rpb25zIiwiY29tbWl0IiwiZ2V0dGVycyIsIm1vZHVsZXMiLCJ0aW1TdG9yZSJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0E7QUFDQSwwRjs7QUFFQUEsYUFBSUMsR0FBSixDQUFRQyxhQUFSOztBQUVBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxjQUFLRSxLQUFULENBQWU7QUFDekJDLE9BQUssRUFBRTtBQUNIQyxZQUFRLEVBQUUsS0FEUDtBQUVIQyxZQUFRLEVBQUUsRUFGUCxFQURrQjs7QUFLekJDLFdBQVMsRUFBRTtBQUNQQyxTQURPLGlCQUNESixLQURDLEVBQ01LLENBRE4sRUFDUztBQUNaTCxXQUFLLENBQUNDLFFBQU4sR0FBaUIsSUFBakI7QUFDQUQsV0FBSyxDQUFDRSxRQUFOLEdBQWlCRyxDQUFqQjtBQUNILEtBSk07QUFLUEMsVUFMTyxrQkFLQU4sS0FMQSxFQUtPSyxDQUxQLEVBS1U7QUFDYkwsV0FBSyxDQUFDQyxRQUFOLEdBQWlCLEtBQWpCO0FBQ0FELFdBQUssQ0FBQ0UsUUFBTixHQUFpQixFQUFqQjtBQUNILEtBUk0sRUFMYzs7QUFlekJLLFNBQU8sRUFBRTtBQUNMSCxTQURLLGlCQUNDTixLQURELEVBQ1FPLENBRFIsRUFDVztBQUNaUCxXQUFLLENBQUNVLE1BQU4sQ0FBYSxPQUFiLEVBQXNCSCxDQUF0QjtBQUNILEtBSEk7QUFJTEMsVUFKSyxrQkFJRVIsS0FKRixFQUlTTyxDQUpULEVBSVk7QUFDYlAsV0FBSyxDQUFDVSxNQUFOLENBQWEsUUFBYixFQUF1QkgsQ0FBdkI7QUFDSCxLQU5JLEVBZmdCOztBQXVCekJJLFNBQU8sRUFBRTtBQUNMUixZQURLLG9CQUNJRCxLQURKLEVBQ1c7QUFDWixhQUFPQSxLQUFLLENBQUNDLFFBQWI7QUFDSCxLQUhJO0FBSUxDLFlBSkssb0JBSUlGLEtBSkosRUFJVztBQUNaLGFBQU9BLEtBQUssQ0FBQ0UsUUFBYjtBQUNILEtBTkksRUF2QmdCOztBQStCekJRLFNBQU8sRUFBRTtBQUNMQyxZQUFRLEVBQVJBLGlCQURLLEVBL0JnQixFQUFmLENBQWQsQzs7OztBQW9DZWIsSyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5pbXBvcnQgdGltU3RvcmUgZnJvbSAnLi9tb2R1bGVzL3RpbVN0b3JlJ1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIGhhc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICB1c2VySW5mbzoge30sXHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgTE9HSU4oc3RhdGUsIGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuaGFzTG9naW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJJbmZvID0gZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTE9HT1VUKHN0YXRlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmhhc0xvZ2luID0gZmFsc2VcclxuICAgICAgICAgICAgc3RhdGUudXNlckluZm8gPSB7fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgTE9HSU4oc3RvcmUsIGUpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdMT0dJTicsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMT0dPVVQoc3RvcmUsIGUpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdMT0dPVVQnLCBlKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgaGFzTG9naW4oc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmhhc0xvZ2luXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1c2VySW5mbyhzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudXNlckluZm9cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICAgIHRpbVN0b3JlXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 16 */
/*!********************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/store/modules/timStore.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _tim = _interopRequireDefault(__webpack_require__(/*! ../../common/tim */ 17));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../index */ 14));\nvar _im = _interopRequireDefault(__webpack_require__(/*! ../../common/im */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\nvar timStore = {\n  state: {\n    tim: null,\n    TIM: null,\n    isSDKReady: false,\n    CALL_STATE: 0, // 0-空闲 1-等待中 2-同意 3-拒绝 4-通话中 5-挂断通话 6-超时\n    REMOTE_CALL_STATE: 0, // 远端通话状态 同上\n    currentCall: {\n      targetUserID: '', // 被叫方ID\n      callingID: '', // 主叫方ID\n      type: 'video' // 呼叫类型：video audio\n    },\n\n    currentConversation: {}, // 当前会话\n    currentMessageList: [], // 当前消息列表\n    nextReqMessageID: '',\n    isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息\n    conversationList: [],\n\n    currentUserProfile: {},\n    isLogin: false,\n    userID: 0,\n    userSig: '',\n    sdkAppID: 0 },\n\n  mutations: {\n    CHANGE_SDK_READY: function CHANGE_SDK_READY(state, e) {\n      state.isSDKReady = e;\n    },\n    ADD_TIM: function ADD_TIM(state, e) {\n      state.tim = e.tim;\n      state.TIM = e.TIM;\n    },\n    SAVE_USER_SIG: function SAVE_USER_SIG(state, e) {\n      state.userSig = e;\n    },\n    SAVE_USER_ID: function SAVE_USER_ID(state, e) {\n      state.userID = e;\n    },\n    SAVE_SDK_APP_ID: function SAVE_SDK_APP_ID(state, e) {\n      state.sdkAppID = e;\n    },\n    UPDATE_CALL_STATE: function UPDATE_CALL_STATE(state, e) {\n      _im.default.phone(e);\n\n      state.CALL_STATE = e;\n    },\n    UPDATE_REMOTE_CALL_STATE: function UPDATE_REMOTE_CALL_STATE(state, e) {\n      state.REMOTE_CALL_STATE = e;\n    },\n    UPDATE_CURRENT_CALL: function UPDATE_CURRENT_CALL(state, e) {\n      if (e) {\n        state.currentCall = _objectSpread(_objectSpread({}, state.currentCall), e);\n      } else {\n        state.currentCall = {};\n      }\n    },\n    /**\r\n        * 更新当前会话\r\n        * 调用时机: 切换会话时\r\n        * @param {Object} state\r\n        * @param {Conversation} conversation\r\n        */\n    updateCurrentConversation: function updateCurrentConversation(state, conversation) {\n      __f__(\"log\", state.currentConversation.conversationID, conversation.conversationID, \" at store/modules/timStore.js:69\");\n      // 若是同一会话，则增量更新，解决进入chat页面只有conversationID的问题\n      if (state.currentConversation.conversationID === conversation.conversationID) {\n        state.currentConversation = _objectSpread(_objectSpread({}, state.currentConversation), conversation);\n      } else {\n        state.currentConversation = conversation;\n      }\n      state.currentMessageList = [];\n      state.nextReqMessageID = '';\n      state.isCompleted = false;\n    },\n    /**\r\n        * 更新会话列表\r\n        * 调用时机：触发会话列表更新事件时。CONVERSATION_LIST_UPDATED\r\n        * @param {Object} state\r\n        * @param {Conversation[]} conversationList\r\n        */\n    updateConversationList: function updateConversationList(state, conversationList) {\n      state.conversationList = conversationList;\n    },\n    /**\r\n        * 重置当前会话\r\n        * 调用时机：需要重置当前会话时，例如：当前会话是一个群组，正好被踢出群时（被踢群事件触发），重置当前会话\r\n        * @param {Object} state\r\n        */\n    resetCurrentConversation: function resetCurrentConversation(state) {\n      state.currentConversation = {};\n    },\n    /**\r\n        * 将消息插入当前会话列表\r\n        * 调用时机：收/发消息事件触发时\r\n        * @param {Object} state\r\n        * @param {Message[]|Message} data\r\n        * @returns\r\n        */\n    pushCurrentMessageList: function pushCurrentMessageList(state, data) {\n      // 还没当前会话，则跳过\n      if (!state.currentConversation.conversationID) {\n        return;\n      }\n      if (Array.isArray(data)) {\n        // 筛选出当前会话的消息\n        var result = data.filter(function (item) {return item.conversationID === state.currentConversation.conversationID;});\n        state.currentMessageList = [].concat(_toConsumableArray(state.currentMessageList), _toConsumableArray(result));\n      } else if (data.conversationID === state.currentConversation.conversationID) {\n        state.currentMessageList = [].concat(_toConsumableArray(state.currentMessageList), [data]);\n      }\n    },\n    /**\r\n        * 从当前消息列表中删除某条消息\r\n        * @param {Object} state\r\n        * @param {Message} message\r\n        */\n    removeMessage: function removeMessage(state, message) {\n      var index = state.currentMessageList.findIndex(function (_ref) {var ID = _ref.ID;return ID === message.ID;});\n      if (index >= 0) {\n        state.currentMessageList.splice(index, 1);\n      }\n    },\n    reset: function reset(state) {\n      Object.assign(state, {\n        currentConversation: {},\n        currentMessageList: [],\n        nextReqMessageID: '',\n        isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息\n        conversationList: [] });\n\n    } },\n\n  actions: {\n    ADD_TIM: function ADD_TIM(store, e) {\n      store.commit('ADD_TIM', e);\n    },\n    CHANGE_SDK_READY: function CHANGE_SDK_READY(store, e) {\n      store.commit('CHANGE_SDK_READY', e);\n    },\n    UPDATE_CALL_STATE: function UPDATE_CALL_STATE(store, e) {\n      store.commit('UPDATE_CALL_STATE', e);\n    },\n    UPDATE_REMOTE_CALL_STATE: function UPDATE_REMOTE_CALL_STATE(store, e) {\n      store.commit('UPDATE_REMOTE_CALL_STATE', e);\n    },\n    UPDATE_CURRENT_CALL: function UPDATE_CURRENT_CALL(store, e) {\n      store.commit('UPDATE_CURRENT_CALL', e);\n    },\n    /**\r\n        * 获取消息列表\r\n        * 调用时机：打开某一会话时或下拉获取历史消息时\r\n        * @param {Object} context\r\n        * @param {String} conversationID\r\n        */\n    getMessageList: function getMessageList(context, conversationID) {\n      if (context.state.isCompleted) {\n        uni.showToast({\n          title: '没有更多了',\n          icon: 'none',\n          mask: false,\n          duration: 1000 });\n\n        return;\n      }var _context$state =\n      context.state,nextReqMessageID = _context$state.nextReqMessageID,currentMessageList = _context$state.currentMessageList;\n      _tim.default.getMessageList({ conversationID: conversationID, nextReqMessageID: nextReqMessageID, count: 15 }).then(function (imReponse) {\n        // 更新messageID，续拉时要用到\n        context.state.nextReqMessageID = imReponse.data.nextReqMessageID;\n        context.state.isCompleted = imReponse.data.isCompleted;\n        // 更新当前消息列表，从头部插入\n        context.state.currentMessageList = [].concat(_toConsumableArray(imReponse.data.messageList), _toConsumableArray(currentMessageList));\n      });\n    },\n    /**\r\n        * 切换会话\r\n        * 调用时机：切换会话时\r\n        * @param {Object} context\r\n        * @param {String} conversationID\r\n        */\n    checkoutConversation: function checkoutConversation(context, conversationID) {\n      context.commit('resetCurrentMemberList');\n      // 1.切换会话前，将切换前的会话进行已读上报\n      if (context.state.currentConversation.conversationID) {\n        var prevConversationID = context.state.currentConversation.conversationID;\n        _tim.default.setMessageRead({ conversationID: prevConversationID });\n      }\n      // 2.待切换的会话也进行已读上报\n      _tim.default.setMessageRead({ conversationID: conversationID });\n      // 3. 获取会话信息\n      return _tim.default.getConversationProfile(conversationID).then(function (_ref2) {var data = _ref2.data;\n        // 3.1 更新当前会话\n        context.commit('updateCurrentConversation', data.conversation);\n        // 3.2 获取消息列表\n        context.dispatch('getMessageList', conversationID);\n        // 3.3 拉取第一页群成员列表\n        if (data.conversation.type === TIM.TYPES.CONV_GROUP) {\n          return context.dispatch('getGroupMemberList', data.conversation.groupProfile.groupID);\n        }\n        return Promise.resolve();\n      });\n    } },\n\n\n  getters: {\n    tim: function tim(state) {\n      return state.tim;\n    },\n    TIM: function TIM(state) {\n      return state.TIM;\n    },\n    CALL_STATE: function CALL_STATE(state) {\n      return state.CALL_STATE;\n    },\n    REMOTE_CALL_STATE: function REMOTE_CALL_STATE(state) {\n      return state.REMOTE_CALL_STATE;\n    },\n    currentCall: function currentCall(state) {\n      return state.currentCall;\n    },\n    userID: function userID(state) {\n      return state.userID;\n    },\n    userSig: function userSig(state) {\n      return state.userSig;\n    },\n    sdkAppId: function sdkAppId(state) {\n      return state.sdkAppId;\n    },\n    isSDKReady: function isSDKReady(state) {\n      return state.isSDKReady;\n    },\n    conversationList: function conversationList(state) {\n      return state.conversationList;\n    },\n    currentConversation: function currentConversation(state) {\n      return state.currentConversation;\n    },\n    currentMessageList: function currentMessageList(state) {\n      return state.currentMessageList;\n    },\n    toAccount: function toAccount(state) {\n      if (!state.currentConversation || !state.currentConversation.conversationID) {\n        return '';\n      }\n      switch (state.currentConversation.type) {\n        case 'C2C':\n          return state.currentConversation.conversationID.replace('C2C', '');\n        case 'GROUP':\n          return state.currentConversation.conversationID.replace('GROUP', '');\n        default:\n          return state.currentConversation.conversationID;}\n\n    },\n    currentConversationType: function currentConversationType(state) {\n      if (!state.currentConversation || !state.currentConversation.type) {\n        return '';\n      }\n      return state.currentConversation.type;\n    },\n    totalUnreadCount: function totalUnreadCount(state) {\n      var result = state.conversationList.reduce(function (count, conversation) {\n        // 当前会话不计算总未读\n        if (!_index.default.getters.hidden && state.currentConversation.conversationID === conversation.conversationID) {\n          return count;\n        }\n        return count + conversation.unreadCount;\n      }, 0);\n      // titleNotify(result)\n      return result;\n    },\n    // 用于当前会话的图片预览\n    imgUrlList: function imgUrlList(state) {\n      return state.currentMessageList.\n      filter(function (message) {return message.type === TIM.TYPES.MSG_IMAGE && !message.isRevoked;}) // 筛选出没有撤回并且类型是图片类型的消息\n      .map(function (message) {return message.payload.imageInfoArray[0].url;});\n    } } };var _default =\n\n\n\ntimStore;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy90aW1TdG9yZS5qcyJdLCJuYW1lcyI6WyJ0aW1TdG9yZSIsInN0YXRlIiwidGltIiwiVElNIiwiaXNTREtSZWFkeSIsIkNBTExfU1RBVEUiLCJSRU1PVEVfQ0FMTF9TVEFURSIsImN1cnJlbnRDYWxsIiwidGFyZ2V0VXNlcklEIiwiY2FsbGluZ0lEIiwidHlwZSIsImN1cnJlbnRDb252ZXJzYXRpb24iLCJjdXJyZW50TWVzc2FnZUxpc3QiLCJuZXh0UmVxTWVzc2FnZUlEIiwiaXNDb21wbGV0ZWQiLCJjb252ZXJzYXRpb25MaXN0IiwiY3VycmVudFVzZXJQcm9maWxlIiwiaXNMb2dpbiIsInVzZXJJRCIsInVzZXJTaWciLCJzZGtBcHBJRCIsIm11dGF0aW9ucyIsIkNIQU5HRV9TREtfUkVBRFkiLCJlIiwiQUREX1RJTSIsIlNBVkVfVVNFUl9TSUciLCJTQVZFX1VTRVJfSUQiLCJTQVZFX1NES19BUFBfSUQiLCJVUERBVEVfQ0FMTF9TVEFURSIsIklNIiwicGhvbmUiLCJVUERBVEVfUkVNT1RFX0NBTExfU1RBVEUiLCJVUERBVEVfQ1VSUkVOVF9DQUxMIiwidXBkYXRlQ3VycmVudENvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbklEIiwidXBkYXRlQ29udmVyc2F0aW9uTGlzdCIsInJlc2V0Q3VycmVudENvbnZlcnNhdGlvbiIsInB1c2hDdXJyZW50TWVzc2FnZUxpc3QiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzdWx0IiwiZmlsdGVyIiwiaXRlbSIsInJlbW92ZU1lc3NhZ2UiLCJtZXNzYWdlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJJRCIsInNwbGljZSIsInJlc2V0IiwiT2JqZWN0IiwiYXNzaWduIiwiYWN0aW9ucyIsInN0b3JlIiwiY29tbWl0IiwiZ2V0TWVzc2FnZUxpc3QiLCJjb250ZXh0IiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibWFzayIsImR1cmF0aW9uIiwiY291bnQiLCJ0aGVuIiwiaW1SZXBvbnNlIiwibWVzc2FnZUxpc3QiLCJjaGVja291dENvbnZlcnNhdGlvbiIsInByZXZDb252ZXJzYXRpb25JRCIsInNldE1lc3NhZ2VSZWFkIiwiZ2V0Q29udmVyc2F0aW9uUHJvZmlsZSIsImRpc3BhdGNoIiwiVFlQRVMiLCJDT05WX0dST1VQIiwiZ3JvdXBQcm9maWxlIiwiZ3JvdXBJRCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0dGVycyIsInNka0FwcElkIiwidG9BY2NvdW50IiwicmVwbGFjZSIsImN1cnJlbnRDb252ZXJzYXRpb25UeXBlIiwidG90YWxVbnJlYWRDb3VudCIsInJlZHVjZSIsImhpZGRlbiIsInVucmVhZENvdW50IiwiaW1nVXJsTGlzdCIsIk1TR19JTUFHRSIsImlzUmV2b2tlZCIsIm1hcCIsInBheWxvYWQiLCJpbWFnZUluZm9BcnJheSIsInVybCJdLCJtYXBwaW5ncyI6Im9JQUFBO0FBQ0E7QUFDQSxpRjs7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxJQURGO0FBRUhDLE9BQUcsRUFBRSxJQUZGO0FBR0hDLGNBQVUsRUFBRSxLQUhUO0FBSUhDLGNBQVUsRUFBRSxDQUpULEVBSVk7QUFDZkMscUJBQWlCLEVBQUUsQ0FMaEIsRUFLbUI7QUFDdEJDLGVBQVcsRUFBRTtBQUNUQyxrQkFBWSxFQUFFLEVBREwsRUFDUztBQUNsQkMsZUFBUyxFQUFDLEVBRkQsRUFFSztBQUNkQyxVQUFJLEVBQUMsT0FISSxDQUdLO0FBSEwsS0FOVjs7QUFZSEMsdUJBQW1CLEVBQUUsRUFabEIsRUFZc0I7QUFDekJDLHNCQUFrQixFQUFFLEVBYmpCLEVBYXFCO0FBQ3hCQyxvQkFBZ0IsRUFBRSxFQWRmO0FBZUhDLGVBQVcsRUFBRSxLQWZWLEVBZWlCO0FBQ3BCQyxvQkFBZ0IsRUFBRSxFQWhCZjs7QUFrQkhDLHNCQUFrQixFQUFFLEVBbEJqQjtBQW1CSEMsV0FBTyxFQUFFLEtBbkJOO0FBb0JIQyxV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LEVBQVA7QUFDSDtBQUNELGFBQU9ULEtBQUssQ0FBQ1UsbUJBQU4sQ0FBMEJELElBQWpDO0FBQ0gsS0F2REk7QUF3REwyRSxvQkFBZ0IsRUFBRSwwQkFBQXBGLEtBQUssRUFBSTtBQUN2QixVQUFNeUMsTUFBTSxHQUFHekMsS0FBSyxDQUFDYyxnQkFBTixDQUF1QnVFLE1BQXZCLENBQThCLFVBQUNyQixLQUFELEVBQVEvQixZQUFSLEVBQXlCO0FBQ2xFO0FBQ0EsWUFBSSxDQUFDcUIsZUFBTXlCLE9BQU4sQ0FBY08sTUFBZixJQUF5QnRGLEtBQUssQ0FBQ1UsbUJBQU4sQ0FBMEJ3QixjQUExQixLQUE2Q0QsWUFBWSxDQUFDQyxjQUF2RixFQUF1RztBQUNuRyxpQkFBTzhCLEtBQVA7QUFDSDtBQUNELGVBQU9BLEtBQUssR0FBRy9CLFlBQVksQ0FBQ3NELFdBQTVCO0FBQ0gsT0FOYyxFQU1aLENBTlksQ0FBZjtBQU9BO0FBQ0EsYUFBTzlDLE1BQVA7QUFDSCxLQWxFSTtBQW1FTDtBQUNBK0MsY0FBVSxFQUFFLG9CQUFBeEYsS0FBSyxFQUFJO0FBQ2pCLGFBQU9BLEtBQUssQ0FBQ1csa0JBQU47QUFDRitCLFlBREUsQ0FDSyxVQUFBRyxPQUFPLFVBQUlBLE9BQU8sQ0FBQ3BDLElBQVIsS0FBaUJQLEdBQUcsQ0FBQ3VFLEtBQUosQ0FBVWdCLFNBQTNCLElBQXdDLENBQUM1QyxPQUFPLENBQUM2QyxTQUFyRCxFQURaLEVBQzRFO0FBRDVFLE9BRUZDLEdBRkUsQ0FFRSxVQUFBOUMsT0FBTyxVQUFJQSxPQUFPLENBQUMrQyxPQUFSLENBQWdCQyxjQUFoQixDQUErQixDQUEvQixFQUFrQ0MsR0FBdEMsRUFGVCxDQUFQO0FBR0gsS0F4RUksRUE1TUksRUFBakIsQzs7OztBQXdSZS9GLFEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltIGZyb20gJy4uLy4uL2NvbW1vbi90aW0nXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vaW5kZXhcIlxyXG5pbXBvcnQgSU0gZnJvbSAnLi4vLi4vY29tbW9uL2ltJ1xyXG5cclxuY29uc3QgdGltU3RvcmUgPSB7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHRpbTogbnVsbCxcclxuICAgICAgICBUSU06IG51bGwsXHJcbiAgICAgICAgaXNTREtSZWFkeTogZmFsc2UsXHJcbiAgICAgICAgQ0FMTF9TVEFURTogMCwgLy8gMC3nqbrpl7IgMS3nrYnlvoXkuK0gMi3lkIzmhI8gMy3mi5Lnu50gNC3pgJror53kuK0gNS3mjILmlq3pgJror50gNi3otoXml7ZcclxuICAgICAgICBSRU1PVEVfQ0FMTF9TVEFURTogMCwgLy8g6L+c56uv6YCa6K+d54q25oCBIOWQjOS4ilxyXG4gICAgICAgIGN1cnJlbnRDYWxsOiB7XHJcbiAgICAgICAgICAgIHRhcmdldFVzZXJJRDogJycsIC8vIOiiq+WPq+aWuUlEXHJcbiAgICAgICAgICAgIGNhbGxpbmdJRDonJywgLy8g5Li75Y+r5pa5SURcclxuICAgICAgICAgICAgdHlwZTondmlkZW8nLCAvLyDlkbzlj6vnsbvlnovvvJp2aWRlbyBhdWRpb1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGN1cnJlbnRDb252ZXJzYXRpb246IHt9LCAvLyDlvZPliY3kvJror51cclxuICAgICAgICBjdXJyZW50TWVzc2FnZUxpc3Q6IFtdLCAvLyDlvZPliY3mtojmga/liJfooahcclxuICAgICAgICBuZXh0UmVxTWVzc2FnZUlEOiAnJyxcclxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsIC8vIOW9k+WJjeS8muivnea2iOaBr+WIl+ihqOaYr+WQpuW3sue7j+aLieWujOS6huaJgOaciea2iOaBr1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkxpc3Q6IFtdLFxyXG5cclxuICAgICAgICBjdXJyZW50VXNlclByb2ZpbGU6IHt9LFxyXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXJJRDogMCxcclxuICAgICAgICB1c2VyU2lnOiAnJyxcclxuICAgICAgICBzZGtBcHBJRDogMCxcclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBDSEFOR0VfU0RLX1JFQURZKHN0YXRlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU0RLUmVhZHkgPSBlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBBRERfVElNKHN0YXRlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRpbSA9IGUudGltXHJcbiAgICAgICAgICAgIHN0YXRlLlRJTSA9IGUuVElNXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTQVZFX1VTRVJfU0lHKHN0YXRlLGUpe1xyXG4gICAgICAgICAgc3RhdGUudXNlclNpZyA9IGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNBVkVfVVNFUl9JRChzdGF0ZSxlKXtcclxuICAgICAgICAgIHN0YXRlLnVzZXJJRCA9IGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNBVkVfU0RLX0FQUF9JRChzdGF0ZSxlKXtcclxuICAgICAgICAgICAgc3RhdGUuc2RrQXBwSUQgPSBlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVUERBVEVfQ0FMTF9TVEFURShzdGF0ZSwgZSkge1xyXG4gICAgICAgICAgICBJTS5waG9uZShlKVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuQ0FMTF9TVEFURSA9IGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVQREFURV9SRU1PVEVfQ0FMTF9TVEFURShzdGF0ZSwgZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5SRU1PVEVfQ0FMTF9TVEFURSA9IGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVQREFURV9DVVJSRU5UX0NBTEwoc3RhdGUsIGUpIHtcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50Q2FsbCA9IHsuLi5zdGF0ZS5jdXJyZW50Q2FsbCwuLi5lfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRDYWxsID0ge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05paw5b2T5YmN5Lya6K+dXHJcbiAgICAgICAgICog6LCD55So5pe25py6OiDliIfmjaLkvJror53ml7ZcclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge0NvbnZlcnNhdGlvbn0gY29udmVyc2F0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXBkYXRlQ3VycmVudENvbnZlcnNhdGlvbihzdGF0ZSwgY29udmVyc2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQgLCBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQpXHJcbiAgICAgICAgICAgIC8vIOiLpeaYr+WQjOS4gOS8muivne+8jOWImeWinumHj+abtOaWsO+8jOino+WGs+i/m+WFpWNoYXTpobXpnaLlj6rmnIljb252ZXJzYXRpb25JROeahOmXrumimFxyXG4gICAgICAgICAgICBpZihzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEID09PSBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQpe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbiA9IHsuLi5zdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLC4uLmNvbnZlcnNhdGlvbn1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uID0gY29udmVyc2F0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudE1lc3NhZ2VMaXN0ID0gW11cclxuICAgICAgICAgICAgc3RhdGUubmV4dFJlcU1lc3NhZ2VJRCA9ICcnXHJcbiAgICAgICAgICAgIHN0YXRlLmlzQ29tcGxldGVkID0gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOabtOaWsOS8muivneWIl+ihqFxyXG4gICAgICAgICAqIOiwg+eUqOaXtuacuu+8muinpuWPkeS8muivneWIl+ihqOabtOaWsOS6i+S7tuaXtuOAgkNPTlZFUlNBVElPTl9MSVNUX1VQREFURURcclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcclxuICAgICAgICAgKiBAcGFyYW0ge0NvbnZlcnNhdGlvbltdfSBjb252ZXJzYXRpb25MaXN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXBkYXRlQ29udmVyc2F0aW9uTGlzdChzdGF0ZSwgY29udmVyc2F0aW9uTGlzdCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb252ZXJzYXRpb25MaXN0ID0gY29udmVyc2F0aW9uTGlzdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN572u5b2T5YmN5Lya6K+dXHJcbiAgICAgICAgICog6LCD55So5pe25py677ya6ZyA6KaB6YeN572u5b2T5YmN5Lya6K+d5pe277yM5L6L5aaC77ya5b2T5YmN5Lya6K+d5piv5LiA5Liq576k57uE77yM5q2j5aW96KKr6Lii5Ye6576k5pe277yI6KKr6Lii576k5LqL5Lu26Kem5Y+R77yJ77yM6YeN572u5b2T5YmN5Lya6K+dXHJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzZXRDdXJyZW50Q29udmVyc2F0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24gPSB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCG5raI5oGv5o+S5YWl5b2T5YmN5Lya6K+d5YiX6KGoXHJcbiAgICAgICAgICog6LCD55So5pe25py677ya5pS2L+WPkea2iOaBr+S6i+S7tuinpuWPkeaXtlxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7TWVzc2FnZVtdfE1lc3NhZ2V9IGRhdGFcclxuICAgICAgICAgKiBAcmV0dXJuc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1c2hDdXJyZW50TWVzc2FnZUxpc3Qoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8g6L+Y5rKh5b2T5YmN5Lya6K+d77yM5YiZ6Lez6L+HXHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIOetm+mAieWHuuW9k+WJjeS8muivneeahOa2iOaBr1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvbnZlcnNhdGlvbklEID09PSBzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEKVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudE1lc3NhZ2VMaXN0ID0gWy4uLnN0YXRlLmN1cnJlbnRNZXNzYWdlTGlzdCwgLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29udmVyc2F0aW9uSUQgPT09IHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRNZXNzYWdlTGlzdCA9IFsuLi5zdGF0ZS5jdXJyZW50TWVzc2FnZUxpc3QsIGRhdGFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juW9k+WJjea2iOaBr+WIl+ihqOS4reWIoOmZpOafkOadoea2iOaBr1xyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB7TWVzc2FnZX0gbWVzc2FnZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlbW92ZU1lc3NhZ2Uoc3RhdGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5jdXJyZW50TWVzc2FnZUxpc3QuZmluZEluZGV4KCh7SUR9KSA9PiBJRCA9PT0gbWVzc2FnZS5JRClcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRNZXNzYWdlTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0KHN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb252ZXJzYXRpb246IHt9LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudE1lc3NhZ2VMaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgIG5leHRSZXFNZXNzYWdlSUQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLCAvLyDlvZPliY3kvJror53mtojmga/liJfooajmmK/lkKblt7Lnu4/mi4nlrozkuobmiYDmnInmtojmga9cclxuICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbkxpc3Q6IFtdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgICBBRERfVElNKHN0b3JlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnQUREX1RJTScsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDSEFOR0VfU0RLX1JFQURZKHN0b3JlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnQ0hBTkdFX1NES19SRUFEWScsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVUERBVEVfQ0FMTF9TVEFURShzdG9yZSwgZSkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ1VQREFURV9DQUxMX1NUQVRFJywgZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFVQREFURV9SRU1PVEVfQ0FMTF9TVEFURShzdG9yZSwgZSkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ1VQREFURV9SRU1PVEVfQ0FMTF9TVEFURScsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVUERBVEVfQ1VSUkVOVF9DQUxMKHN0b3JlLCBlKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnVVBEQVRFX0NVUlJFTlRfQ0FMTCcsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5bmtojmga/liJfooahcclxuICAgICAgICAgKiDosIPnlKjml7bmnLrvvJrmiZPlvIDmn5DkuIDkvJror53ml7bmiJbkuIvmi4nojrflj5bljoblj7Lmtojmga/ml7ZcclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb252ZXJzYXRpb25JRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldE1lc3NhZ2VMaXN0KGNvbnRleHQsIGNvbnZlcnNhdGlvbklEKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ayoeacieabtOWkmuS6hicsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge25leHRSZXFNZXNzYWdlSUQsIGN1cnJlbnRNZXNzYWdlTGlzdH0gPSBjb250ZXh0LnN0YXRlXHJcbiAgICAgICAgICAgIHRpbS5nZXRNZXNzYWdlTGlzdCh7Y29udmVyc2F0aW9uSUQsIG5leHRSZXFNZXNzYWdlSUQsIGNvdW50OiAxNX0pLnRoZW4oaW1SZXBvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsG1lc3NhZ2VJRO+8jOe7reaLieaXtuimgeeUqOWIsFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdGF0ZS5uZXh0UmVxTWVzc2FnZUlEID0gaW1SZXBvbnNlLmRhdGEubmV4dFJlcU1lc3NhZ2VJRFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdGF0ZS5pc0NvbXBsZXRlZCA9IGltUmVwb25zZS5kYXRhLmlzQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDlvZPliY3mtojmga/liJfooajvvIzku47lpLTpg6jmj5LlhaVcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc3RhdGUuY3VycmVudE1lc3NhZ2VMaXN0ID0gWy4uLmltUmVwb25zZS5kYXRhLm1lc3NhZ2VMaXN0LCAuLi5jdXJyZW50TWVzc2FnZUxpc3RdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDliIfmjaLkvJror51cclxuICAgICAgICAgKiDosIPnlKjml7bmnLrvvJrliIfmjaLkvJror53ml7ZcclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb252ZXJzYXRpb25JRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNoZWNrb3V0Q29udmVyc2F0aW9uKGNvbnRleHQsIGNvbnZlcnNhdGlvbklEKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KCdyZXNldEN1cnJlbnRNZW1iZXJMaXN0JylcclxuICAgICAgICAgICAgLy8gMS7liIfmjaLkvJror53liY3vvIzlsIbliIfmjaLliY3nmoTkvJror53ov5vooYzlt7Lor7vkuIrmiqVcclxuICAgICAgICAgICAgaWYgKGNvbnRleHQuc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JRCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNvbnZlcnNhdGlvbklEID0gY29udGV4dC5zdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEXHJcbiAgICAgICAgICAgICAgICB0aW0uc2V0TWVzc2FnZVJlYWQoe2NvbnZlcnNhdGlvbklEOiBwcmV2Q29udmVyc2F0aW9uSUR9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDIu5b6F5YiH5o2i55qE5Lya6K+d5Lmf6L+b6KGM5bey6K+75LiK5oqlXHJcbiAgICAgICAgICAgIHRpbS5zZXRNZXNzYWdlUmVhZCh7Y29udmVyc2F0aW9uSUR9KVxyXG4gICAgICAgICAgICAvLyAzLiDojrflj5bkvJror53kv6Hmga9cclxuICAgICAgICAgICAgcmV0dXJuIHRpbS5nZXRDb252ZXJzYXRpb25Qcm9maWxlKGNvbnZlcnNhdGlvbklEKS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDMuMSDmm7TmlrDlvZPliY3kvJror51cclxuICAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KCd1cGRhdGVDdXJyZW50Q29udmVyc2F0aW9uJywgZGF0YS5jb252ZXJzYXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyAzLjIg6I635Y+W5raI5oGv5YiX6KGoXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoKCdnZXRNZXNzYWdlTGlzdCcsIGNvbnZlcnNhdGlvbklEKVxyXG4gICAgICAgICAgICAgICAgLy8gMy4zIOaLieWPluesrOS4gOmhtee+pOaIkOWRmOWIl+ihqFxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY29udmVyc2F0aW9uLnR5cGUgPT09IFRJTS5UWVBFUy5DT05WX0dST1VQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGF0Y2goJ2dldEdyb3VwTWVtYmVyTGlzdCcsIGRhdGEuY29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5ncm91cElEKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gICAgZ2V0dGVyczoge1xyXG4gICAgICAgIHRpbShzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudGltXHJcbiAgICAgICAgfSxcclxuICAgICAgICBUSU0oc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLlRJTVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ0FMTF9TVEFURShzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuQ0FMTF9TVEFURVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUkVNT1RFX0NBTExfU1RBVEUoc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLlJFTU9URV9DQUxMX1NUQVRFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50Q2FsbChzdGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jdXJyZW50Q2FsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcklEKHN0YXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnVzZXJJRFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlclNpZyhzdGF0ZSl7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGUudXNlclNpZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2RrQXBwSWQoc3RhdGUpe1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLnNka0FwcElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc1NES1JlYWR5KHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pc1NES1JlYWR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb252ZXJzYXRpb25MaXN0KHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jb252ZXJzYXRpb25MaXN0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50Q29udmVyc2F0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50TWVzc2FnZUxpc3Qoc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRNZXNzYWdlTGlzdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9BY2NvdW50OiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbiB8fCAhc3RhdGUuY3VycmVudENvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0MyQyc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQucmVwbGFjZSgnQzJDJywgJycpXHJcbiAgICAgICAgICAgICAgICBjYXNlICdHUk9VUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQucmVwbGFjZSgnR1JPVVAnLCAnJylcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSURcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudENvbnZlcnNhdGlvblR5cGU6IHN0YXRlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uIHx8ICFzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLnR5cGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdGFsVW5yZWFkQ291bnQ6IHN0YXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RhdGUuY29udmVyc2F0aW9uTGlzdC5yZWR1Y2UoKGNvdW50LCBjb252ZXJzYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeS8muivneS4jeiuoeeul+aAu+acquivu1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdG9yZS5nZXR0ZXJzLmhpZGRlbiAmJiBzdGF0ZS5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEID09PSBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudCArIGNvbnZlcnNhdGlvbi51bnJlYWRDb3VudFxyXG4gICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICAvLyB0aXRsZU5vdGlmeShyZXN1bHQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOeUqOS6juW9k+WJjeS8muivneeahOWbvueJh+mihOiniFxyXG4gICAgICAgIGltZ1VybExpc3Q6IHN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmN1cnJlbnRNZXNzYWdlTGlzdFxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UudHlwZSA9PT0gVElNLlRZUEVTLk1TR19JTUFHRSAmJiAhbWVzc2FnZS5pc1Jldm9rZWQpIC8vIOetm+mAieWHuuayoeacieaSpOWbnuW5tuS4lOexu+Wei+aYr+WbvueJh+exu+Wei+eahOa2iOaBr1xyXG4gICAgICAgICAgICAgICAgLm1hcChtZXNzYWdlID0+IG1lc3NhZ2UucGF5bG9hZC5pbWFnZUluZm9BcnJheVswXS51cmwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aW1TdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/common/tim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _timJs = _interopRequireDefault(__webpack_require__(/*! ./tim-js.js */ 18));\nvar _config = __webpack_require__(/*! ./config */ 13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 初始化 SDK 实例\nvar tim = _timJs.default.create({\n  SDKAppID: _config.SDK_APP_ID });\n\n\n// 无日志级别4\ntim.setLogLevel(4);var _default =\n\ntim;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3RpbS5qcyJdLCJuYW1lcyI6WyJ0aW0iLCJUSU0iLCJjcmVhdGUiLCJTREtBcHBJRCIsIlNES19BUFBfSUQiLCJzZXRMb2dMZXZlbCJdLCJtYXBwaW5ncyI6InVGQUFBO0FBQ0Esc0Q7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsZUFBSUMsTUFBSixDQUFXO0FBQ25CQyxVQUFRLEVBQUNDLGtCQURVLEVBQVgsQ0FBWjs7O0FBSUE7QUFDQUosR0FBRyxDQUFDSyxXQUFKLENBQWdCLENBQWhCLEU7O0FBRWVMLEciLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVElNIGZyb20gJy4vdGltLWpzLmpzJ1xyXG5pbXBvcnQge1NES19BUFBfSUR9IGZyb20gJy4vY29uZmlnJ1xyXG4vLyDliJ3lp4vljJYgU0RLIOWunuS+i1xyXG5jb25zdCB0aW0gPSBUSU0uY3JlYXRlKHtcclxuICAgIFNES0FwcElEOlNES19BUFBfSURcclxufSlcclxuXHJcbi8vIOaXoOaXpeW/l+e6p+WIqzRcclxudGltLnNldExvZ0xldmVsKDQpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***********************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/common/tim-js.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 19 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 20);

/***/ }),
/* 20 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 21 */
/*!*******************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/common/im.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _timJs = _interopRequireDefault(__webpack_require__(/*! ./tim-js.js */ 18));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ 14));\nvar _tim = _interopRequireDefault(__webpack_require__(/*! ./tim */ 17));\nvar _https = __webpack_require__(/*! ./https */ 12);\nvar _config = __webpack_require__(/*! ./config */ 13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar uni, userId, request_getUserSig, userSig, userInfo;\n\nfunction init(e) {\n  uni = e.uni;\n  request_getUserSig = e.request_getUserSig;\n\n  // 挂载tim到store\n  _index.default.dispatch('ADD_TIM', { tim: _tim.default, TIM: _timJs.default });\n  _index.default.commit('SAVE_SDK_APP_ID', _config.SDK_APP_ID);\n\n  // 登录成功后会触发 SDK_READY 事件，该事件触发后，可正常使用 SDK 接口\n  _tim.default.on(_timJs.default.EVENT.SDK_READY, onReadyStateUpdate);\n  // SDK NOT READT\n  _tim.default.on(_timJs.default.EVENT.SDK_NOT_READY, onReadyStateUpdate);\n  // 收到新消息\n  _tim.default.on(_timJs.default.EVENT.MESSAGE_RECEIVED, onReceiveMessage);\n  // 会话列表更新\n  _tim.default.on(_timJs.default.EVENT.CONVERSATION_LIST_UPDATED, onUpdateConversationList);\n  // 网络监测\n  _tim.default.on(_timJs.default.EVENT.NET_STATE_CHANGE, onNetStateChange);\n}\n\nfunction onUpdateConversationList(event) {\n  _index.default.commit('updateConversationList', event.data);\n}\n\nfunction onNetStateChange(event) {\n  __f__(\"log\", 'tim 网络变化', \" at common/im.js:34\");\n}\n\nfunction onReadyStateUpdate(_ref) {var name = _ref.name;\n  var isSDKReady = name === _timJs.default.EVENT.SDK_READY;\n  // 本事件tim login后才触发\n  _index.default.dispatch('CHANGE_SDK_READY', isSDKReady);\n  if (isSDKReady) {\n    // 修改个人标配资料\n    _tim.default.updateMyProfile({\n      nick: userInfo.user_name,\n      avatar: userInfo.avatar,\n      gender: userInfo.gender === '男' ? _timJs.default.TYPES.GENDER_MALE : _timJs.default.TYPES.GENDER_FEMALE,\n      selfSignature: '我的个性签名',\n      allowType: _timJs.default.TYPES.ALLOW_TYPE_ALLOW_ANY }).\n    then(function (imResponse) {\n      // console.log('更新资料成功', imResponse.data); // 更新资料成功\n    }).catch(function (imError) {\n      __f__(\"warn\", '更新资料失败:', imError, \" at common/im.js:52\"); // 更新资料失败的相关信息\n    });\n  }\n}\n\nfunction login(info) {\n  userInfo = info;\n  userId = userInfo.im_username;\n  getUserSig(userId).then(function (res) {\n    _index.default.commit('SAVE_USER_SIG', res);\n    _index.default.commit('SAVE_USER_ID', userId);\n    _tim.default.login({\n      userID: userId,\n      userSig: res }).\n    then(function (imResponse) {\n      // console.log(imResponse.data, 'im登录成功'); // 登录成功\n\n      if (imResponse.data.repeatLogin === true) {\n        // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持\n        __f__(\"log\", '标识账号已登录:', imResponse.data.errorInfo, \" at common/im.js:71\");\n      }\n    }).catch(function (imError) {\n      __f__(\"warn\", '登录失败:', imError, \" at common/im.js:74\"); // 登录失败的相关信息\n    });\n  });\n}\n\nfunction logout() {\n  _tim.default.logout();\n}\n\nfunction onReceiveMessage(_ref2) {var messageList = _ref2.data;\n\n  messageList.map(function (message) {\n    if (message.type === _timJs.default.TYPES.MSG_TEXT) {\n      plus.push.createMessage(message.nick + '：' + message.payload.text);\n    } else if (message.type === _timJs.default.TYPES.MSG_CUSTOM) {\n      if (message.payload.description === 'image') {\n        plus.push.createMessage(message.nick + '：' + '[ 图片消息 ]');\n      } else if (message.payload.description === 'telephone') {\n        plus.push.createMessage(message.nick + ' 邀请您进行语音/视频通话');\n      }\n    }\n  });\n\n  handleVideoMessage(messageList);\n\n  _index.default.commit('pushCurrentMessageList', messageList);\n}\n\nfunction handleVideoMessage(messageList) {\n  var videoMessageList = messageList.filter(\n  function (message) {return message.type === _timJs.default.TYPES.MSG_CUSTOM && message.payload.description === 'telephone';});\n\n\n  if (videoMessageList.length === 0) return;\n\n  var videoPayload = JSON.parse(videoMessageList[0].payload.extension);\n  // 有电话呼入\n  _index.default.dispatch('UPDATE_REMOTE_CALL_STATE', videoPayload.state);\n\n  // 本机进入待接听状态\n  if (videoPayload.state === 1) {\n    _index.default.dispatch('UPDATE_CURRENT_CALL', {\n      callingID: videoMessageList[0].from, // 主叫方\n      targetUserID: videoMessageList[0].to, // 被叫方，即本机\n      type: videoPayload.type,\n      roomId: videoPayload.roomId }).\n    then(function (e) {\n      // 先更新currentCall再更新CALL_STATE，否则被叫时会发起通话\n      _index.default.dispatch('UPDATE_CALL_STATE', 1);\n    });\n  }\n}\n\nfunction isJsonStr(str) {\n  try {\n    JSON.parse(str);\n    return true;\n  } catch (_unused) {\n    return false;\n  }\n}\n\nfunction getUserSig(userId) {\n  return new Promise(function (resolve, reject) {\n    if (userSig) {\n      resolve(userSig);\n    } else {\n      request_getUserSig({\n        uni: uni,\n        data: {\n          userId: userId } }).\n\n      then(function (res) {\n        if (res.code === 0) {\n          userSig = res.data;\n          resolve(res.data);\n        } else {\n          reject();\n        }\n      }).catch(function (e) {\n        reject(e);\n      });\n    }\n  });\n}\n\n\nfunction sendText(targetUserID, text) {\n  // 1. 创建消息实例，接口返回的实例可以上屏\n  var message = _tim.default.createTextMessage({\n    to: targetUserID,\n    conversationType: _timJs.default.TYPES.CONV_C2C,\n    payload: {\n      text: text } });\n\n\n\n  sendMessage(message);\n}\n\nfunction sendImage(targetUserID) {\n  return new Promise(function (resolve, reject) {\n    (0, _https.request_uploadImg)({ uni: uni }).then(function (res) {\n      if (res.code === 0) {\n        var message = _tim.default.createCustomMessage({\n          to: targetUserID,\n          conversationType: _timJs.default.TYPES.CONV_C2C,\n          payload: {\n            data: res.data,\n            description: 'image',\n            extension: '' } });\n\n\n        sendMessage(message, function () {return resolve(true);}, function () {return reject();});\n      } else {\n        reject();\n      }\n    });\n  });\n}\n\nfunction telephone(_ref3) {var state = _ref3.state,data = _ref3.data;\n  // roomId 聊天室ID\n  // type: video audio\n  // state: 0-空闲 1-等待中 2-同意 3-拒绝 4-通话中 5-挂断通话 6-超时\n  var _store$state$timStore = _index.default.state.timStore.currentCall,targetUserID = _store$state$timStore.targetUserID,callingID = _store$state$timStore.callingID,roomId = _store$state$timStore.roomId,type = _store$state$timStore.type;\n  var userID = _index.default.state.timStore.userID;\n  var message = _tim.default.createCustomMessage({\n    to: targetUserID === userID ? callingID : targetUserID, // 被叫ID与本机相同，本地为被叫，则发消息给主叫方\n    conversationType: _timJs.default.TYPES.CONV_C2C,\n    payload: {\n      data: data, // String\n      description: 'telephone', // String\n      extension: JSON.stringify({ type: type, state: state, roomId: roomId }) // String\n    } });\n\n  sendMessage(message);\n}\n\nfunction phone(e) {\n  switch (e) {\n    case 1:\n      var callingID = _index.default.state.timStore.currentCall.callingID;\n      var userID = _index.default.state.timStore.userID;\n      // console.log('=----------------',store.state.timStore.CALL_STATE , userID , callingID)\n      if (userID === callingID) {\n        //空闲状态 且 主叫方才执行发起通话\n        telephone({ state: e, data: '发起通话' });\n      }\n      break;\n    case 2:\n      telephone({ state: e, data: '已接听' });\n      break;\n    case 3:\n      telephone({ state: e, data: '拒绝通话' });\n      break;\n    case 5:\n      telephone({ state: e, data: '挂断通话' });\n      break;\n    case 6:\n      telephone({ state: e, data: '超时，对方可能不在线' });\n      break;\n    default:\n      break;}\n\n}\n\nfunction sendMessage(message, success, failed) {\n  // 发送消息\n  _tim.default.sendMessage(message).then(function (imResponse) {\n    // 发送成功\n    __f__(\"log\", _index.default.state.timStore.currentConversation, \" at common/im.js:245\");\n    __f__(\"log\", imResponse, '发送成功', \" at common/im.js:246\");\n    // if (typeof success === 'function') {\n    //     success()\n    // }\n  }).catch(function (imError) {\n    // 发送失败\n    __f__(\"warn\", '发送失败:', imError, \" at common/im.js:252\");\n    // if (typeof failed === 'function') {\n    //     failed()\n    // }\n  });\n\n  _index.default.commit('pushCurrentMessageList', message);\n}var _default =\n\n{\n  tim: _tim.default,\n  TIM: _timJs.default,\n  login: login,\n  logout: logout,\n  init: init,\n  sendText: sendText,\n  sendImage: sendImage,\n  phone: phone,\n  getUserSig: getUserSig };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2ltLmpzIl0sIm5hbWVzIjpbInVuaSIsInVzZXJJZCIsInJlcXVlc3RfZ2V0VXNlclNpZyIsInVzZXJTaWciLCJ1c2VySW5mbyIsImluaXQiLCJlIiwic3RvcmUiLCJkaXNwYXRjaCIsInRpbSIsIlRJTSIsImNvbW1pdCIsIlNES19BUFBfSUQiLCJvbiIsIkVWRU5UIiwiU0RLX1JFQURZIiwib25SZWFkeVN0YXRlVXBkYXRlIiwiU0RLX05PVF9SRUFEWSIsIk1FU1NBR0VfUkVDRUlWRUQiLCJvblJlY2VpdmVNZXNzYWdlIiwiQ09OVkVSU0FUSU9OX0xJU1RfVVBEQVRFRCIsIm9uVXBkYXRlQ29udmVyc2F0aW9uTGlzdCIsIk5FVF9TVEFURV9DSEFOR0UiLCJvbk5ldFN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJkYXRhIiwibmFtZSIsImlzU0RLUmVhZHkiLCJ1cGRhdGVNeVByb2ZpbGUiLCJuaWNrIiwidXNlcl9uYW1lIiwiYXZhdGFyIiwiZ2VuZGVyIiwiVFlQRVMiLCJHRU5ERVJfTUFMRSIsIkdFTkRFUl9GRU1BTEUiLCJzZWxmU2lnbmF0dXJlIiwiYWxsb3dUeXBlIiwiQUxMT1dfVFlQRV9BTExPV19BTlkiLCJ0aGVuIiwiaW1SZXNwb25zZSIsImNhdGNoIiwiaW1FcnJvciIsImxvZ2luIiwiaW5mbyIsImltX3VzZXJuYW1lIiwiZ2V0VXNlclNpZyIsInJlcyIsInVzZXJJRCIsInJlcGVhdExvZ2luIiwiZXJyb3JJbmZvIiwibG9nb3V0IiwibWVzc2FnZUxpc3QiLCJtYXAiLCJtZXNzYWdlIiwidHlwZSIsIk1TR19URVhUIiwicGx1cyIsInB1c2giLCJjcmVhdGVNZXNzYWdlIiwicGF5bG9hZCIsInRleHQiLCJNU0dfQ1VTVE9NIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVWaWRlb01lc3NhZ2UiLCJ2aWRlb01lc3NhZ2VMaXN0IiwiZmlsdGVyIiwibGVuZ3RoIiwidmlkZW9QYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwiZXh0ZW5zaW9uIiwic3RhdGUiLCJjYWxsaW5nSUQiLCJmcm9tIiwidGFyZ2V0VXNlcklEIiwidG8iLCJyb29tSWQiLCJpc0pzb25TdHIiLCJzdHIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvZGUiLCJzZW5kVGV4dCIsImNyZWF0ZVRleHRNZXNzYWdlIiwiY29udmVyc2F0aW9uVHlwZSIsIkNPTlZfQzJDIiwic2VuZE1lc3NhZ2UiLCJzZW5kSW1hZ2UiLCJjcmVhdGVDdXN0b21NZXNzYWdlIiwidGVsZXBob25lIiwidGltU3RvcmUiLCJjdXJyZW50Q2FsbCIsInN0cmluZ2lmeSIsInBob25lIiwic3VjY2VzcyIsImZhaWxlZCIsImN1cnJlbnRDb252ZXJzYXRpb24iXSwibWFwcGluZ3MiOiJvSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEOztBQUVBLElBQUlBLEdBQUosRUFBU0MsTUFBVCxFQUFpQkMsa0JBQWpCLEVBQXFDQyxPQUFyQyxFQUE4Q0MsUUFBOUM7O0FBRUEsU0FBU0MsSUFBVCxDQUFjQyxDQUFkLEVBQWlCO0FBQ2JOLEtBQUcsR0FBR00sQ0FBQyxDQUFDTixHQUFSO0FBQ0FFLG9CQUFrQixHQUFHSSxDQUFDLENBQUNKLGtCQUF2Qjs7QUFFQTtBQUNBSyxpQkFBTUMsUUFBTixDQUFlLFNBQWYsRUFBMEIsRUFBQ0MsR0FBRyxFQUFIQSxZQUFELEVBQU1DLEdBQUcsRUFBSEEsY0FBTixFQUExQjtBQUNBSCxpQkFBTUksTUFBTixDQUFhLGlCQUFiLEVBQWdDQyxrQkFBaEM7O0FBRUE7QUFDQUgsZUFBSUksRUFBSixDQUFPSCxlQUFJSSxLQUFKLENBQVVDLFNBQWpCLEVBQTRCQyxrQkFBNUI7QUFDQTtBQUNBUCxlQUFJSSxFQUFKLENBQU9ILGVBQUlJLEtBQUosQ0FBVUcsYUFBakIsRUFBZ0NELGtCQUFoQztBQUNBO0FBQ0FQLGVBQUlJLEVBQUosQ0FBT0gsZUFBSUksS0FBSixDQUFVSSxnQkFBakIsRUFBbUNDLGdCQUFuQztBQUNBO0FBQ0FWLGVBQUlJLEVBQUosQ0FBT0gsZUFBSUks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RUFPR0MsS0FQSCxDQU9TLFVBQVVDLE9BQVYsRUFBbUI7QUFDeEI7QUFDQSxrQkFBYSxPQUFiLEVBQXNCQSxPQUF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBYkQ7O0FBZUFuQyxpQkFBTUksTUFBTixDQUFhLHdCQUFiLEVBQXVDMkMsT0FBdkM7QUFDSCxDOztBQUVjO0FBQ1g3QyxLQUFHLEVBQUhBLFlBRFc7QUFFWEMsS0FBRyxFQUFIQSxjQUZXO0FBR1hpQyxPQUFLLEVBQUxBLEtBSFc7QUFJWFEsUUFBTSxFQUFOQSxNQUpXO0FBS1g5QyxNQUFJLEVBQUpBLElBTFc7QUFNWCtFLFVBQVEsRUFBUkEsUUFOVztBQU9YSyxXQUFTLEVBQVRBLFNBUFc7QUFRWE0sT0FBSyxFQUFMQSxLQVJXO0FBU1hqRCxZQUFVLEVBQVZBLFVBVFcsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUSU0gZnJvbSAnLi90aW0tanMuanMnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleC5qcydcclxuaW1wb3J0IHRpbSBmcm9tICcuL3RpbSdcclxuaW1wb3J0IHtyZXF1ZXN0X3VwbG9hZEltZ30gZnJvbSAnLi9odHRwcydcclxuaW1wb3J0IHtTREtfQVBQX0lEfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmxldCB1bmksIHVzZXJJZCwgcmVxdWVzdF9nZXRVc2VyU2lnLCB1c2VyU2lnLCB1c2VySW5mb1xyXG5cclxuZnVuY3Rpb24gaW5pdChlKSB7XHJcbiAgICB1bmkgPSBlLnVuaVxyXG4gICAgcmVxdWVzdF9nZXRVc2VyU2lnID0gZS5yZXF1ZXN0X2dldFVzZXJTaWdcclxuXHJcbiAgICAvLyDmjILovb10aW3liLBzdG9yZVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goJ0FERF9USU0nLCB7dGltLCBUSU19KVxyXG4gICAgc3RvcmUuY29tbWl0KCdTQVZFX1NES19BUFBfSUQnLCBTREtfQVBQX0lEKVxyXG5cclxuICAgIC8vIOeZu+W9leaIkOWKn+WQjuS8muinpuWPkSBTREtfUkVBRFkg5LqL5Lu277yM6K+l5LqL5Lu26Kem5Y+R5ZCO77yM5Y+v5q2j5bi45L2/55SoIFNESyDmjqXlj6NcclxuICAgIHRpbS5vbihUSU0uRVZFTlQuU0RLX1JFQURZLCBvblJlYWR5U3RhdGVVcGRhdGUpXHJcbiAgICAvLyBTREsgTk9UIFJFQURUXHJcbiAgICB0aW0ub24oVElNLkVWRU5ULlNES19OT1RfUkVBRFksIG9uUmVhZHlTdGF0ZVVwZGF0ZSlcclxuICAgIC8vIOaUtuWIsOaWsOa2iOaBr1xyXG4gICAgdGltLm9uKFRJTS5FVkVOVC5NRVNTQUdFX1JFQ0VJVkVELCBvblJlY2VpdmVNZXNzYWdlKVxyXG4gICAgLy8g5Lya6K+d5YiX6KGo5pu05pawXHJcbiAgICB0aW0ub24oVElNLkVWRU5ULkNPTlZFUlNBVElPTl9MSVNUX1VQREFURUQsIG9uVXBkYXRlQ29udmVyc2F0aW9uTGlzdClcclxuICAgIC8vIOe9kee7nOebkea1i1xyXG4gICAgdGltLm9uKFRJTS5FVkVOVC5ORVRfU1RBVEVfQ0hBTkdFLCBvbk5ldFN0YXRlQ2hhbmdlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVwZGF0ZUNvbnZlcnNhdGlvbkxpc3QoZXZlbnQpIHtcclxuICAgIHN0b3JlLmNvbW1pdCgndXBkYXRlQ29udmVyc2F0aW9uTGlzdCcsIGV2ZW50LmRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTmV0U3RhdGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0aW0g572R57uc5Y+Y5YyWJylcclxufVxyXG5cclxuZnVuY3Rpb24gb25SZWFkeVN0YXRlVXBkYXRlKHtuYW1lfSkge1xyXG4gICAgY29uc3QgaXNTREtSZWFkeSA9IG5hbWUgPT09IFRJTS5FVkVOVC5TREtfUkVBRFlcclxuICAgIC8vIOacrOS6i+S7tnRpbSBsb2dpbuWQjuaJjeinpuWPkVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goJ0NIQU5HRV9TREtfUkVBRFknLCBpc1NES1JlYWR5KVxyXG4gICAgaWYgKGlzU0RLUmVhZHkpIHtcclxuICAgICAgICAvLyDkv67mlLnkuKrkurrmoIfphY3otYTmlplcclxuICAgICAgICB0aW0udXBkYXRlTXlQcm9maWxlKHtcclxuICAgICAgICAgICAgbmljazogdXNlckluZm8udXNlcl9uYW1lLFxyXG4gICAgICAgICAgICBhdmF0YXI6IHVzZXJJbmZvLmF2YXRhcixcclxuICAgICAgICAgICAgZ2VuZGVyOiB1c2VySW5mby5nZW5kZXIgPT09ICfnlLcnID8gVElNLlRZUEVTLkdFTkRFUl9NQUxFIDogVElNLlRZUEVTLkdFTkRFUl9GRU1BTEUsXHJcbiAgICAgICAgICAgIHNlbGZTaWduYXR1cmU6ICfmiJHnmoTkuKrmgKfnrb7lkI0nLFxyXG4gICAgICAgICAgICBhbGxvd1R5cGU6IFRJTS5UWVBFUy5BTExPV19UWVBFX0FMTE9XX0FOWVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+abtOaWsOi1hOaWmeaIkOWKnycsIGltUmVzcG9uc2UuZGF0YSk7IC8vIOabtOaWsOi1hOaWmeaIkOWKn1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChpbUVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5pu05paw6LWE5paZ5aSx6LSlOicsIGltRXJyb3IpOyAvLyDmm7TmlrDotYTmlpnlpLHotKXnmoTnm7jlhbPkv6Hmga9cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dpbihpbmZvKSB7XHJcbiAgICB1c2VySW5mbyA9IGluZm9cclxuICAgIHVzZXJJZCA9IHVzZXJJbmZvLmltX3VzZXJuYW1lXHJcbiAgICBnZXRVc2VyU2lnKHVzZXJJZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHN0b3JlLmNvbW1pdCgnU0FWRV9VU0VSX1NJRycsIHJlcylcclxuICAgICAgICBzdG9yZS5jb21taXQoJ1NBVkVfVVNFUl9JRCcsIHVzZXJJZClcclxuICAgICAgICB0aW0ubG9naW4oe1xyXG4gICAgICAgICAgICB1c2VySUQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlclNpZzogcmVzXHJcbiAgICAgICAgfSkudGhlbigoaW1SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbVJlc3BvbnNlLmRhdGEsICdpbeeZu+W9leaIkOWKnycpOyAvLyDnmbvlvZXmiJDlip9cclxuXHJcbiAgICAgICAgICAgIGlmIChpbVJlc3BvbnNlLmRhdGEucmVwZWF0TG9naW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOagh+ivhui0puWPt+W3sueZu+W9le+8jOacrOasoeeZu+W9leaTjeS9nOS4uumHjeWkjeeZu+W9leOAgnYyLjUuMSDotbfmlK/mjIFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmoIfor4botKblj7flt7LnmbvlvZU6JyxpbVJlc3BvbnNlLmRhdGEuZXJyb3JJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChpbUVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign55m75b2V5aSx6LSlOicsIGltRXJyb3IpOyAvLyDnmbvlvZXlpLHotKXnmoTnm7jlhbPkv6Hmga9cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgdGltLmxvZ291dCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUmVjZWl2ZU1lc3NhZ2Uoe2RhdGE6IG1lc3NhZ2VMaXN0fSkge1xyXG5cclxuICAgIG1lc3NhZ2VMaXN0Lm1hcChtZXNzYWdlID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSBUSU0uVFlQRVMuTVNHX1RFWFQpIHtcclxuICAgICAgICAgICAgcGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UobWVzc2FnZS5uaWNrICsgJ++8micgKyBtZXNzYWdlLnBheWxvYWQudGV4dClcclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gVElNLlRZUEVTLk1TR19DVVNUT00pIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UucGF5bG9hZC5kZXNjcmlwdGlvbiA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgcGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UobWVzc2FnZS5uaWNrICsgJ++8micgKyAnWyDlm77niYfmtojmga8gXScpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5wYXlsb2FkLmRlc2NyaXB0aW9uID09PSAndGVsZXBob25lJykge1xyXG4gICAgICAgICAgICAgICAgcGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UobWVzc2FnZS5uaWNrICsgJyDpgoDor7fmgqjov5vooYzor63pn7Mv6KeG6aKR6YCa6K+dJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaGFuZGxlVmlkZW9NZXNzYWdlKG1lc3NhZ2VMaXN0KVxyXG5cclxuICAgIHN0b3JlLmNvbW1pdCgncHVzaEN1cnJlbnRNZXNzYWdlTGlzdCcsIG1lc3NhZ2VMaXN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVWaWRlb01lc3NhZ2UobWVzc2FnZUxpc3QpIHtcclxuICAgIGNvbnN0IHZpZGVvTWVzc2FnZUxpc3QgPSBtZXNzYWdlTGlzdC5maWx0ZXIoXHJcbiAgICAgICAgbWVzc2FnZSA9PiBtZXNzYWdlLnR5cGUgPT09IFRJTS5UWVBFUy5NU0dfQ1VTVE9NICYmIG1lc3NhZ2UucGF5bG9hZC5kZXNjcmlwdGlvbiA9PT0gJ3RlbGVwaG9uZSdcclxuICAgIClcclxuXHJcbiAgICBpZiAodmlkZW9NZXNzYWdlTGlzdC5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHZpZGVvUGF5bG9hZCA9IEpTT04ucGFyc2UodmlkZW9NZXNzYWdlTGlzdFswXS5wYXlsb2FkLmV4dGVuc2lvbilcclxuICAgIC8vIOacieeUteivneWRvOWFpVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goJ1VQREFURV9SRU1PVEVfQ0FMTF9TVEFURScsIHZpZGVvUGF5bG9hZC5zdGF0ZSlcclxuXHJcbiAgICAvLyDmnKzmnLrov5vlhaXlvoXmjqXlkKznirbmgIFcclxuICAgIGlmICh2aWRlb1BheWxvYWQuc3RhdGUgPT09IDEpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnVVBEQVRFX0NVUlJFTlRfQ0FMTCcsIHtcclxuICAgICAgICAgICAgY2FsbGluZ0lEOiB2aWRlb01lc3NhZ2VMaXN0WzBdLmZyb20sIC8vIOS4u+WPq+aWuVxyXG4gICAgICAgICAgICB0YXJnZXRVc2VySUQ6IHZpZGVvTWVzc2FnZUxpc3RbMF0udG8sIC8vIOiiq+WPq+aWue+8jOWNs+acrOaculxyXG4gICAgICAgICAgICB0eXBlOiB2aWRlb1BheWxvYWQudHlwZSxcclxuICAgICAgICAgICAgcm9vbUlkOiB2aWRlb1BheWxvYWQucm9vbUlkXHJcbiAgICAgICAgfSkudGhlbigoZSk9PntcclxuICAgICAgICAgICAgLy8g5YWI5pu05pawY3VycmVudENhbGzlho3mm7TmlrBDQUxMX1NUQVRF77yM5ZCm5YiZ6KKr5Y+r5pe25Lya5Y+R6LW36YCa6K+dXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdVUERBVEVfQ0FMTF9TVEFURScsIDEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNKc29uU3RyKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cilcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJTaWcodXNlcklkKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyU2lnKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodXNlclNpZylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXF1ZXN0X2dldFVzZXJTaWcoe1xyXG4gICAgICAgICAgICAgICAgdW5pLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyU2lnID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbmRUZXh0KHRhcmdldFVzZXJJRCwgdGV4dCkge1xyXG4gICAgLy8gMS4g5Yib5bu65raI5oGv5a6e5L6L77yM5o6l5Y+j6L+U5Zue55qE5a6e5L6L5Y+v5Lul5LiK5bGPXHJcbiAgICBsZXQgbWVzc2FnZSA9IHRpbS5jcmVhdGVUZXh0TWVzc2FnZSh7XHJcbiAgICAgICAgdG86IHRhcmdldFVzZXJJRCxcclxuICAgICAgICBjb252ZXJzYXRpb25UeXBlOiBUSU0uVFlQRVMuQ09OVl9DMkMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kSW1hZ2UodGFyZ2V0VXNlcklEKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RfdXBsb2FkSW1nKHt1bml9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aW0uY3JlYXRlQ3VzdG9tTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG86IHRhcmdldFVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25UeXBlOiBUSU0uVFlQRVMuQ09OVl9DMkMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdpbWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgKCkgPT4gcmVzb2x2ZSh0cnVlKSwgKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlbGVwaG9uZSh7c3RhdGUsIGRhdGF9KSB7XHJcbiAgICAvLyByb29tSWQg6IGK5aSp5a6kSURcclxuICAgIC8vIHR5cGU6IHZpZGVvIGF1ZGlvXHJcbiAgICAvLyBzdGF0ZTogMC3nqbrpl7IgMS3nrYnlvoXkuK0gMi3lkIzmhI8gMy3mi5Lnu50gNC3pgJror53kuK0gNS3mjILmlq3pgJror50gNi3otoXml7ZcclxuICAgIGNvbnN0IHt0YXJnZXRVc2VySUQsIGNhbGxpbmdJRCwgcm9vbUlkLCB0eXBlfSA9IHN0b3JlLnN0YXRlLnRpbVN0b3JlLmN1cnJlbnRDYWxsXHJcbiAgICBjb25zdCB1c2VySUQgPSBzdG9yZS5zdGF0ZS50aW1TdG9yZS51c2VySURcclxuICAgIGxldCBtZXNzYWdlID0gdGltLmNyZWF0ZUN1c3RvbU1lc3NhZ2Uoe1xyXG4gICAgICAgIHRvOiB0YXJnZXRVc2VySUQgPT09IHVzZXJJRCA/IGNhbGxpbmdJRCA6IHRhcmdldFVzZXJJRCwgLy8g6KKr5Y+rSUTkuI7mnKzmnLrnm7jlkIzvvIzmnKzlnLDkuLrooqvlj6vvvIzliJnlj5Hmtojmga/nu5nkuLvlj6vmlrlcclxuICAgICAgICBjb252ZXJzYXRpb25UeXBlOiBUSU0uVFlQRVMuQ09OVl9DMkMsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBkYXRhLCAvLyBTdHJpbmdcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0ZWxlcGhvbmUnLCAvLyBTdHJpbmdcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBKU09OLnN0cmluZ2lmeSh7dHlwZSwgc3RhdGUsIHJvb21JZH0pIC8vIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwaG9uZShlKSB7XHJcbiAgICBzd2l0Y2ggKGUpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxpbmdJRCA9IHN0b3JlLnN0YXRlLnRpbVN0b3JlLmN1cnJlbnRDYWxsLmNhbGxpbmdJRFxyXG4gICAgICAgICAgICBjb25zdCB1c2VySUQgPSBzdG9yZS5zdGF0ZS50aW1TdG9yZS51c2VySURcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJz0tLS0tLS0tLS0tLS0tLS0tJyxzdG9yZS5zdGF0ZS50aW1TdG9yZS5DQUxMX1NUQVRFICwgdXNlcklEICwgY2FsbGluZ0lEKVxyXG4gICAgICAgICAgICBpZiAodXNlcklEID09PSBjYWxsaW5nSUQpIHtcclxuICAgICAgICAgICAgICAgIC8v56m66Zey54q25oCBIOS4lCDkuLvlj6vmlrnmiY3miafooYzlj5HotbfpgJror51cclxuICAgICAgICAgICAgICAgIHRlbGVwaG9uZSh7c3RhdGU6IGUsIGRhdGE6ICflj5HotbfpgJror50nfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgdGVsZXBob25lKHtzdGF0ZTogZSwgZGF0YTogJ+W3suaOpeWQrCd9KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgdGVsZXBob25lKHtzdGF0ZTogZSwgZGF0YTogJ+aLkue7nemAmuivnSd9KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgdGVsZXBob25lKHtzdGF0ZTogZSwgZGF0YTogJ+aMguaWremAmuivnSd9KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgdGVsZXBob25lKHtzdGF0ZTogZSwgZGF0YTogJ+i2heaXtu+8jOWvueaWueWPr+iDveS4jeWcqOe6vyd9KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIHN1Y2Nlc3MsIGZhaWxlZCkge1xyXG4gICAgLy8g5Y+R6YCB5raI5oGvXHJcbiAgICB0aW0uc2VuZE1lc3NhZ2UobWVzc2FnZSkudGhlbihmdW5jdGlvbiAoaW1SZXNwb25zZSkge1xyXG4gICAgICAgIC8vIOWPkemAgeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlLnN0YXRlLnRpbVN0b3JlLmN1cnJlbnRDb252ZXJzYXRpb24pXHJcbiAgICAgICAgY29uc29sZS5sb2coaW1SZXNwb25zZSwgJ+WPkemAgeaIkOWKnycpO1xyXG4gICAgICAgIC8vIGlmICh0eXBlb2Ygc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vICAgICBzdWNjZXNzKClcclxuICAgICAgICAvLyB9XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoaW1FcnJvcikge1xyXG4gICAgICAgIC8vIOWPkemAgeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUud2Fybign5Y+R6YCB5aSx6LSlOicsIGltRXJyb3IpO1xyXG4gICAgICAgIC8vIGlmICh0eXBlb2YgZmFpbGVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gICAgIGZhaWxlZCgpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSlcclxuXHJcbiAgICBzdG9yZS5jb21taXQoJ3B1c2hDdXJyZW50TWVzc2FnZUxpc3QnLCBtZXNzYWdlKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aW0sXHJcbiAgICBUSU0sXHJcbiAgICBsb2dpbixcclxuICAgIGxvZ291dCxcclxuICAgIGluaXQsXHJcbiAgICBzZW5kVGV4dCxcclxuICAgIHNlbmRJbWFnZSxcclxuICAgIHBob25lLFxyXG4gICAgZ2V0VXNlclNpZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
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
/* 25 */
/*!*********************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/main.js?{"page":"pages%2Ftest%2Ftest"} ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/test/test.nvue?mpType=page */ 26);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/test/test'\n        _pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_test_test_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGVzdC90ZXN0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGVzdC90ZXN0J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!***************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 27);\n/* harmony import */ var _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.nvue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 31).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 31).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"eaf7541e\",\n  false,\n  _test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/test/test.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1NTJmNGU4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi90ZXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZWFmNzU0MWVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVzdC90ZXN0Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=template&id=7552f4e8&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=template&id=7552f4e8&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_template_id_7552f4e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=template&id=7552f4e8&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        _c(
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
                      { staticClass: ["button"], on: { click: _vm.exitRoom } },
                      [
                        _c("view", { staticClass: ["button-style"] }, [
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("筒摄像头")
                          ])
                        ])
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["button"],
                        on: { click: function($event) {} }
                      },
                      [
                        _c("view", { staticClass: ["button-style"] }, [
                          _c("u-text", { staticClass: ["button-text"] }, [
                            _vm._v("筒摄像头")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _c("view", { staticClass: ["handle-buttons"] }, [
                    _c("view", { staticClass: ["button"] }, [
                      _c("view", { staticClass: ["button-style"] }, [
                        _c("u-text", { staticClass: ["button-text"] }, [
                          _vm._v("筒摄像头")
                        ])
                      ])
                    ]),
                    _c("view", { staticClass: ["button"] }, [
                      _c("view", { staticClass: ["button-style"] }, [
                        _c("u-text", { staticClass: ["button-text"] }, [
                          _vm._v("筒摄像头")
                        ])
                      ])
                    ])
                  ]),
                  _c("view", { staticClass: ["handle-buttons"] }, [
                    _c("view", { staticClass: ["button"] }, [
                      _c("view", { staticClass: ["button-style"] }, [
                        _c("u-text", { staticClass: ["button-text"] }, [
                          _vm._v("筒摄像头")
                        ]),
                        _c("u-text", { staticClass: ["button-text"] }, [
                          _vm._v("筒摄像头")
                        ])
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
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!***************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLG9kQUFHLEVBQUMiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGVzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90ZXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _config = __webpack_require__(/*! ../../common/config */ 13);\n\nvar _vuex = __webpack_require__(/*! vuex */ 11);\n\n\n\n\nvar _https = __webpack_require__(/*! ../../common/https.js */ 12); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//插件对象\nvar sdkwx = __webpack_provided_uni_dot_requireNativePlugin('TXTRTC-SdkWX');var _default = { data: function data() {return { remoteVideoHeight: 0, sdkAppId: 1400440995, roomId: '', vvh: 100, localUserId: '', localUserSig: '', remoteUserId: '', remoteUserSig: '', watingStatus: true, ptop: 0, watingHeight: 0, watingWidth: 0, callInfo: {}, innerAudioContext: {}, hasMuteAudio: false, hasMuteVideo: false, hasMuteCalling: false, windowStatus: 0 };}, // onBackPress(options) {\n  // \tif (options.from === 'navigateBack') {\n  // \t\treturn false\n  // \t}\n  // \tuni.showModal({\n  // \t\ttitle: '提示',\n  // \t\tcontent: '将结束通话，是否确定？',\n  // \t\tsuccess: e => {\n  // \t\t\tif (e.confirm) {\n  // \t\t\t\tthis.hungupCalling()\n  // \t\t\t}\n  // \t\t}\n  // \t})\n  // \treturn true\n  // },\n  watch: { windowStatus: function windowStatus(e) {// e&&this.enterRoom()\n    } }, onLoad: function onLoad(o) {var _this = this;uni.getSystemInfo({ success: function success(e) {_this.watingWidth = e.windowWidth;_this.watingHeight = e.windowHeight;} }); // this.callInfo = o\n    // this.roomId = o.recordId // 病例Id作为房间Id\n    // this.localUserId = o[o.role + 'Id'] // 本机账号\n    // this.remoteUserId = o[o.remoteRole + 'Id']\n    //预加载签名\n    // this.checkSig()\n    //检查权限\n    sdkwx.checkPermission(function (res) {__f__(\"log\", res, \" at pages/test/test.nvue:142\");}); // 设置事件回调\n    sdkwx.setListener(function (res) {__f__(\"log\", res, \" at pages/test/test.nvue:147\");\n      if (res.type == \"onEnterRoom\") {\n        //进入房间回调\n\n      } else if (res.type == \"onExitRoom\") {\n        //离开房间回调\n\n      } else if (res.type == \"onSwitchRole\") {\n        //角色转换回调\n\n      } else if (res.type == \"onUserVideoAvailable\") {\n        //远端用户视频可用回调\n        _this.onUserVideoAvailable(res.data);\n      }\n    });\n\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.exitRoom();\n  },\n  methods: {\n    rePermission: function rePermission() {\n      sdkwx.checkPermission(function (res) {\n        __f__(\"log\", res, \" at pages/test/test.nvue:171\");\n      });\n    },\n    onUserVideoAvailable: function onUserVideoAvailable(data) {\n      var userId = data.userId;\n      var available = data.available;\n\n      var remoteVideoView = this.$refs.remoteVideoView;\n      if (available) {\n        // this.remoteVideoHeight = 300;\n        remoteVideoView.startRemoteView(userId);\n      } else {\n        // this.remoteVideoHeight = 0;\n        remoteVideoView.stopRemoteView(userId);\n      }\n    },\n    enterRoom: function enterRoom(id) {var _this2 = this;\n      var us = Date.now();\n      (0, _https.request_getUserSig)({\n        uni: uni,\n        data: {\n          userId: us } }).\n\n      then(function (res) {\n        var scene = 0; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;\n        sdkwx.enterRoom({\n          sdkAppId: _config.SDK_APP_ID,\n          roomId: 11111, // 只能为数字或者可转化为数字\n          role: 20, //20主播 21 观众\n          userId: us,\n          userSig: res.data },\n        scene);\n\n        _this2.startVideo();\n      });\n    },\n    startVideo: function startVideo() {var _this3 = this;\n      this.stopVideo();\n      __f__(\"log\", '=========', \" at pages/test/test.nvue:209\");\n\n      setTimeout(function () {\n        // //设置角色主播\n        // sdkwx.switchRole(20); //20主播 21 观众\n\n        //开启音频\n        sdkwx.startLocalAudio();\n\n        //开始视频\n        var videoView = _this3.$refs.videoView;\n        videoView.startLocalPreview(true);\n      });\n    },\n    stopLocalPreview: function stopLocalPreview() {\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView.stopLocalPreview();\n    },\n    stopVideo: function stopVideo() {\n      // //设置角色观众\n      // sdkwx.switchRole(20); //20主播 21 观众\n\n      //停止音频\n      sdkwx.stopLocalAudio();\n\n      //停止视频\n      var videoView = this.$refs.videoView;\n      videoView && videoView.stopLocalPreview();\n    },\n    exitRoom: function exitRoom() {\n      this.stopVideo();\n      //退出房间\n      sdkwx.exitRoom();\n    },\n    createGroup: function createGroup() {\n\n    },\n    joinGroup: function joinGroup() {\n    } },\n\n  computed: {} };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGVzdC90ZXN0Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7O0FBRUE7Ozs7O0FBS0Esa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVEE7QUFhQSwyRSxlQUVBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0Esb0JBREEsRUFFQSxvQkFGQSxFQUdBLFVBSEEsRUFJQSxRQUpBLEVBS0EsZUFMQSxFQU1BLGdCQU5BLEVBT0EsZ0JBUEEsRUFRQSxpQkFSQSxFQVNBLGtCQVRBLEVBVUEsT0FWQSxFQVdBLGVBWEEsRUFZQSxjQVpBLEVBY0EsWUFkQSxFQWVBLHFCQWZBLEVBaUJBLG1CQWpCQSxFQWtCQSxtQkFsQkEsRUFtQkEscUJBbkJBLEVBcUJBLGVBckJBLEdBdUJBLENBekJBLEVBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFdBQ0EsWUFEQSx3QkFDQSxDQURBLEVBQ0EsQ0FFQTtBQUNBLEtBSkEsRUE1Q0EsRUFrREEsTUFsREEsa0JBa0RBLENBbERBLEVBa0RBLGtCQUNBLG9CQUNBLDhCQUNBLGtDQUNBLG9DQUNBLENBSkEsSUFEQSxDQVFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsMENBQ0Esa0RBQ0EsQ0FGQSxFQWxCQSxDQXNCQTtBQUNBLHNDQUNBO0FBRUE7QUFDQTs7QUFFQSxPQUhBLE1BR0E7QUFDQTs7QUFFQSxPQUhBLE1BR0E7QUFDQTs7QUFFQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTs7QUFrQkEsR0EzRkE7QUE0RkEsZUE1RkEsMkJBNEZBO0FBQ0E7QUFDQSxHQTlGQTtBQStGQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUEsd0JBTkEsZ0NBTUEsSUFOQSxFQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLGFBbkJBLHFCQW1CQSxFQW5CQSxFQW1CQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBQ0Esb0JBREEsRUFGQTs7QUFLQSxVQUxBLENBS0E7QUFDQSxzQkFEQSxDQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHVCQUZBLEVBRUE7QUFDQSxrQkFIQSxFQUdBO0FBQ0Esb0JBSkE7QUFLQSwyQkFMQTtBQU1BLGFBTkE7O0FBUUE7QUFDQSxPQWhCQTtBQWlCQSxLQXRDQTtBQXVDQSxjQXZDQSx3QkF1Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BVkE7QUFXQSxLQXREQTtBQXVEQSxvQkF2REEsOEJBdURBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTlEQTtBQStEQSxhQS9EQSx1QkErREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0F6RUE7QUEwRUEsWUExRUEsc0JBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5RUE7QUErRUEsZUEvRUEseUJBK0VBOztBQUVBLEtBakZBO0FBa0ZBLGFBbEZBLHVCQWtGQTtBQUNBLEtBbkZBLEVBL0ZBOztBQW9MQSxjQXBMQSxFIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICA8dmlldyBzdHlsZT1cImZsZXg6MTtcIj5cclxuICAgICAgICAgICAgPHR4dHJ0Y192aWRlb192aWV3IGNsYXNzPSd2aWRlby12aWV3IHJlbW90ZS12aWV3JyByZWY9XCJyZW1vdGVWaWRlb1ZpZXdcIj48L3R4dHJ0Y192aWRlb192aWV3PlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImJvdHRvbS1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHR4dHJ0Y192aWRlb192aWV3IGNsYXNzPSd2aWRlby12aWV3IGxvY2FsLXZpZXcnIHJlZj1cInZpZGVvVmlld1wiPjwvdHh0cnRjX3ZpZGVvX3ZpZXc+XHJcbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImhhbmRsZS1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGFuZGxlLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJleGl0Um9vbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+562S5pGE5YOP5aS0PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvbi1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7nrZLmkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoYW5kbGUtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+562S5pGE5YOP5aS0PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvbi1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7nrZLmkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoYW5kbGUtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ1dHRvbi10ZXh0XCI+562S5pGE5YOP5aS0PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnV0dG9uLXRleHRcIj7nrZLmkYTlg4/lpLQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPCEtLSAgICAgICAgPHZpZXcgY2xhc3M9XCJ3YXRpbmdcIiB2LWlmPVwid2luZG93U3RhdHVzPT09MFwiIEBjbGljaz1cIndpbmRvd1N0YXR1cz0xXCI+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gd2F0aW5nLXRpcHNcIiA+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+562J5b6F5o6l5ZCsLi4uPC90ZXh0Pi0tPlxyXG4gICAgICAgIDwhLS0gICAgICAgICAgICA8L3ZpZXc+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gYW5zd2VyXCIgQGNsaWNrPVwiXCI+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5o6l5ZCsPC90ZXh0Pi0tPlxyXG4gICAgICAgIDwhLS0gICAgICAgICAgICA8L3ZpZXc+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidy1idXR0b24gcmVmdXNlXCIgQGNsaWNrPVwiXCI+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInctYi10ZXh0XCI+5ouS57udPC90ZXh0Pi0tPlxyXG4gICAgICAgIDwhLS0gICAgICAgICAgICA8L3ZpZXc+LS0+XHJcbiAgICAgICAgPCEtLSAgICAgICAgPC92aWV3Pi0tPlxyXG4gICAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy/mj5Lku7blr7nosaFcclxuXHJcbmltcG9ydCB7U0RLX0FQUF9JRH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgcmVxdWVzdF9nZXRVc2VyU2lnXHJcbn0gZnJvbSAnLi4vLi4vY29tbW9uL2h0dHBzLmpzJ1xyXG5cclxudmFyIHNka3d4ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ1RYVFJUQy1TZGtXWCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlb0hlaWdodDogMCxcclxuICAgICAgICAgICAgc2RrQXBwSWQ6IDE0MDA0NDA5OTUsXHJcbiAgICAgICAgICAgIHJvb21JZDogJycsXHJcbiAgICAgICAgICAgIHZ2aDogMTAwLFxyXG4gICAgICAgICAgICBsb2NhbFVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIGxvY2FsVXNlclNpZzogJycsXHJcbiAgICAgICAgICAgIHJlbW90ZVVzZXJJZDogJycsXHJcbiAgICAgICAgICAgIHJlbW90ZVVzZXJTaWc6ICcnLFxyXG4gICAgICAgICAgICB3YXRpbmdTdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIHB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdhdGluZ0hlaWdodDogMCxcclxuICAgICAgICAgICAgd2F0aW5nV2lkdGg6IDAsXHJcblxyXG4gICAgICAgICAgICBjYWxsSW5mbzoge30sXHJcbiAgICAgICAgICAgIGlubmVyQXVkaW9Db250ZXh0OiB7fSxcclxuXHJcbiAgICAgICAgICAgIGhhc011dGVBdWRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc011dGVWaWRlbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc011dGVDYWxsaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHdpbmRvd1N0YXR1czogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gb25CYWNrUHJlc3Mob3B0aW9ucykge1xyXG4gICAgLy8gXHRpZiAob3B0aW9ucy5mcm9tID09PSAnbmF2aWdhdGVCYWNrJykge1xyXG4gICAgLy8gXHRcdHJldHVybiBmYWxzZVxyXG4gICAgLy8gXHR9XHJcblxyXG4gICAgLy8gXHR1bmkuc2hvd01vZGFsKHtcclxuICAgIC8vIFx0XHR0aXRsZTogJ+aPkOekuicsXHJcbiAgICAvLyBcdFx0Y29udGVudDogJ+Wwhue7k+adn+mAmuivne+8jOaYr+WQpuehruWumu+8nycsXHJcbiAgICAvLyBcdFx0c3VjY2VzczogZSA9PiB7XHJcbiAgICAvLyBcdFx0XHRpZiAoZS5jb25maXJtKSB7XHJcbiAgICAvLyBcdFx0XHRcdHRoaXMuaHVuZ3VwQ2FsbGluZygpXHJcbiAgICAvLyBcdFx0XHR9XHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy8gXHR9KVxyXG5cclxuICAgIC8vIFx0cmV0dXJuIHRydWVcclxuICAgIC8vIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHdpbmRvd1N0YXR1cyhlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBlJiZ0aGlzLmVudGVyUm9vbSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChvKSB7XHJcbiAgICAgICAgdW5pLmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2F0aW5nV2lkdGggPSBlLndpbmRvd1dpZHRoXHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdGluZ0hlaWdodCA9IGUud2luZG93SGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNhbGxJbmZvID0gb1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvb21JZCA9IG8ucmVjb3JkSWQgLy8g55eF5L6LSWTkvZzkuLrmiL/pl7RJZFxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxVc2VySWQgPSBvW28ucm9sZSArICdJZCddIC8vIOacrOacuui0puWPt1xyXG4gICAgICAgIC8vIHRoaXMucmVtb3RlVXNlcklkID0gb1tvLnJlbW90ZVJvbGUgKyAnSWQnXVxyXG5cclxuICAgICAgICAvL+mihOWKoOi9veetvuWQjVxyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tTaWcoKVxyXG5cclxuICAgICAgICAvL+ajgOafpeadg+mZkFxyXG4gICAgICAgIHNka3d4LmNoZWNrUGVybWlzc2lvbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruS6i+S7tuWbnuiwg1xyXG4gICAgICAgIHNka3d4LnNldExpc3RlbmVyKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy50eXBlID09IFwib25FbnRlclJvb21cIikge1xyXG4gICAgICAgICAgICAgICAgLy/ov5vlhaXmiL/pl7Tlm57osINcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLnR5cGUgPT0gXCJvbkV4aXRSb29tXCIpIHtcclxuICAgICAgICAgICAgICAgIC8v56a75byA5oi/6Ze05Zue6LCDXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09IFwib25Td2l0Y2hSb2xlXCIpIHtcclxuICAgICAgICAgICAgICAgIC8v6KeS6Imy6L2s5o2i5Zue6LCDXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50eXBlID09IFwib25Vc2VyVmlkZW9BdmFpbGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgLy/ov5znq6/nlKjmiLfop4bpopHlj6/nlKjlm57osINcclxuICAgICAgICAgICAgICAgIHRoaXMub25Vc2VyVmlkZW9BdmFpbGFibGUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmV4aXRSb29tKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVQZXJtaXNzaW9uKCkge1xyXG4gICAgICAgICAgICBzZGt3eC5jaGVja1Blcm1pc3Npb24oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblVzZXJWaWRlb0F2YWlsYWJsZShkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VySWQgPSBkYXRhLnVzZXJJZDtcclxuICAgICAgICAgICAgdmFyIGF2YWlsYWJsZSA9IGRhdGEuYXZhaWxhYmxlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlbW90ZVZpZGVvVmlldyA9IHRoaXMuJHJlZnMucmVtb3RlVmlkZW9WaWV3O1xyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW90ZVZpZGVvSGVpZ2h0ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgcmVtb3RlVmlkZW9WaWV3LnN0YXJ0UmVtb3RlVmlldyh1c2VySWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdGVWaWRlb0hlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVWaWRlb1ZpZXcuc3RvcFJlbW90ZVZpZXcodXNlcklkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW50ZXJSb29tKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzID0gRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICByZXF1ZXN0X2dldFVzZXJTaWcoe1xyXG4gICAgICAgICAgICAgICAgdW5pLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjZW5lID0gMDsgLy/op4bpopHpgJror50gPSAwO+inhumikeS6kuWKqOebtOaSrSA9IDE76K+t6Z+z6YCa6K+dID0gMjvor63pn7PkupLliqjnm7Tmkq0gPSAzO1xyXG4gICAgICAgICAgICAgICAgc2Rrd3guZW50ZXJSb29tKHtcclxuICAgICAgICAgICAgICAgICAgICBzZGtBcHBJZDogU0RLX0FQUF9JRCxcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6IDExMTExLCAvLyDlj6rog73kuLrmlbDlrZfmiJbogIXlj6/ovazljJbkuLrmlbDlrZdcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAyMCwgLy8yMOS4u+aSrSAyMSDop4LkvJdcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTaWc6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICB9LCBzY2VuZSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VmlkZW8oKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRWaWRlbygpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09JylcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gLy/orr7nva7op5LoibLkuLvmkq1cclxuICAgICAgICAgICAgICAgIC8vIHNka3d4LnN3aXRjaFJvbGUoMjApOyAvLzIw5Li75pKtIDIxIOinguS8l1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5byA5ZCv6Z+z6aKRXHJcbiAgICAgICAgICAgICAgICBzZGt3eC5zdGFydExvY2FsQXVkaW8oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+inhumikVxyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvVmlldyA9IHRoaXMuJHJlZnMudmlkZW9WaWV3O1xyXG4gICAgICAgICAgICAgICAgdmlkZW9WaWV3LnN0YXJ0TG9jYWxQcmV2aWV3KHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcExvY2FsUHJldmlldygpIHtcclxuICAgICAgICAgICAgLy/lgZzmraLpn7PpopFcclxuICAgICAgICAgICAgc2Rrd3guc3RvcExvY2FsQXVkaW8oKTtcclxuXHJcbiAgICAgICAgICAgIC8v5YGc5q2i6KeG6aKRXHJcbiAgICAgICAgICAgIHZhciB2aWRlb1ZpZXcgPSB0aGlzLiRyZWZzLnZpZGVvVmlldztcclxuICAgICAgICAgICAgdmlkZW9WaWV3LnN0b3BMb2NhbFByZXZpZXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BWaWRlbygpIHtcclxuICAgICAgICAgICAgLy8gLy/orr7nva7op5LoibLop4LkvJdcclxuICAgICAgICAgICAgLy8gc2Rrd3guc3dpdGNoUm9sZSgyMCk7IC8vMjDkuLvmkq0gMjEg6KeC5LyXXHJcblxyXG4gICAgICAgICAgICAvL+WBnOatoumfs+mikVxyXG4gICAgICAgICAgICBzZGt3eC5zdG9wTG9jYWxBdWRpbygpO1xyXG5cclxuICAgICAgICAgICAgLy/lgZzmraLop4bpopFcclxuICAgICAgICAgICAgdmFyIHZpZGVvVmlldyA9IHRoaXMuJHJlZnMudmlkZW9WaWV3O1xyXG4gICAgICAgICAgICB2aWRlb1ZpZXcgJiYgdmlkZW9WaWV3LnN0b3BMb2NhbFByZXZpZXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4aXRSb29tKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BWaWRlbygpXHJcbiAgICAgICAgICAgIC8v6YCA5Ye65oi/6Ze0XHJcbiAgICAgICAgICAgIHNka3d4LmV4aXRSb29tKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZUdyb3VwKCkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGpvaW5Hcm91cCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7fVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi52aWRlby12aWV3IHtcclxufVxyXG5cclxuLnJlbW90ZS12aWV3IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgZmxleDogODtcclxuXHJcbn1cclxuXHJcbi5ib3R0b20tb3V0ZXIge1xyXG4gICAgZmxleDogMjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5sb2NhbC12aWV3IHtcclxuICAgIGZsZXg6IDM7XHJcbn1cclxuXHJcbi5oYW5kbGUtb3V0ZXIge1xyXG4gICAgZmxleDogNztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmhhbmRsZS1idXR0b25zIHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXN0eWxlIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAxcHggcmdiYSgxMTIsIDIxNiwgMjAxLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDExNGRlZywgIzcwZDhjOSAwJSwgJGJhc2UtY29sb3IgNzQlKTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5idXR0b24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuLndhdGluZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC53LWJ1dHRvbnMge1xyXG4vLyBcdGhlaWdodDogMTAwcHg7XHJcbi8vIFx0d2lkdGg6IDMwMHB4O1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuLnctYnV0dG9uIHtcclxuICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFuc3dlciB7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWZ1c2Uge1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4ud2F0aW5nLWFuc3dlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi53YXRpbmctdGlwcyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDQwMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4udy1iLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!************************************************************************************************************!*\
  !*** C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./test.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_test_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/GF/Work/kangying/KangYingDoctor/pages/test/test.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "backgroundColor": "#5EB6AA",
    "boxShadow": "0px 0px 19px 1px rgba(112, 216, 201, 0.1)",
    "backgroundImage": "linear-gradient(114deg, #70d8c9 0%, #5EB6AA 74%)"
  },
  "button-text": {
    "fontSize": "14",
    "color": "#666666"
  },
  "wating": {
    "position": "fixed",
    "backgroundColor": "#5EB6AA",
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