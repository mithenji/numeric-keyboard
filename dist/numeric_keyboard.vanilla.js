(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NumericKeyboard", [], factory);
	else if(typeof exports === 'object')
		exports["NumericKeyboard"] = factory();
	else
		root["NumericKeyboard"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return lib_keys_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericKeyboard", function() { return _keyboard_js__WEBPACK_IMPORTED_MODULE_1__["NumericKeyboard"]; });

/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _input_js__WEBPACK_IMPORTED_MODULE_2__["NumericInput"]; });






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return DOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESC", function() { return ESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLANK", function() { return BLANK; });
var ZERO = '0';
var ONE = '1';
var TWO = '2';
var THREE = '3';
var FOUR = '4';
var FIVE = '5';
var SIX = '6';
var SEVEN = '7';
var EIGHT = '8';
var NINE = '9';
var DOT = '.';
var DEL = 'del';
var ENTER = 'enter';
var ESC = 'esc';
var BLANK = '';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericKeyboard", function() { return NumericKeyboard; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51);
/* harmony import */ var lib_utils_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
/* harmony import */ var lib_keyboard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82);
/* harmony import */ var lib_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86);
/* harmony import */ var lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lib_styles_keyboard_styl__WEBPACK_IMPORTED_MODULE_11__);







 // eslint-disable-line no-unused-vars






var Parent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Parent, _Component);

  function Parent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Parent);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Parent).apply(this, arguments));
  }

  return Parent;
}(lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object.assign(Parent.prototype, lib_keyboard_js__WEBPACK_IMPORTED_MODULE_9__["Mixins"]);
var NumericKeyboard =
/*#__PURE__*/
function (_Parent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(NumericKeyboard, _Parent);

  function NumericKeyboard(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NumericKeyboard);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(NumericKeyboard).call(this, props));

    _this.init(_this.props);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(NumericKeyboard, [{
    key: "onTouchend",
    value: function onTouchend(key, event) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(NumericKeyboard.prototype), "onTouchend", this).call(this, key, event);

      event.stopPropagation();
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, payload) {
      var callback = this.props["on".concat(Object(lib_utils_string__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(event))];

      if (callback) {
        callback(payload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__["createElement"])("table", {
        className: "numeric-keyboard"
      }, Object(lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__["createElement"])("tbody", null, this.ks.resolvedLayout.map(function (r, i) {
        return Object(lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__["createElement"])("tr", {
          key: i
        }, r.map(function (c) {
          return Object(lib_utils_vdom__WEBPACK_IMPORTED_MODULE_7__["createElement"])("td", {
            key: c.key,
            rowSpan: c.rowspan,
            colSpan: c.colspan,
            "data-key": c.key,
            "data-icon": c.key === lib_keys_js__WEBPACK_IMPORTED_MODULE_10__["ENTER"] ? _this2.kp.entertext : c.key,
            className: "numeric-keyboard-key",
            onTouchEnd: function onTouchEnd(e) {
              return _this2.onTouchend(c.key, e);
            }
          });
        }));
      })));
    }
  }]);

  return NumericKeyboard;
}(Parent);
NumericKeyboard.defaultProps = lib_keyboard_js__WEBPACK_IMPORTED_MODULE_9__["Options"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(5);

var superPropBase = __webpack_require__(6);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(5);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(29) });


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(10);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(21);
var ctx = __webpack_require__(27);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(15);
var toPrimitive = __webpack_require__(19);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(11);
var has = __webpack_require__(22);
var SRC = __webpack_require__(23)('src');
var $toString = __webpack_require__(24);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25)('native-function-to-string', Function.toString);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);
var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(26) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(43);
var toObject = __webpack_require__(44);
var IObject = __webpack_require__(33);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(31);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(33);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(34);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(47);

var assertThisInitialized = __webpack_require__(48);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(50);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffAndPatch", function() { return diffAndPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return VText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return VNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VComponent", function() { return VComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diff", function() { return Diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patch", function() { return Patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchType", function() { return PatchType; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74);











var REventProperty = /^on(?=[A-Z])/;
var HTMLAttrFix = {
  className: 'class',
  htmlFor: 'for'
};
var PatchType = {
  INSERT: 'insert',
  PROPS: 'props',
  REMOVE: 'remove',
  REORDER: 'reorder',
  REPLACE: 'replace'
};

var VText =
/*#__PURE__*/
function () {
  function VText(text) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, VText);

    this.text = text;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(VText, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "key",
    value: function key(index) {
      this.key = this.text || index;
    }
  }, {
    key: "render",
    value: function render() {
      return document.createTextNode(this.text);
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "transition",
    value: function transition() {}
  }]);

  return VText;
}();

var VNode =
/*#__PURE__*/
function () {
  function VNode(tagName, props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, VNode);

    this.tagName = tagName;
    this.props = props || {};

    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    this.children = this.resolveChildren(children);
    this._element = null;
    this._events = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(VNode, [{
    key: "destroy",
    value: function destroy() {
      for (var event in this._events) {
        var handlers = this._events[event];

        for (var i = 0; i < handlers.length; i++) {
          this._element.removeEventListener(event, handlers[i]);
        }

        delete this._events[event];
      }
    }
  }, {
    key: "key",
    value: function key(index) {
      this.key = this.props['key'] || index;
    }
  }, {
    key: "resolveProps",
    value: function resolveProps(props) {
      var attributes = {};
      var styles = {};
      var events = {};

      for (var name in props) {
        if (REventProperty.test(name)) {
          events[name.slice(2).toLowerCase()] = props[name];
        } else if (name === 'style') {
          styles = props[name];
        } else {
          attributes[HTMLAttrFix[name] || name] = props[name];
        }
      }

      return {
        attributes: attributes,
        styles: styles,
        events: events
      };
    }
  }, {
    key: "resolveChildren",
    value: function resolveChildren(children) {
      var resolvedChildren = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (!child) {
          continue;
        }

        if (Array.isArray(child)) {
          child.unshift(1);
          child.unshift(i);
          Array.prototype.splice.apply(children, child);
          i--;
        } else {
          if (Object(child) !== child) {
            child = new VText(child);
          }

          child.key(i);
          resolvedChildren.push(child);
        }
      }

      return resolvedChildren;
    }
  }, {
    key: "addEvent",
    value: function addEvent(event, handler) {
      var handlers = this._events[event] || [];

      if (handler == null) {
        for (var i = 0; i < handlers.length; i++) {
          this._element.removeEventListener(event, handlers[i]);
        }

        delete this._events[event];
      } else {
        this._element.addEventListener(event, handler, false);

        this._events[event] = handlers.concat(handler);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$resolveProps = this.resolveProps(this.props),
          attributes = _this$resolveProps.attributes,
          styles = _this$resolveProps.styles,
          events = _this$resolveProps.events;

      var element = this._element = document.createElement(this.tagName);

      for (var name in attributes) {
        attributes[name] != null && element.setAttribute(name, Object(_string_js__WEBPACK_IMPORTED_MODULE_9__["toString"])(attributes[name]));
      }

      for (var _name in styles) {
        element.style[_name] = styles[_name];
      }

      for (var _name2 in events) {
        this.addEvent(_name2, events[_name2]);
      }

      for (var i = 0; i < this.children.length; i++) {
        element.appendChild(this.children[i].render());
      }

      return element;
    }
  }, {
    key: "update",
    value: function update(props) {
      var _this$resolveProps2 = this.resolveProps(props),
          attributes = _this$resolveProps2.attributes,
          styles = _this$resolveProps2.styles,
          events = _this$resolveProps2.events;

      for (var name in attributes) {
        var value = attributes[name];

        if (value == null) {
          this._element.removeAttribute(name);
        } else {
          this._element.setAttribute(name, Object(_string_js__WEBPACK_IMPORTED_MODULE_9__["toString"])(value));
        }
      }

      for (var _name3 in styles) {
        this._element.style[_name3] = styles[_name3];
      }

      for (var _name4 in events) {
        this.addEvent(_name4, events[_name4]);
      }
    }
  }, {
    key: "transition",
    value: function transition(vnode) {
      vnode._element = this._element;
    }
  }]);

  return VNode;
}();

var VComponent =
/*#__PURE__*/
function () {
  function VComponent(component) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, VComponent);

    this.component = component;
    this.props = props;
    this._component = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(VComponent, [{
    key: "destroy",
    value: function destroy() {
      this._component.destroy();
    }
  }, {
    key: "key",
    value: function key(index) {
      this.key = this.props['key'] || index;
    }
  }, {
    key: "render",
    value: function render() {
      var component = this._component = new this.component(this.props);
      component.mount();
      return component._element;
    }
  }, {
    key: "update",
    value: function update(props) {
      this._component.setProps(props);
    }
  }, {
    key: "transition",
    value: function transition(vcomponent) {
      vcomponent._component = this._component;
    }
  }]);

  return VComponent;
}();

var Diff =
/*#__PURE__*/
function () {
  function Diff(a, b) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Diff);

    this.index = -1;
    this.patches = {};
    this.walk(a, b);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Diff, [{
    key: "walk",
    value: function walk(a, b) {
      if (!a || !b) {
        return;
      }

      var patch = [],
          index = ++this.index;

      try {
        if (a.constructor !== b.constructor) {
          patch.push({
            type: PatchType.REPLACE,
            oldNode: a,
            newNode: b
          });
          return;
        }

        if (a.constructor === VText) {
          if (a.text !== b.text) {
            patch.push({
              type: PatchType.REPLACE,
              oldNode: a,
              newNode: b
            });
          }

          return;
        }

        if (a.constructor === VNode) {
          if (a.tagName !== b.tagName) {
            patch.push({
              type: PatchType.REPLACE,
              oldNode: a,
              newNode: b
            });
            return;
          }

          var diffProps = this.diffProps(a.props, b.props);

          if (diffProps) {
            patch.push({
              type: PatchType.PROPS,
              props: diffProps,
              oldNode: a,
              newNode: b
            });
          }

          var diffChildren = this.diffChildren(a.children, b.children);

          if (diffChildren.move.length) {
            patch.push({
              type: PatchType.REORDER,
              move: diffChildren.move
            });
          }

          for (var i = 0; i < b.children.length; i++) {
            this.walk(diffChildren.children[i], b.children[i]);
          }

          return;
        }

        if (a.constructor === VComponent) {
          if (a.component !== b.component) {
            patch.push({
              type: PatchType.REPLACE,
              oldNode: a,
              newNode: b
            });
            return;
          }

          var _diffProps = this.diffProps(a.props, b.props);

          if (_diffProps) {
            patch.push({
              type: PatchType.PROPS,
              props: _diffProps,
              oldNode: a,
              newNode: b
            });
          }
        }
      } catch (e) {
        throw e;
      } finally {
        if (patch.length) {
          this.patches[index] = patch;
        }
      }
    }
  }, {
    key: "diffProps",
    value: function diffProps(oldProps, newProps) {
      var diffProps = {};

      for (var name in oldProps) {
        var oldValue = oldProps[name];
        var newValue = newProps[name];

        if (!(name in newProps)) {
          diffProps[name] = null;
        } else if (Object(_type_js__WEBPACK_IMPORTED_MODULE_10__["isPlainObject"])(oldValue) && Object(_type_js__WEBPACK_IMPORTED_MODULE_10__["isPlainObject"])(newValue)) {
          var dp = this.diffProps(oldValue, newValue);

          if (dp) {
            diffProps[name] = newValue;
          }
        } else if (typeof oldValue === 'function' && typeof newValue === 'function') {
          if (oldValue !== newValue && oldValue.toString() !== newValue.toString()) {
            diffProps[name] = newValue;
          }
        } else if (oldValue !== newValue) {
          diffProps[name] = newValue;
        }
      }

      for (var _name5 in newProps) {
        if (!(_name5 in oldProps)) {
          diffProps[_name5] = newProps[_name5];
        }
      }

      return !Object(_type_js__WEBPACK_IMPORTED_MODULE_10__["isEmptyObject"])(diffProps) && diffProps;
    }
  }, {
    key: "diffChildren",
    value: function diffChildren(oldChildren, newChildren) {
      function getIndex(list) {
        var hash = {};

        for (var _i = 0; _i < list.length; _i++) {
          hash[list[_i].key] = _i;
        }

        return hash;
      }

      var oldIndex = getIndex(oldChildren);
      var newIndex = getIndex(newChildren);
      var transChildren = [],
          children = [],
          move = [];

      for (var _i2 = 0; _i2 < oldChildren.length; _i2++) {
        var node = oldChildren[_i2];

        if (newIndex[node.key] > -1) {
          transChildren.push(newChildren[newIndex[node.key]]);
        } else {
          move.push({
            type: PatchType.REMOVE,
            node: node,
            index: _i2
          });
        }
      }

      var i = 0,
          j = 0;

      for (; i < newChildren.length; i++) {
        var _node = newChildren[i];

        if (transChildren[j] && transChildren[j].key === _node.key) {
          children[i] = oldChildren[oldIndex[_node.key]];
          j++;
        } else {
          move.push({
            type: PatchType.INSERT,
            node: _node,
            index: i
          });
        }
      }

      while (transChildren[j]) {
        move.push({
          type: PatchType.REMOVE,
          node: transChildren[j],
          index: i
        });
        j++;
      }

      return {
        move: move,
        children: children
      };
    }
  }]);

  return Diff;
}();

var Patch =
/*#__PURE__*/
function () {
  function Patch(node, patches) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Patch);

    this.root = node;
    this.patches = patches;
    this.patchesRemaining = Object.keys(patches).length;
    this.index = -1;
    this.walk(node);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Patch, [{
    key: "walk",
    value: function walk(node) {
      var index = ++this.index;
      var patch = this.patches[index];

      if (patch) {
        this.applyPatch(node, patch);
        this.patchesRemaining--;
      }

      if (this.patchesRemaining > 0 && (this.root === node || node.nodeType === 1 && !node.__component)) {
        var childNodes = node.childNodes;

        for (var i = 0; i < childNodes.length; i++) {
          if (this.walk(childNodes[i])) {
            break;
          }
        }
      }

      return this.patchesRemaining === 0;
    }
  }, {
    key: "applyPatch",
    value: function applyPatch(node, patches) {
      for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];

        switch (patch.type) {
          case PatchType.PROPS:
            this.patchProps(node, patch);
            break;

          case PatchType.REPLACE:
            this.patchReplace(node, patch);
            break;

          case PatchType.REORDER:
            this.patchReorder(node, patch);
            break;
        }
      }
    }
  }, {
    key: "patchProps",
    value: function patchProps(node, patch) {
      patch.oldNode.transition(patch.newNode);
      patch.oldNode.update(patch.props);
    }
  }, {
    key: "patchReplace",
    value: function patchReplace(node, patch) {
      patch.oldNode.destroy();
      node.parentNode.replaceChild(patch.newNode.render(), node);
    }
  }, {
    key: "patchReorder",
    value: function patchReorder(node, patch) {
      var childNodes = node.childNodes;
      var move = patch.move;
      var domActions = [];

      for (var i = 0; i < move.length; i++) {
        var _patch = move[i]; // if (patch.type === PatchType.REMOVE) {
        //   patch.node.destroy()
        //   domActions.push({ method: 'removeChild', args: [childNodes[patch.index]] })
        // }
        // else if (patch.type === PatchType.INSERT) {
        //   domActions.push({ method: 'insertBefore', args: [patch.node.render(), childNodes[patch.index]] })
        // }

        if (_patch.type === PatchType.REMOVE) {
          _patch.node.destroy();

          node.removeChild(childNodes[_patch.index]);
        } else if (_patch.type === PatchType.INSERT) {
          node.insertBefore(_patch.node.render(), node.childNodes[_patch.index]);
        }
      }

      for (var _i3 = 0; _i3 < domActions.length; _i3++) {
        node[domActions[_i3].method].apply(node, domActions[_i3].args);
      }
    }
  }]);

  return Patch;
}();

function createElement(type, props) {
  if (typeof type === 'string') {
    for (var _len2 = arguments.length, children = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      children[_key2 - 2] = arguments[_key2];
    }

    return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(VNode, [type, props].concat(children));
  } else if (Object.getPrototypeOf(type) === Component) {
    return new VComponent(type, props);
  } else {
    return new VText(type);
  }
}

function diffAndPatch(element, oldTree, newTree) {
  var patches = new Diff(oldTree, newTree).patches;
  new Patch(element, patches);
}

var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Component);

    this.props = Object.assign({}, this.constructor.defaultProps, props);
    this.state = {};
    this._events = {};
    this._vtree = null;
    this._element = null;
    this._renderTimer = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Component, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "mount",
    value: function mount(selector) {
      function renderDOM(vtree) {
        var element = vtree.render();

        if (vtree.children) {
          for (var i = 0; i < vtree.children.length; i++) {
            renderDOM(vtree.children[i]);
          }
        }

        return element;
      }

      this._vtree = this.render();
      this._element = renderDOM(this._vtree);
      this._element.component = 'component';

      if (selector) {
        var element = document.querySelector(selector);
        element.parentNode.replaceChild(this._element, element);
      }

      this.mounted(this._element);
    }
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "setProps",
    value: function setProps(props) {
      Object.assign(this.props, props);
      diffAndPatch(this._element, this._vtree, this._vtree = this.render());
      this.updated();
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var _this = this;

      Object.assign(this.state, state);

      if (this._renderTimer) {
        return;
      }

      this._renderTimer = setTimeout(function () {
        diffAndPatch(_this._element, _this._vtree, _this._vtree = _this.render());
        _this._renderTimer = null;

        _this.updated();
      }, 100);
    }
  }, {
    key: "updated",
    value: function updated() {}
  }, {
    key: "render",
    value: function render() {
      return createElement(new VText(''));
    }
  }]);

  return Component;
}();



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(50);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(54);
var getKeys = __webpack_require__(30);
var redefine = __webpack_require__(21);
var global = __webpack_require__(9);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(58);
var wks = __webpack_require__(56);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(55);
var step = __webpack_require__(57);
var Iterators = __webpack_require__(58);
var toIObject = __webpack_require__(32);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(59)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(56)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(21);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(58);
var $iterCreate = __webpack_require__(60);
var setToStringTag = __webpack_require__(64);
var getPrototypeOf = __webpack_require__(65);
var ITERATOR = __webpack_require__(56)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(61);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(64);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(56)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(56)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(44);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(44);
var $keys = __webpack_require__(30);

__webpack_require__(67)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(10);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(69);
var anObject = __webpack_require__(13);
var $flags = __webpack_require__(70);
var DESCRIPTORS = __webpack_require__(16);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(21)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(17)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(16) && /./g.flags != 'g') __webpack_require__(12).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(70)
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(13);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(72);
var test = {};
test[__webpack_require__(56)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(21)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(34);
var TAG = __webpack_require__(56)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);


var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
};
var toString = function toString(obj) {
  if (Object(obj) === obj) {
    return Object.prototype.toString.call(obj);
  }

  return obj == null ? '' : obj.toString();
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeofConstructor", function() { return typeofConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);



var RType = /[a-z]+(?=])/i;
var typeofConstructor = function typeofConstructor(data) {
  return eval(Object.prototype.toString.call(data).match(RType)[0]);
};
var isPlainObject = function isPlainObject(obj) {
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false;
  }

  var proto = Object.getPrototypeOf(obj);
  return proto == null || proto.hasOwnProperty('constructor') && proto.constructor === Object.prototype.constructor;
};
var isEmptyObject = function isEmptyObject(obj) {
  for (var name in obj) {
    return false;
  }

  return true;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(13);
var toLength = __webpack_require__(37);
var advanceStringIndex = __webpack_require__(76);
var regExpExec = __webpack_require__(78);

// @@match logic
__webpack_require__(79)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(77)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(72);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(80);
var redefine = __webpack_require__(21);
var hide = __webpack_require__(11);
var fails = __webpack_require__(17);
var defined = __webpack_require__(35);
var wks = __webpack_require__(56);
var regexpExec = __webpack_require__(81);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(81);
__webpack_require__(8)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(70);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _layouts_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


var Options = {
  layout: 'number',
  entertext: 'enter'
};
var Mixins = {
  init: function init(options) {
    var layout = options.layout;
    var resolvedLayout;

    if (typeof layout === 'string') {
      resolvedLayout = _layouts_index_js__WEBPACK_IMPORTED_MODULE_1__["default"][layout];

      if (!Array.isArray(resolvedLayout)) {
        throw new Error("".concat(layout, " is not a build-in layout."));
      }
    } else {
      resolvedLayout = layout;

      if (!Array.isArray(resolvedLayout) || !resolvedLayout.every(function (i) {
        return Array.isArray(i);
      })) {
        throw new Error("custom layout must be a two-dimensional array.");
      }
    }

    this.kp = options;
    this.ks = {
      resolvedLayout: resolvedLayout
    };
  },
  destroy: function destroy() {},
  set: function set(key, value) {
    this.ks[key] = value;
  },
  onTouchend: function onTouchend(key) {
    this.dispatch('press', key);

    if (key === _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) {
      this.dispatch('enterpress');
    }
  },
  dispatch: function dispatch()
  /* event, payload */
  {
    throw new Error('dispatch method must be overrided!');
  }
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _tel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);


/* harmony default export */ __webpack_exports__["default"] = ({
  number: _number_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  tel: _tel_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ([[{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ONE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["TWO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["THREE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DEL"],
  rowspan: 2
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FOUR"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FIVE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SIX"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SEVEN"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["EIGHT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["NINE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"],
  rowspan: 2
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DOT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ZERO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ESC"]
}]]);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = ([[{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ONE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["TWO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["THREE"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FOUR"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["FIVE"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SIX"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["SEVEN"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["EIGHT"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["NINE"]
}], [{
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["DEL"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ZERO"]
}, {
  key: _keys_js__WEBPACK_IMPORTED_MODULE_0__["ENTER"]
}]]);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(91)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(false);
// Imports
var urlEscape = __webpack_require__(89);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(90));

// Module
exports.push([module.i, "@font-face {\n  font-family: numeric-keyboard;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n.numeric-keyboard {\n  width: 100%;\n  height: 100%;\n  background: #cdd3da;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 10px;\n  font-size: 1.6em;\n  text-align: center;\n}\n.numeric-keyboard-key {\n  touch-action: manipulation;\n  transition: background 0.5s;\n  border-radius: 6px;\n  color: #000;\n  background: #feffff;\n  box-shadow: 1px 1px 3px 0 rgba(168,174,181,0.741);\n}\n.numeric-keyboard-key:active {\n  background: #929ca8;\n}\n.numeric-keyboard-key[data-key=\"\"] {\n  pointer-events: none;\n}\n.numeric-keyboard-key[data-key=enter] {\n  color: #fff;\n  background: #007aff;\n}\n.numeric-keyboard-key[data-key=enter]:active {\n  background: #0051a8;\n}\n.numeric-keyboard-key[data-icon]::before {\n  content: attr(data-icon);\n}\n.numeric-keyboard-key[data-icon=del]::before,\n.numeric-keyboard-key[data-icon=esc]::before {\n  font-family: numeric-keyboard !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  letter-spacing: 0;\n  -webkit-font-feature-settings: \"liga\";\n  font-feature-settings: \"liga\";\n  -webkit-font-variant-ligatures: discretionary-ligatures;\n  font-variant-ligatures: discretionary-ligatures;\n  -webkit-font-smoothing: antialiased;\n}\n", ""]);



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAAfsAAwAAAAAB5wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAHIAAABy2arcWE9TLzIAAAGQAAAAYAAAAGAPEgWBY21hcAAAAfAAAABsAAAAbOm3AapnYXNwAAACXAAAAAgAAAAIAAAAEGdseWYAAAJkAAACfAAAAnw0f1YEaGVhZAAABOAAAAA2AAAANg8HzfloaGVhAAAFGAAAACQAAAAkB8IDzWhtdHgAAAU8AAAAMAAAADAOAABgbG9jYQAABWwAAAAaAAAAGgKeAfxtYXhwAAAFiAAAACAAAAAgAB4ATm5hbWUAAAWoAAACIgAAAiI2PD88cG9zdAAAB8wAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEADAADABYAIgAuAAEAAwAFAAYACwABAAQACQADAAYABwABAAQACgADAAgABAABAAQACgACAAsAAAADA1UBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABABQAAAAEAAQAAMAAAABACAAZQBsAHPpAv/9//8AAAAAACAAYwBsAHPpAP/9//8AAf/j/6H/m/+VFwkAAwABAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAADAGAAgAOgAwAAGwA8AEgAAAEhIgYHDgExDgEVFBYXMBYXHgEzITI2NRE0JiMTFAYHDgEjISImLwEuATU0Nj8BPgE3PgEzITIWFx4BFRElNycHJwcXBxc3FzcDFv62RlsrK2UICAgIVzk5T0QBSjpQUDpqEA8PJxX+tjE+KqsDBQUDphIkFBQpFwFKFScPDxD++X8df38df38df38dAwBUKytqCRUMDBYIXjk5SFQ6AWg6UP4OFigPEBEvLLIDCwcHCwOsEyINDg0PDxAmFv6Ysn8df34dfn4dfn8dAAAAABEAAABSBAADLgADAAgADAAQABQAGAAcACEAJgArADAANQA6AD8AQwBIAEsAACUhESEBIREhERMzFSM3MxUjNzMVIzczFSM3MxUjJTMVIzU7ARUjNTsBFSM1OwEVIzU7ARUjNTsBFSM1ATMVIzUhMxUjJSEVITUFBycEAPwABAD8LAOo/FiEV1eSWFiSWFiSWFiTV1f9bVhYk1dXklhYklhYk1dXklhY/TNYWAK+WFj91AHy/g4BbnV11gJY/dQCAP4AATNYWFhYWFhYWFjqV1dXV1dXV1dXV1dX/txYWFhYWFj5WFgAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAABAAAtcRXTXw889QALBAAAAAAA1fTE5wAAAADV9MTnAAAAAAQAAy4AAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAwEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAABgBAAAAAAAAAAAAAAAAAoAFAAeACgAMgA8AEYAUADAATQBPgAAAAEAAAAMAEwAEQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAUAAAAAQAAAAAAAgAHANUAAQAAAAAAAwAUAF0AAQAAAAAABAAUAOoAAQAAAAAABQALADwAAQAAAAAABgAUAJkAAQAAAAAACgAaASYAAwABBAkAAQAoABQAAwABBAkAAgAOANwAAwABBAkAAwAoAHEAAwABBAkABAAoAP4AAwABBAkABQAWAEcAAwABBAkABgAoAK0AAwABBAkACgA0AUB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGR2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(92);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 92 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return NumericInput; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51);
/* harmony import */ var lib_utils_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73);
/* harmony import */ var lib_input_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98);
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(106);
/* harmony import */ var lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lib_styles_input_styl__WEBPACK_IMPORTED_MODULE_15__);











 // eslint-disable-line no-unused-vars



 // eslint-disable-line no-unused-vars



var Parent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Parent, _Component);

  function Parent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Parent);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Parent).apply(this, arguments));
  }

  return Parent;
}(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object.assign(Parent.prototype, lib_input_js__WEBPACK_IMPORTED_MODULE_13__["Mixins"]);
var NumericInput =
/*#__PURE__*/
function (_Parent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(NumericInput, _Parent);

  function NumericInput(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, NumericInput);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NumericInput).call(this, props));

    _this.init(_this.props);

    _this.state = _this.ks;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NumericInput, [{
    key: "mounted",
    value: function mounted(element) {
      this.onMounted(element);
    }
  }, {
    key: "updated",
    value: function updated() {
      this.onUpdated();
    }
  }, {
    key: "setProps",
    value: function setProps(nextProps) {
      if (nextProps.value !== this.props.value && nextProps.value !== this.ks.value) {
        var rawValue = nextProps.value.toString().split('');
        var cursorPos = rawValue.length;
        this.set('rawValue', rawValue);
        this.set('cursorPos', cursorPos);
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NumericInput.prototype), "setProps", this).call(this, nextProps);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(NumericInput.prototype), "set", this).call(this, key, value);

      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
    }
  }, {
    key: "createKeyboard",
    value: function createKeyboard(el, options, events, callback) {
      for (var event in events) {
        options["on".concat(Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_12__["capitalize"])(event))] = events[event];
      }

      var keyboard = new _keyboard_js__WEBPACK_IMPORTED_MODULE_14__["NumericKeyboard"](options);
      keyboard.mount();
      el.appendChild(keyboard._element);
      callback(keyboard);
    }
  }, {
    key: "destroyKeyboard",
    value: function destroyKeyboard(el, keyboard) {
      keyboard.destroy();
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, payload) {
      var callback = this.props["on".concat(Object(lib_utils_string_js__WEBPACK_IMPORTED_MODULE_12__["capitalize"])(event))];

      if (callback) {
        callback(payload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = 'numeric-input';

      if (this.kp.readonly) {
        className += ' readonly';
      }

      if (this.kp.disabled) {
        className += ' disabled';
      }

      return Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", {
        className: className,
        onTouchEnd: this.onFocus.bind(this)
      }, Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", null, Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", {
        className: "numeric-input-text"
      }, this.ks.rawValue.map(function (c, i) {
        return Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("span", {
          key: i,
          "data-index": i
        }, c);
      })), this.ks.rawValue.length === 0 && Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", {
        className: "numeric-input-placeholder"
      }, this.kp.placeholder), this.ks.cursorActive && Object(lib_utils_vdom_js__WEBPACK_IMPORTED_MODULE_11__["createElement"])("div", {
        className: "numeric-input-cursor",
        style: {
          background: this.ks.cursorColor
        }
      })));
    }
  }]);

  return NumericInput;
}(Parent);
NumericInput.defaultProps = lib_input_js__WEBPACK_IMPORTED_MODULE_13__["Options"];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(96);
var anObject = __webpack_require__(13);
var speciesConstructor = __webpack_require__(97);
var advanceStringIndex = __webpack_require__(76);
var toLength = __webpack_require__(37);
var callRegExpExec = __webpack_require__(78);
var regexpExec = __webpack_require__(81);
var fails = __webpack_require__(17);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(79)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(14);
var cof = __webpack_require__(34);
var MATCH = __webpack_require__(56)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(56)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return Mixins; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _utils_animate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(105);






var RNumber = /^\d*(?:\.\d*)?$/;
var RTel = /^\d*$/;

var KeyboardCenter = function () {
  var activeInput;
  return {
    register: function register(input) {
      this.unregister();
      activeInput = input;
      document.addEventListener('touchend', this.unregister, false);
    },
    unregister: function unregister(e) {
      if (!activeInput) {
        return;
      }

      if (e && (activeInput.ks.inputElement.contains(e.target) || activeInput.ks.keyboardElement.contains(e.target))) {
        return;
      }

      activeInput.closeKeyboard();
      activeInput = null;
      document.removeEventListener('touchend', this.unregister, false);
    }
  };
}();

var Options = {
  type: 'number',
  value: '',
  autofocus: false,
  disabled: false,
  readonly: false,
  maxlength: Infinity,
  name: '',
  placeholder: '',
  format: '^',
  layout: 'number',
  entertext: 'enter'
};
var Mixins = {
  init: function init(options) {
    var formatFn = options.format;

    if (typeof formatFn === 'string') {
      formatFn = function (rformat) {
        return function (val) {
          return rformat.test(val);
        };
      }(new RegExp(options.format));
    }

    var value = options.value;
    var rawValue = value.toString().split('');
    var cursorPos = rawValue.length;
    this.time = null; // fix 按键过快 bug

    this.kp = options;
    this.ks = {
      formatFn: formatFn,
      value: value,
      rawValue: rawValue,
      cursorPos: cursorPos,
      cursorColor: null,
      cursorActive: false,
      keyboard: null,
      inputElement: null,
      keyboardElement: null
    };
  },
  destroy: function destroy() {
    KeyboardCenter.unregister();
  },
  set: function set(key, value) {
    this.ks[key] = value;
  },
  onMounted: function onMounted(el) {
    var _this = this;

    this.set('inputElement', el);
    this.set('cursorColor', window.getComputedStyle(el).getPropertyValue('color'));

    if (this.kp.autofocus && !this.kp.readonly && !this.kp.disabled) {
      setTimeout(function () {
        return _this.openKeyboard();
      }, 500);
    }
  },
  onUpdated: function onUpdated() {
    this.moveCursor();
  },
  onFocus: function onFocus(e) {
    e.stopPropagation();
    this.openKeyboard();
    var cursorPos = +e.target.dataset.index;
    this.set('cursorPos', isNaN(cursorPos) ? this.ks.rawValue.length : cursorPos);
  },
  input: function input(key) {
    var _this2 = this;

    this.time && clearTimeout(this.time);
    this.time = setTimeout(function () {
      var _this2$kp = _this2.kp,
          type = _this2$kp.type,
          maxlength = _this2$kp.maxlength;
      var _this2$ks = _this2.ks,
          rawValue = _this2$ks.rawValue,
          cursorPos = _this2$ks.cursorPos,
          formatFn = _this2$ks.formatFn;

      var input = function input(key) {
        var isAdd = typeof key !== 'undefined';
        var newRawValue = rawValue.slice();

        if (isAdd) {
          newRawValue.splice(cursorPos, 0, key);
        } else {
          newRawValue.splice(cursorPos - 1, 1);
        }

        var newValue = newRawValue.join('');

        if (formatFn(newValue)) {
          if (type === 'number') {
            if (!RNumber.test(newValue)) {
              return;
            }

            newValue = parseFloat(newValue, 10);

            if (isNaN(newValue)) {
              newValue = '';
            }
          } else if (newValue.length > maxlength || type === 'tel' && !RTel.test(newValue)) {
            return;
          }

          _this2.set('rawValue', newRawValue);

          _this2.set('cursorPos', isAdd ? cursorPos + 1 : cursorPos - 1);

          _this2.dispatch('input', newValue);
        }
      };

      switch (key) {
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["BLANK"]:
          break;

        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["ESC"]:
          _this2.closeKeyboard();

          break;

        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["ENTER"]:
          _this2.closeKeyboard();

          _this2.dispatch('enterpress');

          break;

        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["DEL"]:
          if (cursorPos > 0) {
            input();
          }

          break;

        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["DOT"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["ZERO"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["ONE"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["TWO"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["THREE"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["FOUR"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["FIVE"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["SIX"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["SEVEN"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["EIGHT"]:
        case _keys_js__WEBPACK_IMPORTED_MODULE_4__["NINE"]:
        default:
          input(key);
          break;
      }
    }, 20);
  },
  moveCursor: function moveCursor() {
    if (!this.ks.cursorActive) {
      return;
    }

    var elCursor = this.ks.inputElement.querySelector('.numeric-input-cursor');
    var elText = this.ks.inputElement.querySelector('.numeric-input-text');
    var elCharactor = elText.querySelector("span:nth-child(".concat(this.ks.cursorPos, ")"));

    if (!elCharactor) {
      elCursor.style.transform = 'translateX(0)';
      elText.style.transform = 'translateX(0)';
      return;
    }

    var cursorOffset = elCharactor.offsetLeft + elCharactor.offsetWidth;
    var maxVisibleWidth = elText.parentNode.offsetWidth;
    elCursor.style.transform = "translateX(".concat(Math.min(maxVisibleWidth - 1, cursorOffset), "px)");
    elText.style.transform = "translateX(".concat(Math.min(0, maxVisibleWidth - cursorOffset), "px)");
  },
  openKeyboard: function openKeyboard() {
    var _this3 = this;

    if (this.ks.keyboard) {
      return;
    }

    var elContainer = document.createElement('div'); //const elShadow = document.createElement('div');

    var elKeyboard = document.createElement('div');
    elContainer.style.cssText = 'z-index: 999; position:absolute; bottom:0; left:0; width:100%; height:33%;'; //elShadow.style.cssText = 'height:100%;';

    elKeyboard.style.cssText = 'position:absolute; top:0; right: 0; bottom: 0; left:0; ' + 'transform: translateY(100%); transition: transform 0.35s ease 0s; box-shadow: 1px -1px 3px 0px #6e717570;'; //elContainer.appendChild(elShadow);

    elContainer.appendChild(elKeyboard);
    document.body.appendChild(elContainer);
    this.createKeyboard(elKeyboard, {
      layout: this.kp.layout || this.kp.type,
      entertext: this.kp.entertext
    }, {
      press: this.input.bind(this)
    }, function (keyboard) {
      return _this3.set('keyboard', keyboard);
    });
    Object(_utils_animate_js__WEBPACK_IMPORTED_MODULE_5__["animate"])(function (timestamp, frame, frames) {
      elKeyboard.style.transform = "translateY(".concat((frames - frame) / frames * 100, "%)");
    }, function () {}, 10);
    this.set('keyboardElement', elKeyboard);
    this.set('cursorActive', true);
    this.set('cursorPos', this.ks.rawValue.length);
    this.dispatch('focus');
    KeyboardCenter.register(this);
  },
  closeKeyboard: function closeKeyboard() {
    var _this4 = this;

    if (!this.ks.keyboard) {
      return;
    }

    var keyboard = this.ks.keyboard;
    var elKeyboard = this.ks.keyboardElement;
    Object(_utils_animate_js__WEBPACK_IMPORTED_MODULE_5__["animate"])(function (timestamp, frame, frames) {
      elKeyboard.style.transform = "translateY(".concat(frame / frames * 100, "%)");
    }, function () {
      setTimeout(function () {
        _this4.destroyKeyboard(elKeyboard, keyboard);

        document.body.removeChild(elKeyboard.parentNode);
      }, 300);
    }, 10);
    this.set('keyboard', null);
    this.set('keyboardElement', null);
    this.set('cursorActive', false);
    this.set('cursorPos', 0);
    this.dispatch('blur');
    KeyboardCenter.unregister();
  },
  createKeyboard: function createKeyboard()
  /* el, options, events, callback */
  {
    throw new Error('createKeyboard method must be overrided!');
  },
  destroyKeyboard: function destroyKeyboard()
  /* el, keyboard */
  {
    throw new Error('destroyKeyboard method must be overrided!');
  },
  dispatch: function dispatch()
  /* event, payload */
  {
    throw new Error('dispatch method must be overrided!');
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var inheritIfRequired = __webpack_require__(100);
var dP = __webpack_require__(12).f;
var gOPN = __webpack_require__(103).f;
var isRegExp = __webpack_require__(96);
var $flags = __webpack_require__(70);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(16) && (!CORRECT_NEW || __webpack_require__(17)(function () {
  re2[__webpack_require__(56)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(21)(global, 'RegExp', $RegExp);
}

__webpack_require__(104)('RegExp');


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var setPrototypeOf = __webpack_require__(101).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(102).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(43);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(32);
var toPrimitive = __webpack_require__(19);
var has = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(31);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(16);
var SPECIES = __webpack_require__(56)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
var animate = function animate(iterable) {
  var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var frames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
  var running = true;
  var frame = 0;

  var closure = function closure(timestamp) {
    if (!running) {
      return;
    }

    iterable(timestamp, ++frame, frames);

    if (frame < frames) {
      requestAnimationFrame(closure, 0);
    } else {
      done();
    }
  };

  requestAnimationFrame(closure, 0);
  return function () {
    running = false;
  };
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(107);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(91)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(false);
// Module
exports.push([module.i, ".numeric-input {\n  display: inline-block;\n  background: #fff;\n  width: 12em;\n  height: 1.2em;\n  padding: 2px;\n  text-align: left;\n}\n.numeric-input.readonly,\n.numeric-input.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.numeric-input > div {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.numeric-input-placeholder {\n  color: #757575;\n}\n.numeric-input-text {\n  width: 10000%;\n}\n.numeric-input-cursor {\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  animation: numeric-input-cursor 1s infinite;\n}\n@-moz-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-o-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n", ""]);



/***/ })
/******/ ]);
});