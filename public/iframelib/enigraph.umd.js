(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["enigraph"] = factory();
	else
		root["enigraph"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
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

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
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

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1173":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "117b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EXEC_vue_vue_type_style_index_0_id_8d9731fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a70");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EXEC_vue_vue_type_style_index_0_id_8d9731fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EXEC_vue_vue_type_style_index_0_id_8d9731fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EXEC_vue_vue_type_style_index_0_id_8d9731fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1a70":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ed40");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cb2d8544", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
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

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

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

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
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

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "24c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var global = __webpack_require__("e53d");
var ctx = __webpack_require__("d864");
var classof = __webpack_require__("40c3");
var $export = __webpack_require__("63b6");
var isObject = __webpack_require__("f772");
var aFunction = __webpack_require__("79aa");
var anInstance = __webpack_require__("1173");
var forOf = __webpack_require__("a22a");
var speciesConstructor = __webpack_require__("f201");
var task = __webpack_require__("4178").set;
var microtask = __webpack_require__("aba2")();
var newPromiseCapabilityModule = __webpack_require__("656e");
var perform = __webpack_require__("4439");
var userAgent = __webpack_require__("bc13");
var promiseResolve = __webpack_require__("cd78");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("5168")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("5c95")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("45f2")($Promise, PROMISE);
__webpack_require__("4c95")(PROMISE);
Wrapper = __webpack_require__("584a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("4ee1")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
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

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
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

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3024":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
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

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3c11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var speciesConstructor = __webpack_require__("f201");
var promiseResolve = __webpack_require__("cd78");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
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

/***/ "4178":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var invoke = __webpack_require__("3024");
var html = __webpack_require__("32fc");
var cel = __webpack_require__("1ec9");
var global = __webpack_require__("e53d");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("6b4c")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "43fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("63b6");
var newPromiseCapability = __webpack_require__("656e");
var perform = __webpack_require__("4439");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "4439":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
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

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var dP = __webpack_require__("d9f6");
var DESCRIPTORS = __webpack_require__("8e60");
var SPECIES = __webpack_require__("5168")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
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

/***/ "5be2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script>\n/* eslint-disable */\nwindow.requestIdleCallback =\n  window.requestIdleCallback ||\n  function (cb) {\n    var start = Date.now();\n    return setTimeout(function () {\n      cb({\n        didTimeout: false,\n        timeRemaining: function () {\n          return Math.max(0, 50 - (Date.now() - start));\n        }\n      });\n    }, 1);\n  }\n\nwindow.cancelIdleCallback =\n  window.cancelIdleCallback ||\n  function (id) {\n    clearTimeout(id);\n  }\n</script>\n<!-- <script src=\"https://unpkg.com/vue\"></script> -->\n<!-- <script type=\"disabled\" src=\"/*BASE_URL*//lib/effectnodegraph.umd.min.js\"></script> -->\n\n<script>/*VUE_ENGINE*/</script>\n<script>/*SANDBOX_ENGINE*/</script>\n");

/***/ }),

/***/ "5c95":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("35e8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
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

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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

/***/ "656e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("79aa");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "696e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c207");
__webpack_require__("1654");
__webpack_require__("6c1c");
__webpack_require__("24c5");
__webpack_require__("3c11");
__webpack_require__("43fc");
module.exports = __webpack_require__("584a").Promise;


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
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

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
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

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "795b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("696e");

/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
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

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

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
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
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
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
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
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

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

    if (! info) {
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  exports.keys = function(object) {
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
        var i = -1, next = function next() {
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

    reset: function(skipTempReset) {
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

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
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

    complete: function(record, afterLoc) {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

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
   true ? module.exports : undefined
));

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

/***/ "9a7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("(function(t,e){\"object\"===typeof exports&&\"object\"===typeof module?module.exports=e(require(\"vue\")):\"function\"===typeof define&&define.amd?define([],e):\"object\"===typeof exports?exports[\"effectnodegraph\"]=e(require(\"vue\")):t[\"effectnodegraph\"]=e(t[\"Vue\"])})(\"undefined\"!==typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){\"undefined\"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t[\"default\"]}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=\"fb15\")}({\"014b\":function(t,e,n){\"use strict\";var r=n(\"e53d\"),i=n(\"07e3\"),o=n(\"8e60\"),a=n(\"63b6\"),s=n(\"9138\"),c=n(\"ebfd\").KEY,u=n(\"294c\"),l=n(\"dbdb\"),h=n(\"45f2\"),p=n(\"62a0\"),d=n(\"5168\"),f=n(\"ccb9\"),m=n(\"6718\"),v=n(\"47ee\"),g=n(\"9003\"),y=n(\"e4ae\"),x=n(\"f772\"),b=n(\"36c3\"),w=n(\"1bc3\"),_=n(\"aebd\"),M=n(\"a159\"),S=n(\"0395\"),E=n(\"bf0b\"),T=n(\"d9f6\"),A=n(\"c3a1\"),L=E.f,P=T.f,R=S.f,C=r.Symbol,O=r.JSON,I=O&&O.stringify,D=\"prototype\",N=d(\"_hidden\"),B=d(\"toPrimitive\"),z={}.propertyIsEnumerable,U=l(\"symbol-registry\"),G=l(\"symbols\"),F=l(\"op-symbols\"),H=Object[D],j=\"function\"==typeof C,k=r.QObject,V=!k||!k[D]||!k[D].findChild,W=o&&u(function(){return 7!=M(P({},\"a\",{get:function(){return P(this,\"a\",{value:7}).a}})).a})?function(t,e,n){var r=L(H,e);r&&delete H[e],P(t,e,n),r&&t!==H&&P(H,e,r)}:P,q=function(t){var e=G[t]=M(C[D]);return e._k=t,e},X=j&&\"symbol\"==typeof C.iterator?function(t){return\"symbol\"==typeof t}:function(t){return t instanceof C},Y=function(t,e,n){return t===H&&Y(F,e,n),y(t),e=w(e,!0),y(n),i(G,e)?(n.enumerable?(i(t,N)&&t[N][e]&&(t[N][e]=!1),n=M(n,{enumerable:_(0,!1)})):(i(t,N)||P(t,N,_(1,{})),t[N][e]=!0),W(t,e,n)):P(t,e,n)},J=function(t,e){y(t);var n,r=v(e=b(e)),i=0,o=r.length;while(o>i)Y(t,n=r[i++],e[n]);return t},Z=function(t,e){return void 0===e?M(t):J(M(t),e)},Q=function(t){var e=z.call(this,t=w(t,!0));return!(this===H&&i(G,t)&&!i(F,t))&&(!(e||!i(this,t)||!i(G,t)||i(this,N)&&this[N][t])||e)},K=function(t,e){if(t=b(t),e=w(e,!0),t!==H||!i(G,e)||i(F,e)){var n=L(t,e);return!n||!i(G,e)||i(t,N)&&t[N][e]||(n.enumerable=!0),n}},$=function(t){var e,n=R(b(t)),r=[],o=0;while(n.length>o)i(G,e=n[o++])||e==N||e==c||r.push(e);return r},tt=function(t){var e,n=t===H,r=R(n?F:b(t)),o=[],a=0;while(r.length>a)!i(G,e=r[a++])||n&&!i(H,e)||o.push(G[e]);return o};j||(C=function(){if(this instanceof C)throw TypeError(\"Symbol is not a constructor!\");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(F,n),i(this,N)&&i(this[N],t)&&(this[N][t]=!1),W(this,t,_(1,n))};return o&&V&&W(H,t,{configurable:!0,set:e}),q(t)},s(C[D],\"toString\",function(){return this._k}),E.f=K,T.f=Y,n(\"6abf\").f=S.f=$,n(\"355d\").f=Q,n(\"9aa9\").f=tt,o&&!n(\"b8e3\")&&s(H,\"propertyIsEnumerable\",Q,!0),f.f=function(t){return q(d(t))}),a(a.G+a.W+a.F*!j,{Symbol:C});for(var et=\"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\".split(\",\"),nt=0;et.length>nt;)d(et[nt++]);for(var rt=A(d.store),it=0;rt.length>it;)m(rt[it++]);a(a.S+a.F*!j,\"Symbol\",{for:function(t){return i(U,t+=\"\")?U[t]:U[t]=C(t)},keyFor:function(t){if(!X(t))throw TypeError(t+\" is not a symbol!\");for(var e in U)if(U[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!j,\"Object\",{create:Z,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:K,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),O&&a(a.S+a.F*(!j||u(function(){var t=C();return\"[null]\"!=I([t])||\"{}\"!=I({a:t})||\"{}\"!=I(Object(t))})),\"JSON\",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(x(e)||void 0!==t)&&!X(t))return g(e)||(e=function(t,e){if(\"function\"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,I.apply(O,r)}}),C[D][B]||n(\"35e8\")(C[D],B,C[D].valueOf),h(C,\"Symbol\"),h(Math,\"Math\",!0),h(r.JSON,\"JSON\",!0)},\"01f9\":function(t,e,n){\"use strict\";var r=n(\"2d00\"),i=n(\"5ca1\"),o=n(\"2aba\"),a=n(\"32e9\"),s=n(\"84f2\"),c=n(\"41a0\"),u=n(\"7f20\"),l=n(\"38fd\"),h=n(\"2b4c\")(\"iterator\"),p=!([].keys&&\"next\"in[].keys()),d=\"@@iterator\",f=\"keys\",m=\"values\",v=function(){return this};t.exports=function(t,e,n,g,y,x,b){c(n,e,g);var w,_,M,S=function(t){if(!p&&t in L)return L[t];switch(t){case f:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+\" Iterator\",T=y==m,A=!1,L=t.prototype,P=L[h]||L[d]||y&&L[y],R=P||S(y),C=y?T?S(\"entries\"):R:void 0,O=\"Array\"==e&&L.entries||P;if(O&&(M=l(O.call(new t)),M!==Object.prototype&&M.next&&(u(M,E,!0),r||\"function\"==typeof M[h]||a(M,h,v))),T&&P&&P.name!==m&&(A=!0,R=function(){return P.call(this)}),r&&!b||!p&&!A&&L[h]||a(L,h,R),s[e]=R,s[E]=v,y)if(w={values:T?R:S(m),keys:x?R:S(f),entries:C},b)for(_ in w)_ in L||o(L,_,w[_]);else i(i.P+i.F*(p||A),e,w);return w}},\"02f4\":function(t,e,n){var r=n(\"4588\"),i=n(\"be13\");t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?\"\":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},\"0390\":function(t,e,n){\"use strict\";var r=n(\"02f4\")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},\"0395\":function(t,e,n){var r=n(\"36c3\"),i=n(\"6abf\").f,o={}.toString,a=\"object\"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&\"[object Window]\"==o.call(t)?s(t):i(r(t))}},\"07e3\":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},\"0a49\":function(t,e,n){var r=n(\"9b43\"),i=n(\"626a\"),o=n(\"4bf8\"),a=n(\"9def\"),s=n(\"cd1c\");t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,h=6==t,p=5==t||h,d=e||s;return function(e,s,f){for(var m,v,g=o(e),y=i(g),x=r(s,f,3),b=a(y.length),w=0,_=n?d(e,b):c?d(e,0):void 0;b>w;w++)if((p||w in y)&&(m=y[w],v=x(m,w,g),t))if(n)_[w]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:_.push(m)}else if(l)return!1;return h?-1:u||l?l:_}}},\"0bfb\":function(t,e,n){\"use strict\";var r=n(\"cb7c\");t.exports=function(){var t=r(this),e=\"\";return t.global&&(e+=\"g\"),t.ignoreCase&&(e+=\"i\"),t.multiline&&(e+=\"m\"),t.unicode&&(e+=\"u\"),t.sticky&&(e+=\"y\"),e}},\"0d58\":function(t,e,n){var r=n(\"ce10\"),i=n(\"e11e\");t.exports=Object.keys||function(t){return r(t,i)}},\"0fc9\":function(t,e,n){var r=n(\"3a38\"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},1169:function(t,e,n){var r=n(\"2d95\");t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+\": incorrect invocation!\");return t}},1495:function(t,e,n){var r=n(\"86cc\"),i=n(\"cb7c\"),o=n(\"0d58\");t.exports=n(\"9e1e\")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),s=a.length,c=0;while(s>c)r.f(t,n=a[c++],e[n]);return t}},1654:function(t,e,n){\"use strict\";var r=n(\"71c1\")(!0);n(\"30f1\")(String,\"String\",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1691:function(t,e){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},\"1bc3\":function(t,e,n){var r=n(\"f772\");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&\"function\"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if(\"function\"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&\"function\"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError(\"Can't convert object to primitive value\")}},\"1ec9\":function(t,e,n){var r=n(\"f772\"),i=n(\"e53d\").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},2100:function(t,e,n){!function(e){t.exports=e()}(function(){return _bb$iter=function(t,e){var n={};function r(e){if(!n.hasOwnProperty(e)){var o={exports:{}},a=t[e][0],s=t[e][1];n[e]=o.exports,a((c=s,function(t){var e=c[t];if(i(e))return r(e);for(var n=r.next;n;n=n.next)if(n.has(e))return n.get(e);for(var o=r.prev;o;o=o.prev)if(o.has(e))return o.get(e);throw new Error(\"Module '\"+t+\"' with id \"+e+\" was not found\")}),o,o.exports),n[e]=o.exports}var c;return n[e]}function i(e){return t[e]}if(r.get=r,r.has=i,r.next=\"undefined\"==typeof _bb$iter?null:_bb$iter,e.length)for(var o=r,a=r.next;a;)a.prev=o,o=a,a=a.next;return e.forEach(r),r}({1:[function(t,e,n){function r(){var t={},e=document.getElementsByTagName(\"head\")[0]||document.documentElement;function n(n){\"string\"==typeof n&&(n={url:n});var r=n.id||n.url,i=t[r];if(i)return console.log(\"load-js: cache hit\",r),i;if(!1!==n.allowExternal){var o=function(t){var e=t&&document.getElementById(t);if(e&&\"watermark\"!==e.loadJS)return console.warn(\"load-js: duplicate script with id:\",t),e}(n.id)||function(t){var e=t&&document.querySelector(\"script[src='\"+t+\"']\");if(e&&\"watermark\"!==e.loadJS)return console.warn(\"load-js: duplicate script with url:\",t),e}(n.url);if(o){var a=Promise.resolve(o);return r&&(t[r]=a),a}}if(!n.url&&!n.text)throw new Error(\"load-js: must provide a url or text to load\");var s=(n.url?function(t,e){return new Promise(function(n,r){var i=!1;e.onload=e.onreadystatechange=function(){i||e.readyState&&\"loaded\"!==e.readyState&&\"complete\"!==e.readyState||(i=!0,e.onload=e.onreadystatechange=null,n(e))},e.onerror=r,t.appendChild(e)})}:function(t,e){return t.appendChild(e),Promise.resolve(e)})(e,function(t){var e=document.createElement(\"script\");return e.charset=t.charset||\"utf-8\",e.type=t.type||\"text/javascript\",e.async=!!t.async,e.id=t.id||t.url,e.loadJS=\"watermark\",t.url&&(e.src=t.url),t.text&&(e.text=t.text),e}(n));return r&&!1!==n.cache&&(t[r]=s),s}return function(t){return t instanceof Array?Promise.all(t.map(n)):n(t)}}e.exports=r(),e.exports.create=r},{}]},[1]),_bb$iter(1)})},\"214f\":function(t,e,n){\"use strict\";n(\"b0c5\");var r=n(\"2aba\"),i=n(\"32e9\"),o=n(\"79e5\"),a=n(\"be13\"),s=n(\"2b4c\"),c=n(\"520a\"),u=s(\"species\"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:\"7\"},t},\"7\"!==\"\".replace(t,\"$<a>\")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n=\"ab\".split(t);return 2===n.length&&\"a\"===n[0]&&\"b\"===n[1]}();t.exports=function(t,e,n){var p=s(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=\"\"[t](e)}),f=d?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},\"split\"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](\"\"),!e}):void 0;if(!d||!f||\"replace\"===t&&!l||\"split\"===t&&!h){var m=/./[p],v=n(a,p,\"\"[t],function(t,e,n,r,i){return e.exec===c?d&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=v[0],y=v[1];r(String.prototype,t,g),i(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},\"230e\":function(t,e,n){var r=n(\"d3f4\"),i=n(\"7726\").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},2350:function(t,e){function n(t,e){var n=t[1]||\"\",i=t[3];if(!i)return n;if(e&&\"function\"===typeof btoa){var o=r(i),a=i.sources.map(function(t){return\"/*# sourceURL=\"+i.sourceRoot+t+\" */\"});return[n].concat(a).concat([o]).join(\"\\n\")}return[n].join(\"\\n\")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n=\"sourceMappingURL=data:application/json;charset=utf-8;base64,\"+e;return\"/*# \"+n+\" */\"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?\"@media \"+e[2]+\"{\"+r+\"}\":r}).join(\"\")},e.i=function(t,n){\"string\"===typeof t&&(t=[[null,t,\"\"]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];\"number\"===typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];\"number\"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]=\"(\"+a[2]+\") and (\"+n+\")\"),e.push(a))}},e}},\"23c6\":function(t,e,n){var r=n(\"2d95\"),i=n(\"2b4c\")(\"toStringTag\"),o=\"Arguments\"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(n=a(e=Object(t),i))?n:o?r(e):\"Object\"==(s=r(e))&&\"function\"==typeof e.callee?\"Arguments\":s}},\"241e\":function(t,e,n){var r=n(\"25eb\");t.exports=function(t){return Object(r(t))}},\"24c5\":function(t,e,n){\"use strict\";var r,i,o,a,s=n(\"b8e3\"),c=n(\"e53d\"),u=n(\"d864\"),l=n(\"40c3\"),h=n(\"63b6\"),p=n(\"f772\"),d=n(\"79aa\"),f=n(\"1173\"),m=n(\"a22a\"),v=n(\"f201\"),g=n(\"4178\").set,y=n(\"aba2\")(),x=n(\"656e\"),b=n(\"4439\"),w=n(\"bc13\"),_=n(\"cd78\"),M=\"Promise\",S=c.TypeError,E=c.process,T=E&&E.versions,A=T&&T.v8||\"\",L=c[M],P=\"process\"==l(E),R=function(){},C=i=x.f,O=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[n(\"5168\")(\"species\")]=function(t){t(R,R)};return(P||\"function\"==typeof PromiseRejectionEvent)&&t.then(R)instanceof e&&0!==A.indexOf(\"6.6\")&&-1===w.indexOf(\"Chrome/66\")}catch(r){}}(),I=function(t){var e;return!(!p(t)||\"function\"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,s=i?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{s?(i||(2==t._h&&z(t),t._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===e.promise?u(S(\"Promise-chain cycle\")):(o=I(n))?o.call(n,c,u):c(n)):u(r)}catch(h){l&&!a&&l.exit(),u(h)}};while(n.length>o)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){g.call(c,function(){var e,n,r,i=t._v,o=B(t);if(o&&(e=b(function(){P?E.emit(\"unhandledRejection\",i,t):(n=c.onunhandledrejection)?n({promise:t,reason:i}):(r=c.console)&&r.error&&r.error(\"Unhandled promise rejection\",i)}),t._h=P||B(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},B=function(t){return 1!==t._h&&0===(t._a||t._c).length},z=function(t){g.call(c,function(){var e;P?E.emit(\"rejectionHandled\",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},U=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},G=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S(\"Promise can't be resolved itself\");(e=I(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,u(G,r,1),u(U,r,1))}catch(i){U.call(r,i)}}):(n._v=t,n._s=1,D(n,!1))}catch(r){U.call({_w:n,_d:!1},r)}}};O||(L=function(t){f(this,L,M,\"_h\"),d(t),r.call(this);try{t(u(G,this,1),u(U,this,1))}catch(e){U.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(\"5c95\")(L.prototype,{then:function(t,e){var n=C(v(this,L));return n.ok=\"function\"!=typeof t||t,n.fail=\"function\"==typeof e&&e,n.domain=P?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(G,t,1),this.reject=u(U,t,1)},x.f=C=function(t){return t===L||t===a?new o(t):i(t)}),h(h.G+h.W+h.F*!O,{Promise:L}),n(\"45f2\")(L,M),n(\"4c95\")(M),a=n(\"584a\")[M],h(h.S+h.F*!O,M,{reject:function(t){var e=C(this),n=e.reject;return n(t),e.promise}}),h(h.S+h.F*(s||!O),M,{resolve:function(t){return _(s&&this===a?L:this,t)}}),h(h.S+h.F*!(O&&n(\"4ee1\")(function(t){L.all(t)[\"catch\"](R)})),M,{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=b(function(){var n=[],o=0,a=1;m(t,!1,function(t){var s=o++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n))},i)}),--a||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=b(function(){m(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},\"25eb\":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError(\"Can't call method on  \"+t);return t}},\"268f\":function(t,e,n){t.exports=n(\"fde4\")},\"294c\":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},\"2aba\":function(t,e,n){var r=n(\"7726\"),i=n(\"32e9\"),o=n(\"69a8\"),a=n(\"ca5a\")(\"src\"),s=n(\"fa5b\"),c=\"toString\",u=(\"\"+s).split(c);n(\"8378\").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c=\"function\"==typeof n;c&&(o(n,\"name\")||i(n,\"name\",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?\"\"+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,c,function(){return\"function\"==typeof this&&this[a]||s.call(this)})},\"2aeb\":function(t,e,n){var r=n(\"cb7c\"),i=n(\"1495\"),o=n(\"e11e\"),a=n(\"613b\")(\"IE_PROTO\"),s=function(){},c=\"prototype\",u=function(){var t,e=n(\"230e\")(\"iframe\"),r=o.length,i=\"<\",a=\">\";e.style.display=\"none\",n(\"fab2\").appendChild(e),e.src=\"javascript:\",t=e.contentWindow.document,t.open(),t.write(i+\"script\"+a+\"document.F=Object\"+i+\"/script\"+a),t.close(),u=t.F;while(r--)delete u[c][o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},\"2b4c\":function(t,e,n){var r=n(\"5537\")(\"wks\"),i=n(\"ca5a\"),o=n(\"7726\").Symbol,a=\"function\"==typeof o,s=t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)(\"Symbol.\"+t))};s.store=r},\"2d00\":function(t,e){t.exports=!1},\"2d95\":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},\"30f1\":function(t,e,n){\"use strict\";var r=n(\"b8e3\"),i=n(\"63b6\"),o=n(\"9138\"),a=n(\"35e8\"),s=n(\"481b\"),c=n(\"8f60\"),u=n(\"45f2\"),l=n(\"53e2\"),h=n(\"5168\")(\"iterator\"),p=!([].keys&&\"next\"in[].keys()),d=\"@@iterator\",f=\"keys\",m=\"values\",v=function(){return this};t.exports=function(t,e,n,g,y,x,b){c(n,e,g);var w,_,M,S=function(t){if(!p&&t in L)return L[t];switch(t){case f:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+\" Iterator\",T=y==m,A=!1,L=t.prototype,P=L[h]||L[d]||y&&L[y],R=P||S(y),C=y?T?S(\"entries\"):R:void 0,O=\"Array\"==e&&L.entries||P;if(O&&(M=l(O.call(new t)),M!==Object.prototype&&M.next&&(u(M,E,!0),r||\"function\"==typeof M[h]||a(M,h,v))),T&&P&&P.name!==m&&(A=!0,R=function(){return P.call(this)}),r&&!b||!p&&!A&&L[h]||a(L,h,R),s[e]=R,s[E]=v,y)if(w={values:T?R:S(m),keys:x?R:S(f),entries:C},b)for(_ in w)_ in L||o(L,_,w[_]);else i(i.P+i.F*(p||A),e,w);return w}},\"32a6\":function(t,e,n){var r=n(\"241e\"),i=n(\"c3a1\");n(\"ce7e\")(\"keys\",function(){return function(t){return i(r(t))}})},\"32e9\":function(t,e,n){var r=n(\"86cc\"),i=n(\"4630\");t.exports=n(\"9e1e\")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},\"32fc\":function(t,e,n){var r=n(\"e53d\").document;t.exports=r&&r.documentElement},\"335c\":function(t,e,n){var r=n(\"6b4c\");t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},\"355d\":function(t,e){e.f={}.propertyIsEnumerable},\"35e8\":function(t,e,n){var r=n(\"d9f6\"),i=n(\"aebd\");t.exports=n(\"8e60\")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},\"36c3\":function(t,e,n){var r=n(\"335c\"),i=n(\"25eb\");t.exports=function(t){return r(i(t))}},3702:function(t,e,n){var r=n(\"481b\"),i=n(\"5168\")(\"iterator\"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},3846:function(t,e,n){n(\"9e1e\")&&\"g\"!=/./g.flags&&n(\"86cc\").f(RegExp.prototype,\"flags\",{configurable:!0,get:n(\"0bfb\")})},\"38fd\":function(t,e,n){var r=n(\"69a8\"),i=n(\"4bf8\"),o=n(\"613b\")(\"IE_PROTO\"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},\"3a38\":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},\"3c11\":function(t,e,n){\"use strict\";var r=n(\"63b6\"),i=n(\"584a\"),o=n(\"e53d\"),a=n(\"f201\"),s=n(\"cd78\");r(r.P+r.R,\"Promise\",{finally:function(t){var e=a(this,i.Promise||o.Promise),n=\"function\"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},\"40c3\":function(t,e,n){var r=n(\"6b4c\"),i=n(\"5168\")(\"toStringTag\"),o=\"Arguments\"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(n=a(e=Object(t),i))?n:o?r(e):\"Object\"==(s=r(e))&&\"function\"==typeof e.callee?\"Arguments\":s}},4178:function(t,e,n){var r,i,o,a=n(\"d864\"),s=n(\"3024\"),c=n(\"32fc\"),u=n(\"1ec9\"),l=n(\"e53d\"),h=l.process,p=l.setImmediate,d=l.clearImmediate,f=l.MessageChannel,m=l.Dispatch,v=0,g={},y=\"onreadystatechange\",x=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){x.call(t.data)};p&&d||(p=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return g[++v]=function(){s(\"function\"==typeof t?t:Function(t),e)},r(v),v},d=function(t){delete g[t]},\"process\"==n(\"6b4c\")(h)?r=function(t){h.nextTick(a(x,t,1))}:m&&m.now?r=function(t){m.now(a(x,t,1))}:f?(i=new f,o=i.port2,i.port1.onmessage=b,r=a(o.postMessage,o,1)):l.addEventListener&&\"function\"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+\"\",\"*\")},l.addEventListener(\"message\",b,!1)):r=y in u(\"script\")?function(t){c.appendChild(u(\"script\"))[y]=function(){c.removeChild(this),x.call(t)}}:function(t){setTimeout(a(x,t,1),0)}),t.exports={set:p,clear:d}},\"41a0\":function(t,e,n){\"use strict\";var r=n(\"2aeb\"),i=n(\"4630\"),o=n(\"7f20\"),a={};n(\"32e9\")(a,n(\"2b4c\")(\"iterator\"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+\" Iterator\")}},\"43fc\":function(t,e,n){\"use strict\";var r=n(\"63b6\"),i=n(\"656e\"),o=n(\"4439\");r(r.S,\"Promise\",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},\"454f\":function(t,e,n){n(\"46a7\");var r=n(\"584a\").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},\"456d\":function(t,e,n){var r=n(\"4bf8\"),i=n(\"0d58\");n(\"5eda\")(\"keys\",function(){return function(t){return i(r(t))}})},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},\"45f2\":function(t,e,n){var r=n(\"d9f6\").f,i=n(\"07e3\"),o=n(\"5168\")(\"toStringTag\");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},\"46a7\":function(t,e,n){var r=n(\"63b6\");r(r.S+r.F*!n(\"8e60\"),\"Object\",{defineProperty:n(\"d9f6\").f})},\"47ee\":function(t,e,n){var r=n(\"c3a1\"),i=n(\"9aa9\"),o=n(\"355d\");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,s=n(t),c=o.f,u=0;while(s.length>u)c.call(t,a=s[u++])&&e.push(a)}return e}},\"481b\":function(t,e){t.exports={}},\"499e\":function(t,e,n){\"use strict\";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],c=o[2],u=o[3],l={id:t+\":\"+i,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(e),n.d(e,\"default\",function(){return f});var i=\"undefined\"!==typeof document;if(\"undefined\"!==typeof DEBUG&&DEBUG&&!i)throw new Error(\"vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\");var o={},a=i&&(document.head||document.getElementsByTagName(\"head\")[0]),s=null,c=0,u=!1,l=function(){},h=null,p=\"data-vue-ssr-id\",d=\"undefined\"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,i){u=n,h=i||{};var a=r(t,e);return m(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i],c=o[s.id];c.refs--,n.push(c)}e?(a=r(t,e),m(a)):a=[];for(i=0;i<n.length;i++){c=n[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement(\"style\");return t.type=\"text/css\",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector(\"style[\"+p+'~=\"'+t.id+'\"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(d){var i=c++;r=s||(s=v()),e=x.bind(null,r,i,!1),n=x.bind(null,r,i,!0)}else r=v(),e=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join(\"\\n\")}}();function x(t,e,n,r){var i=n?\"\":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function b(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute(\"media\",r),h.ssrId&&t.setAttribute(p,e.id),i&&(n+=\"\\n/*# sourceURL=\"+i.sources[0]+\" */\",n+=\"\\n/*# sourceMappingURL=data:application/json;base64,\"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+\" */\"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},\"4bf8\":function(t,e,n){var r=n(\"be13\");t.exports=function(t){return Object(r(t))}},\"4c95\":function(t,e,n){\"use strict\";var r=n(\"e53d\"),i=n(\"584a\"),o=n(\"d9f6\"),a=n(\"8e60\"),s=n(\"5168\")(\"species\");t.exports=function(t){var e=\"function\"==typeof i[t]?i[t]:r[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},\"4ee1\":function(t,e,n){var r=n(\"5168\")(\"iterator\"),i=!1;try{var o=[7][r]();o[\"return\"]=function(){i=!0},Array.from(o,function(){throw 2})}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(a){}return n}},\"50ed\":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n(\"dbdb\")(\"wks\"),i=n(\"62a0\"),o=n(\"e53d\").Symbol,a=\"function\"==typeof o,s=t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)(\"Symbol.\"+t))};s.store=r},\"520a\":function(t,e,n){\"use strict\";var r=n(\"0bfb\"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,s=\"lastIndex\",c=function(){var t=/a/,e=/b*/g;return i.call(t,\"a\"),i.call(e,\"a\"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec(\"\")[1],l=c||u;l&&(a=function(t){var e,n,a,l,h=this;return u&&(n=new RegExp(\"^\"+h.source+\"$(?!\\\\s)\",r.call(h))),c&&(e=h[s]),a=i.call(h,t),c&&a&&(h[s]=h.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},\"53e2\":function(t,e,n){var r=n(\"07e3\"),i=n(\"241e\"),o=n(\"5559\")(\"IE_PROTO\"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},5537:function(t,e,n){var r=n(\"8378\"),i=n(\"7726\"),o=\"__core-js_shared__\",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})(\"versions\",[]).push({version:r.version,mode:n(\"2d00\")?\"pure\":\"global\",copyright:\"© 2019 Denis Pushkarev (zloirock.ru)\"})},5559:function(t,e,n){var r=n(\"dbdb\")(\"keys\"),i=n(\"62a0\");t.exports=function(t){return r[t]||(r[t]=i(t))}},\"584a\":function(t,e){var n=t.exports={version:\"2.6.5\"};\"number\"==typeof __e&&(__e=n)},\"5b4e\":function(t,e,n){var r=n(\"36c3\"),i=n(\"b447\"),o=n(\"0fc9\");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),l=o(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},\"5c95\":function(t,e,n){var r=n(\"35e8\");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},\"5ca1\":function(t,e,n){var r=n(\"7726\"),i=n(\"8378\"),o=n(\"32e9\"),a=n(\"2aba\"),s=n(\"9b43\"),c=\"prototype\",u=function(t,e,n){var l,h,p,d,f=t&u.F,m=t&u.G,v=t&u.S,g=t&u.P,y=t&u.B,x=m?r:v?r[e]||(r[e]={}):(r[e]||{})[c],b=m?i:i[e]||(i[e]={}),w=b[c]||(b[c]={});for(l in m&&(n=e),n)h=!f&&x&&void 0!==x[l],p=(h?x:n)[l],d=y&&h?s(p,r):g&&\"function\"==typeof p?s(Function.call,p):p,x&&a(x,l,p,t&u.U),b[l]!=p&&o(b,l,d),g&&w[l]!=p&&(w[l]=p)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},\"5eda\":function(t,e,n){var r=n(\"5ca1\"),i=n(\"8378\"),o=n(\"79e5\");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),\"Object\",a)}},\"5f1b\":function(t,e,n){\"use strict\";var r=n(\"23c6\"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if(\"function\"===typeof n){var o=n.call(t,e);if(\"object\"!==typeof o)throw new TypeError(\"RegExp exec method returned something other than an Object or null\");return o}if(\"RegExp\"!==r(t))throw new TypeError(\"RegExp#exec called on incompatible receiver\");return i.call(t,e)}},\"613b\":function(t,e,n){var r=n(\"5537\")(\"keys\"),i=n(\"ca5a\");t.exports=function(t){return r[t]||(r[t]=i(t))}},\"626a\":function(t,e,n){var r=n(\"2d95\");t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},\"62a0\":function(t,e){var n=0,r=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++n+r).toString(36))}},\"63b6\":function(t,e,n){var r=n(\"e53d\"),i=n(\"584a\"),o=n(\"d864\"),a=n(\"35e8\"),s=n(\"07e3\"),c=\"prototype\",u=function(t,e,n){var l,h,p,d=t&u.F,f=t&u.G,m=t&u.S,v=t&u.P,g=t&u.B,y=t&u.W,x=f?i:i[e]||(i[e]={}),b=x[c],w=f?r:m?r[e]:(r[e]||{})[c];for(l in f&&(n=e),n)h=!d&&w&&void 0!==w[l],h&&s(x,l)||(p=h?w[l]:n[l],x[l]=f&&\"function\"!=typeof w[l]?n[l]:g&&h?o(p,r):y&&w[l]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):v&&\"function\"==typeof p?o(Function.call,p):p,v&&((x.virtual||(x.virtual={}))[l]=p,t&u.R&&b&&!b[l]&&a(b,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},\"656e\":function(t,e,n){\"use strict\";var r=n(\"79aa\");function i(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError(\"Bad Promise constructor\");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},6718:function(t,e,n){var r=n(\"e53d\"),i=n(\"584a\"),o=n(\"b8e3\"),a=n(\"ccb9\"),s=n(\"d9f6\").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});\"_\"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},6821:function(t,e,n){var r=n(\"626a\"),i=n(\"be13\");t.exports=function(t){return r(i(t))}},\"696e\":function(t,e,n){n(\"c207\"),n(\"1654\"),n(\"6c1c\"),n(\"24c5\"),n(\"3c11\"),n(\"43fc\"),t.exports=n(\"584a\").Promise},\"69a8\":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},\"6a99\":function(t,e,n){var r=n(\"d3f4\");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&\"function\"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if(\"function\"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&\"function\"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError(\"Can't convert object to primitive value\")}},\"6abf\":function(t,e,n){var r=n(\"e6f3\"),i=n(\"1691\").concat(\"length\",\"prototype\");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},\"6b4c\":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},\"6b54\":function(t,e,n){\"use strict\";n(\"3846\");var r=n(\"cb7c\"),i=n(\"0bfb\"),o=n(\"9e1e\"),a=\"toString\",s=/./[a],c=function(t){n(\"2aba\")(RegExp.prototype,a,t,!0)};n(\"79e5\")(function(){return\"/a/b\"!=s.call({source:\"a\",flags:\"b\"})})?c(function(){var t=r(this);return\"/\".concat(t.source,\"/\",\"flags\"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):s.name!=a&&c(function(){return s.call(this)})},\"6c1c\":function(t,e,n){n(\"c367\");for(var r=n(\"e53d\"),i=n(\"35e8\"),o=n(\"481b\"),a=n(\"5168\")(\"toStringTag\"),s=\"CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList\".split(\",\"),c=0;c<s.length;c++){var u=s[c],l=r[u],h=l&&l.prototype;h&&!h[a]&&i(h,a,u),o[u]=o.Array}},\"71c1\":function(t,e,n){var r=n(\"3a38\"),i=n(\"25eb\");t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?\"\":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},7514:function(t,e,n){\"use strict\";var r=n(\"5ca1\"),i=n(\"0a49\")(5),o=\"find\",a=!0;o in[]&&Array(1)[o](function(){a=!1}),r(r.P+r.F*a,\"Array\",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(\"9c6c\")(o)},7726:function(t,e){var n=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=n)},\"77f1\":function(t,e,n){var r=n(\"4588\"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},\"794b\":function(t,e,n){t.exports=!n(\"8e60\")&&!n(\"294c\")(function(){return 7!=Object.defineProperty(n(\"1ec9\")(\"div\"),\"a\",{get:function(){return 7}}).a})},\"795b\":function(t,e,n){t.exports=n(\"696e\")},\"79aa\":function(t,e){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},\"79e5\":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},\"7cd6\":function(t,e,n){var r=n(\"40c3\"),i=n(\"5168\")(\"iterator\"),o=n(\"481b\");t.exports=n(\"584a\").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t[\"@@iterator\"]||o[r(t)]}},\"7e90\":function(t,e,n){var r=n(\"d9f6\"),i=n(\"e4ae\"),o=n(\"c3a1\");t.exports=n(\"8e60\")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),s=a.length,c=0;while(s>c)r.f(t,n=a[c++],e[n]);return t}},\"7f20\":function(t,e,n){var r=n(\"86cc\").f,i=n(\"69a8\"),o=n(\"2b4c\")(\"toStringTag\");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},8378:function(t,e){var n=t.exports={version:\"2.6.5\"};\"number\"==typeof __e&&(__e=n)},8436:function(t,e){t.exports=function(){}},\"84f2\":function(t,e){t.exports={}},\"85f2\":function(t,e,n){t.exports=n(\"454f\")},\"86cc\":function(t,e,n){var r=n(\"cb7c\"),i=n(\"c69a\"),o=n(\"6a99\"),a=Object.defineProperty;e.f=n(\"9e1e\")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(s){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported!\");return\"value\"in n&&(t[e]=n.value),t}},\"8aae\":function(t,e,n){n(\"32a6\"),t.exports=n(\"584a\").Object.keys},\"8bbf\":function(e,n){e.exports=t},\"8e60\":function(t,e,n){t.exports=!n(\"294c\")(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},\"8f60\":function(t,e,n){\"use strict\";var r=n(\"a159\"),i=n(\"aebd\"),o=n(\"45f2\"),a={};n(\"35e8\")(a,n(\"5168\")(\"iterator\"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+\" Iterator\")}},9003:function(t,e,n){var r=n(\"6b4c\");t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},9138:function(t,e,n){t.exports=n(\"35e8\")},\"923e\":function(t,e,n){\"use strict\";var r=n(\"d47b\"),i=n.n(r);i.a},\"96cf\":function(t,e,n){var r=function(t){\"use strict\";var e,n=Object.prototype,r=n.hasOwnProperty,i=\"function\"===typeof Symbol?Symbol:{},o=i.iterator||\"@@iterator\",a=i.asyncIterator||\"@@asyncIterator\",s=i.toStringTag||\"@@toStringTag\";function c(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=S(t,n,a),o}function u(t,e,n){try{return{type:\"normal\",arg:t.call(e,n)}}catch(r){return{type:\"throw\",arg:r}}}t.wrap=c;var l=\"suspendedStart\",h=\"suspendedYield\",p=\"executing\",d=\"completed\",f={};function m(){}function v(){}function g(){}var y={};y[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==n&&r.call(b,o)&&(y=b);var w=g.prototype=m.prototype=Object.create(y);function _(t){[\"next\",\"throw\",\"return\"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function M(t){function e(n,i,o,a){var s=u(t[n],t,i);if(\"throw\"!==s.type){var c=s.arg,l=c.value;return l&&\"object\"===typeof l&&r.call(l,\"__await\")?Promise.resolve(l.__await).then(function(t){e(\"next\",t,o,a)},function(t){e(\"throw\",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e(\"throw\",t,o,a)})}a(s.arg)}var n;function i(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=i}function S(t,e,n){var r=l;return function(i,o){if(r===p)throw new Error(\"Generator is already running\");if(r===d){if(\"throw\"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===f)continue;return s}}if(\"next\"===n.method)n.sent=n._sent=n.arg;else if(\"throw\"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else\"return\"===n.method&&n.abrupt(\"return\",n.arg);r=p;var c=u(t,e,n);if(\"normal\"===c.type){if(r=n.done?d:h,c.arg===f)continue;return{value:c.arg,done:n.done}}\"throw\"===c.type&&(r=d,n.method=\"throw\",n.arg=c.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,\"throw\"===n.method){if(t.iterator[\"return\"]&&(n.method=\"return\",n.arg=e,E(t,n),\"throw\"===n.method))return f;n.method=\"throw\",n.arg=new TypeError(\"The iterator does not provide a 'throw' method\")}return f}var i=u(r,t.iterator,n.arg);if(\"throw\"===i.type)return n.method=\"throw\",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,\"return\"!==n.method&&(n.method=\"next\",n.arg=e),n.delegate=null,f):o:(n.method=\"throw\",n.arg=new TypeError(\"iterator result is not an object\"),n.delegate=null,f)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type=\"normal\",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:\"root\"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if(\"function\"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return v.prototype=w.constructor=g,g.constructor=v,g[s]=v.displayName=\"GeneratorFunction\",t.isGeneratorFunction=function(t){var e=\"function\"===typeof t&&t.constructor;return!!e&&(e===v||\"GeneratorFunction\"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]=\"GeneratorFunction\")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(M.prototype),M.prototype[a]=function(){return this},t.AsyncIterator=M,t.async=function(e,n,r,i){var o=new M(c(e,n,r,i));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(w),w[s]=\"Generator\",w[o]=function(){return this},w.toString=function(){return\"[object Generator]\"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)\"t\"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(\"throw\"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type=\"throw\",s.arg=t,n.next=r,i&&(n.method=\"next\",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if(\"root\"===a.tryLoc)return i(\"end\");if(a.tryLoc<=this.prev){var c=r.call(a,\"catchLoc\"),u=r.call(a,\"finallyLoc\");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error(\"try statement without catch or finally\");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,\"finallyLoc\")&&this.prev<i.finallyLoc){var o=i;break}}o&&(\"break\"===t||\"continue\"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method=\"next\",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if(\"throw\"===t.type)throw t.arg;return\"break\"===t.type||\"continue\"===t.type?this.next=t.arg:\"return\"===t.type?(this.rval=this.arg=t.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if(\"throw\"===r.type){var i=r.arg;A(n)}return i}}throw new Error(\"illegal catch attempt\")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},\"next\"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function(\"r\",\"regeneratorRuntime = r\")(r)}},\"9aa9\":function(t,e){e.f=Object.getOwnPropertySymbols},\"9b43\":function(t,e,n){var r=n(\"d8e8\");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},\"9c6c\":function(t,e,n){var r=n(\"2b4c\")(\"unscopables\"),i=Array.prototype;void 0==i[r]&&n(\"32e9\")(i,r,{}),t.exports=function(t){i[r][t]=!0}},\"9def\":function(t,e,n){var r=n(\"4588\"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},\"9e1e\":function(t,e,n){t.exports=!n(\"79e5\")(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},a159:function(t,e,n){var r=n(\"e4ae\"),i=n(\"7e90\"),o=n(\"1691\"),a=n(\"5559\")(\"IE_PROTO\"),s=function(){},c=\"prototype\",u=function(){var t,e=n(\"1ec9\")(\"iframe\"),r=o.length,i=\"<\",a=\">\";e.style.display=\"none\",n(\"32fc\").appendChild(e),e.src=\"javascript:\",t=e.contentWindow.document,t.open(),t.write(i+\"script\"+a+\"document.F=Object\"+i+\"/script\"+a),t.close(),u=t.F;while(r--)delete u[c][o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[a]=t):n=u(),void 0===e?n:i(n,e)}},a22a:function(t,e,n){var r=n(\"d864\"),i=n(\"b0dc\"),o=n(\"3702\"),a=n(\"e4ae\"),s=n(\"b447\"),c=n(\"7cd6\"),u={},l={};e=t.exports=function(t,e,n,h,p){var d,f,m,v,g=p?function(){return t}:c(t),y=r(n,h,e?2:1),x=0;if(\"function\"!=typeof g)throw TypeError(t+\" is not iterable!\");if(o(g)){for(d=s(t.length);d>x;x++)if(v=e?y(a(f=t[x])[0],f[1]):y(t[x]),v===u||v===l)return v}else for(m=g.call(t);!(f=m.next()).done;)if(v=i(m,y,f.value,e),v===u||v===l)return v};e.BREAK=u,e.RETURN=l},a481:function(t,e,n){\"use strict\";var r=n(\"cb7c\"),i=n(\"4bf8\"),o=n(\"9def\"),a=n(\"4588\"),s=n(\"0390\"),c=n(\"5f1b\"),u=Math.max,l=Math.min,h=Math.floor,p=/\\$([$&`']|\\d\\d?|<[^>]*>)/g,d=/\\$([$&`']|\\d\\d?)/g,f=function(t){return void 0===t?t:String(t)};n(\"214f\")(\"replace\",2,function(t,e,n,m){return[function(r,i){var o=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=m(n,t,this,e);if(i.done)return i.value;var h=r(t),p=String(this),d=\"function\"===typeof e;d||(e=String(e));var g=h.global;if(g){var y=h.unicode;h.lastIndex=0}var x=[];while(1){var b=c(h,p);if(null===b)break;if(x.push(b),!g)break;var w=String(b[0]);\"\"===w&&(h.lastIndex=s(p,o(h.lastIndex),y))}for(var _=\"\",M=0,S=0;S<x.length;S++){b=x[S];for(var E=String(b[0]),T=u(l(a(b.index),p.length),0),A=[],L=1;L<b.length;L++)A.push(f(b[L]));var P=b.groups;if(d){var R=[E].concat(A,T,p);void 0!==P&&R.push(P);var C=String(e.apply(void 0,R))}else C=v(E,p,T,A,P,e);T>=M&&(_+=p.slice(M,T)+C,M=T+E.length)}return _+p.slice(M)}];function v(t,e,r,o,a,s){var c=r+t.length,u=o.length,l=d;return void 0!==a&&(a=i(a),l=p),n.call(s,l,function(n,i){var s;switch(i.charAt(0)){case\"$\":return\"$\";case\"&\":return t;case\"`\":return e.slice(0,r);case\"'\":return e.slice(c);case\"<\":s=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var p=h(l/10);return 0===p?n:p<=u?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}s=o[l-1]}return void 0===s?\"\":s})}})},a4bb:function(t,e,n){t.exports=n(\"8aae\")},aba2:function(t,e,n){var r=n(\"e53d\"),i=n(\"4178\").set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c=\"process\"==n(\"6b4c\")(a);t.exports=function(){var t,e,n,u=function(){var r,i;c&&(r=a.domain)&&r.exit();while(t){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);n=function(){l.then(u)}}else n=function(){i.call(r,u)};else{var h=!0,p=document.createTextNode(\"\");new o(u).observe(p,{characterData:!0}),n=function(){p.data=h=!h}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},ac6a:function(t,e,n){for(var r=n(\"cadf\"),i=n(\"0d58\"),o=n(\"2aba\"),a=n(\"7726\"),s=n(\"32e9\"),c=n(\"84f2\"),u=n(\"2b4c\"),l=u(\"iterator\"),h=u(\"toStringTag\"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(d),m=0;m<f.length;m++){var v,g=f[m],y=d[g],x=a[g],b=x&&x.prototype;if(b&&(b[l]||s(b,l,p),b[h]||s(b,h,g),c[g]=p,y))for(v in r)b[v]||o(b,v,r[v],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0c5:function(t,e,n){\"use strict\";var r=n(\"520a\");n(\"5ca1\")({target:\"RegExp\",proto:!0,forced:r!==/./.exec},{exec:r})},b0dc:function(t,e,n){var r=n(\"e4ae\");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){var o=t[\"return\"];throw void 0!==o&&r(o.call(t)),a}}},b447:function(t,e,n){var r=n(\"3a38\"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bc13:function(t,e,n){var r=n(\"e53d\"),i=r.navigator;t.exports=i&&i.userAgent||\"\"},bd71:function(t,e,n){e=t.exports=n(\"2350\")(!1),e.push([t.i,\".app-entry-dom,.full,body,html{width:100%;height:100%}html{overflow:hidden}body{margin:0}.app-entry-dom{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}\",\"\"])},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError(\"Can't call method on  \"+t);return t}},bf0b:function(t,e,n){var r=n(\"355d\"),i=n(\"aebd\"),o=n(\"36c3\"),a=n(\"1bc3\"),s=n(\"07e3\"),c=n(\"794b\"),u=Object.getOwnPropertyDescriptor;e.f=n(\"8e60\")?u:function(t,e){if(t=o(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n(\"36c3\"),i=n(\"bf0b\").f;n(\"ce7e\")(\"getOwnPropertyDescriptor\",function(){return function(t,e){return i(r(t),e)}})},c207:function(t,e){},c366:function(t,e,n){var r=n(\"6821\"),i=n(\"9def\"),o=n(\"77f1\");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=i(c.length),l=o(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},c367:function(t,e,n){\"use strict\";var r=n(\"8436\"),i=n(\"50ed\"),o=n(\"481b\"),a=n(\"36c3\");t.exports=n(\"30f1\")(Array,\"Array\",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,\"keys\"==e?n:\"values\"==e?t[n]:[n,t[n]])},\"values\"),o.Arguments=o.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},c3a1:function(t,e,n){var r=n(\"e6f3\"),i=n(\"1691\");t.exports=Object.keys||function(t){return r(t,i)}},c69a:function(t,e,n){t.exports=!n(\"9e1e\")&&!n(\"79e5\")(function(){return 7!=Object.defineProperty(n(\"230e\")(\"div\"),\"a\",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++n+r).toString(36))}},cadf:function(t,e,n){\"use strict\";var r=n(\"9c6c\"),i=n(\"d53b\"),o=n(\"84f2\"),a=n(\"6821\");t.exports=n(\"01f9\")(Array,\"Array\",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,\"keys\"==e?n:\"values\"==e?t[n]:[n,t[n]])},\"values\"),o.Arguments=o.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},cb7c:function(t,e,n){var r=n(\"d3f4\");t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},ccb9:function(t,e,n){e.f=n(\"5168\")},cd1c:function(t,e,n){var r=n(\"e853\");t.exports=function(t,e){return new(r(t))(e)}},cd78:function(t,e,n){var r=n(\"e4ae\"),i=n(\"f772\"),o=n(\"656e\");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),a=n.resolve;return a(e),n.promise}},ce10:function(t,e,n){var r=n(\"69a8\"),i=n(\"6821\"),o=n(\"c366\")(!1),a=n(\"613b\")(\"IE_PROTO\");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);while(e.length>c)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},ce7e:function(t,e,n){var r=n(\"63b6\"),i=n(\"584a\"),o=n(\"294c\");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),\"Object\",a)}},d3f4:function(t,e){t.exports=function(t){return\"object\"===typeof t?null!==t:\"function\"===typeof t}},d47b:function(t,e,n){var r=n(\"bd71\");\"string\"===typeof r&&(r=[[t.i,r,\"\"]]),r.locals&&(t.exports=r.locals);var i=n(\"499e\").default;i(\"d841d61c\",r,!0,{sourceMap:!1,shadowMode:!1})},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d864:function(t,e,n){var r=n(\"79aa\");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d8e8:function(t,e){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},d9f6:function(t,e,n){var r=n(\"e4ae\"),i=n(\"794b\"),o=n(\"1bc3\"),a=Object.defineProperty;e.f=n(\"8e60\")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(s){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported!\");return\"value\"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n(\"584a\"),i=n(\"e53d\"),o=\"__core-js_shared__\",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})(\"versions\",[]).push({version:r.version,mode:n(\"b8e3\")?\"pure\":\"global\",copyright:\"© 2019 Denis Pushkarev (zloirock.ru)\"})},e11e:function(t,e){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},e265:function(t,e,n){t.exports=n(\"ed33\")},e4ae:function(t,e,n){var r=n(\"f772\");t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},e53d:function(t,e){var n=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n(\"07e3\"),i=n(\"36c3\"),o=n(\"5b4e\")(!1),a=n(\"5559\")(\"IE_PROTO\");t.exports=function(t,e){var n,s=i(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);while(e.length>c)r(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},e853:function(t,e,n){var r=n(\"d3f4\"),i=n(\"1169\"),o=n(\"2b4c\")(\"species\");t.exports=function(t){var e;return i(t)&&(e=t.constructor,\"function\"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},ebfd:function(t,e,n){var r=n(\"62a0\")(\"meta\"),i=n(\"f772\"),o=n(\"07e3\"),a=n(\"d9f6\").f,s=0,c=Object.isExtensible||function(){return!0},u=!n(\"294c\")(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:\"O\"+ ++s,w:{}}})},h=function(t,e){if(!i(t))return\"symbol\"==typeof t?t:(\"string\"==typeof t?\"S\":\"P\")+t;if(!o(t,r)){if(!c(t))return\"F\";if(!e)return\"E\";l(t)}return t[r].i},p=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return u&&f.NEED&&c(t)&&!o(t,r)&&l(t),t},f=t.exports={KEY:r,NEED:!1,fastKey:h,getWeak:p,onFreeze:d}},ed33:function(t,e,n){n(\"014b\"),t.exports=n(\"584a\").Object.getOwnPropertySymbols},f201:function(t,e,n){var r=n(\"e4ae\"),i=n(\"79aa\"),o=n(\"5168\")(\"species\");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}},f6fd:function(t,e){(function(t){var e=\"currentScript\",n=t.getElementsByTagName(\"script\");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\\(]*\\((.*):.+:.+\\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||\"interactive\"==n[t].readyState)return n[t];return null}}})})(document)},f772:function(t,e){t.exports=function(t){return\"object\"===typeof t?null!==t:\"function\"===typeof t}},fa5b:function(t,e,n){t.exports=n(\"5537\")(\"native-function-to-string\",Function.toString)},fab2:function(t,e,n){var r=n(\"7726\").document;t.exports=r&&r.documentElement},fb15:function(t,e,n){\"use strict\";n.r(e);var r,i={};(n.r(i),n.d(i,\"WebGLMultisampleRenderTarget\",function(){return xn}),n.d(i,\"WebGLRenderTargetCube\",function(){return bn}),n.d(i,\"WebGLRenderTarget\",function(){return yn}),n.d(i,\"WebGLRenderer\",function(){return Es}),n.d(i,\"ShaderLib\",function(){return Wi}),n.d(i,\"UniformsLib\",function(){return Vi}),n.d(i,\"UniformsUtils\",function(){return Hi}),n.d(i,\"ShaderChunk\",function(){return Ui}),n.d(i,\"FogExp2\",function(){return Ts}),n.d(i,\"Fog\",function(){return As}),n.d(i,\"Scene\",function(){return Ls}),n.d(i,\"Sprite\",function(){return Os}),n.d(i,\"LOD\",function(){return Is}),n.d(i,\"SkinnedMesh\",function(){return Ds}),n.d(i,\"Skeleton\",function(){return Ns}),n.d(i,\"Bone\",function(){return Bs}),n.d(i,\"Mesh\",function(){return Lo}),n.d(i,\"LineSegments\",function(){return Gs}),n.d(i,\"LineLoop\",function(){return Fs}),n.d(i,\"Line\",function(){return Us}),n.d(i,\"Points\",function(){return js}),n.d(i,\"Group\",function(){return ms}),n.d(i,\"VideoTexture\",function(){return ks}),n.d(i,\"DataTexture\",function(){return wn}),n.d(i,\"DataTexture2DArray\",function(){return Ho}),n.d(i,\"DataTexture3D\",function(){return jo}),n.d(i,\"CompressedTexture\",function(){return Vs}),n.d(i,\"CubeTexture\",function(){return Fo}),n.d(i,\"CanvasTexture\",function(){return Ws}),n.d(i,\"DepthTexture\",function(){return qs}),n.d(i,\"Texture\",function(){return vn}),n.d(i,\"AnimationLoader\",function(){return Wu}),n.d(i,\"CompressedTextureLoader\",function(){return qu}),n.d(i,\"DataTextureLoader\",function(){return Xu}),n.d(i,\"CubeTextureLoader\",function(){return Ju}),n.d(i,\"TextureLoader\",function(){return Zu}),n.d(i,\"ObjectLoader\",function(){return jl}),n.d(i,\"MaterialLoader\",function(){return Ul}),n.d(i,\"BufferGeometryLoader\",function(){return Fl}),n.d(i,\"DefaultLoadingManager\",function(){return ju}),n.d(i,\"LoadingManager\",function(){return Hu}),n.d(i,\"ImageLoader\",function(){return Yu}),n.d(i,\"ImageBitmapLoader\",function(){return Xl}),n.d(i,\"FontLoader\",function(){return Kl}),n.d(i,\"FileLoader\",function(){return Vu}),n.d(i,\"Loader\",function(){return $l}),n.d(i,\"LoaderUtils\",function(){return Gl}),n.d(i,\"Cache\",function(){return Fu}),n.d(i,\"AudioLoader\",function(){return eh}),n.d(i,\"SpotLightShadow\",function(){return Rl}),n.d(i,\"SpotLight\",function(){return Cl}),n.d(i,\"PointLight\",function(){return Ol}),n.d(i,\"RectAreaLight\",function(){return zl}),n.d(i,\"HemisphereLight\",function(){return Ll}),n.d(i,\"HemisphereLightProbe\",function(){return ih}),n.d(i,\"DirectionalLightShadow\",function(){return Dl}),n.d(i,\"DirectionalLight\",function(){return Nl}),n.d(i,\"AmbientLight\",function(){return Bl}),n.d(i,\"AmbientLightProbe\",function(){return oh}),n.d(i,\"LightShadow\",function(){return Pl}),n.d(i,\"Light\",function(){return Al}),n.d(i,\"LightProbe\",function(){return rh}),n.d(i,\"StereoCamera\",function(){return ah}),n.d(i,\"PerspectiveCamera\",function(){return gs}),n.d(i,\"OrthographicCamera\",function(){return Il}),n.d(i,\"CubeCamera\",function(){return uh}),n.d(i,\"ArrayCamera\",function(){return ys}),n.d(i,\"Camera\",function(){return vs}),n.d(i,\"AudioListener\",function(){return hh}),n.d(i,\"PositionalAudio\",function(){return dh}),n.d(i,\"AudioContext\",function(){return th}),n.d(i,\"AudioAnalyser\",function(){return fh}),n.d(i,\"Audio\",function(){return ph}),n.d(i,\"VectorKeyframeTrack\",function(){return Bu}),n.d(i,\"StringKeyframeTrack\",function(){return Nu}),n.d(i,\"QuaternionKeyframeTrack\",function(){return Du}),n.d(i,\"NumberKeyframeTrack\",function(){return Ou}),n.d(i,\"ColorKeyframeTrack\",function(){return Cu}),n.d(i,\"BooleanKeyframeTrack\",function(){return Ru}),n.d(i,\"PropertyMixer\",function(){return mh}),n.d(i,\"PropertyBinding\",function(){return bh}),n.d(i,\"KeyframeTrack\",function(){return Pu}),n.d(i,\"AnimationUtils\",function(){return Su}),n.d(i,\"AnimationObjectGroup\",function(){return wh}),n.d(i,\"AnimationMixer\",function(){return Mh}),n.d(i,\"AnimationClip\",function(){return zu}),n.d(i,\"Uniform\",function(){return Sh}),n.d(i,\"InstancedBufferGeometry\",function(){return Eh}),n.d(i,\"BufferGeometry\",function(){return mo}),n.d(i,\"Geometry\",function(){return to}),n.d(i,\"InterleavedBufferAttribute\",function(){return Rs}),n.d(i,\"InstancedInterleavedBuffer\",function(){return Th}),n.d(i,\"InterleavedBuffer\",function(){return Ps}),n.d(i,\"InstancedBufferAttribute\",function(){return Ah}),n.d(i,\"Face3\",function(){return Yi}),n.d(i,\"Object3D\",function(){return Ki}),n.d(i,\"Raycaster\",function(){return Lh}),n.d(i,\"Layers\",function(){return Zi}),n.d(i,\"EventDispatcher\",function(){return E}),n.d(i,\"Clock\",function(){return lh}),n.d(i,\"QuaternionLinearInterpolant\",function(){return Iu}),n.d(i,\"LinearInterpolant\",function(){return Au}),n.d(i,\"DiscreteInterpolant\",function(){return Lu}),n.d(i,\"CubicInterpolant\",function(){return Tu}),n.d(i,\"Interpolant\",function(){return Eu}),n.d(i,\"Triangle\",function(){return To}),n.d(i,\"Math\",function(){return un}),n.d(i,\"Spherical\",function(){return Ch}),n.d(i,\"Cylindrical\",function(){return Oh}),n.d(i,\"Plane\",function(){return Sn}),n.d(i,\"Frustum\",function(){return En}),n.d(i,\"Sphere\",function(){return Mn}),n.d(i,\"Ray\",function(){return Eo}),n.d(i,\"Matrix4\",function(){return Tn}),n.d(i,\"Matrix3\",function(){return dn}),n.d(i,\"Box3\",function(){return _n}),n.d(i,\"Box2\",function(){return Ih}),n.d(i,\"Line3\",function(){return Dh}),n.d(i,\"Euler\",function(){return Ji}),n.d(i,\"Vector4\",function(){return gn}),n.d(i,\"Vector3\",function(){return pn}),n.d(i,\"Vector2\",function(){return ln}),n.d(i,\"Quaternion\",function(){return hn}),n.d(i,\"Color\",function(){return ki}),n.d(i,\"SphericalHarmonics3\",function(){return nh}),n.d(i,\"ImmediateRenderObject\",function(){return Nh}),n.d(i,\"VertexNormalsHelper\",function(){return Bh}),n.d(i,\"SpotLightHelper\",function(){return zh}),n.d(i,\"SkeletonHelper\",function(){return Gh}),n.d(i,\"PointLightHelper\",function(){return Fh}),n.d(i,\"RectAreaLightHelper\",function(){return Hh}),n.d(i,\"HemisphereLightHelper\",function(){return jh}),n.d(i,\"LightProbeHelper\",function(){return kh}),n.d(i,\"GridHelper\",function(){return Vh}),n.d(i,\"PolarGridHelper\",function(){return Wh}),n.d(i,\"PositionalAudioHelper\",function(){return qh}),n.d(i,\"FaceNormalsHelper\",function(){return Xh}),n.d(i,\"DirectionalLightHelper\",function(){return Yh}),n.d(i,\"CameraHelper\",function(){return Jh}),n.d(i,\"BoxHelper\",function(){return Zh}),n.d(i,\"Box3Helper\",function(){return Qh}),n.d(i,\"PlaneHelper\",function(){return Kh}),n.d(i,\"ArrowHelper\",function(){return $h}),n.d(i,\"AxesHelper\",function(){return tp}),n.d(i,\"Shape\",function(){return Tl}),n.d(i,\"Path\",function(){return El}),n.d(i,\"ShapePath\",function(){return Yl}),n.d(i,\"Font\",function(){return Jl}),n.d(i,\"CurvePath\",function(){return Sl}),n.d(i,\"Curve\",function(){return Qu}),n.d(i,\"ImageUtils\",function(){return fn}),n.d(i,\"ShapeUtils\",function(){return Hc}),n.d(i,\"WebGLUtils\",function(){return fs}),n.d(i,\"WireframeGeometry\",function(){return Xs}),n.d(i,\"ParametricGeometry\",function(){return Ys}),n.d(i,\"ParametricBufferGeometry\",function(){return Js}),n.d(i,\"TetrahedronGeometry\",function(){return Ks}),n.d(i,\"TetrahedronBufferGeometry\",function(){return $s}),n.d(i,\"OctahedronGeometry\",function(){return tc}),n.d(i,\"OctahedronBufferGeometry\",function(){return ec}),n.d(i,\"IcosahedronGeometry\",function(){return nc}),n.d(i,\"IcosahedronBufferGeometry\",function(){return rc}),n.d(i,\"DodecahedronGeometry\",function(){return ic}),n.d(i,\"DodecahedronBufferGeometry\",function(){return oc}),n.d(i,\"PolyhedronGeometry\",function(){return Zs}),n.d(i,\"PolyhedronBufferGeometry\",function(){return Qs}),n.d(i,\"TubeGeometry\",function(){return ac}),n.d(i,\"TubeBufferGeometry\",function(){return sc}),n.d(i,\"TorusKnotGeometry\",function(){return cc}),n.d(i,\"TorusKnotBufferGeometry\",function(){return uc}),n.d(i,\"TorusGeometry\",function(){return lc}),n.d(i,\"TorusBufferGeometry\",function(){return hc}),n.d(i,\"TextGeometry\",function(){return Yc}),n.d(i,\"TextBufferGeometry\",function(){return Jc}),n.d(i,\"SphereGeometry\",function(){return Zc}),n.d(i,\"SphereBufferGeometry\",function(){return Qc}),n.d(i,\"RingGeometry\",function(){return Kc}),n.d(i,\"RingBufferGeometry\",function(){return $c}),n.d(i,\"PlaneGeometry\",function(){return yo}),n.d(i,\"PlaneBufferGeometry\",function(){return xo}),n.d(i,\"LatheGeometry\",function(){return tu}),n.d(i,\"LatheBufferGeometry\",function(){return eu}),n.d(i,\"ShapeGeometry\",function(){return nu}),n.d(i,\"ShapeBufferGeometry\",function(){return ru}),n.d(i,\"ExtrudeGeometry\",function(){return Vc}),n.d(i,\"ExtrudeBufferGeometry\",function(){return Wc}),n.d(i,\"EdgesGeometry\",function(){return ou}),n.d(i,\"ConeGeometry\",function(){return cu}),n.d(i,\"ConeBufferGeometry\",function(){return uu}),n.d(i,\"CylinderGeometry\",function(){return au}),n.d(i,\"CylinderBufferGeometry\",function(){return su}),n.d(i,\"CircleGeometry\",function(){return lu}),n.d(i,\"CircleBufferGeometry\",function(){return hu}),n.d(i,\"BoxGeometry\",function(){return vo}),n.d(i,\"CubeGeometry\",function(){return vo}),n.d(i,\"BoxBufferGeometry\",function(){return go}),n.d(i,\"ShadowMaterial\",function(){return du}),n.d(i,\"SpriteMaterial\",function(){return Cs}),n.d(i,\"RawShaderMaterial\",function(){return fu}),n.d(i,\"ShaderMaterial\",function(){return So}),n.d(i,\"PointsMaterial\",function(){return Hs}),n.d(i,\"MeshPhysicalMaterial\",function(){return vu}),n.d(i,\"MeshStandardMaterial\",function(){return mu}),n.d(i,\"MeshPhongMaterial\",function(){return gu}),n.d(i,\"MeshToonMaterial\",function(){return yu}),n.d(i,\"MeshNormalMaterial\",function(){return xu}),n.d(i,\"MeshLambertMaterial\",function(){return bu}),n.d(i,\"MeshDepthMaterial\",function(){return us}),n.d(i,\"MeshDistanceMaterial\",function(){return ls}),n.d(i,\"MeshBasicMaterial\",function(){return Ao}),n.d(i,\"MeshMatcapMaterial\",function(){return wu}),n.d(i,\"LineDashedMaterial\",function(){return _u}),n.d(i,\"LineBasicMaterial\",function(){return zs}),n.d(i,\"Material\",function(){return wo}),n.d(i,\"Float64BufferAttribute\",function(){return lo}),n.d(i,\"Float32BufferAttribute\",function(){return uo}),n.d(i,\"Uint32BufferAttribute\",function(){return co}),n.d(i,\"Int32BufferAttribute\",function(){return so}),n.d(i,\"Uint16BufferAttribute\",function(){return ao}),n.d(i,\"Int16BufferAttribute\",function(){return oo}),n.d(i,\"Uint8ClampedBufferAttribute\",function(){return io}),n.d(i,\"Uint8BufferAttribute\",function(){return ro}),n.d(i,\"Int8BufferAttribute\",function(){return no}),n.d(i,\"BufferAttribute\",function(){return eo}),n.d(i,\"ArcCurve\",function(){return $u}),n.d(i,\"CatmullRomCurve3\",function(){return ol}),n.d(i,\"CubicBezierCurve\",function(){return vl}),n.d(i,\"CubicBezierCurve3\",function(){return gl}),n.d(i,\"EllipseCurve\",function(){return Ku}),n.d(i,\"LineCurve\",function(){return yl}),n.d(i,\"LineCurve3\",function(){return xl}),n.d(i,\"QuadraticBezierCurve\",function(){return bl}),n.d(i,\"QuadraticBezierCurve3\",function(){return wl}),n.d(i,\"SplineCurve\",function(){return _l}),n.d(i,\"REVISION\",function(){return A}),n.d(i,\"MOUSE\",function(){return L}),n.d(i,\"CullFaceNone\",function(){return P}),n.d(i,\"CullFaceBack\",function(){return R}),n.d(i,\"CullFaceFront\",function(){return C}),n.d(i,\"CullFaceFrontBack\",function(){return O}),n.d(i,\"FrontFaceDirectionCW\",function(){return I}),n.d(i,\"FrontFaceDirectionCCW\",function(){return D}),n.d(i,\"BasicShadowMap\",function(){return N}),n.d(i,\"PCFShadowMap\",function(){return B}),n.d(i,\"PCFSoftShadowMap\",function(){return z}),n.d(i,\"FrontSide\",function(){return U}),n.d(i,\"BackSide\",function(){return G}),n.d(i,\"DoubleSide\",function(){return F}),n.d(i,\"FlatShading\",function(){return H}),n.d(i,\"SmoothShading\",function(){return j}),n.d(i,\"NoColors\",function(){return k}),n.d(i,\"FaceColors\",function(){return V}),n.d(i,\"VertexColors\",function(){return W}),n.d(i,\"NoBlending\",function(){return q}),n.d(i,\"NormalBlending\",function(){return X}),n.d(i,\"AdditiveBlending\",function(){return Y}),n.d(i,\"SubtractiveBlending\",function(){return J}),n.d(i,\"MultiplyBlending\",function(){return Z}),n.d(i,\"CustomBlending\",function(){return Q}),n.d(i,\"AddEquation\",function(){return K}),n.d(i,\"SubtractEquation\",function(){return $}),n.d(i,\"ReverseSubtractEquation\",function(){return tt}),n.d(i,\"MinEquation\",function(){return et}),n.d(i,\"MaxEquation\",function(){return nt}),n.d(i,\"ZeroFactor\",function(){return rt}),n.d(i,\"OneFactor\",function(){return it}),n.d(i,\"SrcColorFactor\",function(){return ot}),n.d(i,\"OneMinusSrcColorFactor\",function(){return at}),n.d(i,\"SrcAlphaFactor\",function(){return st}),n.d(i,\"OneMinusSrcAlphaFactor\",function(){return ct}),n.d(i,\"DstAlphaFactor\",function(){return ut}),n.d(i,\"OneMinusDstAlphaFactor\",function(){return lt}),n.d(i,\"DstColorFactor\",function(){return ht}),n.d(i,\"OneMinusDstColorFactor\",function(){return pt}),n.d(i,\"SrcAlphaSaturateFactor\",function(){return dt}),n.d(i,\"NeverDepth\",function(){return ft}),n.d(i,\"AlwaysDepth\",function(){return mt}),n.d(i,\"LessDepth\",function(){return vt}),n.d(i,\"LessEqualDepth\",function(){return gt}),n.d(i,\"EqualDepth\",function(){return yt}),n.d(i,\"GreaterEqualDepth\",function(){return xt}),n.d(i,\"GreaterDepth\",function(){return bt}),n.d(i,\"NotEqualDepth\",function(){return wt}),n.d(i,\"MultiplyOperation\",function(){return _t}),n.d(i,\"MixOperation\",function(){return Mt}),n.d(i,\"AddOperation\",function(){return St}),n.d(i,\"NoToneMapping\",function(){return Et}),n.d(i,\"LinearToneMapping\",function(){return Tt}),n.d(i,\"ReinhardToneMapping\",function(){return At}),n.d(i,\"Uncharted2ToneMapping\",function(){return Lt}),n.d(i,\"CineonToneMapping\",function(){return Pt}),n.d(i,\"ACESFilmicToneMapping\",function(){return Rt}),n.d(i,\"UVMapping\",function(){return Ct}),n.d(i,\"CubeReflectionMapping\",function(){return Ot}),n.d(i,\"CubeRefractionMapping\",function(){return It}),n.d(i,\"EquirectangularReflectionMapping\",function(){return Dt}),n.d(i,\"EquirectangularRefractionMapping\",function(){return Nt}),n.d(i,\"SphericalReflectionMapping\",function(){return Bt}),n.d(i,\"CubeUVReflectionMapping\",function(){return zt}),n.d(i,\"CubeUVRefractionMapping\",function(){return Ut}),n.d(i,\"RepeatWrapping\",function(){return Gt}),n.d(i,\"ClampToEdgeWrapping\",function(){return Ft}),n.d(i,\"MirroredRepeatWrapping\",function(){return Ht}),n.d(i,\"NearestFilter\",function(){return jt}),n.d(i,\"NearestMipMapNearestFilter\",function(){return kt}),n.d(i,\"NearestMipMapLinearFilter\",function(){return Vt}),n.d(i,\"LinearFilter\",function(){return Wt}),n.d(i,\"LinearMipMapNearestFilter\",function(){return qt}),n.d(i,\"LinearMipMapLinearFilter\",function(){return Xt}),n.d(i,\"UnsignedByteType\",function(){return Yt}),n.d(i,\"ByteType\",function(){return Jt}),n.d(i,\"ShortType\",function(){return Zt}),n.d(i,\"UnsignedShortType\",function(){return Qt}),n.d(i,\"IntType\",function(){return Kt}),n.d(i,\"UnsignedIntType\",function(){return $t}),n.d(i,\"FloatType\",function(){return te}),n.d(i,\"HalfFloatType\",function(){return ee}),n.d(i,\"UnsignedShort4444Type\",function(){return ne}),n.d(i,\"UnsignedShort5551Type\",function(){return re}),n.d(i,\"UnsignedShort565Type\",function(){return ie}),n.d(i,\"UnsignedInt248Type\",function(){return oe}),n.d(i,\"AlphaFormat\",function(){return ae}),n.d(i,\"RGBFormat\",function(){return se}),n.d(i,\"RGBAFormat\",function(){return ce}),n.d(i,\"LuminanceFormat\",function(){return ue}),n.d(i,\"LuminanceAlphaFormat\",function(){return le}),n.d(i,\"RGBEFormat\",function(){return he}),n.d(i,\"DepthFormat\",function(){return pe}),n.d(i,\"DepthStencilFormat\",function(){return de}),n.d(i,\"RedFormat\",function(){return fe}),n.d(i,\"RGB_S3TC_DXT1_Format\",function(){return me}),n.d(i,\"RGBA_S3TC_DXT1_Format\",function(){return ve}),n.d(i,\"RGBA_S3TC_DXT3_Format\",function(){return ge}),n.d(i,\"RGBA_S3TC_DXT5_Format\",function(){return ye}),n.d(i,\"RGB_PVRTC_4BPPV1_Format\",function(){return xe}),n.d(i,\"RGB_PVRTC_2BPPV1_Format\",function(){return be}),n.d(i,\"RGBA_PVRTC_4BPPV1_Format\",function(){return we}),n.d(i,\"RGBA_PVRTC_2BPPV1_Format\",function(){return _e}),n.d(i,\"RGB_ETC1_Format\",function(){return Me}),n.d(i,\"RGBA_ASTC_4x4_Format\",function(){return Se}),n.d(i,\"RGBA_ASTC_5x4_Format\",function(){return Ee}),n.d(i,\"RGBA_ASTC_5x5_Format\",function(){return Te}),n.d(i,\"RGBA_ASTC_6x5_Format\",function(){return Ae}),n.d(i,\"RGBA_ASTC_6x6_Format\",function(){return Le}),n.d(i,\"RGBA_ASTC_8x5_Format\",function(){return Pe}),n.d(i,\"RGBA_ASTC_8x6_Format\",function(){return Re}),n.d(i,\"RGBA_ASTC_8x8_Format\",function(){return Ce}),n.d(i,\"RGBA_ASTC_10x5_Format\",function(){return Oe}),n.d(i,\"RGBA_ASTC_10x6_Format\",function(){return Ie}),n.d(i,\"RGBA_ASTC_10x8_Format\",function(){return De}),n.d(i,\"RGBA_ASTC_10x10_Format\",function(){return Ne}),n.d(i,\"RGBA_ASTC_12x10_Format\",function(){return Be}),n.d(i,\"RGBA_ASTC_12x12_Format\",function(){return ze}),n.d(i,\"LoopOnce\",function(){return Ue}),n.d(i,\"LoopRepeat\",function(){return Ge}),n.d(i,\"LoopPingPong\",function(){return Fe}),n.d(i,\"InterpolateDiscrete\",function(){return He}),n.d(i,\"InterpolateLinear\",function(){return je}),n.d(i,\"InterpolateSmooth\",function(){return ke}),n.d(i,\"ZeroCurvatureEnding\",function(){return Ve}),n.d(i,\"ZeroSlopeEnding\",function(){return We}),n.d(i,\"WrapAroundEnding\",function(){return qe}),n.d(i,\"TrianglesDrawMode\",function(){return Xe}),n.d(i,\"TriangleStripDrawMode\",function(){return Ye}),n.d(i,\"TriangleFanDrawMode\",function(){return Je}),n.d(i,\"LinearEncoding\",function(){return Ze}),n.d(i,\"sRGBEncoding\",function(){return Qe}),n.d(i,\"GammaEncoding\",function(){return Ke}),n.d(i,\"RGBEEncoding\",function(){return $e}),n.d(i,\"LogLuvEncoding\",function(){return tn}),n.d(i,\"RGBM7Encoding\",function(){return en}),n.d(i,\"RGBM16Encoding\",function(){return nn}),n.d(i,\"RGBDEncoding\",function(){return rn}),n.d(i,\"BasicDepthPacking\",function(){return on}),n.d(i,\"RGBADepthPacking\",function(){return an}),n.d(i,\"TangentSpaceNormalMap\",function(){return sn}),n.d(i,\"ObjectSpaceNormalMap\",function(){return cn}),n.d(i,\"Face4\",function(){return ep}),n.d(i,\"LineStrip\",function(){return np}),n.d(i,\"LinePieces\",function(){return rp}),n.d(i,\"MeshFaceMaterial\",function(){return ip}),n.d(i,\"MultiMaterial\",function(){return op}),n.d(i,\"PointCloud\",function(){return ap}),n.d(i,\"Particle\",function(){return sp}),n.d(i,\"ParticleSystem\",function(){return cp}),n.d(i,\"PointCloudMaterial\",function(){return up}),n.d(i,\"ParticleBasicMaterial\",function(){return lp}),n.d(i,\"ParticleSystemMaterial\",function(){return hp}),n.d(i,\"Vertex\",function(){return pp}),n.d(i,\"DynamicBufferAttribute\",function(){return dp}),n.d(i,\"Int8Attribute\",function(){return fp}),n.d(i,\"Uint8Attribute\",function(){return mp}),n.d(i,\"Uint8ClampedAttribute\",function(){return vp}),n.d(i,\"Int16Attribute\",function(){return gp}),n.d(i,\"Uint16Attribute\",function(){return yp}),n.d(i,\"Int32Attribute\",function(){return xp}),n.d(i,\"Uint32Attribute\",function(){return bp}),n.d(i,\"Float32Attribute\",function(){return wp}),n.d(i,\"Float64Attribute\",function(){return _p}),n.d(i,\"ClosedSplineCurve3\",function(){return Mp}),n.d(i,\"SplineCurve3\",function(){return Sp}),n.d(i,\"Spline\",function(){return Ep}),n.d(i,\"AxisHelper\",function(){return Tp}),n.d(i,\"BoundingBoxHelper\",function(){return Ap}),n.d(i,\"EdgesHelper\",function(){return Lp}),n.d(i,\"WireframeHelper\",function(){return Pp}),n.d(i,\"XHRLoader\",function(){return Rp}),n.d(i,\"BinaryTextureLoader\",function(){return Cp}),n.d(i,\"GeometryUtils\",function(){return Op}),n.d(i,\"Projector\",function(){return Ip}),n.d(i,\"CanvasRenderer\",function(){return Dp}),n.d(i,\"JSONLoader\",function(){return Np}),n.d(i,\"SceneUtils\",function(){return Bp}),n.d(i,\"LensFlare\",function(){return zp}),\"undefined\"!==typeof window)&&(n(\"f6fd\"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\\/)[^\\/]+\\.js(\\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.activeNodes&&t.water?n(\"div\",{staticClass:\"app-entry-dom\"},t._l(t.activeNodes,function(e){return n(\"GraphNode\",{key:e._id,attrs:{time:t.water.timeinfo.timelinePercentage*t.water.timeinfo.totalTime,progress:t.water.timeinfo.timelinePercentage,timename:t.timename,timetracks:t.timetracks,execStack:t.execStack,compoMap:t.compoMap,nodes:t.activeNodes,node:e},on:{\"all-done\":t.onAllDone}})}),1):t._e()},a=[],s=n(\"268f\"),c=n.n(s),u=n(\"e265\"),l=n.n(u),h=n(\"a4bb\"),p=n.n(h),d=n(\"85f2\"),f=n.n(d);function m(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=p()(n);\"function\"===typeof l.a&&(r=r.concat(l()(n).filter(function(t){return c()(n,t).enumerable}))),r.forEach(function(e){m(t,e,n[e])})}return t}var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.compo&&t.node?n(t.compo,{ref:\"me\",tag:\"Component\",attrs:{time:t.time,progress:t.progress,timetracks:t.timetracks,timename:t.timename,parentNode:t.parentNode,parentComponent:t.compoMap[t.node.to],isRootNode:!t.node.to,components:t.compoMap,nodes:t.nodes,node:t.node},on:{exec:t.onExec,ready:t.onReady,remove:t.onRemove}}):t._e()},y=[],x=(n(\"96cf\"),n(\"795b\")),b=n.n(x);function w(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):b.a.resolve(c).then(r,i)}function _(t){return function(){var e=this,n=arguments;return new b.a(function(r,i){var o=t.apply(e,n);function a(t){w(o,r,i,a,s,\"next\",t)}function s(t){w(o,r,i,a,s,\"throw\",t)}a(void 0)})}}n(\"ac6a\"),n(\"cadf\"),n(\"456d\"),n(\"7514\"),n(\"a481\"),n(\"6b54\");var M=n(\"8bbf\"),S=n.n(M);function E(){}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(Number.isInteger=function(t){return\"number\"===typeof t&&isFinite(t)&&Math.floor(t)===t}),void 0===Math.sign&&(Math.sign=function(t){return t<0?-1:t>0?1:+t}),\"name\"in Function.prototype===!1&&Object.defineProperty(Function.prototype,\"name\",{get:function(){return this.toString().match(/^\\s*function\\s*([^\\(\\s]*)/)[1]}}),void 0===Object.assign&&function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError(\"Cannot convert undefined or null to object\");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}}(),Object.assign(E.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});var n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)},hasEventListener:function(t,e){if(void 0===this._listeners)return!1;var n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)},removeEventListener:function(t,e){if(void 0!==this._listeners){var n=this._listeners,r=n[t];if(void 0!==r){var i=r.indexOf(e);-1!==i&&r.splice(i,1)}}},dispatchEvent:function(t){if(void 0!==this._listeners){var e=this._listeners,n=e[t.type];if(void 0!==n){t.target=this;for(var r=n.slice(0),i=0,o=r.length;i<o;i++)r[i].call(this,t)}}}});var T,A=\"104\",L={LEFT:0,MIDDLE:1,RIGHT:2},P=0,R=1,C=2,O=3,I=0,D=1,N=0,B=1,z=2,U=0,G=1,F=2,H=1,j=2,k=0,V=1,W=2,q=0,X=1,Y=2,J=3,Z=4,Q=5,K=100,$=101,tt=102,et=103,nt=104,rt=200,it=201,ot=202,at=203,st=204,ct=205,ut=206,lt=207,ht=208,pt=209,dt=210,ft=0,mt=1,vt=2,gt=3,yt=4,xt=5,bt=6,wt=7,_t=0,Mt=1,St=2,Et=0,Tt=1,At=2,Lt=3,Pt=4,Rt=5,Ct=300,Ot=301,It=302,Dt=303,Nt=304,Bt=305,zt=306,Ut=307,Gt=1e3,Ft=1001,Ht=1002,jt=1003,kt=1004,Vt=1005,Wt=1006,qt=1007,Xt=1008,Yt=1009,Jt=1010,Zt=1011,Qt=1012,Kt=1013,$t=1014,te=1015,ee=1016,ne=1017,re=1018,ie=1019,oe=1020,ae=1021,se=1022,ce=1023,ue=1024,le=1025,he=ce,pe=1026,de=1027,fe=1028,me=33776,ve=33777,ge=33778,ye=33779,xe=35840,be=35841,we=35842,_e=35843,Me=36196,Se=37808,Ee=37809,Te=37810,Ae=37811,Le=37812,Pe=37813,Re=37814,Ce=37815,Oe=37816,Ie=37817,De=37818,Ne=37819,Be=37820,ze=37821,Ue=2200,Ge=2201,Fe=2202,He=2300,je=2301,ke=2302,Ve=2400,We=2401,qe=2402,Xe=0,Ye=1,Je=2,Ze=3e3,Qe=3001,Ke=3007,$e=3002,tn=3003,en=3004,nn=3005,rn=3006,on=3200,an=3201,sn=0,cn=1,un={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var t=[],e=0;e<256;e++)t[e]=(e<16?\"0\":\"\")+e.toString(16);return function(){var e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,i=4294967295*Math.random()|0,o=t[255&e]+t[e>>8&255]+t[e>>16&255]+t[e>>24&255]+\"-\"+t[255&n]+t[n>>8&255]+\"-\"+t[n>>16&15|64]+t[n>>24&255]+\"-\"+t[63&r|128]+t[r>>8&255]+\"-\"+t[r>>16&255]+t[r>>24&255]+t[255&i]+t[i>>8&255]+t[i>>16&255]+t[i>>24&255];return o.toUpperCase()}}(),clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(6*t-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*un.DEG2RAD},radToDeg:function(t){return t*un.RAD2DEG},isPowerOfTwo:function(t){return 0===(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}};function ln(t,e){this.x=t||0,this.y=e||0}function hn(t,e,n,r){this._x=t||0,this._y=e||0,this._z=n||0,this._w=void 0!==r?r:1}function pn(t,e,n){this.x=t||0,this.y=e||0,this.z=n||0}function dn(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error(\"THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.\")}Object.defineProperties(ln.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}}),Object.assign(ln.prototype,{isVector2:!0,set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error(\"index is out of range: \"+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error(\"index is out of range: \"+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.\"),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.\"),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this},clampLength:function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromBufferAttribute:function(t,e,n){return void 0!==n&&console.warn(\"THREE.Vector2: offset has been removed from .fromBufferAttribute().\"),this.x=t.getX(e),this.y=t.getY(e),this},rotateAround:function(t,e){var n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,o=this.y-t.y;return this.x=i*n-o*r+t.x,this.y=i*r+o*n+t.y,this}}),Object.assign(hn,{slerp:function(t,e,n,r){return n.copy(t).slerp(e,r)},slerpFlat:function(t,e,n,r,i,o,a){var s=n[r+0],c=n[r+1],u=n[r+2],l=n[r+3],h=i[o+0],p=i[o+1],d=i[o+2],f=i[o+3];if(l!==f||s!==h||c!==p||u!==d){var m=1-a,v=s*h+c*p+u*d+l*f,g=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){var x=Math.sqrt(y),b=Math.atan2(x,v*g);m=Math.sin(m*b)/x,a=Math.sin(a*b)/x}var w=a*g;if(s=s*m+h*w,c=c*m+p*w,u=u*m+d*w,l=l*m+f*w,m===1-a){var _=1/Math.sqrt(s*s+c*c+u*u+l*l);s*=_,c*=_,u*=_,l*=_}}t[e]=s,t[e+1]=c,t[e+2]=u,t[e+3]=l}}),Object.defineProperties(hn.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback()}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback()}}}),Object.assign(hn.prototype,{isQuaternion:!0,set:function(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChangeCallback(),this},setFromEuler:function(t,e){if(!t||!t.isEuler)throw new Error(\"THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.\");var n=t._x,r=t._y,i=t._z,o=t.order,a=Math.cos,s=Math.sin,c=a(n/2),u=a(r/2),l=a(i/2),h=s(n/2),p=s(r/2),d=s(i/2);return\"XYZ\"===o?(this._x=h*u*l+c*p*d,this._y=c*p*l-h*u*d,this._z=c*u*d+h*p*l,this._w=c*u*l-h*p*d):\"YXZ\"===o?(this._x=h*u*l+c*p*d,this._y=c*p*l-h*u*d,this._z=c*u*d-h*p*l,this._w=c*u*l+h*p*d):\"ZXY\"===o?(this._x=h*u*l-c*p*d,this._y=c*p*l+h*u*d,this._z=c*u*d+h*p*l,this._w=c*u*l-h*p*d):\"ZYX\"===o?(this._x=h*u*l-c*p*d,this._y=c*p*l+h*u*d,this._z=c*u*d-h*p*l,this._w=c*u*l+h*p*d):\"YZX\"===o?(this._x=h*u*l+c*p*d,this._y=c*p*l+h*u*d,this._z=c*u*d-h*p*l,this._w=c*u*l-h*p*d):\"XZY\"===o&&(this._x=h*u*l-c*p*d,this._y=c*p*l-h*u*d,this._z=c*u*d+h*p*l,this._w=c*u*l+h*p*d),!1!==e&&this.onChangeCallback(),this},setFromAxisAngle:function(t,e){var n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(t){var e,n=t.elements,r=n[0],i=n[4],o=n[8],a=n[1],s=n[5],c=n[9],u=n[2],l=n[6],h=n[10],p=r+s+h;return p>0?(e=.5/Math.sqrt(p+1),this._w=.25/e,this._x=(l-c)*e,this._y=(o-u)*e,this._z=(a-i)*e):r>s&&r>h?(e=2*Math.sqrt(1+r-s-h),this._w=(l-c)/e,this._x=.25*e,this._y=(i+a)/e,this._z=(o+u)/e):s>h?(e=2*Math.sqrt(1+s-r-h),this._w=(o-u)/e,this._x=(i+a)/e,this._y=.25*e,this._z=(c+l)/e):(e=2*Math.sqrt(1+h-r-s),this._w=(a-i)/e,this._x=(o+u)/e,this._y=(c+l)/e,this._z=.25*e),this.onChangeCallback(),this},setFromUnitVectors:function(t,e){var n=1e-6,r=t.dot(e)+1;return r<n?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()},angleTo:function(t){return 2*Math.acos(Math.abs(un.clamp(this.dot(t),-1,1)))},rotateTowards:function(t,e){var n=this.angleTo(t);if(0===n)return this;var r=Math.min(1,e/n);return this.slerp(t,r),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this.onChangeCallback(),this},multiply:function(t,e){return void 0!==e?(console.warn(\"THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.\"),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){var n=t._x,r=t._y,i=t._z,o=t._w,a=e._x,s=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-i*s,this._y=r*u+o*s+i*a-n*c,this._z=i*u+o*c+n*s-r*a,this._w=o*u-n*a-r*s-i*c,this.onChangeCallback(),this},slerp:function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var n=this._x,r=this._y,i=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+i*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=i,this;var s=1-a*a;if(s<=Number.EPSILON){var c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*r+e*this._y,this._z=c*i+e*this._z,this.normalize()}var u=Math.sqrt(s),l=Math.atan2(u,a),h=Math.sin((1-e)*l)/u,p=Math.sin(e*l)/u;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=i*h+this._z*p,this.onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this.onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}}),Object.assign(pn.prototype,{isVector3:!0,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error(\"index is out of range: \"+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(\"index is out of range: \"+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.\"),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.\"),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.\"),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(){var t=new hn;return function(e){return e&&e.isEuler||console.error(\"THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.\"),this.applyQuaternion(t.setFromEuler(e))}}(),applyAxisAngle:function(){var t=new hn;return function(e,n){return this.applyQuaternion(t.setFromAxisAngle(e,n))}}(),applyMatrix3:function(t){var e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this},applyMatrix4:function(t){var e=this.x,n=this.y,r=this.z,i=t.elements,o=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*o,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*o,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*o,this},applyQuaternion:function(t){var e=this.x,n=this.y,r=this.z,i=t.x,o=t.y,a=t.z,s=t.w,c=s*e+o*r-a*n,u=s*n+a*e-i*r,l=s*r+i*n-o*e,h=-i*e-o*n-a*r;return this.x=c*s+h*-i+u*-a-l*-o,this.y=u*s+h*-o+l*-i-c*-a,this.z=l*s+h*-a+c*-o-u*-i,this},project:function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},unproject:function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},transformDirection:function(t){var e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this},clampLength:function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},cross:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.\"),this.crossVectors(t,e)):this.crossVectors(this,t)},crossVectors:function(t,e){var n=t.x,r=t.y,i=t.z,o=e.x,a=e.y,s=e.z;return this.x=r*s-i*a,this.y=i*o-n*s,this.z=n*a-r*o,this},projectOnVector:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)},projectOnPlane:function(){var t=new pn;return function(e){return t.copy(this).projectOnVector(e),this.sub(t)}}(),reflect:function(){var t=new pn;return function(e){return this.sub(t.copy(e).multiplyScalar(2*this.dot(e)))}}(),angleTo:function(t){var e=this.dot(t)/Math.sqrt(this.lengthSq()*t.lengthSq());return Math.acos(un.clamp(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},setFromSphericalCoords:function(t,e,n){var r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this},setFromCylindrical:function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},setFromCylindricalCoords:function(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this},setFromMatrixPosition:function(t){var e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this},setFromMatrixScale:function(t){var e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this},setFromMatrixColumn:function(t,e){return this.fromArray(t.elements,4*e)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromBufferAttribute:function(t,e,n){return void 0!==n&&console.warn(\"THREE.Vector3: offset has been removed from .fromBufferAttribute().\"),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}}),Object.assign(dn.prototype,{isMatrix3:!0,set:function(t,e,n,r,i,o,a,s,c){var u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=i,u[5]=s,u[6]=n,u[7]=o,u[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this},setFromMatrix4:function(t){var e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},applyToBufferAttribute:function(){var t=new pn;return function(e){for(var n=0,r=e.count;n<r;n++)t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.applyMatrix3(this),e.setXYZ(n,t.x,t.y,t.z);return e}}(),multiply:function(t){return this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,r=e.elements,i=this.elements,o=n[0],a=n[3],s=n[6],c=n[1],u=n[4],l=n[7],h=n[2],p=n[5],d=n[8],f=r[0],m=r[3],v=r[6],g=r[1],y=r[4],x=r[7],b=r[2],w=r[5],_=r[8];return i[0]=o*f+a*g+s*b,i[3]=o*m+a*y+s*w,i[6]=o*v+a*x+s*_,i[1]=c*f+u*g+l*b,i[4]=c*m+u*y+l*w,i[7]=c*v+u*x+l*_,i[2]=h*f+p*g+d*b,i[5]=h*m+p*y+d*w,i[8]=h*v+p*x+d*_,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},determinant:function(){var t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],a=t[5],s=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*i*u+n*a*s+r*i*c-r*o*s},getInverse:function(t,e){t&&t.isMatrix4&&console.error(\"THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.\");var n=t.elements,r=this.elements,i=n[0],o=n[1],a=n[2],s=n[3],c=n[4],u=n[5],l=n[6],h=n[7],p=n[8],d=p*c-u*h,f=u*l-p*s,m=h*s-c*l,v=i*d+o*f+a*m;if(0===v){var g=\"THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0\";if(!0===e)throw new Error(g);return console.warn(g),this.identity()}var y=1/v;return r[0]=d*y,r[1]=(a*h-p*o)*y,r[2]=(u*o-a*c)*y,r[3]=f*y,r[4]=(p*i-a*l)*y,r[5]=(a*s-u*i)*y,r[6]=m*y,r[7]=(o*l-h*i)*y,r[8]=(c*i-o*s)*y,this},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){var e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},setUvTransform:function(t,e,n,r,i,o,a){var s=Math.cos(i),c=Math.sin(i);this.set(n*s,n*c,-n*(s*o+c*a)+o+t,-r*c,r*s,-r*(-c*o+s*a)+a+e,0,0,1)},scale:function(t,e){var n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this},rotate:function(t){var e=Math.cos(t),n=Math.sin(t),r=this.elements,i=r[0],o=r[3],a=r[6],s=r[1],c=r[4],u=r[7];return r[0]=e*i+n*s,r[3]=e*o+n*c,r[6]=e*a+n*u,r[1]=-n*i+e*s,r[4]=-n*o+e*c,r[7]=-n*a+e*u,this},translate:function(t,e){var n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this},equals:function(t){for(var e=this.elements,n=t.elements,r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var n=0;n<9;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}});var fn={getDataURL:function(t){var e;if(\"undefined\"==typeof HTMLCanvasElement)return t.src;if(t instanceof HTMLCanvasElement)e=t;else{void 0===T&&(T=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"canvas\")),T.width=t.width,T.height=t.height;var n=T.getContext(\"2d\");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=T}return e.width>2048||e.height>2048?e.toDataURL(\"image/jpeg\",.6):e.toDataURL(\"image/png\")}},mn=0;function vn(t,e,n,r,i,o,a,s,c,u){Object.defineProperty(this,\"id\",{value:mn++}),this.uuid=un.generateUUID(),this.name=\"\",this.image=void 0!==t?t:vn.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==e?e:vn.DEFAULT_MAPPING,this.wrapS=void 0!==n?n:Ft,this.wrapT=void 0!==r?r:Ft,this.magFilter=void 0!==i?i:Wt,this.minFilter=void 0!==o?o:Xt,this.anisotropy=void 0!==c?c:1,this.format=void 0!==a?a:ce,this.type=void 0!==s?s:Yt,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=void 0!==u?u:Ze,this.version=0,this.onUpdate=null}function gn(t,e,n,r){this.x=t||0,this.y=e||0,this.z=n||0,this.w=void 0!==r?r:1}function yn(t,e,n){this.width=t,this.height=e,this.scissor=new gn(0,0,t,e),this.scissorTest=!1,this.viewport=new gn(0,0,t,e),n=n||{},this.texture=new vn(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.generateMipmaps=void 0!==n.generateMipmaps&&n.generateMipmaps,this.texture.minFilter=void 0!==n.minFilter?n.minFilter:Wt,this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0===n.stencilBuffer||n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null}function xn(t,e,n){yn.call(this,t,e,n),this.samples=4}function bn(t,e,n){yn.call(this,t,e,n)}function wn(t,e,n,r,i,o,a,s,c,u,l,h){vn.call(this,null,o,a,s,c,u,r,i,l,h),this.image={data:t,width:e,height:n},this.magFilter=void 0!==c?c:jt,this.minFilter=void 0!==u?u:jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}function _n(t,e){this.min=void 0!==t?t:new pn(1/0,1/0,1/0),this.max=void 0!==e?e:new pn(-1/0,-1/0,-1/0)}function Mn(t,e){this.center=void 0!==t?t:new pn,this.radius=void 0!==e?e:0}function Sn(t,e){this.normal=void 0!==t?t:new pn(1,0,0),this.constant=void 0!==e?e:0}function En(t,e,n,r,i,o){this.planes=[void 0!==t?t:new Sn,void 0!==e?e:new Sn,void 0!==n?n:new Sn,void 0!==r?r:new Sn,void 0!==i?i:new Sn,void 0!==o?o:new Sn]}function Tn(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error(\"THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.\")}vn.DEFAULT_IMAGE=void 0,vn.DEFAULT_MAPPING=Ct,vn.prototype=Object.assign(Object.create(E.prototype),{constructor:vn,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){var e=void 0===t||\"string\"===typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];var n={metadata:{version:4.5,type:\"Texture\",generator:\"Texture.toJSON\"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var r=this.image;if(void 0===r.uuid&&(r.uuid=un.generateUUID()),!e&&void 0===t.images[r.uuid]){var i;if(Array.isArray(r)){i=[];for(var o=0,a=r.length;o<a;o++)i.push(fn.getDataURL(r[o]))}else i=fn.getDataURL(r);t.images[r.uuid]={uuid:r.uuid,url:i}}n.image=r.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:\"dispose\"})},transformUv:function(t){if(this.mapping!==Ct)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gt:t.x=t.x-Math.floor(t.x);break;case Ft:t.x=t.x<0?0:1;break;case Ht:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gt:t.y=t.y-Math.floor(t.y);break;case Ft:t.y=t.y<0?0:1;break;case Ht:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(vn.prototype,\"needsUpdate\",{set:function(t){!0===t&&this.version++}}),Object.assign(gn.prototype,{isVector4:!0,set:function(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error(\"index is out of range: \"+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(\"index is out of range: \"+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this},add:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.\"),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},sub:function(t,e){return void 0!==e?(console.warn(\"THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.\"),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},applyMatrix4:function(t){var e=this.x,n=this.y,r=this.z,i=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*i,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*i,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*i,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*i,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){this.w=2*Math.acos(t.w);var e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},setAxisAngleFromRotationMatrix:function(t){var e,n,r,i,o=.01,a=.1,s=t.elements,c=s[0],u=s[4],l=s[8],h=s[1],p=s[5],d=s[9],f=s[2],m=s[6],v=s[10];if(Math.abs(u-h)<o&&Math.abs(l-f)<o&&Math.abs(d-m)<o){if(Math.abs(u+h)<a&&Math.abs(l+f)<a&&Math.abs(d+m)<a&&Math.abs(c+p+v-3)<a)return this.set(1,0,0,0),this;e=Math.PI;var g=(c+1)/2,y=(p+1)/2,x=(v+1)/2,b=(u+h)/4,w=(l+f)/4,_=(d+m)/4;return g>y&&g>x?g<o?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(g),r=b/n,i=w/n):y>x?y<o?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(y),n=b/r,i=_/r):x<o?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(x),n=w/i,r=_/i),this.set(n,r,i,e),this}var M=Math.sqrt((m-d)*(m-d)+(l-f)*(l-f)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-d)/M,this.y=(l-f)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+v-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},clampScalar:function(){var t,e;return function(n,r){return void 0===t&&(t=new gn,e=new gn),t.set(n,n,n,n),e.set(r,r,r,r),this.clamp(t,e)}}(),clampLength:function(t,e){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},fromBufferAttribute:function(t,e,n){return void 0!==n&&console.warn(\"THREE.Vector4: offset has been removed from .fromBufferAttribute().\"),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}}),yn.prototype=Object.assign(Object.create(E.prototype),{constructor:yn,isWebGLRenderTarget:!0,setSize:function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:\"dispose\"})}}),xn.prototype=Object.assign(Object.create(yn.prototype),{constructor:xn,isWebGLMultisampleRenderTarget:!0,copy:function(t){return yn.prototype.copy.call(this,t),this.samples=t.samples,this}}),bn.prototype=Object.create(yn.prototype),bn.prototype.constructor=bn,bn.prototype.isWebGLRenderTargetCube=!0,wn.prototype=Object.create(vn.prototype),wn.prototype.constructor=wn,wn.prototype.isDataTexture=!0,Object.assign(_n.prototype,{isBox3:!0,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromArray:function(t){for(var e=1/0,n=1/0,r=1/0,i=-1/0,o=-1/0,a=-1/0,s=0,c=t.length;s<c;s+=3){var u=t[s],l=t[s+1],h=t[s+2];u<e&&(e=u),l<n&&(n=l),h<r&&(r=h),u>i&&(i=u),l>o&&(o=l),h>a&&(a=h)}return this.min.set(e,n,r),this.max.set(i,o,a),this},setFromBufferAttribute:function(t){for(var e=1/0,n=1/0,r=1/0,i=-1/0,o=-1/0,a=-1/0,s=0,c=t.count;s<c;s++){var u=t.getX(s),l=t.getY(s),h=t.getZ(s);u<e&&(e=u),l<n&&(n=l),h<r&&(r=h),u>i&&(i=u),l>o&&(o=l),h>a&&(a=h)}return this.min.set(e,n,r),this.max.set(i,o,a),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new pn;return function(e,n){var r=t.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}}(),setFromObject:function(t){return this.makeEmpty(),this.expandByObject(t)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){return void 0===t&&(console.warn(\"THREE.Box3: .getCenter() target is now required\"),t=new pn),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return void 0===t&&(console.warn(\"THREE.Box3: .getSize() target is now required\"),t=new pn),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},expandByObject:function(){var t,e,n,r=new pn;function i(i){var o=i.geometry;if(void 0!==o)if(o.isGeometry){var a=o.vertices;for(e=0,n=a.length;e<n;e++)r.copy(a[e]),r.applyMatrix4(i.matrixWorld),t.expandByPoint(r)}else if(o.isBufferGeometry){var s=o.attributes.position;if(void 0!==s)for(e=0,n=s.count;e<n;e++)r.fromBufferAttribute(s,e).applyMatrix4(i.matrixWorld),t.expandByPoint(r)}}return function(e){return t=this,e.updateMatrixWorld(!0),e.traverse(i),this}}(),containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,e){return void 0===e&&(console.warn(\"THREE.Box3: .getParameter() target is now required\"),e=new pn),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(){var t=new pn;return function(e){return this.clampPoint(e.center,t),t.distanceToSquared(e.center)<=e.radius*e.radius}}(),intersectsPlane:function(t){var e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant},intersectsTriangle:function(){var t=new pn,e=new pn,n=new pn,r=new pn,i=new pn,o=new pn,a=new pn,s=new pn,c=new pn,u=new pn;function l(r){var i,o;for(i=0,o=r.length-3;i<=o;i+=3){a.fromArray(r,i);var s=c.x*Math.abs(a.x)+c.y*Math.abs(a.y)+c.z*Math.abs(a.z),u=t.dot(a),l=e.dot(a),h=n.dot(a);if(Math.max(-Math.max(u,l,h),Math.min(u,l,h))>s)return!1}return!0}return function(a){if(this.isEmpty())return!1;this.getCenter(s),c.subVectors(this.max,s),t.subVectors(a.a,s),e.subVectors(a.b,s),n.subVectors(a.c,s),r.subVectors(e,t),i.subVectors(n,e),o.subVectors(t,n);var h=[0,-r.z,r.y,0,-i.z,i.y,0,-o.z,o.y,r.z,0,-r.x,i.z,0,-i.x,o.z,0,-o.x,-r.y,r.x,0,-i.y,i.x,0,-o.y,o.x,0];return!!l(h)&&(h=[1,0,0,0,1,0,0,0,1],!!l(h)&&(u.crossVectors(r,i),h=[u.x,u.y,u.z],l(h)))}}(),clampPoint:function(t,e){return void 0===e&&(console.warn(\"THREE.Box3: .clampPoint() target is now required\"),e=new pn),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new pn;return function(e){var n=t.copy(e).clamp(this.min,this.max);return n.sub(e).length()}}(),getBoundingSphere:function(){var t=new pn;return function(e){return void 0===e&&console.error(\"THREE.Box3: .getBoundingSphere() target is now required\"),this.getCenter(e.center),e.radius=.5*this.getSize(t).length(),e}}(),intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(){var t=[new pn,new pn,new pn,new pn,new pn,new pn,new pn,new pn];return function(e){return this.isEmpty()?this:(t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(t),this)}}(),translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}),Object.assign(Mn.prototype,{set:function(t,e){return this.center.copy(t),this.radius=e,this},setFromPoints:function(){var t=new _n;return function(e,n){var r=this.center;void 0!==n?r.copy(n):t.setFromPoints(e).getCenter(r);for(var i=0,o=0,a=e.length;o<a;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},empty:function(){return this.radius<=0},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){var e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},clampPoint:function(t,e){var n=this.center.distanceToSquared(t);return void 0===e&&(console.warn(\"THREE.Sphere: .clampPoint() target is now required\"),e=new pn),e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e},getBoundingBox:function(t){return void 0===t&&(console.warn(\"THREE.Sphere: .getBoundingBox() target is now required\"),t=new _n),t.set(this.center,this.center),t.expandByScalar(this.radius),t},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}}),Object.assign(Sn.prototype,{set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this},setFromNormalAndCoplanarPoint:function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(){var t=new pn,e=new pn;return function(n,r,i){var o=t.subVectors(i,r).cross(e.subVectors(n,r)).normalize();return this.setFromNormalAndCoplanarPoint(o,n),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return void 0===e&&(console.warn(\"THREE.Plane: .projectPoint() target is now required\"),e=new pn),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},intersectLine:function(){var t=new pn;return function(e,n){void 0===n&&(console.warn(\"THREE.Plane: .intersectLine() target is now required\"),n=new pn);var r=e.delta(t),i=this.normal.dot(r);if(0===i)return 0===this.distanceToPoint(e.start)?n.copy(e.start):void 0;var o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?void 0:n.copy(r).multiplyScalar(o).add(e.start)}}(),intersectsLine:function(t){var e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){return void 0===t&&(console.warn(\"THREE.Plane: .coplanarPoint() target is now required\"),t=new pn),t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var t=new pn,e=new dn;return function(n,r){var i=r||e.getNormalMatrix(n),o=this.coplanarPoint(t).applyMatrix4(n),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}}(),translate:function(t){return this.constant-=t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}),Object.assign(En.prototype,{set:function(t,e,n,r,i,o){var a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(i),a[5].copy(o),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){for(var e=this.planes,n=0;n<6;n++)e[n].copy(t.planes[n]);return this},setFromMatrix:function(t){var e=this.planes,n=t.elements,r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],c=n[5],u=n[6],l=n[7],h=n[8],p=n[9],d=n[10],f=n[11],m=n[12],v=n[13],g=n[14],y=n[15];return e[0].setComponents(a-r,l-s,f-h,y-m).normalize(),e[1].setComponents(a+r,l+s,f+h,y+m).normalize(),e[2].setComponents(a+i,l+c,f+p,y+v).normalize(),e[3].setComponents(a-i,l-c,f-p,y-v).normalize(),e[4].setComponents(a-o,l-u,f-d,y-g).normalize(),e[5].setComponents(a+o,l+u,f+d,y+g).normalize(),this},intersectsObject:function(){var t=new Mn;return function(e){var n=e.geometry;return null===n.boundingSphere&&n.computeBoundingSphere(),t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(t)}}(),intersectsSprite:function(){var t=new Mn;return function(e){return t.center.set(0,0,0),t.radius=.7071067811865476,t.applyMatrix4(e.matrixWorld),this.intersectsSphere(t)}}(),intersectsSphere:function(t){for(var e=this.planes,n=t.center,r=-t.radius,i=0;i<6;i++){var o=e[i].distanceToPoint(n);if(o<r)return!1}return!0},intersectsBox:function(){var t=new pn;return function(e){for(var n=this.planes,r=0;r<6;r++){var i=n[r];if(t.x=i.normal.x>0?e.max.x:e.min.x,t.y=i.normal.y>0?e.max.y:e.min.y,t.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(t)<0)return!1}return!0}}(),containsPoint:function(t){for(var e=this.planes,n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}}),Object.assign(Tn.prototype,{isMatrix4:!0,set:function(t,e,n,r,i,o,a,s,c,u,l,h,p,d,f,m){var v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=i,v[5]=o,v[9]=a,v[13]=s,v[2]=c,v[6]=u,v[10]=l,v[14]=h,v[3]=p,v[7]=d,v[11]=f,v[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new Tn).fromArray(this.elements)},copy:function(t){var e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this},copyPosition:function(t){var e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},extractBasis:function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},extractRotation:function(){var t=new pn;return function(e){var n=this.elements,r=e.elements,i=1/t.setFromMatrixColumn(e,0).length(),o=1/t.setFromMatrixColumn(e,1).length(),a=1/t.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}}(),makeRotationFromEuler:function(t){t&&t.isEuler||console.error(\"THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.\");var e=this.elements,n=t.x,r=t.y,i=t.z,o=Math.cos(n),a=Math.sin(n),s=Math.cos(r),c=Math.sin(r),u=Math.cos(i),l=Math.sin(i);if(\"XYZ\"===t.order){var h=o*u,p=o*l,d=a*u,f=a*l;e[0]=s*u,e[4]=-s*l,e[8]=c,e[1]=p+d*c,e[5]=h-f*c,e[9]=-a*s,e[2]=f-h*c,e[6]=d+p*c,e[10]=o*s}else if(\"YXZ\"===t.order){var m=s*u,v=s*l,g=c*u,y=c*l;e[0]=m+y*a,e[4]=g*a-v,e[8]=o*c,e[1]=o*l,e[5]=o*u,e[9]=-a,e[2]=v*a-g,e[6]=y+m*a,e[10]=o*s}else if(\"ZXY\"===t.order){m=s*u,v=s*l,g=c*u,y=c*l;e[0]=m-y*a,e[4]=-o*l,e[8]=g+v*a,e[1]=v+g*a,e[5]=o*u,e[9]=y-m*a,e[2]=-o*c,e[6]=a,e[10]=o*s}else if(\"ZYX\"===t.order){h=o*u,p=o*l,d=a*u,f=a*l;e[0]=s*u,e[4]=d*c-p,e[8]=h*c+f,e[1]=s*l,e[5]=f*c+h,e[9]=p*c-d,e[2]=-c,e[6]=a*s,e[10]=o*s}else if(\"YZX\"===t.order){var x=o*s,b=o*c,w=a*s,_=a*c;e[0]=s*u,e[4]=_-x*l,e[8]=w*l+b,e[1]=l,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=b*l+w,e[10]=x-_*l}else if(\"XZY\"===t.order){x=o*s,b=o*c,w=a*s,_=a*c;e[0]=s*u,e[4]=-l,e[8]=c*u,e[1]=x*l+_,e[5]=o*u,e[9]=b*l-w,e[2]=w*l-b,e[6]=a*u,e[10]=_*l+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(){var t=new pn(0,0,0),e=new pn(1,1,1);return function(n){return this.compose(t,n,e)}}(),lookAt:function(){var t=new pn,e=new pn,n=new pn;return function(r,i,o){var a=this.elements;return n.subVectors(r,i),0===n.lengthSq()&&(n.z=1),n.normalize(),t.crossVectors(o,n),0===t.lengthSq()&&(1===Math.abs(o.z)?n.x+=1e-4:n.z+=1e-4,n.normalize(),t.crossVectors(o,n)),t.normalize(),e.crossVectors(n,t),a[0]=t.x,a[4]=e.x,a[8]=n.x,a[1]=t.y,a[5]=e.y,a[9]=n.y,a[2]=t.z,a[6]=e.z,a[10]=n.z,this}}(),multiply:function(t,e){return void 0!==e?(console.warn(\"THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.\"),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,r=e.elements,i=this.elements,o=n[0],a=n[4],s=n[8],c=n[12],u=n[1],l=n[5],h=n[9],p=n[13],d=n[2],f=n[6],m=n[10],v=n[14],g=n[3],y=n[7],x=n[11],b=n[15],w=r[0],_=r[4],M=r[8],S=r[12],E=r[1],T=r[5],A=r[9],L=r[13],P=r[2],R=r[6],C=r[10],O=r[14],I=r[3],D=r[7],N=r[11],B=r[15];return i[0]=o*w+a*E+s*P+c*I,i[4]=o*_+a*T+s*R+c*D,i[8]=o*M+a*A+s*C+c*N,i[12]=o*S+a*L+s*O+c*B,i[1]=u*w+l*E+h*P+p*I,i[5]=u*_+l*T+h*R+p*D,i[9]=u*M+l*A+h*C+p*N,i[13]=u*S+l*L+h*O+p*B,i[2]=d*w+f*E+m*P+v*I,i[6]=d*_+f*T+m*R+v*D,i[10]=d*M+f*A+m*C+v*N,i[14]=d*S+f*L+m*O+v*B,i[3]=g*w+y*E+x*P+b*I,i[7]=g*_+y*T+x*R+b*D,i[11]=g*M+y*A+x*C+b*N,i[15]=g*S+y*L+x*O+b*B,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},applyToBufferAttribute:function(){var t=new pn;return function(e){for(var n=0,r=e.count;n<r;n++)t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.applyMatrix4(this),e.setXYZ(n,t.x,t.y,t.z);return e}}(),determinant:function(){var t=this.elements,e=t[0],n=t[4],r=t[8],i=t[12],o=t[1],a=t[5],s=t[9],c=t[13],u=t[2],l=t[6],h=t[10],p=t[14],d=t[3],f=t[7],m=t[11],v=t[15];return d*(+i*s*l-r*c*l-i*a*h+n*c*h+r*a*p-n*s*p)+f*(+e*s*p-e*c*h+i*o*h-r*o*p+r*c*u-i*s*u)+m*(+e*c*l-e*a*p-i*o*l+n*o*p+i*a*u-n*c*u)+v*(-r*a*u-e*s*l+e*a*h+r*o*l-n*o*h+n*s*u)},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(t){var e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this},getInverse:function(t,e){var n=this.elements,r=t.elements,i=r[0],o=r[1],a=r[2],s=r[3],c=r[4],u=r[5],l=r[6],h=r[7],p=r[8],d=r[9],f=r[10],m=r[11],v=r[12],g=r[13],y=r[14],x=r[15],b=d*y*h-g*f*h+g*l*m-u*y*m-d*l*x+u*f*x,w=v*f*h-p*y*h-v*l*m+c*y*m+p*l*x-c*f*x,_=p*g*h-v*d*h+v*u*m-c*g*m-p*u*x+c*d*x,M=v*d*l-p*g*l-v*u*f+c*g*f+p*u*y-c*d*y,S=i*b+o*w+a*_+s*M;if(0===S){var E=\"THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0\";if(!0===e)throw new Error(E);return console.warn(E),this.identity()}var T=1/S;return n[0]=b*T,n[1]=(g*f*s-d*y*s-g*a*m+o*y*m+d*a*x-o*f*x)*T,n[2]=(u*y*s-g*l*s+g*a*h-o*y*h-u*a*x+o*l*x)*T,n[3]=(d*l*s-u*f*s-d*a*h+o*f*h+u*a*m-o*l*m)*T,n[4]=w*T,n[5]=(p*y*s-v*f*s+v*a*m-i*y*m-p*a*x+i*f*x)*T,n[6]=(v*l*s-c*y*s-v*a*h+i*y*h+c*a*x-i*l*x)*T,n[7]=(c*f*s-p*l*s+p*a*h-i*f*h-c*a*m+i*l*m)*T,n[8]=_*T,n[9]=(v*d*s-p*g*s-v*o*m+i*g*m+p*o*x-i*d*x)*T,n[10]=(c*g*s-v*u*s+v*o*h-i*g*h-c*o*x+i*u*x)*T,n[11]=(p*u*s-c*d*s-p*o*h+i*d*h+c*o*m-i*u*m)*T,n[12]=M*T,n[13]=(p*g*a-v*d*a+v*o*f-i*g*f-p*o*y+i*d*y)*T,n[14]=(v*u*a-c*g*a-v*o*l+i*g*l+c*o*y-i*u*y)*T,n[15]=(c*d*a-p*u*a+p*o*l-i*d*l-c*o*f+i*u*f)*T,this},scale:function(t){var e=this.elements,n=t.x,r=t.y,i=t.z;return e[0]*=n,e[4]*=r,e[8]*=i,e[1]*=n,e[5]*=r,e[9]*=i,e[2]*=n,e[6]*=r,e[10]*=i,e[3]*=n,e[7]*=r,e[11]*=i,this},getMaxScaleOnAxis:function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))},makeTranslation:function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},makeRotationY:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},makeRotationZ:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){var n=Math.cos(e),r=Math.sin(e),i=1-n,o=t.x,a=t.y,s=t.z,c=i*o,u=i*a;return this.set(c*o+n,c*a-r*s,c*s+r*a,0,c*a+r*s,u*a+n,u*s-r*o,0,c*s-r*a,u*s+r*o,i*s*s+n,0,0,0,0,1),this},makeScale:function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(t,e,n){return this.set(1,e,n,0,t,1,n,0,t,e,1,0,0,0,0,1),this},compose:function(t,e,n){var r=this.elements,i=e._x,o=e._y,a=e._z,s=e._w,c=i+i,u=o+o,l=a+a,h=i*c,p=i*u,d=i*l,f=o*u,m=o*l,v=a*l,g=s*c,y=s*u,x=s*l,b=n.x,w=n.y,_=n.z;return r[0]=(1-(f+v))*b,r[1]=(p+x)*b,r[2]=(d-y)*b,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(h+v))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(d+y)*_,r[9]=(m-g)*_,r[10]=(1-(h+f))*_,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this},decompose:function(){var t=new pn,e=new Tn;return function(n,r,i){var o=this.elements,a=t.set(o[0],o[1],o[2]).length(),s=t.set(o[4],o[5],o[6]).length(),c=t.set(o[8],o[9],o[10]).length(),u=this.determinant();u<0&&(a=-a),n.x=o[12],n.y=o[13],n.z=o[14],e.copy(this);var l=1/a,h=1/s,p=1/c;return e.elements[0]*=l,e.elements[1]*=l,e.elements[2]*=l,e.elements[4]*=h,e.elements[5]*=h,e.elements[6]*=h,e.elements[8]*=p,e.elements[9]*=p,e.elements[10]*=p,r.setFromRotationMatrix(e),i.x=a,i.y=s,i.z=c,this}}(),makePerspective:function(t,e,n,r,i,o){void 0===o&&console.warn(\"THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.\");var a=this.elements,s=2*i/(e-t),c=2*i/(n-r),u=(e+t)/(e-t),l=(n+r)/(n-r),h=-(o+i)/(o-i),p=-2*o*i/(o-i);return a[0]=s,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=l,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this},makeOrthographic:function(t,e,n,r,i,o){var a=this.elements,s=1/(e-t),c=1/(n-r),u=1/(o-i),l=(e+t)*s,h=(n+r)*c,p=(o+i)*u;return a[0]=2*s,a[4]=0,a[8]=0,a[12]=-l,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this},equals:function(t){for(var e=this.elements,n=t.elements,r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var n=0;n<16;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}});var An=\"#ifdef USE_ALPHAMAP\\n\\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\\n#endif\",Ln=\"#ifdef USE_ALPHAMAP\\n\\tuniform sampler2D alphaMap;\\n#endif\",Pn=\"#ifdef ALPHATEST\\n\\tif ( diffuseColor.a < ALPHATEST ) discard;\\n#endif\",Rn=\"#ifdef USE_AOMAP\\n\\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\\n\\treflectedLight.indirectDiffuse *= ambientOcclusion;\\n\\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\\n\\t\\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\\n\\t\\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\\n\\t#endif\\n#endif\",Cn=\"#ifdef USE_AOMAP\\n\\tuniform sampler2D aoMap;\\n\\tuniform float aoMapIntensity;\\n#endif\",On=\"vec3 transformed = vec3( position );\",In=\"vec3 objectNormal = vec3( normal );\\n#ifdef USE_TANGENT\\n\\tvec3 objectTangent = vec3( tangent.xyz );\\n#endif\",Dn=\"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\\n\\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\\n\\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\\n\\tvec4 r = roughness * c0 + c1;\\n\\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\\n\\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\\n}\\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\\n\\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\\n\\tif( cutoffDistance > 0.0 ) {\\n\\t\\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\\n\\t}\\n\\treturn distanceFalloff;\\n#else\\n\\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\\n\\t\\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\\n\\t}\\n\\treturn 1.0;\\n#endif\\n}\\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\\n\\treturn RECIPROCAL_PI * diffuseColor;\\n}\\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\\n\\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\\n\\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\\n}\\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\\n\\tfloat a2 = pow2( alpha );\\n\\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\\n\\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\\n\\treturn 1.0 / ( gl * gv );\\n}\\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\\n\\tfloat a2 = pow2( alpha );\\n\\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\\n\\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\\n\\treturn 0.5 / max( gv + gl, EPSILON );\\n}\\nfloat D_GGX( const in float alpha, const in float dotNH ) {\\n\\tfloat a2 = pow2( alpha );\\n\\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\\n\\treturn RECIPROCAL_PI * a2 / pow2( denom );\\n}\\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\\n\\tfloat alpha = pow2( roughness );\\n\\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\\n\\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\\n\\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\\n\\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\\n\\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\\n\\tvec3 F = F_Schlick( specularColor, dotLH );\\n\\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\\n\\tfloat D = D_GGX( alpha, dotNH );\\n\\treturn F * ( G * D );\\n}\\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\\n\\tconst float LUT_SIZE  = 64.0;\\n\\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\\n\\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\\n\\tfloat dotNV = saturate( dot( N, V ) );\\n\\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\\n\\tuv = uv * LUT_SCALE + LUT_BIAS;\\n\\treturn uv;\\n}\\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\\n\\tfloat l = length( f );\\n\\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\\n}\\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\\n\\tfloat x = dot( v1, v2 );\\n\\tfloat y = abs( x );\\n\\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\\n\\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\\n\\tfloat v = a / b;\\n\\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\\n\\treturn cross( v1, v2 ) * theta_sintheta;\\n}\\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\\n\\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\\n\\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\\n\\tvec3 lightNormal = cross( v1, v2 );\\n\\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\\n\\tvec3 T1, T2;\\n\\tT1 = normalize( V - N * dot( V, N ) );\\n\\tT2 = - cross( N, T1 );\\n\\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\\n\\tvec3 coords[ 4 ];\\n\\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\\n\\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\\n\\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\\n\\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\\n\\tcoords[ 0 ] = normalize( coords[ 0 ] );\\n\\tcoords[ 1 ] = normalize( coords[ 1 ] );\\n\\tcoords[ 2 ] = normalize( coords[ 2 ] );\\n\\tcoords[ 3 ] = normalize( coords[ 3 ] );\\n\\tvec3 vectorFormFactor = vec3( 0.0 );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\\n\\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\\n\\treturn vec3( result );\\n}\\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\\n\\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\\n\\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\\n\\treturn specularColor * brdf.x + brdf.y;\\n}\\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\\n\\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\\n\\tvec3 F = F_Schlick( specularColor, dotNV );\\n\\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\\n\\tvec3 FssEss = F * brdf.x + brdf.y;\\n\\tfloat Ess = brdf.x + brdf.y;\\n\\tfloat Ems = 1.0 - Ess;\\n\\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\\n\\tsingleScatter += FssEss;\\n\\tmultiScatter += Fms * Ems;\\n}\\nfloat G_BlinnPhong_Implicit( ) {\\n\\treturn 0.25;\\n}\\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\\n\\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\\n}\\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\\n\\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\\n\\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\\n\\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\\n\\tvec3 F = F_Schlick( specularColor, dotLH );\\n\\tfloat G = G_BlinnPhong_Implicit( );\\n\\tfloat D = D_BlinnPhong( shininess, dotNH );\\n\\treturn F * ( G * D );\\n}\\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\\n\\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\\n}\\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\\n\\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\\n}\",Nn=\"#ifdef USE_BUMPMAP\\n\\tuniform sampler2D bumpMap;\\n\\tuniform float bumpScale;\\n\\tvec2 dHdxy_fwd() {\\n\\t\\tvec2 dSTdx = dFdx( vUv );\\n\\t\\tvec2 dSTdy = dFdy( vUv );\\n\\t\\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\\n\\t\\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\\n\\t\\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\\n\\t\\treturn vec2( dBx, dBy );\\n\\t}\\n\\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\\n\\t\\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\\n\\t\\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\\n\\t\\tvec3 vN = surf_norm;\\n\\t\\tvec3 R1 = cross( vSigmaY, vN );\\n\\t\\tvec3 R2 = cross( vN, vSigmaX );\\n\\t\\tfloat fDet = dot( vSigmaX, R1 );\\n\\t\\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t\\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\\n\\t\\treturn normalize( abs( fDet ) * surf_norm - vGrad );\\n\\t}\\n#endif\",Bn=\"#if NUM_CLIPPING_PLANES > 0\\n\\tvec4 plane;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\\n\\t\\tplane = clippingPlanes[ i ];\\n\\t\\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\\n\\t}\\n\\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\\n\\t\\tbool clipped = true;\\n\\t\\t#pragma unroll_loop\\n\\t\\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\\n\\t\\t\\tplane = clippingPlanes[ i ];\\n\\t\\t\\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\\n\\t\\t}\\n\\t\\tif ( clipped ) discard;\\n\\t#endif\\n#endif\",zn=\"#if NUM_CLIPPING_PLANES > 0\\n\\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\\n\\t\\tvarying vec3 vViewPosition;\\n\\t#endif\\n\\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\\n#endif\",Un=\"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\\n\\tvarying vec3 vViewPosition;\\n#endif\",Gn=\"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\\n\\tvViewPosition = - mvPosition.xyz;\\n#endif\",Fn=\"#ifdef USE_COLOR\\n\\tdiffuseColor.rgb *= vColor;\\n#endif\",Hn=\"#ifdef USE_COLOR\\n\\tvarying vec3 vColor;\\n#endif\",jn=\"#ifdef USE_COLOR\\n\\tvarying vec3 vColor;\\n#endif\",kn=\"#ifdef USE_COLOR\\n\\tvColor.xyz = color.xyz;\\n#endif\",Vn=\"#define PI 3.14159265359\\n#define PI2 6.28318530718\\n#define PI_HALF 1.5707963267949\\n#define RECIPROCAL_PI 0.31830988618\\n#define RECIPROCAL_PI2 0.15915494\\n#define LOG2 1.442695\\n#define EPSILON 1e-6\\n#define saturate(a) clamp( a, 0.0, 1.0 )\\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\\nfloat pow2( const in float x ) { return x*x; }\\nfloat pow3( const in float x ) { return x*x*x; }\\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\\nhighp float rand( const in vec2 uv ) {\\n\\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\\n\\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\\n\\treturn fract(sin(sn) * c);\\n}\\nstruct IncidentLight {\\n\\tvec3 color;\\n\\tvec3 direction;\\n\\tbool visible;\\n};\\nstruct ReflectedLight {\\n\\tvec3 directDiffuse;\\n\\tvec3 directSpecular;\\n\\tvec3 indirectDiffuse;\\n\\tvec3 indirectSpecular;\\n};\\nstruct GeometricContext {\\n\\tvec3 position;\\n\\tvec3 normal;\\n\\tvec3 viewDir;\\n};\\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\\n\\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\\n}\\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\\n\\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\\n}\\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\\n\\tfloat distance = dot( planeNormal, point - pointOnPlane );\\n\\treturn - distance * planeNormal + point;\\n}\\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\\n\\treturn sign( dot( point - pointOnPlane, planeNormal ) );\\n}\\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\\n\\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\\n}\\nmat3 transposeMat3( const in mat3 m ) {\\n\\tmat3 tmp;\\n\\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\\n\\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\\n\\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\\n\\treturn tmp;\\n}\\nfloat linearToRelativeLuminance( const in vec3 color ) {\\n\\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\\n\\treturn dot( weights, color.rgb );\\n}\",Wn=\"#ifdef ENVMAP_TYPE_CUBE_UV\\n#define cubeUV_textureSize (1024.0)\\nint getFaceFromDirection(vec3 direction) {\\n\\tvec3 absDirection = abs(direction);\\n\\tint face = -1;\\n\\tif( absDirection.x > absDirection.z ) {\\n\\t\\tif(absDirection.x > absDirection.y )\\n\\t\\t\\tface = direction.x > 0.0 ? 0 : 3;\\n\\t\\telse\\n\\t\\t\\tface = direction.y > 0.0 ? 1 : 4;\\n\\t}\\n\\telse {\\n\\t\\tif(absDirection.z > absDirection.y )\\n\\t\\t\\tface = direction.z > 0.0 ? 2 : 5;\\n\\t\\telse\\n\\t\\t\\tface = direction.y > 0.0 ? 1 : 4;\\n\\t}\\n\\treturn face;\\n}\\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\\n\\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\\n\\tfloat dxRoughness = dFdx(roughness);\\n\\tfloat dyRoughness = dFdy(roughness);\\n\\tvec3 dx = dFdx( vec * scale * dxRoughness );\\n\\tvec3 dy = dFdy( vec * scale * dyRoughness );\\n\\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\\n\\td = clamp(d, 1.0, cubeUV_rangeClamp);\\n\\tfloat mipLevel = 0.5 * log2(d);\\n\\treturn vec2(floor(mipLevel), fract(mipLevel));\\n}\\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\\n\\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\\n\\tfloat a = 16.0 * cubeUV_rcpTextureSize;\\n\\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\\n\\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\\n\\tfloat powScale = exp2_packed.x * exp2_packed.y;\\n\\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\\n\\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\\n\\tbool bRes = mipLevel == 0.0;\\n\\tscale =  bRes && (scale < a) ? a : scale;\\n\\tvec3 r;\\n\\tvec2 offset;\\n\\tint face = getFaceFromDirection(direction);\\n\\tfloat rcpPowScale = 1.0 / powScale;\\n\\tif( face == 0) {\\n\\t\\tr = vec3(direction.x, -direction.z, direction.y);\\n\\t\\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\\n\\t}\\n\\telse if( face == 1) {\\n\\t\\tr = vec3(direction.y, direction.x, direction.z);\\n\\t\\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\\n\\t}\\n\\telse if( face == 2) {\\n\\t\\tr = vec3(direction.z, direction.x, direction.y);\\n\\t\\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\\n\\t}\\n\\telse if( face == 3) {\\n\\t\\tr = vec3(direction.x, direction.z, direction.y);\\n\\t\\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\\n\\t}\\n\\telse if( face == 4) {\\n\\t\\tr = vec3(direction.y, direction.x, -direction.z);\\n\\t\\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\\n\\t}\\n\\telse {\\n\\t\\tr = vec3(direction.z, -direction.x, direction.y);\\n\\t\\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\\n\\t\\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\\n\\t}\\n\\tr = normalize(r);\\n\\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\\n\\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\\n\\tvec2 base = offset + vec2( texelOffset );\\n\\treturn base + s * ( scale - 2.0 * texelOffset );\\n}\\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\\n\\tfloat roughnessVal = roughness* cubeUV_maxLods3;\\n\\tfloat r1 = floor(roughnessVal);\\n\\tfloat r2 = r1 + 1.0;\\n\\tfloat t = fract(roughnessVal);\\n\\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\\n\\tfloat s = mipInfo.y;\\n\\tfloat level0 = mipInfo.x;\\n\\tfloat level1 = level0 + 1.0;\\n\\tlevel1 = level1 > 5.0 ? 5.0 : level1;\\n\\tlevel0 += min( floor( s + 0.5 ), 5.0 );\\n\\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\\n\\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\\n\\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\\n\\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\\n\\tvec4 result = mix(color10, color20, t);\\n\\treturn vec4(result.rgb, 1.0);\\n}\\n#endif\",qn=\"vec3 transformedNormal = normalMatrix * objectNormal;\\n#ifdef FLIP_SIDED\\n\\ttransformedNormal = - transformedNormal;\\n#endif\\n#ifdef USE_TANGENT\\n\\tvec3 transformedTangent = normalMatrix * objectTangent;\\n\\t#ifdef FLIP_SIDED\\n\\t\\ttransformedTangent = - transformedTangent;\\n\\t#endif\\n#endif\",Xn=\"#ifdef USE_DISPLACEMENTMAP\\n\\tuniform sampler2D displacementMap;\\n\\tuniform float displacementScale;\\n\\tuniform float displacementBias;\\n#endif\",Yn=\"#ifdef USE_DISPLACEMENTMAP\\n\\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\\n#endif\",Jn=\"#ifdef USE_EMISSIVEMAP\\n\\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\\n\\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\\n\\ttotalEmissiveRadiance *= emissiveColor.rgb;\\n#endif\",Zn=\"#ifdef USE_EMISSIVEMAP\\n\\tuniform sampler2D emissiveMap;\\n#endif\",Qn=\"gl_FragColor = linearToOutputTexel( gl_FragColor );\",Kn=\"\\nvec4 LinearToLinear( in vec4 value ) {\\n\\treturn value;\\n}\\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\\n\\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\\n}\\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\\n\\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\\n}\\nvec4 sRGBToLinear( in vec4 value ) {\\n\\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\\n}\\nvec4 LinearTosRGB( in vec4 value ) {\\n\\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\\n}\\nvec4 RGBEToLinear( in vec4 value ) {\\n\\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\\n}\\nvec4 LinearToRGBE( in vec4 value ) {\\n\\tfloat maxComponent = max( max( value.r, value.g ), value.b );\\n\\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\\n\\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\\n}\\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\\n\\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\\n}\\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\\n\\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\\n\\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\\n\\tM = ceil( M * 255.0 ) / 255.0;\\n\\treturn vec4( value.rgb / ( M * maxRange ), M );\\n}\\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\\n\\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\\n}\\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\\n\\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\\n\\tfloat D = max( maxRange / maxRGB, 1.0 );\\n\\tD = min( floor( D ) / 255.0, 1.0 );\\n\\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\\n}\\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\\nvec4 LinearToLogLuv( in vec4 value )  {\\n\\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\\n\\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\\n\\tvec4 vResult;\\n\\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\\n\\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\\n\\tvResult.w = fract( Le );\\n\\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\\n\\treturn vResult;\\n}\\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\\nvec4 LogLuvToLinear( in vec4 value ) {\\n\\tfloat Le = value.z * 255.0 + value.w;\\n\\tvec3 Xp_Y_XYZp;\\n\\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\\n\\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\\n\\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\\n\\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\\n\\treturn vec4( max( vRGB, 0.0 ), 1.0 );\\n}\",$n=\"#ifdef USE_ENVMAP\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\\n\\t\\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\\n\\t\\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\\n\\t\\t#ifdef ENVMAP_MODE_REFLECTION\\n\\t\\t\\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\\n\\t\\t#else\\n\\t\\t\\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\\n\\t\\t#endif\\n\\t#else\\n\\t\\tvec3 reflectVec = vReflect;\\n\\t#endif\\n\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\\n\\t#elif defined( ENVMAP_TYPE_EQUIREC )\\n\\t\\tvec2 sampleUV;\\n\\t\\treflectVec = normalize( reflectVec );\\n\\t\\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\\n\\t\\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\\n\\t\\tvec4 envColor = texture2D( envMap, sampleUV );\\n\\t#elif defined( ENVMAP_TYPE_SPHERE )\\n\\t\\treflectVec = normalize( reflectVec );\\n\\t\\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\\n\\t\\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\\n\\t#else\\n\\t\\tvec4 envColor = vec4( 0.0 );\\n\\t#endif\\n\\tenvColor = envMapTexelToLinear( envColor );\\n\\t#ifdef ENVMAP_BLENDING_MULTIPLY\\n\\t\\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\\n\\t#elif defined( ENVMAP_BLENDING_MIX )\\n\\t\\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\\n\\t#elif defined( ENVMAP_BLENDING_ADD )\\n\\t\\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\\n\\t#endif\\n#endif\",tr=\"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\\n\\tuniform float reflectivity;\\n\\tuniform float envMapIntensity;\\n#endif\\n#ifdef USE_ENVMAP\\n\\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\\n\\t\\tvarying vec3 vWorldPosition;\\n\\t#endif\\n\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\tuniform samplerCube envMap;\\n\\t#else\\n\\t\\tuniform sampler2D envMap;\\n\\t#endif\\n\\tuniform float flipEnvMap;\\n\\tuniform int maxMipLevel;\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\\n\\t\\tuniform float refractionRatio;\\n\\t#else\\n\\t\\tvarying vec3 vReflect;\\n\\t#endif\\n#endif\",er=\"#ifdef USE_ENVMAP\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\\n\\t\\tvarying vec3 vWorldPosition;\\n\\t#else\\n\\t\\tvarying vec3 vReflect;\\n\\t\\tuniform float refractionRatio;\\n\\t#endif\\n#endif\",nr=\"#ifdef USE_ENVMAP\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\\n\\t\\tvWorldPosition = worldPosition.xyz;\\n\\t#else\\n\\t\\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\\n\\t\\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\\n\\t\\t#ifdef ENVMAP_MODE_REFLECTION\\n\\t\\t\\tvReflect = reflect( cameraToVertex, worldNormal );\\n\\t\\t#else\\n\\t\\t\\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\\n\\t\\t#endif\\n\\t#endif\\n#endif\",rr=\"#ifdef USE_FOG\\n\\tfogDepth = -mvPosition.z;\\n#endif\",ir=\"#ifdef USE_FOG\\n\\tvarying float fogDepth;\\n#endif\",or=\"#ifdef USE_FOG\\n\\t#ifdef FOG_EXP2\\n\\t\\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\\n\\t#else\\n\\t\\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\\n\\t#endif\\n\\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\\n#endif\",ar=\"#ifdef USE_FOG\\n\\tuniform vec3 fogColor;\\n\\tvarying float fogDepth;\\n\\t#ifdef FOG_EXP2\\n\\t\\tuniform float fogDensity;\\n\\t#else\\n\\t\\tuniform float fogNear;\\n\\t\\tuniform float fogFar;\\n\\t#endif\\n#endif\",sr=\"#ifdef TOON\\n\\tuniform sampler2D gradientMap;\\n\\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\\n\\t\\tfloat dotNL = dot( normal, lightDirection );\\n\\t\\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\\n\\t\\t#ifdef USE_GRADIENTMAP\\n\\t\\t\\treturn texture2D( gradientMap, coord ).rgb;\\n\\t\\t#else\\n\\t\\t\\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\\n\\t\\t#endif\\n\\t}\\n#endif\",cr=\"#ifdef USE_LIGHTMAP\\n\\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\\n#endif\",ur=\"#ifdef USE_LIGHTMAP\\n\\tuniform sampler2D lightMap;\\n\\tuniform float lightMapIntensity;\\n#endif\",lr=\"vec3 diffuse = vec3( 1.0 );\\nGeometricContext geometry;\\ngeometry.position = mvPosition.xyz;\\ngeometry.normal = normalize( transformedNormal );\\ngeometry.viewDir = normalize( -mvPosition.xyz );\\nGeometricContext backGeometry;\\nbackGeometry.position = geometry.position;\\nbackGeometry.normal = -geometry.normal;\\nbackGeometry.viewDir = geometry.viewDir;\\nvLightFront = vec3( 0.0 );\\nvIndirectFront = vec3( 0.0 );\\n#ifdef DOUBLE_SIDED\\n\\tvLightBack = vec3( 0.0 );\\n\\tvIndirectBack = vec3( 0.0 );\\n#endif\\nIncidentLight directLight;\\nfloat dotNL;\\nvec3 directLightColor_Diffuse;\\n#if NUM_POINT_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\\n\\t\\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\\n\\t\\tdotNL = dot( geometry.normal, directLight.direction );\\n\\t\\tdirectLightColor_Diffuse = PI * directLight.color;\\n\\t\\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\\n\\t\\t#endif\\n\\t}\\n#endif\\n#if NUM_SPOT_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\\n\\t\\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\\n\\t\\tdotNL = dot( geometry.normal, directLight.direction );\\n\\t\\tdirectLightColor_Diffuse = PI * directLight.color;\\n\\t\\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\\n\\t\\t#endif\\n\\t}\\n#endif\\n#if NUM_DIR_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\\n\\t\\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\\n\\t\\tdotNL = dot( geometry.normal, directLight.direction );\\n\\t\\tdirectLightColor_Diffuse = PI * directLight.color;\\n\\t\\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\\n\\t\\t#endif\\n\\t}\\n#endif\\n#if NUM_HEMI_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\\n\\t\\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\\n\\t\\t#endif\\n\\t}\\n#endif\",hr=\"uniform vec3 ambientLightColor;\\nuniform vec3 lightProbe[ 9 ];\\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\\n\\tfloat x = normal.x, y = normal.y, z = normal.z;\\n\\tvec3 result = shCoefficients[ 0 ] * 0.886227;\\n\\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\\n\\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\\n\\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\\n\\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\\n\\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\\n\\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\\n\\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\\n\\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\\n\\treturn result;\\n}\\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\\n\\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\\n\\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\\n\\treturn irradiance;\\n}\\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\\n\\tvec3 irradiance = ambientLightColor;\\n\\t#ifndef PHYSICALLY_CORRECT_LIGHTS\\n\\t\\tirradiance *= PI;\\n\\t#endif\\n\\treturn irradiance;\\n}\\n#if NUM_DIR_LIGHTS > 0\\n\\tstruct DirectionalLight {\\n\\t\\tvec3 direction;\\n\\t\\tvec3 color;\\n\\t\\tint shadow;\\n\\t\\tfloat shadowBias;\\n\\t\\tfloat shadowRadius;\\n\\t\\tvec2 shadowMapSize;\\n\\t};\\n\\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\\n\\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\\n\\t\\tdirectLight.color = directionalLight.color;\\n\\t\\tdirectLight.direction = directionalLight.direction;\\n\\t\\tdirectLight.visible = true;\\n\\t}\\n#endif\\n#if NUM_POINT_LIGHTS > 0\\n\\tstruct PointLight {\\n\\t\\tvec3 position;\\n\\t\\tvec3 color;\\n\\t\\tfloat distance;\\n\\t\\tfloat decay;\\n\\t\\tint shadow;\\n\\t\\tfloat shadowBias;\\n\\t\\tfloat shadowRadius;\\n\\t\\tvec2 shadowMapSize;\\n\\t\\tfloat shadowCameraNear;\\n\\t\\tfloat shadowCameraFar;\\n\\t};\\n\\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\\n\\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\\n\\t\\tvec3 lVector = pointLight.position - geometry.position;\\n\\t\\tdirectLight.direction = normalize( lVector );\\n\\t\\tfloat lightDistance = length( lVector );\\n\\t\\tdirectLight.color = pointLight.color;\\n\\t\\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\\n\\t\\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\\n\\t}\\n#endif\\n#if NUM_SPOT_LIGHTS > 0\\n\\tstruct SpotLight {\\n\\t\\tvec3 position;\\n\\t\\tvec3 direction;\\n\\t\\tvec3 color;\\n\\t\\tfloat distance;\\n\\t\\tfloat decay;\\n\\t\\tfloat coneCos;\\n\\t\\tfloat penumbraCos;\\n\\t\\tint shadow;\\n\\t\\tfloat shadowBias;\\n\\t\\tfloat shadowRadius;\\n\\t\\tvec2 shadowMapSize;\\n\\t};\\n\\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\\n\\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\\n\\t\\tvec3 lVector = spotLight.position - geometry.position;\\n\\t\\tdirectLight.direction = normalize( lVector );\\n\\t\\tfloat lightDistance = length( lVector );\\n\\t\\tfloat angleCos = dot( directLight.direction, spotLight.direction );\\n\\t\\tif ( angleCos > spotLight.coneCos ) {\\n\\t\\t\\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\\n\\t\\t\\tdirectLight.color = spotLight.color;\\n\\t\\t\\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\\n\\t\\t\\tdirectLight.visible = true;\\n\\t\\t} else {\\n\\t\\t\\tdirectLight.color = vec3( 0.0 );\\n\\t\\t\\tdirectLight.visible = false;\\n\\t\\t}\\n\\t}\\n#endif\\n#if NUM_RECT_AREA_LIGHTS > 0\\n\\tstruct RectAreaLight {\\n\\t\\tvec3 color;\\n\\t\\tvec3 position;\\n\\t\\tvec3 halfWidth;\\n\\t\\tvec3 halfHeight;\\n\\t};\\n\\tuniform sampler2D ltc_1;\\tuniform sampler2D ltc_2;\\n\\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\\n#endif\\n#if NUM_HEMI_LIGHTS > 0\\n\\tstruct HemisphereLight {\\n\\t\\tvec3 direction;\\n\\t\\tvec3 skyColor;\\n\\t\\tvec3 groundColor;\\n\\t};\\n\\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\\n\\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\\n\\t\\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\\n\\t\\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\\n\\t\\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\\n\\t\\t#ifndef PHYSICALLY_CORRECT_LIGHTS\\n\\t\\t\\tirradiance *= PI;\\n\\t\\t#endif\\n\\t\\treturn irradiance;\\n\\t}\\n#endif\",pr=\"#if defined( USE_ENVMAP ) && defined( PHYSICAL )\\n\\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\\n\\t\\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\\n\\t\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\t\\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\\n\\t\\t\\t#ifdef TEXTURE_LOD_EXT\\n\\t\\t\\t\\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\\n\\t\\t\\t#else\\n\\t\\t\\t\\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\\n\\t\\t\\t#endif\\n\\t\\t\\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\\n\\t\\t#elif defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\t\\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\\n\\t\\t\\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\\n\\t\\t#else\\n\\t\\t\\tvec4 envMapColor = vec4( 0.0 );\\n\\t\\t#endif\\n\\t\\treturn PI * envMapColor.rgb * envMapIntensity;\\n\\t}\\n\\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\\n\\t\\tfloat maxMIPLevelScalar = float( maxMIPLevel );\\n\\t\\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\\n\\t\\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\\n\\t}\\n\\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\\n\\t\\t#ifdef ENVMAP_MODE_REFLECTION\\n\\t\\t\\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\\n\\t\\t#else\\n\\t\\t\\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\\n\\t\\t#endif\\n\\t\\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\\n\\t\\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\\n\\t\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\t\\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\\n\\t\\t\\t#ifdef TEXTURE_LOD_EXT\\n\\t\\t\\t\\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\\n\\t\\t\\t#else\\n\\t\\t\\t\\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\\n\\t\\t\\t#endif\\n\\t\\t\\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\\n\\t\\t#elif defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\t\\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\\n\\t\\t\\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\\n\\t\\t#elif defined( ENVMAP_TYPE_EQUIREC )\\n\\t\\t\\tvec2 sampleUV;\\n\\t\\t\\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\\n\\t\\t\\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\\n\\t\\t\\t#ifdef TEXTURE_LOD_EXT\\n\\t\\t\\t\\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\\n\\t\\t\\t#else\\n\\t\\t\\t\\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\\n\\t\\t\\t#endif\\n\\t\\t\\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\\n\\t\\t#elif defined( ENVMAP_TYPE_SPHERE )\\n\\t\\t\\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\\n\\t\\t\\t#ifdef TEXTURE_LOD_EXT\\n\\t\\t\\t\\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\\n\\t\\t\\t#else\\n\\t\\t\\t\\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\\n\\t\\t\\t#endif\\n\\t\\t\\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\\n\\t\\t#endif\\n\\t\\treturn envMapColor.rgb * envMapIntensity;\\n\\t}\\n#endif\",dr=\"BlinnPhongMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb;\\nmaterial.specularColor = specular;\\nmaterial.specularShininess = shininess;\\nmaterial.specularStrength = specularStrength;\",fr=\"varying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\nstruct BlinnPhongMaterial {\\n\\tvec3\\tdiffuseColor;\\n\\tvec3\\tspecularColor;\\n\\tfloat\\tspecularShininess;\\n\\tfloat\\tspecularStrength;\\n};\\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\\n\\t#ifdef TOON\\n\\t\\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\\n\\t#else\\n\\t\\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\\n\\t\\tvec3 irradiance = dotNL * directLight.color;\\n\\t#endif\\n\\t#ifndef PHYSICALLY_CORRECT_LIGHTS\\n\\t\\tirradiance *= PI;\\n\\t#endif\\n\\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\\n\\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\\n}\\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\\n\\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_BlinnPhong\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_BlinnPhong\\n#define Material_LightProbeLOD( material )\\t(0)\",mr=\"PhysicalMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\\n#ifdef STANDARD\\n\\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\\n#else\\n\\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\\n\\tmaterial.clearCoat = saturate( clearCoat );\\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\\n#endif\",vr=\"struct PhysicalMaterial {\\n\\tvec3\\tdiffuseColor;\\n\\tfloat\\tspecularRoughness;\\n\\tvec3\\tspecularColor;\\n\\t#ifndef STANDARD\\n\\t\\tfloat clearCoat;\\n\\t\\tfloat clearCoatRoughness;\\n\\t#endif\\n};\\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\\n\\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\\n}\\n#if NUM_RECT_AREA_LIGHTS > 0\\n\\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\t\\tvec3 normal = geometry.normal;\\n\\t\\tvec3 viewDir = geometry.viewDir;\\n\\t\\tvec3 position = geometry.position;\\n\\t\\tvec3 lightPos = rectAreaLight.position;\\n\\t\\tvec3 halfWidth = rectAreaLight.halfWidth;\\n\\t\\tvec3 halfHeight = rectAreaLight.halfHeight;\\n\\t\\tvec3 lightColor = rectAreaLight.color;\\n\\t\\tfloat roughness = material.specularRoughness;\\n\\t\\tvec3 rectCoords[ 4 ];\\n\\t\\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\\t\\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\\n\\t\\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\\n\\t\\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\\n\\t\\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\\n\\t\\tvec4 t1 = texture2D( ltc_1, uv );\\n\\t\\tvec4 t2 = texture2D( ltc_2, uv );\\n\\t\\tmat3 mInv = mat3(\\n\\t\\t\\tvec3( t1.x, 0, t1.y ),\\n\\t\\t\\tvec3(    0, 1,    0 ),\\n\\t\\t\\tvec3( t1.z, 0, t1.w )\\n\\t\\t);\\n\\t\\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\\n\\t\\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\\n\\t\\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\\n\\t}\\n#endif\\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\\n\\tvec3 irradiance = dotNL * directLight.color;\\n\\t#ifndef PHYSICALLY_CORRECT_LIGHTS\\n\\t\\tirradiance *= PI;\\n\\t#endif\\n\\t#ifndef STANDARD\\n\\t\\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\\n\\t#else\\n\\t\\tfloat clearCoatDHR = 0.0;\\n\\t#endif\\n\\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\\n\\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\\n\\t#ifndef STANDARD\\n\\t\\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\\n\\t#endif\\n}\\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\t#ifndef ENVMAP_TYPE_CUBE_UV\\n\\t\\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\\n\\t#endif\\n}\\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\\n\\t#ifndef STANDARD\\n\\t\\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\\n\\t\\tfloat dotNL = dotNV;\\n\\t\\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\\n\\t#else\\n\\t\\tfloat clearCoatDHR = 0.0;\\n\\t#endif\\n\\tfloat clearCoatInv = 1.0 - clearCoatDHR;\\n\\t#if defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\tvec3 singleScattering = vec3( 0.0 );\\n\\t\\tvec3 multiScattering = vec3( 0.0 );\\n\\t\\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\\n\\t\\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\\n\\t\\tvec3 diffuse = material.diffuseColor;\\n\\t\\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\\n\\t\\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\\n\\t\\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\\n\\t#else\\n\\t\\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\\n\\t#endif\\n\\t#ifndef STANDARD\\n\\t\\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\\n\\t#endif\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_Physical\\n#define RE_Direct_RectArea\\t\\tRE_Direct_RectArea_Physical\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_Physical\\n#define RE_IndirectSpecular\\t\\tRE_IndirectSpecular_Physical\\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\\n\\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\\n}\",gr=\"\\nGeometricContext geometry;\\ngeometry.position = - vViewPosition;\\ngeometry.normal = normal;\\ngeometry.viewDir = normalize( vViewPosition );\\nIncidentLight directLight;\\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tPointLight pointLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\\n\\t\\tpointLight = pointLights[ i ];\\n\\t\\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\\n\\t\\t#ifdef USE_SHADOWMAP\\n\\t\\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometry, material, reflectedLight );\\n\\t}\\n#endif\\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tSpotLight spotLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\\n\\t\\tspotLight = spotLights[ i ];\\n\\t\\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\\n\\t\\t#ifdef USE_SHADOWMAP\\n\\t\\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometry, material, reflectedLight );\\n\\t}\\n#endif\\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tDirectionalLight directionalLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\\n\\t\\tdirectionalLight = directionalLights[ i ];\\n\\t\\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\\n\\t\\t#ifdef USE_SHADOWMAP\\n\\t\\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometry, material, reflectedLight );\\n\\t}\\n#endif\\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\\n\\tRectAreaLight rectAreaLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\\n\\t\\trectAreaLight = rectAreaLights[ i ];\\n\\t\\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\\n\\t}\\n#endif\\n#if defined( RE_IndirectDiffuse )\\n\\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\\n\\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\\n\\t#if ( NUM_HEMI_LIGHTS > 0 )\\n\\t\\t#pragma unroll_loop\\n\\t\\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\\n\\t\\t\\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\\n\\t\\t}\\n\\t#endif\\n#endif\\n#if defined( RE_IndirectSpecular )\\n\\tvec3 radiance = vec3( 0.0 );\\n\\tvec3 clearCoatRadiance = vec3( 0.0 );\\n#endif\",yr=\"#if defined( RE_IndirectDiffuse )\\n\\t#ifdef USE_LIGHTMAP\\n\\t\\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\\n\\t\\t#ifndef PHYSICALLY_CORRECT_LIGHTS\\n\\t\\t\\tlightMapIrradiance *= PI;\\n\\t\\t#endif\\n\\t\\tirradiance += lightMapIrradiance;\\n\\t#endif\\n\\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\\n\\t#endif\\n#endif\\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\\n\\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\\n\\t#ifndef STANDARD\\n\\t\\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\\n\\t#endif\\n#endif\",xr=\"#if defined( RE_IndirectDiffuse )\\n\\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\\n#endif\\n#if defined( RE_IndirectSpecular )\\n\\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\\n#endif\",br=\"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\\n\\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\\n#endif\",wr=\"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\\n\\tuniform float logDepthBufFC;\\n\\tvarying float vFragDepth;\\n#endif\",_r=\"#ifdef USE_LOGDEPTHBUF\\n\\t#ifdef USE_LOGDEPTHBUF_EXT\\n\\t\\tvarying float vFragDepth;\\n\\t#else\\n\\t\\tuniform float logDepthBufFC;\\n\\t#endif\\n#endif\",Mr=\"#ifdef USE_LOGDEPTHBUF\\n\\t#ifdef USE_LOGDEPTHBUF_EXT\\n\\t\\tvFragDepth = 1.0 + gl_Position.w;\\n\\t#else\\n\\t\\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\\n\\t\\tgl_Position.z *= gl_Position.w;\\n\\t#endif\\n#endif\",Sr=\"#ifdef USE_MAP\\n\\tvec4 texelColor = texture2D( map, vUv );\\n\\ttexelColor = mapTexelToLinear( texelColor );\\n\\tdiffuseColor *= texelColor;\\n#endif\",Er=\"#ifdef USE_MAP\\n\\tuniform sampler2D map;\\n#endif\",Tr=\"#ifdef USE_MAP\\n\\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\\n\\tvec4 mapTexel = texture2D( map, uv );\\n\\tdiffuseColor *= mapTexelToLinear( mapTexel );\\n#endif\",Ar=\"#ifdef USE_MAP\\n\\tuniform mat3 uvTransform;\\n\\tuniform sampler2D map;\\n#endif\",Lr=\"float metalnessFactor = metalness;\\n#ifdef USE_METALNESSMAP\\n\\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\\n\\tmetalnessFactor *= texelMetalness.b;\\n#endif\",Pr=\"#ifdef USE_METALNESSMAP\\n\\tuniform sampler2D metalnessMap;\\n#endif\",Rr=\"#ifdef USE_MORPHNORMALS\\n\\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\\n\\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\\n\\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\\n\\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\\n#endif\",Cr=\"#ifdef USE_MORPHTARGETS\\n\\t#ifndef USE_MORPHNORMALS\\n\\tuniform float morphTargetInfluences[ 8 ];\\n\\t#else\\n\\tuniform float morphTargetInfluences[ 4 ];\\n\\t#endif\\n#endif\",Or=\"#ifdef USE_MORPHTARGETS\\n\\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\\n\\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\\n\\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\\n\\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\\n\\t#ifndef USE_MORPHNORMALS\\n\\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\\n\\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\\n\\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\\n\\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\\n\\t#endif\\n#endif\",Ir=\"#ifdef FLAT_SHADED\\n\\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\\n\\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\\n\\tvec3 normal = normalize( cross( fdx, fdy ) );\\n#else\\n\\tvec3 normal = normalize( vNormal );\\n\\t#ifdef DOUBLE_SIDED\\n\\t\\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t#endif\\n\\t#ifdef USE_TANGENT\\n\\t\\tvec3 tangent = normalize( vTangent );\\n\\t\\tvec3 bitangent = normalize( vBitangent );\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t\\t\\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t\\t#endif\\n\\t#endif\\n#endif\",Dr=\"#ifdef USE_NORMALMAP\\n\\t#ifdef OBJECTSPACE_NORMALMAP\\n\\t\\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\\n\\t\\t#ifdef FLIP_SIDED\\n\\t\\t\\tnormal = - normal;\\n\\t\\t#endif\\n\\t\\t#ifdef DOUBLE_SIDED\\n\\t\\t\\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t\\t#endif\\n\\t\\tnormal = normalize( normalMatrix * normal );\\n\\t#else\\n\\t\\t#ifdef USE_TANGENT\\n\\t\\t\\tmat3 vTBN = mat3( tangent, bitangent, normal );\\n\\t\\t\\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\\n\\t\\t\\tmapN.xy = normalScale * mapN.xy;\\n\\t\\t\\tnormal = normalize( vTBN * mapN );\\n\\t\\t#else\\n\\t\\t\\tnormal = perturbNormal2Arb( -vViewPosition, normal );\\n\\t\\t#endif\\n\\t#endif\\n#elif defined( USE_BUMPMAP )\\n\\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\\n#endif\",Nr=\"#ifdef USE_NORMALMAP\\n\\tuniform sampler2D normalMap;\\n\\tuniform vec2 normalScale;\\n\\t#ifdef OBJECTSPACE_NORMALMAP\\n\\t\\tuniform mat3 normalMatrix;\\n\\t#else\\n\\t\\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\\n\\t\\t\\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\\n\\t\\t\\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\\n\\t\\t\\tvec2 st0 = dFdx( vUv.st );\\n\\t\\t\\tvec2 st1 = dFdy( vUv.st );\\n\\t\\t\\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\\n\\t\\t\\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\\n\\t\\t\\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\\n\\t\\t\\tvec3 N = normalize( surf_norm );\\n\\t\\t\\tmat3 tsn = mat3( S, T, N );\\n\\t\\t\\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\\n\\t\\t\\tmapN.xy *= normalScale;\\n\\t\\t\\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\\n\\t\\t\\treturn normalize( tsn * mapN );\\n\\t\\t}\\n\\t#endif\\n#endif\",Br=\"vec3 packNormalToRGB( const in vec3 normal ) {\\n\\treturn normalize( normal ) * 0.5 + 0.5;\\n}\\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\\n\\treturn 2.0 * rgb.xyz - 1.0;\\n}\\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\\nconst float ShiftRight8 = 1. / 256.;\\nvec4 packDepthToRGBA( const in float v ) {\\n\\tvec4 r = vec4( fract( v * PackFactors ), v );\\n\\tr.yzw -= r.xyz * ShiftRight8;\\treturn r * PackUpscale;\\n}\\nfloat unpackRGBAToDepth( const in vec4 v ) {\\n\\treturn dot( v, UnpackFactors );\\n}\\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\\n\\treturn ( viewZ + near ) / ( near - far );\\n}\\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\\n\\treturn linearClipZ * ( near - far ) - near;\\n}\\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\\n\\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\\n}\\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\\n\\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\\n}\",zr=\"#ifdef PREMULTIPLIED_ALPHA\\n\\tgl_FragColor.rgb *= gl_FragColor.a;\\n#endif\",Ur=\"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\\ngl_Position = projectionMatrix * mvPosition;\",Gr=\"#if defined( DITHERING )\\n\\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\\n#endif\",Fr=\"#if defined( DITHERING )\\n\\tvec3 dithering( vec3 color ) {\\n\\t\\tfloat grid_position = rand( gl_FragCoord.xy );\\n\\t\\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\\n\\t\\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\\n\\t\\treturn color + dither_shift_RGB;\\n\\t}\\n#endif\",Hr=\"float roughnessFactor = roughness;\\n#ifdef USE_ROUGHNESSMAP\\n\\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\\n\\troughnessFactor *= texelRoughness.g;\\n#endif\",jr=\"#ifdef USE_ROUGHNESSMAP\\n\\tuniform sampler2D roughnessMap;\\n#endif\",kr=\"#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHTS > 0\\n\\t\\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\\n\\t\\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHTS > 0\\n\\t\\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\\n\\t\\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\\n\\t#endif\\n\\t#if NUM_POINT_LIGHTS > 0\\n\\t\\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\\n\\t\\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\\n\\t#endif\\n\\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\\n\\t\\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\\n\\t}\\n\\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\\n\\t\\tconst vec2 offset = vec2( 0.0, 1.0 );\\n\\t\\tvec2 texelSize = vec2( 1.0 ) / size;\\n\\t\\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\\n\\t\\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\\n\\t\\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\\n\\t\\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\\n\\t\\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\\n\\t\\tvec2 f = fract( uv * size + 0.5 );\\n\\t\\tfloat a = mix( lb, lt, f.y );\\n\\t\\tfloat b = mix( rb, rt, f.y );\\n\\t\\tfloat c = mix( a, b, f.x );\\n\\t\\treturn c;\\n\\t}\\n\\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\\n\\t\\tfloat shadow = 1.0;\\n\\t\\tshadowCoord.xyz /= shadowCoord.w;\\n\\t\\tshadowCoord.z += shadowBias;\\n\\t\\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\\n\\t\\tbool inFrustum = all( inFrustumVec );\\n\\t\\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\\n\\t\\tbool frustumTest = all( frustumTestVec );\\n\\t\\tif ( frustumTest ) {\\n\\t\\t#if defined( SHADOWMAP_TYPE_PCF )\\n\\t\\t\\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\\n\\t\\t\\tfloat dx0 = - texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy0 = - texelSize.y * shadowRadius;\\n\\t\\t\\tfloat dx1 = + texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy1 = + texelSize.y * shadowRadius;\\n\\t\\t\\tshadow = (\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\\n\\t\\t\\t) * ( 1.0 / 9.0 );\\n\\t\\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\\n\\t\\t\\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\\n\\t\\t\\tfloat dx0 = - texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy0 = - texelSize.y * shadowRadius;\\n\\t\\t\\tfloat dx1 = + texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy1 = + texelSize.y * shadowRadius;\\n\\t\\t\\tshadow = (\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\\n\\t\\t\\t) * ( 1.0 / 9.0 );\\n\\t\\t#else\\n\\t\\t\\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\\n\\t\\t#endif\\n\\t\\t}\\n\\t\\treturn shadow;\\n\\t}\\n\\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\\n\\t\\tvec3 absV = abs( v );\\n\\t\\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\\n\\t\\tabsV *= scaleToCube;\\n\\t\\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\\n\\t\\tvec2 planar = v.xy;\\n\\t\\tfloat almostATexel = 1.5 * texelSizeY;\\n\\t\\tfloat almostOne = 1.0 - almostATexel;\\n\\t\\tif ( absV.z >= almostOne ) {\\n\\t\\t\\tif ( v.z > 0.0 )\\n\\t\\t\\t\\tplanar.x = 4.0 - v.x;\\n\\t\\t} else if ( absV.x >= almostOne ) {\\n\\t\\t\\tfloat signX = sign( v.x );\\n\\t\\t\\tplanar.x = v.z * signX + 2.0 * signX;\\n\\t\\t} else if ( absV.y >= almostOne ) {\\n\\t\\t\\tfloat signY = sign( v.y );\\n\\t\\t\\tplanar.x = v.x + 2.0 * signY + 2.0;\\n\\t\\t\\tplanar.y = v.z * signY - 2.0;\\n\\t\\t}\\n\\t\\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\\n\\t}\\n\\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\\n\\t\\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\\n\\t\\tvec3 lightToPosition = shadowCoord.xyz;\\n\\t\\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\\t\\tdp += shadowBias;\\n\\t\\tvec3 bd3D = normalize( lightToPosition );\\n\\t\\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\\n\\t\\t\\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\\n\\t\\t\\treturn (\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\\n\\t\\t\\t) * ( 1.0 / 9.0 );\\n\\t\\t#else\\n\\t\\t\\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\\n\\t\\t#endif\\n\\t}\\n#endif\",Vr=\"#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHTS > 0\\n\\t\\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\\n\\t\\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHTS > 0\\n\\t\\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\\n\\t\\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\\n\\t#endif\\n\\t#if NUM_POINT_LIGHTS > 0\\n\\t\\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\\n\\t\\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\\n\\t#endif\\n#endif\",Wr=\"#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\\n\\t\\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\\n\\t}\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\\n\\t\\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\\n\\t}\\n\\t#endif\\n\\t#if NUM_POINT_LIGHTS > 0\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\\n\\t\\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\\n\\t}\\n\\t#endif\\n#endif\",qr=\"float getShadowMask() {\\n\\tfloat shadow = 1.0;\\n\\t#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHTS > 0\\n\\tDirectionalLight directionalLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\\n\\t\\tdirectionalLight = directionalLights[ i ];\\n\\t\\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\\n\\t}\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHTS > 0\\n\\tSpotLight spotLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\\n\\t\\tspotLight = spotLights[ i ];\\n\\t\\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\\n\\t}\\n\\t#endif\\n\\t#if NUM_POINT_LIGHTS > 0\\n\\tPointLight pointLight;\\n\\t#pragma unroll_loop\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\\n\\t\\tpointLight = pointLights[ i ];\\n\\t\\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\\n\\t}\\n\\t#endif\\n\\t#endif\\n\\treturn shadow;\\n}\",Xr=\"#ifdef USE_SKINNING\\n\\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\\n\\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\\n\\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\\n\\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\\n#endif\",Yr=\"#ifdef USE_SKINNING\\n\\tuniform mat4 bindMatrix;\\n\\tuniform mat4 bindMatrixInverse;\\n\\t#ifdef BONE_TEXTURE\\n\\t\\tuniform sampler2D boneTexture;\\n\\t\\tuniform int boneTextureSize;\\n\\t\\tmat4 getBoneMatrix( const in float i ) {\\n\\t\\t\\tfloat j = i * 4.0;\\n\\t\\t\\tfloat x = mod( j, float( boneTextureSize ) );\\n\\t\\t\\tfloat y = floor( j / float( boneTextureSize ) );\\n\\t\\t\\tfloat dx = 1.0 / float( boneTextureSize );\\n\\t\\t\\tfloat dy = 1.0 / float( boneTextureSize );\\n\\t\\t\\ty = dy * ( y + 0.5 );\\n\\t\\t\\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\\n\\t\\t\\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\\n\\t\\t\\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\\n\\t\\t\\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\\n\\t\\t\\tmat4 bone = mat4( v1, v2, v3, v4 );\\n\\t\\t\\treturn bone;\\n\\t\\t}\\n\\t#else\\n\\t\\tuniform mat4 boneMatrices[ MAX_BONES ];\\n\\t\\tmat4 getBoneMatrix( const in float i ) {\\n\\t\\t\\tmat4 bone = boneMatrices[ int(i) ];\\n\\t\\t\\treturn bone;\\n\\t\\t}\\n\\t#endif\\n#endif\",Jr=\"#ifdef USE_SKINNING\\n\\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\\n\\tvec4 skinned = vec4( 0.0 );\\n\\tskinned += boneMatX * skinVertex * skinWeight.x;\\n\\tskinned += boneMatY * skinVertex * skinWeight.y;\\n\\tskinned += boneMatZ * skinVertex * skinWeight.z;\\n\\tskinned += boneMatW * skinVertex * skinWeight.w;\\n\\ttransformed = ( bindMatrixInverse * skinned ).xyz;\\n#endif\",Zr=\"#ifdef USE_SKINNING\\n\\tmat4 skinMatrix = mat4( 0.0 );\\n\\tskinMatrix += skinWeight.x * boneMatX;\\n\\tskinMatrix += skinWeight.y * boneMatY;\\n\\tskinMatrix += skinWeight.z * boneMatZ;\\n\\tskinMatrix += skinWeight.w * boneMatW;\\n\\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\\n\\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\\n\\t#ifdef USE_TANGENT\\n\\t\\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\\n\\t#endif\\n#endif\",Qr=\"float specularStrength;\\n#ifdef USE_SPECULARMAP\\n\\tvec4 texelSpecular = texture2D( specularMap, vUv );\\n\\tspecularStrength = texelSpecular.r;\\n#else\\n\\tspecularStrength = 1.0;\\n#endif\",Kr=\"#ifdef USE_SPECULARMAP\\n\\tuniform sampler2D specularMap;\\n#endif\",$r=\"#if defined( TONE_MAPPING )\\n\\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\\n#endif\",ti=\"#ifndef saturate\\n\\t#define saturate(a) clamp( a, 0.0, 1.0 )\\n#endif\\nuniform float toneMappingExposure;\\nuniform float toneMappingWhitePoint;\\nvec3 LinearToneMapping( vec3 color ) {\\n\\treturn toneMappingExposure * color;\\n}\\nvec3 ReinhardToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\treturn saturate( color / ( vec3( 1.0 ) + color ) );\\n}\\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\\nvec3 Uncharted2ToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\\n}\\nvec3 OptimizedCineonToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\tcolor = max( vec3( 0.0 ), color - 0.004 );\\n\\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\\n}\\nvec3 ACESFilmicToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\\n}\",ei=\"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\\n\\tvarying vec2 vUv;\\n#endif\",ni=\"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\\n\\tvarying vec2 vUv;\\n\\tuniform mat3 uvTransform;\\n#endif\",ri=\"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\\n\\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\\n#endif\",ii=\"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\\n\\tvarying vec2 vUv2;\\n#endif\",oi=\"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\\n\\tattribute vec2 uv2;\\n\\tvarying vec2 vUv2;\\n#endif\",ai=\"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\\n\\tvUv2 = uv2;\\n#endif\",si=\"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\\n\\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\\n#endif\",ci=\"uniform sampler2D t2D;\\nvarying vec2 vUv;\\nvoid main() {\\n\\tvec4 texColor = texture2D( t2D, vUv );\\n\\tgl_FragColor = mapTexelToLinear( texColor );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n}\",ui=\"varying vec2 vUv;\\nuniform mat3 uvTransform;\\nvoid main() {\\n\\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\\n\\tgl_Position = vec4( position.xy, 1.0, 1.0 );\\n}\",li=\"uniform samplerCube tCube;\\nuniform float tFlip;\\nuniform float opacity;\\nvarying vec3 vWorldDirection;\\nvoid main() {\\n\\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\\n\\tgl_FragColor = mapTexelToLinear( texColor );\\n\\tgl_FragColor.a *= opacity;\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n}\",hi=\"varying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n\\tgl_Position.z = gl_Position.w;\\n}\",pi=\"#if DEPTH_PACKING == 3200\\n\\tuniform float opacity;\\n#endif\\n#include <common>\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( 1.0 );\\n\\t#if DEPTH_PACKING == 3200\\n\\t\\tdiffuseColor.a = opacity;\\n\\t#endif\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <logdepthbuf_fragment>\\n\\t#if DEPTH_PACKING == 3200\\n\\t\\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\\n\\t#elif DEPTH_PACKING == 3201\\n\\t\\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\\n\\t#endif\\n}\",di=\"#include <common>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#ifdef USE_DISPLACEMENTMAP\\n\\t\\t#include <beginnormal_vertex>\\n\\t\\t#include <morphnormal_vertex>\\n\\t\\t#include <skinnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n}\",fi=\"#define DISTANCE\\nuniform vec3 referencePosition;\\nuniform float nearDistance;\\nuniform float farDistance;\\nvarying vec3 vWorldPosition;\\n#include <common>\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main () {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( 1.0 );\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\tfloat dist = length( vWorldPosition - referencePosition );\\n\\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\\n\\tdist = saturate( dist );\\n\\tgl_FragColor = packDepthToRGBA( dist );\\n}\",mi=\"#define DISTANCE\\nvarying vec3 vWorldPosition;\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#ifdef USE_DISPLACEMENTMAP\\n\\t\\t#include <beginnormal_vertex>\\n\\t\\t#include <morphnormal_vertex>\\n\\t\\t#include <skinnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvWorldPosition = worldPosition.xyz;\\n}\",vi=\"uniform sampler2D tEquirect;\\nvarying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvec3 direction = normalize( vWorldDirection );\\n\\tvec2 sampleUV;\\n\\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\\n\\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\\n\\tvec4 texColor = texture2D( tEquirect, sampleUV );\\n\\tgl_FragColor = mapTexelToLinear( texColor );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n}\",gi=\"varying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n}\",yi=\"uniform vec3 diffuse;\\nuniform float opacity;\\nuniform float dashSize;\\nuniform float totalSize;\\nvarying float vLineDistance;\\n#include <common>\\n#include <color_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\\n\\t\\tdiscard;\\n\\t}\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <color_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n}\",xi=\"uniform float scale;\\nattribute float lineDistance;\\nvarying float vLineDistance;\\n#include <common>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <color_vertex>\\n\\tvLineDistance = scale * lineDistance;\\n\\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\\n\\tgl_Position = projectionMatrix * mvPosition;\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n}\",bi=\"uniform vec3 diffuse;\\nuniform float opacity;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\n#include <common>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <specularmap_fragment>\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\t#ifdef USE_LIGHTMAP\\n\\t\\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\\n\\t#else\\n\\t\\treflectedLight.indirectDiffuse += vec3( 1.0 );\\n\\t#endif\\n\\t#include <aomap_fragment>\\n\\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\\n\\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\\n\\t#include <envmap_fragment>\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n}\",wi=\"#include <common>\\n#include <uv_pars_vertex>\\n#include <uv2_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <uv2_vertex>\\n\\t#include <color_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#ifdef USE_ENVMAP\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <fog_vertex>\\n}\",_i=\"uniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform float opacity;\\nvarying vec3 vLightFront;\\nvarying vec3 vIndirectFront;\\n#ifdef DOUBLE_SIDED\\n\\tvarying vec3 vLightBack;\\n\\tvarying vec3 vIndirectBack;\\n#endif\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <fog_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <shadowmask_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <specularmap_fragment>\\n\\t#include <emissivemap_fragment>\\n\\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\\n\\t#ifdef DOUBLE_SIDED\\n\\t\\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\\n\\t#else\\n\\t\\treflectedLight.indirectDiffuse += vIndirectFront;\\n\\t#endif\\n\\t#include <lightmap_fragment>\\n\\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\\n\\t#ifdef DOUBLE_SIDED\\n\\t\\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\\n\\t#else\\n\\t\\treflectedLight.directDiffuse = vLightFront;\\n\\t#endif\\n\\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\\n\\t#include <envmap_fragment>\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",Mi=\"#define LAMBERT\\nvarying vec3 vLightFront;\\nvarying vec3 vIndirectFront;\\n#ifdef DOUBLE_SIDED\\n\\tvarying vec3 vLightBack;\\n\\tvarying vec3 vIndirectBack;\\n#endif\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <uv2_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <uv2_vertex>\\n\\t#include <color_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <lights_lambert_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",Si=\"#define MATCAP\\nuniform vec3 diffuse;\\nuniform float opacity;\\nuniform sampler2D matcap;\\nvarying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\n#include <common>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\tvec3 viewDir = normalize( vViewPosition );\\n\\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\\n\\tvec3 y = cross( viewDir, x );\\n\\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\\n\\t#ifdef USE_MATCAP\\n\\t\\tvec4 matcapColor = texture2D( matcap, uv );\\n\\t\\tmatcapColor = matcapTexelToLinear( matcapColor );\\n\\t#else\\n\\t\\tvec4 matcapColor = vec4( 1.0 );\\n\\t#endif\\n\\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n}\",Ei=\"#define MATCAP\\nvarying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#ifndef FLAT_SHADED\\n\\t\\tvNormal = normalize( transformedNormal );\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n}\",Ti=\"#define PHONG\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform vec3 specular;\\nuniform float shininess;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <gradientmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <lights_phong_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <specularmap_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_phong_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\\n\\t#include <envmap_fragment>\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",Ai=\"#define PHONG\\nvarying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <uv2_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <uv2_vertex>\\n\\t#include <color_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n#ifndef FLAT_SHADED\\n\\tvNormal = normalize( transformedNormal );\\n#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",Li=\"#define PHYSICAL\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform float roughness;\\nuniform float metalness;\\nuniform float opacity;\\n#ifndef STANDARD\\n\\tuniform float clearCoat;\\n\\tuniform float clearCoatRoughness;\\n#endif\\nvarying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <bsdfs>\\n#include <cube_uv_reflection_fragment>\\n#include <envmap_pars_fragment>\\n#include <envmap_physical_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <lights_pars_begin>\\n#include <lights_physical_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <roughnessmap_pars_fragment>\\n#include <metalnessmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <roughnessmap_fragment>\\n\\t#include <metalnessmap_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_physical_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",Pi=\"#define PHYSICAL\\nvarying vec3 vViewPosition;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <uv2_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <uv2_vertex>\\n\\t#include <color_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n#ifndef FLAT_SHADED\\n\\tvNormal = normalize( transformedNormal );\\n\\t#ifdef USE_TANGENT\\n\\t\\tvTangent = normalize( transformedTangent );\\n\\t\\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\\n\\t#endif\\n#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",Ri=\"#define NORMAL\\nuniform float opacity;\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\\n\\tvarying vec3 vViewPosition;\\n#endif\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\nvoid main() {\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\\n}\",Ci=\"#define NORMAL\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\\n\\tvarying vec3 vViewPosition;\\n#endif\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n#ifndef FLAT_SHADED\\n\\tvNormal = normalize( transformedNormal );\\n\\t#ifdef USE_TANGENT\\n\\t\\tvTangent = normalize( transformedTangent );\\n\\t\\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\\n\\t#endif\\n#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\\n\\tvViewPosition = - mvPosition.xyz;\\n#endif\\n}\",Oi=\"uniform vec3 diffuse;\\nuniform float opacity;\\n#include <common>\\n#include <color_pars_fragment>\\n#include <map_particle_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_particle_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphatest_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n}\",Ii=\"uniform float size;\\nuniform float scale;\\n#include <common>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <color_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <project_vertex>\\n\\tgl_PointSize = size;\\n\\t#ifdef USE_SIZEATTENUATION\\n\\t\\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\\n\\t\\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\\n\\t#endif\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <fog_vertex>\\n}\",Di=\"uniform vec3 color;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <shadowmap_pars_fragment>\\n#include <shadowmask_pars_fragment>\\nvoid main() {\\n\\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\\n\\t#include <fog_fragment>\\n}\",Ni=\"#include <fog_pars_vertex>\\n#include <shadowmap_pars_vertex>\\nvoid main() {\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",Bi=\"uniform vec3 diffuse;\\nuniform float opacity;\\n#include <common>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <alphatest_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n\\t#include <tonemapping_fragment>\\n\\t#include <encodings_fragment>\\n\\t#include <fog_fragment>\\n}\",zi=\"uniform float rotation;\\nuniform vec2 center;\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\\n\\tvec2 scale;\\n\\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\\n\\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\\n\\t#ifndef USE_SIZEATTENUATION\\n\\t\\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\\n\\t\\tif ( isPerspective ) scale *= - mvPosition.z;\\n\\t#endif\\n\\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\\n\\tvec2 rotatedPosition;\\n\\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\\n\\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\\n\\tmvPosition.xy += rotatedPosition;\\n\\tgl_Position = projectionMatrix * mvPosition;\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n}\",Ui={alphamap_fragment:An,alphamap_pars_fragment:Ln,alphatest_fragment:Pn,aomap_fragment:Rn,aomap_pars_fragment:Cn,begin_vertex:On,beginnormal_vertex:In,bsdfs:Dn,bumpmap_pars_fragment:Nn,clipping_planes_fragment:Bn,clipping_planes_pars_fragment:zn,clipping_planes_pars_vertex:Un,clipping_planes_vertex:Gn,color_fragment:Fn,color_pars_fragment:Hn,color_pars_vertex:jn,color_vertex:kn,common:Vn,cube_uv_reflection_fragment:Wn,defaultnormal_vertex:qn,displacementmap_pars_vertex:Xn,displacementmap_vertex:Yn,emissivemap_fragment:Jn,emissivemap_pars_fragment:Zn,encodings_fragment:Qn,encodings_pars_fragment:Kn,envmap_fragment:$n,envmap_pars_fragment:tr,envmap_pars_vertex:er,envmap_physical_pars_fragment:pr,envmap_vertex:nr,fog_vertex:rr,fog_pars_vertex:ir,fog_fragment:or,fog_pars_fragment:ar,gradientmap_pars_fragment:sr,lightmap_fragment:cr,lightmap_pars_fragment:ur,lights_lambert_vertex:lr,lights_pars_begin:hr,lights_phong_fragment:dr,lights_phong_pars_fragment:fr,lights_physical_fragment:mr,lights_physical_pars_fragment:vr,lights_fragment_begin:gr,lights_fragment_maps:yr,lights_fragment_end:xr,logdepthbuf_fragment:br,logdepthbuf_pars_fragment:wr,logdepthbuf_pars_vertex:_r,logdepthbuf_vertex:Mr,map_fragment:Sr,map_pars_fragment:Er,map_particle_fragment:Tr,map_particle_pars_fragment:Ar,metalnessmap_fragment:Lr,metalnessmap_pars_fragment:Pr,morphnormal_vertex:Rr,morphtarget_pars_vertex:Cr,morphtarget_vertex:Or,normal_fragment_begin:Ir,normal_fragment_maps:Dr,normalmap_pars_fragment:Nr,packing:Br,premultiplied_alpha_fragment:zr,project_vertex:Ur,dithering_fragment:Gr,dithering_pars_fragment:Fr,roughnessmap_fragment:Hr,roughnessmap_pars_fragment:jr,shadowmap_pars_fragment:kr,shadowmap_pars_vertex:Vr,shadowmap_vertex:Wr,shadowmask_pars_fragment:qr,skinbase_vertex:Xr,skinning_pars_vertex:Yr,skinning_vertex:Jr,skinnormal_vertex:Zr,specularmap_fragment:Qr,specularmap_pars_fragment:Kr,tonemapping_fragment:$r,tonemapping_pars_fragment:ti,uv_pars_fragment:ei,uv_pars_vertex:ni,uv_vertex:ri,uv2_pars_fragment:ii,uv2_pars_vertex:oi,uv2_vertex:ai,worldpos_vertex:si,background_frag:ci,background_vert:ui,cube_frag:li,cube_vert:hi,depth_frag:pi,depth_vert:di,distanceRGBA_frag:fi,distanceRGBA_vert:mi,equirect_frag:vi,equirect_vert:gi,linedashed_frag:yi,linedashed_vert:xi,meshbasic_frag:bi,meshbasic_vert:wi,meshlambert_frag:_i,meshlambert_vert:Mi,meshmatcap_frag:Si,meshmatcap_vert:Ei,meshphong_frag:Ti,meshphong_vert:Ai,meshphysical_frag:Li,meshphysical_vert:Pi,normal_frag:Ri,normal_vert:Ci,points_frag:Oi,points_vert:Ii,shadow_frag:Di,shadow_vert:Ni,sprite_frag:Bi,sprite_vert:zi};function Gi(t){var e={};for(var n in t)for(var r in e[n]={},t[n]){var i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture)?e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}return e}function Fi(t){for(var e={},n=0;n<t.length;n++){var r=Gi(t[n]);for(var i in r)e[i]=r[i]}return e}var Hi={clone:Gi,merge:Fi},ji={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function ki(t,e,n){return void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}Object.assign(ki.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):\"number\"===typeof t?this.setHex(t):\"string\"===typeof t&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},setRGB:function(t,e,n){return this.r=t,this.g=e,this.b=n,this},setHSL:function(){function t(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}return function(e,n,r){if(e=un.euclideanModulo(e,1),n=un.clamp(n,0,1),r=un.clamp(r,0,1),0===n)this.r=this.g=this.b=r;else{var i=r<=.5?r*(1+n):r+n-r*n,o=2*r-i;this.r=t(o,i,e+1/3),this.g=t(o,i,e),this.b=t(o,i,e-1/3)}return this}}(),setStyle:function(t){function e(e){void 0!==e&&parseFloat(e)<1&&console.warn(\"THREE.Color: Alpha component of \"+t+\" will be ignored.\")}var n;if(n=/^((?:rgb|hsl)a?)\\(\\s*([^\\)]*)\\)/.exec(t)){var r,i=n[1],o=n[2];switch(i){case\"rgb\":case\"rgba\":if(r=/^(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(,\\s*([0-9]*\\.?[0-9]+)\\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,e(r[5]),this;if(r=/^(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(,\\s*([0-9]*\\.?[0-9]+)\\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,e(r[5]),this;break;case\"hsl\":case\"hsla\":if(r=/^([0-9]*\\.?[0-9]+)\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(,\\s*([0-9]*\\.?[0-9]+)\\s*)?$/.exec(o)){var a=parseFloat(r[1])/360,s=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return e(r[5]),this.setHSL(a,s,c)}break}}else if(n=/^\\#([A-Fa-f0-9]+)$/.exec(t)){var u=n[1],l=u.length;if(3===l)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,this;if(6===l)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,this}if(t&&t.length>0){u=ji[t];void 0!==u?this.setHex(u):console.warn(\"THREE.Color: Unknown color \"+t)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,e){return void 0===e&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},copyLinearToGamma:function(t,e){void 0===e&&(e=2);var n=e>0?1/e:1;return this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},convertGammaToLinear:function(t){return this.copyGammaToLinear(this,t),this},convertLinearToGamma:function(t){return this.copyLinearToGamma(this,t),this},copySRGBToLinear:function(){function t(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}return function(e){return this.r=t(e.r),this.g=t(e.g),this.b=t(e.b),this}}(),copyLinearToSRGB:function(){function t(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}return function(e){return this.r=t(e.r),this.g=t(e.g),this.b=t(e.b),this}}(),convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return(\"000000\"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){void 0===t&&(console.warn(\"THREE.Color: .getHSL() target is now required\"),t={h:0,s:0,l:0});var e,n,r=this.r,i=this.g,o=this.b,a=Math.max(r,i,o),s=Math.min(r,i,o),c=(s+a)/2;if(s===a)e=0,n=0;else{var u=a-s;switch(n=c<=.5?u/(a+s):u/(2-a-s),a){case r:e=(i-o)/u+(i<o?6:0);break;case i:e=(o-r)/u+2;break;case o:e=(r-i)/u+4;break}e/=6}return t.h=e,t.s=n,t.l=c,t},getStyle:function(){return\"rgb(\"+(255*this.r|0)+\",\"+(255*this.g|0)+\",\"+(255*this.b|0)+\")\"},offsetHSL:function(){var t={};return function(e,n,r){return this.getHSL(t),t.h+=e,t.s+=n,t.l+=r,this.setHSL(t.h,t.s,t.l),this}}(),add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},lerpHSL:function(){var t={h:0,s:0,l:0},e={h:0,s:0,l:0};return function(n,r){this.getHSL(t),n.getHSL(e);var i=un.lerp(t.h,e.h,r),o=un.lerp(t.s,e.s,r),a=un.lerp(t.l,e.l,r);return this.setHSL(i,o,a),this}}(),equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,e){return void 0===e&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},toJSON:function(){return this.getHex()}});var Vi={common:{diffuse:{value:new ki(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new dn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ki(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new ki(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new dn}},sprite:{diffuse:{value:new ki(15658734)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new dn}}},Wi={basic:{uniforms:Fi([Vi.common,Vi.specularmap,Vi.envmap,Vi.aomap,Vi.lightmap,Vi.fog]),vertexShader:Ui.meshbasic_vert,fragmentShader:Ui.meshbasic_frag},lambert:{uniforms:Fi([Vi.common,Vi.specularmap,Vi.envmap,Vi.aomap,Vi.lightmap,Vi.emissivemap,Vi.fog,Vi.lights,{emissive:{value:new ki(0)}}]),vertexShader:Ui.meshlambert_vert,fragmentShader:Ui.meshlambert_frag},phong:{uniforms:Fi([Vi.common,Vi.specularmap,Vi.envmap,Vi.aomap,Vi.lightmap,Vi.emissivemap,Vi.bumpmap,Vi.normalmap,Vi.displacementmap,Vi.gradientmap,Vi.fog,Vi.lights,{emissive:{value:new ki(0)},specular:{value:new ki(1118481)},shininess:{value:30}}]),vertexShader:Ui.meshphong_vert,fragmentShader:Ui.meshphong_frag},standard:{uniforms:Fi([Vi.common,Vi.envmap,Vi.aomap,Vi.lightmap,Vi.emissivemap,Vi.bumpmap,Vi.normalmap,Vi.displacementmap,Vi.roughnessmap,Vi.metalnessmap,Vi.fog,Vi.lights,{emissive:{value:new ki(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Ui.meshphysical_vert,fragmentShader:Ui.meshphysical_frag},matcap:{uniforms:Fi([Vi.common,Vi.bumpmap,Vi.normalmap,Vi.displacementmap,Vi.fog,{matcap:{value:null}}]),vertexShader:Ui.meshmatcap_vert,fragmentShader:Ui.meshmatcap_frag},points:{uniforms:Fi([Vi.points,Vi.fog]),vertexShader:Ui.points_vert,fragmentShader:Ui.points_frag},dashed:{uniforms:Fi([Vi.common,Vi.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ui.linedashed_vert,fragmentShader:Ui.linedashed_frag},depth:{uniforms:Fi([Vi.common,Vi.displacementmap]),vertexShader:Ui.depth_vert,fragmentShader:Ui.depth_frag},normal:{uniforms:Fi([Vi.common,Vi.bumpmap,Vi.normalmap,Vi.displacementmap,{opacity:{value:1}}]),vertexShader:Ui.normal_vert,fragmentShader:Ui.normal_frag},sprite:{uniforms:Fi([Vi.sprite,Vi.fog]),vertexShader:Ui.sprite_vert,fragmentShader:Ui.sprite_frag},background:{uniforms:{uvTransform:{value:new dn},t2D:{value:null}},vertexShader:Ui.background_vert,fragmentShader:Ui.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ui.cube_vert,fragmentShader:Ui.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ui.equirect_vert,fragmentShader:Ui.equirect_frag},distanceRGBA:{uniforms:Fi([Vi.common,Vi.displacementmap,{referencePosition:{value:new pn},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ui.distanceRGBA_vert,fragmentShader:Ui.distanceRGBA_frag},shadow:{uniforms:Fi([Vi.lights,Vi.fog,{color:{value:new ki(0)},opacity:{value:1}}]),vertexShader:Ui.shadow_vert,fragmentShader:Ui.shadow_frag}};function qi(){var t=null,e=!1,n=null;function r(i,o){!1!==e&&(n(i,o),t.requestAnimationFrame(r))}return{start:function(){!0!==e&&null!==n&&(t.requestAnimationFrame(r),e=!0)},stop:function(){e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function Xi(t){var e=new WeakMap;function n(e,n){var r=e.array,i=e.dynamic?35048:35044,o=t.createBuffer();t.bindBuffer(n,o),t.bufferData(n,r,i),e.onUploadCallback();var a=5126;return r instanceof Float32Array?a=5126:r instanceof Float64Array?console.warn(\"THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.\"):r instanceof Uint16Array?a=5123:r instanceof Int16Array?a=5122:r instanceof Uint32Array?a=5125:r instanceof Int32Array?a=5124:r instanceof Int8Array?a=5120:r instanceof Uint8Array&&(a=5121),{buffer:o,type:a,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version}}function r(e,n,r){var i=n.array,o=n.updateRange;t.bindBuffer(r,e),!1===n.dynamic?t.bufferData(r,i,35044):-1===o.count?t.bufferSubData(r,0,i):0===o.count?console.error(\"THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.\"):(t.bufferSubData(r,o.offset*i.BYTES_PER_ELEMENT,i.subarray(o.offset,o.offset+o.count)),o.count=-1)}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)}function o(n){n.isInterleavedBufferAttribute&&(n=n.data);var r=e.get(n);r&&(t.deleteBuffer(r.buffer),e.delete(n))}function a(t,i){t.isInterleavedBufferAttribute&&(t=t.data);var o=e.get(t);void 0===o?e.set(t,n(t,i)):o.version<t.version&&(r(o.buffer,t,i),o.version=t.version)}return{get:i,remove:o,update:a}}function Yi(t,e,n,r,i,o){this.a=t,this.b=e,this.c=n,this.normal=r&&r.isVector3?r:new pn,this.vertexNormals=Array.isArray(r)?r:[],this.color=i&&i.isColor?i:new ki,this.vertexColors=Array.isArray(i)?i:[],this.materialIndex=void 0!==o?o:0}function Ji(t,e,n,r){this._x=t||0,this._y=e||0,this._z=n||0,this._order=r||Ji.DefaultOrder}function Zi(){this.mask=1}Wi.physical={uniforms:Fi([Wi.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Ui.meshphysical_vert,fragmentShader:Ui.meshphysical_frag},Object.assign(Yi.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var e=0,n=t.vertexNormals.length;e<n;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(e=0,n=t.vertexColors.length;e<n;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}}),Ji.RotationOrders=[\"XYZ\",\"YZX\",\"ZXY\",\"XZY\",\"YXZ\",\"ZYX\"],Ji.DefaultOrder=\"XYZ\",Object.defineProperties(Ji.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback()}}}),Object.assign(Ji.prototype,{isEuler:!0,set:function(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._order=r||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this.onChangeCallback(),this},setFromRotationMatrix:function(t,e,n){var r=un.clamp,i=t.elements,o=i[0],a=i[4],s=i[8],c=i[1],u=i[5],l=i[9],h=i[2],p=i[6],d=i[10];return e=e||this._order,\"XYZ\"===e?(this._y=Math.asin(r(s,-1,1)),Math.abs(s)<.99999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0)):\"YXZ\"===e?(this._x=Math.asin(-r(l,-1,1)),Math.abs(l)<.99999?(this._y=Math.atan2(s,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,o),this._z=0)):\"ZXY\"===e?(this._x=Math.asin(r(p,-1,1)),Math.abs(p)<.99999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o))):\"ZYX\"===e?(this._y=Math.asin(-r(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u))):\"YZX\"===e?(this._z=Math.asin(r(c,-1,1)),Math.abs(c)<.99999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(s,d))):\"XZY\"===e?(this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.99999?(this._x=Math.atan2(p,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-l,d),this._y=0)):console.warn(\"THREE.Euler: .setFromRotationMatrix() given unsupported order: \"+e),this._order=e,!1!==n&&this.onChangeCallback(),this},setFromQuaternion:function(){var t=new Tn;return function(e,n,r){return t.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t,n,r)}}(),setFromVector3:function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},reorder:function(){var t=new hn;return function(e){return t.setFromEuler(this),this.setFromQuaternion(t,e)}}(),equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this.onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new pn(this._x,this._y,this._z)},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}}),Object.assign(Zi.prototype,{set:function(t){this.mask=1<<t|0},enable:function(t){this.mask|=1<<t|0},toggle:function(t){this.mask^=1<<t|0},disable:function(t){this.mask&=~(1<<t|0)},test:function(t){return 0!==(this.mask&t.mask)}});var Qi=0;function Ki(){Object.defineProperty(this,\"id\",{value:Qi++}),this.uuid=un.generateUUID(),this.name=\"\",this.type=\"Object3D\",this.parent=null,this.children=[],this.up=Ki.DefaultUp.clone();var t=new pn,e=new Ji,n=new hn,r=new pn(1,1,1);function i(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e.onChange(i),n.onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tn},normalMatrix:{value:new dn}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=Ki.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}Ki.DefaultUp=new pn(0,1,0),Ki.DefaultMatrixAutoUpdate=!0,Ki.prototype=Object.assign(Object.create(E.prototype),{constructor:Ki,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(){var t=new hn;return function(e,n){return t.setFromAxisAngle(e,n),this.quaternion.multiply(t),this}}(),rotateOnWorldAxis:function(){var t=new hn;return function(e,n){return t.setFromAxisAngle(e,n),this.quaternion.premultiply(t),this}}(),rotateX:function(){var t=new pn(1,0,0);return function(e){return this.rotateOnAxis(t,e)}}(),rotateY:function(){var t=new pn(0,1,0);return function(e){return this.rotateOnAxis(t,e)}}(),rotateZ:function(){var t=new pn(0,0,1);return function(e){return this.rotateOnAxis(t,e)}}(),translateOnAxis:function(){var t=new pn;return function(e,n){return t.copy(e).applyQuaternion(this.quaternion),this.position.add(t.multiplyScalar(n)),this}}(),translateX:function(){var t=new pn(1,0,0);return function(e){return this.translateOnAxis(t,e)}}(),translateY:function(){var t=new pn(0,1,0);return function(e){return this.translateOnAxis(t,e)}}(),translateZ:function(){var t=new pn(0,0,1);return function(e){return this.translateOnAxis(t,e)}}(),localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var t=new Tn;return function(e){return e.applyMatrix4(t.getInverse(this.matrixWorld))}}(),lookAt:function(){var t=new hn,e=new Tn,n=new pn,r=new pn;return function(i,o,a){i.isVector3?n.copy(i):n.set(i,o,a);var s=this.parent;this.updateWorldMatrix(!0,!1),r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?e.lookAt(r,n,this.up):e.lookAt(n,r,this.up),this.quaternion.setFromRotationMatrix(e),s&&(e.extractRotation(s.matrixWorld),t.setFromRotationMatrix(e),this.quaternion.premultiply(t.inverse()))}}(),add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error(\"THREE.Object3D.add: object can't be added as a child of itself.\",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,t.dispatchEvent({type:\"added\"}),this.children.push(t)):console.error(\"THREE.Object3D.add: object not an instance of THREE.Object3D.\",t),this)},remove:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}var n=this.children.indexOf(t);return-1!==n&&(t.parent=null,t.dispatchEvent({type:\"removed\"}),this.children.splice(n,1)),this},getObjectById:function(t){return this.getObjectByProperty(\"id\",t)},getObjectByName:function(t){return this.getObjectByProperty(\"name\",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(var n=0,r=this.children.length;n<r;n++){var i=this.children[n],o=i.getObjectByProperty(t,e);if(void 0!==o)return o}},getWorldPosition:function(t){return void 0===t&&(console.warn(\"THREE.Object3D: .getWorldPosition() target is now required\"),t=new pn),this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var t=new pn,e=new pn;return function(n){return void 0===n&&(console.warn(\"THREE.Object3D: .getWorldQuaternion() target is now required\"),n=new hn),this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,n,e),n}}(),getWorldScale:function(){var t=new pn,e=new hn;return function(n){return void 0===n&&(console.warn(\"THREE.Object3D: .getWorldScale() target is now required\"),n=new pn),this.updateMatrixWorld(!0),this.matrixWorld.decompose(t,e,n),n}}(),getWorldDirection:function(t){void 0===t&&(console.warn(\"THREE.Object3D: .getWorldDirection() target is now required\"),t=new pn),this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);for(var e=this.children,n=0,r=e.length;n<r;n++)e[n].traverse(t)},traverseVisible:function(t){if(!1!==this.visible){t(this);for(var e=this.children,n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}},traverseAncestors:function(t){var e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);for(var e=this.children,n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){var n=this.parent;if(!0===t&&null!==n&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e)for(var r=this.children,i=0,o=r.length;i<o;i++)r[i].updateWorldMatrix(!1,!0)},toJSON:function(t){var e=void 0===t||\"string\"===typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:\"Object\",generator:\"Object3D.toJSON\"});var r={};function i(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(r.uuid=this.uuid,r.type=this.type,\"\"!==this.name&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),0!==this.renderOrder&&(r.renderOrder=this.renderOrder),\"{}\"!==JSON.stringify(this.userData)&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isMesh&&this.drawMode!==Xe&&(r.drawMode=this.drawMode),this.isMesh||this.isLine||this.isPoints){r.geometry=i(t.geometries,this.geometry);var o=this.geometry.parameters;if(void 0!==o&&void 0!==o.shapes){var a=o.shapes;if(Array.isArray(a))for(var s=0,c=a.length;s<c;s++){var u=a[s];i(t.shapes,u)}else i(t.shapes,a)}}if(void 0!==this.material)if(Array.isArray(this.material)){var l=[];for(s=0,c=this.material.length;s<c;s++)l.push(i(t.materials,this.material[s]));r.material=l}else r.material=i(t.materials,this.material);if(this.children.length>0){r.children=[];for(s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(t).object)}if(e){var h=m(t.geometries),p=m(t.materials),d=m(t.textures),f=m(t.images);a=m(t.shapes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),a.length>0&&(n.shapes=a)}return n.object=r,n;function m(t){var e=[];for(var n in t){var r=t[n];delete r.metadata,e.push(r)}return e}},clone:function(t){return(new this.constructor).copy(this,t)},copy:function(t,e){if(void 0===e&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(var n=0;n<t.children.length;n++){var r=t.children[n];this.add(r.clone())}return this}});var $i=0;function to(){Object.defineProperty(this,\"id\",{value:$i+=2}),this.uuid=un.generateUUID(),this.name=\"\",this.type=\"Geometry\",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}function eo(t,e,n){if(Array.isArray(t))throw new TypeError(\"THREE.BufferAttribute: array should be a Typed Array.\");this.name=\"\",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===n,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}function no(t,e,n){eo.call(this,new Int8Array(t),e,n)}function ro(t,e,n){eo.call(this,new Uint8Array(t),e,n)}function io(t,e,n){eo.call(this,new Uint8ClampedArray(t),e,n)}function oo(t,e,n){eo.call(this,new Int16Array(t),e,n)}function ao(t,e,n){eo.call(this,new Uint16Array(t),e,n)}function so(t,e,n){eo.call(this,new Int32Array(t),e,n)}function co(t,e,n){eo.call(this,new Uint32Array(t),e,n)}function uo(t,e,n){eo.call(this,new Float32Array(t),e,n)}function lo(t,e,n){eo.call(this,new Float64Array(t),e,n)}function ho(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}function po(t){if(0===t.length)return-1/0;for(var e=t[0],n=1,r=t.length;n<r;++n)t[n]>e&&(e=t[n]);return e}to.prototype=Object.assign(Object.create(E.prototype),{constructor:to,isGeometry:!0,applyMatrix:function(t){for(var e=(new dn).getNormalMatrix(t),n=0,r=this.vertices.length;n<r;n++){var i=this.vertices[n];i.applyMatrix4(t)}for(n=0,r=this.faces.length;n<r;n++){var o=this.faces[n];o.normal.applyMatrix3(e).normalize();for(var a=0,s=o.vertexNormals.length;a<s;a++)o.vertexNormals[a].applyMatrix3(e).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){var t=new Tn;return function(e){return t.makeRotationX(e),this.applyMatrix(t),this}}(),rotateY:function(){var t=new Tn;return function(e){return t.makeRotationY(e),this.applyMatrix(t),this}}(),rotateZ:function(){var t=new Tn;return function(e){return t.makeRotationZ(e),this.applyMatrix(t),this}}(),translate:function(){var t=new Tn;return function(e,n,r){return t.makeTranslation(e,n,r),this.applyMatrix(t),this}}(),scale:function(){var t=new Tn;return function(e,n,r){return t.makeScale(e,n,r),this.applyMatrix(t),this}}(),lookAt:function(){var t=new Ki;return function(e){t.lookAt(e),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),fromBufferGeometry:function(t){var e=this,n=null!==t.index?t.index.array:void 0,r=t.attributes,i=r.position.array,o=void 0!==r.normal?r.normal.array:void 0,a=void 0!==r.color?r.color.array:void 0,s=void 0!==r.uv?r.uv.array:void 0,c=void 0!==r.uv2?r.uv2.array:void 0;void 0!==c&&(this.faceVertexUvs[1]=[]);for(var u=0,l=0;u<i.length;u+=3,l+=2)e.vertices.push((new pn).fromArray(i,u)),void 0!==a&&e.colors.push((new ki).fromArray(a,u));function h(t,n,r,i){var u=void 0===a?[]:[e.colors[t].clone(),e.colors[n].clone(),e.colors[r].clone()],l=void 0===o?[]:[(new pn).fromArray(o,3*t),(new pn).fromArray(o,3*n),(new pn).fromArray(o,3*r)],h=new Yi(t,n,r,l,u,i);e.faces.push(h),void 0!==s&&e.faceVertexUvs[0].push([(new ln).fromArray(s,2*t),(new ln).fromArray(s,2*n),(new ln).fromArray(s,2*r)]),void 0!==c&&e.faceVertexUvs[1].push([(new ln).fromArray(c,2*t),(new ln).fromArray(c,2*n),(new ln).fromArray(c,2*r)])}var p=t.groups;if(p.length>0)for(u=0;u<p.length;u++)for(var d=p[u],f=d.start,m=d.count,v=(l=f,f+m);l<v;l+=3)void 0!==n?h(n[l],n[l+1],n[l+2],d.materialIndex):h(l,l+1,l+2,d.materialIndex);else if(void 0!==n)for(u=0;u<n.length;u+=3)h(n[u],n[u+1],n[u+2]);else for(u=0;u<i.length/3;u+=3)h(u,u+1,u+2);return this.computeFaceNormals(),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){var t=new pn;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(t).negate(),this.translate(t.x,t.y,t.z),this}}(),normalize:function(){this.computeBoundingSphere();var t=this.boundingSphere.center,e=this.boundingSphere.radius,n=0===e?1:1/e,r=new Tn;return r.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix(r),this},computeFaceNormals:function(){for(var t=new pn,e=new pn,n=0,r=this.faces.length;n<r;n++){var i=this.faces[n],o=this.vertices[i.a],a=this.vertices[i.b],s=this.vertices[i.c];t.subVectors(s,a),e.subVectors(o,a),t.cross(e),t.normalize(),i.normal.copy(t)}},computeVertexNormals:function(t){var e,n,r,i,o,a;for(void 0===t&&(t=!0),a=new Array(this.vertices.length),e=0,n=this.vertices.length;e<n;e++)a[e]=new pn;if(t){var s,c,u,l=new pn,h=new pn;for(r=0,i=this.faces.length;r<i;r++)o=this.faces[r],s=this.vertices[o.a],c=this.vertices[o.b],u=this.vertices[o.c],l.subVectors(u,c),h.subVectors(s,c),l.cross(h),a[o.a].add(l),a[o.b].add(l),a[o.c].add(l)}else for(this.computeFaceNormals(),r=0,i=this.faces.length;r<i;r++)o=this.faces[r],a[o.a].add(o.normal),a[o.b].add(o.normal),a[o.c].add(o.normal);for(e=0,n=this.vertices.length;e<n;e++)a[e].normalize();for(r=0,i=this.faces.length;r<i;r++){o=this.faces[r];var p=o.vertexNormals;3===p.length?(p[0].copy(a[o.a]),p[1].copy(a[o.b]),p[2].copy(a[o.c])):(p[0]=a[o.a].clone(),p[1]=a[o.b].clone(),p[2]=a[o.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var t,e,n;for(this.computeFaceNormals(),t=0,e=this.faces.length;t<e;t++){n=this.faces[t];var r=n.vertexNormals;3===r.length?(r[0].copy(n.normal),r[1].copy(n.normal),r[2].copy(n.normal)):(r[0]=n.normal.clone(),r[1]=n.normal.clone(),r[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var t,e,n,r,i;for(n=0,r=this.faces.length;n<r;n++)for(i=this.faces[n],i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]),t=0,e=i.vertexNormals.length;t<e;t++)i.__originalVertexNormals[t]?i.__originalVertexNormals[t].copy(i.vertexNormals[t]):i.__originalVertexNormals[t]=i.vertexNormals[t].clone();var o=new to;for(o.faces=this.faces,t=0,e=this.morphTargets.length;t<e;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];var a=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(n=0,r=this.faces.length;n<r;n++)c=new pn,u={a:new pn,b:new pn,c:new pn},a.push(c),s.push(u)}var c,u,l=this.morphNormals[t];for(o.vertices=this.morphTargets[t].vertices,o.computeFaceNormals(),o.computeVertexNormals(),n=0,r=this.faces.length;n<r;n++)i=this.faces[n],c=l.faceNormals[n],u=l.vertexNormals[n],c.copy(i.normal),u.a.copy(i.vertexNormals[0]),u.b.copy(i.vertexNormals[1]),u.c.copy(i.vertexNormals[2])}for(n=0,r=this.faces.length;n<r;n++)i=this.faces[n],i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new _n),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Mn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(t&&t.isGeometry){var r,i=this.vertices.length,o=this.vertices,a=t.vertices,s=this.faces,c=t.faces,u=this.faceVertexUvs[0],l=t.faceVertexUvs[0],h=this.colors,p=t.colors;void 0===n&&(n=0),void 0!==e&&(r=(new dn).getNormalMatrix(e));for(var d=0,f=a.length;d<f;d++){var m=a[d],v=m.clone();void 0!==e&&v.applyMatrix4(e),o.push(v)}for(d=0,f=p.length;d<f;d++)h.push(p[d].clone());for(d=0,f=c.length;d<f;d++){var g,y,x,b=c[d],w=b.vertexNormals,_=b.vertexColors;g=new Yi(b.a+i,b.b+i,b.c+i),g.normal.copy(b.normal),void 0!==r&&g.normal.applyMatrix3(r).normalize();for(var M=0,S=w.length;M<S;M++)y=w[M].clone(),void 0!==r&&y.applyMatrix3(r).normalize(),g.vertexNormals.push(y);g.color.copy(b.color);for(M=0,S=_.length;M<S;M++)x=_[M],g.vertexColors.push(x.clone());g.materialIndex=b.materialIndex+n,s.push(g)}for(d=0,f=l.length;d<f;d++){var E=l[d],T=[];if(void 0!==E){for(M=0,S=E.length;M<S;M++)T.push(E[M].clone());u.push(T)}}}else console.error(\"THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.\",t)},mergeMesh:function(t){t&&t.isMesh?(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)):console.error(\"THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.\",t)},mergeVertices:function(){var t,e,n,r,i,o,a,s,c={},u=[],l=[],h=4,p=Math.pow(10,h);for(n=0,r=this.vertices.length;n<r;n++)t=this.vertices[n],e=Math.round(t.x*p)+\"_\"+Math.round(t.y*p)+\"_\"+Math.round(t.z*p),void 0===c[e]?(c[e]=n,u.push(this.vertices[n]),l[n]=u.length-1):l[n]=l[c[e]];var d=[];for(n=0,r=this.faces.length;n<r;n++){i=this.faces[n],i.a=l[i.a],i.b=l[i.b],i.c=l[i.c],o=[i.a,i.b,i.c];for(var f=0;f<3;f++)if(o[f]===o[(f+1)%3]){d.push(n);break}}for(n=d.length-1;n>=0;n--){var m=d[n];for(this.faces.splice(m,1),a=0,s=this.faceVertexUvs.length;a<s;a++)this.faceVertexUvs[a].splice(m,1)}var v=this.vertices.length-u.length;return this.vertices=u,v},setFromPoints:function(t){this.vertices=[];for(var e=0,n=t.length;e<n;e++){var r=t[e];this.vertices.push(new pn(r.x,r.y,r.z||0))}return this},sortFacesByMaterialIndex:function(){for(var t=this.faces,e=t.length,n=0;n<e;n++)t[n]._id=n;function r(t,e){return t.materialIndex-e.materialIndex}t.sort(r);var i,o,a=this.faceVertexUvs[0],s=this.faceVertexUvs[1];a&&a.length===e&&(i=[]),s&&s.length===e&&(o=[]);for(n=0;n<e;n++){var c=t[n]._id;i&&i.push(a[c]),o&&o.push(s[c])}i&&(this.faceVertexUvs[0]=i),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){var t={metadata:{version:4.5,type:\"Geometry\",generator:\"Geometry.toJSON\"}};if(t.uuid=this.uuid,t.type=this.type,\"\"!==this.name&&(t.name=this.name),void 0!==this.parameters){var e=this.parameters;for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}for(var r=[],i=0;i<this.vertices.length;i++){var o=this.vertices[i];r.push(o.x,o.y,o.z)}var a=[],s=[],c={},u=[],l={},h=[],p={};for(i=0;i<this.faces.length;i++){var d=this.faces[i],f=!0,m=!1,v=void 0!==this.faceVertexUvs[0][i],g=d.normal.length()>0,y=d.vertexNormals.length>0,x=1!==d.color.r||1!==d.color.g||1!==d.color.b,b=d.vertexColors.length>0,w=0;if(w=E(w,0,0),w=E(w,1,f),w=E(w,2,m),w=E(w,3,v),w=E(w,4,g),w=E(w,5,y),w=E(w,6,x),w=E(w,7,b),a.push(w),a.push(d.a,d.b,d.c),a.push(d.materialIndex),v){var _=this.faceVertexUvs[0][i];a.push(L(_[0]),L(_[1]),L(_[2]))}if(g&&a.push(T(d.normal)),y){var M=d.vertexNormals;a.push(T(M[0]),T(M[1]),T(M[2]))}if(x&&a.push(A(d.color)),b){var S=d.vertexColors;a.push(A(S[0]),A(S[1]),A(S[2]))}}function E(t,e,n){return n?t|1<<e:t&~(1<<e)}function T(t){var e=t.x.toString()+t.y.toString()+t.z.toString();return void 0!==c[e]?c[e]:(c[e]=s.length/3,s.push(t.x,t.y,t.z),c[e])}function A(t){var e=t.r.toString()+t.g.toString()+t.b.toString();return void 0!==l[e]?l[e]:(l[e]=u.length,u.push(t.getHex()),l[e])}function L(t){var e=t.x.toString()+t.y.toString();return void 0!==p[e]?p[e]:(p[e]=h.length/2,h.push(t.x,t.y),p[e])}return t.data={},t.data.vertices=r,t.data.normals=s,u.length>0&&(t.data.colors=u),h.length>0&&(t.data.uvs=[h]),t.data.faces=a,t},clone:function(){return(new to).copy(this)},copy:function(t){var e,n,r,i,o,a;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;var s=t.vertices;for(e=0,n=s.length;e<n;e++)this.vertices.push(s[e].clone());var c=t.colors;for(e=0,n=c.length;e<n;e++)this.colors.push(c[e].clone());var u=t.faces;for(e=0,n=u.length;e<n;e++)this.faces.push(u[e].clone());for(e=0,n=t.faceVertexUvs.length;e<n;e++){var l=t.faceVertexUvs[e];for(void 0===this.faceVertexUvs[e]&&(this.faceVertexUvs[e]=[]),r=0,i=l.length;r<i;r++){var h=l[r],p=[];for(o=0,a=h.length;o<a;o++){var d=h[o];p.push(d.clone())}this.faceVertexUvs[e].push(p)}}var f=t.morphTargets;for(e=0,n=f.length;e<n;e++){var m={};if(m.name=f[e].name,void 0!==f[e].vertices)for(m.vertices=[],r=0,i=f[e].vertices.length;r<i;r++)m.vertices.push(f[e].vertices[r].clone());if(void 0!==f[e].normals)for(m.normals=[],r=0,i=f[e].normals.length;r<i;r++)m.normals.push(f[e].normals[r].clone());this.morphTargets.push(m)}var v=t.morphNormals;for(e=0,n=v.length;e<n;e++){var g={};if(void 0!==v[e].vertexNormals)for(g.vertexNormals=[],r=0,i=v[e].vertexNormals.length;r<i;r++){var y=v[e].vertexNormals[r],x={};x.a=y.a.clone(),x.b=y.b.clone(),x.c=y.c.clone(),g.vertexNormals.push(x)}if(void 0!==v[e].faceNormals)for(g.faceNormals=[],r=0,i=v[e].faceNormals.length;r<i;r++)g.faceNormals.push(v[e].faceNormals[r].clone());this.morphNormals.push(g)}var b=t.skinWeights;for(e=0,n=b.length;e<n;e++)this.skinWeights.push(b[e].clone());var w=t.skinIndices;for(e=0,n=w.length;e<n;e++)this.skinIndices.push(w[e].clone());var _=t.lineDistances;for(e=0,n=_.length;e<n;e++)this.lineDistances.push(_[e]);var M=t.boundingBox;null!==M&&(this.boundingBox=M.clone());var S=t.boundingSphere;return null!==S&&(this.boundingSphere=S.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:\"dispose\"})}}),Object.defineProperty(eo.prototype,\"needsUpdate\",{set:function(t){!0===t&&this.version++}}),Object.assign(eo.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(t){if(Array.isArray(t))throw new TypeError(\"THREE.BufferAttribute: array should be a Typed Array.\");return this.count=void 0!==t?t.length/this.itemSize:0,this.array=t,this},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(var r=0,i=this.itemSize;r<i;r++)this.array[t+r]=e.array[n+r];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){for(var e=this.array,n=0,r=0,i=t.length;r<i;r++){var o=t[r];void 0===o&&(console.warn(\"THREE.BufferAttribute.copyColorsArray(): color is undefined\",r),o=new ki),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this},copyVector2sArray:function(t){for(var e=this.array,n=0,r=0,i=t.length;r<i;r++){var o=t[r];void 0===o&&(console.warn(\"THREE.BufferAttribute.copyVector2sArray(): vector is undefined\",r),o=new ln),e[n++]=o.x,e[n++]=o.y}return this},copyVector3sArray:function(t){for(var e=this.array,n=0,r=0,i=t.length;r<i;r++){var o=t[r];void 0===o&&(console.warn(\"THREE.BufferAttribute.copyVector3sArray(): vector is undefined\",r),o=new pn),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this},copyVector4sArray:function(t){for(var e=this.array,n=0,r=0,i=t.length;r<i;r++){var o=t[r];void 0===o&&(console.warn(\"THREE.BufferAttribute.copyVector4sArray(): vector is undefined\",r),o=new gn),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this},setXYZW:function(t,e,n,r,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=i,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)}}),no.prototype=Object.create(eo.prototype),no.prototype.constructor=no,ro.prototype=Object.create(eo.prototype),ro.prototype.constructor=ro,io.prototype=Object.create(eo.prototype),io.prototype.constructor=io,oo.prototype=Object.create(eo.prototype),oo.prototype.constructor=oo,ao.prototype=Object.create(eo.prototype),ao.prototype.constructor=ao,so.prototype=Object.create(eo.prototype),so.prototype.constructor=so,co.prototype=Object.create(eo.prototype),co.prototype.constructor=co,uo.prototype=Object.create(eo.prototype),uo.prototype.constructor=uo,lo.prototype=Object.create(eo.prototype),lo.prototype.constructor=lo,Object.assign(ho.prototype,{computeGroups:function(t){for(var e,n=[],r=void 0,i=t.faces,o=0;o<i.length;o++){var a=i[o];a.materialIndex!==r&&(r=a.materialIndex,void 0!==e&&(e.count=3*o-e.start,n.push(e)),e={start:3*o,materialIndex:r})}void 0!==e&&(e.count=3*o-e.start,n.push(e)),this.groups=n},fromGeometry:function(t){var e,n=t.faces,r=t.vertices,i=t.faceVertexUvs,o=i[0]&&i[0].length>0,a=i[1]&&i[1].length>0,s=t.morphTargets,c=s.length;if(c>0){e=[];for(var u=0;u<c;u++)e[u]={name:s[u].name,data:[]};this.morphTargets.position=e}var l,h=t.morphNormals,p=h.length;if(p>0){l=[];for(u=0;u<p;u++)l[u]={name:h[u].name,data:[]};this.morphTargets.normal=l}var d=t.skinIndices,f=t.skinWeights,m=d.length===r.length,v=f.length===r.length;r.length>0&&0===n.length&&console.error(\"THREE.DirectGeometry: Faceless geometries are not supported.\");for(u=0;u<n.length;u++){var g=n[u];this.vertices.push(r[g.a],r[g.b],r[g.c]);var y=g.vertexNormals;if(3===y.length)this.normals.push(y[0],y[1],y[2]);else{var x=g.normal;this.normals.push(x,x,x)}var b=g.vertexColors;if(3===b.length)this.colors.push(b[0],b[1],b[2]);else{var w=g.color;this.colors.push(w,w,w)}if(!0===o){var _=i[0][u];void 0!==_?this.uvs.push(_[0],_[1],_[2]):(console.warn(\"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv \",u),this.uvs.push(new ln,new ln,new ln))}if(!0===a){_=i[1][u];void 0!==_?this.uvs2.push(_[0],_[1],_[2]):(console.warn(\"THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 \",u),this.uvs2.push(new ln,new ln,new ln))}for(var M=0;M<c;M++){var S=s[M].vertices;e[M].data.push(S[g.a],S[g.b],S[g.c])}for(M=0;M<p;M++){var E=h[M].vertexNormals[u];l[M].data.push(E.a,E.b,E.c)}m&&this.skinIndices.push(d[g.a],d[g.b],d[g.c]),v&&this.skinWeights.push(f[g.a],f[g.b],f[g.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this}});var fo=1;function mo(){Object.defineProperty(this,\"id\",{value:fo+=2}),this.uuid=un.generateUUID(),this.name=\"\",this.type=\"BufferGeometry\",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}function vo(t,e,n,r,i,o){to.call(this),this.type=\"BoxGeometry\",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:o},this.fromBufferGeometry(new go(t,e,n,r,i,o)),this.mergeVertices()}function go(t,e,n,r,i,o){mo.call(this),this.type=\"BoxBufferGeometry\",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:i,depthSegments:o};var a=this;t=t||1,e=e||1,n=n||1,r=Math.floor(r)||1,i=Math.floor(i)||1,o=Math.floor(o)||1;var s=[],c=[],u=[],l=[],h=0,p=0;function d(t,e,n,r,i,o,d,f,m,v,g){var y,x,b=o/m,w=d/v,_=o/2,M=d/2,S=f/2,E=m+1,T=v+1,A=0,L=0,P=new pn;for(x=0;x<T;x++){var R=x*w-M;for(y=0;y<E;y++){var C=y*b-_;P[t]=C*r,P[e]=R*i,P[n]=S,c.push(P.x,P.y,P.z),P[t]=0,P[e]=0,P[n]=f>0?1:-1,u.push(P.x,P.y,P.z),l.push(y/m),l.push(1-x/v),A+=1}}for(x=0;x<v;x++)for(y=0;y<m;y++){var O=h+y+E*x,I=h+y+E*(x+1),D=h+(y+1)+E*(x+1),N=h+(y+1)+E*x;s.push(O,I,N),s.push(I,D,N),L+=6}a.addGroup(p,L,g),p+=L,h+=A}d(\"z\",\"y\",\"x\",-1,-1,n,e,t,o,i,0),d(\"z\",\"y\",\"x\",1,-1,n,e,-t,o,i,1),d(\"x\",\"z\",\"y\",1,1,t,n,e,r,o,2),d(\"x\",\"z\",\"y\",1,-1,t,n,-e,r,o,3),d(\"x\",\"y\",\"z\",1,-1,t,e,n,r,i,4),d(\"x\",\"y\",\"z\",-1,-1,t,e,-n,r,i,5),this.setIndex(s),this.addAttribute(\"position\",new uo(c,3)),this.addAttribute(\"normal\",new uo(u,3)),this.addAttribute(\"uv\",new uo(l,2))}function yo(t,e,n,r){to.call(this),this.type=\"PlaneGeometry\",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r},this.fromBufferGeometry(new xo(t,e,n,r)),this.mergeVertices()}function xo(t,e,n,r){mo.call(this),this.type=\"PlaneBufferGeometry\",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r},t=t||1,e=e||1;var i,o,a=t/2,s=e/2,c=Math.floor(n)||1,u=Math.floor(r)||1,l=c+1,h=u+1,p=t/c,d=e/u,f=[],m=[],v=[],g=[];for(o=0;o<h;o++){var y=o*d-s;for(i=0;i<l;i++){var x=i*p-a;m.push(x,-y,0),v.push(0,0,1),g.push(i/c),g.push(1-o/u)}}for(o=0;o<u;o++)for(i=0;i<c;i++){var b=i+l*o,w=i+l*(o+1),_=i+1+l*(o+1),M=i+1+l*o;f.push(b,w,M),f.push(w,_,M)}this.setIndex(f),this.addAttribute(\"position\",new uo(m,3)),this.addAttribute(\"normal\",new uo(v,3)),this.addAttribute(\"uv\",new uo(g,2))}mo.prototype=Object.assign(Object.create(E.prototype),{constructor:mo,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new(po(t)>65535?co:ao)(t,1):this.index=t},addAttribute:function(t,e){return e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?\"index\"===t?(console.warn(\"THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.\"),this.setIndex(e),this):(this.attributes[t]=e,this):(console.warn(\"THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).\"),this.addAttribute(t,new eo(arguments[1],arguments[2])))},getAttribute:function(t){return this.attributes[t]},removeAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:void 0!==n?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix:function(t){var e=this.attributes.position;void 0!==e&&(t.applyToBufferAttribute(e),e.needsUpdate=!0);var n=this.attributes.normal;if(void 0!==n){var r=(new dn).getNormalMatrix(t);r.applyToBufferAttribute(n),n.needsUpdate=!0}var i=this.attributes.tangent;if(void 0!==i){r=(new dn).getNormalMatrix(t);r.applyToBufferAttribute(i),i.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(){var t=new Tn;return function(e){return t.makeRotationX(e),this.applyMatrix(t),this}}(),rotateY:function(){var t=new Tn;return function(e){return t.makeRotationY(e),this.applyMatrix(t),this}}(),rotateZ:function(){var t=new Tn;return function(e){return t.makeRotationZ(e),this.applyMatrix(t),this}}(),translate:function(){var t=new Tn;return function(e,n,r){return t.makeTranslation(e,n,r),this.applyMatrix(t),this}}(),scale:function(){var t=new Tn;return function(e,n,r){return t.makeScale(e,n,r),this.applyMatrix(t),this}}(),lookAt:function(){var t=new Ki;return function(e){t.lookAt(e),t.updateMatrix(),this.applyMatrix(t.matrix)}}(),center:function(){var t=new pn;return function(){return this.computeBoundingBox(),this.boundingBox.getCenter(t).negate(),this.translate(t.x,t.y,t.z),this}}(),setFromObject:function(t){var e=t.geometry;if(t.isPoints||t.isLine){var n=new uo(3*e.vertices.length,3),r=new uo(3*e.colors.length,3);if(this.addAttribute(\"position\",n.copyVector3sArray(e.vertices)),this.addAttribute(\"color\",r.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){var i=new uo(e.lineDistances.length,1);this.addAttribute(\"lineDistance\",i.copyArray(e.lineDistances))}null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n];e.push(i.x,i.y,i.z||0)}return this.addAttribute(\"position\",new uo(e,3)),this},updateFromObject:function(t){var e,n=t.geometry;if(t.isMesh){var r=n.__directGeometry;if(!0===n.elementsNeedUpdate&&(r=void 0,n.elementsNeedUpdate=!1),void 0===r)return this.fromGeometry(n);r.verticesNeedUpdate=n.verticesNeedUpdate,r.normalsNeedUpdate=n.normalsNeedUpdate,r.colorsNeedUpdate=n.colorsNeedUpdate,r.uvsNeedUpdate=n.uvsNeedUpdate,r.groupsNeedUpdate=n.groupsNeedUpdate,n.verticesNeedUpdate=!1,n.normalsNeedUpdate=!1,n.colorsNeedUpdate=!1,n.uvsNeedUpdate=!1,n.groupsNeedUpdate=!1,n=r}return!0===n.verticesNeedUpdate&&(e=this.attributes.position,void 0!==e&&(e.copyVector3sArray(n.vertices),e.needsUpdate=!0),n.verticesNeedUpdate=!1),!0===n.normalsNeedUpdate&&(e=this.attributes.normal,void 0!==e&&(e.copyVector3sArray(n.normals),e.needsUpdate=!0),n.normalsNeedUpdate=!1),!0===n.colorsNeedUpdate&&(e=this.attributes.color,void 0!==e&&(e.copyColorsArray(n.colors),e.needsUpdate=!0),n.colorsNeedUpdate=!1),n.uvsNeedUpdate&&(e=this.attributes.uv,void 0!==e&&(e.copyVector2sArray(n.uvs),e.needsUpdate=!0),n.uvsNeedUpdate=!1),n.lineDistancesNeedUpdate&&(e=this.attributes.lineDistance,void 0!==e&&(e.copyArray(n.lineDistances),e.needsUpdate=!0),n.lineDistancesNeedUpdate=!1),n.groupsNeedUpdate&&(n.computeGroups(t.geometry),this.groups=n.groups,n.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=(new ho).fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){var e=new Float32Array(3*t.vertices.length);if(this.addAttribute(\"position\",new eo(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){var n=new Float32Array(3*t.normals.length);this.addAttribute(\"normal\",new eo(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){var r=new Float32Array(3*t.colors.length);this.addAttribute(\"color\",new eo(r,3).copyColorsArray(t.colors))}if(t.uvs.length>0){var i=new Float32Array(2*t.uvs.length);this.addAttribute(\"uv\",new eo(i,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){var o=new Float32Array(2*t.uvs2.length);this.addAttribute(\"uv2\",new eo(o,2).copyVector2sArray(t.uvs2))}for(var a in this.groups=t.groups,t.morphTargets){for(var s=[],c=t.morphTargets[a],u=0,l=c.length;u<l;u++){var h=c[u],p=new uo(3*h.data.length,3);p.name=h.name,s.push(p.copyVector3sArray(h.data))}this.morphAttributes[a]=s}if(t.skinIndices.length>0){var d=new uo(4*t.skinIndices.length,4);this.addAttribute(\"skinIndex\",d.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){var f=new uo(4*t.skinWeights.length,4);this.addAttribute(\"skinWeight\",f.copyVector4sArray(t.skinWeights))}return null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){var t=new _n;return function(){null===this.boundingBox&&(this.boundingBox=new _n);var e=this.attributes.position,n=this.morphAttributes.position;if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),n)for(var r=0,i=n.length;r<i;r++){var o=n[r];t.setFromBufferAttribute(o),this.boundingBox.expandByPoint(t.min),this.boundingBox.expandByPoint(t.max)}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.',this)}}(),computeBoundingSphere:function(){var t=new _n,e=new _n,n=new pn;return function(){null===this.boundingSphere&&(this.boundingSphere=new Mn);var r=this.attributes.position,i=this.morphAttributes.position;if(r){var o=this.boundingSphere.center;if(t.setFromBufferAttribute(r),i)for(var a=0,s=i.length;a<s;a++){var c=i[a];e.setFromBufferAttribute(c),t.expandByPoint(e.min),t.expandByPoint(e.max)}t.getCenter(o);var u=0;for(a=0,s=r.count;a<s;a++)n.fromBufferAttribute(r,a),u=Math.max(u,o.distanceToSquared(n));if(i)for(a=0,s=i.length;a<s;a++){c=i[a];for(var l=0,h=c.count;l<h;l++)n.fromBufferAttribute(c,l),u=Math.max(u,o.distanceToSquared(n))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var t=this.index,e=this.attributes;if(e.position){var n=e.position.array;if(void 0===e.normal)this.addAttribute(\"normal\",new eo(new Float32Array(n.length),3));else for(var r=e.normal.array,i=0,o=r.length;i<o;i++)r[i]=0;var a,s,c,u=e.normal.array,l=new pn,h=new pn,p=new pn,d=new pn,f=new pn;if(t){var m=t.array;for(i=0,o=t.count;i<o;i+=3)a=3*m[i+0],s=3*m[i+1],c=3*m[i+2],l.fromArray(n,a),h.fromArray(n,s),p.fromArray(n,c),d.subVectors(p,h),f.subVectors(l,h),d.cross(f),u[a]+=d.x,u[a+1]+=d.y,u[a+2]+=d.z,u[s]+=d.x,u[s+1]+=d.y,u[s+2]+=d.z,u[c]+=d.x,u[c+1]+=d.y,u[c+2]+=d.z}else for(i=0,o=n.length;i<o;i+=9)l.fromArray(n,i),h.fromArray(n,i+3),p.fromArray(n,i+6),d.subVectors(p,h),f.subVectors(l,h),d.cross(f),u[i]=d.x,u[i+1]=d.y,u[i+2]=d.z,u[i+3]=d.x,u[i+4]=d.y,u[i+5]=d.z,u[i+6]=d.x,u[i+7]=d.y,u[i+8]=d.z;this.normalizeNormals(),e.normal.needsUpdate=!0}},merge:function(t,e){if(t&&t.isBufferGeometry){void 0===e&&(e=0,console.warn(\"THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.\"));var n=this.attributes;for(var r in n)if(void 0!==t.attributes[r])for(var i=n[r],o=i.array,a=t.attributes[r],s=a.array,c=a.itemSize*e,u=Math.min(s.length,o.length-c),l=0,h=c;l<u;l++,h++)o[h]=s[l];return this}console.error(\"THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.\",t)},normalizeNormals:function(){var t=new pn;return function(){for(var e=this.attributes.normal,n=0,r=e.count;n<r;n++)t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.normalize(),e.setXYZ(n,t.x,t.y,t.z)}}(),toNonIndexed:function(){function t(t,e){for(var n=t.array,r=t.itemSize,i=new n.constructor(e.length*r),o=0,a=0,s=0,c=e.length;s<c;s++){o=e[s]*r;for(var u=0;u<r;u++)i[a++]=n[o++]}return new eo(i,r)}if(null===this.index)return console.warn(\"THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.\"),this;var e=new mo,n=this.index.array,r=this.attributes;for(var i in r){var o=r[i],a=t(o,n);e.addAttribute(i,a)}var s=this.morphAttributes;for(i in s){for(var c=[],u=s[i],l=0,h=u.length;l<h;l++){o=u[l],a=t(o,n);c.push(a)}e.morphAttributes[i]=c}for(var p=this.groups,d=(l=0,p.length);l<d;l++){var f=p[l];e.addGroup(f.start,f.count,f.materialIndex)}return e},toJSON:function(){var t={metadata:{version:4.5,type:\"BufferGeometry\",generator:\"BufferGeometry.toJSON\"}};if(t.uuid=this.uuid,t.type=this.type,\"\"!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){var e=this.parameters;for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};var r=this.index;null!==r&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});var i=this.attributes;for(var n in i){var o=i[n],a={itemSize:o.itemSize,type:o.array.constructor.name,array:Array.prototype.slice.call(o.array),normalized:o.normalized};\"\"!==o.name&&(a.name=o.name),t.data.attributes[n]=a}var s={},c=!1;for(var n in this.morphAttributes){for(var u=this.morphAttributes[n],l=[],h=0,p=u.length;h<p;h++){o=u[h],a={itemSize:o.itemSize,type:o.array.constructor.name,array:Array.prototype.slice.call(o.array),normalized:o.normalized};\"\"!==o.name&&(a.name=o.name),l.push(a)}l.length>0&&(s[n]=l,c=!0)}c&&(t.data.morphAttributes=s);var d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));var f=this.boundingSphere;return null!==f&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t},clone:function(){return(new mo).copy(this)},copy:function(t){var e,n,r;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;var i=t.index;null!==i&&this.setIndex(i.clone());var o=t.attributes;for(e in o){var a=o[e];this.addAttribute(e,a.clone())}var s=t.morphAttributes;for(e in s){var c=[],u=s[e];for(n=0,r=u.length;n<r;n++)c.push(u[n].clone());this.morphAttributes[e]=c}var l=t.groups;for(n=0,r=l.length;n<r;n++){var h=l[n];this.addGroup(h.start,h.count,h.materialIndex)}var p=t.boundingBox;null!==p&&(this.boundingBox=p.clone());var d=t.boundingSphere;return null!==d&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:\"dispose\"})}}),vo.prototype=Object.create(to.prototype),vo.prototype.constructor=vo,go.prototype=Object.create(mo.prototype),go.prototype.constructor=go,yo.prototype=Object.create(to.prototype),yo.prototype.constructor=yo,xo.prototype=Object.create(mo.prototype),xo.prototype.constructor=xo;var bo=0;function wo(){Object.defineProperty(this,\"id\",{value:bo++}),this.uuid=un.generateUUID(),this.name=\"\",this.type=\"Material\",this.fog=!0,this.lights=!0,this.blending=X,this.side=U,this.flatShading=!1,this.vertexTangents=!1,this.vertexColors=k,this.opacity=1,this.transparent=!1,this.blendSrc=st,this.blendDst=ct,this.blendEquation=K,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gt,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.userData={},this.needsUpdate=!0}wo.prototype=Object.assign(Object.create(E.prototype),{constructor:wo,isMaterial:!0,onBeforeCompile:function(){},setValues:function(t){if(void 0!==t)for(var e in t){var n=t[e];if(void 0!==n)if(\"shading\"!==e){var r=this[e];void 0!==r?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n:console.warn(\"THREE.\"+this.type+\": '\"+e+\"' is not a property of this material.\")}else console.warn(\"THREE.\"+this.type+\": .shading has been removed. Use the boolean .flatShading instead.\"),this.flatShading=n===H;else console.warn(\"THREE.Material: '\"+e+\"' parameter is undefined.\")}},toJSON:function(t){var e=void 0===t||\"string\"===typeof t;e&&(t={textures:{},images:{}});var n={metadata:{version:4.5,type:\"Material\",generator:\"Material.toJSON\"}};function r(t){var e=[];for(var n in t){var r=t[n];delete r.metadata,e.push(r)}return e}if(n.uuid=this.uuid,n.type=this.type,\"\"!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearCoat&&(n.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(n.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,void 0!==this.combine&&(n.combine=this.combine),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(n.size=this.size),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==X&&(n.blending=this.blending),!0===this.flatShading&&(n.flatShading=this.flatShading),this.side!==U&&(n.side=this.side),this.vertexColors!==k&&(n.vertexColors=this.vertexColors),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),\"round\"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),\"round\"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(n.morphTargets=!0),!0===this.skinning&&(n.skinning=!0),!1===this.visible&&(n.visible=!1),\"{}\"!==JSON.stringify(this.userData)&&(n.userData=this.userData),e){var i=r(t.textures),o=r(t.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.userData=JSON.parse(JSON.stringify(t.userData)),this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var e=t.clippingPlanes,n=null;if(null!==e){var r=e.length;n=new Array(r);for(var i=0;i!==r;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.shadowSide=t.shadowSide,this},dispose:function(){this.dispatchEvent({type:\"dispose\"})}});var _o=\"void main() {\\n\\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\",Mo=\"void main() {\\n\\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\\n}\";function So(t){wo.call(this),this.type=\"ShaderMaterial\",this.defines={},this.uniforms={},this.vertexShader=_o,this.fragmentShader=Mo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,void 0!==t&&(void 0!==t.attributes&&console.error(\"THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.\"),this.setValues(t))}function Eo(t,e){this.origin=void 0!==t?t:new pn,this.direction=void 0!==e?e:new pn}function To(t,e,n){this.a=void 0!==t?t:new pn,this.b=void 0!==e?e:new pn,this.c=void 0!==n?n:new pn}function Ao(t){wo.call(this),this.type=\"MeshBasicMaterial\",this.color=new ki(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_t,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=\"round\",this.wireframeLinejoin=\"round\",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(t)}function Lo(t,e){Ki.call(this),this.type=\"Mesh\",this.geometry=void 0!==t?t:new mo,this.material=void 0!==e?e:new Ao({color:16777215*Math.random()}),this.drawMode=Xe,this.updateMorphTargets()}function Po(t,e,n,r){var i,o,a=new ki(0),s=0,c=null,u=0;function l(e,r,l,p){var d=r.background,f=t.vr,m=f.getSession&&f.getSession();if(m&&\"additive\"===m.environmentBlendMode&&(d=null),null===d?(h(a,s),c=null,u=0):d&&d.isColor&&(h(d,1),p=!0,c=null,u=0),(t.autoClear||p)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),d&&(d.isCubeTexture||d.isWebGLRenderTargetCube)){void 0===o&&(o=new Lo(new go(1,1,1),new So({type:\"BackgroundCubeMaterial\",uniforms:Gi(Wi.cube.uniforms),vertexShader:Wi.cube.vertexShader,fragmentShader:Wi.cube.fragmentShader,side:G,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.removeAttribute(\"normal\"),o.geometry.removeAttribute(\"uv\"),o.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(o.material,\"map\",{get:function(){return this.uniforms.tCube.value}}),n.update(o));var v=d.isWebGLRenderTargetCube?d.texture:d;o.material.uniforms.tCube.value=v,o.material.uniforms.tFlip.value=d.isWebGLRenderTargetCube?1:-1,c===d&&u===v.version||(o.material.needsUpdate=!0,c=d,u=v.version),e.unshift(o,o.geometry,o.material,0,0,null)}else d&&d.isTexture&&(void 0===i&&(i=new Lo(new xo(2,2),new So({type:\"BackgroundMaterial\",uniforms:Gi(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:U,depthTest:!1,depthWrite:!1,fog:!1})),i.geometry.removeAttribute(\"normal\"),Object.defineProperty(i.material,\"map\",{get:function(){return this.uniforms.t2D.value}}),n.update(i)),i.material.uniforms.t2D.value=d,!0===d.matrixAutoUpdate&&d.updateMatrix(),i.material.uniforms.uvTransform.value.copy(d.matrix),c===d&&u===d.version||(i.material.needsUpdate=!0,c=d,u=d.version),e.unshift(i,i.geometry,i.material,0,0,null))}function h(t,n){e.buffers.color.setClear(t.r,t.g,t.b,n,r)}return{getClearColor:function(){return a},setClearColor:function(t,e){a.set(t),s=void 0!==e?e:1,h(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(t){s=t,h(a,s)},render:l}}function Ro(t,e,n,r){var i;function o(t){i=t}function a(e,r){t.drawArrays(i,e,r),n.update(r,i)}function s(o,a,s){var c;if(r.isWebGL2)c=t;else if(c=e.get(\"ANGLE_instanced_arrays\"),null===c)return void console.error(\"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.\");c[r.isWebGL2?\"drawArraysInstanced\":\"drawArraysInstancedANGLE\"](i,a,s,o.maxInstancedCount),n.update(s,i,o.maxInstancedCount)}this.setMode=o,this.render=a,this.renderInstances=s}function Co(t,e,n){var r;function i(){if(void 0!==r)return r;var n=e.get(\"EXT_texture_filter_anisotropic\");return r=null!==n?t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,r}function o(e){if(\"highp\"===e){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return\"highp\";e=\"mediump\"}return\"mediump\"===e&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?\"mediump\":\"lowp\"}var a=\"undefined\"!==typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext,s=void 0!==n.precision?n.precision:\"highp\",c=o(s);c!==s&&(console.warn(\"THREE.WebGLRenderer:\",s,\"not supported, using\",c,\"instead.\"),s=c);var u=!0===n.logarithmicDepthBuffer,l=t.getParameter(34930),h=t.getParameter(35660),p=t.getParameter(3379),d=t.getParameter(34076),f=t.getParameter(34921),m=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),y=h>0,x=a||!!e.get(\"OES_texture_float\"),b=y&&x,w=a?t.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:w}}function Oo(){var t=this,e=null,n=0,r=!1,i=!1,o=new Sn,a=new dn,s={value:null,needsUpdate:!1};function c(){s.value!==e&&(s.value=e,s.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(e,n,r,i){var c=null!==e?e.length:0,u=null;if(0!==c){if(u=s.value,!0!==i||null===u){var l=r+4*c,h=n.matrixWorldInverse;a.getNormalMatrix(h),(null===u||u.length<l)&&(u=new Float32Array(l));for(var p=0,d=r;p!==c;++p,d+=4)o.copy(e[p]).applyMatrix4(h,a),o.normal.toArray(u,d),u[d+3]=o.constant}s.value=u,s.needsUpdate=!0}return t.numPlanes=c,u}this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(t,i,o){var a=0!==t.length||i||0!==n||r;return r=i,e=u(t,o,0),n=t.length,a},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1,c()},this.setState=function(t,o,a,l,h,p){if(!r||null===t||0===t.length||i&&!a)i?u(null):c();else{var d=i?0:n,f=4*d,m=h.clippingState||null;s.value=m,m=u(t,l,f,p);for(var v=0;v!==f;++v)m[v]=e[v];h.clippingState=m,this.numIntersection=o?this.numPlanes:0,this.numPlanes+=d}}}function Io(t){var e={};return{get:function(n){if(void 0!==e[n])return e[n];var r;switch(n){case\"WEBGL_depth_texture\":r=t.getExtension(\"WEBGL_depth_texture\")||t.getExtension(\"MOZ_WEBGL_depth_texture\")||t.getExtension(\"WEBKIT_WEBGL_depth_texture\");break;case\"EXT_texture_filter_anisotropic\":r=t.getExtension(\"EXT_texture_filter_anisotropic\")||t.getExtension(\"MOZ_EXT_texture_filter_anisotropic\")||t.getExtension(\"WEBKIT_EXT_texture_filter_anisotropic\");break;case\"WEBGL_compressed_texture_s3tc\":r=t.getExtension(\"WEBGL_compressed_texture_s3tc\")||t.getExtension(\"MOZ_WEBGL_compressed_texture_s3tc\")||t.getExtension(\"WEBKIT_WEBGL_compressed_texture_s3tc\");break;case\"WEBGL_compressed_texture_pvrtc\":r=t.getExtension(\"WEBGL_compressed_texture_pvrtc\")||t.getExtension(\"WEBKIT_WEBGL_compressed_texture_pvrtc\");break;default:r=t.getExtension(n)}return null===r&&console.warn(\"THREE.WebGLRenderer: \"+n+\" extension not supported.\"),e[n]=r,r}}}function Do(t,e,n){var r={},i={};function o(t){var a=t.target,s=r[a.id];for(var c in null!==s.index&&e.remove(s.index),s.attributes)e.remove(s.attributes[c]);a.removeEventListener(\"dispose\",o),delete r[a.id];var u=i[s.id];u&&(e.remove(u),delete i[s.id]),n.memory.geometries--}function a(t,e){var i=r[e.id];return i||(e.addEventListener(\"dispose\",o),e.isBufferGeometry?i=e:e.isGeometry&&(void 0===e._bufferGeometry&&(e._bufferGeometry=(new mo).setFromObject(t)),i=e._bufferGeometry),r[e.id]=i,n.memory.geometries++,i)}function s(t){var n=t.index,r=t.attributes;for(var i in null!==n&&e.update(n,34963),r)e.update(r[i],34962);var o=t.morphAttributes;for(var i in o)for(var a=o[i],s=0,c=a.length;s<c;s++)e.update(a[s],34962)}function c(t){var n=i[t.id];if(n)return n;var r=[],o=t.index,a=t.attributes;if(null!==o)for(var s=o.array,c=0,u=s.length;c<u;c+=3){var l=s[c+0],h=s[c+1],p=s[c+2];r.push(l,h,h,p,p,l)}else for(s=a.position.array,c=0,u=s.length/3-1;c<u;c+=3){l=c+0,h=c+1,p=c+2;r.push(l,h,h,p,p,l)}return n=new(po(r)>65535?co:ao)(r,1),e.update(n,34963),i[t.id]=n,n}return{get:a,update:s,getWireframeAttribute:c}}function No(t,e,n,r){var i,o,a;function s(t){i=t}function c(t){o=t.type,a=t.bytesPerElement}function u(e,r){t.drawElements(i,r,o,e*a),n.update(r,i)}function l(s,c,u){if(r.isWebGL2)l=t;else{var l=e.get(\"ANGLE_instanced_arrays\");if(null===l)return void console.error(\"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.\")}l[r.isWebGL2?\"drawElementsInstanced\":\"drawElementsInstancedANGLE\"](i,u,o,c*a,s.maxInstancedCount),n.update(u,i,s.maxInstancedCount)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=l}function Bo(t){var e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,e,r){switch(r=r||1,n.calls++,e){case 4:n.triangles+=r*(t/3);break;case 5:case 6:n.triangles+=r*(t-2);break;case 1:n.lines+=r*(t/2);break;case 3:n.lines+=r*(t-1);break;case 2:n.lines+=r*t;break;case 0:n.points+=r*t;break;default:console.error(\"THREE.WebGLInfo: Unknown draw mode:\",e);break}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zo(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Uo(t){var e={},n=new Float32Array(8);function r(r,i,o,a){var s=r.morphTargetInfluences,c=s.length,u=e[i.id];if(void 0===u){u=[];for(var l=0;l<c;l++)u[l]=[l,0];e[i.id]=u}var h=o.morphTargets&&i.morphAttributes.position,p=o.morphNormals&&i.morphAttributes.normal;for(l=0;l<c;l++){var d=u[l];0!==d[1]&&(h&&i.removeAttribute(\"morphTarget\"+l),p&&i.removeAttribute(\"morphNormal\"+l))}for(l=0;l<c;l++){d=u[l];d[0]=l,d[1]=s[l]}u.sort(zo);for(l=0;l<8;l++){d=u[l];if(d){var f=d[0],m=d[1];if(m){h&&i.addAttribute(\"morphTarget\"+l,h[f]),p&&i.addAttribute(\"morphNormal\"+l,p[f]),n[l]=m;continue}}n[l]=0}a.getUniforms().setValue(t,\"morphTargetInfluences\",n)}return{update:r}}function Go(t,e){var n={};function r(r){var i=e.render.frame,o=r.geometry,a=t.get(r,o);return n[a.id]!==i&&(o.isGeometry&&a.updateFromObject(r),t.update(a),n[a.id]=i),a}function i(){n={}}return{update:r,dispose:i}}function Fo(t,e,n,r,i,o,a,s,c,u){t=void 0!==t?t:[],e=void 0!==e?e:Ot,a=void 0!==a?a:se,vn.call(this,t,e,n,r,i,o,a,s,c,u),this.flipY=!1}function Ho(t,e,n,r){vn.call(this,null),this.image={data:t,width:e,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1}function jo(t,e,n,r){vn.call(this,null),this.image={data:t,width:e,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1}So.prototype=Object.create(wo.prototype),So.prototype.constructor=So,So.prototype.isShaderMaterial=!0,So.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=t.extensions,this},So.prototype.toJSON=function(t){var e=wo.prototype.toJSON.call(this,t);for(var n in e.uniforms={},this.uniforms){var r=this.uniforms[n],i=r.value;i&&i.isTexture?e.uniforms[n]={type:\"t\",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:\"c\",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:\"v2\",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:\"v3\",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:\"v4\",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:\"m3\",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:\"m4\",value:i.toArray()}:e.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;var o={};for(var a in this.extensions)!0===this.extensions[a]&&(o[a]=!0);return Object.keys(o).length>0&&(e.extensions=o),e},Object.assign(Eo.prototype,{set:function(t,e){return this.origin.copy(t),this.direction.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,e){return void 0===e&&(console.warn(\"THREE.Ray: .at() target is now required\"),e=new pn),e.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(){var t=new pn;return function(e){return this.origin.copy(this.at(e,t)),this}}(),closestPointToPoint:function(t,e){void 0===e&&(console.warn(\"THREE.Ray: .closestPointToPoint() target is now required\"),e=new pn),e.subVectors(t,this.origin);var n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(){var t=new pn;return function(e){var n=t.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(t.copy(this.direction).multiplyScalar(n).add(this.origin),t.distanceToSquared(e))}}(),distanceSqToSegment:function(){var t=new pn,e=new pn,n=new pn;return function(r,i,o,a){t.copy(r).add(i).multiplyScalar(.5),e.copy(i).sub(r).normalize(),n.copy(this.origin).sub(t);var s,c,u,l,h=.5*r.distanceTo(i),p=-this.direction.dot(e),d=n.dot(this.direction),f=-n.dot(e),m=n.lengthSq(),v=Math.abs(1-p*p);if(v>0)if(s=p*f-d,c=p*d-f,l=h*v,s>=0)if(c>=-l)if(c<=l){var g=1/v;s*=g,c*=g,u=s*(s+p*c+2*d)+c*(p*s+c+2*f)+m}else c=h,s=Math.max(0,-(p*c+d)),u=-s*s+c*(c+2*f)+m;else c=-h,s=Math.max(0,-(p*c+d)),u=-s*s+c*(c+2*f)+m;else c<=-l?(s=Math.max(0,-(-p*h+d)),c=s>0?-h:Math.min(Math.max(-h,-f),h),u=-s*s+c*(c+2*f)+m):c<=l?(s=0,c=Math.min(Math.max(-h,-f),h),u=c*(c+2*f)+m):(s=Math.max(0,-(p*h+d)),c=s>0?h:Math.min(Math.max(-h,-f),h),u=-s*s+c*(c+2*f)+m);else c=p>0?-h:h,s=Math.max(0,-(p*c+d)),u=-s*s+c*(c+2*f)+m;return o&&o.copy(this.direction).multiplyScalar(s).add(this.origin),a&&a.copy(e).multiplyScalar(c).add(t),u}}(),intersectSphere:function(){var t=new pn;return function(e,n){t.subVectors(e.center,this.origin);var r=t.dot(this.direction),i=t.dot(t)-r*r,o=e.radius*e.radius;if(i>o)return null;var a=Math.sqrt(o-i),s=r-a,c=r+a;return s<0&&c<0?null:s<0?this.at(c,n):this.at(s,n)}}(),intersectsSphere:function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},distanceToPlane:function(t){var e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;var n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null},intersectPlane:function(t,e){var n=this.distanceToPlane(t);return null===n?null:this.at(n,e)},intersectsPlane:function(t){var e=t.distanceToPoint(this.origin);if(0===e)return!0;var n=t.normal.dot(this.direction);return n*e<0},intersectBox:function(t,e){var n,r,i,o,a,s,c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(i=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(i=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||i>r?null:((i>n||n!==n)&&(n=i),(o<r||r!==r)&&(r=o),l>=0?(a=(t.min.z-h.z)*l,s=(t.max.z-h.z)*l):(a=(t.max.z-h.z)*l,s=(t.min.z-h.z)*l),n>s||a>r?null:((a>n||n!==n)&&(n=a),(s<r||r!==r)&&(r=s),r<0?null:this.at(n>=0?n:r,e)))},intersectsBox:function(){var t=new pn;return function(e){return null!==this.intersectBox(e,t)}}(),intersectTriangle:function(){var t=new pn,e=new pn,n=new pn,r=new pn;return function(i,o,a,s,c){e.subVectors(o,i),n.subVectors(a,i),r.crossVectors(e,n);var u,l=this.direction.dot(r);if(l>0){if(s)return null;u=1}else{if(!(l<0))return null;u=-1,l=-l}t.subVectors(this.origin,i);var h=u*this.direction.dot(n.crossVectors(t,n));if(h<0)return null;var p=u*this.direction.dot(e.cross(t));if(p<0)return null;if(h+p>l)return null;var d=-u*t.dot(r);return d<0?null:this.at(d/l,c)}}(),applyMatrix4:function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}),Object.assign(To,{getNormal:function(){var t=new pn;return function(e,n,r,i){void 0===i&&(console.warn(\"THREE.Triangle: .getNormal() target is now required\"),i=new pn),i.subVectors(r,n),t.subVectors(e,n),i.cross(t);var o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}}(),getBarycoord:function(){var t=new pn,e=new pn,n=new pn;return function(r,i,o,a,s){t.subVectors(a,i),e.subVectors(o,i),n.subVectors(r,i);var c=t.dot(t),u=t.dot(e),l=t.dot(n),h=e.dot(e),p=e.dot(n),d=c*h-u*u;if(void 0===s&&(console.warn(\"THREE.Triangle: .getBarycoord() target is now required\"),s=new pn),0===d)return s.set(-2,-1,-1);var f=1/d,m=(h*l-u*p)*f,v=(c*p-u*l)*f;return s.set(1-m-v,v,m)}}(),containsPoint:function(){var t=new pn;return function(e,n,r,i){return To.getBarycoord(e,n,r,i,t),t.x>=0&&t.y>=0&&t.x+t.y<=1}}(),getUV:function(){var t=new pn;return function(e,n,r,i,o,a,s,c){return this.getBarycoord(e,n,r,i,t),c.set(0,0),c.addScaledVector(o,t.x),c.addScaledVector(a,t.y),c.addScaledVector(s,t.z),c}}()}),Object.assign(To.prototype,{set:function(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this},setFromPointsAndIndices:function(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},getArea:function(){var t=new pn,e=new pn;return function(){return t.subVectors(this.c,this.b),e.subVectors(this.a,this.b),.5*t.cross(e).length()}}(),getMidpoint:function(t){return void 0===t&&(console.warn(\"THREE.Triangle: .getMidpoint() target is now required\"),t=new pn),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(t){return To.getNormal(this.a,this.b,this.c,t)},getPlane:function(t){return void 0===t&&(console.warn(\"THREE.Triangle: .getPlane() target is now required\"),t=new pn),t.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(t,e){return To.getBarycoord(t,this.a,this.b,this.c,e)},containsPoint:function(t){return To.containsPoint(t,this.a,this.b,this.c)},getUV:function(t,e,n,r,i){return To.getUV(t,this.a,this.b,this.c,e,n,r,i)},intersectsBox:function(t){return t.intersectsTriangle(this)},closestPointToPoint:function(){var t=new pn,e=new pn,n=new pn,r=new pn,i=new pn,o=new pn;return function(a,s){void 0===s&&(console.warn(\"THREE.Triangle: .closestPointToPoint() target is now required\"),s=new pn);var c,u,l=this.a,h=this.b,p=this.c;t.subVectors(h,l),e.subVectors(p,l),r.subVectors(a,l);var d=t.dot(r),f=e.dot(r);if(d<=0&&f<=0)return s.copy(l);i.subVectors(a,h);var m=t.dot(i),v=e.dot(i);if(m>=0&&v<=m)return s.copy(h);var g=d*v-m*f;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),s.copy(l).addScaledVector(t,c);o.subVectors(a,p);var y=t.dot(o),x=e.dot(o);if(x>=0&&y<=x)return s.copy(p);var b=y*f-d*x;if(b<=0&&f>=0&&x<=0)return u=f/(f-x),s.copy(l).addScaledVector(e,u);var w=m*x-y*v;if(w<=0&&v-m>=0&&y-x>=0)return n.subVectors(p,h),u=(v-m)/(v-m+(y-x)),s.copy(h).addScaledVector(n,u);var _=1/(w+b+g);return c=b*_,u=g*_,s.copy(l).addScaledVector(t,c).addScaledVector(e,u)}}(),equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}),Ao.prototype=Object.create(wo.prototype),Ao.prototype.constructor=Ao,Ao.prototype.isMeshBasicMaterial=!0,Ao.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this},Lo.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Lo,isMesh:!0,setDrawMode:function(t){this.drawMode=t},copy:function(t){return Ki.prototype.copy.call(this,t),this.drawMode=t.drawMode,void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this},updateMorphTargets:function(){var t,e,n,r=this.geometry;if(r.isBufferGeometry){var i=r.morphAttributes,o=Object.keys(i);if(o.length>0){var a=i[o[0]];if(void 0!==a)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},t=0,e=a.length;t<e;t++)n=a[t].name||String(t),this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}else{var s=r.morphTargets;void 0!==s&&s.length>0&&console.error(\"THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.\")}},raycast:function(){var t=new Tn,e=new Eo,n=new Mn,r=new pn,i=new pn,o=new pn,a=new pn,s=new pn,c=new pn,u=new pn,l=new pn,h=new pn,p=new ln,d=new ln,f=new ln,m=new pn,v=new pn;function g(t,e,n,r,i,o,a,s){var c;if(c=e.side===G?r.intersectTriangle(a,o,i,!0,s):r.intersectTriangle(i,o,a,e.side!==F,s),null===c)return null;v.copy(s),v.applyMatrix4(t.matrixWorld);var u=n.ray.origin.distanceTo(v);return u<n.near||u>n.far?null:{distance:u,point:v.clone(),object:t}}function y(t,e,n,v,y,x,b,w,_,M){r.fromBufferAttribute(y,w),i.fromBufferAttribute(y,_),o.fromBufferAttribute(y,M);var S=t.morphTargetInfluences;if(e.morphTargets&&x&&S){u.set(0,0,0),l.set(0,0,0),h.set(0,0,0);for(var E=0,T=x.length;E<T;E++){var A=S[E],L=x[E];0!==A&&(a.fromBufferAttribute(L,w),s.fromBufferAttribute(L,_),c.fromBufferAttribute(L,M),u.addScaledVector(a.sub(r),A),l.addScaledVector(s.sub(i),A),h.addScaledVector(c.sub(o),A))}r.add(u),i.add(l),o.add(h)}var P=g(t,e,n,v,r,i,o,m);if(P){b&&(p.fromBufferAttribute(b,w),d.fromBufferAttribute(b,_),f.fromBufferAttribute(b,M),P.uv=To.getUV(m,r,i,o,p,d,f,new ln));var R=new Yi(w,_,M);To.getNormal(r,i,o,R.normal),P.face=R}return P}return function(r,i){var o,a=this.geometry,s=this.material,c=this.matrixWorld;if(void 0!==s&&(null===a.boundingSphere&&a.computeBoundingSphere(),n.copy(a.boundingSphere),n.applyMatrix4(c),!1!==r.ray.intersectsSphere(n)&&(t.getInverse(c),e.copy(r.ray).applyMatrix4(t),null===a.boundingBox||!1!==e.intersectsBox(a.boundingBox))))if(a.isBufferGeometry){var u,l,h,v,x,b,w,_,M,S,E,T=a.index,A=a.attributes.position,L=a.morphAttributes.position,P=a.attributes.uv,R=a.groups,C=a.drawRange;if(null!==T)if(Array.isArray(s))for(v=0,b=R.length;v<b;v++)for(_=R[v],M=s[_.materialIndex],S=Math.max(_.start,C.start),E=Math.min(_.start+_.count,C.start+C.count),x=S,w=E;x<w;x+=3)u=T.getX(x),l=T.getX(x+1),h=T.getX(x+2),o=y(this,M,r,e,A,L,P,u,l,h),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,i.push(o));else for(S=Math.max(0,C.start),E=Math.min(T.count,C.start+C.count),v=S,b=E;v<b;v+=3)u=T.getX(v),l=T.getX(v+1),h=T.getX(v+2),o=y(this,s,r,e,A,L,P,u,l,h),o&&(o.faceIndex=Math.floor(v/3),i.push(o));else if(void 0!==A)if(Array.isArray(s))for(v=0,b=R.length;v<b;v++)for(_=R[v],M=s[_.materialIndex],S=Math.max(_.start,C.start),E=Math.min(_.start+_.count,C.start+C.count),x=S,w=E;x<w;x+=3)u=x,l=x+1,h=x+2,o=y(this,M,r,e,A,L,P,u,l,h),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,i.push(o));else for(S=Math.max(0,C.start),E=Math.min(A.count,C.start+C.count),v=S,b=E;v<b;v+=3)u=v,l=v+1,h=v+2,o=y(this,s,r,e,A,L,P,u,l,h),o&&(o.faceIndex=Math.floor(v/3),i.push(o))}else if(a.isGeometry){var O,I,D,N,B=Array.isArray(s),z=a.vertices,U=a.faces,G=a.faceVertexUvs[0];G.length>0&&(N=G);for(var F=0,H=U.length;F<H;F++){var j=U[F],k=B?s[j.materialIndex]:s;if(void 0!==k&&(O=z[j.a],I=z[j.b],D=z[j.c],o=g(this,k,r,e,O,I,D,m),o)){if(N&&N[F]){var V=N[F];p.copy(V[0]),d.copy(V[1]),f.copy(V[2]),o.uv=To.getUV(m,O,I,D,p,d,f,new ln)}o.face=j,o.faceIndex=F,i.push(o)}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Fo.prototype=Object.create(vn.prototype),Fo.prototype.constructor=Fo,Fo.prototype.isCubeTexture=!0,Object.defineProperty(Fo.prototype,\"images\",{get:function(){return this.image},set:function(t){this.image=t}}),Ho.prototype=Object.create(vn.prototype),Ho.prototype.constructor=Ho,Ho.prototype.isDataTexture2DArray=!0,jo.prototype=Object.create(vn.prototype),jo.prototype.constructor=jo,jo.prototype.isDataTexture3D=!0;var ko=new vn,Vo=new Ho,Wo=new jo,qo=new Fo,Xo=[],Yo=[],Jo=new Float32Array(16),Zo=new Float32Array(9),Qo=new Float32Array(4);function Ko(t,e,n){var r=t[0];if(r<=0||r>0)return t;var i=e*n,o=Xo[i];if(void 0===o&&(o=new Float32Array(i),Xo[i]=o),0!==e){r.toArray(o,0);for(var a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function $o(t,e){if(t.length!==e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function ta(t,e){for(var n=0,r=e.length;n<r;n++)t[n]=e[n]}function ea(t,e){var n=Yo[e];void 0===n&&(n=new Int32Array(e),Yo[e]=n);for(var r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function na(t,e){var n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ra(t,e){var n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ia(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($o(n,e))return;t.uniform2fv(this.addr,e),ta(n,e)}}function oa(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($o(n,e))return;t.uniform3fv(this.addr,e),ta(n,e)}}function aa(t,e){var n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($o(n,e))return;t.uniform4fv(this.addr,e),ta(n,e)}}function sa(t,e){var n=this.cache,r=e.elements;if(void 0===r){if($o(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ta(n,e)}else{if($o(n,r))return;Qo.set(r),t.uniformMatrix2fv(this.addr,!1,Qo),ta(n,r)}}function ca(t,e){var n=this.cache,r=e.elements;if(void 0===r){if($o(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ta(n,e)}else{if($o(n,r))return;Zo.set(r),t.uniformMatrix3fv(this.addr,!1,Zo),ta(n,r)}}function ua(t,e){var n=this.cache,r=e.elements;if(void 0===r){if($o(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ta(n,e)}else{if($o(n,r))return;Jo.set(r),t.uniformMatrix4fv(this.addr,!1,Jo),ta(n,r)}}function la(t,e,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.safeSetTexture2D(e||ko,i)}function ha(t,e,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Vo,i)}function pa(t,e,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||Wo,i)}function da(t,e,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.safeSetTextureCube(e||qo,i)}function fa(t,e){var n=this.cache;$o(n,e)||(t.uniform2iv(this.addr,e),ta(n,e))}function ma(t,e){var n=this.cache;$o(n,e)||(t.uniform3iv(this.addr,e),ta(n,e))}function va(t,e){var n=this.cache;$o(n,e)||(t.uniform4iv(this.addr,e),ta(n,e))}function ga(t){switch(t){case 5126:return na;case 35664:return ia;case 35665:return oa;case 35666:return aa;case 35674:return sa;case 35675:return ca;case 35676:return ua;case 35678:case 36198:return la;case 35679:return pa;case 35680:return da;case 36289:return ha;case 5124:case 35670:return ra;case 35667:case 35671:return fa;case 35668:case 35672:return ma;case 35669:case 35673:return va}}function ya(t,e){var n=this.cache;$o(n,e)||(t.uniform1fv(this.addr,e),ta(n,e))}function xa(t,e){var n=this.cache;$o(n,e)||(t.uniform1iv(this.addr,e),ta(n,e))}function ba(t,e){var n=this.cache,r=Ko(e,this.size,2);$o(n,r)||(t.uniform2fv(this.addr,r),this.updateCache(r))}function wa(t,e){var n=this.cache,r=Ko(e,this.size,3);$o(n,r)||(t.uniform3fv(this.addr,r),this.updateCache(r))}function _a(t,e){var n=this.cache,r=Ko(e,this.size,4);$o(n,r)||(t.uniform4fv(this.addr,r),this.updateCache(r))}function Ma(t,e){var n=this.cache,r=Ko(e,this.size,4);$o(n,r)||(t.uniformMatrix2fv(this.addr,!1,r),this.updateCache(r))}function Sa(t,e){var n=this.cache,r=Ko(e,this.size,9);$o(n,r)||(t.uniformMatrix3fv(this.addr,!1,r),this.updateCache(r))}function Ea(t,e){var n=this.cache,r=Ko(e,this.size,16);$o(n,r)||(t.uniformMatrix4fv(this.addr,!1,r),this.updateCache(r))}function Ta(t,e,n){var r=this.cache,i=e.length,o=ea(n,i);!1===$o(r,o)&&(t.uniform1iv(this.addr,o),ta(r,o));for(var a=0;a!==i;++a)n.safeSetTexture2D(e[a]||ko,o[a])}function Aa(t,e,n){var r=this.cache,i=e.length,o=ea(n,i);!1===$o(r,o)&&(t.uniform1iv(this.addr,o),ta(r,o));for(var a=0;a!==i;++a)n.safeSetTextureCube(e[a]||qo,o[a])}function La(t){switch(t){case 5126:return ya;case 35664:return ba;case 35665:return wa;case 35666:return _a;case 35674:return Ma;case 35675:return Sa;case 35676:return Ea;case 35678:return Ta;case 35680:return Aa;case 5124:case 35670:return xa;case 35667:case 35671:return fa;case 35668:case 35672:return ma;case 35669:case 35673:return va}}function Pa(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ga(e.type)}function Ra(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=La(e.type)}function Ca(t){this.id=t,this.seq=[],this.map={}}Ra.prototype.updateCache=function(t){var e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),ta(e,t)},Ca.prototype.setValue=function(t,e,n){for(var r=this.seq,i=0,o=r.length;i!==o;++i){var a=r[i];a.setValue(t,e[a.id],n)}};var Oa=/([\\w\\d_]+)(\\])?(\\[|\\.)?/g;function Ia(t,e){t.seq.push(e),t.map[e.id]=e}function Da(t,e,n){var r=t.name,i=r.length;Oa.lastIndex=0;while(1){var o=Oa.exec(r),a=Oa.lastIndex,s=o[1],c=\"]\"===o[2],u=o[3];if(c&&(s|=0),void 0===u||\"[\"===u&&a+2===i){Ia(n,void 0===u?new Pa(s,t,e):new Ra(s,t,e));break}var l=n.map,h=l[s];void 0===h&&(h=new Ca(s),Ia(n,h)),n=h}}function Na(t,e){this.seq=[],this.map={};for(var n=t.getProgramParameter(e,35718),r=0;r<n;++r){var i=t.getActiveUniform(e,r),o=t.getUniformLocation(e,i.name);Da(i,o,this)}}function Ba(t){for(var e=t.split(\"\\n\"),n=0;n<e.length;n++)e[n]=n+1+\": \"+e[n];return e.join(\"\\n\")}function za(t,e,n,r){var i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),!0===r&&(!1===t.getShaderParameter(i,35713)&&console.error(\"THREE.WebGLShader: Shader couldn't compile.\"),\"\"!==t.getShaderInfoLog(i)&&console.warn(\"THREE.WebGLShader: gl.getShaderInfoLog()\",35633===e?\"vertex\":\"fragment\",t.getShaderInfoLog(i),Ba(n))),i}Na.prototype.setValue=function(t,e,n,r){var i=this.map[e];void 0!==i&&i.setValue(t,n,r)},Na.prototype.setOptional=function(t,e,n){var r=e[n];void 0!==r&&this.setValue(t,n,r)},Na.upload=function(t,e,n,r){for(var i=0,o=e.length;i!==o;++i){var a=e[i],s=n[a.id];!1!==s.needsUpdate&&a.setValue(t,s.value,r)}},Na.seqWithValue=function(t,e){for(var n=[],r=0,i=t.length;r!==i;++r){var o=t[r];o.id in e&&n.push(o)}return n};var Ua=0;function Ga(t){switch(t){case Ze:return[\"Linear\",\"( value )\"];case Qe:return[\"sRGB\",\"( value )\"];case $e:return[\"RGBE\",\"( value )\"];case en:return[\"RGBM\",\"( value, 7.0 )\"];case nn:return[\"RGBM\",\"( value, 16.0 )\"];case rn:return[\"RGBD\",\"( value, 256.0 )\"];case Ke:return[\"Gamma\",\"( value, float( GAMMA_FACTOR ) )\"];default:throw new Error(\"unsupported encoding: \"+t)}}function Fa(t,e){var n=Ga(e);return\"vec4 \"+t+\"( vec4 value ) { return \"+n[0]+\"ToLinear\"+n[1]+\"; }\"}function Ha(t,e){var n=Ga(e);return\"vec4 \"+t+\"( vec4 value ) { return LinearTo\"+n[0]+n[1]+\"; }\"}function ja(t,e){var n;switch(e){case Tt:n=\"Linear\";break;case At:n=\"Reinhard\";break;case Lt:n=\"Uncharted2\";break;case Pt:n=\"OptimizedCineon\";break;case Rt:n=\"ACESFilmic\";break;default:throw new Error(\"unsupported toneMapping: \"+e)}return\"vec3 \"+t+\"( vec3 color ) { return \"+n+\"ToneMapping( color ); }\"}function ka(t,e,n){t=t||{};var r=[t.derivatives||e.envMapCubeUV||e.bumpMap||e.normalMap&&!e.objectSpaceNormalMap||e.flatShading?\"#extension GL_OES_standard_derivatives : enable\":\"\",(t.fragDepth||e.logarithmicDepthBuffer)&&n.get(\"EXT_frag_depth\")?\"#extension GL_EXT_frag_depth : enable\":\"\",t.drawBuffers&&n.get(\"WEBGL_draw_buffers\")?\"#extension GL_EXT_draw_buffers : require\":\"\",(t.shaderTextureLOD||e.envMap)&&n.get(\"EXT_shader_texture_lod\")?\"#extension GL_EXT_shader_texture_lod : enable\":\"\"];return r.filter(qa).join(\"\\n\")}function Va(t){var e=[];for(var n in t){var r=t[n];!1!==r&&e.push(\"#define \"+n+\" \"+r)}return e.join(\"\\n\")}function Wa(t,e){for(var n={},r=t.getProgramParameter(e,35721),i=0;i<r;i++){var o=t.getActiveAttrib(e,i),a=o.name;n[a]=t.getAttribLocation(e,a)}return n}function qa(t){return\"\"!==t}function Xa(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights)}function Ya(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ja(t){var e=/^[ \\t]*#include +<([\\w\\d.\\/]+)>/gm;function n(t,e){var n=Ui[e];if(void 0===n)throw new Error(\"Can not resolve #include <\"+e+\">\");return Ja(n)}return t.replace(e,n)}function Za(t){var e=/#pragma unroll_loop[\\s]+?for \\( int i \\= (\\d+)\\; i < (\\d+)\\; i \\+\\+ \\) \\{([\\s\\S]+?)(?=\\})\\}/g;function n(t,e,n,r){for(var i=\"\",o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\\[ i \\]/g,\"[ \"+o+\" ]\");return i}return t.replace(e,n)}function Qa(t,e,n,r,i,o,a,s){var c=t.context,u=r.defines,l=i.vertexShader,h=i.fragmentShader,p=\"SHADOWMAP_TYPE_BASIC\";o.shadowMapType===B?p=\"SHADOWMAP_TYPE_PCF\":o.shadowMapType===z&&(p=\"SHADOWMAP_TYPE_PCF_SOFT\");var d=\"ENVMAP_TYPE_CUBE\",f=\"ENVMAP_MODE_REFLECTION\",m=\"ENVMAP_BLENDING_MULTIPLY\";if(o.envMap){switch(r.envMap.mapping){case Ot:case It:d=\"ENVMAP_TYPE_CUBE\";break;case zt:case Ut:d=\"ENVMAP_TYPE_CUBE_UV\";break;case Dt:case Nt:d=\"ENVMAP_TYPE_EQUIREC\";break;case Bt:d=\"ENVMAP_TYPE_SPHERE\";break}switch(r.envMap.mapping){case It:case Nt:f=\"ENVMAP_MODE_REFRACTION\";break}switch(r.combine){case _t:m=\"ENVMAP_BLENDING_MULTIPLY\";break;case Mt:m=\"ENVMAP_BLENDING_MIX\";break;case St:m=\"ENVMAP_BLENDING_ADD\";break}}var v,g,y=t.gammaFactor>0?t.gammaFactor:1,x=a.isWebGL2?\"\":ka(r.extensions,o,e),b=Va(u),w=c.createProgram();if(r.isRawShaderMaterial?(v=[b].filter(qa).join(\"\\n\"),v.length>0&&(v+=\"\\n\"),g=[x,b].filter(qa).join(\"\\n\"),g.length>0&&(g+=\"\\n\")):(v=[\"precision \"+o.precision+\" float;\",\"precision \"+o.precision+\" int;\",\"#define SHADER_NAME \"+i.name,b,o.supportsVertexTextures?\"#define VERTEX_TEXTURES\":\"\",\"#define GAMMA_FACTOR \"+y,\"#define MAX_BONES \"+o.maxBones,o.useFog&&o.fog?\"#define USE_FOG\":\"\",o.useFog&&o.fogExp?\"#define FOG_EXP2\":\"\",o.map?\"#define USE_MAP\":\"\",o.envMap?\"#define USE_ENVMAP\":\"\",o.envMap?\"#define \"+f:\"\",o.lightMap?\"#define USE_LIGHTMAP\":\"\",o.aoMap?\"#define USE_AOMAP\":\"\",o.emissiveMap?\"#define USE_EMISSIVEMAP\":\"\",o.bumpMap?\"#define USE_BUMPMAP\":\"\",o.normalMap?\"#define USE_NORMALMAP\":\"\",o.normalMap&&o.objectSpaceNormalMap?\"#define OBJECTSPACE_NORMALMAP\":\"\",o.displacementMap&&o.supportsVertexTextures?\"#define USE_DISPLACEMENTMAP\":\"\",o.specularMap?\"#define USE_SPECULARMAP\":\"\",o.roughnessMap?\"#define USE_ROUGHNESSMAP\":\"\",o.metalnessMap?\"#define USE_METALNESSMAP\":\"\",o.alphaMap?\"#define USE_ALPHAMAP\":\"\",o.vertexTangents?\"#define USE_TANGENT\":\"\",o.vertexColors?\"#define USE_COLOR\":\"\",o.flatShading?\"#define FLAT_SHADED\":\"\",o.skinning?\"#define USE_SKINNING\":\"\",o.useVertexTexture?\"#define BONE_TEXTURE\":\"\",o.morphTargets?\"#define USE_MORPHTARGETS\":\"\",o.morphNormals&&!1===o.flatShading?\"#define USE_MORPHNORMALS\":\"\",o.doubleSided?\"#define DOUBLE_SIDED\":\"\",o.flipSided?\"#define FLIP_SIDED\":\"\",o.shadowMapEnabled?\"#define USE_SHADOWMAP\":\"\",o.shadowMapEnabled?\"#define \"+p:\"\",o.sizeAttenuation?\"#define USE_SIZEATTENUATION\":\"\",o.logarithmicDepthBuffer?\"#define USE_LOGDEPTHBUF\":\"\",o.logarithmicDepthBuffer&&(a.isWebGL2||e.get(\"EXT_frag_depth\"))?\"#define USE_LOGDEPTHBUF_EXT\":\"\",\"uniform mat4 modelMatrix;\",\"uniform mat4 modelViewMatrix;\",\"uniform mat4 projectionMatrix;\",\"uniform mat4 viewMatrix;\",\"uniform mat3 normalMatrix;\",\"uniform vec3 cameraPosition;\",\"attribute vec3 position;\",\"attribute vec3 normal;\",\"attribute vec2 uv;\",\"#ifdef USE_TANGENT\",\"\\tattribute vec4 tangent;\",\"#endif\",\"#ifdef USE_COLOR\",\"\\tattribute vec3 color;\",\"#endif\",\"#ifdef USE_MORPHTARGETS\",\"\\tattribute vec3 morphTarget0;\",\"\\tattribute vec3 morphTarget1;\",\"\\tattribute vec3 morphTarget2;\",\"\\tattribute vec3 morphTarget3;\",\"\\t#ifdef USE_MORPHNORMALS\",\"\\t\\tattribute vec3 morphNormal0;\",\"\\t\\tattribute vec3 morphNormal1;\",\"\\t\\tattribute vec3 morphNormal2;\",\"\\t\\tattribute vec3 morphNormal3;\",\"\\t#else\",\"\\t\\tattribute vec3 morphTarget4;\",\"\\t\\tattribute vec3 morphTarget5;\",\"\\t\\tattribute vec3 morphTarget6;\",\"\\t\\tattribute vec3 morphTarget7;\",\"\\t#endif\",\"#endif\",\"#ifdef USE_SKINNING\",\"\\tattribute vec4 skinIndex;\",\"\\tattribute vec4 skinWeight;\",\"#endif\",\"\\n\"].filter(qa).join(\"\\n\"),g=[x,\"precision \"+o.precision+\" float;\",\"precision \"+o.precision+\" int;\",\"#define SHADER_NAME \"+i.name,b,o.alphaTest?\"#define ALPHATEST \"+o.alphaTest+(o.alphaTest%1?\"\":\".0\"):\"\",\"#define GAMMA_FACTOR \"+y,o.useFog&&o.fog?\"#define USE_FOG\":\"\",o.useFog&&o.fogExp?\"#define FOG_EXP2\":\"\",o.map?\"#define USE_MAP\":\"\",o.matcap?\"#define USE_MATCAP\":\"\",o.envMap?\"#define USE_ENVMAP\":\"\",o.envMap?\"#define \"+d:\"\",o.envMap?\"#define \"+f:\"\",o.envMap?\"#define \"+m:\"\",o.lightMap?\"#define USE_LIGHTMAP\":\"\",o.aoMap?\"#define USE_AOMAP\":\"\",o.emissiveMap?\"#define USE_EMISSIVEMAP\":\"\",o.bumpMap?\"#define USE_BUMPMAP\":\"\",o.normalMap?\"#define USE_NORMALMAP\":\"\",o.normalMap&&o.objectSpaceNormalMap?\"#define OBJECTSPACE_NORMALMAP\":\"\",o.specularMap?\"#define USE_SPECULARMAP\":\"\",o.roughnessMap?\"#define USE_ROUGHNESSMAP\":\"\",o.metalnessMap?\"#define USE_METALNESSMAP\":\"\",o.alphaMap?\"#define USE_ALPHAMAP\":\"\",o.vertexTangents?\"#define USE_TANGENT\":\"\",o.vertexColors?\"#define USE_COLOR\":\"\",o.gradientMap?\"#define USE_GRADIENTMAP\":\"\",o.flatShading?\"#define FLAT_SHADED\":\"\",o.doubleSided?\"#define DOUBLE_SIDED\":\"\",o.flipSided?\"#define FLIP_SIDED\":\"\",o.shadowMapEnabled?\"#define USE_SHADOWMAP\":\"\",o.shadowMapEnabled?\"#define \"+p:\"\",o.premultipliedAlpha?\"#define PREMULTIPLIED_ALPHA\":\"\",o.physicallyCorrectLights?\"#define PHYSICALLY_CORRECT_LIGHTS\":\"\",o.logarithmicDepthBuffer?\"#define USE_LOGDEPTHBUF\":\"\",o.logarithmicDepthBuffer&&(a.isWebGL2||e.get(\"EXT_frag_depth\"))?\"#define USE_LOGDEPTHBUF_EXT\":\"\",o.envMap&&(a.isWebGL2||e.get(\"EXT_shader_texture_lod\"))?\"#define TEXTURE_LOD_EXT\":\"\",\"uniform mat4 viewMatrix;\",\"uniform vec3 cameraPosition;\",o.toneMapping!==Et?\"#define TONE_MAPPING\":\"\",o.toneMapping!==Et?Ui[\"tonemapping_pars_fragment\"]:\"\",o.toneMapping!==Et?ja(\"toneMapping\",o.toneMapping):\"\",o.dithering?\"#define DITHERING\":\"\",o.outputEncoding||o.mapEncoding||o.matcapEncoding||o.envMapEncoding||o.emissiveMapEncoding?Ui[\"encodings_pars_fragment\"]:\"\",o.mapEncoding?Fa(\"mapTexelToLinear\",o.mapEncoding):\"\",o.matcapEncoding?Fa(\"matcapTexelToLinear\",o.matcapEncoding):\"\",o.envMapEncoding?Fa(\"envMapTexelToLinear\",o.envMapEncoding):\"\",o.emissiveMapEncoding?Fa(\"emissiveMapTexelToLinear\",o.emissiveMapEncoding):\"\",o.outputEncoding?Ha(\"linearToOutputTexel\",o.outputEncoding):\"\",o.depthPacking?\"#define DEPTH_PACKING \"+r.depthPacking:\"\",\"\\n\"].filter(qa).join(\"\\n\")),l=Ja(l),l=Xa(l,o),l=Ya(l,o),h=Ja(h),h=Xa(h,o),h=Ya(h,o),l=Za(l),h=Za(h),a.isWebGL2&&!r.isRawShaderMaterial){var _=!1,M=/^\\s*#version\\s+300\\s+es\\s*\\n/;r.isShaderMaterial&&null!==l.match(M)&&null!==h.match(M)&&(_=!0,l=l.replace(M,\"\"),h=h.replace(M,\"\")),v=[\"#version 300 es\\n\",\"#define attribute in\",\"#define varying out\",\"#define texture2D texture\"].join(\"\\n\")+\"\\n\"+v,g=[\"#version 300 es\\n\",\"#define varying in\",_?\"\":\"out highp vec4 pc_fragColor;\",_?\"\":\"#define gl_FragColor pc_fragColor\",\"#define gl_FragDepthEXT gl_FragDepth\",\"#define texture2D texture\",\"#define textureCube texture\",\"#define texture2DProj textureProj\",\"#define texture2DLodEXT textureLod\",\"#define texture2DProjLodEXT textureProjLod\",\"#define textureCubeLodEXT textureLod\",\"#define texture2DGradEXT textureGrad\",\"#define texture2DProjGradEXT textureProjGrad\",\"#define textureCubeGradEXT textureGrad\"].join(\"\\n\")+\"\\n\"+g}var S,E,T=v+l,A=g+h,L=za(c,35633,T,t.debug.checkShaderErrors),P=za(c,35632,A,t.debug.checkShaderErrors);if(c.attachShader(w,L),c.attachShader(w,P),void 0!==r.index0AttributeName?c.bindAttribLocation(w,0,r.index0AttributeName):!0===o.morphTargets&&c.bindAttribLocation(w,0,\"position\"),c.linkProgram(w),t.debug.checkShaderErrors){var R=c.getProgramInfoLog(w).trim(),C=c.getShaderInfoLog(L).trim(),O=c.getShaderInfoLog(P).trim(),I=!0,D=!0;!1===c.getProgramParameter(w,35714)?(I=!1,console.error(\"THREE.WebGLProgram: shader error: \",c.getError(),\"35715\",c.getProgramParameter(w,35715),\"gl.getProgramInfoLog\",R,C,O)):\"\"!==R?console.warn(\"THREE.WebGLProgram: gl.getProgramInfoLog()\",R):\"\"!==C&&\"\"!==O||(D=!1),D&&(this.diagnostics={runnable:I,material:r,programLog:R,vertexShader:{log:C,prefix:v},fragmentShader:{log:O,prefix:g}})}return c.deleteShader(L),c.deleteShader(P),this.getUniforms=function(){return void 0===S&&(S=new Na(c,w,s)),S},this.getAttributes=function(){return void 0===E&&(E=Wa(c,w)),E},this.destroy=function(){c.deleteProgram(w),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn(\"THREE.WebGLProgram: .uniforms is now .getUniforms().\"),this.getUniforms()}},attributes:{get:function(){return console.warn(\"THREE.WebGLProgram: .attributes is now .getAttributes().\"),this.getAttributes()}}}),this.name=i.name,this.id=Ua++,this.code=n,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=P,this}function Ka(t,e,n,r){var i=[],o={MeshDepthMaterial:\"depth\",MeshDistanceMaterial:\"distanceRGBA\",MeshNormalMaterial:\"normal\",MeshBasicMaterial:\"basic\",MeshLambertMaterial:\"lambert\",MeshPhongMaterial:\"phong\",MeshToonMaterial:\"phong\",MeshStandardMaterial:\"physical\",MeshPhysicalMaterial:\"physical\",MeshMatcapMaterial:\"matcap\",LineBasicMaterial:\"basic\",LineDashedMaterial:\"dashed\",PointsMaterial:\"points\",ShadowMaterial:\"shadow\",SpriteMaterial:\"sprite\"},a=[\"precision\",\"supportsVertexTextures\",\"map\",\"mapEncoding\",\"matcap\",\"matcapEncoding\",\"envMap\",\"envMapMode\",\"envMapEncoding\",\"lightMap\",\"aoMap\",\"emissiveMap\",\"emissiveMapEncoding\",\"bumpMap\",\"normalMap\",\"objectSpaceNormalMap\",\"displacementMap\",\"specularMap\",\"roughnessMap\",\"metalnessMap\",\"gradientMap\",\"alphaMap\",\"combine\",\"vertexColors\",\"vertexTangents\",\"fog\",\"useFog\",\"fogExp\",\"flatShading\",\"sizeAttenuation\",\"logarithmicDepthBuffer\",\"skinning\",\"maxBones\",\"useVertexTexture\",\"morphTargets\",\"morphNormals\",\"maxMorphTargets\",\"maxMorphNormals\",\"premultipliedAlpha\",\"numDirLights\",\"numPointLights\",\"numSpotLights\",\"numHemiLights\",\"numRectAreaLights\",\"shadowMapEnabled\",\"shadowMapType\",\"toneMapping\",\"physicallyCorrectLights\",\"alphaTest\",\"doubleSided\",\"flipSided\",\"numClippingPlanes\",\"numClipIntersection\",\"depthPacking\",\"dithering\"];function s(t){var e=t.skeleton,r=e.bones;if(n.floatVertexTextures)return 1024;var i=n.maxVertexUniforms,o=Math.floor((i-20)/4),a=Math.min(o,r.length);return a<r.length?(console.warn(\"THREE.WebGLRenderer: Skeleton has \"+r.length+\" bones. This GPU supports \"+a+\".\"),0):a}function c(t,e){var n;return t?t.isTexture?n=t.encoding:t.isWebGLRenderTarget&&(console.warn(\"THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.\"),n=t.texture.encoding):n=Ze,n===Ze&&e&&(n=Ke),n}this.getParameters=function(e,r,i,a,u,l,h){var p=o[e.type],d=h.isSkinnedMesh?s(h):0,f=n.precision;null!==e.precision&&(f=n.getMaxPrecision(e.precision),f!==e.precision&&console.warn(\"THREE.WebGLProgram.getParameters:\",e.precision,\"not supported, using\",f,\"instead.\"));var m=t.getRenderTarget(),v={shaderID:p,precision:f,supportsVertexTextures:n.vertexTextures,outputEncoding:c(m?m.texture:null,t.gammaOutput),map:!!e.map,mapEncoding:c(e.map,t.gammaInput),matcap:!!e.matcap,matcapEncoding:c(e.matcap,t.gammaInput),envMap:!!e.envMap,envMapMode:e.envMap&&e.envMap.mapping,envMapEncoding:c(e.envMap,t.gammaInput),envMapCubeUV:!!e.envMap&&(e.envMap.mapping===zt||e.envMap.mapping===Ut),lightMap:!!e.lightMap,aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:c(e.emissiveMap,t.gammaInput),bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:e.normalMapType===cn,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,gradientMap:!!e.gradientMap,combine:e.combine,vertexTangents:e.normalMap&&e.vertexTangents,vertexColors:e.vertexColors,fog:!!a,useFog:e.fog,fogExp:a&&a.isFogExp2,flatShading:e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:n.logarithmicDepthBuffer,skinning:e.skinning&&d>0,maxBones:d,useVertexTexture:n.floatVertexTextures,morphTargets:e.morphTargets,morphNormals:e.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:r.directional.length,numPointLights:r.point.length,numSpotLights:r.spot.length,numRectAreaLights:r.rectArea.length,numHemiLights:r.hemi.length,numClippingPlanes:u,numClipIntersection:l,dithering:e.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.receiveShadow&&i.length>0,shadowMapType:t.shadowMap.type,toneMapping:t.toneMapping,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:e.side===F,flipSided:e.side===G,depthPacking:void 0!==e.depthPacking&&e.depthPacking};return v},this.getProgramCode=function(e,n){var r=[];if(n.shaderID?r.push(n.shaderID):(r.push(e.fragmentShader),r.push(e.vertexShader)),void 0!==e.defines)for(var i in e.defines)r.push(i),r.push(e.defines[i]);for(var o=0;o<a.length;o++)r.push(n[a[o]]);return r.push(e.onBeforeCompile.toString()),r.push(t.gammaOutput),r.push(t.gammaFactor),r.join()},this.acquireProgram=function(o,a,s,c){for(var u,l=0,h=i.length;l<h;l++){var p=i[l];if(p.code===c){u=p,++u.usedTimes;break}}return void 0===u&&(u=new Qa(t,e,c,o,a,s,n,r),i.push(u)),u},this.releaseProgram=function(t){if(0===--t.usedTimes){var e=i.indexOf(t);i[e]=i[i.length-1],i.pop(),t.destroy()}},this.programs=i}function $a(){var t=new WeakMap;function e(e){var n=t.get(e);return void 0===n&&(n={},t.set(e,n)),n}function n(e){t.delete(e)}function r(e,n,r){t.get(e)[n]=r}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function ts(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function es(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ns(){var t=[],e=0,n=[],r=[],i={id:-1};function o(){e=0,n.length=0,r.length=0}function a(n,r,o,a,s,c){var u=t[e];return void 0===u?(u={id:n.id,object:n,geometry:r,material:o,program:o.program||i,groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},t[e]=u):(u.id=n.id,u.object=n,u.geometry=r,u.material=o,u.program=o.program||i,u.groupOrder=a,u.renderOrder=n.renderOrder,u.z=s,u.group=c),e++,u}function s(t,e,i,o,s,c){var u=a(t,e,i,o,s,c);(!0===i.transparent?r:n).push(u)}function c(t,e,i,o,s,c){var u=a(t,e,i,o,s,c);(!0===i.transparent?r:n).unshift(u)}function u(){n.length>1&&n.sort(ts),r.length>1&&r.sort(es)}return{opaque:n,transparent:r,init:o,push:s,unshift:c,sort:u}}function rs(){var t={};function e(n){var r=n.target;r.removeEventListener(\"dispose\",e),delete t[r.id]}function n(n,r){var i,o=t[n.id];return void 0===o?(i=new ns,t[n.id]={},t[n.id][r.id]=i,n.addEventListener(\"dispose\",e)):(i=o[r.id],void 0===i&&(i=new ns,o[r.id]=i)),i}function r(){t={}}return{get:n,dispose:r}}function is(){var t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];var n;switch(e.type){case\"DirectionalLight\":n={direction:new pn,color:new ki,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new ln};break;case\"SpotLight\":n={position:new pn,direction:new pn,color:new ki,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new ln};break;case\"PointLight\":n={position:new pn,color:new ki,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break;case\"HemisphereLight\":n={direction:new pn,skyColor:new ki,groundColor:new ki};break;case\"RectAreaLight\":n={color:new ki,position:new pn,halfWidth:new pn,halfHeight:new pn};break}return t[e.id]=n,n}}}var os=0;function as(){for(var t=new is,e={id:os++,hash:{stateID:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,shadowsLength:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},n=0;n<9;n++)e.probe.push(new pn);var r=new pn,i=new Tn,o=new Tn;function a(n,a,s){for(var c=0,u=0,l=0,h=0;h<9;h++)e.probe[h].set(0,0,0);for(var p=0,d=0,f=0,m=0,v=0,g=s.matrixWorldInverse,y=(h=0,n.length);h<y;h++){var x=n[h],b=x.color,w=x.intensity,_=x.distance,M=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)c+=b.r*w,u+=b.g*w,l+=b.b*w;else if(x.isLightProbe)for(var S=0;S<9;S++)e.probe[S].addScaledVector(x.sh.coefficients[S],w);else if(x.isDirectionalLight){var E=t.get(x);if(E.color.copy(x.color).multiplyScalar(x.intensity),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),E.shadow=x.castShadow,x.castShadow){var T=x.shadow;E.shadowBias=T.bias,E.shadowRadius=T.radius,E.shadowMapSize=T.mapSize}e.directionalShadowMap[p]=M,e.directionalShadowMatrix[p]=x.shadow.matrix,e.directional[p]=E,p++}else if(x.isSpotLight){E=t.get(x);if(E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),E.color.copy(b).multiplyScalar(w),E.distance=_,E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),E.coneCos=Math.cos(x.angle),E.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),E.decay=x.decay,E.shadow=x.castShadow,x.castShadow){T=x.shadow;E.shadowBias=T.bias,E.shadowRadius=T.radius,E.shadowMapSize=T.mapSize}e.spotShadowMap[f]=M,e.spotShadowMatrix[f]=x.shadow.matrix,e.spot[f]=E,f++}else if(x.isRectAreaLight){E=t.get(x);E.color.copy(b).multiplyScalar(w),E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),o.identity(),i.copy(x.matrixWorld),i.premultiply(g),o.extractRotation(i),E.halfWidth.set(.5*x.width,0,0),E.halfHeight.set(0,.5*x.height,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),e.rectArea[m]=E,m++}else if(x.isPointLight){E=t.get(x);if(E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),E.color.copy(x.color).multiplyScalar(x.intensity),E.distance=x.distance,E.decay=x.decay,E.shadow=x.castShadow,x.castShadow){T=x.shadow;E.shadowBias=T.bias,E.shadowRadius=T.radius,E.shadowMapSize=T.mapSize,E.shadowCameraNear=T.camera.near,E.shadowCameraFar=T.camera.far}e.pointShadowMap[d]=M,e.pointShadowMatrix[d]=x.shadow.matrix,e.point[d]=E,d++}else if(x.isHemisphereLight){E=t.get(x);E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(g),E.direction.normalize(),E.skyColor.copy(x.color).multiplyScalar(w),E.groundColor.copy(x.groundColor).multiplyScalar(w),e.hemi[v]=E,v++}}e.ambient[0]=c,e.ambient[1]=u,e.ambient[2]=l,e.directional.length=p,e.spot.length=f,e.rectArea.length=m,e.point.length=d,e.hemi.length=v,e.hash.stateID=e.id,e.hash.directionalLength=p,e.hash.pointLength=d,e.hash.spotLength=f,e.hash.rectAreaLength=m,e.hash.hemiLength=v,e.hash.shadowsLength=a.length}return{setup:a,state:e}}function ss(){var t=new as,e=[],n=[];function r(){e.length=0,n.length=0}function i(t){e.push(t)}function o(t){n.push(t)}function a(r){t.setup(e,n,r)}var s={lightsArray:e,shadowsArray:n,lights:t};return{init:r,state:s,setupLights:a,pushLight:i,pushShadow:o}}function cs(){var t={};function e(n){var r=n.target;r.removeEventListener(\"dispose\",e),delete t[r.id]}function n(n,r){var i;return void 0===t[n.id]?(i=new ss,t[n.id]={},t[n.id][r.id]=i,n.addEventListener(\"dispose\",e)):void 0===t[n.id][r.id]?(i=new ss,t[n.id][r.id]=i):i=t[n.id][r.id],i}function r(){t={}}return{get:n,dispose:r}}function us(t){wo.call(this),this.type=\"MeshDepthMaterial\",this.depthPacking=on,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(t)}function ls(t){wo.call(this),this.type=\"MeshDistanceMaterial\",this.referencePosition=new pn,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.lights=!1,this.setValues(t)}function hs(t,e,n){for(var r=new En,i=new Tn,o=new ln,a=new ln(n,n),s=new pn,c=new pn,u=1,l=2,h=1+(u|l),p=new Array(h),d=new Array(h),f={},m={0:G,1:U,2:F},v=[new pn(1,0,0),new pn(-1,0,0),new pn(0,0,1),new pn(0,0,-1),new pn(0,1,0),new pn(0,-1,0)],g=[new pn(0,1,0),new pn(0,1,0),new pn(0,1,0),new pn(0,1,0),new pn(0,0,1),new pn(0,0,-1)],y=[new gn,new gn,new gn,new gn,new gn,new gn],x=0;x!==h;++x){var b=0!==(x&u),w=0!==(x&l),_=new us({depthPacking:an,morphTargets:b,skinning:w});p[x]=_;var M=new ls({morphTargets:b,skinning:w});d[x]=M}var S=this;function E(e,n,r,i,o,a){var s=e.geometry,c=null,h=p,v=e.customDepthMaterial;if(r&&(h=d,v=e.customDistanceMaterial),v)c=v;else{var g=!1;n.morphTargets&&(s&&s.isBufferGeometry?g=s.morphAttributes&&s.morphAttributes.position&&s.morphAttributes.position.length>0:s&&s.isGeometry&&(g=s.morphTargets&&s.morphTargets.length>0)),e.isSkinnedMesh&&!1===n.skinning&&console.warn(\"THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:\",e);var y=e.isSkinnedMesh&&n.skinning,x=0;g&&(x|=u),y&&(x|=l),c=h[x]}if(t.localClippingEnabled&&!0===n.clipShadows&&0!==n.clippingPlanes.length){var b=c.uuid,w=n.uuid,_=f[b];void 0===_&&(_={},f[b]=_);var M=_[w];void 0===M&&(M=c.clone(),_[w]=M),c=M}return c.visible=n.visible,c.wireframe=n.wireframe,c.side=null!=n.shadowSide?n.shadowSide:m[n.side],c.clipShadows=n.clipShadows,c.clippingPlanes=n.clippingPlanes,c.clipIntersection=n.clipIntersection,c.wireframeLinewidth=n.wireframeLinewidth,c.linewidth=n.linewidth,r&&c.isMeshDistanceMaterial&&(c.referencePosition.copy(i),c.nearDistance=o,c.farDistance=a),c}function T(n,i,o,a){if(!1!==n.visible){var s=n.layers.test(i.layers);if(s&&(n.isMesh||n.isLine||n.isPoints)&&n.castShadow&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);var u=e.update(n),l=n.material;if(Array.isArray(l))for(var h=u.groups,p=0,d=h.length;p<d;p++){var f=h[p],m=l[f.materialIndex];if(m&&m.visible){var v=E(n,m,a,c,o.near,o.far);t.renderBufferDirect(o,null,u,v,n,f)}}else if(l.visible){v=E(n,l,a,c,o.near,o.far);t.renderBufferDirect(o,null,u,v,n,null)}}for(var g=n.children,y=0,x=g.length;y<x;y++)T(g[y],i,o,a)}}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B,this.render=function(e,n,u){if(!1!==S.enabled&&(!1!==S.autoUpdate||!1!==S.needsUpdate)&&0!==e.length){var l,h=t.getRenderTarget(),p=t.state;p.setBlending(q),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);for(var d=0,f=e.length;d<f;d++){var m=e[d],x=m.shadow,b=m&&m.isPointLight;if(void 0!==x){var w=x.camera;if(o.copy(x.mapSize),o.min(a),b){var _=o.x,M=o.y;y[0].set(2*_,M,_,M),y[1].set(0,M,_,M),y[2].set(3*_,M,_,M),y[3].set(_,M,_,M),y[4].set(3*_,0,_,M),y[5].set(_,0,_,M),o.x*=4,o.y*=2}if(null===x.map){var E={minFilter:jt,magFilter:jt,format:ce};x.map=new yn(o.x,o.y,E),x.map.texture.name=m.name+\".shadowMap\",w.updateProjectionMatrix()}x.isSpotLightShadow&&x.update(m);var A=x.map,L=x.matrix;c.setFromMatrixPosition(m.matrixWorld),w.position.copy(c),b?(l=6,L.makeTranslation(-c.x,-c.y,-c.z)):(l=1,s.setFromMatrixPosition(m.target.matrixWorld),w.lookAt(s),w.updateMatrixWorld(),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(w.projectionMatrix),L.multiply(w.matrixWorldInverse)),t.setRenderTarget(A),t.clear();for(var P=0;P<l;P++){if(b){s.copy(w.position),s.add(v[P]),w.up.copy(g[P]),w.lookAt(s),w.updateMatrixWorld();var R=y[P];p.viewport(R)}i.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),r.setFromMatrix(i),T(n,u,w,b)}}else console.warn(\"THREE.WebGLShadowMap:\",m,\"has no shadow.\")}S.needsUpdate=!1,t.setRenderTarget(h)}}}function ps(t,e,n,r){function i(){var e=!1,n=new gn,r=null,i=new gn(0,0,0,0);return{setMask:function(n){r===n||e||(t.colorMask(n,n,n,n),r=n)},setLocked:function(t){e=t},setClear:function(e,r,o,a,s){!0===s&&(e*=a,r*=a,o*=a),n.set(e,r,o,a),!1===i.equals(n)&&(t.clearColor(e,r,o,a),i.copy(n))},reset:function(){e=!1,r=null,i.set(-1,0,0,0)}}}function o(){var e=!1,n=null,r=null,i=null;return{setTest:function(t){t?rt(2929):it(2929)},setMask:function(r){n===r||e||(t.depthMask(r),n=r)},setFunc:function(e){if(r!==e){if(e)switch(e){case ft:t.depthFunc(512);break;case mt:t.depthFunc(519);break;case vt:t.depthFunc(513);break;case gt:t.depthFunc(515);break;case yt:t.depthFunc(514);break;case xt:t.depthFunc(518);break;case bt:t.depthFunc(516);break;case wt:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);r=e}},setLocked:function(t){e=t},setClear:function(e){i!==e&&(t.clearDepth(e),i=e)},reset:function(){e=!1,n=null,r=null,i=null}}}function a(){var e=!1,n=null,r=null,i=null,o=null,a=null,s=null,c=null,u=null;return{setTest:function(t){t?rt(2960):it(2960)},setMask:function(r){n===r||e||(t.stencilMask(r),n=r)},setFunc:function(e,n,a){r===e&&i===n&&o===a||(t.stencilFunc(e,n,a),r=e,i=n,o=a)},setOp:function(e,n,r){a===e&&s===n&&c===r||(t.stencilOp(e,n,r),a=e,s=n,c=r)},setLocked:function(t){e=t},setClear:function(e){u!==e&&(t.clearStencil(e),u=e)},reset:function(){e=!1,n=null,r=null,i=null,o=null,a=null,s=null,c=null,u=null}}}var s=new i,c=new o,u=new a,l=t.getParameter(34921),h=new Uint8Array(l),p=new Uint8Array(l),d=new Uint8Array(l),f={},m=null,v=null,g=null,y=null,x=null,b=null,w=null,_=null,M=null,S=null,E=!1,T=null,A=null,L=null,O=null,I=null,D=t.getParameter(35661),N=!1,B=0,z=t.getParameter(7938);-1!==z.indexOf(\"WebGL\")?(B=parseFloat(/^WebGL\\ ([0-9])/.exec(z)[1]),N=B>=1):-1!==z.indexOf(\"OpenGL ES\")&&(B=parseFloat(/^OpenGL\\ ES\\ ([0-9])/.exec(z)[1]),N=B>=2);var U=null,H={},j=new gn,k=new gn;function V(e,n,r){var i=new Uint8Array(4),o=t.createTexture();t.bindTexture(e,o),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(var a=0;a<r;a++)t.texImage2D(n+a,0,6408,1,1,0,6408,5121,i);return o}var W={};function $(){for(var t=0,e=h.length;t<e;t++)h[t]=0}function tt(t){et(t,0)}function et(n,i){if(h[n]=1,0===p[n]&&(t.enableVertexAttribArray(n),p[n]=1),d[n]!==i){var o=r.isWebGL2?t:e.get(\"ANGLE_instanced_arrays\");o[r.isWebGL2?\"vertexAttribDivisor\":\"vertexAttribDivisorANGLE\"](n,i),d[n]=i}}function nt(){for(var e=0,n=p.length;e!==n;++e)p[e]!==h[e]&&(t.disableVertexAttribArray(e),p[e]=0)}function rt(e){!0!==f[e]&&(t.enable(e),f[e]=!0)}function it(e){!1!==f[e]&&(t.disable(e),f[e]=!1)}function ot(){if(null===m&&(m=[],e.get(\"WEBGL_compressed_texture_pvrtc\")||e.get(\"WEBGL_compressed_texture_s3tc\")||e.get(\"WEBGL_compressed_texture_etc1\")||e.get(\"WEBGL_compressed_texture_astc\")))for(var n=t.getParameter(34467),r=0;r<n.length;r++)m.push(n[r]);return m}function at(e){return v!==e&&(t.useProgram(e),v=e,!0)}function st(e,r,i,o,a,s,c,u){if(e!==q){if(g||(rt(3042),g=!0),e===Q)a=a||r,s=s||i,c=c||o,r===x&&a===_||(t.blendEquationSeparate(n.convert(r),n.convert(a)),x=r,_=a),i===b&&o===w&&s===M&&c===S||(t.blendFuncSeparate(n.convert(i),n.convert(o),n.convert(s),n.convert(c)),b=i,w=o,M=s,S=c),y=e,E=null;else if(e!==y||u!==E){if(x===K&&_===K||(t.blendEquation(32774),x=K,_=K),u)switch(e){case X:t.blendFuncSeparate(1,771,1,771);break;case Y:t.blendFunc(1,1);break;case J:t.blendFuncSeparate(0,0,769,771);break;case Z:t.blendFuncSeparate(0,768,0,770);break;default:console.error(\"THREE.WebGLState: Invalid blending: \",e);break}else switch(e){case X:t.blendFuncSeparate(770,771,1,771);break;case Y:t.blendFunc(770,1);break;case J:t.blendFunc(0,769);break;case Z:t.blendFunc(0,768);break;default:console.error(\"THREE.WebGLState: Invalid blending: \",e);break}b=null,w=null,M=null,S=null,y=e,E=u}}else g&&(it(3042),g=!1)}function ct(t,e){t.side===F?it(2884):rt(2884);var n=t.side===G;e&&(n=!n),ut(n),t.blending===X&&!1===t.transparent?st(q):st(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite),pt(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)}function ut(e){T!==e&&(e?t.frontFace(2304):t.frontFace(2305),T=e)}function lt(e){e!==P?(rt(2884),e!==A&&(e===R?t.cullFace(1029):e===C?t.cullFace(1028):t.cullFace(1032))):it(2884),A=e}function ht(e){e!==L&&(N&&t.lineWidth(e),L=e)}function pt(e,n,r){e?(rt(32823),O===n&&I===r||(t.polygonOffset(n,r),O=n,I=r)):it(32823)}function dt(t){t?rt(3089):it(3089)}function _t(e){void 0===e&&(e=33984+D-1),U!==e&&(t.activeTexture(e),U=e)}function Mt(e,n){null===U&&_t();var r=H[U];void 0===r&&(r={type:void 0,texture:void 0},H[U]=r),r.type===e&&r.texture===n||(t.bindTexture(e,n||W[e]),r.type=e,r.texture=n)}function St(){try{t.compressedTexImage2D.apply(t,arguments)}catch(e){console.error(\"THREE.WebGLState:\",e)}}function Et(){try{t.texImage2D.apply(t,arguments)}catch(e){console.error(\"THREE.WebGLState:\",e)}}function Tt(){try{t.texImage3D.apply(t,arguments)}catch(e){console.error(\"THREE.WebGLState:\",e)}}function At(e){!1===j.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),j.copy(e))}function Lt(e){!1===k.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),k.copy(e))}function Pt(){for(var e=0;e<p.length;e++)1===p[e]&&(t.disableVertexAttribArray(e),p[e]=0);f={},m=null,U=null,H={},v=null,y=null,T=null,A=null,s.reset(),c.reset(),u.reset()}return W[3553]=V(3553,3553,1),W[34067]=V(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),rt(2929),c.setFunc(gt),ut(!1),lt(R),rt(2884),st(q),{buffers:{color:s,depth:c,stencil:u},initAttributes:$,enableAttribute:tt,enableAttributeAndDivisor:et,disableUnusedAttributes:nt,enable:rt,disable:it,getCompressedTextureFormats:ot,useProgram:at,setBlending:st,setMaterial:ct,setFlipSided:ut,setCullFace:lt,setLineWidth:ht,setPolygonOffset:pt,setScissorTest:dt,activeTexture:_t,bindTexture:Mt,compressedTexImage2D:St,texImage2D:Et,texImage3D:Tt,scissor:At,viewport:Lt,reset:Pt}}function ds(t,e,n,r,i,o,a){var s,c={},u=\"undefined\"!==typeof OffscreenCanvas;function l(t,e){return u?new OffscreenCanvas(t,e):document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"canvas\")}function h(t,e,n,r){var i=1;if((t.width>r||t.height>r)&&(i=r/Math.max(t.width,t.height)),i<1||!0===e){if(\"undefined\"!==typeof HTMLImageElement&&t instanceof HTMLImageElement||\"undefined\"!==typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||\"undefined\"!==typeof ImageBitmap&&t instanceof ImageBitmap){var o=e?un.floorPowerOfTwo:Math.floor,a=o(i*t.width),c=o(i*t.height);void 0===s&&(s=l(a,c));var u=n?l(a,c):s;u.width=a,u.height=c;var h=u.getContext(\"2d\");return h.drawImage(t,0,0,a,c),console.warn(\"THREE.WebGLRenderer: Texture has been resized from (\"+t.width+\"x\"+t.height+\") to (\"+a+\"x\"+c+\").\"),u}return\"data\"in t&&console.warn(\"THREE.WebGLRenderer: Image in DataTexture is too big (\"+t.width+\"x\"+t.height+\").\"),t}return t}function p(t){return un.isPowerOfTwo(t.width)&&un.isPowerOfTwo(t.height)}function d(t){return!i.isWebGL2&&(t.wrapS!==Ft||t.wrapT!==Ft||t.minFilter!==jt&&t.minFilter!==Wt)}function f(t,e){return t.generateMipmaps&&e&&t.minFilter!==jt&&t.minFilter!==Wt}function m(e,n,i,o){t.generateMipmap(e);var a=r.get(n);a.__maxMipLevel=Math.log(Math.max(i,o))*Math.LOG2E}function v(t,n){if(!i.isWebGL2)return t;var r=t;return 6403===t&&(5126===n&&(r=33326),5131===n&&(r=33325),5121===n&&(r=33321)),6407===t&&(5126===n&&(r=34837),5131===n&&(r=34843),5121===n&&(r=32849)),6408===t&&(5126===n&&(r=34836),5131===n&&(r=34842),5121===n&&(r=32856)),33325===r||33326===r||34842===r||34836===r?e.get(\"EXT_color_buffer_float\"):34843!==r&&34837!==r||console.warn(\"THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.\"),r}function g(t){return t===jt||t===kt||t===Vt?9728:9729}function y(t){var e=t.target;e.removeEventListener(\"dispose\",y),b(e),e.isVideoTexture&&delete c[e.id],a.memory.textures--}function x(t){var e=t.target;e.removeEventListener(\"dispose\",x),w(e),a.memory.textures--}function b(e){var n=r.get(e);void 0!==n.__webglInit&&(t.deleteTexture(n.__webglTexture),r.remove(e))}function w(e){var n=r.get(e),i=r.get(e.texture);if(e){if(void 0!==i.__webglTexture&&t.deleteTexture(i.__webglTexture),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLRenderTargetCube)for(var o=0;o<6;o++)t.deleteFramebuffer(n.__webglFramebuffer[o]),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer[o]);else t.deleteFramebuffer(n.__webglFramebuffer),n.__webglDepthbuffer&&t.deleteRenderbuffer(n.__webglDepthbuffer);r.remove(e.texture),r.remove(e)}}var _=0;function M(){_=0}function S(){var t=_;return t>=i.maxTextures&&console.warn(\"THREE.WebGLTextures: Trying to use \"+t+\" texture units while this GPU supports only \"+i.maxTextures),_+=1,t}function E(t,e){var i=r.get(t);if(t.isVideoTexture&&H(t),t.version>0&&i.__version!==t.version){var o=t.image;if(void 0===o)console.warn(\"THREE.WebGLRenderer: Texture marked for update but image is undefined\");else{if(!1!==o.complete)return void O(i,t,e);console.warn(\"THREE.WebGLRenderer: Texture marked for update but image is incomplete\")}}n.activeTexture(33984+e),n.bindTexture(3553,i.__webglTexture)}function T(t,e){var i=r.get(t);t.version>0&&i.__version!==t.version?O(i,t,e):(n.activeTexture(33984+e),n.bindTexture(35866,i.__webglTexture))}function A(t,e){var i=r.get(t);t.version>0&&i.__version!==t.version?O(i,t,e):(n.activeTexture(33984+e),n.bindTexture(32879,i.__webglTexture))}function L(e,a){var s=r.get(e);if(6===e.image.length)if(e.version>0&&s.__version!==e.version){C(s,e),n.activeTexture(33984+a),n.bindTexture(34067,s.__webglTexture),t.pixelStorei(37440,e.flipY);for(var c=e&&e.isCompressedTexture,u=e.image[0]&&e.image[0].isDataTexture,l=[],d=0;d<6;d++)l[d]=c||u?u?e.image[d].image:e.image[d]:h(e.image[d],!1,!0,i.maxCubemapSize);var g=l[0],y=p(g)||i.isWebGL2,x=o.convert(e.format),b=o.convert(e.type),w=v(x,b);R(34067,e,y);for(d=0;d<6;d++)if(c)for(var _,M=l[d].mipmaps,S=0,E=M.length;S<E;S++)_=M[S],e.format!==ce&&e.format!==se?n.getCompressedTextureFormats().indexOf(x)>-1?n.compressedTexImage2D(34069+d,S,w,_.width,_.height,0,_.data):console.warn(\"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()\"):n.texImage2D(34069+d,S,w,_.width,_.height,0,x,b,_.data);else u?n.texImage2D(34069+d,0,w,l[d].width,l[d].height,0,x,b,l[d].data):n.texImage2D(34069+d,0,w,x,b,l[d]);s.__maxMipLevel=c?M.length-1:0,f(e,y)&&m(34067,e,g.width,g.height),s.__version=e.version,e.onUpdate&&e.onUpdate(e)}else n.activeTexture(33984+a),n.bindTexture(34067,s.__webglTexture)}function P(t,e){n.activeTexture(33984+e),n.bindTexture(34067,r.get(t).__webglTexture)}function R(n,a,s){var c;if(s?(t.texParameteri(n,10242,o.convert(a.wrapS)),t.texParameteri(n,10243,o.convert(a.wrapT)),32879!==n&&35866!==n||t.texParameteri(n,32882,o.convert(a.wrapR)),t.texParameteri(n,10240,o.convert(a.magFilter)),t.texParameteri(n,10241,o.convert(a.minFilter))):(t.texParameteri(n,10242,33071),t.texParameteri(n,10243,33071),32879!==n&&35866!==n||t.texParameteri(n,32882,33071),a.wrapS===Ft&&a.wrapT===Ft||console.warn(\"THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.\"),t.texParameteri(n,10240,g(a.magFilter)),t.texParameteri(n,10241,g(a.minFilter)),a.minFilter!==jt&&a.minFilter!==Wt&&console.warn(\"THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.\")),c=e.get(\"EXT_texture_filter_anisotropic\"),c){if(a.type===te&&null===e.get(\"OES_texture_float_linear\"))return;if(a.type===ee&&null===(i.isWebGL2||e.get(\"OES_texture_half_float_linear\")))return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(t.texParameterf(n,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function C(e,n){void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener(\"dispose\",y),e.__webglTexture=t.createTexture(),a.memory.textures++)}function O(e,r,a){var s=3553;r.isDataTexture2DArray&&(s=35866),r.isDataTexture3D&&(s=32879),C(e,r),n.activeTexture(33984+a),n.bindTexture(s,e.__webglTexture),t.pixelStorei(37440,r.flipY),t.pixelStorei(37441,r.premultiplyAlpha),t.pixelStorei(3317,r.unpackAlignment);var c=d(r)&&!1===p(r.image),u=h(r.image,c,!1,i.maxTextureSize),l=p(u)||i.isWebGL2,g=o.convert(r.format),y=o.convert(r.type),x=v(g,y);R(s,r,l);var b,w=r.mipmaps;if(r.isDepthTexture){if(x=6402,r.type===te){if(!i.isWebGL2)throw new Error(\"Float Depth Texture only supported in WebGL2.0\");x=36012}else i.isWebGL2&&(x=33189);r.format===pe&&6402===x&&r.type!==Qt&&r.type!==$t&&(console.warn(\"THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.\"),r.type=Qt,y=o.convert(r.type)),r.format===de&&(x=34041,r.type!==oe&&(console.warn(\"THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.\"),r.type=oe,y=o.convert(r.type))),n.texImage2D(3553,0,x,u.width,u.height,0,g,y,null)}else if(r.isDataTexture)if(w.length>0&&l){for(var _=0,M=w.length;_<M;_++)b=w[_],n.texImage2D(3553,_,x,b.width,b.height,0,g,y,b.data);r.generateMipmaps=!1,e.__maxMipLevel=w.length-1}else n.texImage2D(3553,0,x,u.width,u.height,0,g,y,u.data),e.__maxMipLevel=0;else if(r.isCompressedTexture){for(_=0,M=w.length;_<M;_++)b=w[_],r.format!==ce&&r.format!==se?n.getCompressedTextureFormats().indexOf(g)>-1?n.compressedTexImage2D(3553,_,x,b.width,b.height,0,b.data):console.warn(\"THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()\"):n.texImage2D(3553,_,x,b.width,b.height,0,g,y,b.data);e.__maxMipLevel=w.length-1}else if(r.isDataTexture2DArray)n.texImage3D(35866,0,x,u.width,u.height,u.depth,0,g,y,u.data),e.__maxMipLevel=0;else if(r.isDataTexture3D)n.texImage3D(32879,0,x,u.width,u.height,u.depth,0,g,y,u.data),e.__maxMipLevel=0;else if(w.length>0&&l){for(_=0,M=w.length;_<M;_++)b=w[_],n.texImage2D(3553,_,x,g,y,b);r.generateMipmaps=!1,e.__maxMipLevel=w.length-1}else n.texImage2D(3553,0,x,g,y,u),e.__maxMipLevel=0;f(r,l)&&m(3553,r,u.width,u.height),e.__version=r.version,r.onUpdate&&r.onUpdate(r)}function I(e,i,a,s){var c=o.convert(i.texture.format),u=o.convert(i.texture.type),l=v(c,u);n.texImage2D(s,0,l,i.width,i.height,0,c,u,null),t.bindFramebuffer(36160,e),t.framebufferTexture2D(36160,a,s,r.get(i.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function D(e,n,r){if(t.bindRenderbuffer(36161,e),n.depthBuffer&&!n.stencilBuffer){if(r){var i=F(n);t.renderbufferStorageMultisample(36161,i,33189,n.width,n.height)}else t.renderbufferStorage(36161,33189,n.width,n.height);t.framebufferRenderbuffer(36160,36096,36161,e)}else if(n.depthBuffer&&n.stencilBuffer){if(r){i=F(n);t.renderbufferStorageMultisample(36161,i,34041,n.width,n.height)}else t.renderbufferStorage(36161,34041,n.width,n.height);t.framebufferRenderbuffer(36160,33306,36161,e)}else{var a=o.convert(n.texture.format),s=o.convert(n.texture.type),c=v(a,s);if(r){i=F(n);t.renderbufferStorageMultisample(36161,i,c,n.width,n.height)}else t.renderbufferStorage(36161,c,n.width,n.height)}t.bindRenderbuffer(36161,null)}function N(e,n){var i=n&&n.isWebGLRenderTargetCube;if(i)throw new Error(\"Depth Texture with cube render targets is not supported\");if(t.bindFramebuffer(36160,e),!n.depthTexture||!n.depthTexture.isDepthTexture)throw new Error(\"renderTarget.depthTexture must be an instance of THREE.DepthTexture\");r.get(n.depthTexture).__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),E(n.depthTexture,0);var o=r.get(n.depthTexture).__webglTexture;if(n.depthTexture.format===pe)t.framebufferTexture2D(36160,36096,3553,o,0);else{if(n.depthTexture.format!==de)throw new Error(\"Unknown depthTexture format\");t.framebufferTexture2D(36160,33306,3553,o,0)}}function B(e){var n=r.get(e),i=!0===e.isWebGLRenderTargetCube;if(e.depthTexture){if(i)throw new Error(\"target.depthTexture not supported in Cube render targets\");N(n.__webglFramebuffer,e)}else if(i){n.__webglDepthbuffer=[];for(var o=0;o<6;o++)t.bindFramebuffer(36160,n.__webglFramebuffer[o]),n.__webglDepthbuffer[o]=t.createRenderbuffer(),D(n.__webglDepthbuffer[o],e)}else t.bindFramebuffer(36160,n.__webglFramebuffer),n.__webglDepthbuffer=t.createRenderbuffer(),D(n.__webglDepthbuffer,e);t.bindFramebuffer(36160,null)}function z(e){var s=r.get(e),c=r.get(e.texture);e.addEventListener(\"dispose\",x),c.__webglTexture=t.createTexture(),a.memory.textures++;var u=!0===e.isWebGLRenderTargetCube,l=!0===e.isWebGLMultisampleRenderTarget,h=p(e)||i.isWebGL2;if(u){s.__webglFramebuffer=[];for(var d=0;d<6;d++)s.__webglFramebuffer[d]=t.createFramebuffer()}else if(s.__webglFramebuffer=t.createFramebuffer(),l)if(i.isWebGL2){s.__webglMultisampledFramebuffer=t.createFramebuffer(),s.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,s.__webglColorRenderbuffer);var g=o.convert(e.texture.format),y=o.convert(e.texture.type),b=v(g,y),w=F(e);t.renderbufferStorageMultisample(36161,w,b,e.width,e.height),t.bindFramebuffer(36160,s.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,s.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),e.depthBuffer&&(s.__webglDepthRenderbuffer=t.createRenderbuffer(),D(s.__webglDepthRenderbuffer,e,!0)),t.bindFramebuffer(36160,null)}else console.warn(\"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.\");if(u){n.bindTexture(34067,c.__webglTexture),R(34067,e.texture,h);for(d=0;d<6;d++)I(s.__webglFramebuffer[d],e,36064,34069+d);f(e.texture,h)&&m(34067,e.texture,e.width,e.height),n.bindTexture(34067,null)}else n.bindTexture(3553,c.__webglTexture),R(3553,e.texture,h),I(s.__webglFramebuffer,e,36064,3553),f(e.texture,h)&&m(3553,e.texture,e.width,e.height),n.bindTexture(3553,null);e.depthBuffer&&B(e)}function U(t){var e=t.texture,o=p(t)||i.isWebGL2;if(f(e,o)){var a=t.isWebGLRenderTargetCube?34067:3553,s=r.get(e).__webglTexture;n.bindTexture(a,s),m(a,e,t.width,t.height),n.bindTexture(a,null)}}function G(e){if(e.isWebGLMultisampleRenderTarget)if(i.isWebGL2){var n=r.get(e);t.bindFramebuffer(36008,n.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,n.__webglFramebuffer);var o=e.width,a=e.height,s=16384;e.depthBuffer&&(s|=256),e.stencilBuffer&&(s|=1024),t.blitFramebuffer(0,0,o,a,0,0,o,a,s,9728)}else console.warn(\"THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.\")}function F(t){return i.isWebGL2&&t.isWebGLMultisampleRenderTarget?Math.min(i.maxSamples,t.samples):0}function H(t){var e=t.id,n=a.render.frame;c[e]!==n&&(c[e]=n,t.update())}var j=!1,k=!1;function V(t,e){t&&t.isWebGLRenderTarget&&(!1===j&&(console.warn(\"THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.\"),j=!0),t=t.texture),E(t,e)}function W(t,e){t&&t.isWebGLRenderTargetCube&&(!1===k&&(console.warn(\"THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.\"),k=!0),t=t.texture),t&&t.isCubeTexture||Array.isArray(t.image)&&6===t.image.length?L(t,e):P(t,e)}this.allocateTextureUnit=S,this.resetTextureUnits=M,this.setTexture2D=E,this.setTexture2DArray=T,this.setTexture3D=A,this.setTextureCube=L,this.setTextureCubeDynamic=P,this.setupRenderTarget=z,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=G,this.safeSetTexture2D=V,this.safeSetTextureCube=W}function fs(t,e,n){function r(t){var r;if(t===Gt)return 10497;if(t===Ft)return 33071;if(t===Ht)return 33648;if(t===jt)return 9728;if(t===kt)return 9984;if(t===Vt)return 9986;if(t===Wt)return 9729;if(t===qt)return 9985;if(t===Xt)return 9987;if(t===Yt)return 5121;if(t===ne)return 32819;if(t===re)return 32820;if(t===ie)return 33635;if(t===Jt)return 5120;if(t===Zt)return 5122;if(t===Qt)return 5123;if(t===Kt)return 5124;if(t===$t)return 5125;if(t===te)return 5126;if(t===ee){if(n.isWebGL2)return 5131;if(r=e.get(\"OES_texture_half_float\"),null!==r)return r.HALF_FLOAT_OES}if(t===ae)return 6406;if(t===se)return 6407;if(t===ce)return 6408;if(t===ue)return 6409;if(t===le)return 6410;if(t===pe)return 6402;if(t===de)return 34041;if(t===fe)return 6403;if(t===K)return 32774;if(t===$)return 32778;if(t===tt)return 32779;if(t===rt)return 0;if(t===it)return 1;if(t===ot)return 768;if(t===at)return 769;if(t===st)return 770;if(t===ct)return 771;if(t===ut)return 772;if(t===lt)return 773;if(t===ht)return 774;if(t===pt)return 775;if(t===dt)return 776;if((t===me||t===ve||t===ge||t===ye)&&(r=e.get(\"WEBGL_compressed_texture_s3tc\"),null!==r)){if(t===me)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ve)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ge)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ye)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((t===xe||t===be||t===we||t===_e)&&(r=e.get(\"WEBGL_compressed_texture_pvrtc\"),null!==r)){if(t===xe)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===be)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===we)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===_e)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Me&&(r=e.get(\"WEBGL_compressed_texture_etc1\"),null!==r))return r.COMPRESSED_RGB_ETC1_WEBGL;if((t===Se||t===Ee||t===Te||t===Ae||t===Le||t===Pe||t===Re||t===Ce||t===Oe||t===Ie||t===De||t===Ne||t===Be||t===ze)&&(r=e.get(\"WEBGL_compressed_texture_astc\"),null!==r))return t;if(t===et||t===nt){if(n.isWebGL2){if(t===et)return 32775;if(t===nt)return 32776}if(r=e.get(\"EXT_blend_minmax\"),null!==r){if(t===et)return r.MIN_EXT;if(t===nt)return r.MAX_EXT}}if(t===oe){if(n.isWebGL2)return 34042;if(r=e.get(\"WEBGL_depth_texture\"),null!==r)return r.UNSIGNED_INT_24_8_WEBGL}return 0}return{convert:r}}function ms(){Ki.call(this),this.type=\"Group\"}function vs(){Ki.call(this),this.type=\"Camera\",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn}function gs(t,e,n,r){vs.call(this),this.type=\"PerspectiveCamera\",this.fov=void 0!==t?t:50,this.zoom=1,this.near=void 0!==n?n:.1,this.far=void 0!==r?r:2e3,this.focus=10,this.aspect=void 0!==e?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}function ys(t){gs.call(this),this.cameras=t||[]}us.prototype=Object.create(wo.prototype),us.prototype.constructor=us,us.prototype.isMeshDepthMaterial=!0,us.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},ls.prototype=Object.create(wo.prototype),ls.prototype.constructor=ls,ls.prototype.isMeshDistanceMaterial=!0,ls.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this},ms.prototype=Object.assign(Object.create(Ki.prototype),{constructor:ms,isGroup:!0}),vs.prototype=Object.assign(Object.create(Ki.prototype),{constructor:vs,isCamera:!0,copy:function(t,e){return Ki.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){void 0===t&&(console.warn(\"THREE.Camera: .getWorldDirection() target is now required\"),t=new pn),this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){Ki.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}}),gs.prototype=Object.assign(Object.create(vs.prototype),{constructor:gs,isPerspectiveCamera:!0,copy:function(t,e){return vs.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){var e=.5*this.getFilmHeight()/t;this.fov=2*un.RAD2DEG*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){var t=Math.tan(.5*un.DEG2RAD*this.fov);return.5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*un.RAD2DEG*Math.atan(Math.tan(.5*un.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,r,i,o){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,e=t*Math.tan(.5*un.DEG2RAD*this.fov)/this.zoom,n=2*e,r=this.aspect*n,i=-.5*r,o=this.view;if(null!==this.view&&this.view.enabled){var a=o.fullWidth,s=o.fullHeight;i+=o.offsetX*r/a,e-=o.offsetY*n/s,r*=o.width/a,n*=o.height/s}var c=this.filmOffset;0!==c&&(i+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var e=Ki.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}),ys.prototype=Object.assign(Object.create(gs.prototype),{constructor:ys,isArrayCamera:!0});var xs,bs=new pn,ws=new pn;function _s(t,e,n){bs.setFromMatrixPosition(e.matrixWorld),ws.setFromMatrixPosition(n.matrixWorld);var r=bs.distanceTo(ws),i=e.projectionMatrix.elements,o=n.projectionMatrix.elements,a=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],u=(i[9]-1)/i[5],l=(i[8]-1)/i[0],h=(o[8]+1)/o[0],p=a*l,d=a*h,f=r/(-l+h),m=f*-l;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(m),t.translateZ(f),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.getInverse(t.matrixWorld);var v=a+f,g=s+f,y=p-m,x=d+(r-m),b=c*s/g*v,w=u*s/g*v;t.projectionMatrix.makePerspective(y,x,b,w,v,g)}function Ms(t){var e=this,n=null,r=null,i=null,o=[],a=new Tn,s=new Tn,c=1,u=\"stage\";\"undefined\"!==typeof window&&\"VRFrameData\"in window&&(r=new window.VRFrameData,window.addEventListener(\"vrdisplaypresentchange\",x,!1));var l=new Tn,h=new hn,p=new pn,d=new gs;d.bounds=new gn(0,0,.5,1),d.layers.enable(1);var f=new gs;f.bounds=new gn(.5,0,.5,1),f.layers.enable(2);var m=new ys([d,f]);function v(){return null!==n&&!0===n.isPresenting}m.layers.enable(1),m.layers.enable(2);var g,y=new ln;function x(){if(v()){var r=n.getEyeParameters(\"left\"),i=r.renderWidth*c,o=r.renderHeight*c;g=t.getPixelRatio(),t.getSize(y),t.setDrawingBufferSize(2*i,o,1),M.start()}else e.enabled&&t.setDrawingBufferSize(y.width,y.height,g),M.stop()}var b=[];function w(t){for(var e=navigator.getGamepads&&navigator.getGamepads(),n=0,r=0,i=e.length;n<i;n++){var o=e[n];if(o&&(\"Daydream Controller\"===o.id||\"Gear VR Controller\"===o.id||\"Oculus Go Controller\"===o.id||\"OpenVR Gamepad\"===o.id||o.id.startsWith(\"Oculus Touch\")||o.id.startsWith(\"Spatial Controller\"))){if(r===t)return o;r++}}}function _(){for(var t=0;t<o.length;t++){var e=o[t],n=w(t);if(void 0!==n&&void 0!==n.pose){if(null===n.pose)return;var r=n.pose;!1===r.hasPosition&&e.position.set(.2,-.6,-.05),null!==r.position&&e.position.fromArray(r.position),null!==r.orientation&&e.quaternion.fromArray(r.orientation),e.matrix.compose(e.position,e.quaternion,e.scale),e.matrix.premultiply(a),e.matrix.decompose(e.position,e.quaternion,e.scale),e.matrixWorldNeedsUpdate=!0,e.visible=!0;var i=\"Daydream Controller\"===n.id?0:1;b[t]!==n.buttons[i].pressed&&(b[t]=n.buttons[i].pressed,!0===b[t]?e.dispatchEvent({type:\"selectstart\"}):(e.dispatchEvent({type:\"selectend\"}),e.dispatchEvent({type:\"select\"})))}else e.visible=!1}}this.enabled=!1,this.getController=function(t){var e=o[t];return void 0===e&&(e=new ms,e.matrixAutoUpdate=!1,e.visible=!1,o[t]=e),e},this.getDevice=function(){return n},this.setDevice=function(t){void 0!==t&&(n=t),M.setContext(t)},this.setFramebufferScaleFactor=function(t){c=t},this.setFrameOfReferenceType=function(t){u=t},this.setPoseTarget=function(t){void 0!==t&&(i=t)},this.getCamera=function(t){var e=\"stage\"===u?1.6:0;if(!1===v())return t.position.set(0,e,0),t.rotation.set(0,0,0),t;if(n.depthNear=t.near,n.depthFar=t.far,n.getFrameData(r),\"stage\"===u){var o=n.stageParameters;o?a.fromArray(o.sittingToStandingTransform):a.makeTranslation(0,e,0)}var c=r.pose,g=null!==i?i:t;g.matrix.copy(a),g.matrix.decompose(g.position,g.quaternion,g.scale),null!==c.orientation&&(h.fromArray(c.orientation),g.quaternion.multiply(h)),null!==c.position&&(h.setFromRotationMatrix(a),p.fromArray(c.position),p.applyQuaternion(h),g.position.add(p)),g.updateMatrixWorld(),d.near=t.near,f.near=t.near,d.far=t.far,f.far=t.far,d.matrixWorldInverse.fromArray(r.leftViewMatrix),f.matrixWorldInverse.fromArray(r.rightViewMatrix),s.getInverse(a),\"stage\"===u&&(d.matrixWorldInverse.multiply(s),f.matrixWorldInverse.multiply(s));var y=g.parent;null!==y&&(l.getInverse(y.matrixWorld),d.matrixWorldInverse.multiply(l),f.matrixWorldInverse.multiply(l)),d.matrixWorld.getInverse(d.matrixWorldInverse),f.matrixWorld.getInverse(f.matrixWorldInverse),d.projectionMatrix.fromArray(r.leftProjectionMatrix),f.projectionMatrix.fromArray(r.rightProjectionMatrix),_s(m,d,f);var x=n.getLayers();if(x.length){var b=x[0];null!==b.leftBounds&&4===b.leftBounds.length&&d.bounds.fromArray(b.leftBounds),null!==b.rightBounds&&4===b.rightBounds.length&&f.bounds.fromArray(b.rightBounds)}return _(),m},this.getStandingMatrix=function(){return a},this.isPresenting=v;var M=new qi;this.setAnimationLoop=function(t){M.setAnimationLoop(t),v()&&M.start()},this.submitFrame=function(){v()&&n.submitFrame()},this.dispose=function(){\"undefined\"!==typeof window&&window.removeEventListener(\"vrdisplaypresentchange\",x)}}function Ss(t){var e=t.context,n=null,r=null,i=1,o=null,a=\"stage\",s=null,c=[],u=[];function l(){return null!==r&&null!==o}var h=new gs;h.layers.enable(1),h.viewport=new gn;var p=new gs;p.layers.enable(2),p.viewport=new gn;var d=new ys([h,p]);function f(t){var e=c[u.indexOf(t.inputSource)];e&&e.dispatchEvent({type:t.type})}function m(){t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),x.stop()}function v(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.getInverse(t.matrixWorld)}d.layers.enable(1),d.layers.enable(2),this.enabled=!1,this.getController=function(t){var e=c[t];return void 0===e&&(e=new ms,e.matrixAutoUpdate=!1,e.visible=!1,c[t]=e),e},this.getDevice=function(){return n},this.setDevice=function(t){void 0!==t&&(n=t),t instanceof XRDevice&&e.setCompatibleXRDevice(t)},this.setFramebufferScaleFactor=function(t){i=t},this.setFrameOfReferenceType=function(t){a=t},this.setSession=function(n){r=n,null!==r&&(r.addEventListener(\"select\",f),r.addEventListener(\"selectstart\",f),r.addEventListener(\"selectend\",f),r.addEventListener(\"end\",m),r.baseLayer=new XRWebGLLayer(r,e,{framebufferScaleFactor:i}),r.requestFrameOfReference(a).then(function(e){o=e,t.setFramebuffer(r.baseLayer.framebuffer),x.setContext(r),x.start()}),u=r.getInputSources(),r.addEventListener(\"inputsourceschange\",function(){u=r.getInputSources(),console.log(u);for(var t=0;t<c.length;t++){var e=c[t];e.userData.inputSource=u[t]}}))},this.getCamera=function(t){if(l()){var e=t.parent,n=d.cameras;v(d,e);for(var r=0;r<n.length;r++)v(n[r],e);t.matrixWorld.copy(d.matrixWorld);for(var i=t.children,o=(r=0,i.length);r<o;r++)i[r].updateMatrixWorld(!0);return _s(d,h,p),d}return t},this.isPresenting=l;var g=null;function y(t,e){if(s=e.getDevicePose(o),null!==s)for(var n=r.baseLayer,i=e.views,a=0;a<i.length;a++){var l=i[a],h=n.getViewport(l),p=s.getViewMatrix(l),f=d.cameras[a];f.matrix.fromArray(p).getInverse(f.matrix),f.projectionMatrix.fromArray(l.projectionMatrix),f.viewport.set(h.x,h.y,h.width,h.height),0===a&&d.matrix.copy(f.matrix)}for(a=0;a<c.length;a++){var m=c[a],v=u[a];if(v){var y=e.getInputPose(v,o);if(null!==y){\"targetRay\"in y?m.matrix.elements=y.targetRay.transformMatrix:\"pointerMatrix\"in y&&(m.matrix.elements=y.pointerMatrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.visible=!0;continue}}m.visible=!1}g&&g(t)}var x=new qi;x.setAnimationLoop(y),this.setAnimationLoop=function(t){g=t},this.dispose=function(){},this.getStandingMatrix=function(){return console.warn(\"THREE.WebXRManager: getStandingMatrix() is no longer needed.\"),new Tn},this.submitFrame=function(){}}function Es(t){console.log(\"THREE.WebGLRenderer\",A),t=t||{};var e=void 0!==t.canvas?t.canvas:document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"canvas\"),n=void 0!==t.context?t.context:null,r=void 0!==t.alpha&&t.alpha,i=void 0===t.depth||t.depth,o=void 0===t.stencil||t.stencil,a=void 0!==t.antialias&&t.antialias,s=void 0===t.premultipliedAlpha||t.premultipliedAlpha,c=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,u=void 0!==t.powerPreference?t.powerPreference:\"default\",l=null,h=null;this.domElement=e,this.context=null,this.debug={checkShaderErrors:!1},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=Tt,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var p,d,f,m,v,g,y,x,b,w,_,M,S,E,T,L,P,R,C=this,O=!1,I=null,D=null,N=null,B=-1,z={geometry:null,program:null,wireframe:!1},U=null,F=null,H=new gn,j=new gn,k=null,V=e.width,W=e.height,q=1,X=new gn(0,0,V,W),Y=new gn(0,0,V,W),J=!1,Z=new En,Q=new Oo,K=!1,$=!1,tt=new Tn,et=new pn;function nt(){return null===D?q:1}try{var rt={alpha:r,depth:i,stencil:o,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:u};if(e.addEventListener(\"webglcontextlost\",st,!1),e.addEventListener(\"webglcontextrestored\",ct,!1),p=n||e.getContext(\"webgl\",rt)||e.getContext(\"experimental-webgl\",rt),null===p)throw null!==e.getContext(\"webgl\")?new Error(\"Error creating WebGL context with your selected attributes.\"):new Error(\"Error creating WebGL context.\");void 0===p.getShaderPrecisionFormat&&(p.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Gt){throw console.error(\"THREE.WebGLRenderer: \"+Gt.message),Gt}function it(){d=new Io(p),f=new Co(p,d,t),f.isWebGL2||(d.get(\"WEBGL_depth_texture\"),d.get(\"OES_texture_float\"),d.get(\"OES_texture_half_float\"),d.get(\"OES_texture_half_float_linear\"),d.get(\"OES_standard_derivatives\"),d.get(\"OES_element_index_uint\"),d.get(\"ANGLE_instanced_arrays\")),d.get(\"OES_texture_float_linear\"),R=new fs(p,d,f),m=new ps(p,d,R,f),m.scissor(j.copy(Y).multiplyScalar(q)),m.viewport(H.copy(X).multiplyScalar(q)),v=new Bo(p),g=new $a,y=new ds(p,d,m,g,f,R,v),x=new Xi(p),b=new Do(p,x,v),w=new Go(b,v),T=new Uo(p),_=new Ka(C,d,f,y),M=new rs,S=new cs,E=new Po(C,m,w,s),L=new Ro(p,d,v,f),P=new No(p,d,v,f),v.programs=_.programs,C.context=p,C.capabilities=f,C.extensions=d,C.properties=g,C.renderLists=M,C.state=m,C.info=v}it();var ot=\"undefined\"!==typeof navigator&&\"xr\"in navigator?new Ss(C):new Ms(C);this.vr=ot;var at=new hs(C,w,f.maxTextureSize);function st(t){t.preventDefault(),console.log(\"THREE.WebGLRenderer: Context Lost.\"),O=!0}function ct(){console.log(\"THREE.WebGLRenderer: Context Restored.\"),O=!1,it()}function ut(t){var e=t.target;e.removeEventListener(\"dispose\",ut),lt(e)}function lt(t){ht(t),g.remove(t)}function ht(t){var e=g.get(t).program;t.program=void 0,void 0!==e&&_.releaseProgram(e)}function pt(t,e){t.render(function(t){C.renderBufferImmediate(t,e)})}function dt(t,e,n){if(n&&n.isInstancedBufferGeometry&&!f.isWebGL2&&null===d.get(\"ANGLE_instanced_arrays\"))console.error(\"THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.\");else{m.initAttributes();var r=n.attributes,i=e.getAttributes(),o=t.defaultAttributeValues;for(var a in i){var s=i[a];if(s>=0){var c=r[a];if(void 0!==c){var u=c.normalized,l=c.itemSize,h=x.get(c);if(void 0===h)continue;var v=h.buffer,g=h.type,y=h.bytesPerElement;if(c.isInterleavedBufferAttribute){var b=c.data,w=b.stride,_=c.offset;b&&b.isInstancedInterleavedBuffer?(m.enableAttributeAndDivisor(s,b.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=b.meshPerAttribute*b.count)):m.enableAttribute(s),p.bindBuffer(34962,v),p.vertexAttribPointer(s,l,g,u,w*y,_*y)}else c.isInstancedBufferAttribute?(m.enableAttributeAndDivisor(s,c.meshPerAttribute),void 0===n.maxInstancedCount&&(n.maxInstancedCount=c.meshPerAttribute*c.count)):m.enableAttribute(s),p.bindBuffer(34962,v),p.vertexAttribPointer(s,l,g,u,0,0)}else if(void 0!==o){var M=o[a];if(void 0!==M)switch(M.length){case 2:p.vertexAttrib2fv(s,M);break;case 3:p.vertexAttrib3fv(s,M);break;case 4:p.vertexAttrib4fv(s,M);break;default:p.vertexAttrib1fv(s,M)}}}}m.disableUnusedAttributes()}}this.shadowMap=at,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){var t=d.get(\"WEBGL_lose_context\");t&&t.loseContext()},this.forceContextRestore=function(){var t=d.get(\"WEBGL_lose_context\");t&&t.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(t){void 0!==t&&(q=t,this.setSize(V,W,!1))},this.getSize=function(t){return void 0===t&&(console.warn(\"WebGLRenderer: .getsize() now requires a Vector2 as an argument\"),t=new ln),t.set(V,W)},this.setSize=function(t,n,r){ot.isPresenting()?console.warn(\"THREE.WebGLRenderer: Can't change size while VR device is presenting.\"):(V=t,W=n,e.width=t*q,e.height=n*q,!1!==r&&(e.style.width=t+\"px\",e.style.height=n+\"px\"),this.setViewport(0,0,t,n))},this.getDrawingBufferSize=function(t){return void 0===t&&(console.warn(\"WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument\"),t=new ln),t.set(V*q,W*q)},this.setDrawingBufferSize=function(t,n,r){V=t,W=n,q=r,e.width=t*r,e.height=n*r,this.setViewport(0,0,t,n)},this.getCurrentViewport=function(t){return void 0===t&&(console.warn(\"WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument\"),t=new gn),t.copy(H)},this.getViewport=function(t){return t.copy(X)},this.setViewport=function(t,e,n,r){t.isVector4?X.set(t.x,t.y,t.z,t.w):X.set(t,e,n,r),m.viewport(H.copy(X).multiplyScalar(q))},this.getScissor=function(t){return t.copy(Y)},this.setScissor=function(t,e,n,r){t.isVector4?Y.set(t.x,t.y,t.z,t.w):Y.set(t,e,n,r),m.scissor(j.copy(Y).multiplyScalar(q))},this.getScissorTest=function(){return J},this.setScissorTest=function(t){m.setScissorTest(J=t)},this.getClearColor=function(){return E.getClearColor()},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(t,e,n){var r=0;(void 0===t||t)&&(r|=16384),(void 0===e||e)&&(r|=256),(void 0===n||n)&&(r|=1024),p.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener(\"webglcontextlost\",st,!1),e.removeEventListener(\"webglcontextrestored\",ct,!1),M.dispose(),S.dispose(),g.dispose(),w.dispose(),ot.dispose(),vt.stop()},this.renderBufferImmediate=function(t,e){m.initAttributes();var n=g.get(t);t.hasPositions&&!n.position&&(n.position=p.createBuffer()),t.hasNormals&&!n.normal&&(n.normal=p.createBuffer()),t.hasUvs&&!n.uv&&(n.uv=p.createBuffer()),t.hasColors&&!n.color&&(n.color=p.createBuffer());var r=e.getAttributes();t.hasPositions&&(p.bindBuffer(34962,n.position),p.bufferData(34962,t.positionArray,35048),m.enableAttribute(r.position),p.vertexAttribPointer(r.position,3,5126,!1,0,0)),t.hasNormals&&(p.bindBuffer(34962,n.normal),p.bufferData(34962,t.normalArray,35048),m.enableAttribute(r.normal),p.vertexAttribPointer(r.normal,3,5126,!1,0,0)),t.hasUvs&&(p.bindBuffer(34962,n.uv),p.bufferData(34962,t.uvArray,35048),m.enableAttribute(r.uv),p.vertexAttribPointer(r.uv,2,5126,!1,0,0)),t.hasColors&&(p.bindBuffer(34962,n.color),p.bufferData(34962,t.colorArray,35048),m.enableAttribute(r.color),p.vertexAttribPointer(r.color,3,5126,!1,0,0)),m.disableUnusedAttributes(),p.drawArrays(4,0,t.count),t.count=0},this.renderBufferDirect=function(t,e,n,r,i,o){var a=i.isMesh&&i.matrixWorld.determinant()<0;m.setMaterial(r,a);var s=wt(t,e,r,i),c=!1;z.geometry===n.id&&z.program===s.id&&z.wireframe===(!0===r.wireframe)||(z.geometry=n.id,z.program=s.id,z.wireframe=!0===r.wireframe,c=!0),i.morphTargetInfluences&&(T.update(i,n,r,s),c=!0);var u,l=n.index,h=n.attributes.position,d=1;!0===r.wireframe&&(l=b.getWireframeAttribute(n),d=2);var f=L;null!==l&&(u=x.get(l),f=P,f.setIndex(u)),c&&(dt(r,s,n),null!==l&&p.bindBuffer(34963,u.buffer));var v=1/0;null!==l?v=l.count:void 0!==h&&(v=h.count);var g=n.drawRange.start*d,y=n.drawRange.count*d,w=null!==o?o.start*d:0,_=null!==o?o.count*d:1/0,M=Math.max(g,w),S=Math.min(v,g+y,w+_)-1,E=Math.max(0,S-M+1);if(0!==E){if(i.isMesh)if(!0===r.wireframe)m.setLineWidth(r.wireframeLinewidth*nt()),f.setMode(1);else switch(i.drawMode){case Xe:f.setMode(4);break;case Ye:f.setMode(5);break;case Je:f.setMode(6);break}else if(i.isLine){var A=r.linewidth;void 0===A&&(A=1),m.setLineWidth(A*nt()),i.isLineSegments?f.setMode(1):i.isLineLoop?f.setMode(2):f.setMode(3)}else i.isPoints?f.setMode(0):i.isSprite&&f.setMode(4);n&&n.isInstancedBufferGeometry?n.maxInstancedCount>0&&f.renderInstances(n,M,E):f.render(M,E)}},this.compile=function(t,e){h=S.get(t,e),h.init(),t.traverse(function(t){t.isLight&&(h.pushLight(t),t.castShadow&&h.pushShadow(t))}),h.setupLights(e),t.traverse(function(e){if(e.material)if(Array.isArray(e.material))for(var n=0;n<e.material.length;n++)bt(e.material[n],t.fog,e);else bt(e.material,t.fog,e)})};var ft=null;function mt(t){ot.isPresenting()||ft&&ft(t)}var vt=new qi;function gt(t,e,n,r){if(!1!==t.visible){var i=t.layers.test(e.layers);if(i)if(t.isGroup)n=t.renderOrder;else if(t.isLight)h.pushLight(t),t.castShadow&&h.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||Z.intersectsSprite(t)){r&&et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(tt);var o=w.update(t),a=t.material;a.visible&&l.push(t,o,a,n,et.z,null)}}else if(t.isImmediateRenderObject)r&&et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(tt),l.push(t,null,t.material,n,et.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.update(),!t.frustumCulled||Z.intersectsObject(t))){r&&et.setFromMatrixPosition(t.matrixWorld).applyMatrix4(tt);o=w.update(t),a=t.material;if(Array.isArray(a))for(var s=o.groups,c=0,u=s.length;c<u;c++){var p=s[c],d=a[p.materialIndex];d&&d.visible&&l.push(t,o,d,n,et.z,p)}else a.visible&&l.push(t,o,a,n,et.z,null)}var f=t.children;for(c=0,u=f.length;c<u;c++)gt(f[c],e,n,r)}}function yt(t,e,n,r){for(var i=0,o=t.length;i<o;i++){var a=t[i],s=a.object,c=a.geometry,u=void 0===r?a.material:r,l=a.group;if(n.isArrayCamera){F=n;for(var p=n.cameras,d=0,f=p.length;d<f;d++){var v=p[d];if(s.layers.test(v.layers)){if(\"viewport\"in v)m.viewport(H.copy(v.viewport));else{var g=v.bounds,y=g.x*V,x=g.y*W,b=g.z*V,w=g.w*W;m.viewport(H.set(y,x,b,w).multiplyScalar(q))}h.setupLights(v),xt(s,e,v,c,u,l)}}}else F=null,xt(s,e,n,c,u,l)}}function xt(t,e,n,r,i,o){if(t.onBeforeRender(C,e,n,r,i,o),h=S.get(e,F||n),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){m.setMaterial(i);var a=wt(n,e.fog,i,t);z.geometry=null,z.program=null,z.wireframe=!1,pt(t,a)}else C.renderBufferDirect(n,e.fog,r,i,t,o);t.onAfterRender(C,e,n,r,i,o),h=S.get(e,F||n)}function bt(t,e,n){var r=g.get(t),i=h.state.lights,o=h.state.shadowsArray,a=r.lightsHash,s=i.state.hash,c=_.getParameters(t,i.state,o,e,Q.numPlanes,Q.numIntersection,n),u=_.getProgramCode(t,c),l=r.program,p=!0;if(void 0===l)t.addEventListener(\"dispose\",ut);else if(l.code!==u)ht(t);else if(a.stateID!==s.stateID||a.directionalLength!==s.directionalLength||a.pointLength!==s.pointLength||a.spotLength!==s.spotLength||a.rectAreaLength!==s.rectAreaLength||a.hemiLength!==s.hemiLength||a.shadowsLength!==s.shadowsLength)a.stateID=s.stateID,a.directionalLength=s.directionalLength,a.pointLength=s.pointLength,a.spotLength=s.spotLength,a.rectAreaLength=s.rectAreaLength,a.hemiLength=s.hemiLength,a.shadowsLength=s.shadowsLength,p=!1;else{if(void 0!==c.shaderID)return;p=!1}if(p){if(c.shaderID){var d=Wi[c.shaderID];r.shader={name:t.type,uniforms:Gi(d.uniforms),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}}else r.shader={name:t.type,uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader};t.onBeforeCompile(r.shader,C),u=_.getProgramCode(t,c),l=_.acquireProgram(t,r.shader,c,u),r.program=l,t.program=l}var f=l.getAttributes();if(t.morphTargets){t.numSupportedMorphTargets=0;for(var m=0;m<C.maxMorphTargets;m++)f[\"morphTarget\"+m]>=0&&t.numSupportedMorphTargets++}if(t.morphNormals){t.numSupportedMorphNormals=0;for(m=0;m<C.maxMorphNormals;m++)f[\"morphNormal\"+m]>=0&&t.numSupportedMorphNormals++}var v=r.shader.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(r.numClippingPlanes=Q.numPlanes,r.numIntersection=Q.numIntersection,v.clippingPlanes=Q.uniform),r.fog=e,void 0===a&&(r.lightsHash=a={}),a.stateID=s.stateID,a.directionalLength=s.directionalLength,a.pointLength=s.pointLength,a.spotLength=s.spotLength,a.rectAreaLength=s.rectAreaLength,a.hemiLength=s.hemiLength,a.shadowsLength=s.shadowsLength,t.lights&&(v.ambientLightColor.value=i.state.ambient,v.lightProbe.value=i.state.probe,v.directionalLights.value=i.state.directional,v.spotLights.value=i.state.spot,v.rectAreaLights.value=i.state.rectArea,v.pointLights.value=i.state.point,v.hemisphereLights.value=i.state.hemi,v.directionalShadowMap.value=i.state.directionalShadowMap,v.directionalShadowMatrix.value=i.state.directionalShadowMatrix,v.spotShadowMap.value=i.state.spotShadowMap,v.spotShadowMatrix.value=i.state.spotShadowMatrix,v.pointShadowMap.value=i.state.pointShadowMap,v.pointShadowMatrix.value=i.state.pointShadowMatrix);var y=r.program.getUniforms(),x=Na.seqWithValue(y.seq,v);r.uniformsList=x}function wt(t,e,n,r){y.resetTextureUnits();var i=g.get(n),o=h.state.lights,a=i.lightsHash,s=o.state.hash;if(K&&($||t!==U)){var c=t===U&&n.id===B;Q.setState(n.clippingPlanes,n.clipIntersection,n.clipShadows,t,i,c)}!1===n.needsUpdate&&(void 0===i.program?n.needsUpdate=!0:n.fog&&i.fog!==e?n.needsUpdate=!0:(!n.lights||a.stateID===s.stateID&&a.directionalLength===s.directionalLength&&a.pointLength===s.pointLength&&a.spotLength===s.spotLength&&a.rectAreaLength===s.rectAreaLength&&a.hemiLength===s.hemiLength&&a.shadowsLength===s.shadowsLength)&&(void 0===i.numClippingPlanes||i.numClippingPlanes===Q.numPlanes&&i.numIntersection===Q.numIntersection)||(n.needsUpdate=!0)),n.needsUpdate&&(bt(n,e,r),n.needsUpdate=!1);var u=!1,l=!1,d=!1,v=i.program,x=v.getUniforms(),b=i.shader.uniforms;if(m.useProgram(v.program)&&(u=!0,l=!0,d=!0),n.id!==B&&(B=n.id,l=!0),u||U!==t){if(x.setValue(p,\"projectionMatrix\",t.projectionMatrix),f.logarithmicDepthBuffer&&x.setValue(p,\"logDepthBufFC\",2/(Math.log(t.far+1)/Math.LN2)),U!==t&&(U=t,l=!0,d=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshStandardMaterial||n.envMap){var w=x.map.cameraPosition;void 0!==w&&w.setValue(p,et.setFromMatrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.skinning)&&x.setValue(p,\"viewMatrix\",t.matrixWorldInverse)}if(n.skinning){x.setOptional(p,r,\"bindMatrix\"),x.setOptional(p,r,\"bindMatrixInverse\");var _=r.skeleton;if(_){var M=_.bones;if(f.floatVertexTextures){if(void 0===_.boneTexture){var S=Math.sqrt(4*M.length);S=un.ceilPowerOfTwo(S),S=Math.max(S,4);var E=new Float32Array(S*S*4);E.set(_.boneMatrices);var T=new wn(E,S,S,ce,te);T.needsUpdate=!0,_.boneMatrices=E,_.boneTexture=T,_.boneTextureSize=S}x.setValue(p,\"boneTexture\",_.boneTexture,y),x.setValue(p,\"boneTextureSize\",_.boneTextureSize)}else x.setOptional(p,_,\"boneMatrices\")}}return l&&(x.setValue(p,\"toneMappingExposure\",C.toneMappingExposure),x.setValue(p,\"toneMappingWhitePoint\",C.toneMappingWhitePoint),n.lights&&Ut(b,d),e&&n.fog&&Lt(b,e),n.isMeshBasicMaterial?_t(b,n):n.isMeshLambertMaterial?(_t(b,n),Pt(b,n)):n.isMeshPhongMaterial?(_t(b,n),n.isMeshToonMaterial?Ct(b,n):Rt(b,n)):n.isMeshStandardMaterial?(_t(b,n),n.isMeshPhysicalMaterial?It(b,n):Ot(b,n)):n.isMeshMatcapMaterial?(_t(b,n),Dt(b,n)):n.isMeshDepthMaterial?(_t(b,n),Nt(b,n)):n.isMeshDistanceMaterial?(_t(b,n),Bt(b,n)):n.isMeshNormalMaterial?(_t(b,n),zt(b,n)):n.isLineBasicMaterial?(Mt(b,n),n.isLineDashedMaterial&&St(b,n)):n.isPointsMaterial?Et(b,n):n.isSpriteMaterial?At(b,n):n.isShadowMaterial&&(b.color.value.copy(n.color),b.opacity.value=n.opacity),void 0!==b.ltc_1&&(b.ltc_1.value=Vi.LTC_1),void 0!==b.ltc_2&&(b.ltc_2.value=Vi.LTC_2),Na.upload(p,i.uniformsList,b,y)),n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(Na.upload(p,i.uniformsList,b,y),n.uniformsNeedUpdate=!1),n.isSpriteMaterial&&x.setValue(p,\"center\",r.center),x.setValue(p,\"modelViewMatrix\",r.modelViewMatrix),x.setValue(p,\"normalMatrix\",r.normalMatrix),x.setValue(p,\"modelMatrix\",r.matrixWorld),v}function _t(t,e){var n;t.opacity.value=e.opacity,e.color&&t.diffuse.value.copy(e.color),e.emissive&&t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),e.map&&(t.map.value=e.map),e.alphaMap&&(t.alphaMap.value=e.alphaMap),e.specularMap&&(t.specularMap.value=e.specularMap),e.envMap&&(t.envMap.value=e.envMap,t.flipEnvMap.value=e.envMap.isCubeTexture?-1:1,t.reflectivity.value=e.reflectivity,t.refractionRatio.value=e.refractionRatio,t.maxMipLevel.value=g.get(e.envMap).__maxMipLevel),e.lightMap&&(t.lightMap.value=e.lightMap,t.lightMapIntensity.value=e.lightMapIntensity),e.aoMap&&(t.aoMap.value=e.aoMap,t.aoMapIntensity.value=e.aoMapIntensity),e.map?n=e.map:e.specularMap?n=e.specularMap:e.displacementMap?n=e.displacementMap:e.normalMap?n=e.normalMap:e.bumpMap?n=e.bumpMap:e.roughnessMap?n=e.roughnessMap:e.metalnessMap?n=e.metalnessMap:e.alphaMap?n=e.alphaMap:e.emissiveMap&&(n=e.emissiveMap),void 0!==n&&(n.isWebGLRenderTarget&&(n=n.texture),!0===n.matrixAutoUpdate&&n.updateMatrix(),t.uvTransform.value.copy(n.matrix))}function Mt(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity}function St(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}function Et(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*q,t.scale.value=.5*W,t.map.value=e.map,null!==e.map&&(!0===e.map.matrixAutoUpdate&&e.map.updateMatrix(),t.uvTransform.value.copy(e.map.matrix))}function At(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,t.map.value=e.map,null!==e.map&&(!0===e.map.matrixAutoUpdate&&e.map.updateMatrix(),t.uvTransform.value.copy(e.map.matrix))}function Lt(t,e){t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density)}function Pt(t,e){e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap)}function Rt(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,e.side===G&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),e.side===G&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function Ct(t,e){Rt(t,e),e.gradientMap&&(t.gradientMap.value=e.gradientMap)}function Ot(t,e){t.roughness.value=e.roughness,t.metalness.value=e.metalness,e.roughnessMap&&(t.roughnessMap.value=e.roughnessMap),e.metalnessMap&&(t.metalnessMap.value=e.metalnessMap),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,e.side===G&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),e.side===G&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias),e.envMap&&(t.envMapIntensity.value=e.envMapIntensity)}function It(t,e){Ot(t,e),t.reflectivity.value=e.reflectivity,t.clearCoat.value=e.clearCoat,t.clearCoatRoughness.value=e.clearCoatRoughness}function Dt(t,e){e.matcap&&(t.matcap.value=e.matcap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,e.side===G&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),e.side===G&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function Nt(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function Bt(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias),t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance}function zt(t,e){e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,e.side===G&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),e.side===G&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function Ut(t,e){t.ambientLightColor.needsUpdate=e,t.lightProbe.needsUpdate=e,t.directionalLights.needsUpdate=e,t.pointLights.needsUpdate=e,t.spotLights.needsUpdate=e,t.rectAreaLights.needsUpdate=e,t.hemisphereLights.needsUpdate=e}vt.setAnimationLoop(mt),\"undefined\"!==typeof window&&vt.setContext(window),this.setAnimationLoop=function(t){ft=t,ot.setAnimationLoop(t),vt.start()},this.render=function(t,e){var n,r;if(void 0!==arguments[2]&&(console.warn(\"THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.\"),n=arguments[2]),void 0!==arguments[3]&&(console.warn(\"THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.\"),r=arguments[3]),e&&e.isCamera){if(!O){z.geometry=null,z.program=null,z.wireframe=!1,B=-1,U=null,!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),ot.enabled&&(e=ot.getCamera(e)),h=S.get(t,e),h.init(),t.onBeforeRender(C,t,e,n||D),tt.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),Z.setFromMatrix(tt),$=this.localClippingEnabled,K=Q.init(this.clippingPlanes,$,e),l=M.get(t,e),l.init(),gt(t,e,0,C.sortObjects),!0===C.sortObjects&&l.sort(),K&&Q.beginShadows();var i=h.state.shadowsArray;at.render(i,t,e),h.setupLights(e),K&&Q.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==n&&this.setRenderTarget(n),E.render(l,t,e,r);var o=l.opaque,a=l.transparent;if(t.overrideMaterial){var s=t.overrideMaterial;o.length&&yt(o,t,e,s),a.length&&yt(a,t,e,s)}else o.length&&yt(o,t,e),a.length&&yt(a,t,e);t.onAfterRender(C,t,e),null!==D&&(y.updateRenderTargetMipmap(D),y.updateMultisampleRenderTarget(D)),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1),ot.enabled&&ot.submitFrame(),l=null,h=null}}else console.error(\"THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.\")},this.setFramebuffer=function(t){I=t},this.getRenderTarget=function(){return D},this.setRenderTarget=function(t,e,n){D=t,t&&void 0===g.get(t).__webglFramebuffer&&y.setupRenderTarget(t);var r=I,i=!1;if(t){var o=g.get(t).__webglFramebuffer;t.isWebGLRenderTargetCube?(r=o[e||0],i=!0):r=t.isWebGLMultisampleRenderTarget?g.get(t).__webglMultisampledFramebuffer:o,H.copy(t.viewport),j.copy(t.scissor),k=t.scissorTest}else H.copy(X).multiplyScalar(q),j.copy(Y).multiplyScalar(q),k=J;if(N!==r&&(p.bindFramebuffer(36160,r),N=r),m.viewport(H),m.scissor(j),m.setScissorTest(k),i){var a=g.get(t.texture);p.framebufferTexture2D(36160,36064,34069+(e||0),a.__webglTexture,n||0)}},this.readRenderTargetPixels=function(t,e,n,r,i,o){if(t&&t.isWebGLRenderTarget){var a=g.get(t).__webglFramebuffer;if(a){var s=!1;a!==N&&(p.bindFramebuffer(36160,a),s=!0);try{var c=t.texture,u=c.format,l=c.type;if(u!==ce&&R.convert(u)!==p.getParameter(35739))return void console.error(\"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.\");if(l!==Yt&&R.convert(l)!==p.getParameter(35738)&&(l!==te||!(f.isWebGL2||d.get(\"OES_texture_float\")||d.get(\"WEBGL_color_buffer_float\")))&&(l!==ee||(f.isWebGL2?!d.get(\"EXT_color_buffer_float\"):!d.get(\"EXT_color_buffer_half_float\"))))return void console.error(\"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.\");36053===p.checkFramebufferStatus(36160)?e>=0&&e<=t.width-r&&n>=0&&n<=t.height-i&&p.readPixels(e,n,r,i,R.convert(u),R.convert(l),o):console.error(\"THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.\")}finally{s&&p.bindFramebuffer(36160,N)}}}else console.error(\"THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.\")},this.copyFramebufferToTexture=function(t,e,n){var r=e.image.width,i=e.image.height,o=R.convert(e.format);y.setTexture2D(e,0),p.copyTexImage2D(3553,n||0,o,t.x,t.y,r,i,0)},this.copyTextureToTexture=function(t,e,n,r){var i=e.image.width,o=e.image.height,a=R.convert(n.format),s=R.convert(n.type);y.setTexture2D(n,0),e.isDataTexture?p.texSubImage2D(3553,r||0,t.x,t.y,i,o,a,s,e.image.data):p.texSubImage2D(3553,r||0,t.x,t.y,a,s,e.image)}}function Ts(t,e){this.name=\"\",this.color=new ki(t),this.density=void 0!==e?e:25e-5}function As(t,e,n){this.name=\"\",this.color=new ki(t),this.near=void 0!==e?e:1,this.far=void 0!==n?n:1e3}function Ls(){Ki.call(this),this.type=\"Scene\",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0}function Ps(t,e){this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}function Rs(t,e,n,r){this.data=t,this.itemSize=e,this.offset=n,this.normalized=!0===r}function Cs(t){wo.call(this),this.type=\"SpriteMaterial\",this.color=new ki(16777215),this.map=null,this.rotation=0,this.sizeAttenuation=!0,this.lights=!1,this.transparent=!0,this.setValues(t)}function Os(t){if(Ki.call(this),this.type=\"Sprite\",void 0===xs){xs=new mo;var e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ps(e,5);xs.setIndex([0,1,2,0,2,3]),xs.addAttribute(\"position\",new Rs(n,3,0,!1)),xs.addAttribute(\"uv\",new Rs(n,2,3,!1))}this.geometry=xs,this.material=void 0!==t?t:new Cs,this.center=new ln(.5,.5)}function Is(){Ki.call(this),this.type=\"LOD\",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function Ds(t,e){t&&t.isGeometry&&console.error(\"THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.\"),Lo.call(this,t,e),this.type=\"SkinnedMesh\",this.bindMode=\"attached\",this.bindMatrix=new Tn,this.bindMatrixInverse=new Tn}function Ns(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),void 0===e)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn(\"THREE.Skeleton boneInverses is the wrong length.\"),this.boneInverses=[];for(var n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Tn)}}function Bs(){Ki.call(this),this.type=\"Bone\"}function zs(t){wo.call(this),this.type=\"LineBasicMaterial\",this.color=new ki(16777215),this.linewidth=1,this.linecap=\"round\",this.linejoin=\"round\",this.lights=!1,this.setValues(t)}function Us(t,e,n){1===n&&console.error(\"THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.\"),Ki.call(this),this.type=\"Line\",this.geometry=void 0!==t?t:new mo,this.material=void 0!==e?e:new zs({color:16777215*Math.random()})}function Gs(t,e){Us.call(this,t,e),this.type=\"LineSegments\"}function Fs(t,e){Us.call(this,t,e),this.type=\"LineLoop\"}function Hs(t){wo.call(this),this.type=\"PointsMaterial\",this.color=new ki(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.lights=!1,this.setValues(t)}function js(t,e){Ki.call(this),this.type=\"Points\",this.geometry=void 0!==t?t:new mo,this.material=void 0!==e?e:new Hs({color:16777215*Math.random()})}function ks(t,e,n,r,i,o,a,s,c){vn.call(this,t,e,n,r,i,o,a,s,c),this.format=void 0!==a?a:se,this.minFilter=void 0!==o?o:Wt,this.magFilter=void 0!==i?i:Wt,this.generateMipmaps=!1}function Vs(t,e,n,r,i,o,a,s,c,u,l,h){vn.call(this,null,o,a,s,c,u,r,i,l,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}function Ws(t,e,n,r,i,o,a,s,c){vn.call(this,t,e,n,r,i,o,a,s,c),this.needsUpdate=!0}function qs(t,e,n,r,i,o,a,s,c,u){if(u=void 0!==u?u:pe,u!==pe&&u!==de)throw new Error(\"DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat\");void 0===n&&u===pe&&(n=Qt),void 0===n&&u===de&&(n=oe),vn.call(this,null,r,i,o,a,s,u,n,c),this.image={width:t,height:e},this.magFilter=void 0!==a?a:jt,this.minFilter=void 0!==s?s:jt,this.flipY=!1,this.generateMipmaps=!1}function Xs(t){mo.call(this),this.type=\"WireframeGeometry\";var e,n,r,i,o,a,s,c,u,l,h=[],p=[0,0],d={},f=[\"a\",\"b\",\"c\"];if(t&&t.isGeometry){var m=t.faces;for(e=0,r=m.length;e<r;e++){var v=m[e];for(n=0;n<3;n++)s=v[f[n]],c=v[f[(n+1)%3]],p[0]=Math.min(s,c),p[1]=Math.max(s,c),u=p[0]+\",\"+p[1],void 0===d[u]&&(d[u]={index1:p[0],index2:p[1]})}for(u in d)a=d[u],l=t.vertices[a.index1],h.push(l.x,l.y,l.z),l=t.vertices[a.index2],h.push(l.x,l.y,l.z)}else if(t&&t.isBufferGeometry){var g,y,x,b,w,_,M,S;if(l=new pn,null!==t.index){for(g=t.attributes.position,y=t.index,x=t.groups,0===x.length&&(x=[{start:0,count:y.count,materialIndex:0}]),i=0,o=x.length;i<o;++i)for(b=x[i],w=b.start,_=b.count,e=w,r=w+_;e<r;e+=3)for(n=0;n<3;n++)s=y.getX(e+n),c=y.getX(e+(n+1)%3),p[0]=Math.min(s,c),p[1]=Math.max(s,c),u=p[0]+\",\"+p[1],void 0===d[u]&&(d[u]={index1:p[0],index2:p[1]});for(u in d)a=d[u],l.fromBufferAttribute(g,a.index1),h.push(l.x,l.y,l.z),l.fromBufferAttribute(g,a.index2),h.push(l.x,l.y,l.z)}else for(g=t.attributes.position,e=0,r=g.count/3;e<r;e++)for(n=0;n<3;n++)M=3*e+n,l.fromBufferAttribute(g,M),h.push(l.x,l.y,l.z),S=3*e+(n+1)%3,l.fromBufferAttribute(g,S),h.push(l.x,l.y,l.z)}this.addAttribute(\"position\",new uo(h,3))}function Ys(t,e,n){to.call(this),this.type=\"ParametricGeometry\",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new Js(t,e,n)),this.mergeVertices()}function Js(t,e,n){mo.call(this),this.type=\"ParametricBufferGeometry\",this.parameters={func:t,slices:e,stacks:n};var r,i,o=[],a=[],s=[],c=[],u=1e-5,l=new pn,h=new pn,p=new pn,d=new pn,f=new pn;t.length<3&&console.error(\"THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.\");var m=e+1;for(r=0;r<=n;r++){var v=r/n;for(i=0;i<=e;i++){var g=i/e;t(g,v,h),a.push(h.x,h.y,h.z),g-u>=0?(t(g-u,v,p),d.subVectors(h,p)):(t(g+u,v,p),d.subVectors(p,h)),v-u>=0?(t(g,v-u,p),f.subVectors(h,p)):(t(g,v+u,p),f.subVectors(p,h)),l.crossVectors(d,f).normalize(),s.push(l.x,l.y,l.z),c.push(g,v)}}for(r=0;r<n;r++)for(i=0;i<e;i++){var y=r*m+i,x=r*m+i+1,b=(r+1)*m+i+1,w=(r+1)*m+i;o.push(y,x,w),o.push(x,b,w)}this.setIndex(o),this.addAttribute(\"position\",new uo(a,3)),this.addAttribute(\"normal\",new uo(s,3)),this.addAttribute(\"uv\",new uo(c,2))}function Zs(t,e,n,r){to.call(this),this.type=\"PolyhedronGeometry\",this.parameters={vertices:t,indices:e,radius:n,detail:r},this.fromBufferGeometry(new Qs(t,e,n,r)),this.mergeVertices()}function Qs(t,e,n,r){mo.call(this),this.type=\"PolyhedronBufferGeometry\",this.parameters={vertices:t,indices:e,radius:n,detail:r},n=n||1,r=r||0;var i=[],o=[];function a(t){for(var n=new pn,r=new pn,i=new pn,o=0;o<e.length;o+=3)p(e[o+0],n),p(e[o+1],r),p(e[o+2],i),s(n,r,i,t)}function s(t,e,n,r){var i,o,a=Math.pow(2,r),s=[];for(i=0;i<=a;i++){s[i]=[];var c=t.clone().lerp(n,i/a),u=e.clone().lerp(n,i/a),l=a-i;for(o=0;o<=l;o++)s[i][o]=0===o&&i===a?c:c.clone().lerp(u,o/l)}for(i=0;i<a;i++)for(o=0;o<2*(a-i)-1;o++){var p=Math.floor(o/2);o%2===0?(h(s[i][p+1]),h(s[i+1][p]),h(s[i][p])):(h(s[i][p+1]),h(s[i+1][p+1]),h(s[i+1][p]))}}function c(t){for(var e=new pn,n=0;n<i.length;n+=3)e.x=i[n+0],e.y=i[n+1],e.z=i[n+2],e.normalize().multiplyScalar(t),i[n+0]=e.x,i[n+1]=e.y,i[n+2]=e.z}function u(){for(var t=new pn,e=0;e<i.length;e+=3){t.x=i[e+0],t.y=i[e+1],t.z=i[e+2];var n=m(t)/2/Math.PI+.5,r=v(t)/Math.PI+.5;o.push(n,1-r)}d(),l()}function l(){for(var t=0;t<o.length;t+=6){var e=o[t+0],n=o[t+2],r=o[t+4],i=Math.max(e,n,r),a=Math.min(e,n,r);i>.9&&a<.1&&(e<.2&&(o[t+0]+=1),n<.2&&(o[t+2]+=1),r<.2&&(o[t+4]+=1))}}function h(t){i.push(t.x,t.y,t.z)}function p(e,n){var r=3*e;n.x=t[r+0],n.y=t[r+1],n.z=t[r+2]}function d(){for(var t=new pn,e=new pn,n=new pn,r=new pn,a=new ln,s=new ln,c=new ln,u=0,l=0;u<i.length;u+=9,l+=6){t.set(i[u+0],i[u+1],i[u+2]),e.set(i[u+3],i[u+4],i[u+5]),n.set(i[u+6],i[u+7],i[u+8]),a.set(o[l+0],o[l+1]),s.set(o[l+2],o[l+3]),c.set(o[l+4],o[l+5]),r.copy(t).add(e).add(n).divideScalar(3);var h=m(r);f(a,l+0,t,h),f(s,l+2,e,h),f(c,l+4,n,h)}}function f(t,e,n,r){r<0&&1===t.x&&(o[e]=t.x-1),0===n.x&&0===n.z&&(o[e]=r/2/Math.PI+.5)}function m(t){return Math.atan2(t.z,-t.x)}function v(t){return Math.atan2(-t.y,Math.sqrt(t.x*t.x+t.z*t.z))}a(r),c(n),u(),this.addAttribute(\"position\",new uo(i,3)),this.addAttribute(\"normal\",new uo(i.slice(),3)),this.addAttribute(\"uv\",new uo(o,2)),0===r?this.computeVertexNormals():this.normalizeNormals()}function Ks(t,e){to.call(this),this.type=\"TetrahedronGeometry\",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new $s(t,e)),this.mergeVertices()}function $s(t,e){var n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];Qs.call(this,n,r,t,e),this.type=\"TetrahedronBufferGeometry\",this.parameters={radius:t,detail:e}}function tc(t,e){to.call(this),this.type=\"OctahedronGeometry\",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new ec(t,e)),this.mergeVertices()}function ec(t,e){var n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Qs.call(this,n,r,t,e),this.type=\"OctahedronBufferGeometry\",this.parameters={radius:t,detail:e}}function nc(t,e){to.call(this),this.type=\"IcosahedronGeometry\",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new rc(t,e)),this.mergeVertices()}function rc(t,e){var n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],i=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Qs.call(this,r,i,t,e),this.type=\"IcosahedronBufferGeometry\",this.parameters={radius:t,detail:e}}function ic(t,e){to.call(this),this.type=\"DodecahedronGeometry\",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new oc(t,e)),this.mergeVertices()}function oc(t,e){var n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Qs.call(this,i,o,t,e),this.type=\"DodecahedronBufferGeometry\",this.parameters={radius:t,detail:e}}function ac(t,e,n,r,i,o){to.call(this),this.type=\"TubeGeometry\",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:i},void 0!==o&&console.warn(\"THREE.TubeGeometry: taper has been removed.\");var a=new sc(t,e,n,r,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,this.fromBufferGeometry(a),this.mergeVertices()}function sc(t,e,n,r,i){mo.call(this),this.type=\"TubeBufferGeometry\",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:i},e=e||64,n=n||1,r=r||8,i=i||!1;var o=t.computeFrenetFrames(e,i);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;var a,s,c=new pn,u=new pn,l=new ln,h=new pn,p=[],d=[],f=[],m=[];function v(){for(a=0;a<e;a++)g(a);g(!1===i?e:0),x(),y()}function g(i){h=t.getPointAt(i/e,h);var a=o.normals[i],l=o.binormals[i];for(s=0;s<=r;s++){var f=s/r*Math.PI*2,m=Math.sin(f),v=-Math.cos(f);u.x=v*a.x+m*l.x,u.y=v*a.y+m*l.y,u.z=v*a.z+m*l.z,u.normalize(),d.push(u.x,u.y,u.z),c.x=h.x+n*u.x,c.y=h.y+n*u.y,c.z=h.z+n*u.z,p.push(c.x,c.y,c.z)}}function y(){for(s=1;s<=e;s++)for(a=1;a<=r;a++){var t=(r+1)*(s-1)+(a-1),n=(r+1)*s+(a-1),i=(r+1)*s+a,o=(r+1)*(s-1)+a;m.push(t,n,o),m.push(n,i,o)}}function x(){for(a=0;a<=e;a++)for(s=0;s<=r;s++)l.x=a/e,l.y=s/r,f.push(l.x,l.y)}v(),this.setIndex(m),this.addAttribute(\"position\",new uo(p,3)),this.addAttribute(\"normal\",new uo(d,3)),this.addAttribute(\"uv\",new uo(f,2))}function cc(t,e,n,r,i,o,a){to.call(this),this.type=\"TorusKnotGeometry\",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:r,p:i,q:o},void 0!==a&&console.warn(\"THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.\"),this.fromBufferGeometry(new uc(t,e,n,r,i,o)),this.mergeVertices()}function uc(t,e,n,r,i,o){mo.call(this),this.type=\"TorusKnotBufferGeometry\",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:r,p:i,q:o},t=t||1,e=e||.4,n=Math.floor(n)||64,r=Math.floor(r)||8,i=i||2,o=o||3;var a,s,c=[],u=[],l=[],h=[],p=new pn,d=new pn,f=new pn,m=new pn,v=new pn,g=new pn,y=new pn;for(a=0;a<=n;++a){var x=a/n*i*Math.PI*2;for(A(x,i,o,t,f),A(x+.01,i,o,t,m),g.subVectors(m,f),y.addVectors(m,f),v.crossVectors(g,y),y.crossVectors(v,g),v.normalize(),y.normalize(),s=0;s<=r;++s){var b=s/r*Math.PI*2,w=-e*Math.cos(b),_=e*Math.sin(b);p.x=f.x+(w*y.x+_*v.x),p.y=f.y+(w*y.y+_*v.y),p.z=f.z+(w*y.z+_*v.z),u.push(p.x,p.y,p.z),d.subVectors(p,f).normalize(),l.push(d.x,d.y,d.z),h.push(a/n),h.push(s/r)}}for(s=1;s<=n;s++)for(a=1;a<=r;a++){var M=(r+1)*(s-1)+(a-1),S=(r+1)*s+(a-1),E=(r+1)*s+a,T=(r+1)*(s-1)+a;c.push(M,S,T),c.push(S,E,T)}function A(t,e,n,r,i){var o=Math.cos(t),a=Math.sin(t),s=n/e*t,c=Math.cos(s);i.x=r*(2+c)*.5*o,i.y=r*(2+c)*a*.5,i.z=r*Math.sin(s)*.5}this.setIndex(c),this.addAttribute(\"position\",new uo(u,3)),this.addAttribute(\"normal\",new uo(l,3)),this.addAttribute(\"uv\",new uo(h,2))}function lc(t,e,n,r,i){to.call(this),this.type=\"TorusGeometry\",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:i},this.fromBufferGeometry(new hc(t,e,n,r,i)),this.mergeVertices()}function hc(t,e,n,r,i){mo.call(this),this.type=\"TorusBufferGeometry\",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:i},t=t||1,e=e||.4,n=Math.floor(n)||8,r=Math.floor(r)||6,i=i||2*Math.PI;var o,a,s=[],c=[],u=[],l=[],h=new pn,p=new pn,d=new pn;for(o=0;o<=n;o++)for(a=0;a<=r;a++){var f=a/r*i,m=o/n*Math.PI*2;p.x=(t+e*Math.cos(m))*Math.cos(f),p.y=(t+e*Math.cos(m))*Math.sin(f),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(f),h.y=t*Math.sin(f),d.subVectors(p,h).normalize(),u.push(d.x,d.y,d.z),l.push(a/r),l.push(o/n)}for(o=1;o<=n;o++)for(a=1;a<=r;a++){var v=(r+1)*o+a-1,g=(r+1)*(o-1)+a-1,y=(r+1)*(o-1)+a,x=(r+1)*o+a;s.push(v,g,x),s.push(g,y,x)}this.setIndex(s),this.addAttribute(\"position\",new uo(c,3)),this.addAttribute(\"normal\",new uo(u,3)),this.addAttribute(\"uv\",new uo(l,2))}Object.assign(Ts.prototype,{isFogExp2:!0,clone:function(){return new Ts(this.color,this.density)},toJSON:function(){return{type:\"FogExp2\",color:this.color.getHex(),density:this.density}}}),Object.assign(As.prototype,{isFog:!0,clone:function(){return new As(this.color,this.near,this.far)},toJSON:function(){return{type:\"Fog\",color:this.color.getHex(),near:this.near,far:this.far}}}),Ls.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Ls,isScene:!0,copy:function(t,e){return Ki.prototype.copy.call(this,t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},toJSON:function(t){var e=Ki.prototype.toJSON.call(this,t);return null!==this.background&&(e.object.background=this.background.toJSON(t)),null!==this.fog&&(e.object.fog=this.fog.toJSON()),e},dispose:function(){this.dispatchEvent({type:\"dispose\"})}}),Object.defineProperty(Ps.prototype,\"needsUpdate\",{set:function(t){!0===t&&this.version++}}),Object.assign(Ps.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(t){if(Array.isArray(t))throw new TypeError(\"THREE.BufferAttribute: array should be a Typed Array.\");return this.count=void 0!==t?t.length/this.stride:0,this.array=t,this},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.dynamic=t.dynamic,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(var r=0,i=this.stride;r<i;r++)this.array[t+r]=e.array[n+r];return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(t){return this.onUploadCallback=t,this}}),Object.defineProperties(Rs.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}}),Object.assign(Rs.prototype,{isInterleavedBufferAttribute:!0,setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this},setXYZW:function(t,e,n,r,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=i,this}}),Cs.prototype=Object.create(wo.prototype),Cs.prototype.constructor=Cs,Cs.prototype.isSpriteMaterial=!0,Cs.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this},Os.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Os,isSprite:!0,raycast:function(){var t=new pn,e=new pn,n=new pn,r=new ln,i=new ln,o=new Tn,a=new pn,s=new pn,c=new pn,u=new ln,l=new ln,h=new ln;function p(t,e,n,a,s,c){r.subVectors(t,n).addScalar(.5).multiply(a),void 0!==s?(i.x=c*r.x-s*r.y,i.y=s*r.x+c*r.y):i.copy(r),t.copy(e),t.x+=i.x,t.y+=i.y,t.applyMatrix4(o)}return function(r,i){e.setFromMatrixScale(this.matrixWorld),o.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld),n.setFromMatrixPosition(this.modelViewMatrix);var d,f,m=this.material.rotation;0!==m&&(f=Math.cos(m),d=Math.sin(m));var v=this.center;p(a.set(-.5,-.5,0),n,v,e,d,f),p(s.set(.5,-.5,0),n,v,e,d,f),p(c.set(.5,.5,0),n,v,e,d,f),u.set(0,0),l.set(1,0),h.set(1,1);var g=r.ray.intersectTriangle(a,s,c,!1,t);if(null!==g||(p(s.set(-.5,.5,0),n,v,e,d,f),l.set(0,1),g=r.ray.intersectTriangle(a,c,s,!1,t),null!==g)){var y=r.ray.origin.distanceTo(t);y<r.near||y>r.far||i.push({distance:y,point:t.clone(),uv:To.getUV(t,a,s,c,u,l,h,new ln),face:null,object:this})}}}(),clone:function(){return new this.constructor(this.material).copy(this)},copy:function(t){return Ki.prototype.copy.call(this,t),void 0!==t.center&&this.center.copy(t.center),this}}),Is.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Is,isLOD:!0,copy:function(t){Ki.prototype.copy.call(this,t,!1);for(var e=t.levels,n=0,r=e.length;n<r;n++){var i=e[n];this.addLevel(i.object.clone(),i.distance)}return this},addLevel:function(t,e){void 0===e&&(e=0),e=Math.abs(e);for(var n=this.levels,r=0;r<n.length;r++)if(e<n[r].distance)break;return n.splice(r,0,{distance:e,object:t}),this.add(t),this},getObjectForDistance:function(t){for(var e=this.levels,n=1,r=e.length;n<r;n++)if(t<e[n].distance)break;return e[n-1].object},raycast:function(){var t=new pn;return function(e,n){t.setFromMatrixPosition(this.matrixWorld);var r=e.ray.origin.distanceTo(t);this.getObjectForDistance(r).raycast(e,n)}}(),update:function(){var t=new pn,e=new pn;return function(n){var r=this.levels;if(r.length>1){t.setFromMatrixPosition(n.matrixWorld),e.setFromMatrixPosition(this.matrixWorld);var i=t.distanceTo(e);r[0].object.visible=!0;for(var o=1,a=r.length;o<a;o++){if(!(i>=r[o].distance))break;r[o-1].object.visible=!1,r[o].object.visible=!0}for(;o<a;o++)r[o].object.visible=!1}}}(),toJSON:function(t){var e=Ki.prototype.toJSON.call(this,t);e.object.levels=[];for(var n=this.levels,r=0,i=n.length;r<i;r++){var o=n[r];e.object.levels.push({object:o.object.uuid,distance:o.distance})}return e}}),Ds.prototype=Object.assign(Object.create(Lo.prototype),{constructor:Ds,isSkinnedMesh:!0,bind:function(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var t=new gn,e=this.geometry.attributes.skinWeight,n=0,r=e.count;n<r;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);var i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Lo.prototype.updateMatrixWorld.call(this,t),\"attached\"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):\"detached\"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn(\"THREE.SkinnedMesh: Unrecognized bindMode: \"+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Object.assign(Ns.prototype,{calculateInverses:function(){this.boneInverses=[];for(var t=0,e=this.bones.length;t<e;t++){var n=new Tn;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){var t,e,n;for(e=0,n=this.bones.length;e<n;e++)t=this.bones[e],t&&t.matrixWorld.getInverse(this.boneInverses[e]);for(e=0,n=this.bones.length;e<n;e++)t=this.bones[e],t&&(t.parent&&t.parent.isBone?(t.matrix.getInverse(t.parent.matrixWorld),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))},update:function(){var t=new Tn,e=new Tn;return function(){for(var n=this.bones,r=this.boneInverses,i=this.boneMatrices,o=this.boneTexture,a=0,s=n.length;a<s;a++){var c=n[a]?n[a].matrixWorld:e;t.multiplyMatrices(c,r[a]),t.toArray(i,16*a)}void 0!==o&&(o.needsUpdate=!0)}}(),clone:function(){return new Ns(this.bones,this.boneInverses)},getBoneByName:function(t){for(var e=0,n=this.bones.length;e<n;e++){var r=this.bones[e];if(r.name===t)return r}}}),Bs.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Bs,isBone:!0}),zs.prototype=Object.create(wo.prototype),zs.prototype.constructor=zs,zs.prototype.isLineBasicMaterial=!0,zs.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this},Us.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Us,isLine:!0,computeLineDistances:function(){var t=new pn,e=new pn;return function(){var n=this.geometry;if(n.isBufferGeometry)if(null===n.index){for(var r=n.attributes.position,i=[0],o=1,a=r.count;o<a;o++)t.fromBufferAttribute(r,o-1),e.fromBufferAttribute(r,o),i[o]=i[o-1],i[o]+=t.distanceTo(e);n.addAttribute(\"lineDistance\",new uo(i,1))}else console.warn(\"THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.\");else if(n.isGeometry){var s=n.vertices;i=n.lineDistances;i[0]=0;for(o=1,a=s.length;o<a;o++)i[o]=i[o-1],i[o]+=s[o-1].distanceTo(s[o])}return this}}(),raycast:function(){var t=new Tn,e=new Eo,n=new Mn;return function(r,i){var o=r.linePrecision,a=this.geometry,s=this.matrixWorld;if(null===a.boundingSphere&&a.computeBoundingSphere(),n.copy(a.boundingSphere),n.applyMatrix4(s),n.radius+=o,!1!==r.ray.intersectsSphere(n)){t.getInverse(s),e.copy(r.ray).applyMatrix4(t);var c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,l=new pn,h=new pn,p=new pn,d=new pn,f=this&&this.isLineSegments?2:1;if(a.isBufferGeometry){var m=a.index,v=a.attributes,g=v.position.array;if(null!==m)for(var y=m.array,x=0,b=y.length-1;x<b;x+=f){var w=y[x],_=y[x+1];l.fromArray(g,3*w),h.fromArray(g,3*_);var M=e.distanceSqToSegment(l,h,d,p);if(!(M>u)){d.applyMatrix4(this.matrixWorld);var S=r.ray.origin.distanceTo(d);S<r.near||S>r.far||i.push({distance:S,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(x=0,b=g.length/3-1;x<b;x+=f){l.fromArray(g,3*x),h.fromArray(g,3*x+3);M=e.distanceSqToSegment(l,h,d,p);if(!(M>u)){d.applyMatrix4(this.matrixWorld);S=r.ray.origin.distanceTo(d);S<r.near||S>r.far||i.push({distance:S,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else if(a.isGeometry){var E=a.vertices,T=E.length;for(x=0;x<T-1;x+=f){M=e.distanceSqToSegment(E[x],E[x+1],d,p);if(!(M>u)){d.applyMatrix4(this.matrixWorld);S=r.ray.origin.distanceTo(d);S<r.near||S>r.far||i.push({distance:S,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),Gs.prototype=Object.assign(Object.create(Us.prototype),{constructor:Gs,isLineSegments:!0,computeLineDistances:function(){var t=new pn,e=new pn;return function(){var n=this.geometry;if(n.isBufferGeometry)if(null===n.index){for(var r=n.attributes.position,i=[],o=0,a=r.count;o<a;o+=2)t.fromBufferAttribute(r,o),e.fromBufferAttribute(r,o+1),i[o]=0===o?0:i[o-1],i[o+1]=i[o]+t.distanceTo(e);n.addAttribute(\"lineDistance\",new uo(i,1))}else console.warn(\"THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.\");else if(n.isGeometry){var s=n.vertices;for(i=n.lineDistances,o=0,a=s.length;o<a;o+=2)t.copy(s[o]),e.copy(s[o+1]),i[o]=0===o?0:i[o-1],i[o+1]=i[o]+t.distanceTo(e)}return this}}()}),Fs.prototype=Object.assign(Object.create(Us.prototype),{constructor:Fs,isLineLoop:!0}),Hs.prototype=Object.create(wo.prototype),Hs.prototype.constructor=Hs,Hs.prototype.isPointsMaterial=!0,Hs.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this},js.prototype=Object.assign(Object.create(Ki.prototype),{constructor:js,isPoints:!0,raycast:function(){var t=new Tn,e=new Eo,n=new Mn;return function(r,i){var o=this,a=this.geometry,s=this.matrixWorld,c=r.params.Points.threshold;if(null===a.boundingSphere&&a.computeBoundingSphere(),n.copy(a.boundingSphere),n.applyMatrix4(s),n.radius+=c,!1!==r.ray.intersectsSphere(n)){t.getInverse(s),e.copy(r.ray).applyMatrix4(t);var u=c/((this.scale.x+this.scale.y+this.scale.z)/3),l=u*u,h=new pn,p=new pn;if(a.isBufferGeometry){var d=a.index,f=a.attributes,m=f.position.array;if(null!==d)for(var v=d.array,g=0,y=v.length;g<y;g++){var x=v[g];h.fromArray(m,3*x),_(h,x)}else{g=0;for(var b=m.length/3;g<b;g++)h.fromArray(m,3*g),_(h,g)}}else{var w=a.vertices;for(g=0,b=w.length;g<b;g++)_(w[g],g)}}function _(t,n){var a=e.distanceSqToPoint(t);if(a<l){e.closestPointToPoint(t,p),p.applyMatrix4(s);var c=r.ray.origin.distanceTo(p);if(c<r.near||c>r.far)return;i.push({distance:c,distanceToRay:Math.sqrt(a),point:p.clone(),index:n,face:null,object:o})}}}}(),clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),ks.prototype=Object.assign(Object.create(vn.prototype),{constructor:ks,isVideoTexture:!0,update:function(){var t=this.image;t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),Vs.prototype=Object.create(vn.prototype),Vs.prototype.constructor=Vs,Vs.prototype.isCompressedTexture=!0,Ws.prototype=Object.create(vn.prototype),Ws.prototype.constructor=Ws,Ws.prototype.isCanvasTexture=!0,qs.prototype=Object.create(vn.prototype),qs.prototype.constructor=qs,qs.prototype.isDepthTexture=!0,Xs.prototype=Object.create(mo.prototype),Xs.prototype.constructor=Xs,Ys.prototype=Object.create(to.prototype),Ys.prototype.constructor=Ys,Js.prototype=Object.create(mo.prototype),Js.prototype.constructor=Js,Zs.prototype=Object.create(to.prototype),Zs.prototype.constructor=Zs,Qs.prototype=Object.create(mo.prototype),Qs.prototype.constructor=Qs,Ks.prototype=Object.create(to.prototype),Ks.prototype.constructor=Ks,$s.prototype=Object.create(Qs.prototype),$s.prototype.constructor=$s,tc.prototype=Object.create(to.prototype),tc.prototype.constructor=tc,ec.prototype=Object.create(Qs.prototype),ec.prototype.constructor=ec,nc.prototype=Object.create(to.prototype),nc.prototype.constructor=nc,rc.prototype=Object.create(Qs.prototype),rc.prototype.constructor=rc,ic.prototype=Object.create(to.prototype),ic.prototype.constructor=ic,oc.prototype=Object.create(Qs.prototype),oc.prototype.constructor=oc,ac.prototype=Object.create(to.prototype),ac.prototype.constructor=ac,sc.prototype=Object.create(mo.prototype),sc.prototype.constructor=sc,sc.prototype.toJSON=function(){var t=mo.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t},cc.prototype=Object.create(to.prototype),cc.prototype.constructor=cc,uc.prototype=Object.create(mo.prototype),uc.prototype.constructor=uc,lc.prototype=Object.create(to.prototype),lc.prototype.constructor=lc,hc.prototype=Object.create(mo.prototype),hc.prototype.constructor=hc;var pc={triangulate:function(t,e,n){n=n||2;var r,i,o,a,s,c,u,l=e&&e.length,h=l?e[0]*n:t.length,p=dc(t,0,h,n,!0),d=[];if(!p)return d;if(l&&(p=bc(t,e,p,n)),t.length>80*n){r=o=t[0],i=a=t[1];for(var f=n;f<h;f+=n)s=t[f],c=t[f+1],s<r&&(r=s),c<i&&(i=c),s>o&&(o=s),c>a&&(a=c);u=Math.max(o-r,a-i),u=0!==u?1/u:0}return mc(p,d,n,r,i,u),d}};function dc(t,e,n,r,i){var o,a;if(i===Fc(t,e,n,r)>0)for(o=e;o<n;o+=r)a=zc(o,t[o],t[o+1],a);else for(o=n-r;o>=e;o-=r)a=zc(o,t[o],t[o+1],a);return a&&Cc(a,a.next)&&(Uc(a),a=a.next),a}function fc(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!Cc(r,r.next)&&0!==Rc(r.prev,r,r.next))r=r.next;else{if(Uc(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function mc(t,e,n,r,i,o,a){if(t){!a&&o&&Sc(t,r,i,o);var s,c,u=t;while(t.prev!==t.next)if(s=t.prev,c=t.next,o?gc(t,r,i,o):vc(t))e.push(s.i/n),e.push(t.i/n),e.push(c.i/n),Uc(t),t=c.next,u=c.next;else if(t=c,t===u){a?1===a?(t=yc(t,e,n),mc(t,e,n,r,i,o,2)):2===a&&xc(t,e,n,r,i,o):mc(fc(t),e,n,r,i,o,1);break}}}function vc(t){var e=t.prev,n=t,r=t.next;if(Rc(e,n,r)>=0)return!1;var i=t.next.next;while(i!==t.prev){if(Lc(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&Rc(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function gc(t,e,n,r){var i=t.prev,o=t,a=t.next;if(Rc(i,o,a)>=0)return!1;var s=i.x<o.x?i.x<a.x?i.x:a.x:o.x<a.x?o.x:a.x,c=i.y<o.y?i.y<a.y?i.y:a.y:o.y<a.y?o.y:a.y,u=i.x>o.x?i.x>a.x?i.x:a.x:o.x>a.x?o.x:a.x,l=i.y>o.y?i.y>a.y?i.y:a.y:o.y>a.y?o.y:a.y,h=Tc(s,c,e,n,r),p=Tc(u,l,e,n,r),d=t.nextZ;while(d&&d.z<=p){if(d!==t.prev&&d!==t.next&&Lc(i.x,i.y,o.x,o.y,a.x,a.y,d.x,d.y)&&Rc(d.prev,d,d.next)>=0)return!1;d=d.nextZ}d=t.prevZ;while(d&&d.z>=h){if(d!==t.prev&&d!==t.next&&Lc(i.x,i.y,o.x,o.y,a.x,a.y,d.x,d.y)&&Rc(d.prev,d,d.next)>=0)return!1;d=d.prevZ}return!0}function yc(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!Cc(i,o)&&Oc(i,r,r.next,o)&&Dc(i,o)&&Dc(o,i)&&(e.push(i.i/n),e.push(r.i/n),e.push(o.i/n),Uc(r),Uc(r.next),r=t=o),r=r.next}while(r!==t);return r}function xc(t,e,n,r,i,o){var a=t;do{var s=a.next.next;while(s!==a.prev){if(a.i!==s.i&&Pc(a,s)){var c=Bc(a,s);return a=fc(a,a.next),c=fc(c,c.next),mc(a,e,n,r,i,o),void mc(c,e,n,r,i,o)}s=s.next}a=a.next}while(a!==t)}function bc(t,e,n,r){var i,o,a,s,c,u=[];for(i=0,o=e.length;i<o;i++)a=e[i]*r,s=i<o-1?e[i+1]*r:t.length,c=dc(t,a,s,r,!1),c===c.next&&(c.steiner=!0),u.push(Ac(c));for(u.sort(wc),i=0;i<u.length;i++)_c(u[i],n),n=fc(n,n.next);return n}function wc(t,e){return t.x-e.x}function _c(t,e){if(e=Mc(t,e),e){var n=Bc(e,t);fc(n,n.next)}}function Mc(t,e){var n,r=e,i=t.x,o=t.y,a=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){var s=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(o===r.y)return r;if(o===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===a)return n.prev;var c,u=n,l=n.x,h=n.y,p=1/0;r=n.next;while(r!==u)i>=r.x&&r.x>=l&&i!==r.x&&Lc(o<h?i:a,o,l,h,o<h?a:i,o,r.x,r.y)&&(c=Math.abs(o-r.y)/(i-r.x),(c<p||c===p&&r.x>n.x)&&Dc(r,t)&&(n=r,p=c)),r=r.next;return n}function Sc(t,e,n,r){var i=t;do{null===i.z&&(i.z=Tc(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,Ec(i)}function Ec(t){var e,n,r,i,o,a,s,c,u=1;do{n=t,t=null,o=null,a=0;while(n){for(a++,r=n,s=0,e=0;e<u;e++)if(s++,r=r.nextZ,!r)break;c=u;while(s>0||c>0&&r)0!==s&&(0===c||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;n=r}o.nextZ=null,u*=2}while(a>1);return t}function Tc(t,e,n,r,i){return t=32767*(t-n)*i,e=32767*(e-r)*i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function Ac(t){var e=t,n=t;do{e.x<n.x&&(n=e),e=e.next}while(e!==t);return n}function Lc(t,e,n,r,i,o,a,s){return(i-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(r-s)-(n-a)*(e-s)>=0&&(n-a)*(o-s)-(i-a)*(r-s)>=0}function Pc(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ic(t,e)&&Dc(t,e)&&Dc(e,t)&&Nc(t,e)}function Rc(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Cc(t,e){return t.x===e.x&&t.y===e.y}function Oc(t,e,n,r){return!!(Cc(t,e)&&Cc(n,r)||Cc(t,r)&&Cc(n,e))||Rc(t,e,n)>0!==Rc(t,e,r)>0&&Rc(n,r,t)>0!==Rc(n,r,e)>0}function Ic(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Oc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Dc(t,e){return Rc(t.prev,t,t.next)<0?Rc(t,e,t.next)>=0&&Rc(t,t.prev,e)>=0:Rc(t,e,t.prev)<0||Rc(t,t.next,e)<0}function Nc(t,e){var n=t,r=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!==n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}function Bc(t,e){var n=new Gc(t.i,t.x,t.y),r=new Gc(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function zc(t,e,n,r){var i=new Gc(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Uc(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Gc(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fc(t,e,n,r){for(var i=0,o=e,a=n-r;o<n;o+=r)i+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return i}var Hc={area:function(t){for(var e=t.length,n=0,r=e-1,i=0;i<e;r=i++)n+=t[r].x*t[i].y-t[i].x*t[r].y;return.5*n},isClockWise:function(t){return Hc.area(t)<0},triangulateShape:function(t,e){var n=[],r=[],i=[];jc(t),kc(n,t);var o=t.length;e.forEach(jc);for(var a=0;a<e.length;a++)r.push(o),o+=e[a].length,kc(n,e[a]);var s=pc.triangulate(n,r);for(a=0;a<s.length;a+=3)i.push(s.slice(a,a+3));return i}};function jc(t){var e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function kc(t,e){for(var n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}function Vc(t,e){to.call(this),this.type=\"ExtrudeGeometry\",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new Wc(t,e)),this.mergeVertices()}function Wc(t,e){mo.call(this),this.type=\"ExtrudeBufferGeometry\",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];for(var n=this,r=[],i=[],o=0,a=t.length;o<a;o++){var s=t[o];c(s)}function c(t){var o=[],a=void 0!==e.curveSegments?e.curveSegments:12,s=void 0!==e.steps?e.steps:1,c=void 0!==e.depth?e.depth:100,u=void 0===e.bevelEnabled||e.bevelEnabled,l=void 0!==e.bevelThickness?e.bevelThickness:6,h=void 0!==e.bevelSize?e.bevelSize:l-2,p=void 0!==e.bevelOffset?e.bevelOffset:0,d=void 0!==e.bevelSegments?e.bevelSegments:3,f=e.extrudePath,m=void 0!==e.UVGenerator?e.UVGenerator:qc;void 0!==e.amount&&(console.warn(\"THREE.ExtrudeBufferGeometry: amount has been renamed to depth.\"),c=e.amount);var v,g,y,x,b,w,_,M,S=!1;f&&(v=f.getSpacedPoints(s),S=!0,u=!1,g=f.computeFrenetFrames(s,!1),y=new pn,x=new pn,b=new pn),u||(d=0,l=0,h=0,p=0);var E=t.extractPoints(a),T=E.shape,A=E.holes,L=!Hc.isClockWise(T);if(L)for(T=T.reverse(),_=0,M=A.length;_<M;_++)w=A[_],Hc.isClockWise(w)&&(A[_]=w.reverse());var P=Hc.triangulateShape(T,A),R=T;for(_=0,M=A.length;_<M;_++)w=A[_],T=T.concat(w);function C(t,e,n){return e||console.error(\"THREE.ExtrudeGeometry: vec does not exist\"),e.clone().multiplyScalar(n).add(t)}var O,I,D,N,B,z,U=T.length,G=P.length;function F(t,e,n){var r,i,o,a=t.x-e.x,s=t.y-e.y,c=n.x-t.x,u=n.y-t.y,l=a*a+s*s,h=a*u-s*c;if(Math.abs(h)>Number.EPSILON){var p=Math.sqrt(l),d=Math.sqrt(c*c+u*u),f=e.x-s/p,m=e.y+a/p,v=n.x-u/d,g=n.y+c/d,y=((v-f)*u-(g-m)*c)/(a*u-s*c);r=f+a*y-t.x,i=m+s*y-t.y;var x=r*r+i*i;if(x<=2)return new ln(r,i);o=Math.sqrt(x/2)}else{var b=!1;a>Number.EPSILON?c>Number.EPSILON&&(b=!0):a<-Number.EPSILON?c<-Number.EPSILON&&(b=!0):Math.sign(s)===Math.sign(u)&&(b=!0),b?(r=-s,i=a,o=Math.sqrt(l)):(r=a,i=s,o=Math.sqrt(l/2))}return new ln(r/o,i/o)}for(var H=[],j=0,k=R.length,V=k-1,W=j+1;j<k;j++,V++,W++)V===k&&(V=0),W===k&&(W=0),H[j]=F(R[j],R[V],R[W]);var q,X,Y=[],J=H.concat();for(_=0,M=A.length;_<M;_++){for(w=A[_],q=[],j=0,k=w.length,V=k-1,W=j+1;j<k;j++,V++,W++)V===k&&(V=0),W===k&&(W=0),q[j]=F(w[j],w[V],w[W]);Y.push(q),J=J.concat(q)}for(O=0;O<d;O++){for(D=O/d,N=l*Math.cos(D*Math.PI/2),I=h*Math.sin(D*Math.PI/2)+p,j=0,k=R.length;j<k;j++)B=C(R[j],H[j],I),$(B.x,B.y,-N);for(_=0,M=A.length;_<M;_++)for(w=A[_],q=Y[_],j=0,k=w.length;j<k;j++)B=C(w[j],q[j],I),$(B.x,B.y,-N)}for(I=h+p,j=0;j<U;j++)B=u?C(T[j],J[j],I):T[j],S?(x.copy(g.normals[0]).multiplyScalar(B.x),y.copy(g.binormals[0]).multiplyScalar(B.y),b.copy(v[0]).add(x).add(y),$(b.x,b.y,b.z)):$(B.x,B.y,0);for(X=1;X<=s;X++)for(j=0;j<U;j++)B=u?C(T[j],J[j],I):T[j],S?(x.copy(g.normals[X]).multiplyScalar(B.x),y.copy(g.binormals[X]).multiplyScalar(B.y),b.copy(v[X]).add(x).add(y),$(b.x,b.y,b.z)):$(B.x,B.y,c/s*X);for(O=d-1;O>=0;O--){for(D=O/d,N=l*Math.cos(D*Math.PI/2),I=h*Math.sin(D*Math.PI/2)+p,j=0,k=R.length;j<k;j++)B=C(R[j],H[j],I),$(B.x,B.y,c+N);for(_=0,M=A.length;_<M;_++)for(w=A[_],q=Y[_],j=0,k=w.length;j<k;j++)B=C(w[j],q[j],I),S?$(B.x,B.y+v[s-1].y,v[s-1].x+N):$(B.x,B.y,c+N)}function Z(){var t=r.length/3;if(u){var e=0,i=U*e;for(j=0;j<G;j++)z=P[j],tt(z[2]+i,z[1]+i,z[0]+i);for(e=s+2*d,i=U*e,j=0;j<G;j++)z=P[j],tt(z[0]+i,z[1]+i,z[2]+i)}else{for(j=0;j<G;j++)z=P[j],tt(z[2],z[1],z[0]);for(j=0;j<G;j++)z=P[j],tt(z[0]+U*s,z[1]+U*s,z[2]+U*s)}n.addGroup(t,r.length/3-t,0)}function Q(){var t=r.length/3,e=0;for(K(R,e),e+=R.length,_=0,M=A.length;_<M;_++)w=A[_],K(w,e),e+=w.length;n.addGroup(t,r.length/3-t,1)}function K(t,e){var n,r;j=t.length;while(--j>=0){n=j,r=j-1,r<0&&(r=t.length-1);var i=0,o=s+2*d;for(i=0;i<o;i++){var a=U*i,c=U*(i+1),u=e+n+a,l=e+r+a,h=e+r+c,p=e+n+c;et(u,l,h,p)}}}function $(t,e,n){o.push(t),o.push(e),o.push(n)}function tt(t,e,i){nt(t),nt(e),nt(i);var o=r.length/3,a=m.generateTopUV(n,r,o-3,o-2,o-1);rt(a[0]),rt(a[1]),rt(a[2])}function et(t,e,i,o){nt(t),nt(e),nt(o),nt(e),nt(i),nt(o);var a=r.length/3,s=m.generateSideWallUV(n,r,a-6,a-3,a-2,a-1);rt(s[0]),rt(s[1]),rt(s[3]),rt(s[1]),rt(s[2]),rt(s[3])}function nt(t){r.push(o[3*t+0]),r.push(o[3*t+1]),r.push(o[3*t+2])}function rt(t){i.push(t.x),i.push(t.y)}Z(),Q()}this.addAttribute(\"position\",new uo(r,3)),this.addAttribute(\"uv\",new uo(i,2)),this.computeVertexNormals()}Vc.prototype=Object.create(to.prototype),Vc.prototype.constructor=Vc,Vc.prototype.toJSON=function(){var t=to.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return Xc(e,n,t)},Wc.prototype=Object.create(mo.prototype),Wc.prototype.constructor=Wc,Wc.prototype.toJSON=function(){var t=mo.prototype.toJSON.call(this),e=this.parameters.shapes,n=this.parameters.options;return Xc(e,n,t)};var qc={generateTopUV:function(t,e,n,r,i){var o=e[3*n],a=e[3*n+1],s=e[3*r],c=e[3*r+1],u=e[3*i],l=e[3*i+1];return[new ln(o,a),new ln(s,c),new ln(u,l)]},generateSideWallUV:function(t,e,n,r,i,o){var a=e[3*n],s=e[3*n+1],c=e[3*n+2],u=e[3*r],l=e[3*r+1],h=e[3*r+2],p=e[3*i],d=e[3*i+1],f=e[3*i+2],m=e[3*o],v=e[3*o+1],g=e[3*o+2];return Math.abs(s-l)<.01?[new ln(a,1-c),new ln(u,1-h),new ln(p,1-f),new ln(m,1-g)]:[new ln(s,1-c),new ln(l,1-h),new ln(d,1-f),new ln(v,1-g)]}};function Xc(t,e,n){if(n.shapes=[],Array.isArray(t))for(var r=0,i=t.length;r<i;r++){var o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function Yc(t,e){to.call(this),this.type=\"TextGeometry\",this.parameters={text:t,parameters:e},this.fromBufferGeometry(new Jc(t,e)),this.mergeVertices()}function Jc(t,e){e=e||{};var n=e.font;if(!n||!n.isFont)return console.error(\"THREE.TextGeometry: font parameter is not an instance of THREE.Font.\"),new to;var r=n.generateShapes(t,e.size);e.depth=void 0!==e.height?e.height:50,void 0===e.bevelThickness&&(e.bevelThickness=10),void 0===e.bevelSize&&(e.bevelSize=8),void 0===e.bevelEnabled&&(e.bevelEnabled=!1),Wc.call(this,r,e),this.type=\"TextBufferGeometry\"}function Zc(t,e,n,r,i,o,a){to.call(this),this.type=\"SphereGeometry\",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new Qc(t,e,n,r,i,o,a)),this.mergeVertices()}function Qc(t,e,n,r,i,o,a){mo.call(this),this.type=\"SphereBufferGeometry\",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:i,thetaStart:o,thetaLength:a},t=t||1,e=Math.max(3,Math.floor(e)||8),n=Math.max(2,Math.floor(n)||6),r=void 0!==r?r:0,i=void 0!==i?i:2*Math.PI,o=void 0!==o?o:0,a=void 0!==a?a:Math.PI;var s,c,u=o+a,l=0,h=[],p=new pn,d=new pn,f=[],m=[],v=[],g=[];for(c=0;c<=n;c++){var y=[],x=c/n,b=0==c?.5/e:c==n?-.5/e:0;for(s=0;s<=e;s++){var w=s/e;p.x=-t*Math.cos(r+w*i)*Math.sin(o+x*a),p.y=t*Math.cos(o+x*a),p.z=t*Math.sin(r+w*i)*Math.sin(o+x*a),m.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),g.push(w+b,1-x),y.push(l++)}h.push(y)}for(c=0;c<n;c++)for(s=0;s<e;s++){var _=h[c][s+1],M=h[c][s],S=h[c+1][s],E=h[c+1][s+1];(0!==c||o>0)&&f.push(_,M,E),(c!==n-1||u<Math.PI)&&f.push(M,S,E)}this.setIndex(f),this.addAttribute(\"position\",new uo(m,3)),this.addAttribute(\"normal\",new uo(v,3)),this.addAttribute(\"uv\",new uo(g,2))}function Kc(t,e,n,r,i,o){to.call(this),this.type=\"RingGeometry\",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:o},this.fromBufferGeometry(new $c(t,e,n,r,i,o)),this.mergeVertices()}function $c(t,e,n,r,i,o){mo.call(this),this.type=\"RingBufferGeometry\",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:o},t=t||.5,e=e||1,i=void 0!==i?i:0,o=void 0!==o?o:2*Math.PI,n=void 0!==n?Math.max(3,n):8,r=void 0!==r?Math.max(1,r):1;var a,s,c,u=[],l=[],h=[],p=[],d=t,f=(e-t)/r,m=new pn,v=new ln;for(s=0;s<=r;s++){for(c=0;c<=n;c++)a=i+c/n*o,m.x=d*Math.cos(a),m.y=d*Math.sin(a),l.push(m.x,m.y,m.z),h.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,p.push(v.x,v.y);d+=f}for(s=0;s<r;s++){var g=s*(n+1);for(c=0;c<n;c++){a=c+g;var y=a,x=a+n+1,b=a+n+2,w=a+1;u.push(y,x,w),u.push(x,b,w)}}this.setIndex(u),this.addAttribute(\"position\",new uo(l,3)),this.addAttribute(\"normal\",new uo(h,3)),this.addAttribute(\"uv\",new uo(p,2))}function tu(t,e,n,r){to.call(this),this.type=\"LatheGeometry\",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},this.fromBufferGeometry(new eu(t,e,n,r)),this.mergeVertices()}function eu(t,e,n,r){mo.call(this),this.type=\"LatheBufferGeometry\",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e)||12,n=n||0,r=r||2*Math.PI,r=un.clamp(r,0,2*Math.PI);var i,o,a,s=[],c=[],u=[],l=1/e,h=new pn,p=new ln;for(o=0;o<=e;o++){var d=n+o*l*r,f=Math.sin(d),m=Math.cos(d);for(a=0;a<=t.length-1;a++)h.x=t[a].x*f,h.y=t[a].y,h.z=t[a].x*m,c.push(h.x,h.y,h.z),p.x=o/e,p.y=a/(t.length-1),u.push(p.x,p.y)}for(o=0;o<e;o++)for(a=0;a<t.length-1;a++){i=a+o*t.length;var v=i,g=i+t.length,y=i+t.length+1,x=i+1;s.push(v,g,x),s.push(g,y,x)}if(this.setIndex(s),this.addAttribute(\"position\",new uo(c,3)),this.addAttribute(\"uv\",new uo(u,2)),this.computeVertexNormals(),r===2*Math.PI){var b=this.attributes.normal.array,w=new pn,_=new pn,M=new pn;for(i=e*t.length*3,o=0,a=0;o<t.length;o++,a+=3)w.x=b[a+0],w.y=b[a+1],w.z=b[a+2],_.x=b[i+a+0],_.y=b[i+a+1],_.z=b[i+a+2],M.addVectors(w,_).normalize(),b[a+0]=b[i+a+0]=M.x,b[a+1]=b[i+a+1]=M.y,b[a+2]=b[i+a+2]=M.z}}function nu(t,e){to.call(this),this.type=\"ShapeGeometry\",\"object\"===typeof e&&(console.warn(\"THREE.ShapeGeometry: Options parameter has been removed.\"),e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new ru(t,e)),this.mergeVertices()}function ru(t,e){mo.call(this),this.type=\"ShapeBufferGeometry\",this.parameters={shapes:t,curveSegments:e},e=e||12;var n=[],r=[],i=[],o=[],a=0,s=0;if(!1===Array.isArray(t))u(t);else for(var c=0;c<t.length;c++)u(t[c]),this.addGroup(a,s,c),a+=s,s=0;function u(t){var a,c,u,l=r.length/3,h=t.extractPoints(e),p=h.shape,d=h.holes;for(!1===Hc.isClockWise(p)&&(p=p.reverse()),a=0,c=d.length;a<c;a++)u=d[a],!0===Hc.isClockWise(u)&&(d[a]=u.reverse());var f=Hc.triangulateShape(p,d);for(a=0,c=d.length;a<c;a++)u=d[a],p=p.concat(u);for(a=0,c=p.length;a<c;a++){var m=p[a];r.push(m.x,m.y,0),i.push(0,0,1),o.push(m.x,m.y)}for(a=0,c=f.length;a<c;a++){var v=f[a],g=v[0]+l,y=v[1]+l,x=v[2]+l;n.push(g,y,x),s+=3}}this.setIndex(n),this.addAttribute(\"position\",new uo(r,3)),this.addAttribute(\"normal\",new uo(i,3)),this.addAttribute(\"uv\",new uo(o,2))}function iu(t,e){if(e.shapes=[],Array.isArray(t))for(var n=0,r=t.length;n<r;n++){var i=t[n];e.shapes.push(i.uuid)}else e.shapes.push(t.uuid);return e}function ou(t,e){mo.call(this),this.type=\"EdgesGeometry\",this.parameters={thresholdAngle:e},e=void 0!==e?e:1;var n,r,i,o,a=[],s=Math.cos(un.DEG2RAD*e),c=[0,0],u={},l=[\"a\",\"b\",\"c\"];t.isBufferGeometry?(o=new to,o.fromBufferGeometry(t)):o=t.clone(),o.mergeVertices(),o.computeFaceNormals();for(var h=o.vertices,p=o.faces,d=0,f=p.length;d<f;d++)for(var m=p[d],v=0;v<3;v++)n=m[l[v]],r=m[l[(v+1)%3]],c[0]=Math.min(n,r),c[1]=Math.max(n,r),i=c[0]+\",\"+c[1],void 0===u[i]?u[i]={index1:c[0],index2:c[1],face1:d,face2:void 0}:u[i].face2=d;for(i in u){var g=u[i];if(void 0===g.face2||p[g.face1].normal.dot(p[g.face2].normal)<=s){var y=h[g.index1];a.push(y.x,y.y,y.z),y=h[g.index2],a.push(y.x,y.y,y.z)}}this.addAttribute(\"position\",new uo(a,3))}function au(t,e,n,r,i,o,a,s){to.call(this),this.type=\"CylinderGeometry\",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:s},this.fromBufferGeometry(new su(t,e,n,r,i,o,a,s)),this.mergeVertices()}function su(t,e,n,r,i,o,a,s){mo.call(this),this.type=\"CylinderBufferGeometry\",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:s};var c=this;t=void 0!==t?t:1,e=void 0!==e?e:1,n=n||1,r=Math.floor(r)||8,i=Math.floor(i)||1,o=void 0!==o&&o,a=void 0!==a?a:0,s=void 0!==s?s:2*Math.PI;var u=[],l=[],h=[],p=[],d=0,f=[],m=n/2,v=0;function g(){var o,g,y=new pn,x=new pn,b=0,w=(e-t)/n;for(g=0;g<=i;g++){var _=[],M=g/i,S=M*(e-t)+t;for(o=0;o<=r;o++){var E=o/r,T=E*s+a,A=Math.sin(T),L=Math.cos(T);x.x=S*A,x.y=-M*n+m,x.z=S*L,l.push(x.x,x.y,x.z),y.set(A,w,L).normalize(),h.push(y.x,y.y,y.z),p.push(E,1-M),_.push(d++)}f.push(_)}for(o=0;o<r;o++)for(g=0;g<i;g++){var P=f[g][o],R=f[g+1][o],C=f[g+1][o+1],O=f[g][o+1];u.push(P,R,O),u.push(R,C,O),b+=6}c.addGroup(v,b,0),v+=b}function y(n){var i,o,f,g=new ln,y=new pn,x=0,b=!0===n?t:e,w=!0===n?1:-1;for(o=d,i=1;i<=r;i++)l.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),d++;for(f=d,i=0;i<=r;i++){var _=i/r,M=_*s+a,S=Math.cos(M),E=Math.sin(M);y.x=b*E,y.y=m*w,y.z=b*S,l.push(y.x,y.y,y.z),h.push(0,w,0),g.x=.5*S+.5,g.y=.5*E*w+.5,p.push(g.x,g.y),d++}for(i=0;i<r;i++){var T=o+i,A=f+i;!0===n?u.push(A,A+1,T):u.push(A+1,A,T),x+=3}c.addGroup(v,x,!0===n?1:2),v+=x}g(),!1===o&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.addAttribute(\"position\",new uo(l,3)),this.addAttribute(\"normal\",new uo(h,3)),this.addAttribute(\"uv\",new uo(p,2))}function cu(t,e,n,r,i,o,a){au.call(this,0,t,e,n,r,i,o,a),this.type=\"ConeGeometry\",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:o,thetaLength:a}}function uu(t,e,n,r,i,o,a){su.call(this,0,t,e,n,r,i,o,a),this.type=\"ConeBufferGeometry\",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:o,thetaLength:a}}function lu(t,e,n,r){to.call(this),this.type=\"CircleGeometry\",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},this.fromBufferGeometry(new hu(t,e,n,r)),this.mergeVertices()}function hu(t,e,n,r){mo.call(this),this.type=\"CircleBufferGeometry\",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},t=t||1,e=void 0!==e?Math.max(3,e):8,n=void 0!==n?n:0,r=void 0!==r?r:2*Math.PI;var i,o,a=[],s=[],c=[],u=[],l=new pn,h=new ln;for(s.push(0,0,0),c.push(0,0,1),u.push(.5,.5),o=0,i=3;o<=e;o++,i+=3){var p=n+o/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),s.push(l.x,l.y,l.z),c.push(0,0,1),h.x=(s[i]/t+1)/2,h.y=(s[i+1]/t+1)/2,u.push(h.x,h.y)}for(i=1;i<=e;i++)a.push(i,i+1,0);this.setIndex(a),this.addAttribute(\"position\",new uo(s,3)),this.addAttribute(\"normal\",new uo(c,3)),this.addAttribute(\"uv\",new uo(u,2))}Yc.prototype=Object.create(to.prototype),Yc.prototype.constructor=Yc,Jc.prototype=Object.create(Wc.prototype),Jc.prototype.constructor=Jc,Zc.prototype=Object.create(to.prototype),Zc.prototype.constructor=Zc,Qc.prototype=Object.create(mo.prototype),Qc.prototype.constructor=Qc,Kc.prototype=Object.create(to.prototype),Kc.prototype.constructor=Kc,$c.prototype=Object.create(mo.prototype),$c.prototype.constructor=$c,tu.prototype=Object.create(to.prototype),tu.prototype.constructor=tu,eu.prototype=Object.create(mo.prototype),eu.prototype.constructor=eu,nu.prototype=Object.create(to.prototype),nu.prototype.constructor=nu,nu.prototype.toJSON=function(){var t=to.prototype.toJSON.call(this),e=this.parameters.shapes;return iu(e,t)},ru.prototype=Object.create(mo.prototype),ru.prototype.constructor=ru,ru.prototype.toJSON=function(){var t=mo.prototype.toJSON.call(this),e=this.parameters.shapes;return iu(e,t)},ou.prototype=Object.create(mo.prototype),ou.prototype.constructor=ou,au.prototype=Object.create(to.prototype),au.prototype.constructor=au,su.prototype=Object.create(mo.prototype),su.prototype.constructor=su,cu.prototype=Object.create(au.prototype),cu.prototype.constructor=cu,uu.prototype=Object.create(su.prototype),uu.prototype.constructor=uu,lu.prototype=Object.create(to.prototype),lu.prototype.constructor=lu,hu.prototype=Object.create(mo.prototype),hu.prototype.constructor=hu;var pu=Object.freeze({WireframeGeometry:Xs,ParametricGeometry:Ys,ParametricBufferGeometry:Js,TetrahedronGeometry:Ks,TetrahedronBufferGeometry:$s,OctahedronGeometry:tc,OctahedronBufferGeometry:ec,IcosahedronGeometry:nc,IcosahedronBufferGeometry:rc,DodecahedronGeometry:ic,DodecahedronBufferGeometry:oc,PolyhedronGeometry:Zs,PolyhedronBufferGeometry:Qs,TubeGeometry:ac,TubeBufferGeometry:sc,TorusKnotGeometry:cc,TorusKnotBufferGeometry:uc,TorusGeometry:lc,TorusBufferGeometry:hc,TextGeometry:Yc,TextBufferGeometry:Jc,SphereGeometry:Zc,SphereBufferGeometry:Qc,RingGeometry:Kc,RingBufferGeometry:$c,PlaneGeometry:yo,PlaneBufferGeometry:xo,LatheGeometry:tu,LatheBufferGeometry:eu,ShapeGeometry:nu,ShapeBufferGeometry:ru,ExtrudeGeometry:Vc,ExtrudeBufferGeometry:Wc,EdgesGeometry:ou,ConeGeometry:cu,ConeBufferGeometry:uu,CylinderGeometry:au,CylinderBufferGeometry:su,CircleGeometry:lu,CircleBufferGeometry:hu,BoxGeometry:vo,BoxBufferGeometry:go});function du(t){wo.call(this),this.type=\"ShadowMaterial\",this.color=new ki(0),this.transparent=!0,this.setValues(t)}function fu(t){So.call(this,t),this.type=\"RawShaderMaterial\"}function mu(t){wo.call(this),this.defines={STANDARD:\"\"},this.type=\"MeshStandardMaterial\",this.color=new ki(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ki(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sn,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=\"round\",this.wireframeLinejoin=\"round\",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function vu(t){mu.call(this),this.defines={PHYSICAL:\"\"},this.type=\"MeshPhysicalMaterial\",this.reflectivity=.5,this.clearCoat=0,this.clearCoatRoughness=0,this.setValues(t)}function gu(t){wo.call(this),this.type=\"MeshPhongMaterial\",this.color=new ki(16777215),this.specular=new ki(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ki(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sn,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_t,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=\"round\",this.wireframeLinejoin=\"round\",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function yu(t){gu.call(this),this.defines={TOON:\"\"},this.type=\"MeshToonMaterial\",this.gradientMap=null,this.setValues(t)}function xu(t){wo.call(this),this.type=\"MeshNormalMaterial\",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sn,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function bu(t){wo.call(this),this.type=\"MeshLambertMaterial\",this.color=new ki(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ki(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_t,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=\"round\",this.wireframeLinejoin=\"round\",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function wu(t){wo.call(this),this.defines={MATCAP:\"\"},this.type=\"MeshMatcapMaterial\",this.color=new ki(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sn,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.lights=!1,this.setValues(t)}function _u(t){zs.call(this),this.type=\"LineDashedMaterial\",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}du.prototype=Object.create(wo.prototype),du.prototype.constructor=du,du.prototype.isShadowMaterial=!0,du.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this},fu.prototype=Object.create(So.prototype),fu.prototype.constructor=fu,fu.prototype.isRawShaderMaterial=!0,mu.prototype=Object.create(wo.prototype),mu.prototype.constructor=mu,mu.prototype.isMeshStandardMaterial=!0,mu.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.defines={STANDARD:\"\"},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},vu.prototype=Object.create(mu.prototype),vu.prototype.constructor=vu,vu.prototype.isMeshPhysicalMaterial=!0,vu.prototype.copy=function(t){return mu.prototype.copy.call(this,t),this.defines={PHYSICAL:\"\"},this.reflectivity=t.reflectivity,this.clearCoat=t.clearCoat,this.clearCoatRoughness=t.clearCoatRoughness,this},gu.prototype=Object.create(wo.prototype),gu.prototype.constructor=gu,gu.prototype.isMeshPhongMaterial=!0,gu.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},yu.prototype=Object.create(gu.prototype),yu.prototype.constructor=yu,yu.prototype.isMeshToonMaterial=!0,yu.prototype.copy=function(t){return gu.prototype.copy.call(this,t),this.gradientMap=t.gradientMap,this},xu.prototype=Object.create(wo.prototype),xu.prototype.constructor=xu,xu.prototype.isMeshNormalMaterial=!0,xu.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},bu.prototype=Object.create(wo.prototype),bu.prototype.constructor=bu,bu.prototype.isMeshLambertMaterial=!0,bu.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},wu.prototype=Object.create(wo.prototype),wu.prototype.constructor=wu,wu.prototype.isMeshMatcapMaterial=!0,wu.prototype.copy=function(t){return wo.prototype.copy.call(this,t),this.defines={MATCAP:\"\"},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},_u.prototype=Object.create(zs.prototype),_u.prototype.constructor=_u,_u.prototype.isLineDashedMaterial=!0,_u.prototype.copy=function(t){return zs.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Mu=Object.freeze({ShadowMaterial:du,SpriteMaterial:Cs,RawShaderMaterial:fu,ShaderMaterial:So,PointsMaterial:Hs,MeshPhysicalMaterial:vu,MeshStandardMaterial:mu,MeshPhongMaterial:gu,MeshToonMaterial:yu,MeshNormalMaterial:xu,MeshLambertMaterial:bu,MeshDepthMaterial:us,MeshDistanceMaterial:ls,MeshBasicMaterial:Ao,MeshMatcapMaterial:wu,LineDashedMaterial:_u,LineBasicMaterial:zs,Material:wo}),Su={arraySlice:function(t,e,n){return Su.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:\"number\"===typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(e,n){return t[e]-t[n]}for(var n=t.length,r=new Array(n),i=0;i!==n;++i)r[i]=i;return r.sort(e),r},sortedArray:function(t,e,n){for(var r=t.length,i=new t.constructor(r),o=0,a=0;a!==r;++o)for(var s=n[o]*e,c=0;c!==e;++c)i[a++]=t[s+c];return i},flattenJSON:function(t,e,n,r){var i=1,o=t[0];while(void 0!==o&&void 0===o[r])o=t[i++];if(void 0!==o){var a=o[r];if(void 0!==a)if(Array.isArray(a))do{a=o[r],void 0!==a&&(e.push(o.time),n.push.apply(n,a)),o=t[i++]}while(void 0!==o);else if(void 0!==a.toArray)do{a=o[r],void 0!==a&&(e.push(o.time),a.toArray(n,n.length)),o=t[i++]}while(void 0!==o);else do{a=o[r],void 0!==a&&(e.push(o.time),n.push(a)),o=t[i++]}while(void 0!==o)}}};function Eu(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==r?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n}function Tu(t,e,n,r){Eu.call(this,t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}function Au(t,e,n,r){Eu.call(this,t,e,n,r)}function Lu(t,e,n,r){Eu.call(this,t,e,n,r)}function Pu(t,e,n,r){if(void 0===t)throw new Error(\"THREE.KeyframeTrack: track name is undefined\");if(void 0===e||0===e.length)throw new Error(\"THREE.KeyframeTrack: no keyframes in track named \"+t);this.name=t,this.times=Su.convertArray(e,this.TimeBufferType),this.values=Su.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}function Ru(t,e,n){Pu.call(this,t,e,n)}function Cu(t,e,n,r){Pu.call(this,t,e,n,r)}function Ou(t,e,n,r){Pu.call(this,t,e,n,r)}function Iu(t,e,n,r){Eu.call(this,t,e,n,r)}function Du(t,e,n,r){Pu.call(this,t,e,n,r)}function Nu(t,e,n,r){Pu.call(this,t,e,n,r)}function Bu(t,e,n,r){Pu.call(this,t,e,n,r)}function zu(t,e,n){this.name=t,this.tracks=n,this.duration=void 0!==e?e:-1,this.uuid=un.generateUUID(),this.duration<0&&this.resetDuration()}function Uu(t){switch(t.toLowerCase()){case\"scalar\":case\"double\":case\"float\":case\"number\":case\"integer\":return Ou;case\"vector\":case\"vector2\":case\"vector3\":case\"vector4\":return Bu;case\"color\":return Cu;case\"quaternion\":return Du;case\"bool\":case\"boolean\":return Ru;case\"string\":return Nu}throw new Error(\"THREE.KeyframeTrack: Unsupported typeName: \"+t)}function Gu(t){if(void 0===t.type)throw new Error(\"THREE.KeyframeTrack: track type undefined, can not parse\");var e=Uu(t.type);if(void 0===t.times){var n=[],r=[];Su.flattenJSON(t.keys,n,r,\"value\"),t.times=n,t.values=r}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Eu.prototype,{evaluate:function(t){var e=this.parameterPositions,n=this._cachedIndex,r=e[n],i=e[n-1];t:{e:{var o;n:{r:if(!(t<r)){for(var a=n+2;;){if(void 0===r){if(t<i)break r;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,i)}if(n===a)break;if(i=r,r=e[++n],t<r)break e}o=e.length;break n}if(t>=i)break t;var s=e[1];t<s&&(n=2,i=s);for(a=n-2;;){if(void 0===i)return this._cachedIndex=0,this.beforeStart_(0,t,r);if(n===a)break;if(r=i,i=e[--n-1],t>=i)break e}o=n,n=0}while(n<o){var c=n+o>>>1;t<e[c]?o=c:n=c+1}if(r=e[n],i=e[n-1],void 0===i)return this._cachedIndex=0,this.beforeStart_(0,t,r);if(void 0===r)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,i,t)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,t,r)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){for(var e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=t*r,o=0;o!==r;++o)e[o]=n[i+o];return e},interpolate_:function(){throw new Error(\"call to abstract method\")},intervalChanged_:function(){}}),\n//!\\ DECLARE ALIAS AFTER assign prototype !\nObject.assign(Eu.prototype,{beforeStart_:Eu.prototype.copySampleValue_,afterEnd_:Eu.prototype.copySampleValue_}),Tu.prototype=Object.assign(Object.create(Eu.prototype),{constructor:Tu,DefaultSettings_:{endingStart:Ve,endingEnd:Ve},intervalChanged_:function(t,e,n){var r=this.parameterPositions,i=t-2,o=t+1,a=r[i],s=r[o];if(void 0===a)switch(this.getSettings_().endingStart){case We:i=t,a=2*e-n;break;case qe:i=r.length-2,a=e+r[i]-r[i+1];break;default:i=t,a=n}if(void 0===s)switch(this.getSettings_().endingEnd){case We:o=t,s=2*n-e;break;case qe:o=1,s=n+r[1]-r[0];break;default:o=t-1,s=e}var c=.5*(n-e),u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(s-n),this._offsetPrev=i*u,this._offsetNext=o*u},interpolate_:function(t,e,n,r){for(var i=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,c=s-a,u=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,p=this._weightNext,d=(n-e)/(r-e),f=d*d,m=f*d,v=-h*m+2*h*f-h*d,g=(1+h)*m+(-1.5-2*h)*f+(-.5+h)*d+1,y=(-1-p)*m+(1.5+p)*f+.5*d,x=p*m-p*f,b=0;b!==a;++b)i[b]=v*o[u+b]+g*o[c+b]+y*o[s+b]+x*o[l+b];return i}}),Au.prototype=Object.assign(Object.create(Eu.prototype),{constructor:Au,interpolate_:function(t,e,n,r){for(var i=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,c=s-a,u=(n-e)/(r-e),l=1-u,h=0;h!==a;++h)i[h]=o[c+h]*l+o[s+h]*u;return i}}),Lu.prototype=Object.assign(Object.create(Eu.prototype),{constructor:Lu,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(Pu,{toJSON:function(t){var e,n=t.constructor;if(void 0!==n.toJSON)e=n.toJSON(t);else{e={name:t.name,times:Su.convertArray(t.times,Array),values:Su.convertArray(t.values,Array)};var r=t.getInterpolation();r!==t.DefaultInterpolation&&(e.interpolation=r)}return e.type=t.ValueTypeName,e}}),Object.assign(Pu.prototype,{constructor:Pu,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:je,InterpolantFactoryMethodDiscrete:function(t){return new Lu(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new Au(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new Tu(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case He:e=this.InterpolantFactoryMethodDiscrete;break;case je:e=this.InterpolantFactoryMethodLinear;break;case ke:e=this.InterpolantFactoryMethodSmooth;break}if(void 0===e){var n=\"unsupported interpolation for \"+this.ValueTypeName+\" keyframe track named \"+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn(\"THREE.KeyframeTrack:\",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return He;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return ke}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(0!==t)for(var e=this.times,n=0,r=e.length;n!==r;++n)e[n]+=t;return this},scale:function(t){if(1!==t)for(var e=this.times,n=0,r=e.length;n!==r;++n)e[n]*=t;return this},trim:function(t,e){var n=this.times,r=n.length,i=0,o=r-1;while(i!==r&&n[i]<t)++i;while(-1!==o&&n[o]>e)--o;if(++o,0!==i||o!==r){i>=o&&(o=Math.max(o,1),i=o-1);var a=this.getValueSize();this.times=Su.arraySlice(n,i,o),this.values=Su.arraySlice(this.values,i*a,o*a)}return this},validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error(\"THREE.KeyframeTrack: Invalid value size in track.\",this),t=!1);var n=this.times,r=this.values,i=n.length;0===i&&(console.error(\"THREE.KeyframeTrack: Track is empty.\",this),t=!1);for(var o=null,a=0;a!==i;a++){var s=n[a];if(\"number\"===typeof s&&isNaN(s)){console.error(\"THREE.KeyframeTrack: Time is not a valid number.\",this,a,s),t=!1;break}if(null!==o&&o>s){console.error(\"THREE.KeyframeTrack: Out of order keys.\",this,a,s,o),t=!1;break}o=s}if(void 0!==r&&Su.isTypedArray(r)){a=0;for(var c=r.length;a!==c;++a){var u=r[a];if(isNaN(u)){console.error(\"THREE.KeyframeTrack: Value is not a valid number.\",this,a,u),t=!1;break}}}return t},optimize:function(){for(var t=this.times,e=this.values,n=this.getValueSize(),r=this.getInterpolation()===ke,i=1,o=t.length-1,a=1;a<o;++a){var s=!1,c=t[a],u=t[a+1];if(c!==u&&(1!==a||c!==c[0]))if(r)s=!0;else for(var l=a*n,h=l-n,p=l+n,d=0;d!==n;++d){var f=e[l+d];if(f!==e[h+d]||f!==e[p+d]){s=!0;break}}if(s){if(a!==i){t[i]=t[a];var m=a*n,v=i*n;for(d=0;d!==n;++d)e[v+d]=e[m+d]}++i}}if(o>0){t[i]=t[o];for(m=o*n,v=i*n,d=0;d!==n;++d)e[v+d]=e[m+d];++i}return i!==t.length&&(this.times=Su.arraySlice(t,0,i),this.values=Su.arraySlice(e,0,i*n)),this},clone:function(){var t=Su.arraySlice(this.times,0),e=Su.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}),Ru.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Ru,ValueTypeName:\"bool\",ValueBufferType:Array,DefaultInterpolation:He,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Cu.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Cu,ValueTypeName:\"color\"}),Ou.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Ou,ValueTypeName:\"number\"}),Iu.prototype=Object.assign(Object.create(Eu.prototype),{constructor:Iu,interpolate_:function(t,e,n,r){for(var i=this.resultBuffer,o=this.sampleValues,a=this.valueSize,s=t*a,c=(n-e)/(r-e),u=s+a;s!==u;s+=4)hn.slerpFlat(i,0,o,s-a,o,s,c);return i}}),Du.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Du,ValueTypeName:\"quaternion\",DefaultInterpolation:je,InterpolantFactoryMethodLinear:function(t){return new Iu(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),Nu.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Nu,ValueTypeName:\"string\",ValueBufferType:Array,DefaultInterpolation:He,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Bu.prototype=Object.assign(Object.create(Pu.prototype),{constructor:Bu,ValueTypeName:\"vector\"}),Object.assign(zu,{parse:function(t){for(var e=[],n=t.tracks,r=1/(t.fps||1),i=0,o=n.length;i!==o;++i)e.push(Gu(n[i]).scale(r));return new zu(t.name,t.duration,e)},toJSON:function(t){for(var e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid},i=0,o=n.length;i!==o;++i)e.push(Pu.toJSON(n[i]));return r},CreateFromMorphTargetSequence:function(t,e,n,r){for(var i=e.length,o=[],a=0;a<i;a++){var s=[],c=[];s.push((a+i-1)%i,a,(a+1)%i),c.push(0,1,0);var u=Su.getKeyframeOrder(s);s=Su.sortedArray(s,1,u),c=Su.sortedArray(c,1,u),r||0!==s[0]||(s.push(i),c.push(c[0])),o.push(new Ou(\".morphTargetInfluences[\"+e[a].name+\"]\",s,c).scale(1/n))}return new zu(t,-1,o)},findByName:function(t,e){var n=t;if(!Array.isArray(t)){var r=t;n=r.geometry&&r.geometry.animations||r.animations}for(var i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){for(var r={},i=/^([\\w-]*?)([\\d]+)$/,o=0,a=t.length;o<a;o++){var s=t[o],c=s.name.match(i);if(c&&c.length>1){var u=c[1],l=r[u];l||(r[u]=l=[]),l.push(s)}}var h=[];for(var u in r)h.push(zu.CreateFromMorphTargetSequence(u,r[u],e,n));return h},parseAnimation:function(t,e){if(!t)return console.error(\"THREE.AnimationClip: No animation in JSONLoader data.\"),null;for(var n=function(t,e,n,r,i){if(0!==n.length){var o=[],a=[];Su.flattenJSON(n,o,a,r),0!==o.length&&i.push(new t(e,o,a))}},r=[],i=t.name||\"default\",o=t.length||-1,a=t.fps||30,s=t.hierarchy||[],c=0;c<s.length;c++){var u=s[c].keys;if(u&&0!==u.length)if(u[0].morphTargets){for(var l={},h=0;h<u.length;h++)if(u[h].morphTargets)for(var p=0;p<u[h].morphTargets.length;p++)l[u[h].morphTargets[p]]=-1;for(var d in l){var f=[],m=[];for(p=0;p!==u[h].morphTargets.length;++p){var v=u[h];f.push(v.time),m.push(v.morphTarget===d?1:0)}r.push(new Ou(\".morphTargetInfluence[\"+d+\"]\",f,m))}o=l.length*(a||1)}else{var g=\".bones[\"+e[c].name+\"]\";n(Bu,g+\".position\",u,\"pos\",r),n(Du,g+\".quaternion\",u,\"rot\",r),n(Bu,g+\".scale\",u,\"scl\",r)}}if(0===r.length)return null;var y=new zu(i,o,r);return y}}),Object.assign(zu.prototype,{resetDuration:function(){for(var t=this.tracks,e=0,n=0,r=t.length;n!==r;++n){var i=this.tracks[n];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){for(var t=!0,e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){for(var t=[],e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new zu(this.name,this.duration,t)}});var Fu={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Hu(t,e,n){var r=this,i=!1,o=0,a=0,s=void 0;this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){a++,!1===i&&void 0!==r.onStart&&r.onStart(t,o,a),i=!0},this.itemEnd=function(t){o++,void 0!==r.onProgress&&r.onProgress(t,o,a),o===a&&(i=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(t){void 0!==r.onError&&r.onError(t)},this.resolveURL=function(t){return s?s(t):t},this.setURLModifier=function(t){return s=t,this}}var ju=new Hu,ku={};function Vu(t){this.manager=void 0!==t?t:ju}function Wu(t){this.manager=void 0!==t?t:ju}function qu(t){this.manager=void 0!==t?t:ju,this._parser=null}function Xu(t){this.manager=void 0!==t?t:ju,this._parser=null}function Yu(t){this.manager=void 0!==t?t:ju}function Ju(t){this.manager=void 0!==t?t:ju}function Zu(t){this.manager=void 0!==t?t:ju}function Qu(){this.type=\"Curve\",this.arcLengthDivisions=200}function Ku(t,e,n,r,i,o,a,s){Qu.call(this),this.type=\"EllipseCurve\",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=r||1,this.aStartAngle=i||0,this.aEndAngle=o||2*Math.PI,this.aClockwise=a||!1,this.aRotation=s||0}function $u(t,e,n,r,i,o){Ku.call(this,t,e,n,n,r,i,o),this.type=\"ArcCurve\"}function tl(){var t=0,e=0,n=0,r=0;function i(i,o,a,s){t=i,e=a,n=-3*i+3*o-2*a-s,r=2*i-2*o+a+s}return{initCatmullRom:function(t,e,n,r,o){i(e,n,o*(n-t),o*(r-e))},initNonuniformCatmullRom:function(t,e,n,r,o,a,s){var c=(e-t)/o-(n-t)/(o+a)+(n-e)/a,u=(n-e)/a-(r-e)/(a+s)+(r-n)/s;c*=a,u*=a,i(e,n,c,u)},calc:function(i){var o=i*i,a=o*i;return t+e*i+n*o+r*a}}}Object.assign(Vu.prototype,{load:function(t,e,n,r){void 0===t&&(t=\"\"),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var i=this,o=Fu.get(t);if(void 0!==o)return i.manager.itemStart(t),setTimeout(function(){e&&e(o),i.manager.itemEnd(t)},0),o;if(void 0===ku[t]){var a=/^data:(.*?)(;base64)?,(.*)$/,s=t.match(a);if(s){var c=s[1],u=!!s[2],l=s[3];l=decodeURIComponent(l),u&&(l=atob(l));try{var h,p=(this.responseType||\"\").toLowerCase();switch(p){case\"arraybuffer\":case\"blob\":for(var d=new Uint8Array(l.length),f=0;f<l.length;f++)d[f]=l.charCodeAt(f);h=\"blob\"===p?new Blob([d.buffer],{type:c}):d.buffer;break;case\"document\":var m=new DOMParser;h=m.parseFromString(l,c);break;case\"json\":h=JSON.parse(l);break;default:h=l;break}setTimeout(function(){e&&e(h),i.manager.itemEnd(t)},0)}catch(y){setTimeout(function(){r&&r(y),i.manager.itemError(t),i.manager.itemEnd(t)},0)}}else{ku[t]=[],ku[t].push({onLoad:e,onProgress:n,onError:r});var v=new XMLHttpRequest;for(var g in v.open(\"GET\",t,!0),v.addEventListener(\"load\",function(e){var n=this.response;Fu.add(t,n);var r=ku[t];if(delete ku[t],200===this.status||0===this.status){0===this.status&&console.warn(\"THREE.FileLoader: HTTP Status 0 received.\");for(var o=0,a=r.length;o<a;o++){var s=r[o];s.onLoad&&s.onLoad(n)}i.manager.itemEnd(t)}else{for(o=0,a=r.length;o<a;o++){s=r[o];s.onError&&s.onError(e)}i.manager.itemError(t),i.manager.itemEnd(t)}},!1),v.addEventListener(\"progress\",function(e){for(var n=ku[t],r=0,i=n.length;r<i;r++){var o=n[r];o.onProgress&&o.onProgress(e)}},!1),v.addEventListener(\"error\",function(e){var n=ku[t];delete ku[t];for(var r=0,o=n.length;r<o;r++){var a=n[r];a.onError&&a.onError(e)}i.manager.itemError(t),i.manager.itemEnd(t)},!1),v.addEventListener(\"abort\",function(e){var n=ku[t];delete ku[t];for(var r=0,o=n.length;r<o;r++){var a=n[r];a.onError&&a.onError(e)}i.manager.itemError(t),i.manager.itemEnd(t)},!1),void 0!==this.responseType&&(v.responseType=this.responseType),void 0!==this.withCredentials&&(v.withCredentials=this.withCredentials),v.overrideMimeType&&v.overrideMimeType(void 0!==this.mimeType?this.mimeType:\"text/plain\"),this.requestHeader)v.setRequestHeader(g,this.requestHeader[g]);v.send(null)}return i.manager.itemStart(t),v}ku[t].push({onLoad:e,onProgress:n,onError:r})},setPath:function(t){return this.path=t,this},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}}),Object.assign(Wu.prototype,{load:function(t,e,n,r){var i=this,o=new Vu(i.manager);o.setPath(i.path),o.load(t,function(t){e(i.parse(JSON.parse(t)))},n,r)},parse:function(t){for(var e=[],n=0;n<t.length;n++){var r=zu.parse(t[n]);e.push(r)}return e},setPath:function(t){return this.path=t,this}}),Object.assign(qu.prototype,{load:function(t,e,n,r){var i=this,o=[],a=new Vs;a.image=o;var s=new Vu(this.manager);function c(c){s.load(t[c],function(t){var n=i._parser(t,!0);o[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},u+=1,6===u&&(1===n.mipmapCount&&(a.minFilter=Wt),a.format=n.format,a.needsUpdate=!0,e&&e(a))},n,r)}if(s.setPath(this.path),s.setResponseType(\"arraybuffer\"),Array.isArray(t))for(var u=0,l=0,h=t.length;l<h;++l)c(l);else s.load(t,function(t){var n=i._parser(t,!0);if(n.isCubemap)for(var r=n.mipmaps.length/n.mipmapCount,s=0;s<r;s++){o[s]={mipmaps:[]};for(var c=0;c<n.mipmapCount;c++)o[s].mipmaps.push(n.mipmaps[s*n.mipmapCount+c]),o[s].format=n.format,o[s].width=n.width,o[s].height=n.height}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps;1===n.mipmapCount&&(a.minFilter=Wt),a.format=n.format,a.needsUpdate=!0,e&&e(a)},n,r);return a},setPath:function(t){return this.path=t,this}}),Object.assign(Xu.prototype,{load:function(t,e,n,r){var i=this,o=new wn,a=new Vu(this.manager);return a.setResponseType(\"arraybuffer\"),a.setPath(this.path),a.load(t,function(t){var n=i._parser(t);n&&(void 0!==n.image?o.image=n.image:void 0!==n.data&&(o.image.width=n.width,o.image.height=n.height,o.image.data=n.data),o.wrapS=void 0!==n.wrapS?n.wrapS:Ft,o.wrapT=void 0!==n.wrapT?n.wrapT:Ft,o.magFilter=void 0!==n.magFilter?n.magFilter:Wt,o.minFilter=void 0!==n.minFilter?n.minFilter:Xt,o.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.format&&(o.format=n.format),void 0!==n.type&&(o.type=n.type),void 0!==n.mipmaps&&(o.mipmaps=n.mipmaps),1===n.mipmapCount&&(o.minFilter=Wt),o.needsUpdate=!0,e&&e(o,n))},n,r),o},setPath:function(t){return this.path=t,this}}),Object.assign(Yu.prototype,{crossOrigin:\"anonymous\",load:function(t,e,n,r){void 0===t&&(t=\"\"),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var i=this,o=Fu.get(t);if(void 0!==o)return i.manager.itemStart(t),setTimeout(function(){e&&e(o),i.manager.itemEnd(t)},0),o;var a=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"img\");function s(){a.removeEventListener(\"load\",s,!1),a.removeEventListener(\"error\",c,!1),Fu.add(t,this),e&&e(this),i.manager.itemEnd(t)}function c(e){a.removeEventListener(\"load\",s,!1),a.removeEventListener(\"error\",c,!1),r&&r(e),i.manager.itemError(t),i.manager.itemEnd(t)}return a.addEventListener(\"load\",s,!1),a.addEventListener(\"error\",c,!1),\"data:\"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),i.manager.itemStart(t),a.src=t,a},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Ju.prototype,{crossOrigin:\"anonymous\",load:function(t,e,n,r){var i=new Fo,o=new Yu(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);var a=0;function s(n){o.load(t[n],function(t){i.images[n]=t,a++,6===a&&(i.needsUpdate=!0,e&&e(i))},void 0,r)}for(var c=0;c<t.length;++c)s(c);return i},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Zu.prototype,{crossOrigin:\"anonymous\",load:function(t,e,n,r){var i=new vn,o=new Yu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(n){i.image=n;var r=t.search(/\\.jpe?g($|\\?)/i)>0||0===t.search(/^data\\:image\\/jpeg/);i.format=r?se:ce,i.needsUpdate=!0,void 0!==e&&e(i)},n,r),i},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this}}),Object.assign(Qu.prototype,{getPoint:function(){return console.warn(\"THREE.Curve: .getPoint() not implemented.\"),null},getPointAt:function(t,e){var n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){void 0===t&&(t=5);for(var e=[],n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,n,r=[],i=this.getPoint(0),o=0;for(r.push(0),n=1;n<=t;n++)e=this.getPoint(n/t),o+=e.distanceTo(i),r.push(o),i=e;return this.cacheArcLengths=r,r},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){var n,r=this.getLengths(),i=0,o=r.length;n=e||t*r[o-1];var a,s=0,c=o-1;while(s<=c)if(i=Math.floor(s+(c-s)/2),a=r[i]-n,a<0)s=i+1;else{if(!(a>0)){c=i;break}c=i-1}if(i=c,r[i]===n)return i/(o-1);var u=r[i],l=r[i+1],h=l-u,p=(n-u)/h,d=(i+p)/(o-1);return d},getTangent:function(t){var e=1e-4,n=t-e,r=t+e;n<0&&(n=0),r>1&&(r=1);var i=this.getPoint(n),o=this.getPoint(r),a=o.clone().sub(i);return a.normalize()},getTangentAt:function(t){var e=this.getUtoTmapping(t);return this.getTangent(e)},computeFrenetFrames:function(t,e){var n,r,i,o=new pn,a=[],s=[],c=[],u=new pn,l=new Tn;for(n=0;n<=t;n++)r=n/t,a[n]=this.getTangentAt(r),a[n].normalize();s[0]=new pn,c[0]=new pn;var h=Number.MAX_VALUE,p=Math.abs(a[0].x),d=Math.abs(a[0].y),f=Math.abs(a[0].z);for(p<=h&&(h=p,o.set(1,0,0)),d<=h&&(h=d,o.set(0,1,0)),f<=h&&o.set(0,0,1),u.crossVectors(a[0],o).normalize(),s[0].crossVectors(a[0],u),c[0].crossVectors(a[0],s[0]),n=1;n<=t;n++)s[n]=s[n-1].clone(),c[n]=c[n-1].clone(),u.crossVectors(a[n-1],a[n]),u.length()>Number.EPSILON&&(u.normalize(),i=Math.acos(un.clamp(a[n-1].dot(a[n]),-1,1)),s[n].applyMatrix4(l.makeRotationAxis(u,i))),c[n].crossVectors(a[n],s[n]);if(!0===e)for(i=Math.acos(un.clamp(s[0].dot(s[t]),-1,1)),i/=t,a[0].dot(u.crossVectors(s[0],s[t]))>0&&(i=-i),n=1;n<=t;n++)s[n].applyMatrix4(l.makeRotationAxis(a[n],i*n)),c[n].crossVectors(a[n],s[n]);return{tangents:a,normals:s,binormals:c}},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){var t={metadata:{version:4.5,type:\"Curve\",generator:\"Curve.toJSON\"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),Ku.prototype=Object.create(Qu.prototype),Ku.prototype.constructor=Ku,Ku.prototype.isEllipseCurve=!0,Ku.prototype.getPoint=function(t,e){var n=e||new ln,r=2*Math.PI,i=this.aEndAngle-this.aStartAngle,o=Math.abs(i)<Number.EPSILON;while(i<0)i+=r;while(i>r)i-=r;i<Number.EPSILON&&(i=o?0:r),!0!==this.aClockwise||o||(i===r?i=-r:i-=r);var a=this.aStartAngle+t*i,s=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){var u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=s-this.aX,p=c-this.aY;s=h*u-p*l+this.aX,c=h*l+p*u+this.aY}return n.set(s,c)},Ku.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Ku.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},Ku.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},$u.prototype=Object.create(Ku.prototype),$u.prototype.constructor=$u,$u.prototype.isArcCurve=!0;var el=new pn,nl=new tl,rl=new tl,il=new tl;function ol(t,e,n,r){Qu.call(this),this.type=\"CatmullRomCurve3\",this.points=t||[],this.closed=e||!1,this.curveType=n||\"centripetal\",this.tension=r||.5}function al(t,e,n,r,i){var o=.5*(r-e),a=.5*(i-n),s=t*t,c=t*s;return(2*n-2*r+o+a)*c+(-3*n+3*r-2*o-a)*s+o*t+n}function sl(t,e){var n=1-t;return n*n*e}function cl(t,e){return 2*(1-t)*t*e}function ul(t,e){return t*t*e}function ll(t,e,n,r){return sl(t,e)+cl(t,n)+ul(t,r)}function hl(t,e){var n=1-t;return n*n*n*e}function pl(t,e){var n=1-t;return 3*n*n*t*e}function dl(t,e){return 3*(1-t)*t*t*e}function fl(t,e){return t*t*t*e}function ml(t,e,n,r,i){return hl(t,e)+pl(t,n)+dl(t,r)+fl(t,i)}function vl(t,e,n,r){Qu.call(this),this.type=\"CubicBezierCurve\",this.v0=t||new ln,this.v1=e||new ln,this.v2=n||new ln,this.v3=r||new ln}function gl(t,e,n,r){Qu.call(this),this.type=\"CubicBezierCurve3\",this.v0=t||new pn,this.v1=e||new pn,this.v2=n||new pn,this.v3=r||new pn}function yl(t,e){Qu.call(this),this.type=\"LineCurve\",this.v1=t||new ln,this.v2=e||new ln}function xl(t,e){Qu.call(this),this.type=\"LineCurve3\",this.v1=t||new pn,this.v2=e||new pn}function bl(t,e,n){Qu.call(this),this.type=\"QuadraticBezierCurve\",this.v0=t||new ln,this.v1=e||new ln,this.v2=n||new ln}function wl(t,e,n){Qu.call(this),this.type=\"QuadraticBezierCurve3\",this.v0=t||new pn,this.v1=e||new pn,this.v2=n||new pn}function _l(t){Qu.call(this),this.type=\"SplineCurve\",this.points=t||[]}ol.prototype=Object.create(Qu.prototype),ol.prototype.constructor=ol,ol.prototype.isCatmullRomCurve3=!0,ol.prototype.getPoint=function(t,e){var n,r,i,o,a=e||new pn,s=this.points,c=s.length,u=(c-(this.closed?0:1))*t,l=Math.floor(u),h=u-l;if(this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/c)+1)*c:0===h&&l===c-1&&(l=c-2,h=1),this.closed||l>0?n=s[(l-1)%c]:(el.subVectors(s[0],s[1]).add(s[0]),n=el),r=s[l%c],i=s[(l+1)%c],this.closed||l+2<c?o=s[(l+2)%c]:(el.subVectors(s[c-1],s[c-2]).add(s[c-1]),o=el),\"centripetal\"===this.curveType||\"chordal\"===this.curveType){var p=\"chordal\"===this.curveType?.5:.25,d=Math.pow(n.distanceToSquared(r),p),f=Math.pow(r.distanceToSquared(i),p),m=Math.pow(i.distanceToSquared(o),p);f<1e-4&&(f=1),d<1e-4&&(d=f),m<1e-4&&(m=f),nl.initNonuniformCatmullRom(n.x,r.x,i.x,o.x,d,f,m),rl.initNonuniformCatmullRom(n.y,r.y,i.y,o.y,d,f,m),il.initNonuniformCatmullRom(n.z,r.z,i.z,o.z,d,f,m)}else\"catmullrom\"===this.curveType&&(nl.initCatmullRom(n.x,r.x,i.x,o.x,this.tension),rl.initCatmullRom(n.y,r.y,i.y,o.y,this.tension),il.initCatmullRom(n.z,r.z,i.z,o.z,this.tension));return a.set(nl.calc(h),rl.calc(h),il.calc(h)),a},ol.prototype.copy=function(t){Qu.prototype.copy.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},ol.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);t.points=[];for(var e=0,n=this.points.length;e<n;e++){var r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},ol.prototype.fromJSON=function(t){Qu.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var r=t.points[e];this.points.push((new pn).fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},vl.prototype=Object.create(Qu.prototype),vl.prototype.constructor=vl,vl.prototype.isCubicBezierCurve=!0,vl.prototype.getPoint=function(t,e){var n=e||new ln,r=this.v0,i=this.v1,o=this.v2,a=this.v3;return n.set(ml(t,r.x,i.x,o.x,a.x),ml(t,r.y,i.y,o.y,a.y)),n},vl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},vl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},vl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},gl.prototype=Object.create(Qu.prototype),gl.prototype.constructor=gl,gl.prototype.isCubicBezierCurve3=!0,gl.prototype.getPoint=function(t,e){var n=e||new pn,r=this.v0,i=this.v1,o=this.v2,a=this.v3;return n.set(ml(t,r.x,i.x,o.x,a.x),ml(t,r.y,i.y,o.y,a.y),ml(t,r.z,i.z,o.z,a.z)),n},gl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},gl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},gl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},yl.prototype=Object.create(Qu.prototype),yl.prototype.constructor=yl,yl.prototype.isLineCurve=!0,yl.prototype.getPoint=function(t,e){var n=e||new ln;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},yl.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},yl.prototype.getTangent=function(){var t=this.v2.clone().sub(this.v1);return t.normalize()},yl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},yl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},yl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},xl.prototype=Object.create(Qu.prototype),xl.prototype.constructor=xl,xl.prototype.isLineCurve3=!0,xl.prototype.getPoint=function(t,e){var n=e||new pn;return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},xl.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},xl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},xl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},xl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},bl.prototype=Object.create(Qu.prototype),bl.prototype.constructor=bl,bl.prototype.isQuadraticBezierCurve=!0,bl.prototype.getPoint=function(t,e){var n=e||new ln,r=this.v0,i=this.v1,o=this.v2;return n.set(ll(t,r.x,i.x,o.x),ll(t,r.y,i.y,o.y)),n},bl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},bl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},bl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},wl.prototype=Object.create(Qu.prototype),wl.prototype.constructor=wl,wl.prototype.isQuadraticBezierCurve3=!0,wl.prototype.getPoint=function(t,e){var n=e||new pn,r=this.v0,i=this.v1,o=this.v2;return n.set(ll(t,r.x,i.x,o.x),ll(t,r.y,i.y,o.y),ll(t,r.z,i.z,o.z)),n},wl.prototype.copy=function(t){return Qu.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},wl.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},wl.prototype.fromJSON=function(t){return Qu.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},_l.prototype=Object.create(Qu.prototype),_l.prototype.constructor=_l,_l.prototype.isSplineCurve=!0,_l.prototype.getPoint=function(t,e){var n=e||new ln,r=this.points,i=(r.length-1)*t,o=Math.floor(i),a=i-o,s=r[0===o?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],l=r[o>r.length-3?r.length-1:o+2];return n.set(al(a,s.x,c.x,u.x,l.x),al(a,s.y,c.y,u.y,l.y)),n},_l.prototype.copy=function(t){Qu.prototype.copy.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var r=t.points[e];this.points.push(r.clone())}return this},_l.prototype.toJSON=function(){var t=Qu.prototype.toJSON.call(this);t.points=[];for(var e=0,n=this.points.length;e<n;e++){var r=this.points[e];t.points.push(r.toArray())}return t},_l.prototype.fromJSON=function(t){Qu.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,n=t.points.length;e<n;e++){var r=t.points[e];this.points.push((new ln).fromArray(r))}return this};var Ml=Object.freeze({ArcCurve:$u,CatmullRomCurve3:ol,CubicBezierCurve:vl,CubicBezierCurve3:gl,EllipseCurve:Ku,LineCurve:yl,LineCurve3:xl,QuadraticBezierCurve:bl,QuadraticBezierCurve3:wl,SplineCurve:_l});function Sl(){Qu.call(this),this.type=\"CurvePath\",this.curves=[],this.autoClose=!1}function El(t){Sl.call(this),this.type=\"Path\",this.currentPoint=new ln,t&&this.setFromPoints(t)}function Tl(t){El.call(this,t),this.uuid=un.generateUUID(),this.type=\"Shape\",this.holes=[]}function Al(t,e){Ki.call(this),this.type=\"Light\",this.color=new ki(t),this.intensity=void 0!==e?e:1,this.receiveShadow=void 0}function Ll(t,e,n){Al.call(this,t,n),this.type=\"HemisphereLight\",this.castShadow=void 0,this.position.copy(Ki.DefaultUp),this.updateMatrix(),this.groundColor=new ki(e)}function Pl(t){this.camera=t,this.bias=0,this.radius=1,this.mapSize=new ln(512,512),this.map=null,this.matrix=new Tn}function Rl(){Pl.call(this,new gs(50,1,.5,500))}function Cl(t,e,n,r,i,o){Al.call(this,t,e),this.type=\"SpotLight\",this.position.copy(Ki.DefaultUp),this.updateMatrix(),this.target=new Ki,Object.defineProperty(this,\"power\",{get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI}}),this.distance=void 0!==n?n:0,this.angle=void 0!==r?r:Math.PI/3,this.penumbra=void 0!==i?i:0,this.decay=void 0!==o?o:1,this.shadow=new Rl}function Ol(t,e,n,r){Al.call(this,t,e),this.type=\"PointLight\",Object.defineProperty(this,\"power\",{get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI)}}),this.distance=void 0!==n?n:0,this.decay=void 0!==r?r:1,this.shadow=new Pl(new gs(90,1,.5,500))}function Il(t,e,n,r,i,o){vs.call(this),this.type=\"OrthographicCamera\",this.zoom=1,this.view=null,this.left=void 0!==t?t:-1,this.right=void 0!==e?e:1,this.top=void 0!==n?n:1,this.bottom=void 0!==r?r:-1,this.near=void 0!==i?i:.1,this.far=void 0!==o?o:2e3,this.updateProjectionMatrix()}function Dl(){Pl.call(this,new Il(-5,5,5,-5,.5,500))}function Nl(t,e){Al.call(this,t,e),this.type=\"DirectionalLight\",this.position.copy(Ki.DefaultUp),this.updateMatrix(),this.target=new Ki,this.shadow=new Dl}function Bl(t,e){Al.call(this,t,e),this.type=\"AmbientLight\",this.castShadow=void 0}function zl(t,e,n,r){Al.call(this,t,e),this.type=\"RectAreaLight\",this.width=void 0!==n?n:10,this.height=void 0!==r?r:10}function Ul(t){this.manager=void 0!==t?t:ju,this.textures={}}Sl.prototype=Object.assign(Object.create(Qu.prototype),{constructor:Sl,add:function(t){this.curves.push(t)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new yl(e,t))},getPoint:function(t){var e=t*this.getLength(),n=this.getCurveLengths(),r=0;while(r<n.length){if(n[r]>=e){var i=n[r]-e,o=this.curves[r],a=o.getLength(),s=0===a?0:1-i/a;return o.getPointAt(s)}r++}return null},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;for(var e,n=[],r=0,i=this.curves;r<i.length;r++)for(var o=i[r],a=o&&o.isEllipseCurve?2*t:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?t*o.points.length:t,s=o.getPoints(a),c=0;c<s.length;c++){var u=s[c];e&&e.equals(u)||(n.push(u),e=u)}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n},copy:function(t){Qu.prototype.copy.call(this,t),this.curves=[];for(var e=0,n=t.curves.length;e<n;e++){var r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){var t=Qu.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(var e=0,n=this.curves.length;e<n;e++){var r=this.curves[e];t.curves.push(r.toJSON())}return t},fromJSON:function(t){Qu.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(var e=0,n=t.curves.length;e<n;e++){var r=t.curves[e];this.curves.push((new Ml[r.type]).fromJSON(r))}return this}}),El.prototype=Object.assign(Object.create(Sl.prototype),{constructor:El,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y)},moveTo:function(t,e){this.currentPoint.set(t,e)},lineTo:function(t,e){var n=new yl(this.currentPoint.clone(),new ln(t,e));this.curves.push(n),this.currentPoint.set(t,e)},quadraticCurveTo:function(t,e,n,r){var i=new bl(this.currentPoint.clone(),new ln(t,e),new ln(n,r));this.curves.push(i),this.currentPoint.set(n,r)},bezierCurveTo:function(t,e,n,r,i,o){var a=new vl(this.currentPoint.clone(),new ln(t,e),new ln(n,r),new ln(i,o));this.curves.push(a),this.currentPoint.set(i,o)},splineThru:function(t){var e=[this.currentPoint.clone()].concat(t),n=new _l(e);this.curves.push(n),this.currentPoint.copy(t[t.length-1])},arc:function(t,e,n,r,i,o){var a=this.currentPoint.x,s=this.currentPoint.y;this.absarc(t+a,e+s,n,r,i,o)},absarc:function(t,e,n,r,i,o){this.absellipse(t,e,n,n,r,i,o)},ellipse:function(t,e,n,r,i,o,a,s){var c=this.currentPoint.x,u=this.currentPoint.y;this.absellipse(t+c,e+u,n,r,i,o,a,s)},absellipse:function(t,e,n,r,i,o,a,s){var c=new Ku(t,e,n,r,i,o,a,s);if(this.curves.length>0){var u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);var l=c.getPoint(1);this.currentPoint.copy(l)},copy:function(t){return Sl.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){var t=Sl.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return Sl.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),Tl.prototype=Object.assign(Object.create(El.prototype),{constructor:Tl,getPointsHoles:function(t){for(var e=[],n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){El.prototype.copy.call(this,t),this.holes=[];for(var e=0,n=t.holes.length;e<n;e++){var r=t.holes[e];this.holes.push(r.clone())}return this},toJSON:function(){var t=El.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(var e=0,n=this.holes.length;e<n;e++){var r=this.holes[e];t.holes.push(r.toJSON())}return t},fromJSON:function(t){El.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(var e=0,n=t.holes.length;e<n;e++){var r=t.holes[e];this.holes.push((new El).fromJSON(r))}return this}}),Al.prototype=Object.assign(Object.create(Ki.prototype),{constructor:Al,isLight:!0,copy:function(t){return Ki.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=Ki.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),Ll.prototype=Object.assign(Object.create(Al.prototype),{constructor:Ll,isHemisphereLight:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(Pl.prototype,{copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t={};return 0!==this.bias&&(t.bias=this.bias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),Rl.prototype=Object.assign(Object.create(Pl.prototype),{constructor:Rl,isSpotLightShadow:!0,update:function(t){var e=this.camera,n=2*un.RAD2DEG*t.angle,r=this.mapSize.width/this.mapSize.height,i=t.distance||e.far;n===e.fov&&r===e.aspect&&i===e.far||(e.fov=n,e.aspect=r,e.far=i,e.updateProjectionMatrix())}}),Cl.prototype=Object.assign(Object.create(Al.prototype),{constructor:Cl,isSpotLight:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Ol.prototype=Object.assign(Object.create(Al.prototype),{constructor:Ol,isPointLight:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),Il.prototype=Object.assign(Object.create(vs.prototype),{constructor:Il,isOrthographicCamera:!0,copy:function(t,e){return vs.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,r,i,o){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-t,o=n+t,a=r+e,s=r-e;if(null!==this.view&&this.view.enabled){var c=this.zoom/(this.view.width/this.view.fullWidth),u=this.zoom/(this.view.height/this.view.fullHeight),l=(this.right-this.left)/this.view.width,h=(this.top-this.bottom)/this.view.height;i+=l*(this.view.offsetX/c),o=i+l*(this.view.width/c),a-=h*(this.view.offsetY/u),s=a-h*(this.view.height/u)}this.projectionMatrix.makeOrthographic(i,o,a,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var e=Ki.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}),Dl.prototype=Object.assign(Object.create(Pl.prototype),{constructor:Dl}),Nl.prototype=Object.assign(Object.create(Al.prototype),{constructor:Nl,isDirectionalLight:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Bl.prototype=Object.assign(Object.create(Al.prototype),{constructor:Bl,isAmbientLight:!0}),zl.prototype=Object.assign(Object.create(Al.prototype),{constructor:zl,isRectAreaLight:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){var e=Al.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}}),Object.assign(Ul.prototype,{load:function(t,e,n,r){var i=this,o=new Vu(i.manager);o.setPath(i.path),o.load(t,function(t){e(i.parse(JSON.parse(t)))},n,r)},parse:function(t){var e=this.textures;function n(t){return void 0===e[t]&&console.warn(\"THREE.MaterialLoader: Undefined texture\",t),e[t]}var r=new Mu[t.type];if(void 0!==t.uuid&&(r.uuid=t.uuid),void 0!==t.name&&(r.name=t.name),void 0!==t.color&&r.color.setHex(t.color),void 0!==t.roughness&&(r.roughness=t.roughness),void 0!==t.metalness&&(r.metalness=t.metalness),void 0!==t.emissive&&r.emissive.setHex(t.emissive),void 0!==t.specular&&r.specular.setHex(t.specular),void 0!==t.shininess&&(r.shininess=t.shininess),void 0!==t.clearCoat&&(r.clearCoat=t.clearCoat),void 0!==t.clearCoatRoughness&&(r.clearCoatRoughness=t.clearCoatRoughness),void 0!==t.vertexColors&&(r.vertexColors=t.vertexColors),void 0!==t.fog&&(r.fog=t.fog),void 0!==t.flatShading&&(r.flatShading=t.flatShading),void 0!==t.blending&&(r.blending=t.blending),void 0!==t.combine&&(r.combine=t.combine),void 0!==t.side&&(r.side=t.side),void 0!==t.opacity&&(r.opacity=t.opacity),void 0!==t.transparent&&(r.transparent=t.transparent),void 0!==t.alphaTest&&(r.alphaTest=t.alphaTest),void 0!==t.depthTest&&(r.depthTest=t.depthTest),void 0!==t.depthWrite&&(r.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(r.colorWrite=t.colorWrite),void 0!==t.wireframe&&(r.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(r.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(r.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(r.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(r.rotation=t.rotation),1!==t.linewidth&&(r.linewidth=t.linewidth),void 0!==t.dashSize&&(r.dashSize=t.dashSize),void 0!==t.gapSize&&(r.gapSize=t.gapSize),void 0!==t.scale&&(r.scale=t.scale),void 0!==t.polygonOffset&&(r.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(r.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(r.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.skinning&&(r.skinning=t.skinning),void 0!==t.morphTargets&&(r.morphTargets=t.morphTargets),void 0!==t.dithering&&(r.dithering=t.dithering),void 0!==t.visible&&(r.visible=t.visible),void 0!==t.userData&&(r.userData=t.userData),void 0!==t.uniforms)for(var i in t.uniforms){var o=t.uniforms[i];switch(r.uniforms[i]={},o.type){case\"t\":r.uniforms[i].value=n(o.value);break;case\"c\":r.uniforms[i].value=(new ki).setHex(o.value);break;case\"v2\":r.uniforms[i].value=(new ln).fromArray(o.value);break;case\"v3\":r.uniforms[i].value=(new pn).fromArray(o.value);break;case\"v4\":r.uniforms[i].value=(new gn).fromArray(o.value);break;case\"m3\":r.uniforms[i].value=(new dn).fromArray(o.value);case\"m4\":r.uniforms[i].value=(new Tn).fromArray(o.value);break;default:r.uniforms[i].value=o.value}}if(void 0!==t.defines&&(r.defines=t.defines),void 0!==t.vertexShader&&(r.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(r.fragmentShader=t.fragmentShader),void 0!==t.extensions)for(var a in t.extensions)r.extensions[a]=t.extensions[a];if(void 0!==t.shading&&(r.flatShading=1===t.shading),void 0!==t.size&&(r.size=t.size),void 0!==t.sizeAttenuation&&(r.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(r.map=n(t.map)),void 0!==t.matcap&&(r.matcap=n(t.matcap)),void 0!==t.alphaMap&&(r.alphaMap=n(t.alphaMap),r.transparent=!0),void 0!==t.bumpMap&&(r.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(r.bumpScale=t.bumpScale),void 0!==t.normalMap&&(r.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(r.normalMapType=t.normalMapType),void 0!==t.normalScale){var s=t.normalScale;!1===Array.isArray(s)&&(s=[s,s]),r.normalScale=(new ln).fromArray(s)}return void 0!==t.displacementMap&&(r.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(r.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(r.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(r.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(r.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(r.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(r.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(r.specularMap=n(t.specularMap)),void 0!==t.envMap&&(r.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(r.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(r.reflectivity=t.reflectivity),void 0!==t.lightMap&&(r.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(r.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(r.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(r.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(r.gradientMap=n(t.gradientMap)),r},setPath:function(t){return this.path=t,this},setTextures:function(t){return this.textures=t,this}});var Gl={decodeText:function(t){if(\"undefined\"!==typeof TextDecoder)return(new TextDecoder).decode(t);for(var e=\"\",n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);return decodeURIComponent(escape(e))},extractUrlBase:function(t){var e=t.lastIndexOf(\"/\");return-1===e?\"./\":t.substr(0,e+1)}};function Fl(t){this.manager=void 0!==t?t:ju}Object.assign(Fl.prototype,{load:function(t,e,n,r){var i=this,o=new Vu(i.manager);o.setPath(i.path),o.load(t,function(t){e(i.parse(JSON.parse(t)))},n,r)},parse:function(t){var e=new mo,n=t.data.index;if(void 0!==n){var r=new Hl[n.type](n.array);e.setIndex(new eo(r,1))}var i=t.data.attributes;for(var o in i){var a=i[o],s=(r=new Hl[a.type](a.array),new eo(r,a.itemSize,a.normalized));void 0!==a.name&&(s.name=a.name),e.addAttribute(o,s)}var c=t.data.morphAttributes;if(c)for(var o in c){for(var u=c[o],l=[],h=0,p=u.length;h<p;h++){a=u[h],r=new Hl[a.type](a.array),s=new eo(r,a.itemSize,a.normalized);void 0!==a.name&&(s.name=a.name),l.push(s)}e.morphAttributes[o]=l}var d=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==d){h=0;for(var f=d.length;h!==f;++h){var m=d[h];e.addGroup(m.start,m.count,m.materialIndex)}}var v=t.data.boundingSphere;if(void 0!==v){var g=new pn;void 0!==v.center&&g.fromArray(v.center),e.boundingSphere=new Mn(g,v.radius)}return t.name&&(e.name=t.name),t.userData&&(e.userData=t.userData),e},setPath:function(t){return this.path=t,this}});var Hl={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:\"undefined\"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function jl(t){this.manager=void 0!==t?t:ju,this.resourcePath=\"\"}Object.assign(jl.prototype,{crossOrigin:\"anonymous\",load:function(t,e,n,r){var i=this,o=void 0===this.path?Gl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;var a=new Vu(i.manager);a.setPath(this.path),a.load(t,function(n){var o=null;try{o=JSON.parse(n)}catch(s){return void 0!==r&&r(s),void console.error(\"THREE:ObjectLoader: Can't parse \"+t+\".\",s.message)}var a=o.metadata;void 0!==a&&void 0!==a.type&&\"geometry\"!==a.type.toLowerCase()?i.parse(o,e):console.error(\"THREE.ObjectLoader: Can't load \"+t)},n,r)},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setCrossOrigin:function(t){return this.crossOrigin=t,this},parse:function(t,e){var n=this.parseShape(t.shapes),r=this.parseGeometries(t.geometries,n),i=this.parseImages(t.images,function(){void 0!==e&&e(s)}),o=this.parseTextures(t.textures,i),a=this.parseMaterials(t.materials,o),s=this.parseObject(t.object,r,a);return t.animations&&(s.animations=this.parseAnimations(t.animations)),void 0!==t.images&&0!==t.images.length||void 0!==e&&e(s),s},parseShape:function(t){var e={};if(void 0!==t)for(var n=0,r=t.length;n<r;n++){var i=(new Tl).fromJSON(t[n]);e[i.uuid]=i}return e},parseGeometries:function(t,e){var n={};if(void 0!==t)for(var r=new Fl,i=0,o=t.length;i<o;i++){var a,s=t[i];switch(s.type){case\"PlaneGeometry\":case\"PlaneBufferGeometry\":a=new pu[s.type](s.width,s.height,s.widthSegments,s.heightSegments);break;case\"BoxGeometry\":case\"BoxBufferGeometry\":case\"CubeGeometry\":a=new pu[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);break;case\"CircleGeometry\":case\"CircleBufferGeometry\":a=new pu[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);break;case\"CylinderGeometry\":case\"CylinderBufferGeometry\":a=new pu[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case\"ConeGeometry\":case\"ConeBufferGeometry\":a=new pu[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);break;case\"SphereGeometry\":case\"SphereBufferGeometry\":a=new pu[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);break;case\"DodecahedronGeometry\":case\"DodecahedronBufferGeometry\":case\"IcosahedronGeometry\":case\"IcosahedronBufferGeometry\":case\"OctahedronGeometry\":case\"OctahedronBufferGeometry\":case\"TetrahedronGeometry\":case\"TetrahedronBufferGeometry\":a=new pu[s.type](s.radius,s.detail);break;case\"RingGeometry\":case\"RingBufferGeometry\":a=new pu[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);break;case\"TorusGeometry\":case\"TorusBufferGeometry\":a=new pu[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);break;case\"TorusKnotGeometry\":case\"TorusKnotBufferGeometry\":a=new pu[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);break;case\"TubeGeometry\":case\"TubeBufferGeometry\":a=new pu[s.type]((new Ml[s.path.type]).fromJSON(s.path),s.tubularSegments,s.radius,s.radialSegments,s.closed);break;case\"LatheGeometry\":case\"LatheBufferGeometry\":a=new pu[s.type](s.points,s.segments,s.phiStart,s.phiLength);break;case\"PolyhedronGeometry\":case\"PolyhedronBufferGeometry\":a=new pu[s.type](s.vertices,s.indices,s.radius,s.details);break;case\"ShapeGeometry\":case\"ShapeBufferGeometry\":for(var c=[],u=0,l=s.shapes.length;u<l;u++){var h=e[s.shapes[u]];c.push(h)}a=new pu[s.type](c,s.curveSegments);break;case\"ExtrudeGeometry\":case\"ExtrudeBufferGeometry\":for(c=[],u=0,l=s.shapes.length;u<l;u++){h=e[s.shapes[u]];c.push(h)}var p=s.options.extrudePath;void 0!==p&&(s.options.extrudePath=(new Ml[p.type]).fromJSON(p)),a=new pu[s.type](c,s.options);break;case\"BufferGeometry\":a=r.parse(s);break;case\"Geometry\":if(\"THREE\"in window&&\"LegacyJSONLoader\"in THREE){var d=new THREE.LegacyJSONLoader;a=d.parse(s,this.resourcePath).geometry}else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type \"Geometry\".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type \"'+s.type+'\"');continue}a.uuid=s.uuid,void 0!==s.name&&(a.name=s.name),!0===a.isBufferGeometry&&void 0!==s.userData&&(a.userData=s.userData),n[s.uuid]=a}return n},parseMaterials:function(t,e){var n={},r={};if(void 0!==t){var i=new Ul;i.setTextures(e);for(var o=0,a=t.length;o<a;o++){var s=t[o];if(\"MultiMaterial\"===s.type){for(var c=[],u=0;u<s.materials.length;u++){var l=s.materials[u];void 0===n[l.uuid]&&(n[l.uuid]=i.parse(l)),c.push(n[l.uuid])}r[s.uuid]=c}else void 0===n[s.uuid]&&(n[s.uuid]=i.parse(s)),r[s.uuid]=n[s.uuid]}}return r},parseAnimations:function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n],i=zu.parse(r);void 0!==r.uuid&&(i.uuid=r.uuid),e.push(i)}return e},parseImages:function(t,e){var n=this,r={};function i(t){return n.manager.itemStart(t),a.load(t,function(){n.manager.itemEnd(t)},void 0,function(){n.manager.itemError(t),n.manager.itemEnd(t)})}if(void 0!==t&&t.length>0){var o=new Hu(e),a=new Yu(o);a.setCrossOrigin(this.crossOrigin);for(var s=0,c=t.length;s<c;s++){var u=t[s],l=u.url;if(Array.isArray(l)){r[u.uuid]=[];for(var h=0,p=l.length;h<p;h++){var d=l[h],f=/^(\\/\\/)|([a-z]+:(\\/\\/)?)/i.test(d)?d:n.resourcePath+d;r[u.uuid].push(i(f))}}else{f=/^(\\/\\/)|([a-z]+:(\\/\\/)?)/i.test(u.url)?u.url:n.resourcePath+u.url;r[u.uuid]=i(f)}}}return r},parseTextures:function(t,e){function n(t,e){return\"number\"===typeof t?t:(console.warn(\"THREE.ObjectLoader.parseTexture: Constant should be in numeric form.\",t),e[t])}var r={};if(void 0!==t)for(var i=0,o=t.length;i<o;i++){var a,s=t[i];void 0===s.image&&console.warn('THREE.ObjectLoader: No \"image\" specified for',s.uuid),void 0===e[s.image]&&console.warn(\"THREE.ObjectLoader: Undefined image\",s.image),a=Array.isArray(e[s.image])?new Fo(e[s.image]):new vn(e[s.image]),a.needsUpdate=!0,a.uuid=s.uuid,void 0!==s.name&&(a.name=s.name),void 0!==s.mapping&&(a.mapping=n(s.mapping,Vl)),void 0!==s.offset&&a.offset.fromArray(s.offset),void 0!==s.repeat&&a.repeat.fromArray(s.repeat),void 0!==s.center&&a.center.fromArray(s.center),void 0!==s.rotation&&(a.rotation=s.rotation),void 0!==s.wrap&&(a.wrapS=n(s.wrap[0],Wl),a.wrapT=n(s.wrap[1],Wl)),void 0!==s.format&&(a.format=s.format),void 0!==s.type&&(a.type=s.type),void 0!==s.encoding&&(a.encoding=s.encoding),void 0!==s.minFilter&&(a.minFilter=n(s.minFilter,ql)),void 0!==s.magFilter&&(a.magFilter=n(s.magFilter,ql)),void 0!==s.anisotropy&&(a.anisotropy=s.anisotropy),void 0!==s.flipY&&(a.flipY=s.flipY),void 0!==s.premultiplyAlpha&&(a.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(a.unpackAlignment=s.unpackAlignment),r[s.uuid]=a}return r},parseObject:function(t,e,n){var r;function i(t){return void 0===e[t]&&console.warn(\"THREE.ObjectLoader: Undefined geometry\",t),e[t]}function o(t){if(void 0!==t){if(Array.isArray(t)){for(var e=[],r=0,i=t.length;r<i;r++){var o=t[r];void 0===n[o]&&console.warn(\"THREE.ObjectLoader: Undefined material\",o),e.push(n[o])}return e}return void 0===n[t]&&console.warn(\"THREE.ObjectLoader: Undefined material\",t),n[t]}}switch(t.type){case\"Scene\":r=new Ls,void 0!==t.background&&Number.isInteger(t.background)&&(r.background=new ki(t.background)),void 0!==t.fog&&(\"Fog\"===t.fog.type?r.fog=new As(t.fog.color,t.fog.near,t.fog.far):\"FogExp2\"===t.fog.type&&(r.fog=new Ts(t.fog.color,t.fog.density)));break;case\"PerspectiveCamera\":r=new gs(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(r.focus=t.focus),void 0!==t.zoom&&(r.zoom=t.zoom),void 0!==t.filmGauge&&(r.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(r.filmOffset=t.filmOffset),void 0!==t.view&&(r.view=Object.assign({},t.view));break;case\"OrthographicCamera\":r=new Il(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(r.zoom=t.zoom),void 0!==t.view&&(r.view=Object.assign({},t.view));break;case\"AmbientLight\":r=new Bl(t.color,t.intensity);break;case\"DirectionalLight\":r=new Nl(t.color,t.intensity);break;case\"PointLight\":r=new Ol(t.color,t.intensity,t.distance,t.decay);break;case\"RectAreaLight\":r=new zl(t.color,t.intensity,t.width,t.height);break;case\"SpotLight\":r=new Cl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case\"HemisphereLight\":r=new Ll(t.color,t.groundColor,t.intensity);break;case\"SkinnedMesh\":console.warn(\"THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.\");case\"Mesh\":var a=i(t.geometry),s=o(t.material);r=a.bones&&a.bones.length>0?new Ds(a,s):new Lo(a,s),void 0!==t.drawMode&&r.setDrawMode(t.drawMode);break;case\"LOD\":r=new Is;break;case\"Line\":r=new Us(i(t.geometry),o(t.material),t.mode);break;case\"LineLoop\":r=new Fs(i(t.geometry),o(t.material));break;case\"LineSegments\":r=new Gs(i(t.geometry),o(t.material));break;case\"PointCloud\":case\"Points\":r=new js(i(t.geometry),o(t.material));break;case\"Sprite\":r=new Os(o(t.material));break;case\"Group\":r=new ms;break;default:r=new Ki}if(r.uuid=t.uuid,void 0!==t.name&&(r.name=t.name),void 0!==t.matrix?(r.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(r.matrixAutoUpdate=t.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(void 0!==t.position&&r.position.fromArray(t.position),void 0!==t.rotation&&r.rotation.fromArray(t.rotation),void 0!==t.quaternion&&r.quaternion.fromArray(t.quaternion),void 0!==t.scale&&r.scale.fromArray(t.scale)),void 0!==t.castShadow&&(r.castShadow=t.castShadow),void 0!==t.receiveShadow&&(r.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(r.shadow.bias=t.shadow.bias),void 0!==t.shadow.radius&&(r.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&r.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(r.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(r.visible=t.visible),void 0!==t.frustumCulled&&(r.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(r.renderOrder=t.renderOrder),void 0!==t.userData&&(r.userData=t.userData),void 0!==t.layers&&(r.layers.mask=t.layers),void 0!==t.children)for(var c=t.children,u=0;u<c.length;u++)r.add(this.parseObject(c[u],e,n));if(\"LOD\"===t.type)for(var l=t.levels,h=0;h<l.length;h++){var p=l[h],d=r.getObjectByProperty(\"uuid\",p.object);void 0!==d&&r.addLevel(d,p.distance)}return r}});var kl,Vl={UVMapping:Ct,CubeReflectionMapping:Ot,CubeRefractionMapping:It,EquirectangularReflectionMapping:Dt,EquirectangularRefractionMapping:Nt,SphericalReflectionMapping:Bt,CubeUVReflectionMapping:zt,CubeUVRefractionMapping:Ut},Wl={RepeatWrapping:Gt,ClampToEdgeWrapping:Ft,MirroredRepeatWrapping:Ht},ql={NearestFilter:jt,NearestMipMapNearestFilter:kt,NearestMipMapLinearFilter:Vt,LinearFilter:Wt,LinearMipMapNearestFilter:qt,LinearMipMapLinearFilter:Xt};function Xl(t){\"undefined\"===typeof createImageBitmap&&console.warn(\"THREE.ImageBitmapLoader: createImageBitmap() not supported.\"),\"undefined\"===typeof fetch&&console.warn(\"THREE.ImageBitmapLoader: fetch() not supported.\"),this.manager=void 0!==t?t:ju,this.options=void 0}function Yl(){this.type=\"ShapePath\",this.color=new ki,this.subPaths=[],this.currentPath=null}function Jl(t){this.type=\"Font\",this.data=t}function Zl(t,e,n){for(var r=Array.from?Array.from(t):String(t).split(\"\"),i=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*i,a=[],s=0,c=0,u=0;u<r.length;u++){var l=r[u];if(\"\\n\"===l)s=0,c-=o;else{var h=Ql(l,i,s,c,n);s+=h.offsetX,a.push(h.path)}}return a}function Ql(t,e,n,r,i){var o=i.glyphs[t]||i.glyphs[\"?\"];if(o){var a,s,c,u,l,h,p,d,f=new Yl;if(o.o)for(var m=o._cachedOutline||(o._cachedOutline=o.o.split(\" \")),v=0,g=m.length;v<g;){var y=m[v++];switch(y){case\"m\":a=m[v++]*e+n,s=m[v++]*e+r,f.moveTo(a,s);break;case\"l\":a=m[v++]*e+n,s=m[v++]*e+r,f.lineTo(a,s);break;case\"q\":c=m[v++]*e+n,u=m[v++]*e+r,l=m[v++]*e+n,h=m[v++]*e+r,f.quadraticCurveTo(l,h,c,u);break;case\"b\":c=m[v++]*e+n,u=m[v++]*e+r,l=m[v++]*e+n,h=m[v++]*e+r,p=m[v++]*e+n,d=m[v++]*e+r,f.bezierCurveTo(l,h,p,d,c,u);break}}return{offsetX:o.ha*e,path:f}}}function Kl(t){this.manager=void 0!==t?t:ju}function $l(){}Xl.prototype={constructor:Xl,setOptions:function(t){return this.options=t,this},load:function(t,e,n,r){void 0===t&&(t=\"\"),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var i=this,o=Fu.get(t);if(void 0!==o)return i.manager.itemStart(t),setTimeout(function(){e&&e(o),i.manager.itemEnd(t)},0),o;fetch(t).then(function(t){return t.blob()}).then(function(t){return void 0===i.options?createImageBitmap(t):createImageBitmap(t,i.options)}).then(function(n){Fu.add(t,n),e&&e(n),i.manager.itemEnd(t)}).catch(function(e){r&&r(e),i.manager.itemError(t),i.manager.itemEnd(t)}),i.manager.itemStart(t)},setCrossOrigin:function(){return this},setPath:function(t){return this.path=t,this}},Object.assign(Yl.prototype,{moveTo:function(t,e){this.currentPath=new El,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e)},lineTo:function(t,e){this.currentPath.lineTo(t,e)},quadraticCurveTo:function(t,e,n,r){this.currentPath.quadraticCurveTo(t,e,n,r)},bezierCurveTo:function(t,e,n,r,i,o){this.currentPath.bezierCurveTo(t,e,n,r,i,o)},splineThru:function(t){this.currentPath.splineThru(t)},toShapes:function(t,e){function n(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n],o=new Tl;o.curves=i.curves,e.push(o)}return e}function r(t,e){for(var n=e.length,r=!1,i=n-1,o=0;o<n;i=o++){var a=e[i],s=e[o],c=s.x-a.x,u=s.y-a.y;if(Math.abs(u)>Number.EPSILON){if(u<0&&(a=e[o],c=-c,s=e[i],u=-u),t.y<a.y||t.y>s.y)continue;if(t.y===a.y){if(t.x===a.x)return!0}else{var l=u*(t.x-a.x)-c*(t.y-a.y);if(0===l)return!0;if(l<0)continue;r=!r}}else{if(t.y!==a.y)continue;if(s.x<=t.x&&t.x<=a.x||a.x<=t.x&&t.x<=s.x)return!0}}return r}var i=Hc.isClockWise,o=this.subPaths;if(0===o.length)return[];if(!0===e)return n(o);var a,s,c,u=[];if(1===o.length)return s=o[0],c=new Tl,c.curves=s.curves,u.push(c),u;var l=!i(o[0].getPoints());l=t?!l:l;var h,p,d=[],f=[],m=[],v=0;f[v]=void 0,m[v]=[];for(var g=0,y=o.length;g<y;g++)s=o[g],h=s.getPoints(),a=i(h),a=t?!a:a,a?(!l&&f[v]&&v++,f[v]={s:new Tl,p:h},f[v].s.curves=s.curves,l&&v++,m[v]=[]):m[v].push({h:s,p:h[0]});if(!f[0])return n(o);if(f.length>1){for(var x=!1,b=[],w=0,_=f.length;w<_;w++)d[w]=[];for(w=0,_=f.length;w<_;w++)for(var M=m[w],S=0;S<M.length;S++){for(var E=M[S],T=!0,A=0;A<f.length;A++)r(E.p,f[A].p)&&(w!==A&&b.push({froms:w,tos:A,hole:S}),T?(T=!1,d[A].push(E)):x=!0);T&&d[w].push(E)}b.length>0&&(x||(m=d))}g=0;for(var L=f.length;g<L;g++){c=f[g].s,u.push(c),p=m[g];for(var P=0,R=p.length;P<R;P++)c.holes.push(p[P].h)}return u}}),Object.assign(Jl.prototype,{isFont:!0,generateShapes:function(t,e){void 0===e&&(e=100);for(var n=[],r=Zl(t,e,this.data),i=0,o=r.length;i<o;i++)Array.prototype.push.apply(n,r[i].toShapes());return n}}),Object.assign(Kl.prototype,{load:function(t,e,n,r){var i=this,o=new Vu(this.manager);o.setPath(this.path),o.load(t,function(t){var n;try{n=JSON.parse(t)}catch(o){console.warn(\"THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.\"),n=JSON.parse(t.substring(65,t.length-2))}var r=i.parse(n);e&&e(r)},n,r)},parse:function(t){return new Jl(t)},setPath:function(t){return this.path=t,this}}),$l.Handlers={handlers:[],add:function(t,e){this.handlers.push(t,e)},get:function(t){for(var e=this.handlers,n=0,r=e.length;n<r;n+=2){var i=e[n],o=e[n+1];if(i.test(t))return o}return null}},Object.assign($l.prototype,{crossOrigin:\"anonymous\",onLoadStart:function(){},onLoadProgress:function(){},onLoadComplete:function(){},initMaterials:function(t,e,n){for(var r=[],i=0;i<t.length;++i)r[i]=this.createMaterial(t[i],e,n);return r},createMaterial:function(){var t={NoBlending:q,NormalBlending:X,AdditiveBlending:Y,SubtractiveBlending:J,MultiplyBlending:Z,CustomBlending:Q},e=new ki,n=new Zu,r=new Ul;return function(i,o,a){var s={};function c(t,e,r,i,c){var u,l=o+t,h=$l.Handlers.get(l);null!==h?u=h.load(l):(n.setCrossOrigin(a),u=n.load(l)),void 0!==e&&(u.repeat.fromArray(e),1!==e[0]&&(u.wrapS=Gt),1!==e[1]&&(u.wrapT=Gt)),void 0!==r&&u.offset.fromArray(r),void 0!==i&&(\"repeat\"===i[0]&&(u.wrapS=Gt),\"mirror\"===i[0]&&(u.wrapS=Ht),\"repeat\"===i[1]&&(u.wrapT=Gt),\"mirror\"===i[1]&&(u.wrapT=Ht)),void 0!==c&&(u.anisotropy=c);var p=un.generateUUID();return s[p]=u,p}var u={uuid:un.generateUUID(),type:\"MeshLambertMaterial\"};for(var l in i){var h=i[l];switch(l){case\"DbgColor\":case\"DbgIndex\":case\"opticalDensity\":case\"illumination\":break;case\"DbgName\":u.name=h;break;case\"blending\":u.blending=t[h];break;case\"colorAmbient\":case\"mapAmbient\":console.warn(\"THREE.Loader.createMaterial:\",l,\"is no longer supported.\");break;case\"colorDiffuse\":u.color=e.fromArray(h).getHex();break;case\"colorSpecular\":u.specular=e.fromArray(h).getHex();break;case\"colorEmissive\":u.emissive=e.fromArray(h).getHex();break;case\"specularCoef\":u.shininess=h;break;case\"shading\":\"basic\"===h.toLowerCase()&&(u.type=\"MeshBasicMaterial\"),\"phong\"===h.toLowerCase()&&(u.type=\"MeshPhongMaterial\"),\"standard\"===h.toLowerCase()&&(u.type=\"MeshStandardMaterial\");break;case\"mapDiffuse\":u.map=c(h,i.mapDiffuseRepeat,i.mapDiffuseOffset,i.mapDiffuseWrap,i.mapDiffuseAnisotropy);break;case\"mapDiffuseRepeat\":case\"mapDiffuseOffset\":case\"mapDiffuseWrap\":case\"mapDiffuseAnisotropy\":break;case\"mapEmissive\":u.emissiveMap=c(h,i.mapEmissiveRepeat,i.mapEmissiveOffset,i.mapEmissiveWrap,i.mapEmissiveAnisotropy);break;case\"mapEmissiveRepeat\":case\"mapEmissiveOffset\":case\"mapEmissiveWrap\":case\"mapEmissiveAnisotropy\":break;case\"mapLight\":u.lightMap=c(h,i.mapLightRepeat,i.mapLightOffset,i.mapLightWrap,i.mapLightAnisotropy);break;case\"mapLightRepeat\":case\"mapLightOffset\":case\"mapLightWrap\":case\"mapLightAnisotropy\":break;case\"mapAO\":u.aoMap=c(h,i.mapAORepeat,i.mapAOOffset,i.mapAOWrap,i.mapAOAnisotropy);break;case\"mapAORepeat\":case\"mapAOOffset\":case\"mapAOWrap\":case\"mapAOAnisotropy\":break;case\"mapBump\":u.bumpMap=c(h,i.mapBumpRepeat,i.mapBumpOffset,i.mapBumpWrap,i.mapBumpAnisotropy);break;case\"mapBumpScale\":u.bumpScale=h;break;case\"mapBumpRepeat\":case\"mapBumpOffset\":case\"mapBumpWrap\":case\"mapBumpAnisotropy\":break;case\"mapNormal\":u.normalMap=c(h,i.mapNormalRepeat,i.mapNormalOffset,i.mapNormalWrap,i.mapNormalAnisotropy);break;case\"mapNormalFactor\":u.normalScale=h;break;case\"mapNormalRepeat\":case\"mapNormalOffset\":case\"mapNormalWrap\":case\"mapNormalAnisotropy\":break;case\"mapSpecular\":u.specularMap=c(h,i.mapSpecularRepeat,i.mapSpecularOffset,i.mapSpecularWrap,i.mapSpecularAnisotropy);break;case\"mapSpecularRepeat\":case\"mapSpecularOffset\":case\"mapSpecularWrap\":case\"mapSpecularAnisotropy\":break;case\"mapMetalness\":u.metalnessMap=c(h,i.mapMetalnessRepeat,i.mapMetalnessOffset,i.mapMetalnessWrap,i.mapMetalnessAnisotropy);break;case\"mapMetalnessRepeat\":case\"mapMetalnessOffset\":case\"mapMetalnessWrap\":case\"mapMetalnessAnisotropy\":break;case\"mapRoughness\":u.roughnessMap=c(h,i.mapRoughnessRepeat,i.mapRoughnessOffset,i.mapRoughnessWrap,i.mapRoughnessAnisotropy);break;case\"mapRoughnessRepeat\":case\"mapRoughnessOffset\":case\"mapRoughnessWrap\":case\"mapRoughnessAnisotropy\":break;case\"mapAlpha\":u.alphaMap=c(h,i.mapAlphaRepeat,i.mapAlphaOffset,i.mapAlphaWrap,i.mapAlphaAnisotropy);break;case\"mapAlphaRepeat\":case\"mapAlphaOffset\":case\"mapAlphaWrap\":case\"mapAlphaAnisotropy\":break;case\"flipSided\":u.side=G;break;case\"doubleSided\":u.side=F;break;case\"transparency\":console.warn(\"THREE.Loader.createMaterial: transparency has been renamed to opacity\"),u.opacity=h;break;case\"depthTest\":case\"depthWrite\":case\"colorWrite\":case\"opacity\":case\"reflectivity\":case\"transparent\":case\"visible\":case\"wireframe\":u[l]=h;break;case\"vertexColors\":!0===h&&(u.vertexColors=W),\"face\"===h&&(u.vertexColors=V);break;default:console.error(\"THREE.Loader.createMaterial: Unsupported\",l,h);break}}return\"MeshBasicMaterial\"===u.type&&delete u.emissive,\"MeshPhongMaterial\"!==u.type&&delete u.specular,u.opacity<1&&(u.transparent=!0),r.setTextures(s),r.parse(u)}}()});var th={getContext:function(){return void 0===kl&&(kl=new(window.AudioContext||window.webkitAudioContext)),kl},setContext:function(t){kl=t}};function eh(t){this.manager=void 0!==t?t:ju}function nh(){this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new pn)}function rh(t,e){Al.call(this,void 0,e),this.sh=void 0!==t?t:new nh}function ih(t,e,n){rh.call(this,void 0,n);var r=(new ki).set(t),i=(new ki).set(e),o=new pn(r.r,r.g,r.b),a=new pn(i.r,i.g,i.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(s),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}function oh(t,e){rh.call(this,void 0,e);var n=(new ki).set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}function ah(){this.type=\"StereoCamera\",this.aspect=1,this.eyeSep=.064,this.cameraL=new gs,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new gs,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1}Object.assign(eh.prototype,{load:function(t,e,n,r){var i=new Vu(this.manager);i.setResponseType(\"arraybuffer\"),i.setPath(this.path),i.load(t,function(t){var n=t.slice(0),r=th.getContext();r.decodeAudioData(n,function(t){e(t)})},n,r)},setPath:function(t){return this.path=t,this}}),Object.assign(nh.prototype,{isSphericalHarmonics3:!0,set:function(t){for(var e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this},zero:function(){for(var t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},getAt:function(t,e){var n=t.x,r=t.y,i=t.z,o=this.coefficients;return e=.282095*o[0],e+=.488603*o[1]*r,e+=.488603*o[2]*i,e+=.488603*o[3]*n,e+=1.092548*o[4]*(n*r),e+=1.092548*o[5]*(r*i),e+=.315392*o[6]*(3*i*i-1),e+=1.092548*o[7]*(n*i),e+=.546274*o[8]*(n*n-r*r),e},getIrradianceAt:function(t,e){var n=t.x,r=t.y,i=t.z,o=this.coefficients;return e=.886227*o[0],e+=2*o[1]*.511664*r,e+=2*o[2]*.511664*i,e+=2*o[3]*.511664*n,e+=2*o[4]*.429043*n*r,e+=2*o[5]*.429043*r*i,e+=o[6]*(.743125*i*i-.247708),e+=2*o[7]*.429043*n*i,e+=.429043*o[8]*(n*n-r*r),e},add:function(t){for(var e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this},scale:function(t){for(var e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this},lerp:function(t,e){for(var n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this},equals:function(t){for(var e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0},copy:function(t){return this.set(t.coefficients)},clone:function(){return(new this.constructor).copy(this)},fromArray:function(t){for(var e=this.coefficients,n=0;n<9;n++)e[n].fromArray(t,3*n);return this},toArray:function(){for(var t=[],e=this.coefficients,n=0;n<9;n++)e[n].toArray(t,3*n);return t}}),Object.assign(nh,{getBasisAt:function(t,e){var n=t.x,r=t.y,i=t.z;e[0]=.282095,e[1]=.488603*r,e[2]=.488603*i,e[3]=.488603*n,e[4]=1.092548*n*r,e[5]=1.092548*r*i,e[6]=.315392*(3*i*i-1),e[7]=1.092548*n*i,e[8]=.546274*(n*n-r*r)}}),rh.prototype=Object.assign(Object.create(Al.prototype),{constructor:rh,isLightProbe:!0,copy:function(t){return Al.prototype.copy.call(this,t),this.sh.copy(t.sh),this.intensity=t.intensity,this},toJSON:function(t){var e=Al.prototype.toJSON.call(this,t);return e}}),ih.prototype=Object.assign(Object.create(rh.prototype),{constructor:ih,isHemisphereLightProbe:!0,copy:function(t){return rh.prototype.copy.call(this,t),this},toJSON:function(t){var e=rh.prototype.toJSON.call(this,t);return e}}),oh.prototype=Object.assign(Object.create(rh.prototype),{constructor:oh,isAmbientLightProbe:!0,copy:function(t){return rh.prototype.copy.call(this,t),this},toJSON:function(t){var e=rh.prototype.toJSON.call(this,t);return e}}),Object.assign(ah.prototype,{update:function(){var t,e,n,r,i,o,a,s,c=new Tn,u=new Tn;return function(l){var h=t!==this||e!==l.focus||n!==l.fov||r!==l.aspect*this.aspect||i!==l.near||o!==l.far||a!==l.zoom||s!==this.eyeSep;if(h){t=this,e=l.focus,n=l.fov,r=l.aspect*this.aspect,i=l.near,o=l.far,a=l.zoom;var p=l.projectionMatrix.clone();s=this.eyeSep/2;var d,f,m=s*i/e,v=i*Math.tan(un.DEG2RAD*n*.5)/a;u.elements[12]=-s,c.elements[12]=s,d=-v*r+m,f=v*r+m,p.elements[0]=2*i/(f-d),p.elements[8]=(f+d)/(f-d),this.cameraL.projectionMatrix.copy(p),d=-v*r-m,f=v*r-m,p.elements[0]=2*i/(f-d),p.elements[8]=(f+d)/(f-d),this.cameraR.projectionMatrix.copy(p)}this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(u),this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)}}()});var sh=90,ch=1;function uh(t,e,n,r){Ki.call(this),this.type=\"CubeCamera\";var i=new gs(sh,ch,t,e);i.up.set(0,-1,0),i.lookAt(new pn(1,0,0)),this.add(i);var o=new gs(sh,ch,t,e);o.up.set(0,-1,0),o.lookAt(new pn(-1,0,0)),this.add(o);var a=new gs(sh,ch,t,e);a.up.set(0,0,1),a.lookAt(new pn(0,1,0)),this.add(a);var s=new gs(sh,ch,t,e);s.up.set(0,0,-1),s.lookAt(new pn(0,-1,0)),this.add(s);var c=new gs(sh,ch,t,e);c.up.set(0,-1,0),c.lookAt(new pn(0,0,1)),this.add(c);var u=new gs(sh,ch,t,e);u.up.set(0,-1,0),u.lookAt(new pn(0,0,-1)),this.add(u),r=r||{format:se,magFilter:Wt,minFilter:Wt},this.renderTarget=new bn(n,n,r),this.renderTarget.texture.name=\"CubeCamera\",this.update=function(t,e){null===this.parent&&this.updateMatrixWorld();var n=t.getRenderTarget(),r=this.renderTarget,l=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0),t.render(e,i),t.setRenderTarget(r,1),t.render(e,o),t.setRenderTarget(r,2),t.render(e,a),t.setRenderTarget(r,3),t.render(e,s),t.setRenderTarget(r,4),t.render(e,c),r.texture.generateMipmaps=l,t.setRenderTarget(r,5),t.render(e,u),t.setRenderTarget(n)},this.clear=function(t,e,n,r){for(var i=t.getRenderTarget(),o=this.renderTarget,a=0;a<6;a++)t.setRenderTarget(o,a),t.clear(e,n,r);t.setRenderTarget(i)}}function lh(t){this.autoStart=void 0===t||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}function hh(){Ki.call(this),this.type=\"AudioListener\",this.context=th.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0}function ph(t){Ki.call(this),this.type=\"Audio\",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.startTime=0,this.offset=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType=\"empty\",this.filters=[]}function dh(t){ph.call(this,t),this.panner=this.context.createPanner(),this.panner.connect(this.gain)}function fh(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=void 0!==e?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}function mh(t,e,n){this.binding=t,this.valueSize=n;var r,i=Float64Array;switch(e){case\"quaternion\":r=this._slerp;break;case\"string\":case\"bool\":i=Array,r=this._select;break;default:r=this._lerp}this.buffer=new i(4*n),this._mixBufferRegion=r,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}uh.prototype=Object.create(Ki.prototype),uh.prototype.constructor=uh,Object.assign(lh.prototype,{start:function(){this.startTime=(\"undefined\"===typeof performance?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=(\"undefined\"===typeof performance?Date:performance).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}),hh.prototype=Object.assign(Object.create(Ki.prototype),{constructor:hh,getInput:function(){return this.gain},removeFilter:function(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},updateMatrixWorld:function(){var t=new pn,e=new hn,n=new pn,r=new pn,i=new lh;return function(o){Ki.prototype.updateMatrixWorld.call(this,o);var a=this.context.listener,s=this.up;if(this.timeDelta=i.getDelta(),this.matrixWorld.decompose(t,e,n),r.set(0,0,-1).applyQuaternion(e),a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(t.x,c),a.positionY.linearRampToValueAtTime(t.y,c),a.positionZ.linearRampToValueAtTime(t.z,c),a.forwardX.linearRampToValueAtTime(r.x,c),a.forwardY.linearRampToValueAtTime(r.y,c),a.forwardZ.linearRampToValueAtTime(r.z,c),a.upX.linearRampToValueAtTime(s.x,c),a.upY.linearRampToValueAtTime(s.y,c),a.upZ.linearRampToValueAtTime(s.z,c)}else a.setPosition(t.x,t.y,t.z),a.setOrientation(r.x,r.y,r.z,s.x,s.y,s.z)}}()}),ph.prototype=Object.assign(Object.create(Ki.prototype),{constructor:ph,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType=\"audioNode\",this.source=t,this.connect(),this},setMediaElementSource:function(t){return this.hasPlaybackControl=!1,this.sourceType=\"mediaNode\",this.source=this.context.createMediaElementSource(t),this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType=\"buffer\",this.autoplay&&this.play(),this},play:function(){if(!0!==this.isPlaying){if(!1!==this.hasPlaybackControl){var t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.onended=this.onEnded.bind(this),this.startTime=this.context.currentTime,t.start(this.startTime,this.offset),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}console.warn(\"THREE.Audio: this Audio has no playback control.\")}else console.warn(\"THREE.Audio: Audio is already playing.\")},pause:function(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;console.warn(\"THREE.Audio: this Audio has no playback control.\")},stop:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this;console.warn(\"THREE.Audio: this Audio has no playback control.\")},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),!0===this.isPlaying?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},setDetune:function(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn(\"THREE.Audio: this Audio has no playback control.\")},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn(\"THREE.Audio: this Audio has no playback control.\"),!1):this.loop},setLoop:function(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn(\"THREE.Audio: this Audio has no playback control.\")},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}),dh.prototype=Object.assign(Object.create(ph.prototype),{constructor:dh,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){return this.panner.refDistance=t,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){return this.panner.rolloffFactor=t,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){return this.panner.distanceModel=t,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){return this.panner.maxDistance=t,this},setDirectionalCone:function(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(){var t=new pn,e=new hn,n=new pn,r=new pn;return function(i){if(Ki.prototype.updateMatrixWorld.call(this,i),!0!==this.hasPlaybackControl||!1!==this.isPlaying){this.matrixWorld.decompose(t,e,n),r.set(0,0,1).applyQuaternion(e);var o=this.panner;if(o.positionX){var a=this.context.currentTime+this.listener.timeDelta;o.positionX.linearRampToValueAtTime(t.x,a),o.positionY.linearRampToValueAtTime(t.y,a),o.positionZ.linearRampToValueAtTime(t.z,a),o.orientationX.linearRampToValueAtTime(r.x,a),o.orientationY.linearRampToValueAtTime(r.y,a),o.orientationZ.linearRampToValueAtTime(r.z,a)}else o.setPosition(t.x,t.y,t.z),o.setOrientation(r.x,r.y,r.z)}}}()}),Object.assign(fh.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var t=0,e=this.getFrequencyData(),n=0;n<e.length;n++)t+=e[n];return t/e.length}}),Object.assign(mh.prototype,{accumulate:function(t,e){var n=this.buffer,r=this.valueSize,i=t*r+r,o=this.cumulativeWeight;if(0===o){for(var a=0;a!==r;++a)n[i+a]=n[a];o=e}else{o+=e;var s=e/o;this._mixBufferRegion(n,i,0,s,r)}this.cumulativeWeight=o},apply:function(t){var e=this.valueSize,n=this.buffer,r=t*e+e,i=this.cumulativeWeight,o=this.binding;if(this.cumulativeWeight=0,i<1){var a=3*e;this._mixBufferRegion(n,r,a,1-i,e)}for(var s=e,c=e+e;s!==c;++s)if(n[s]!==n[s+e]){o.setValue(n,r);break}},saveOriginalState:function(){var t=this.binding,e=this.buffer,n=this.valueSize,r=3*n;t.getValue(e,r);for(var i=n,o=r;i!==o;++i)e[i]=e[r+i%n];this.cumulativeWeight=0},restoreOriginalState:function(){var t=3*this.valueSize;this.binding.setValue(this.buffer,t)},_select:function(t,e,n,r,i){if(r>=.5)for(var o=0;o!==i;++o)t[e+o]=t[n+o]},_slerp:function(t,e,n,r){hn.slerpFlat(t,e,t,e,t,n,r)},_lerp:function(t,e,n,r,i){for(var o=1-r,a=0;a!==i;++a){var s=e+a;t[s]=t[s]*o+t[n+a]*r}}});var vh,gh,yh=\"\\\\[\\\\]\\\\.:\\\\/\";function xh(t,e,n){var r=n||bh.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}function bh(t,e,n){this.path=e,this.parsedPath=n||bh.parseTrackName(e),this.node=bh.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}function wh(){this.uuid=un.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var e=0,n=arguments.length;e!==n;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}function _h(t,e,n){this._mixer=t,this._clip=e,this._localRoot=n||null;for(var r=e.tracks,i=r.length,o=new Array(i),a={endingStart:Ve,endingEnd:Ve},s=0;s!==i;++s){var c=r[s].createInterpolant(null);o[s]=c,c.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(i),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ge,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}function Mh(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}function Sh(t){\"string\"===typeof t&&(console.warn(\"THREE.Uniform: Type parameter is no longer needed.\"),t=arguments[1]),this.value=t}function Eh(){mo.call(this),this.type=\"InstancedBufferGeometry\",this.maxInstancedCount=void 0}function Th(t,e,n){Ps.call(this,t,e),this.meshPerAttribute=n||1}function Ah(t,e,n,r){\"number\"===typeof n&&(r=n,n=!1,console.error(\"THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.\")),eo.call(this,t,e,n),this.meshPerAttribute=r||1}function Lh(t,e,n,r){this.ray=new Eo(t,e),this.near=n||0,this.far=r||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn(\"THREE.Raycaster: params.PointCloud has been renamed to params.Points.\"),this.Points}}})}function Ph(t,e){return t.distance-e.distance}function Rh(t,e,n,r){if(!1!==t.visible&&(t.raycast(e,n),!0===r))for(var i=t.children,o=0,a=i.length;o<a;o++)Rh(i[o],e,n,!0)}function Ch(t,e,n){return this.radius=void 0!==t?t:1,this.phi=void 0!==e?e:0,this.theta=void 0!==n?n:0,this}function Oh(t,e,n){return this.radius=void 0!==t?t:1,this.theta=void 0!==e?e:0,this.y=void 0!==n?n:0,this}function Ih(t,e){this.min=void 0!==t?t:new ln(1/0,1/0),this.max=void 0!==e?e:new ln(-1/0,-1/0)}function Dh(t,e){this.start=void 0!==t?t:new pn,this.end=void 0!==e?e:new pn}function Nh(t){Ki.call(this),this.material=t,this.render=function(){}}function Bh(t,e,n,r){this.object=t,this.size=void 0!==e?e:1;var i=void 0!==n?n:16711680,o=void 0!==r?r:1,a=0,s=this.object.geometry;s&&s.isGeometry?a=3*s.faces.length:s&&s.isBufferGeometry&&(a=s.attributes.normal.count);var c=new mo,u=new uo(2*a*3,3);c.addAttribute(\"position\",u),Gs.call(this,c,new zs({color:i,linewidth:o})),this.matrixAutoUpdate=!1,this.update()}function zh(t,e){Ki.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;for(var n=new mo,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,o=1,a=32;i<a;i++,o++){var s=i/a*Math.PI*2,c=o/a*Math.PI*2;r.push(Math.cos(s),Math.sin(s),1,Math.cos(c),Math.sin(c),1)}n.addAttribute(\"position\",new uo(r,3));var u=new zs({fog:!1});this.cone=new Gs(n,u),this.add(this.cone),this.update()}function Uh(t){var e=[];t&&t.isBone&&e.push(t);for(var n=0;n<t.children.length;n++)e.push.apply(e,Uh(t.children[n]));return e}function Gh(t){for(var e=Uh(t),n=new mo,r=[],i=[],o=new ki(0,0,1),a=new ki(0,1,0),s=0;s<e.length;s++){var c=e[s];c.parent&&c.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(o.r,o.g,o.b),i.push(a.r,a.g,a.b))}n.addAttribute(\"position\",new uo(r,3)),n.addAttribute(\"color\",new uo(i,3));var u=new zs({vertexColors:W,depthTest:!1,depthWrite:!1,transparent:!0});Gs.call(this,n,u),this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}function Fh(t,e,n){this.light=t,this.light.updateMatrixWorld(),this.color=n;var r=new Qc(e,4,2),i=new Ao({wireframe:!0,fog:!1});Lo.call(this,r,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}function Hh(t,e){this.type=\"RectAreaLightHelper\",this.light=t,this.color=e;var n=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new mo;r.addAttribute(\"position\",new uo(n,3)),r.computeBoundingSphere();var i=new zs({fog:!1});Us.call(this,r,i);var o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new mo;a.addAttribute(\"position\",new uo(o,3)),a.computeBoundingSphere(),this.add(new Lo(a,new Ao({side:G,fog:!1}))),this.update()}function jh(t,e,n){Ki.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;var r=new ec(e);r.rotateY(.5*Math.PI),this.material=new Ao({wireframe:!0,fog:!1}),void 0===this.color&&(this.material.vertexColors=W);var i=r.getAttribute(\"position\"),o=new Float32Array(3*i.count);r.addAttribute(\"color\",new eo(o,3)),this.add(new Lo(r,this.material)),this.update()}function kh(t,e){this.lightProbe=t,this.size=e;var n={GAMMA_OUTPUT:\"\"},r=new So({defines:n,uniforms:{sh:{value:this.lightProbe.sh.coefficients},intensity:{value:this.lightProbe.intensity}},vertexShader:[\"varying vec3 vNormal;\",\"void main() {\",\"\\tvNormal = normalize( normalMatrix * normal );\",\"\\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\",\"}\"].join(\"\\n\"),fragmentShader:[\"#define RECIPROCAL_PI 0.318309886\",\"vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\",\"\\t// matrix is assumed to be orthogonal\",\"\\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\",\"}\",\"vec3 linearToOutput( in vec3 a ) {\",\"\\t#ifdef GAMMA_OUTPUT\",\"\\t\\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\",\"\\t#else\",\"\\t\\treturn a;\",\"\\t#endif\",\"}\",\"// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\",\"vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\",\"\\t// normal is assumed to have unit length\",\"\\tfloat x = normal.x, y = normal.y, z = normal.z;\",\"\\t// band 0\",\"\\tvec3 result = shCoefficients[ 0 ] * 0.886227;\",\"\\t// band 1\",\"\\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\",\"\\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\",\"\\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\",\"\\t// band 2\",\"\\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\",\"\\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\",\"\\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\",\"\\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\",\"\\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\",\"\\treturn result;\",\"}\",\"uniform vec3 sh[ 9 ]; // sh coefficients\",\"uniform float intensity; // light probe intensity\",\"varying vec3 vNormal;\",\"void main() {\",\"\\tvec3 normal = normalize( vNormal );\",\"\\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\",\"\\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );\",\"\\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\",\"\\toutgoingLight = linearToOutput( outgoingLight );\",\"\\tgl_FragColor = vec4( outgoingLight, 1.0 );\",\"}\"].join(\"\\n\")}),i=new Qc(1,32,16);Lo.call(this,i,r),this.onBeforeRender()}function Vh(t,e,n,r){t=t||10,e=e||10,n=new ki(void 0!==n?n:4473924),r=new ki(void 0!==r?r:8947848);for(var i=e/2,o=t/e,a=t/2,s=[],c=[],u=0,l=0,h=-a;u<=e;u++,h+=o){s.push(-a,0,h,a,0,h),s.push(h,0,-a,h,0,a);var p=u===i?n:r;p.toArray(c,l),l+=3,p.toArray(c,l),l+=3,p.toArray(c,l),l+=3,p.toArray(c,l),l+=3}var d=new mo;d.addAttribute(\"position\",new uo(s,3)),d.addAttribute(\"color\",new uo(c,3));var f=new zs({vertexColors:W});Gs.call(this,d,f)}function Wh(t,e,n,r,i,o){t=t||10,e=e||16,n=n||8,r=r||64,i=new ki(void 0!==i?i:4473924),o=new ki(void 0!==o?o:8947848);var a,s,c,u,l,h,p,d=[],f=[];for(u=0;u<=e;u++)c=u/e*(2*Math.PI),a=Math.sin(c)*t,s=Math.cos(c)*t,d.push(0,0,0),d.push(a,0,s),p=1&u?i:o,f.push(p.r,p.g,p.b),f.push(p.r,p.g,p.b);for(u=0;u<=n;u++)for(p=1&u?i:o,h=t-t/n*u,l=0;l<r;l++)c=l/r*(2*Math.PI),a=Math.sin(c)*h,s=Math.cos(c)*h,d.push(a,0,s),f.push(p.r,p.g,p.b),c=(l+1)/r*(2*Math.PI),a=Math.sin(c)*h,s=Math.cos(c)*h,d.push(a,0,s),f.push(p.r,p.g,p.b);var m=new mo;m.addAttribute(\"position\",new uo(d,3)),m.addAttribute(\"color\",new uo(f,3));var v=new zs({vertexColors:W});Gs.call(this,m,v)}function qh(t,e,n,r){this.audio=t,this.range=e||1,this.divisionsInnerAngle=n||16,this.divisionsOuterAngle=r||2;var i=new mo,o=this.divisionsInnerAngle+2*this.divisionsOuterAngle,a=new Float32Array(3*(3*o+3));i.addAttribute(\"position\",new eo(a,3));var s=new zs({color:65280}),c=new zs({color:16776960});Us.call(this,i,[c,s]),this.update()}function Xh(t,e,n,r){this.object=t,this.size=void 0!==e?e:1;var i=void 0!==n?n:16776960,o=void 0!==r?r:1,a=0,s=this.object.geometry;s&&s.isGeometry?a=s.faces.length:console.warn(\"THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.\");var c=new mo,u=new uo(2*a*3,3);c.addAttribute(\"position\",u),Gs.call(this,c,new zs({color:i,linewidth:o})),this.matrixAutoUpdate=!1,this.update()}function Yh(t,e,n){Ki.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,void 0===e&&(e=1);var r=new mo;r.addAttribute(\"position\",new uo([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));var i=new zs({fog:!1});this.lightPlane=new Us(r,i),this.add(this.lightPlane),r=new mo,r.addAttribute(\"position\",new uo([0,0,0,0,0,1],3)),this.targetLine=new Us(r,i),this.add(this.targetLine),this.update()}function Jh(t){var e=new mo,n=new zs({color:16777215,vertexColors:V}),r=[],i=[],o={},a=new ki(16755200),s=new ki(16711680),c=new ki(43775),u=new ki(16777215),l=new ki(3355443);function h(t,e,n){p(t,n),p(e,n)}function p(t,e){r.push(0,0,0),i.push(e.r,e.g,e.b),void 0===o[t]&&(o[t]=[]),o[t].push(r.length/3-1)}h(\"n1\",\"n2\",a),h(\"n2\",\"n4\",a),h(\"n4\",\"n3\",a),h(\"n3\",\"n1\",a),h(\"f1\",\"f2\",a),h(\"f2\",\"f4\",a),h(\"f4\",\"f3\",a),h(\"f3\",\"f1\",a),h(\"n1\",\"f1\",a),h(\"n2\",\"f2\",a),h(\"n3\",\"f3\",a),h(\"n4\",\"f4\",a),h(\"p\",\"n1\",s),h(\"p\",\"n2\",s),h(\"p\",\"n3\",s),h(\"p\",\"n4\",s),h(\"u1\",\"u2\",c),h(\"u2\",\"u3\",c),h(\"u3\",\"u1\",c),h(\"c\",\"t\",u),h(\"p\",\"c\",l),h(\"cn1\",\"cn2\",l),h(\"cn3\",\"cn4\",l),h(\"cf1\",\"cf2\",l),h(\"cf3\",\"cf4\",l),e.addAttribute(\"position\",new uo(r,3)),e.addAttribute(\"color\",new uo(i,3)),Gs.call(this,e,n),this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}function Zh(t,e){this.object=t,void 0===e&&(e=16776960);var n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),i=new mo;i.setIndex(new eo(n,1)),i.addAttribute(\"position\",new eo(r,3)),Gs.call(this,i,new zs({color:e})),this.matrixAutoUpdate=!1,this.update()}function Qh(t,e){this.type=\"Box3Helper\",this.box=t;var n=void 0!==e?e:16776960,r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],o=new mo;o.setIndex(new eo(r,1)),o.addAttribute(\"position\",new uo(i,3)),Gs.call(this,o,new zs({color:n})),this.geometry.computeBoundingSphere()}function Kh(t,e,n){this.type=\"PlaneHelper\",this.plane=t,this.size=void 0===e?1:e;var r=void 0!==n?n:16776960,i=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new mo;o.addAttribute(\"position\",new uo(i,3)),o.computeBoundingSphere(),Us.call(this,o,new zs({color:r}));var a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],s=new mo;s.addAttribute(\"position\",new uo(a,3)),s.computeBoundingSphere(),this.add(new Lo(s,new Ao({color:r,opacity:.2,transparent:!0,depthWrite:!1})))}function $h(t,e,n,r,i,o){Ki.call(this),void 0===t&&(t=new pn(0,0,1)),void 0===e&&(e=new pn(0,0,0)),void 0===n&&(n=1),void 0===r&&(r=16776960),void 0===i&&(i=.2*n),void 0===o&&(o=.2*i),void 0===vh&&(vh=new mo,vh.addAttribute(\"position\",new uo([0,0,0,0,1,0],3)),gh=new su(0,.5,1,5,1),gh.translate(0,-.5,0)),this.position.copy(e),this.line=new Us(vh,new zs({color:r})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Lo(gh,new Ao({color:r})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,i,o)}function tp(t){t=t||1;var e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new mo;r.addAttribute(\"position\",new uo(e,3)),r.addAttribute(\"color\",new uo(n,3));var i=new zs({vertexColors:W});Gs.call(this,r,i)}function ep(t,e,n,r,i,o,a){return console.warn(\"THREE.Face4 has been removed. A THREE.Face3 will be created instead.\"),new Yi(t,e,n,i,o,a)}Object.assign(xh.prototype,{getValue:function(t,e){this.bind();var n=this._targetGroup.nCachedObjects_,r=this._bindings[n];void 0!==r&&r.getValue(t,e)},setValue:function(t,e){for(var n=this._bindings,r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}),Object.assign(bh,{Composite:xh,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new bh.Composite(t,e,n):new bh(t,e,n)},sanitizeNodeName:function(){var t=new RegExp(\"[\"+yh+\"]\",\"g\");return function(e){return e.replace(/\\s/g,\"_\").replace(t,\"\")}}(),parseTrackName:function(){var t=\"[^\"+yh+\"]\",e=\"[^\"+yh.replace(\"\\\\.\",\"\")+\"]\",n=/((?:WC+[\\/:])*)/.source.replace(\"WC\",t),r=/(WCOD+)?/.source.replace(\"WCOD\",e),i=/(?:\\.(WC+)(?:\\[(.+)\\])?)?/.source.replace(\"WC\",t),o=/\\.(WC+)(?:\\[(.+)\\])?/.source.replace(\"WC\",t),a=new RegExp(\"^\"+n+r+i+o+\"$\"),s=[\"material\",\"materials\",\"bones\"];return function(t){var e=a.exec(t);if(!e)throw new Error(\"PropertyBinding: Cannot parse trackName: \"+t);var n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(\".\");if(void 0!==r&&-1!==r){var i=n.nodeName.substring(r+1);-1!==s.indexOf(i)&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(null===n.propertyName||0===n.propertyName.length)throw new Error(\"PropertyBinding: can not parse propertyName from trackName: \"+t);return n}}(),findNode:function(t,e){if(!e||\"\"===e||\"root\"===e||\".\"===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){var n=t.skeleton.getBoneByName(e);if(void 0!==n)return n}if(t.children){var r=function(t){for(var n=0;n<t.length;n++){var i=t[n];if(i.name===e||i.uuid===e)return i;var o=r(i.children);if(o)return o}return null},i=r(t.children);if(i)return i}return null}}),Object.assign(bh.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){for(var n=this.resolvedProperty,r=0,i=n.length;r!==i;++r)t[e++]=n[r]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e]},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){for(var n=this.resolvedProperty,r=0,i=n.length;r!==i;++r)n[r]=t[e++]},function(t,e){for(var n=this.resolvedProperty,r=0,i=n.length;r!==i;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){for(var n=this.resolvedProperty,r=0,i=n.length;r!==i;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},bind:function(){var t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,i=e.propertyIndex;if(t||(t=bh.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,t){if(n){var o=e.objectIndex;switch(n){case\"materials\":if(!t.material)return void console.error(\"THREE.PropertyBinding: Can not bind to material as node does not have a material.\",this);if(!t.material.materials)return void console.error(\"THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.\",this);t=t.material.materials;break;case\"bones\":if(!t.skeleton)return void console.error(\"THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.\",this);t=t.skeleton.bones;for(var a=0;a<t.length;a++)if(t[a].name===o){o=a;break}break;default:if(void 0===t[n])return void console.error(\"THREE.PropertyBinding: Can not bind to objectName of node undefined.\",this);t=t[n]}if(void 0!==o){if(void 0===t[o])return void console.error(\"THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.\",this,t);t=t[o]}}var s=t[r];if(void 0!==s){var c=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?c=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(c=this.Versioning.MatrixWorldNeedsUpdate);var u=this.BindingType.Direct;if(void 0!==i){if(\"morphTargetInfluences\"===r){if(!t.geometry)return void console.error(\"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.\",this);if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes)return void console.error(\"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.\",this);for(a=0;a<this.node.geometry.morphAttributes.position.length;a++)if(t.geometry.morphAttributes.position[a].name===i){i=a;break}}else{if(!t.geometry.morphTargets)return void console.error(\"THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.\",this);for(a=0;a<this.node.geometry.morphTargets.length;a++)if(t.geometry.morphTargets[a].name===i){i=a;break}}}u=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else void 0!==s.fromArray&&void 0!==s.toArray?(u=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(u=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}else{var l=e.nodeName;console.error(\"THREE.PropertyBinding: Trying to update property for track: \"+l+\".\"+r+\" but it wasn't found.\",t)}}else console.error(\"THREE.PropertyBinding: Trying to update node for track: \"+this.path+\" but it wasn't found.\")},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),\n//!\\ DECLARE ALIAS AFTER assign prototype !\nObject.assign(bh.prototype,{_getValue_unbound:bh.prototype.getValue,_setValue_unbound:bh.prototype.setValue}),Object.assign(wh.prototype,{isAnimationObjectGroup:!0,add:function(){for(var t=this._objects,e=t.length,n=this.nCachedObjects_,r=this._indicesByUUID,i=this._paths,o=this._parsedPaths,a=this._bindings,s=a.length,c=void 0,u=0,l=arguments.length;u!==l;++u){var h=arguments[u],p=h.uuid,d=r[p];if(void 0===d){d=e++,r[p]=d,t.push(h);for(var f=0,m=s;f!==m;++f)a[f].push(new bh(h,i[f],o[f]))}else if(d<n){c=t[d];var v=--n,g=t[v];r[g.uuid]=d,t[d]=g,r[p]=v,t[v]=h;for(f=0,m=s;f!==m;++f){var y=a[f],x=y[v],b=y[d];y[d]=x,void 0===b&&(b=new bh(h,i[f],o[f])),y[v]=b}}else t[d]!==c&&console.error(\"THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.\")}this.nCachedObjects_=n},remove:function(){for(var t=this._objects,e=this.nCachedObjects_,n=this._indicesByUUID,r=this._bindings,i=r.length,o=0,a=arguments.length;o!==a;++o){var s=arguments[o],c=s.uuid,u=n[c];if(void 0!==u&&u>=e){var l=e++,h=t[l];n[h.uuid]=u,t[u]=h,n[c]=l,t[l]=s;for(var p=0,d=i;p!==d;++p){var f=r[p],m=f[l],v=f[u];f[u]=m,f[l]=v}}}this.nCachedObjects_=e},uncache:function(){for(var t=this._objects,e=t.length,n=this.nCachedObjects_,r=this._indicesByUUID,i=this._bindings,o=i.length,a=0,s=arguments.length;a!==s;++a){var c=arguments[a],u=c.uuid,l=r[u];if(void 0!==l)if(delete r[u],l<n){var h=--n,p=t[h],d=--e,f=t[d];r[p.uuid]=l,t[l]=p,r[f.uuid]=h,t[h]=f,t.pop();for(var m=0,v=o;m!==v;++m){var g=i[m],y=g[h],x=g[d];g[l]=y,g[h]=x,g.pop()}}else{d=--e,f=t[d];r[f.uuid]=l,t[l]=f,t.pop();for(m=0,v=o;m!==v;++m){g=i[m];g[l]=g[d],g.pop()}}}this.nCachedObjects_=n},subscribe_:function(t,e){var n=this._bindingsIndicesByPath,r=n[t],i=this._bindings;if(void 0!==r)return i[r];var o=this._paths,a=this._parsedPaths,s=this._objects,c=s.length,u=this.nCachedObjects_,l=new Array(c);r=i.length,n[t]=r,o.push(t),a.push(e),i.push(l);for(var h=u,p=s.length;h!==p;++h){var d=s[h];l[h]=new bh(d,t,e)}return l},unsubscribe_:function(t){var e=this._bindingsIndicesByPath,n=e[t];if(void 0!==n){var r=this._paths,i=this._parsedPaths,o=this._bindings,a=o.length-1,s=o[a],c=t[a];e[c]=n,o[n]=s,o.pop(),i[n]=i[a],i.pop(),r[n]=r[a],r.pop()}}}),Object.assign(_h.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,e){return this.loop=t,this.repetitions=e,this},setEffectiveWeight:function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){var r=this._clip.duration,i=t._clip.duration,o=i/r,a=r/i;t.warp(1,o,e),this.warp(a,1,e)}return this},crossFadeTo:function(t,e,n){return t.crossFadeFrom(this,e,n)},stopFading:function(){var t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,e,n){var r=this._mixer,i=r.time,o=this._timeScaleInterpolant,a=this.timeScale;null===o&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);var s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=t/a,c[1]=e/a,this},stopWarping:function(){var t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(t,e,n,r){if(this.enabled){var i=this._startTime;if(null!==i){var o=(t-i)*n;if(o<0||0===n)return;this._startTime=null,e=n*o}e*=this._updateTimeScale(t);var a=this._updateTime(e),s=this._updateWeight(t);if(s>0)for(var c=this._interpolants,u=this._propertyBindings,l=0,h=c.length;l!==h;++l)c[l].evaluate(a),u[l].accumulate(r,s)}else this._updateWeight(t)},_updateWeight:function(t){var e=0;if(this.enabled){e=this.weight;var n=this._weightInterpolant;if(null!==n){var r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopFading(),0===r&&(this.enabled=!1))}}return this._effectiveWeight=e,e},_updateTimeScale:function(t){var e=0;if(!this.paused){e=this.timeScale;var n=this._timeScaleInterpolant;if(null!==n){var r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e},_updateTime:function(t){var e=this.time+t,n=this._clip.duration,r=this.loop,i=this._loopCount,o=r===Fe;if(0===t)return-1===i?e:o&&1===(1&i)?n-e:e;if(r===Ue){-1===i&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(e>=n)e=n;else{if(!(e<0))break t;e=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this._mixer.dispatchEvent({type:\"finished\",action:this,direction:t<0?-1:1})}}else{if(-1===i&&(t>=0?(i=0,this._setEndings(!0,0===this.repetitions,o)):this._setEndings(0===this.repetitions,!0,o)),e>=n||e<0){var a=Math.floor(e/n);e-=n*a,i+=Math.abs(a);var s=this.repetitions-i;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,e=t>0?n:0,this._mixer.dispatchEvent({type:\"finished\",action:this,direction:t>0?1:-1});else{if(1===s){var c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=i,this._mixer.dispatchEvent({type:\"loop\",action:this,loopDelta:a})}}if(o&&1===(1&i))return this.time=e,n-e}return this.time=e,e},_setEndings:function(t,e,n){var r=this._interpolantSettings;n?(r.endingStart=We,r.endingEnd=We):(r.endingStart=t?this.zeroSlopeAtStart?We:Ve:qe,r.endingEnd=e?this.zeroSlopeAtEnd?We:Ve:qe)},_scheduleFading:function(t,e,n){var r=this._mixer,i=r.time,o=this._weightInterpolant;null===o&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);var a=o.parameterPositions,s=o.sampleValues;return a[0]=i,s[0]=e,a[1]=i+t,s[1]=n,this}}),Mh.prototype=Object.assign(Object.create(E.prototype),{constructor:Mh,_bindAction:function(t,e){var n=t._localRoot||this._root,r=t._clip.tracks,i=r.length,o=t._propertyBindings,a=t._interpolants,s=n.uuid,c=this._bindingsByRootAndName,u=c[s];void 0===u&&(u={},c[s]=u);for(var l=0;l!==i;++l){var h=r[l],p=h.name,d=u[p];if(void 0!==d)o[l]=d;else{if(d=o[l],void 0!==d){null===d._cacheIndex&&(++d.referenceCount,this._addInactiveBinding(d,s,p));continue}var f=e&&e._propertyBindings[l].binding.parsedPath;d=new mh(bh.create(n,p,f),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,s,p),o[l]=d}a[l].resultBuffer=d.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){var e=(t._localRoot||this._root).uuid,n=t._clip.uuid,r=this._actionsByClip[n];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,n,e)}for(var i=t._propertyBindings,o=0,a=i.length;o!==a;++o){var s=i[o];0===s.useCount++&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){for(var e=t._propertyBindings,n=0,r=e.length;n!==r;++n){var i=e[n];0===--i.useCount&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){var e=t._cacheIndex;return null!==e&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){var r=this._actions,i=this._actionsByClip,o=i[e];if(void 0===o)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,i[e]=o;else{var a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=r.length,r.push(t),o.actionByRoot[n]=t},_removeInactiveAction:function(t){var e=this._actions,n=e[e.length-1],r=t._cacheIndex;n._cacheIndex=r,e[r]=n,e.pop(),t._cacheIndex=null;var i=t._clip.uuid,o=this._actionsByClip,a=o[i],s=a.knownActions,c=s[s.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,s[u]=c,s.pop(),t._byClipCacheIndex=null;var l=a.actionByRoot,h=(t._localRoot||this._root).uuid;delete l[h],0===s.length&&delete o[i],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){for(var e=t._propertyBindings,n=0,r=e.length;n!==r;++n){var i=e[n];0===--i.referenceCount&&this._removeInactiveBinding(i)}},_lendAction:function(t){var e=this._actions,n=t._cacheIndex,r=this._nActiveActions++,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i},_takeBackAction:function(t){var e=this._actions,n=t._cacheIndex,r=--this._nActiveActions,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i},_addInactiveBinding:function(t,e,n){var r=this._bindingsByRootAndName,i=r[e],o=this._bindings;void 0===i&&(i={},r[e]=i),i[n]=t,t._cacheIndex=o.length,o.push(t)},_removeInactiveBinding:function(t){var e=this._bindings,n=t.binding,r=n.rootNode.uuid,i=n.path,o=this._bindingsByRootAndName,a=o[r],s=e[e.length-1],c=t._cacheIndex;s._cacheIndex=c,e[c]=s,e.pop(),delete a[i];t:{for(var u in a)break t;delete o[r]}},_lendBinding:function(t){var e=this._bindings,n=t._cacheIndex,r=this._nActiveBindings++,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i},_takeBackBinding:function(t){var e=this._bindings,n=t._cacheIndex,r=--this._nActiveBindings,i=e[r];t._cacheIndex=r,e[r]=t,i._cacheIndex=n,e[n]=i},_lendControlInterpolant:function(){var t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return void 0===n&&(n=new Au(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){var e=this._controlInterpolants,n=t.__cacheIndex,r=--this._nActiveControlInterpolants,i=e[r];t.__cacheIndex=r,e[r]=t,i.__cacheIndex=n,e[n]=i},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e){var n=e||this._root,r=n.uuid,i=\"string\"===typeof t?zu.findByName(n,t):t,o=null!==i?i.uuid:t,a=this._actionsByClip[o],s=null;if(void 0!==a){var c=a.actionByRoot[r];if(void 0!==c)return c;s=a.knownActions[0],null===i&&(i=s._clip)}if(null===i)return null;var u=new _h(this,i,e);return this._bindAction(u,s),this._addInactiveAction(u,o,r),u},existingAction:function(t,e){var n=e||this._root,r=n.uuid,i=\"string\"===typeof t?zu.findByName(n,t):t,o=i?i.uuid:t,a=this._actionsByClip[o];return void 0!==a&&a.actionByRoot[r]||null},stopAllAction:function(){var t=this._actions,e=this._nActiveActions,n=this._bindings,r=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var i=0;i!==e;++i)t[i].reset();for(i=0;i!==r;++i)n[i].useCount=0;return this},update:function(t){t*=this.timeScale;for(var e=this._actions,n=this._nActiveActions,r=this.time+=t,i=Math.sign(t),o=this._accuIndex^=1,a=0;a!==n;++a){var s=e[a];s._update(r,t,i,o)}var c=this._bindings,u=this._nActiveBindings;for(a=0;a!==u;++a)c[a].apply(o);return this},getRoot:function(){return this._root},uncacheClip:function(t){var e=this._actions,n=t.uuid,r=this._actionsByClip,i=r[n];if(void 0!==i){for(var o=i.knownActions,a=0,s=o.length;a!==s;++a){var c=o[a];this._deactivateAction(c);var u=c._cacheIndex,l=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,l._cacheIndex=u,e[u]=l,e.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}},uncacheRoot:function(t){var e=t.uuid,n=this._actionsByClip;for(var r in n){var i=n[r].actionByRoot,o=i[e];void 0!==o&&(this._deactivateAction(o),this._removeInactiveAction(o))}var a=this._bindingsByRootAndName,s=a[e];if(void 0!==s)for(var c in s){var u=s[c];u.restoreOriginalState(),this._removeInactiveBinding(u)}},uncacheAction:function(t,e){var n=this.existingAction(t,e);null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}}),Sh.prototype.clone=function(){return new Sh(void 0===this.value.clone?this.value:this.value.clone())},Eh.prototype=Object.assign(Object.create(mo.prototype),{constructor:Eh,isInstancedBufferGeometry:!0,copy:function(t){return mo.prototype.copy.call(this,t),this.maxInstancedCount=t.maxInstancedCount,this},clone:function(){return(new this.constructor).copy(this)}}),Th.prototype=Object.assign(Object.create(Ps.prototype),{constructor:Th,isInstancedInterleavedBuffer:!0,copy:function(t){return Ps.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this}}),Ah.prototype=Object.assign(Object.create(eo.prototype),{constructor:Ah,isInstancedBufferAttribute:!0,copy:function(t){return eo.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this}}),Object.assign(Lh.prototype,{linePrecision:1,set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize()):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld)):console.error(\"THREE.Raycaster: Unsupported camera type.\")},intersectObject:function(t,e,n){var r=n||[];return Rh(t,this,r,e),r.sort(Ph),r},intersectObjects:function(t,e,n){var r=n||[];if(!1===Array.isArray(t))return console.warn(\"THREE.Raycaster.intersectObjects: objects is not an Array.\"),r;for(var i=0,o=t.length;i<o;i++)Rh(t[i],this,r,e);return r.sort(Ph),r}}),Object.assign(Ch.prototype,{set:function(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},makeSafe:function(){var t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(un.clamp(e/this.radius,-1,1))),this}}),Object.assign(Oh.prototype,{set:function(t,e,n){return this.radius=t,this.theta=e,this.y=n,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}}),Object.assign(Ih.prototype,{set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(){var t=new ln;return function(e,n){var r=t.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){return void 0===t&&(console.warn(\"THREE.Box2: .getCenter() target is now required\"),t=new ln),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return void 0===t&&(console.warn(\"THREE.Box2: .getSize() target is now required\"),t=new ln),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,e){return void 0===e&&(console.warn(\"THREE.Box2: .getParameter() target is now required\"),e=new ln),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,e){return void 0===e&&(console.warn(\"THREE.Box2: .clampPoint() target is now required\"),e=new ln),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(){var t=new ln;return function(e){var n=t.copy(e).clamp(this.min,this.max);return n.sub(e).length()}}(),intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}),Object.assign(Dh.prototype,{set:function(t,e){return this.start.copy(t),this.end.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){return void 0===t&&(console.warn(\"THREE.Line3: .getCenter() target is now required\"),t=new pn),t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){return void 0===t&&(console.warn(\"THREE.Line3: .delta() target is now required\"),t=new pn),t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,e){return void 0===e&&(console.warn(\"THREE.Line3: .at() target is now required\"),e=new pn),this.delta(e).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(){var t=new pn,e=new pn;return function(n,r){t.subVectors(n,this.start),e.subVectors(this.end,this.start);var i=e.dot(e),o=e.dot(t),a=o/i;return r&&(a=un.clamp(a,0,1)),a}}(),closestPointToPoint:function(t,e,n){var r=this.closestPointToPointParameter(t,e);return void 0===n&&(console.warn(\"THREE.Line3: .closestPointToPoint() target is now required\"),n=new pn),this.delta(n).multiplyScalar(r).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}}),Nh.prototype=Object.create(Ki.prototype),Nh.prototype.constructor=Nh,Nh.prototype.isImmediateRenderObject=!0,Bh.prototype=Object.create(Gs.prototype),Bh.prototype.constructor=Bh,Bh.prototype.update=function(){var t=new pn,e=new pn,n=new dn;return function(){var r=[\"a\",\"b\",\"c\"];this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);var i=this.object.matrixWorld,o=this.geometry.attributes.position,a=this.object.geometry;if(a&&a.isGeometry)for(var s=a.vertices,c=a.faces,u=0,l=0,h=c.length;l<h;l++)for(var p=c[l],d=0,f=p.vertexNormals.length;d<f;d++){var m=s[p[r[d]]],v=p.vertexNormals[d];t.copy(m).applyMatrix4(i),e.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),o.setXYZ(u,t.x,t.y,t.z),u+=1,o.setXYZ(u,e.x,e.y,e.z),u+=1}else if(a&&a.isBufferGeometry){var g=a.attributes.position,y=a.attributes.normal;for(u=0,d=0,f=g.count;d<f;d++)t.set(g.getX(d),g.getY(d),g.getZ(d)).applyMatrix4(i),e.set(y.getX(d),y.getY(d),y.getZ(d)),e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),o.setXYZ(u,t.x,t.y,t.z),u+=1,o.setXYZ(u,e.x,e.y,e.z),u+=1}o.needsUpdate=!0}}(),zh.prototype=Object.create(Ki.prototype),zh.prototype.constructor=zh,zh.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},zh.prototype.update=function(){var t=new pn;return function(){this.light.updateMatrixWorld();var e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),t.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(t),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}(),Gh.prototype=Object.create(Gs.prototype),Gh.prototype.constructor=Gh,Gh.prototype.updateMatrixWorld=function(){var t=new pn,e=new Tn,n=new Tn;return function(r){var i=this.bones,o=this.geometry,a=o.getAttribute(\"position\");n.getInverse(this.root.matrixWorld);for(var s=0,c=0;s<i.length;s++){var u=i[s];u.parent&&u.parent.isBone&&(e.multiplyMatrices(n,u.matrixWorld),t.setFromMatrixPosition(e),a.setXYZ(c,t.x,t.y,t.z),e.multiplyMatrices(n,u.parent.matrixWorld),t.setFromMatrixPosition(e),a.setXYZ(c+1,t.x,t.y,t.z),c+=2)}o.getAttribute(\"position\").needsUpdate=!0,Ki.prototype.updateMatrixWorld.call(this,r)}}(),Fh.prototype=Object.create(Lo.prototype),Fh.prototype.constructor=Fh,Fh.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},Fh.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)},Hh.prototype=Object.create(Us.prototype),Hh.prototype.constructor=Hh,Hh.prototype.update=function(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var t=this.material.color,e=Math.max(t.r,t.g,t.b);e>1&&t.multiplyScalar(1/e),this.children[0].material.color.copy(this.material.color)}},Hh.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()},jh.prototype=Object.create(Ki.prototype),jh.prototype.constructor=jh,jh.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},jh.prototype.update=function(){var t=new pn,e=new ki,n=new ki;return function(){var r=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var i=r.geometry.getAttribute(\"color\");e.copy(this.light.color),n.copy(this.light.groundColor);for(var o=0,a=i.count;o<a;o++){var s=o<a/2?e:n;i.setXYZ(o,s.r,s.g,s.b)}i.needsUpdate=!0}r.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())}}(),kh.prototype=Object.create(Lo.prototype),kh.prototype.constructor=kh,kh.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},kh.prototype.onBeforeRender=function(){return function(){this.position.copy(this.lightProbe.position),this.scale.set(1,1,1).multiplyScalar(this.size),this.material.uniforms.intensity.value=this.lightProbe.intensity}}(),Vh.prototype=Object.assign(Object.create(Gs.prototype),{constructor:Vh,copy:function(t){return Gs.prototype.copy.call(this,t),this.geometry.copy(t.geometry),this.material.copy(t.material),this},clone:function(){return(new this.constructor).copy(this)}}),Wh.prototype=Object.create(Gs.prototype),Wh.prototype.constructor=Wh,qh.prototype=Object.create(Us.prototype),qh.prototype.constructor=qh,qh.prototype.update=function(){var t,e,n=this.audio,r=this.range,i=this.divisionsInnerAngle,o=this.divisionsOuterAngle,a=un.degToRad(n.panner.coneInnerAngle),s=un.degToRad(n.panner.coneOuterAngle),c=a/2,u=s/2,l=0,h=0,p=this.geometry,d=p.attributes.position;function f(n,i,o,a){var s=(i-n)/o;for(d.setXYZ(l,0,0,0),h++,t=n;t<i;t+=s)e=l+h,d.setXYZ(e,Math.sin(t)*r,0,Math.cos(t)*r),d.setXYZ(e+1,Math.sin(Math.min(t+s,i))*r,0,Math.cos(Math.min(t+s,i))*r),d.setXYZ(e+2,0,0,0),h+=3;p.addGroup(l,h,a),l+=h,h=0}p.clearGroups(),f(-u,-c,o,0),f(-c,c,i,1),f(c,u,o,0),d.needsUpdate=!0,a===s&&(this.material[0].visible=!1)},qh.prototype.dispose=function(){this.geometry.dispose(),this.material[0].dispose(),this.material[1].dispose()},Xh.prototype=Object.create(Gs.prototype),Xh.prototype.constructor=Xh,Xh.prototype.update=function(){var t=new pn,e=new pn,n=new dn;return function(){this.object.updateMatrixWorld(!0),n.getNormalMatrix(this.object.matrixWorld);for(var r=this.object.matrixWorld,i=this.geometry.attributes.position,o=this.object.geometry,a=o.vertices,s=o.faces,c=0,u=0,l=s.length;u<l;u++){var h=s[u],p=h.normal;t.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(r),e.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),i.setXYZ(c,t.x,t.y,t.z),c+=1,i.setXYZ(c,e.x,e.y,e.z),c+=1}i.needsUpdate=!0}}(),Yh.prototype=Object.create(Ki.prototype),Yh.prototype.constructor=Yh,Yh.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},Yh.prototype.update=function(){var t=new pn,e=new pn,n=new pn;return function(){t.setFromMatrixPosition(this.light.matrixWorld),e.setFromMatrixPosition(this.light.target.matrixWorld),n.subVectors(e,t),this.lightPlane.lookAt(e),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(e),this.targetLine.scale.z=n.length()}}(),Jh.prototype=Object.create(Gs.prototype),Jh.prototype.constructor=Jh,Jh.prototype.update=function(){var t,e,n=new pn,r=new vs;function i(i,o,a,s){n.set(o,a,s).unproject(r);var c=e[i];if(void 0!==c)for(var u=t.getAttribute(\"position\"),l=0,h=c.length;l<h;l++)u.setXYZ(c[l],n.x,n.y,n.z)}return function(){t=this.geometry,e=this.pointMap;var n=1,o=1;r.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),i(\"c\",0,0,-1),i(\"t\",0,0,1),i(\"n1\",-n,-o,-1),i(\"n2\",n,-o,-1),i(\"n3\",-n,o,-1),i(\"n4\",n,o,-1),i(\"f1\",-n,-o,1),i(\"f2\",n,-o,1),i(\"f3\",-n,o,1),i(\"f4\",n,o,1),i(\"u1\",.7*n,1.1*o,-1),i(\"u2\",.7*-n,1.1*o,-1),i(\"u3\",0,2*o,-1),i(\"cf1\",-n,0,1),i(\"cf2\",n,0,1),i(\"cf3\",0,-o,1),i(\"cf4\",0,o,1),i(\"cn1\",-n,0,-1),i(\"cn2\",n,0,-1),i(\"cn3\",0,-o,-1),i(\"cn4\",0,o,-1),t.getAttribute(\"position\").needsUpdate=!0}}(),Zh.prototype=Object.create(Gs.prototype),Zh.prototype.constructor=Zh,Zh.prototype.update=function(){var t=new _n;return function(e){if(void 0!==e&&console.warn(\"THREE.BoxHelper: .update() has no longer arguments.\"),void 0!==this.object&&t.setFromObject(this.object),!t.isEmpty()){var n=t.min,r=t.max,i=this.geometry.attributes.position,o=i.array;o[0]=r.x,o[1]=r.y,o[2]=r.z,o[3]=n.x,o[4]=r.y,o[5]=r.z,o[6]=n.x,o[7]=n.y,o[8]=r.z,o[9]=r.x,o[10]=n.y,o[11]=r.z,o[12]=r.x,o[13]=r.y,o[14]=n.z,o[15]=n.x,o[16]=r.y,o[17]=n.z,o[18]=n.x,o[19]=n.y,o[20]=n.z,o[21]=r.x,o[22]=n.y,o[23]=n.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}(),Zh.prototype.setFromObject=function(t){return this.object=t,this.update(),this},Zh.prototype.copy=function(t){return Gs.prototype.copy.call(this,t),this.object=t.object,this},Zh.prototype.clone=function(){return(new this.constructor).copy(this)},Qh.prototype=Object.create(Gs.prototype),Qh.prototype.constructor=Qh,Qh.prototype.updateMatrixWorld=function(t){var e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),Ki.prototype.updateMatrixWorld.call(this,t))},Kh.prototype=Object.create(Us.prototype),Kh.prototype.constructor=Kh,Kh.prototype.updateMatrixWorld=function(t){var e=-this.plane.constant;Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?G:U,this.lookAt(this.plane.normal),Ki.prototype.updateMatrixWorld.call(this,t)},$h.prototype=Object.create(Ki.prototype),$h.prototype.constructor=$h,$h.prototype.setDirection=function(){var t,e=new pn;return function(n){n.y>.99999?this.quaternion.set(0,0,0,1):n.y<-.99999?this.quaternion.set(1,0,0,0):(e.set(n.z,0,-n.x).normalize(),t=Math.acos(n.y),this.quaternion.setFromAxisAngle(e,t))}}(),$h.prototype.setLength=function(t,e,n){void 0===e&&(e=.2*t),void 0===n&&(n=.2*e),this.line.scale.set(1,Math.max(0,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()},$h.prototype.setColor=function(t){this.line.material.color.copy(t),this.cone.material.color.copy(t)},$h.prototype.copy=function(t){return Ki.prototype.copy.call(this,t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this},$h.prototype.clone=function(){return(new this.constructor).copy(this)},tp.prototype=Object.create(Gs.prototype),tp.prototype.constructor=tp;var np=0,rp=1;function ip(t){return console.warn(\"THREE.MeshFaceMaterial has been removed. Use an Array instead.\"),t}function op(t){return void 0===t&&(t=[]),console.warn(\"THREE.MultiMaterial has been removed. Use an Array instead.\"),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t}function ap(t,e){return console.warn(\"THREE.PointCloud has been renamed to THREE.Points.\"),new js(t,e)}function sp(t){return console.warn(\"THREE.Particle has been renamed to THREE.Sprite.\"),new Os(t)}function cp(t,e){return console.warn(\"THREE.ParticleSystem has been renamed to THREE.Points.\"),new js(t,e)}function up(t){return console.warn(\"THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.\"),new Hs(t)}function lp(t){return console.warn(\"THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.\"),new Hs(t)}function hp(t){return console.warn(\"THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.\"),new Hs(t)}function pp(t,e,n){return console.warn(\"THREE.Vertex has been removed. Use THREE.Vector3 instead.\"),new pn(t,e,n)}function dp(t,e){return console.warn(\"THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.\"),new eo(t,e).setDynamic(!0)}function fp(t,e){return console.warn(\"THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.\"),new no(t,e)}function mp(t,e){return console.warn(\"THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.\"),new ro(t,e)}function vp(t,e){return console.warn(\"THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.\"),new io(t,e)}function gp(t,e){return console.warn(\"THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.\"),new oo(t,e)}function yp(t,e){return console.warn(\"THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.\"),new ao(t,e)}function xp(t,e){return console.warn(\"THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.\"),new so(t,e)}function bp(t,e){return console.warn(\"THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.\"),new co(t,e)}function wp(t,e){return console.warn(\"THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.\"),new uo(t,e)}function _p(t,e){return console.warn(\"THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.\"),new lo(t,e)}function Mp(t){console.warn(\"THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.\"),ol.call(this,t),this.type=\"catmullrom\",this.closed=!0}function Sp(t){console.warn(\"THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.\"),ol.call(this,t),this.type=\"catmullrom\"}function Ep(t){console.warn(\"THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.\"),ol.call(this,t),this.type=\"catmullrom\"}function Tp(t){return console.warn(\"THREE.AxisHelper has been renamed to THREE.AxesHelper.\"),new tp(t)}function Ap(t,e){return console.warn(\"THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.\"),new Zh(t,e)}function Lp(t,e){return console.warn(\"THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.\"),new Gs(new ou(t.geometry),new zs({color:void 0!==e?e:16777215}))}function Pp(t,e){return console.warn(\"THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.\"),new Gs(new Xs(t.geometry),new zs({color:void 0!==e?e:16777215}))}function Rp(t){return console.warn(\"THREE.XHRLoader has been renamed to THREE.FileLoader.\"),new Vu(t)}function Cp(t){return console.warn(\"THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.\"),new Xu(t)}Qu.create=function(t,e){return console.log(\"THREE.Curve.create() has been deprecated\"),t.prototype=Object.create(Qu.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(Sl.prototype,{createPointsGeometry:function(t){console.warn(\"THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.\");var e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn(\"THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.\");var e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn(\"THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.\");for(var e=new to,n=0,r=t.length;n<r;n++){var i=t[n];e.vertices.push(new pn(i.x,i.y,i.z||0))}return e}}),Object.assign(El.prototype,{fromPoints:function(t){console.warn(\"THREE.Path: .fromPoints() has been renamed to .setFromPoints().\"),this.setFromPoints(t)}}),Mp.prototype=Object.create(ol.prototype),Sp.prototype=Object.create(ol.prototype),Ep.prototype=Object.create(ol.prototype),Object.assign(Ep.prototype,{initFromArray:function(){console.error(\"THREE.Spline: .initFromArray() has been removed.\")},getControlPointsArray:function(){console.error(\"THREE.Spline: .getControlPointsArray() has been removed.\")},reparametrizeByArcLength:function(){console.error(\"THREE.Spline: .reparametrizeByArcLength() has been removed.\")}}),Vh.prototype.setColors=function(){console.error(\"THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.\")},Gh.prototype.update=function(){console.error(\"THREE.SkeletonHelper: update() no longer needs to be called.\")},Object.assign($l.prototype,{extractUrlBase:function(t){return console.warn(\"THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.\"),Gl.extractUrlBase(t)}}),Object.assign(jl.prototype,{setTexturePath:function(t){return console.warn(\"THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().\"),this.setResourcePath(t)}}),Object.assign(Ih.prototype,{center:function(t){return console.warn(\"THREE.Box2: .center() has been renamed to .getCenter().\"),this.getCenter(t)},empty:function(){return console.warn(\"THREE.Box2: .empty() has been renamed to .isEmpty().\"),this.isEmpty()},isIntersectionBox:function(t){return console.warn(\"THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().\"),this.intersectsBox(t)},size:function(t){return console.warn(\"THREE.Box2: .size() has been renamed to .getSize().\"),this.getSize(t)}}),Object.assign(_n.prototype,{center:function(t){return console.warn(\"THREE.Box3: .center() has been renamed to .getCenter().\"),this.getCenter(t)},empty:function(){return console.warn(\"THREE.Box3: .empty() has been renamed to .isEmpty().\"),this.isEmpty()},isIntersectionBox:function(t){return console.warn(\"THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().\"),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn(\"THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().\"),this.intersectsSphere(t)},size:function(t){return console.warn(\"THREE.Box3: .size() has been renamed to .getSize().\"),this.getSize(t)}}),Dh.prototype.center=function(t){return console.warn(\"THREE.Line3: .center() has been renamed to .getCenter().\"),this.getCenter(t)},Object.assign(un,{random16:function(){return console.warn(\"THREE.Math: .random16() has been deprecated. Use Math.random() instead.\"),Math.random()},nearestPowerOfTwo:function(t){return console.warn(\"THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().\"),un.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn(\"THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().\"),un.ceilPowerOfTwo(t)}}),Object.assign(dn.prototype,{flattenToArrayOffset:function(t,e){return console.warn(\"THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.\"),this.toArray(t,e)},multiplyVector3:function(t){return console.warn(\"THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.\"),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error(\"THREE.Matrix3: .multiplyVector3Array() has been removed.\")},applyToBuffer:function(t){return console.warn(\"THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.\"),this.applyToBufferAttribute(t)},applyToVector3Array:function(){console.error(\"THREE.Matrix3: .applyToVector3Array() has been removed.\")}}),Object.assign(Tn.prototype,{extractPosition:function(t){return console.warn(\"THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().\"),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn(\"THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.\"),this.toArray(t,e)},getPosition:function(){var t;return function(){return void 0===t&&(t=new pn),console.warn(\"THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.\"),t.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(t){return console.warn(\"THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().\"),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn(\"THREE.Matrix4: .multiplyToArray() has been removed.\")},multiplyVector3:function(t){return console.warn(\"THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.\"),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn(\"THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.\"),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error(\"THREE.Matrix4: .multiplyVector3Array() has been removed.\")},rotateAxis:function(t){console.warn(\"THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.\"),t.transformDirection(this)},crossVector:function(t){return console.warn(\"THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.\"),t.applyMatrix4(this)},translate:function(){console.error(\"THREE.Matrix4: .translate() has been removed.\")},rotateX:function(){console.error(\"THREE.Matrix4: .rotateX() has been removed.\")},rotateY:function(){console.error(\"THREE.Matrix4: .rotateY() has been removed.\")},rotateZ:function(){console.error(\"THREE.Matrix4: .rotateZ() has been removed.\")},rotateByAxis:function(){console.error(\"THREE.Matrix4: .rotateByAxis() has been removed.\")},applyToBuffer:function(t){return console.warn(\"THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.\"),this.applyToBufferAttribute(t)},applyToVector3Array:function(){console.error(\"THREE.Matrix4: .applyToVector3Array() has been removed.\")},makeFrustum:function(t,e,n,r,i,o){return console.warn(\"THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.\"),this.makePerspective(t,e,r,n,i,o)}}),Sn.prototype.isIntersectionLine=function(t){return console.warn(\"THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().\"),this.intersectsLine(t)},hn.prototype.multiplyVector3=function(t){return console.warn(\"THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.\"),t.applyQuaternion(this)},Object.assign(Eo.prototype,{isIntersectionBox:function(t){return console.warn(\"THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().\"),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn(\"THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().\"),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn(\"THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().\"),this.intersectsSphere(t)}}),Object.assign(To.prototype,{area:function(){return console.warn(\"THREE.Triangle: .area() has been renamed to .getArea().\"),this.getArea()},barycoordFromPoint:function(t,e){return console.warn(\"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().\"),this.getBarycoord(t,e)},midpoint:function(t){return console.warn(\"THREE.Triangle: .midpoint() has been renamed to .getMidpoint().\"),this.getMidpoint(t)},normal:function(t){return console.warn(\"THREE.Triangle: .normal() has been renamed to .getNormal().\"),this.getNormal(t)},plane:function(t){return console.warn(\"THREE.Triangle: .plane() has been renamed to .getPlane().\"),this.getPlane(t)}}),Object.assign(To,{barycoordFromPoint:function(t,e,n,r,i){return console.warn(\"THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().\"),To.getBarycoord(t,e,n,r,i)},normal:function(t,e,n,r){return console.warn(\"THREE.Triangle: .normal() has been renamed to .getNormal().\"),To.getNormal(t,e,n,r)}}),Object.assign(Tl.prototype,{extractAllPoints:function(t){return console.warn(\"THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.\"),this.extractPoints(t)},extrude:function(t){return console.warn(\"THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.\"),new Vc(this,t)},makeGeometry:function(t){return console.warn(\"THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.\"),new nu(this,t)}}),Object.assign(ln.prototype,{fromAttribute:function(t,e,n){return console.warn(\"THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().\"),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn(\"THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().\"),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn(\"THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().\"),this.manhattanLength()}}),Object.assign(pn.prototype,{setEulerFromRotationMatrix:function(){console.error(\"THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.\")},setEulerFromQuaternion:function(){console.error(\"THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.\")},getPositionFromMatrix:function(t){return console.warn(\"THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().\"),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn(\"THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().\"),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn(\"THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().\"),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn(\"THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.\"),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn(\"THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().\"),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn(\"THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().\"),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn(\"THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().\"),this.manhattanLength()}}),Object.assign(gn.prototype,{fromAttribute:function(t,e,n){return console.warn(\"THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().\"),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn(\"THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().\"),this.manhattanLength()}}),Object.assign(to.prototype,{computeTangents:function(){console.error(\"THREE.Geometry: .computeTangents() has been removed.\")},computeLineDistances:function(){console.error(\"THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.\")}}),Object.assign(Ki.prototype,{getChildByName:function(t){return console.warn(\"THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().\"),this.getObjectByName(t)},renderDepth:function(){console.warn(\"THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.\")},translate:function(t,e){return console.warn(\"THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.\"),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error(\"THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.\")}}),Object.defineProperties(Ki.prototype,{eulerOrder:{get:function(){return console.warn(\"THREE.Object3D: .eulerOrder is now .rotation.order.\"),this.rotation.order},set:function(t){console.warn(\"THREE.Object3D: .eulerOrder is now .rotation.order.\"),this.rotation.order=t}},useQuaternion:{get:function(){console.warn(\"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.\")},set:function(){console.warn(\"THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.\")}}}),Object.defineProperties(Is.prototype,{objects:{get:function(){return console.warn(\"THREE.LOD: .objects has been renamed to .levels.\"),this.levels}}}),Object.defineProperty(Ns.prototype,\"useVertexTexture\",{get:function(){console.warn(\"THREE.Skeleton: useVertexTexture has been removed.\")},set:function(){console.warn(\"THREE.Skeleton: useVertexTexture has been removed.\")}}),Ds.prototype.initBones=function(){console.error(\"THREE.SkinnedMesh: initBones() has been removed.\")},Object.defineProperty(Qu.prototype,\"__arcLengthDivisions\",{get:function(){return console.warn(\"THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.\"),this.arcLengthDivisions},set:function(t){console.warn(\"THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.\"),this.arcLengthDivisions=t}}),gs.prototype.setLens=function(t,e){console.warn(\"THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.\"),void 0!==e&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Al.prototype,{onlyShadow:{set:function(){console.warn(\"THREE.Light: .onlyShadow has been removed.\")}},shadowCameraFov:{set:function(t){console.warn(\"THREE.Light: .shadowCameraFov is now .shadow.camera.fov.\"),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn(\"THREE.Light: .shadowCameraLeft is now .shadow.camera.left.\"),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn(\"THREE.Light: .shadowCameraRight is now .shadow.camera.right.\"),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn(\"THREE.Light: .shadowCameraTop is now .shadow.camera.top.\"),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn(\"THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.\"),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn(\"THREE.Light: .shadowCameraNear is now .shadow.camera.near.\"),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn(\"THREE.Light: .shadowCameraFar is now .shadow.camera.far.\"),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn(\"THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.\")}},shadowBias:{set:function(t){console.warn(\"THREE.Light: .shadowBias is now .shadow.bias.\"),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn(\"THREE.Light: .shadowDarkness has been removed.\")}},shadowMapWidth:{set:function(t){console.warn(\"THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.\"),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn(\"THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.\"),this.shadow.mapSize.height=t}}}),Object.defineProperties(eo.prototype,{length:{get:function(){return console.warn(\"THREE.BufferAttribute: .length has been deprecated. Use .count instead.\"),this.array.length}},copyIndicesArray:function(){console.error(\"THREE.BufferAttribute: .copyIndicesArray() has been removed.\")}}),Object.assign(mo.prototype,{addIndex:function(t){console.warn(\"THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().\"),this.setIndex(t)},addDrawCall:function(t,e,n){void 0!==n&&console.warn(\"THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.\"),console.warn(\"THREE.BufferGeometry: .addDrawCall() is now .addGroup().\"),this.addGroup(t,e)},clearDrawCalls:function(){console.warn(\"THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().\"),this.clearGroups()},computeTangents:function(){console.warn(\"THREE.BufferGeometry: .computeTangents() has been removed.\")},computeOffsets:function(){console.warn(\"THREE.BufferGeometry: .computeOffsets() has been removed.\")}}),Object.defineProperties(mo.prototype,{drawcalls:{get:function(){return console.error(\"THREE.BufferGeometry: .drawcalls has been renamed to .groups.\"),this.groups}},offsets:{get:function(){return console.warn(\"THREE.BufferGeometry: .offsets has been renamed to .groups.\"),this.groups}}}),Object.assign(Wc.prototype,{getArrays:function(){console.error(\"THREE.ExtrudeBufferGeometry: .getArrays() has been removed.\")},addShapeList:function(){console.error(\"THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.\")},addShape:function(){console.error(\"THREE.ExtrudeBufferGeometry: .addShape() has been removed.\")}}),Object.defineProperties(Sh.prototype,{dynamic:{set:function(){console.warn(\"THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.\")}},onUpdate:{value:function(){return console.warn(\"THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.\"),this}}}),Object.defineProperties(wo.prototype,{wrapAround:{get:function(){console.warn(\"THREE.Material: .wrapAround has been removed.\")},set:function(){console.warn(\"THREE.Material: .wrapAround has been removed.\")}},overdraw:{get:function(){console.warn(\"THREE.Material: .overdraw has been removed.\")},set:function(){console.warn(\"THREE.Material: .overdraw has been removed.\")}},wrapRGB:{get:function(){return console.warn(\"THREE.Material: .wrapRGB has been removed.\"),new ki}},shading:{get:function(){console.error(\"THREE.\"+this.type+\": .shading has been removed. Use the boolean .flatShading instead.\")},set:function(t){console.warn(\"THREE.\"+this.type+\": .shading has been removed. Use the boolean .flatShading instead.\"),this.flatShading=t===H}}}),Object.defineProperties(gu.prototype,{metal:{get:function(){return console.warn(\"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.\"),!1},set:function(){console.warn(\"THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead\")}}}),Object.defineProperties(So.prototype,{derivatives:{get:function(){return console.warn(\"THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.\"),this.extensions.derivatives},set:function(t){console.warn(\"THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.\"),this.extensions.derivatives=t}}}),Object.assign(Es.prototype,{clearTarget:function(t,e,n,r){console.warn(\"THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.\"),this.setRenderTarget(t),this.clear(e,n,r)},animate:function(t){console.warn(\"THREE.WebGLRenderer: .animate() is now .setAnimationLoop().\"),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn(\"THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().\"),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn(\"THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().\"),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn(\"THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.\"),this.capabilities.precision},resetGLState:function(){return console.warn(\"THREE.WebGLRenderer: .resetGLState() is now .state.reset().\"),this.state.reset()},supportsFloatTextures:function(){return console.warn(\"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).\"),this.extensions.get(\"OES_texture_float\")},supportsHalfFloatTextures:function(){return console.warn(\"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).\"),this.extensions.get(\"OES_texture_half_float\")},supportsStandardDerivatives:function(){return console.warn(\"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).\"),this.extensions.get(\"OES_standard_derivatives\")},supportsCompressedTextureS3TC:function(){return console.warn(\"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).\"),this.extensions.get(\"WEBGL_compressed_texture_s3tc\")},supportsCompressedTexturePVRTC:function(){return console.warn(\"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).\"),this.extensions.get(\"WEBGL_compressed_texture_pvrtc\")},supportsBlendMinMax:function(){return console.warn(\"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).\"),this.extensions.get(\"EXT_blend_minmax\")},supportsVertexTextures:function(){return console.warn(\"THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.\"),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn(\"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).\"),this.extensions.get(\"ANGLE_instanced_arrays\")},enableScissorTest:function(t){console.warn(\"THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().\"),this.setScissorTest(t)},initMaterial:function(){console.warn(\"THREE.WebGLRenderer: .initMaterial() has been removed.\")},addPrePlugin:function(){console.warn(\"THREE.WebGLRenderer: .addPrePlugin() has been removed.\")},addPostPlugin:function(){console.warn(\"THREE.WebGLRenderer: .addPostPlugin() has been removed.\")},updateShadowMap:function(){console.warn(\"THREE.WebGLRenderer: .updateShadowMap() has been removed.\")},setFaceCulling:function(){console.warn(\"THREE.WebGLRenderer: .setFaceCulling() has been removed.\")},allocTextureUnit:function(){console.warn(\"THREE.WebGLRenderer: .allocTextureUnit() has been removed.\")},setTexture:function(){console.warn(\"THREE.WebGLRenderer: .setTexture() has been removed.\")},setTexture2D:function(){console.warn(\"THREE.WebGLRenderer: .setTexture2D() has been removed.\")},setTextureCube:function(){console.warn(\"THREE.WebGLRenderer: .setTextureCube() has been removed.\")}}),Object.defineProperties(Es.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn(\"THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.\"),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn(\"THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.\"),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn(\"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.\")},set:function(){console.warn(\"THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.\")}}}),Object.defineProperties(hs.prototype,{cullFace:{get:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.\")},set:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.\")}},renderReverseSided:{get:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.\")},set:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.\")}},renderSingleSided:{get:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.\")},set:function(){console.warn(\"THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.\")}}}),Object.defineProperties(bn.prototype,{activeCubeFace:{set:function(){console.warn(\"THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().\")}},activeMipMapLevel:{set:function(){console.warn(\"THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().\")}}}),Object.defineProperties(yn.prototype,{wrapS:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.\"),this.texture.wrapS},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.\"),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.\"),this.texture.wrapT},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.\"),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.\"),this.texture.magFilter},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.\"),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.\"),this.texture.minFilter},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.\"),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.\"),this.texture.anisotropy},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.\"),this.texture.anisotropy=t}},offset:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .offset is now .texture.offset.\"),this.texture.offset},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .offset is now .texture.offset.\"),this.texture.offset=t}},repeat:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .repeat is now .texture.repeat.\"),this.texture.repeat},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .repeat is now .texture.repeat.\"),this.texture.repeat=t}},format:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .format is now .texture.format.\"),this.texture.format},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .format is now .texture.format.\"),this.texture.format=t}},type:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .type is now .texture.type.\"),this.texture.type},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .type is now .texture.type.\"),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn(\"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.\"),this.texture.generateMipmaps},set:function(t){console.warn(\"THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.\"),this.texture.generateMipmaps=t}}}),Object.defineProperties(Ms.prototype,{standing:{set:function(){console.warn(\"THREE.WebVRManager: .standing has been removed.\")}},userHeight:{set:function(){console.warn(\"THREE.WebVRManager: .userHeight has been removed.\")}}}),ph.prototype.load=function(t){console.warn(\"THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.\");var e=this,n=new eh;return n.load(t,function(t){e.setBuffer(t)}),this},fh.prototype.getData=function(){return console.warn(\"THREE.AudioAnalyser: .getData() is now .getFrequencyData().\"),this.getFrequencyData()},uh.prototype.updateCubeMap=function(t,e){return console.warn(\"THREE.CubeCamera: .updateCubeMap() is now .update().\"),this.update(t,e)};var Op={merge:function(t,e,n){var r;console.warn(\"THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.\"),e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),r=e.matrix,e=e.geometry),t.merge(e,r,n)},center:function(t){return console.warn(\"THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.\"),t.center()}};function Ip(){console.error(\"THREE.Projector has been moved to /examples/js/renderers/Projector.js.\"),this.projectVector=function(t,e){console.warn(\"THREE.Projector: .projectVector() is now vector.project().\"),t.project(e)},this.unprojectVector=function(t,e){console.warn(\"THREE.Projector: .unprojectVector() is now vector.unproject().\"),t.unproject(e)},this.pickingRay=function(){console.error(\"THREE.Projector: .pickingRay() is now raycaster.setFromCamera().\")}}function Dp(){console.error(\"THREE.CanvasRenderer has been removed\")}function Np(){console.error(\"THREE.JSONLoader has been removed.\")}fn.crossOrigin=void 0,fn.loadTexture=function(t,e,n,r){console.warn(\"THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.\");var i=new Zu;i.setCrossOrigin(this.crossOrigin);var o=i.load(t,n,void 0,r);return e&&(o.mapping=e),o},fn.loadTextureCube=function(t,e,n,r){console.warn(\"THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.\");var i=new Ju;i.setCrossOrigin(this.crossOrigin);var o=i.load(t,n,void 0,r);return e&&(o.mapping=e),o},fn.loadCompressedTexture=function(){console.error(\"THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.\")},fn.loadCompressedTextureCube=function(){console.error(\"THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.\")};var Bp={createMultiMaterialObject:function(){console.error(\"THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js\")},detach:function(){console.error(\"THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js\")},attach:function(){console.error(\"THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js\")}};function zp(){console.error(\"THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js\")}var Up=n(\"2100\"),Gp=n.n(Up);function Fp(t,e,n){return-1!==t.indexOf(e)&&t.slice(t.indexOf(e)+e.length,t.indexOf(n))}var Hp=function(t){var e={};t=t.trim(),e.template=Fp(t,\"<template>\",\"</template>\")||\"\",e.script=Fp(t,\"<script>\",\"<\\/script>\")||\"\",e.style=Fp(t,\"<style>\",\"</style>\")||Fp(t,\"<style scoped>\",\"</style>\");var n=!!Fp(t,\"<style scoped>\",\"</style>\");return e.styleScoped=n,e},jp=function(){var t=_(regeneratorRuntime.mark(function t(e){var n,r,o,a,s,c,u,l,h,p,d,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.src,r=e.noCSS,o=e.library,a=void 0===o?[]:o,s=Hp(n),c=\" data-s-\"+Math.ceil(1e5*Math.random()).toString(36),u=JSON.stringify(s.style),s.template=s.template.replace(\">\",\"\".concat(c,\">\")),r&&(u=JSON.stringify(\"\")),l=\"\\n    var css = \".concat(u,\";\\n    var head = document.head || document.getElementsByTagName('head')[0];\\n    var style = document.createElement('style');\\n    style.type = 'text/css';\\n    if (style.styleSheet) {\\n      style.styleSheet.cssText = css;\\n    } else {\\n      style.appendChild(document.createTextNode(css));\\n    }\\n\\n    function addScope (styleElt, scopeName) {\\n\\n      function process() {\\n\\n        var sheet = styleElt.sheet;\\n        var rules = sheet.cssRules;\\n        for ( var i = 0; i < rules.length; ++i ) {\\n          let rule = rules[i];\\n\\n          if ( rule.type === 4 ) {\\n\\n            // console.log(rule)\\n            for ( var j = 0; j < rule.cssRules.length; ++j ) {\\n\\n              let scopedSelectors = [];\\n              let subRule = rule.cssRules[j];\\n\\n              subRule.selectorText.split(/s*,s*/).forEach(function(sel) {\\n\\n                scopedSelectors.push(scopeName+' '+sel);\\n                let segments = sel.match(/([^ :]+)(.+)?/);\\n                scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));\\n              });\\n\\n              let scopedRule = scopedSelectors.join(',') + subRule.cssText.substr(subRule.selectorText.length);\\n\\n              rule.deleteRule(j);\\n              rule.insertRule(scopedRule, j);\\n              // console.log(rule);\\n            }\\n\\n            continue;\\n          }\\n\\n          if ( rule.type !== 1 )\\n            continue;\\n\\n          let scopedSelectors = [];\\n\\n          rule.selectorText.split(/s*,s*/).forEach(function(sel) {\\n\\n            scopedSelectors.push(scopeName+' '+sel);\\n            let segments = sel.match(/([^ :]+)(.+)?/);\\n            scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));\\n          });\\n\\n          let scopedRule = scopedSelectors.join(',') + rule.cssText.substr(rule.selectorText.length);\\n          sheet.deleteRule(i);\\n          sheet.insertRule(scopedRule, i);\\n        }\\n      }\\n\\n      try {\\n        // firefox may fail sheet.cssRules with InvalidAccessError\\n        process();\\n      } catch (ex) {\\n\\n        if ( ex instanceof DOMException && ex.code === DOMException.INVALID_ACCESS_ERR ) {\\n\\n          styleElt.sheet.disabled = true;\\n          styleElt.addEventListener('load', function onStyleLoaded() {\\n\\n            styleElt.removeEventListener('load', onStyleLoaded);\\n\\n            // firefox need this timeout otherwise we have to use document.importNode(style, true)\\n            setTimeout(function() {\\n\\n              process();\\n              styleElt.sheet.disabled = false;\\n            });\\n          });\\n          return;\\n        }\\n\\n        throw ex;\\n      }\\n    }\\n\\n    head.appendChild(style);\\n    if (\").concat(s.styleScoped,\") {\\n      addScope(style, '[\").concat(c,\"]');\\n    }\\n  \"),s.script=\"var mycompo = { template: '<div></div>' };\"+s.script,s.script=s.script.replace(\"export default {\",\"mycompo = { \\n\\ttemplate: \".concat(JSON.stringify(s.template),\",\")),h=\"\\n    return mycompo;\\n  \",p=l+s.script+h,window.THREE=i,t.next=14,Gp()(a.filter(function(t){return t.url}).map(function(t){return{url:t.url}}));case 14:return d=new Function(\"Vue\",\"THREE\",\"window\",p),f=d(S.a,i,window),t.abrupt(\"return\",f);case 17:case\"end\":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),kp=function(t){var e=t.vue,n=t.dep,r=void 0===n?{}:n;return e.components=v({},e.components,r),e},Vp={},Wp=function(){var t=_(regeneratorRuntime.mark(function t(e){var n,r,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.src,r=e.library,i=void 0===r?[]:r,!Vp[n]){t.next=5;break}return t.abrupt(\"return\",Vp[n]);case 5:return t.next=7,jp({src:n,noCSS:!1,library:i});case 7:return o=t.sent,o=kp({vue:o,dep:{}}),Vp[n]=o,t.abrupt(\"return\",o);case 11:case\"end\":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),qp={props:{timename:{},time:{},progress:{},timetracks:{},node:{},nodes:{},compoMap:{},execStack:{default:function(){return{}}}},data:function(){var t=this;return{parentNode:this.nodes.find(function(e){return e._id===t.node.to}),compo:!1,self:{},rAFID:0,execFnc:function(){}}},beforeDestroy:function(){this.execStack[this.node._id]=!1},created:function(){var t=this,e=setInterval(function(){var n=t.compoMap[t.node._id],r=t.compoMap[t.node.to];r&&n&&(clearInterval(e),r.$emit(\"addChild\",{child:n,me:r}),t.tryTestComplete())},0)},methods:{onExec:function(t){this.execStack[this.node._id]=t},tryTestComplete:function(){Object.keys(this.compoMap).length===this.nodes.length&&this.$emit(\"all-done\")},onReady:function(t){this.compoMap[this.node._id]=t},onRemove:function(){var t=this.$refs[\"me\"],e=this.compoMap[this.node.to];this.node.to&&this.compoMap[this.node.to].$emit(\"removeChild\",{child:t,me:e})},getCompos:function(){var t=_(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.node,r='\\n        <template>\\n          <div class=\"omg-this-compo\" nodeid=\"'.concat(n._id,'\"></div>\\n        </template>\\n        <script>\\n        export default {\\n        };\\n        ',\"<\",\"/script>\\n        <style>\\n        </style>\\n      \"),t.next=4,Wp({src:n.src||r,library:n.library||[]});case 4:this.compo=t.sent;case 5:case\"end\":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),init:function(){}},mounted:function(){this.getCompos({node:this.node})}},Xp=qp;function Yp(t,e,n,r,i,o,a,s){var c,u=\"function\"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId=\"data-v-\"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||\"undefined\"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}var Jp=Yp(Xp,g,y,!1,null,null,null),Zp=Jp.exports,Qp={components:{GraphNode:Zp},props:{water:{}},computed:{nodes:function(){return this.water.nodes},activeNodes:function(){return this.nodes.filter(function(t){return!t.trashed}).slice()}},watch:{water:function(){}},data:function(){return{timetracks:[],timename:{},getTime:function(t){var e=.001*window.performance.now();return e-t},execStack:{},compoMap:{}}},mounted:function(){var t=this,e=window.parent;e&&window.addEventListener(\"keydown\",function(t){27===t.keyCode&&\"null\"!==window.location.origin&&e.postMessage({type:\"escape\"},window.location.origin)}),window.addEventListener(\"message\",function(e){if(window.parent&&window.parent.location.origin===window.location.origin&&window.location.origin){var n=e.data,r=n.type,i=n.data;\"sync-all\"===r&&(t.water.timeline=i.timeline,t.water.timeinfo=i.timeinfo,cancelAnimationFrame(t.clearTimer))}});var n=function e(){if(t.clearTimer=requestAnimationFrame(e),\"timer\"===t.water.timeinfo.timelineControl&&t.water.timeinfo.timelinePlaying){var n=t.water.timeline.totalTime;t.water.timeinfo.timelinePercentageLast=t.getTime(t.water.timeinfo.start)/n;var r=t.water.timeinfo.timelinePercentageLast*n;t.water.timeinfo.timelinePercentage=r/n,t.water.timeinfo.timelinePercentage%=1}};this.clearTimer=requestAnimationFrame(n);var r=function e(){for(var n in t.rAFID=window.requestAnimationFrame(e),t.makeTimeVars(),t.execStack){var r=t.execStack[n];r&&r()}};this.rAFID=window.requestAnimationFrame(r)},beforeDestroy:function(){cancelAnimationFrame(this.rAFID)},methods:{onAllDone:function(){var t=window.parent;t&&\"null\"!==window.location.origin&&t.postMessage({type:\"all-ready\",data:this.water},window.location.origin)},makeTimeVars:function(){var t=this.water.timeline.totalTime,e=this.water.timeinfo.timelinePercentage,n=t*e,r=this.water.timeline.tracks.reduce(function(e,r){var i=r.start,o=r.end,a=o-i,s=v({},r,{clock:n,now:n/t,progress:(n-i)/a});return n<i&&(s.progress=0),n>o&&(s.progress=1),e.map[r.title]=s.progress,e.array.push(s),e},{map:{},array:[]});this.timename=r.map,this.timetracks=r.array}}},Kp=Qp,$p=(n(\"923e\"),Yp(Kp,o,a,!1,null,\"453a1115\",null)),td=$p.exports;e[\"default\"]=td},fde4:function(t,e,n){n(\"bf90\");var r=n(\"584a\").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}})[\"default\"]});\n//# sourceMappingURL=effectnodegraph.umd.min.js.map");

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
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

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
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

/***/ "a22a":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("d864");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var anObject = __webpack_require__("e4ae");
var toLength = __webpack_require__("b447");
var getIterFn = __webpack_require__("7cd6");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aba2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var macrotask = __webpack_require__("4178").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("6b4c")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "aebd":
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

/***/ "b0b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"____APPID____\">\n\n</div>");

/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b23a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script type=\"json\" id=\"____APPJSON____\">\n____ENGRAPH_WATER____\n</script>\n<script>\n(() => {\n\n  // eslint-disable-next-line no-unused-vars\n  const ENGRAPH_EL = `#____APPID____`\n  let src = document.querySelector('#____APPJSON____').innerHTML.trim()\n  src = decodeURIComponent(src)\n  // eslint-disable-next-line no-unused-vars\n  const ENGRAPH_WATER = JSON.parse(src)\n  // eslint-disable-next-line no-unused-vars\n\n  console.log(effectnodegraph, ENGRAPH_WATER)\n\n  const app = new Vue({\n    components: {\n      effectnodegraph: window.effectnodegraph\n    },\n    el: ENGRAPH_EL,\n    template: `\n      <effectnodegraph v-if=\"water\" :water=\"water\"></effectnodegraph>\n    `,\n    data () {\n      return {\n        water: ENGRAPH_WATER\n      }\n    },\n    methods: {\n      init () {\n\n      }\n    }\n  })\n\n  app.init()\n})()\n</script>");

/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "bc13":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
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

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
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

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd78":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var newPromiseCapability = __webpack_require__("656e");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

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

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d6e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n    <title>Effect Node's Node Graph</title>\n    <!--HEAD-->\n  </head>\n  <body>\n    <noscript>\n      <strong>We're sorry but EffectNode-Graph doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>\n    </noscript>\n    <!--APP-->\n    <!--BODY-->\n  </body>\n</html>\n");

/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
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

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

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

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ed40":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".parent[data-v-8d9731fe]{position:relative;width:100%;height:100%}.iframe[data-v-8d9731fe]{position:absolute;top:0;left:0}", ""]);

// exports


/***/ }),

/***/ "f201":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("e4ae");
var aFunction = __webpack_require__("79aa");
var SPECIES = __webpack_require__("5168")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f8db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*!\n * Vue.js v2.6.10\n * (c) 2014-2019 Evan You\n * Released under the MIT License.\n */\n!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=t():\"function\"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(this,function(){\"use strict\";var e=Object.freeze({});function t(e){return null==e}function n(e){return null!=e}function r(e){return!0===e}function i(e){return\"string\"==typeof e||\"number\"==typeof e||\"symbol\"==typeof e||\"boolean\"==typeof e}function o(e){return null!==e&&\"object\"==typeof e}var a=Object.prototype.toString;function s(e){return\"[object Object]\"===a.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return n(e)&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}function l(e){return null==e?\"\":Array.isArray(e)||s(e)&&e.toString===a?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function p(e,t){for(var n=Object.create(null),r=e.split(\",\"),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var d=p(\"slot,component\",!0),v=p(\"key,ref,slot,slot-scope,is\");function h(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function y(e,t){return m.call(e,t)}function g(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var _=/-(\\w)/g,b=g(function(e){return e.replace(_,function(e,t){return t?t.toUpperCase():\"\"})}),$=g(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\\B([A-Z])/g,C=g(function(e){return e.replace(w,\"-$1\").toLowerCase()});var x=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function A(e,t){for(var n in t)e[n]=t[n];return e}function O(e){for(var t={},n=0;n<e.length;n++)e[n]&&A(t,e[n]);return t}function S(e,t,n){}var T=function(e,t,n){return!1},E=function(e){return e};function N(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return N(e,t[n])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return N(e[n],t[n])})}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(N(e[n],t))return n;return-1}function D(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var L=\"data-server-rendered\",M=[\"component\",\"directive\",\"filter\"],I=[\"beforeCreate\",\"created\",\"beforeMount\",\"mounted\",\"beforeUpdate\",\"updated\",\"beforeDestroy\",\"destroyed\",\"activated\",\"deactivated\",\"errorCaptured\",\"serverPrefetch\"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:S,parsePlatformTagName:E,mustUseProp:T,async:!0,_lifecycleHooks:I},P=/a-zA-Z\\u00B7\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u203F-\\u2040\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD/;function R(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp(\"[^\"+P.source+\".$_\\\\d]\");var B,U=\"__proto__\"in{},z=\"undefined\"!=typeof window,V=\"undefined\"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=V&&WXEnvironment.platform.toLowerCase(),J=z&&window.navigator.userAgent.toLowerCase(),q=J&&/msie|trident/.test(J),W=J&&J.indexOf(\"msie 9.0\")>0,Z=J&&J.indexOf(\"edge/\")>0,G=(J&&J.indexOf(\"android\"),J&&/iphone|ipad|ipod|ios/.test(J)||\"ios\"===K),X=(J&&/chrome\\/\\d+/.test(J),J&&/phantomjs/.test(J),J&&J.match(/firefox\\/(\\d+)/)),Y={}.watch,Q=!1;if(z)try{var ee={};Object.defineProperty(ee,\"passive\",{get:function(){Q=!0}}),window.addEventListener(\"test-passive\",null,ee)}catch(e){}var te=function(){return void 0===B&&(B=!z&&!V&&\"undefined\"!=typeof global&&(global.process&&\"server\"===global.process.env.VUE_ENV)),B},ne=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return\"function\"==typeof e&&/native code/.test(e.toString())}var ie,oe=\"undefined\"!=typeof Symbol&&re(Symbol)&&\"undefined\"!=typeof Reflect&&re(Reflect.ownKeys);ie=\"undefined\"!=typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ae=S,se=0,ce=function(){this.id=se++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){h(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function le(e){ue.push(e),ce.target=e}function fe(){ue.pop(),ce.target=ue[ue.length-1]}var pe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var ve=function(e){void 0===e&&(e=\"\");var t=new pe;return t.text=e,t.isComment=!0,t};function he(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var t=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,ge=Object.create(ye);[\"push\",\"pop\",\"shift\",\"unshift\",\"splice\",\"sort\",\"reverse\"].forEach(function(e){var t=ye[e];R(ge,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case\"push\":case\"unshift\":i=n;break;case\"splice\":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var _e=Object.getOwnPropertyNames(ge),be=!0;function $e(e){be=e}var we=function(e){var t;this.value=e,this.dep=new ce,this.vmCount=0,R(e,\"__ob__\",this),Array.isArray(e)?(U?(t=ge,e.__proto__=t):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];R(e,o,t[o])}}(e,ge,_e),this.observeArray(e)):this.walk(e)};function Ce(e,t){var n;if(o(e)&&!(e instanceof pe))return y(e,\"__ob__\")&&e.__ob__ instanceof we?n=e.__ob__:be&&!te()&&(Array.isArray(e)||s(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new we(e)),t&&n&&n.vmCount++,n}function xe(e,t,n,r,i){var o=new ce,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ce(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ce.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Ce(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(xe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||y(e,t)&&(delete e[t],n&&n.dep.notify())}}we.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)xe(e,t[n])},we.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ce(e[t])};var Oe=F.optionMergeStrategies;function Se(e,t){if(!t)return e;for(var n,r,i,o=oe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)\"__ob__\"!==(n=o[a])&&(r=e[n],i=t[n],y(e,n)?r!==i&&s(r)&&s(i)&&Se(r,i):ke(e,n,i));return e}function Te(e,t,n){return n?function(){var r=\"function\"==typeof t?t.call(n,n):t,i=\"function\"==typeof e?e.call(n,n):e;return r?Se(r,i):i}:t?e?function(){return Se(\"function\"==typeof t?t.call(this,this):t,\"function\"==typeof e?e.call(this,this):e)}:t:e}function Ee(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Ne(e,t,n,r){var i=Object.create(e||null);return t?A(i,t):i}Oe.data=function(e,t,n){return n?Te(e,t,n):t&&\"function\"!=typeof t?e:Te(e,t)},I.forEach(function(e){Oe[e]=Ee}),M.forEach(function(e){Oe[e+\"s\"]=Ne}),Oe.watch=function(e,t,n,r){if(e===Y&&(e=void 0),t===Y&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in A(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return A(i,e),t&&A(i,t),i},Oe.provide=Te;var je=function(e,t){return void 0===t?e:t};function De(e,t,n){if(\"function\"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)\"string\"==typeof(i=n[r])&&(o[b(i)]={type:null});else if(s(n))for(var a in n)i=n[a],o[b(a)]=s(i)?i:{type:i};e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(s(n))for(var o in n){var a=n[o];r[o]=s(a)?A({from:o},a):{from:a}}}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];\"function\"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=De(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=De(e,t.mixins[r],n);var o,a={};for(o in e)c(o);for(o in t)y(e,o)||c(o);function c(r){var i=Oe[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Le(e,t,n,r){if(\"string\"==typeof n){var i=e[t];if(y(i,n))return i[n];var o=b(n);if(y(i,o))return i[o];var a=$(o);return y(i,a)?i[a]:i[n]||i[o]||i[a]}}function Me(e,t,n,r){var i=t[e],o=!y(n,e),a=n[e],s=Pe(Boolean,i.type);if(s>-1)if(o&&!y(i,\"default\"))a=!1;else if(\"\"===a||a===C(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!y(t,\"default\"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return\"function\"==typeof r&&\"Function\"!==Ie(t.type)?r.call(e):r}(r,i,e);var u=be;$e(!0),Ce(a),$e(u)}return a}function Ie(e){var t=e&&e.toString().match(/^\\s*function (\\w+)/);return t?t[1]:\"\"}function Fe(e,t){return Ie(e)===Ie(t)}function Pe(e,t){if(!Array.isArray(t))return Fe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Fe(t[n],e))return n;return-1}function Re(e,t,n){le();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Be(e,r,\"errorCaptured hook\")}}Be(e,t,n)}finally{fe()}}function He(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&u(o)&&!o._handled&&(o.catch(function(e){return Re(e,r,i+\" (Promise/async)\")}),o._handled=!0)}catch(e){Re(e,r,i)}return o}function Be(e,t,n){if(F.errorHandler)try{return F.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ue(t,null,\"config.errorHandler\")}Ue(e,t,n)}function Ue(e,t,n){if(!z&&!V||\"undefined\"==typeof console)throw e;console.error(e)}var ze,Ve=!1,Ke=[],Je=!1;function qe(){Je=!1;var e=Ke.slice(0);Ke.length=0;for(var t=0;t<e.length;t++)e[t]()}if(\"undefined\"!=typeof Promise&&re(Promise)){var We=Promise.resolve();ze=function(){We.then(qe),G&&setTimeout(S)},Ve=!0}else if(q||\"undefined\"==typeof MutationObserver||!re(MutationObserver)&&\"[object MutationObserverConstructor]\"!==MutationObserver.toString())ze=\"undefined\"!=typeof setImmediate&&re(setImmediate)?function(){setImmediate(qe)}:function(){setTimeout(qe,0)};else{var Ze=1,Ge=new MutationObserver(qe),Xe=document.createTextNode(String(Ze));Ge.observe(Xe,{characterData:!0}),ze=function(){Ze=(Ze+1)%2,Xe.data=String(Ze)},Ve=!0}function Ye(e,t){var n;if(Ke.push(function(){if(e)try{e.call(t)}catch(e){Re(e,t,\"nextTick\")}else n&&n(t)}),Je||(Je=!0,ze()),!e&&\"undefined\"!=typeof Promise)return new Promise(function(e){n=e})}var Qe=new ie;function et(e){!function e(t,n){var r,i;var a=Array.isArray(t);if(!a&&!o(t)||Object.isFrozen(t)||t instanceof pe)return;if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(a)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Qe),Qe.clear()}var tt=g(function(e){var t=\"&\"===e.charAt(0),n=\"~\"===(e=t?e.slice(1):e).charAt(0),r=\"!\"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function nt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return He(r,null,arguments,t,\"v-on handler\");for(var i=r.slice(),o=0;o<i.length;o++)He(i[o],null,e,t,\"v-on handler\")}return n.fns=e,n}function rt(e,n,i,o,a,s){var c,u,l,f;for(c in e)u=e[c],l=n[c],f=tt(c),t(u)||(t(l)?(t(u.fns)&&(u=e[c]=nt(u,s)),r(f.once)&&(u=e[c]=a(f.name,u,f.capture)),i(f.name,u,f.capture,f.passive,f.params)):u!==l&&(l.fns=u,e[c]=l));for(c in n)t(e[c])&&o((f=tt(c)).name,n[c],f.capture)}function it(e,i,o){var a;e instanceof pe&&(e=e.data.hook||(e.data.hook={}));var s=e[i];function c(){o.apply(this,arguments),h(a.fns,c)}t(s)?a=nt([c]):n(s.fns)&&r(s.merged)?(a=s).fns.push(c):a=nt([s,c]),a.merged=!0,e[i]=a}function ot(e,t,r,i,o){if(n(t)){if(y(t,r))return e[r]=t[r],o||delete t[r],!0;if(y(t,i))return e[r]=t[i],o||delete t[i],!0}return!1}function at(e){return i(e)?[he(e)]:Array.isArray(e)?function e(o,a){var s=[];var c,u,l,f;for(c=0;c<o.length;c++)t(u=o[c])||\"boolean\"==typeof u||(l=s.length-1,f=s[l],Array.isArray(u)?u.length>0&&(st((u=e(u,(a||\"\")+\"_\"+c))[0])&&st(f)&&(s[l]=he(f.text+u[0].text),u.shift()),s.push.apply(s,u)):i(u)?st(f)?s[l]=he(f.text+u):\"\"!==u&&s.push(he(u)):st(u)&&st(f)?s[l]=he(f.text+u.text):(r(o._isVList)&&n(u.tag)&&t(u.key)&&n(a)&&(u.key=\"__vlist\"+a+\"_\"+c+\"__\"),s.push(u)));return s}(e):void 0}function st(e){return n(e)&&n(e.text)&&!1===e.isComment}function ct(e,t){if(e){for(var n=Object.create(null),r=oe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if(\"__ob__\"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&y(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&\"default\"in e[o]){var c=e[o].default;n[o]=\"function\"==typeof c?c.call(t):c}}}return n}}function ut(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);\"template\"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(lt)&&delete n[u];return n}function lt(e){return e.isComment&&!e.asyncFactory||\" \"===e.text}function ft(t,n,r){var i,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==e&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&\"$\"!==c[0]&&(i[c]=pt(n,c,t[c]))}else i={};for(var u in n)u in i||(i[u]=dt(n,u));return t&&Object.isExtensible(t)&&(t._normalized=i),R(i,\"$stable\",a),R(i,\"$key\",s),R(i,\"$hasNormal\",o),i}function pt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&\"object\"==typeof e&&!Array.isArray(e)?[e]:at(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function dt(e,t){return function(){return e[t]}}function vt(e,t){var r,i,a,s,c;if(Array.isArray(e)||\"string\"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=t(e[i],i);else if(\"number\"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(o(e))if(oe&&e[Symbol.iterator]){r=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)r.push(t(l.value,r.length)),l=u.next()}else for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=t(e[c],c,i);return n(r)||(r=[]),r._isVList=!0,r}function ht(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=A(A({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement(\"template\",{slot:a},i):i}function mt(e){return Le(this.$options,\"filters\",e)||E}function yt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function gt(e,t,n,r,i){var o=F.keyCodes[t]||n;return i&&r&&!F.keyCodes[t]?yt(i,r):o?yt(o,e):r?C(r)!==t:void 0}function _t(e,t,n,r,i){if(n)if(o(n)){var a;Array.isArray(n)&&(n=O(n));var s=function(o){if(\"class\"===o||\"style\"===o||v(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||F.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=b(o),u=C(o);c in a||u in a||(a[o]=n[o],i&&((e.on||(e.on={}))[\"update:\"+o]=function(e){n[o]=e}))};for(var c in n)s(c)}else;return e}function bt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?r:(wt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),\"__static__\"+e,!1),r)}function $t(e,t,n){return wt(e,\"__once__\"+t+(n?\"_\"+n:\"\"),!0),e}function wt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&\"string\"!=typeof e[r]&&Ct(e[r],t+\"_\"+r,n);else Ct(e,t,n)}function Ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function xt(e,t){if(t)if(s(t)){var n=e.on=e.on?A({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function kt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?kt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function At(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];\"string\"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Ot(e,t){return\"string\"==typeof e?t+e:e}function St(e){e._o=$t,e._n=f,e._s=l,e._l=vt,e._t=ht,e._q=N,e._i=j,e._m=bt,e._f=mt,e._k=gt,e._b=_t,e._v=he,e._e=ve,e._u=kt,e._g=xt,e._d=At,e._p=Ot}function Tt(t,n,i,o,a){var s,c=this,u=a.options;y(o,\"_uid\")?(s=Object.create(o))._original=o:(s=o,o=o._original);var l=r(u._compiled),f=!l;this.data=t,this.props=n,this.children=i,this.parent=o,this.listeners=t.on||e,this.injections=ct(u.inject,o),this.slots=function(){return c.$slots||ft(t.scopedSlots,c.$slots=ut(i,o)),c.$slots},Object.defineProperty(this,\"scopedSlots\",{enumerable:!0,get:function(){return ft(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ft(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var i=Pt(s,e,t,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return Pt(s,e,t,n,r,f)}}function Et(e,t,n,r,i){var o=me(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Nt(e,t){for(var n in t)e[b(n)]=t[n]}St(Tt.prototype);var jt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;jt.prepatch(r,r)}else{(e.componentInstance=function(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;n(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns);return new e.componentOptions.Ctor(r)}(e,Wt)).$mount(t?e.elm:void 0,t)}},prepatch:function(t,n){var r=n.componentOptions;!function(t,n,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==e&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i);if(t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){$e(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],v=t.$options.props;l[d]=Me(d,v,n,t)}$e(!0),t.$options.propsData=n}r=r||e;var h=t.$options._parentListeners;t.$options._parentListeners=r,qt(t,r,h),u&&(t.$slots=ut(o,i.context),t.$forceUpdate())}(n.componentInstance=t.componentInstance,r.propsData,r.listeners,n,r.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,Yt(r,\"mounted\")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,en.push(t)):Xt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Gt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);Yt(t,\"deactivated\")}}(t,!0):t.$destroy())}},Dt=Object.keys(jt);function Lt(i,a,s,c,l){if(!t(i)){var f=s.$options._base;if(o(i)&&(i=f.extend(i)),\"function\"==typeof i){var p;if(t(i.cid)&&void 0===(i=function(e,i){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Ht;a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a);if(r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var s=e.owners=[a],c=!0,l=null,f=null;a.$on(\"hook:destroyed\",function(){return h(s,a)});var p=function(e){for(var t=0,n=s.length;t<n;t++)s[t].$forceUpdate();e&&(s.length=0,null!==l&&(clearTimeout(l),l=null),null!==f&&(clearTimeout(f),f=null))},d=D(function(t){e.resolved=Bt(t,i),c?s.length=0:p(!0)}),v=D(function(t){n(e.errorComp)&&(e.error=!0,p(!0))}),m=e(d,v);return o(m)&&(u(m)?t(e.resolved)&&m.then(d,v):u(m.component)&&(m.component.then(d,v),n(m.error)&&(e.errorComp=Bt(m.error,i)),n(m.loading)&&(e.loadingComp=Bt(m.loading,i),0===m.delay?e.loading=!0:l=setTimeout(function(){l=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,p(!1))},m.delay||200)),n(m.timeout)&&(f=setTimeout(function(){f=null,t(e.resolved)&&v(null)},m.timeout)))),c=!1,e.loading?e.loadingComp:e.resolved}}(p=i,f)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(p,a,s,c,l);a=a||{},$n(i),n(a.model)&&function(e,t){var r=e.model&&e.model.prop||\"value\",i=e.model&&e.model.event||\"input\";(t.attrs||(t.attrs={}))[r]=t.model.value;var o=t.on||(t.on={}),a=o[i],s=t.model.callback;n(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}(i.options,a);var d=function(e,r,i){var o=r.options.props;if(!t(o)){var a={},s=e.attrs,c=e.props;if(n(s)||n(c))for(var u in o){var l=C(u);ot(a,c,u,l,!0)||ot(a,s,u,l,!1)}return a}}(a,i);if(r(i.options.functional))return function(t,r,i,o,a){var s=t.options,c={},u=s.props;if(n(u))for(var l in u)c[l]=Me(l,u,r||e);else n(i.attrs)&&Nt(c,i.attrs),n(i.props)&&Nt(c,i.props);var f=new Tt(i,c,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof pe)return Et(p,i,f.parent,s);if(Array.isArray(p)){for(var d=at(p)||[],v=new Array(d.length),h=0;h<d.length;h++)v[h]=Et(d[h],i,f.parent,s);return v}}(i,d,a,s,c);var v=a.on;if(a.on=a.nativeOn,r(i.options.abstract)){var m=a.slot;a={},m&&(a.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Dt.length;n++){var r=Dt[n],i=t[r],o=jt[r];i===o||i&&i._merged||(t[r]=i?Mt(o,i):o)}}(a);var y=i.options.name||l;return new pe(\"vue-component-\"+i.cid+(y?\"-\"+y:\"\"),a,void 0,void 0,void 0,s,{Ctor:i,propsData:d,listeners:v,tag:l,children:c},p)}}}function Mt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}var It=1,Ft=2;function Pt(e,a,s,c,u,l){return(Array.isArray(s)||i(s))&&(u=c,c=s,s=void 0),r(l)&&(u=Ft),function(e,i,a,s,c){if(n(a)&&n(a.__ob__))return ve();n(a)&&n(a.is)&&(i=a.is);if(!i)return ve();Array.isArray(s)&&\"function\"==typeof s[0]&&((a=a||{}).scopedSlots={default:s[0]},s.length=0);c===Ft?s=at(s):c===It&&(s=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(s));var u,l;if(\"string\"==typeof i){var f;l=e.$vnode&&e.$vnode.ns||F.getTagNamespace(i),u=F.isReservedTag(i)?new pe(F.parsePlatformTagName(i),a,s,void 0,void 0,e):a&&a.pre||!n(f=Le(e.$options,\"components\",i))?new pe(i,a,s,void 0,void 0,e):Lt(f,a,e,s,i)}else u=Lt(i,a,e,s);return Array.isArray(u)?u:n(u)?(n(l)&&function e(i,o,a){i.ns=o;\"foreignObject\"===i.tag&&(o=void 0,a=!0);if(n(i.children))for(var s=0,c=i.children.length;s<c;s++){var u=i.children[s];n(u.tag)&&(t(u.ns)||r(a)&&\"svg\"!==u.tag)&&e(u,o,a)}}(u,l),n(a)&&function(e){o(e.style)&&et(e.style);o(e.class)&&et(e.class)}(a),u):ve()}(e,a,s,c,u)}var Rt,Ht=null;function Bt(e,t){return(e.__esModule||oe&&\"Module\"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function Ut(e){return e.isComment&&e.asyncFactory}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];if(n(r)&&(n(r.componentOptions)||Ut(r)))return r}}function Vt(e,t){Rt.$on(e,t)}function Kt(e,t){Rt.$off(e,t)}function Jt(e,t){var n=Rt;return function r(){null!==t.apply(null,arguments)&&n.$off(e,r)}}function qt(e,t,n){Rt=e,rt(t,n||{},Vt,Kt,Jt,e),Rt=void 0}var Wt=null;function Zt(e){var t=Wt;return Wt=e,function(){Wt=t}}function Gt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Xt(e,t){if(t){if(e._directInactive=!1,Gt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Xt(e.$children[n]);Yt(e,\"activated\")}}function Yt(e,t){le();var n=e.$options[t],r=t+\" hook\";if(n)for(var i=0,o=n.length;i<o;i++)He(n[i],e,null,e,r);e._hasHookEvent&&e.$emit(\"hook:\"+t),fe()}var Qt=[],en=[],tn={},nn=!1,rn=!1,on=0;var an=0,sn=Date.now;if(z&&!q){var cn=window.performance;cn&&\"function\"==typeof cn.now&&sn()>document.createEvent(\"Event\").timeStamp&&(sn=function(){return cn.now()})}function un(){var e,t;for(an=sn(),rn=!0,Qt.sort(function(e,t){return e.id-t.id}),on=0;on<Qt.length;on++)(e=Qt[on]).before&&e.before(),t=e.id,tn[t]=null,e.run();var n=en.slice(),r=Qt.slice();on=Qt.length=en.length=0,tn={},nn=rn=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Xt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Yt(r,\"updated\")}}(r),ne&&F.devtools&&ne.emit(\"flush\")}var ln=0,fn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ie,this.newDepIds=new ie,this.expression=\"\",\"function\"==typeof t?this.getter=t:(this.getter=function(e){if(!H.test(e)){var t=e.split(\".\");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=S)),this.value=this.lazy?void 0:this.get()};fn.prototype.get=function(){var e;le(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Re(e,t,'getter for watcher \"'+this.expression+'\"')}finally{this.deep&&et(e),fe(),this.cleanupDeps()}return e},fn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},fn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},fn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==tn[t]){if(tn[t]=!0,rn){for(var n=Qt.length-1;n>on&&Qt[n].id>e.id;)n--;Qt.splice(n+1,0,e)}else Qt.push(e);nn||(nn=!0,Ye(un))}}(this)},fn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Re(e,this.vm,'callback for watcher \"'+this.expression+'\"')}else this.cb.call(this.vm,e,t)}}},fn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},fn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},fn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var pn={enumerable:!0,configurable:!0,get:S,set:S};function dn(e,t,n){pn.get=function(){return this[t][n]},pn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,pn)}function vn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&$e(!1);var o=function(o){i.push(o);var a=Me(o,t,n,e);xe(r,o,a),o in e||dn(e,\"_props\",o)};for(var a in t)o(a);$e(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]=\"function\"!=typeof t[n]?S:x(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;s(t=e._data=\"function\"==typeof t?function(e,t){le();try{return e.call(t,t)}catch(e){return Re(e,t,\"data()\"),{}}finally{fe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&y(r,o)||(a=void 0,36!==(a=(o+\"\").charCodeAt(0))&&95!==a&&dn(e,\"_data\",o))}var a;Ce(t,!0)}(e):Ce(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=te();for(var i in t){var o=t[i],a=\"function\"==typeof o?o:o.get;r||(n[i]=new fn(e,a||S,S,hn)),i in e||mn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==Y&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)_n(e,n,r[i]);else _n(e,n,r)}}(e,t.watch)}var hn={lazy:!0};function mn(e,t,n){var r=!te();\"function\"==typeof n?(pn.get=r?yn(t):gn(n),pn.set=S):(pn.get=n.get?r&&!1!==n.cache?yn(t):gn(n.get):S,pn.set=n.set||S),Object.defineProperty(e,t,pn)}function yn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ce.target&&t.depend(),t.value}}function gn(e){return function(){return e.call(this,this)}}function _n(e,t,n,r){return s(n)&&(r=n,n=n.handler),\"string\"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var bn=0;function $n(e){var t=e.options;if(e.super){var n=$n(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&A(e.extendOptions,r),(t=e.options=De(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function wn(e){this._init(e)}function Cn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=De(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)dn(e.prototype,\"_props\",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)mn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=A({},a.options),i[r]=a,a}}function xn(e){return e&&(e.Ctor.options.name||e.tag)}function kn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:\"string\"==typeof e?e.split(\",\").indexOf(t)>-1:(n=e,\"[object RegExp]\"===a.call(n)&&e.test(t));var n}function An(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=xn(a.componentOptions);s&&!t(s)&&On(n,o,r,i)}}}function On(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,h(n,t)}!function(t){t.prototype._init=function(t){var n=this;n._uid=bn++,n._isVue=!0,t&&t._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(n,t):n.$options=De($n(n.constructor),t||{},n),n._renderProxy=n,n._self=n,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(n),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&qt(e,t)}(n),function(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=ut(n._renderChildren,i),t.$scopedSlots=e,t._c=function(e,n,r,i){return Pt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Pt(t,e,n,r,i,!0)};var o=r&&r.data;xe(t,\"$attrs\",o&&o.attrs||e,null,!0),xe(t,\"$listeners\",n._parentListeners||e,null,!0)}(n),Yt(n,\"beforeCreate\"),function(e){var t=ct(e.$options.inject,e);t&&($e(!1),Object.keys(t).forEach(function(n){xe(e,n,t[n])}),$e(!0))}(n),vn(n),function(e){var t=e.$options.provide;t&&(e._provided=\"function\"==typeof t?t.call(e):t)}(n),Yt(n,\"created\"),n.$options.el&&n.$mount(n.$options.el)}}(wn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,\"$data\",t),Object.defineProperty(e.prototype,\"$props\",n),e.prototype.$set=ke,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(s(t))return _n(this,e,t,n);(n=n||{}).user=!0;var r=new fn(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){Re(e,this,'callback for immediate watcher \"'+r.expression+'\"')}return function(){r.teardown()}}}(wn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this._events[e];if(t){t=t.length>1?k(t):t;for(var n=k(arguments,1),r='event handler for \"'+e+'\"',i=0,o=t.length;i<o;i++)He(t[i],this,n,this,r)}return this}}(wn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Zt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Yt(e,\"beforeDestroy\"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||h(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Yt(e,\"destroyed\"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(wn),function(e){St(e.prototype),e.prototype.$nextTick=function(e){return Ye(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=ft(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ht=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Re(n,t,\"render\"),e=t._vnode}finally{Ht=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=ve()),e.parent=i,e}}(wn);var Sn=[String,RegExp,Array],Tn={KeepAlive:{name:\"keep-alive\",abstract:!0,props:{include:Sn,exclude:Sn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)On(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch(\"include\",function(t){An(e,function(e){return kn(t,e)})}),this.$watch(\"exclude\",function(t){An(e,function(e){return!kn(t,e)})})},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=xn(n),i=this.include,o=this.exclude;if(i&&(!r||!kn(i,r))||o&&r&&kn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?\"::\"+n.tag:\"\"):t.key;a[c]?(t.componentInstance=a[c].componentInstance,h(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&On(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return F}};Object.defineProperty(e,\"config\",t),e.util={warn:ae,extend:A,mergeOptions:De,defineReactive:xe},e.set=ke,e.delete=Ae,e.nextTick=Ye,e.observable=function(e){return Ce(e),e},e.options=Object.create(null),M.forEach(function(t){e.options[t+\"s\"]=Object.create(null)}),e.options._base=e,A(e.options.components,Tn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),\"function\"==typeof e.install?e.install.apply(e,n):\"function\"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=De(this.options,e),this}}(e),Cn(e),function(e){M.forEach(function(t){e[t]=function(e,n){return n?(\"component\"===t&&s(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),\"directive\"===t&&\"function\"==typeof n&&(n={bind:n,update:n}),this.options[t+\"s\"][e]=n,n):this.options[t+\"s\"][e]}})}(e)}(wn),Object.defineProperty(wn.prototype,\"$isServer\",{get:te}),Object.defineProperty(wn.prototype,\"$ssrContext\",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(wn,\"FunctionalRenderContext\",{value:Tt}),wn.version=\"2.6.10\";var En=p(\"style,class\"),Nn=p(\"input,textarea,option,select,progress\"),jn=function(e,t,n){return\"value\"===n&&Nn(e)&&\"button\"!==t||\"selected\"===n&&\"option\"===e||\"checked\"===n&&\"input\"===e||\"muted\"===n&&\"video\"===e},Dn=p(\"contenteditable,draggable,spellcheck\"),Ln=p(\"events,caret,typing,plaintext-only\"),Mn=function(e,t){return Hn(t)||\"false\"===t?\"false\":\"contenteditable\"===e&&Ln(t)?t:\"true\"},In=p(\"allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible\"),Fn=\"http://www.w3.org/1999/xlink\",Pn=function(e){return\":\"===e.charAt(5)&&\"xlink\"===e.slice(0,5)},Rn=function(e){return Pn(e)?e.slice(6,e.length):\"\"},Hn=function(e){return null==e||!1===e};function Bn(e){for(var t=e.data,r=e,i=e;n(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(t=Un(i.data,t));for(;n(r=r.parent);)r&&r.data&&(t=Un(t,r.data));return function(e,t){if(n(e)||n(t))return zn(e,Vn(t));return\"\"}(t.staticClass,t.class)}function Un(e,t){return{staticClass:zn(e.staticClass,t.staticClass),class:n(e.class)?[e.class,t.class]:t.class}}function zn(e,t){return e?t?e+\" \"+t:e:t||\"\"}function Vn(e){return Array.isArray(e)?function(e){for(var t,r=\"\",i=0,o=e.length;i<o;i++)n(t=Vn(e[i]))&&\"\"!==t&&(r&&(r+=\" \"),r+=t);return r}(e):o(e)?function(e){var t=\"\";for(var n in e)e[n]&&(t&&(t+=\" \"),t+=n);return t}(e):\"string\"==typeof e?e:\"\"}var Kn={svg:\"http://www.w3.org/2000/svg\",math:\"http://www.w3.org/1998/Math/MathML\"},Jn=p(\"html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot\"),qn=p(\"svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view\",!0),Wn=function(e){return Jn(e)||qn(e)};function Zn(e){return qn(e)?\"svg\":\"math\"===e?\"math\":void 0}var Gn=Object.create(null);var Xn=p(\"text,number,password,search,email,tel,url\");function Yn(e){if(\"string\"==typeof e){var t=document.querySelector(e);return t||document.createElement(\"div\")}return e}var Qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return\"select\"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute(\"multiple\",\"multiple\"),n)},createElementNS:function(e,t){return document.createElementNS(Kn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,\"\")}}),er={create:function(e,t){tr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(tr(e,!0),tr(t))},destroy:function(e){tr(e,!0)}};function tr(e,t){var r=e.data.ref;if(n(r)){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[r])?h(a[r],o):a[r]===o&&(a[r]=void 0):e.data.refInFor?Array.isArray(a[r])?a[r].indexOf(o)<0&&a[r].push(o):a[r]=[o]:a[r]=o}}var nr=new pe(\"\",{},[]),rr=[\"create\",\"activate\",\"update\",\"remove\",\"destroy\"];function ir(e,i){return e.key===i.key&&(e.tag===i.tag&&e.isComment===i.isComment&&n(e.data)===n(i.data)&&function(e,t){if(\"input\"!==e.tag)return!0;var r,i=n(r=e.data)&&n(r=r.attrs)&&r.type,o=n(r=t.data)&&n(r=r.attrs)&&r.type;return i===o||Xn(i)&&Xn(o)}(e,i)||r(e.isAsyncPlaceholder)&&e.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function or(e,t,r){var i,o,a={};for(i=t;i<=r;++i)n(o=e[i].key)&&(a[o]=i);return a}var ar={create:sr,update:sr,destroy:function(e){sr(e,nr)}};function sr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===nr,a=t===nr,s=ur(e.data.directives,e.context),c=ur(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fr(i,\"update\",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(fr(i,\"bind\",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)fr(u[n],\"inserted\",t,e)};o?it(t,\"insert\",f):f()}l.length&&it(t,\"postpatch\",function(){for(var n=0;n<l.length;n++)fr(l[n],\"componentUpdated\",t,e)});if(!o)for(n in s)c[n]||fr(s[n],\"unbind\",e,e,a)}(e,t)}var cr=Object.create(null);function ur(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=cr),i[lr(r)]=r,r.def=Le(t.$options,\"directives\",r.name);return i}function lr(e){return e.rawName||e.name+\".\"+Object.keys(e.modifiers||{}).join(\".\")}function fr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Re(r,n.context,\"directive \"+e.name+\" \"+t+\" hook\")}}var pr=[er,ar];function dr(e,r){var i=r.componentOptions;if(!(n(i)&&!1===i.Ctor.options.inheritAttrs||t(e.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=e.data.attrs||{},u=r.data.attrs||{};for(o in n(u.__ob__)&&(u=r.data.attrs=A({},u)),u)a=u[o],c[o]!==a&&vr(s,o,a);for(o in(q||Z)&&u.value!==c.value&&vr(s,\"value\",u.value),c)t(u[o])&&(Pn(o)?s.removeAttributeNS(Fn,Rn(o)):Dn(o)||s.removeAttribute(o))}}function vr(e,t,n){e.tagName.indexOf(\"-\")>-1?hr(e,t,n):In(t)?Hn(n)?e.removeAttribute(t):(n=\"allowfullscreen\"===t&&\"EMBED\"===e.tagName?\"true\":t,e.setAttribute(t,n)):Dn(t)?e.setAttribute(t,Mn(t,n)):Pn(t)?Hn(n)?e.removeAttributeNS(Fn,Rn(t)):e.setAttributeNS(Fn,t,n):hr(e,t,n)}function hr(e,t,n){if(Hn(n))e.removeAttribute(t);else{if(q&&!W&&\"TEXTAREA\"===e.tagName&&\"placeholder\"===t&&\"\"!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener(\"input\",r)};e.addEventListener(\"input\",r),e.__ieph=!0}e.setAttribute(t,n)}}var mr={create:dr,update:dr};function yr(e,r){var i=r.elm,o=r.data,a=e.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Bn(r),c=i._transitionClasses;n(c)&&(s=zn(s,Vn(c))),s!==i._prevClass&&(i.setAttribute(\"class\",s),i._prevClass=s)}}var gr,_r,br,$r,wr,Cr,xr={create:yr,update:yr},kr=/[\\w).+\\-_$\\]]/;function Ar(e){var t,n,r,i,o,a=!1,s=!1,c=!1,u=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(u)47===t&&92!==n&&(u=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var v=r-1,h=void 0;v>=0&&\" \"===(h=e.charAt(v));v--);h&&kr.test(h)||(u=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=Or(i,o[r]);return i}function Or(e,t){var n=t.indexOf(\"(\");if(n<0)return'_f(\"'+t+'\")('+e+\")\";var r=t.slice(0,n),i=t.slice(n+1);return'_f(\"'+r+'\")('+e+(\")\"!==i?\",\"+i:i)}function Sr(e,t){console.error(\"[Vue compiler]: \"+e)}function Tr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Er(e,t,n,r,i){(e.props||(e.props=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Nr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Rr({name:t,value:n,dynamic:i},r)),e.plain=!1}function jr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Rr({name:t,value:n},r))}function Dr(e,t,n,r,i,o,a,s){(e.directives||(e.directives=[])).push(Rr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},s)),e.plain=!1}function Lr(e,t,n){return n?\"_p(\"+t+',\"'+e+'\")':e+t}function Mr(t,n,r,i,o,a,s,c){var u;(i=i||e).right?c?n=\"(\"+n+\")==='click'?'contextmenu':(\"+n+\")\":\"click\"===n&&(n=\"contextmenu\",delete i.right):i.middle&&(c?n=\"(\"+n+\")==='click'?'mouseup':(\"+n+\")\":\"click\"===n&&(n=\"mouseup\")),i.capture&&(delete i.capture,n=Lr(\"!\",n,c)),i.once&&(delete i.once,n=Lr(\"~\",n,c)),i.passive&&(delete i.passive,n=Lr(\"&\",n,c)),i.native?(delete i.native,u=t.nativeEvents||(t.nativeEvents={})):u=t.events||(t.events={});var l=Rr({value:r.trim(),dynamic:c},s);i!==e&&(l.modifiers=i);var f=u[n];Array.isArray(f)?o?f.unshift(l):f.push(l):u[n]=f?o?[l,f]:[f,l]:l,t.plain=!1}function Ir(e,t,n){var r=Fr(e,\":\"+t)||Fr(e,\"v-bind:\"+t);if(null!=r)return Ar(r);if(!1!==n){var i=Fr(e,t);if(null!=i)return JSON.stringify(i)}}function Fr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Pr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Rr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Hr(e,t,n){var r=n||{},i=r.number,o=\"$$v\";r.trim&&(o=\"(typeof $$v === 'string'? $$v.trim(): $$v)\"),i&&(o=\"_n(\"+o+\")\");var a=Br(t,o);e.model={value:\"(\"+t+\")\",expression:JSON.stringify(t),callback:\"function ($$v) {\"+a+\"}\"}}function Br(e,t){var n=function(e){if(e=e.trim(),gr=e.length,e.indexOf(\"[\")<0||e.lastIndexOf(\"]\")<gr-1)return($r=e.lastIndexOf(\".\"))>-1?{exp:e.slice(0,$r),key:'\"'+e.slice($r+1)+'\"'}:{exp:e,key:null};_r=e,$r=wr=Cr=0;for(;!zr();)Vr(br=Ur())?Jr(br):91===br&&Kr(br);return{exp:e.slice(0,wr),key:e.slice(wr+1,Cr)}}(e);return null===n.key?e+\"=\"+t:\"$set(\"+n.exp+\", \"+n.key+\", \"+t+\")\"}function Ur(){return _r.charCodeAt(++$r)}function zr(){return $r>=gr}function Vr(e){return 34===e||39===e}function Kr(e){var t=1;for(wr=$r;!zr();)if(Vr(e=Ur()))Jr(e);else if(91===e&&t++,93===e&&t--,0===t){Cr=$r;break}}function Jr(e){for(var t=e;!zr()&&(e=Ur())!==t;);}var qr,Wr=\"__r\",Zr=\"__c\";function Gr(e,t,n){var r=qr;return function i(){null!==t.apply(null,arguments)&&Qr(e,i,n,r)}}var Xr=Ve&&!(X&&Number(X[1])<=53);function Yr(e,t,n,r){if(Xr){var i=an,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}qr.addEventListener(e,t,Q?{capture:n,passive:r}:n)}function Qr(e,t,n,r){(r||qr).removeEventListener(e,t._wrapper||t,n)}function ei(e,r){if(!t(e.data.on)||!t(r.data.on)){var i=r.data.on||{},o=e.data.on||{};qr=r.elm,function(e){if(n(e[Wr])){var t=q?\"change\":\"input\";e[t]=[].concat(e[Wr],e[t]||[]),delete e[Wr]}n(e[Zr])&&(e.change=[].concat(e[Zr],e.change||[]),delete e[Zr])}(i),rt(i,o,Yr,Qr,Gr,r.context),qr=void 0}}var ti,ni={create:ei,update:ei};function ri(e,r){if(!t(e.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=e.data.domProps||{},c=r.data.domProps||{};for(i in n(c.__ob__)&&(c=r.data.domProps=A({},c)),s)i in c||(a[i]=\"\");for(i in c){if(o=c[i],\"textContent\"===i||\"innerHTML\"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if(\"value\"===i&&\"PROGRESS\"!==a.tagName){a._value=o;var u=t(o)?\"\":String(o);ii(a,u)&&(a.value=u)}else if(\"innerHTML\"===i&&qn(a.tagName)&&t(a.innerHTML)){(ti=ti||document.createElement(\"div\")).innerHTML=\"<svg>\"+o+\"</svg>\";for(var l=ti.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(o!==s[i])try{a[i]=o}catch(e){}}}}function ii(e,t){return!e.composing&&(\"OPTION\"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var r=e.value,i=e._vModifiers;if(n(i)){if(i.number)return f(r)!==f(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}(e,t))}var oi={create:ri,update:ri},ai=g(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\\))/g).forEach(function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t});function si(e){var t=ci(e.style);return e.staticStyle?A(e.staticStyle,t):t}function ci(e){return Array.isArray(e)?O(e):\"string\"==typeof e?ai(e):e}var ui,li=/^--/,fi=/\\s*!important$/,pi=function(e,t,n){if(li.test(t))e.style.setProperty(t,n);else if(fi.test(n))e.style.setProperty(C(t),n.replace(fi,\"\"),\"important\");else{var r=vi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},di=[\"Webkit\",\"Moz\",\"ms\"],vi=g(function(e){if(ui=ui||document.createElement(\"div\").style,\"filter\"!==(e=b(e))&&e in ui)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<di.length;n++){var r=di[n]+t;if(r in ui)return r}});function hi(e,r){var i=r.data,o=e.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=ci(r.data.style)||{};r.data.normalizedStyle=n(p.__ob__)?A({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=si(i.data))&&A(r,n);(n=si(e.data))&&A(r,n);for(var o=e;o=o.parent;)o.data&&(n=si(o.data))&&A(r,n);return r}(r,!0);for(s in f)t(d[s])&&pi(c,s,\"\");for(s in d)(a=d[s])!==f[s]&&pi(c,s,null==a?\"\":a)}}var mi={create:hi,update:hi},yi=/\\s+/;function gi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(\" \")>-1?t.split(yi).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=\" \"+(e.getAttribute(\"class\")||\"\")+\" \";n.indexOf(\" \"+t+\" \")<0&&e.setAttribute(\"class\",(n+t).trim())}}function _i(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(\" \")>-1?t.split(yi).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute(\"class\");else{for(var n=\" \"+(e.getAttribute(\"class\")||\"\")+\" \",r=\" \"+t+\" \";n.indexOf(r)>=0;)n=n.replace(r,\" \");(n=n.trim())?e.setAttribute(\"class\",n):e.removeAttribute(\"class\")}}function bi(e){if(e){if(\"object\"==typeof e){var t={};return!1!==e.css&&A(t,$i(e.name||\"v\")),A(t,e),t}return\"string\"==typeof e?$i(e):void 0}}var $i=g(function(e){return{enterClass:e+\"-enter\",enterToClass:e+\"-enter-to\",enterActiveClass:e+\"-enter-active\",leaveClass:e+\"-leave\",leaveToClass:e+\"-leave-to\",leaveActiveClass:e+\"-leave-active\"}}),wi=z&&!W,Ci=\"transition\",xi=\"animation\",ki=\"transition\",Ai=\"transitionend\",Oi=\"animation\",Si=\"animationend\";wi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ki=\"WebkitTransition\",Ai=\"webkitTransitionEnd\"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Oi=\"WebkitAnimation\",Si=\"webkitAnimationEnd\"));var Ti=z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Ti(function(){Ti(e)})}function Ni(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),gi(e,t))}function ji(e,t){e._transitionClasses&&h(e._transitionClasses,t),_i(e,t)}function Di(e,t,n){var r=Mi(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ci?Ai:Si,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}var Li=/\\b(transform|all)(,|$)/;function Mi(e,t){var n,r=window.getComputedStyle(e),i=(r[ki+\"Delay\"]||\"\").split(\", \"),o=(r[ki+\"Duration\"]||\"\").split(\", \"),a=Ii(i,o),s=(r[Oi+\"Delay\"]||\"\").split(\", \"),c=(r[Oi+\"Duration\"]||\"\").split(\", \"),u=Ii(s,c),l=0,f=0;return t===Ci?a>0&&(n=Ci,l=a,f=o.length):t===xi?u>0&&(n=xi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ci:xi:null)?n===Ci?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ci&&Li.test(r[ki+\"Property\"])}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Fi(t)+Fi(e[n])}))}function Fi(e){return 1e3*Number(e.slice(0,-1).replace(\",\",\".\"))}function Pi(e,r){var i=e.elm;n(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=bi(e.data.transition);if(!t(a)&&!n(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,l=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,C=a.appearCancelled,x=a.duration,k=Wt,A=Wt.$vnode;A&&A.parent;)k=A.context,A=A.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||$||\"\"===$){var S=O&&d?d:u,T=O&&h?h:p,E=O&&v?v:l,N=O&&b||m,j=O&&\"function\"==typeof $?$:y,L=O&&w||g,M=O&&C||_,I=f(o(x)?x.enter:x),F=!1!==s&&!W,P=Bi(j),R=i._enterCb=D(function(){F&&(ji(i,E),ji(i,T)),R.cancelled?(F&&ji(i,S),M&&M(i)):L&&L(i),i._enterCb=null});e.data.show||it(e,\"insert\",function(){var t=i.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(i,R)}),N&&N(i),F&&(Ni(i,S),Ni(i,T),Ei(function(){ji(i,S),R.cancelled||(Ni(i,E),P||(Hi(I)?setTimeout(R,I):Di(i,c,R)))})),e.data.show&&(r&&r(),j&&j(i,R)),F||P||R()}}}function Ri(e,r){var i=e.elm;n(i._enterCb)&&(i._enterCb.cancelled=!0,i._enterCb());var a=bi(e.data.transition);if(t(a)||1!==i.nodeType)return r();if(!n(i._leaveCb)){var s=a.css,c=a.type,u=a.leaveClass,l=a.leaveToClass,p=a.leaveActiveClass,d=a.beforeLeave,v=a.leave,h=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,g=a.duration,_=!1!==s&&!W,b=Bi(v),$=f(o(g)?g.leave:g),w=i._leaveCb=D(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(ji(i,l),ji(i,p)),w.cancelled?(_&&ji(i,u),m&&m(i)):(r(),h&&h(i)),i._leaveCb=null});y?y(C):C()}function C(){w.cancelled||(!e.data.show&&i.parentNode&&((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),d&&d(i),_&&(Ni(i,u),Ni(i,p),Ei(function(){ji(i,u),w.cancelled||(Ni(i,l),b||(Hi($)?setTimeout(w,$):Di(i,c,w)))})),v&&v(i,w),_||b||w())}}function Hi(e){return\"number\"==typeof e&&!isNaN(e)}function Bi(e){if(t(e))return!1;var r=e.fns;return n(r)?Bi(Array.isArray(r)?r[0]:r):(e._length||e.length)>1}function Ui(e,t){!0!==t.data.show&&Pi(t)}var zi=function(e){var o,a,s={},c=e.modules,u=e.nodeOps;for(o=0;o<rr.length;++o)for(s[rr[o]]=[],a=0;a<c.length;++a)n(c[a][rr[o]])&&s[rr[o]].push(c[a][rr[o]]);function l(e){var t=u.parentNode(e);n(t)&&u.removeChild(t,e)}function f(e,t,i,o,a,c,l){if(n(e.elm)&&n(c)&&(e=c[l]=me(e)),e.isRootInsert=!a,!function(e,t,i,o){var a=e.data;if(n(a)){var c=n(e.componentInstance)&&a.keepAlive;if(n(a=a.hook)&&n(a=a.init)&&a(e,!1),n(e.componentInstance))return d(e,t),v(i,e.elm,o),r(c)&&function(e,t,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,n(o=a.data)&&n(o=o.transition)){for(o=0;o<s.activate.length;++o)s.activate[o](nr,a);t.push(a);break}v(r,e.elm,i)}(e,t,i,o),!0}}(e,t,i,o)){var f=e.data,p=e.children,m=e.tag;n(m)?(e.elm=e.ns?u.createElementNS(e.ns,m):u.createElement(m,e),g(e),h(e,p,t),n(f)&&y(e,t),v(i,e.elm,o)):r(e.isComment)?(e.elm=u.createComment(e.text),v(i,e.elm,o)):(e.elm=u.createTextNode(e.text),v(i,e.elm,o))}}function d(e,t){n(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(y(e,t),g(e)):(tr(e),t.push(e))}function v(e,t,r){n(e)&&(n(r)?u.parentNode(r)===e&&u.insertBefore(e,t,r):u.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r);else i(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return n(e.tag)}function y(e,t){for(var r=0;r<s.create.length;++r)s.create[r](nr,e);n(o=e.data.hook)&&(n(o.create)&&o.create(nr,e),n(o.insert)&&t.push(e))}function g(e){var t;if(n(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var r=e;r;)n(t=r.context)&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),r=r.parent;n(t=Wt)&&t!==e.context&&t!==e.fnContext&&n(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function _(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function b(e){var t,r,i=e.data;if(n(i))for(n(t=i.hook)&&n(t=t.destroy)&&t(e),t=0;t<s.destroy.length;++t)s.destroy[t](e);if(n(t=e.children))for(r=0;r<e.children.length;++r)b(e.children[r])}function $(e,t,r,i){for(;r<=i;++r){var o=t[r];n(o)&&(n(o.tag)?(w(o),b(o)):l(o.elm))}}function w(e,t){if(n(t)||n(e.data)){var r,i=s.remove.length+1;for(n(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),n(r=e.componentInstance)&&n(r=r._vnode)&&n(r.data)&&w(r,t),r=0;r<s.remove.length;++r)s.remove[r](e,t);n(r=e.data.hook)&&n(r=r.remove)?r(e,t):t()}else l(e.elm)}function C(e,t,r,i){for(var o=r;o<i;o++){var a=t[o];if(n(a)&&ir(e,a))return o}}function x(e,i,o,a,c,l){if(e!==i){n(i.elm)&&n(a)&&(i=a[c]=me(i));var p=i.elm=e.elm;if(r(e.isAsyncPlaceholder))n(i.asyncFactory.resolved)?O(e.elm,i,o):i.isAsyncPlaceholder=!0;else if(r(i.isStatic)&&r(e.isStatic)&&i.key===e.key&&(r(i.isCloned)||r(i.isOnce)))i.componentInstance=e.componentInstance;else{var d,v=i.data;n(v)&&n(d=v.hook)&&n(d=d.prepatch)&&d(e,i);var h=e.children,y=i.children;if(n(v)&&m(i)){for(d=0;d<s.update.length;++d)s.update[d](e,i);n(d=v.hook)&&n(d=d.update)&&d(e,i)}t(i.text)?n(h)&&n(y)?h!==y&&function(e,r,i,o,a){for(var s,c,l,p=0,d=0,v=r.length-1,h=r[0],m=r[v],y=i.length-1,g=i[0],b=i[y],w=!a;p<=v&&d<=y;)t(h)?h=r[++p]:t(m)?m=r[--v]:ir(h,g)?(x(h,g,o,i,d),h=r[++p],g=i[++d]):ir(m,b)?(x(m,b,o,i,y),m=r[--v],b=i[--y]):ir(h,b)?(x(h,b,o,i,y),w&&u.insertBefore(e,h.elm,u.nextSibling(m.elm)),h=r[++p],b=i[--y]):ir(m,g)?(x(m,g,o,i,d),w&&u.insertBefore(e,m.elm,h.elm),m=r[--v],g=i[++d]):(t(s)&&(s=or(r,p,v)),t(c=n(g.key)?s[g.key]:C(g,r,p,v))?f(g,o,e,h.elm,!1,i,d):ir(l=r[c],g)?(x(l,g,o,i,d),r[c]=void 0,w&&u.insertBefore(e,l.elm,h.elm)):f(g,o,e,h.elm,!1,i,d),g=i[++d]);p>v?_(e,t(i[y+1])?null:i[y+1].elm,i,d,y,o):d>y&&$(0,r,p,v)}(p,h,y,o,l):n(y)?(n(e.text)&&u.setTextContent(p,\"\"),_(p,null,y,0,y.length-1,o)):n(h)?$(0,h,0,h.length-1):n(e.text)&&u.setTextContent(p,\"\"):e.text!==i.text&&u.setTextContent(p,i.text),n(v)&&n(d=v.hook)&&n(d=d.postpatch)&&d(e,i)}}}function k(e,t,i){if(r(i)&&n(e.parent))e.parent.data.pendingInsert=t;else for(var o=0;o<t.length;++o)t[o].data.hook.insert(t[o])}var A=p(\"attrs,class,staticClass,staticStyle,key\");function O(e,t,i,o){var a,s=t.tag,c=t.data,u=t.children;if(o=o||c&&c.pre,t.elm=e,r(t.isComment)&&n(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(n(c)&&(n(a=c.hook)&&n(a=a.init)&&a(t,!0),n(a=t.componentInstance)))return d(t,i),!0;if(n(s)){if(n(u))if(e.hasChildNodes())if(n(a=c)&&n(a=a.domProps)&&n(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,p=0;p<u.length;p++){if(!f||!O(f,u[p],i,o)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,u,i);if(n(c)){var v=!1;for(var m in c)if(!A(m)){v=!0,y(t,i);break}!v&&c.class&&et(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,i,o,a){if(!t(i)){var c,l=!1,p=[];if(t(e))l=!0,f(i,p);else{var d=n(e.nodeType);if(!d&&ir(e,i))x(e,i,p,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(L)&&(e.removeAttribute(L),o=!0),r(o)&&O(e,i,p))return k(i,p,!0),e;c=e,e=new pe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var v=e.elm,h=u.parentNode(v);if(f(i,p,v._leaveCb?null:h,u.nextSibling(v)),n(i.parent))for(var y=i.parent,g=m(i);y;){for(var _=0;_<s.destroy.length;++_)s.destroy[_](y);if(y.elm=i.elm,g){for(var w=0;w<s.create.length;++w)s.create[w](nr,y);var C=y.data.hook.insert;if(C.merged)for(var A=1;A<C.fns.length;A++)C.fns[A]()}else tr(y);y=y.parent}n(h)?$(0,[e],0,0):n(e.tag)&&b(e)}}return k(i,p,l),i.elm}n(e)&&b(e)}}({nodeOps:Qn,modules:[mr,xr,ni,oi,mi,z?{create:Ui,activate:Ui,remove:function(e,t){!0!==e.data.show?Ri(e,t):t()}}:{}].concat(pr)});W&&document.addEventListener(\"selectionchange\",function(){var e=document.activeElement;e&&e.vmodel&&Xi(e,\"input\")});var Vi={inserted:function(e,t,n,r){\"select\"===n.tag?(r.elm&&!r.elm._vOptions?it(n,\"postpatch\",function(){Vi.componentUpdated(e,t,n)}):Ki(e,t,n.context),e._vOptions=[].map.call(e.options,Wi)):(\"textarea\"===n.tag||Xn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener(\"compositionstart\",Zi),e.addEventListener(\"compositionend\",Gi),e.addEventListener(\"change\",Gi),W&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if(\"select\"===n.tag){Ki(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Wi);if(i.some(function(e,t){return!N(e,r[t])}))(e.multiple?t.value.some(function(e){return qi(e,i)}):t.value!==t.oldValue&&qi(t.value,i))&&Xi(e,\"change\")}}};function Ki(e,t,n){Ji(e,t,n),(q||Z)&&setTimeout(function(){Ji(e,t,n)},0)}function Ji(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,Wi(a))>-1,a.selected!==o&&(a.selected=o);else if(N(Wi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function qi(e,t){return t.every(function(t){return!N(t,e)})}function Wi(e){return\"_value\"in e?e._value:e.value}function Zi(e){e.target.composing=!0}function Gi(e){e.target.composing&&(e.target.composing=!1,Xi(e.target,\"input\"))}function Xi(e,t){var n=document.createEvent(\"HTMLEvents\");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Yi(e){return!e.componentInstance||e.data&&e.data.transition?e:Yi(e.componentInstance._vnode)}var Qi={model:Vi,show:{bind:function(e,t,n){var r=t.value,i=(n=Yi(n)).data&&n.data.transition,o=e.__vOriginalDisplay=\"none\"===e.style.display?\"\":e.style.display;r&&i?(n.data.show=!0,Pi(n,function(){e.style.display=o})):e.style.display=r?o:\"none\"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Yi(n)).data&&n.data.transition?(n.data.show=!0,r?Pi(n,function(){e.style.display=e.__vOriginalDisplay}):Ri(n,function(){e.style.display=\"none\"})):e.style.display=r?e.__vOriginalDisplay:\"none\")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},eo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function to(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?to(zt(t.children)):e}function no(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[b(o)]=i[o];return t}function ro(e,t){if(/\\d-keep-alive$/.test(t.tag))return e(\"keep-alive\",{props:t.componentOptions.propsData})}var io=function(e){return e.tag||Ut(e)},oo=function(e){return\"show\"===e.name},ao={name:\"transition\",props:eo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(io)).length){var r=this.mode,o=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return o;var a=to(o);if(!a)return o;if(this._leaving)return ro(e,o);var s=\"__transition-\"+this._uid+\"-\";a.key=null==a.key?a.isComment?s+\"comment\":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=no(this),u=this._vnode,l=to(u);if(a.data.directives&&a.data.directives.some(oo)&&(a.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(a,l)&&!Ut(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=A({},c);if(\"out-in\"===r)return this._leaving=!0,it(f,\"afterLeave\",function(){t._leaving=!1,t.$forceUpdate()}),ro(e,o);if(\"in-out\"===r){if(Ut(a))return u;var p,d=function(){p()};it(c,\"afterEnter\",d),it(c,\"enterCancelled\",d),it(f,\"delayLeave\",function(e){p=e})}}return o}}},so=A({tag:String,moveClass:String},eo);function co(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function uo(e){e.data.newPos=e.elm.getBoundingClientRect()}function lo(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform=\"translate(\"+r+\"px,\"+i+\"px)\",o.transitionDuration=\"0s\"}}delete so.mode;var fo={Transition:ao,TransitionGroup:{props:so,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Zt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||\"span\",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=no(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf(\"__vlist\")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||\"v\")+\"-move\";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(co),e.forEach(uo),e.forEach(lo),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ni(n,t),r.transform=r.WebkitTransform=r.transitionDuration=\"\",n.addEventListener(Ai,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ai,e),n._moveCb=null,ji(n,t))})}}))},methods:{hasMove:function(e,t){if(!wi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){_i(n,e)}),gi(n,t),n.style.display=\"none\",this.$el.appendChild(n);var r=Mi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};wn.config.mustUseProp=jn,wn.config.isReservedTag=Wn,wn.config.isReservedAttr=En,wn.config.getTagNamespace=Zn,wn.config.isUnknownElement=function(e){if(!z)return!0;if(Wn(e))return!1;if(e=e.toLowerCase(),null!=Gn[e])return Gn[e];var t=document.createElement(e);return e.indexOf(\"-\")>-1?Gn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Gn[e]=/HTMLUnknownElement/.test(t.toString())},A(wn.options.directives,Qi),A(wn.options.components,fo),wn.prototype.__patch__=z?zi:S,wn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),Yt(e,\"beforeMount\"),r=function(){e._update(e._render(),n)},new fn(e,r,S,{before:function(){e._isMounted&&!e._isDestroyed&&Yt(e,\"beforeUpdate\")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Yt(e,\"mounted\")),e}(this,e=e&&z?Yn(e):void 0,t)},z&&setTimeout(function(){F.devtools&&ne&&ne.emit(\"init\",wn)},0);var po=/\\{\\{((?:.|\\r?\\n)+?)\\}\\}/g,vo=/[-.*+?^${}()|[\\]\\/\\\\]/g,ho=g(function(e){var t=e[0].replace(vo,\"\\\\$&\"),n=e[1].replace(vo,\"\\\\$&\");return new RegExp(t+\"((?:.|\\\\n)+?)\"+n,\"g\")});var mo={staticKeys:[\"staticClass\"],transformNode:function(e,t){t.warn;var n=Fr(e,\"class\");n&&(e.staticClass=JSON.stringify(n));var r=Ir(e,\"class\",!1);r&&(e.classBinding=r)},genData:function(e){var t=\"\";return e.staticClass&&(t+=\"staticClass:\"+e.staticClass+\",\"),e.classBinding&&(t+=\"class:\"+e.classBinding+\",\"),t}};var yo,go={staticKeys:[\"staticStyle\"],transformNode:function(e,t){t.warn;var n=Fr(e,\"style\");n&&(e.staticStyle=JSON.stringify(ai(n)));var r=Ir(e,\"style\",!1);r&&(e.styleBinding=r)},genData:function(e){var t=\"\";return e.staticStyle&&(t+=\"staticStyle:\"+e.staticStyle+\",\"),e.styleBinding&&(t+=\"style:(\"+e.styleBinding+\"),\"),t}},_o=function(e){return(yo=yo||document.createElement(\"div\")).innerHTML=e,yo.textContent},bo=p(\"area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr\"),$o=p(\"colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source\"),wo=p(\"address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track\"),Co=/^\\s*([^\\s\"'<>\\/=]+)(?:\\s*(=)\\s*(?:\"([^\"]*)\"+|'([^']*)'+|([^\\s\"'=<>`]+)))?/,xo=/^\\s*((?:v-[\\w-]+:|@|:|#)\\[[^=]+\\][^\\s\"'<>\\/=]*)(?:\\s*(=)\\s*(?:\"([^\"]*)\"+|'([^']*)'+|([^\\s\"'=<>`]+)))?/,ko=\"[a-zA-Z_][\\\\-\\\\.0-9_a-zA-Z\"+P.source+\"]*\",Ao=\"((?:\"+ko+\"\\\\:)?\"+ko+\")\",Oo=new RegExp(\"^<\"+Ao),So=/^\\s*(\\/?)>/,To=new RegExp(\"^<\\\\/\"+Ao+\"[^>]*>\"),Eo=/^<!DOCTYPE [^>]+>/i,No=/^<!\\--/,jo=/^<!\\[/,Do=p(\"script,style,textarea\",!0),Lo={},Mo={\"&lt;\":\"<\",\"&gt;\":\">\",\"&quot;\":'\"',\"&amp;\":\"&\",\"&#10;\":\"\\n\",\"&#9;\":\"\\t\",\"&#39;\":\"'\"},Io=/&(?:lt|gt|quot|amp|#39);/g,Fo=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Po=p(\"pre,textarea\",!0),Ro=function(e,t){return e&&Po(e)&&\"\\n\"===t[0]};function Ho(e,t){var n=t?Fo:Io;return e.replace(n,function(e){return Mo[e]})}var Bo,Uo,zo,Vo,Ko,Jo,qo,Wo,Zo=/^@|^v-on:/,Go=/^v-|^@|^:/,Xo=/([\\s\\S]*?)\\s+(?:in|of)\\s+([\\s\\S]*)/,Yo=/,([^,\\}\\]]*)(?:,([^,\\}\\]]*))?$/,Qo=/^\\(|\\)$/g,ea=/^\\[.*\\]$/,ta=/:(.*)$/,na=/^:|^\\.|^v-bind:/,ra=/\\.[^.\\]]+(?=[^\\]]*$)/g,ia=/^v-slot(:|$)|^#/,oa=/[\\r\\n]/,aa=/\\s+/g,sa=g(_o),ca=\"_empty_\";function ua(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ma(t),rawAttrsMap:{},parent:n,children:[]}}function la(e,t){Bo=t.warn||Sr,Jo=t.isPreTag||T,qo=t.mustUseProp||T,Wo=t.getTagNamespace||T;t.isReservedTag;zo=Tr(t.modules,\"transformNode\"),Vo=Tr(t.modules,\"preTransformNode\"),Ko=Tr(t.modules,\"postTransformNode\"),Uo=t.delimiters;var n,r,i=[],o=!1!==t.preserveWhitespace,a=t.whitespace,s=!1,c=!1;function u(e){if(l(e),s||e.processed||(e=fa(e,t)),i.length||e===n||n.if&&(e.elseif||e.else)&&da(n,{exp:e.elseif,block:e}),r&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(r.children))&&u.if&&da(u,{exp:a.elseif,block:a});else{if(e.slotScope){var o=e.slotTarget||'\"default\"';(r.scopedSlots||(r.scopedSlots={}))[o]=e}r.children.push(e),e.parent=r}var a,u;e.children=e.children.filter(function(e){return!e.slotScope}),l(e),e.pre&&(s=!1),Jo(e.tag)&&(c=!1);for(var f=0;f<Ko.length;f++)Ko[f](e,t)}function l(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&\" \"===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||T,s=t.canBeLeftOpenTag||T,c=0;e;){if(n=e,r&&Do(r)){var u=0,l=r.toLowerCase(),f=Lo[l]||(Lo[l]=new RegExp(\"([\\\\s\\\\S]*?)(</\"+l+\"[^>]*>)\",\"i\")),p=e.replace(f,function(e,n,r){return u=r.length,Do(l)||\"noscript\"===l||(n=n.replace(/<!\\--([\\s\\S]*?)-->/g,\"$1\").replace(/<!\\[CDATA\\[([\\s\\S]*?)]]>/g,\"$1\")),Ro(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),\"\"});c+=e.length-p.length,e=p,A(l,c-u,c)}else{var d=e.indexOf(\"<\");if(0===d){if(No.test(e)){var v=e.indexOf(\"--\\x3e\");if(v>=0){t.shouldKeepComment&&t.comment(e.substring(4,v),c,c+v+3),C(v+3);continue}}if(jo.test(e)){var h=e.indexOf(\"]>\");if(h>=0){C(h+2);continue}}var m=e.match(Eo);if(m){C(m[0].length);continue}var y=e.match(To);if(y){var g=c;C(y[0].length),A(y[1],g,c);continue}var _=x();if(_){k(_),Ro(_.tagName,e)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(d>=0){for($=e.slice(d);!(To.test($)||Oo.test($)||No.test($)||jo.test($)||(w=$.indexOf(\"<\",1))<0);)d+=w,$=e.slice(d);b=e.substring(0,d)}d<0&&(b=e),b&&C(b.length),t.chars&&b&&t.chars(b,c-b.length,c)}if(e===n){t.chars&&t.chars(e);break}}function C(t){c+=t,e=e.substring(t)}function x(){var t=e.match(Oo);if(t){var n,r,i={tagName:t[1],attrs:[],start:c};for(C(t[0].length);!(n=e.match(So))&&(r=e.match(xo)||e.match(Co));)r.start=c,C(r[0].length),r.end=c,i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=c,i}}function k(e){var n=e.tagName,c=e.unarySlash;o&&(\"p\"===r&&wo(n)&&A(r),s(n)&&r===n&&A(n));for(var u=a(n)||!!c,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],v=d[3]||d[4]||d[5]||\"\",h=\"a\"===n&&\"href\"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Ho(v,h)}}u||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,u,e.start,e.end)}function A(e,n,o){var a,s;if(null==n&&(n=c),null==o&&(o=c),e)for(s=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var u=i.length-1;u>=a;u--)t.end&&t.end(i[u].tag,n,o);i.length=a,r=a&&i[a-1].tag}else\"br\"===s?t.start&&t.start(e,[],!0,n,o):\"p\"===s&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}A()}(e,{warn:Bo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,o,a,l,f){var p=r&&r.ns||Wo(e);q&&\"svg\"===p&&(o=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ya.test(r.name)||(r.name=r.name.replace(ga,\"\"),t.push(r))}return t}(o));var d,v=ua(e,o,r);p&&(v.ns=p),\"style\"!==(d=v).tag&&(\"script\"!==d.tag||d.attrsMap.type&&\"text/javascript\"!==d.attrsMap.type)||te()||(v.forbidden=!0);for(var h=0;h<Vo.length;h++)v=Vo[h](v,t)||v;s||(!function(e){null!=Fr(e,\"v-pre\")&&(e.pre=!0)}(v),v.pre&&(s=!0)),Jo(v.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(v):v.processed||(pa(v),function(e){var t=Fr(e,\"v-if\");if(t)e.if=t,da(e,{exp:t,block:e});else{null!=Fr(e,\"v-else\")&&(e.else=!0);var n=Fr(e,\"v-else-if\");n&&(e.elseif=n)}}(v),function(e){null!=Fr(e,\"v-once\")&&(e.once=!0)}(v)),n||(n=v),a?u(v):(r=v,i.push(v))},end:function(e,t,n){var o=i[i.length-1];i.length-=1,r=i[i.length-1],u(o)},chars:function(e,t,n){if(r&&(!q||\"textarea\"!==r.tag||r.attrsMap.placeholder!==e)){var i,u,l,f=r.children;if(e=c||e.trim()?\"script\"===(i=r).tag||\"style\"===i.tag?e:sa(e):f.length?a?\"condense\"===a&&oa.test(e)?\"\":\" \":o?\" \":\"\":\"\")c||\"condense\"!==a||(e=e.replace(aa,\" \")),!s&&\" \"!==e&&(u=function(e,t){var n=t?ho(t):po;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){(i=r.index)>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var u=Ar(r[1].trim());a.push(\"_s(\"+u+\")\"),s.push({\"@binding\":u}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join(\"+\"),tokens:s}}}(e,Uo))?l={type:2,expression:u.expression,tokens:u.tokens,text:e}:\" \"===e&&f.length&&\" \"===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(r){var i={type:3,text:e,isComment:!0};r.children.push(i)}}}),n}function fa(e,t){var n,r;(r=Ir(n=e,\"key\"))&&(n.key=r),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Ir(e,\"ref\");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;\"template\"===e.tag?(t=Fr(e,\"scope\"),e.slotScope=t||Fr(e,\"slot-scope\")):(t=Fr(e,\"slot-scope\"))&&(e.slotScope=t);var n=Ir(e,\"slot\");n&&(e.slotTarget='\"\"'===n?'\"default\"':n,e.slotTargetDynamic=!(!e.attrsMap[\":slot\"]&&!e.attrsMap[\"v-bind:slot\"]),\"template\"===e.tag||e.slotScope||Nr(e,\"slot\",n,function(e,t){return e.rawAttrsMap[\":\"+t]||e.rawAttrsMap[\"v-bind:\"+t]||e.rawAttrsMap[t]}(e,\"slot\")));if(\"template\"===e.tag){var r=Pr(e,ia);if(r){var i=va(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||ca}}else{var s=Pr(e,ia);if(s){var c=e.scopedSlots||(e.scopedSlots={}),u=va(s),l=u.name,f=u.dynamic,p=c[l]=ua(\"template\",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=p,!0}),p.slotScope=s.value||ca,e.children=[],e.plain=!1}}}(e),function(e){\"slot\"===e.tag&&(e.slotName=Ir(e,\"name\"))}(e),function(e){var t;(t=Ir(e,\"is\"))&&(e.component=t);null!=Fr(e,\"inline-template\")&&(e.inlineTemplate=!0)}(e);for(var i=0;i<zo.length;i++)e=zo[i](e,t)||e;return function(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Go.test(r))if(e.hasBindings=!0,(a=ha(r.replace(Go,\"\")))&&(r=r.replace(ra,\"\")),na.test(r))r=r.replace(na,\"\"),o=Ar(o),(c=ea.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!c&&\"innerHtml\"===(r=b(r))&&(r=\"innerHTML\"),a.camel&&!c&&(r=b(r)),a.sync&&(s=Br(o,\"$event\"),c?Mr(e,'\"update:\"+('+r+\")\",s,null,!1,0,u[t],!0):(Mr(e,\"update:\"+b(r),s,null,!1,0,u[t]),C(r)!==b(r)&&Mr(e,\"update:\"+C(r),s,null,!1,0,u[t])))),a&&a.prop||!e.component&&qo(e.tag,e.attrsMap.type,r)?Er(e,r,o,u[t],c):Nr(e,r,o,u[t],c);else if(Zo.test(r))r=r.replace(Zo,\"\"),(c=ea.test(r))&&(r=r.slice(1,-1)),Mr(e,r,o,a,!1,0,u[t],c);else{var l=(r=r.replace(Go,\"\")).match(ta),f=l&&l[1];c=!1,f&&(r=r.slice(0,-(f.length+1)),ea.test(f)&&(f=f.slice(1,-1),c=!0)),Dr(e,r,i,o,f,c,a,u[t])}else Nr(e,r,JSON.stringify(o),u[t]),!e.component&&\"muted\"===r&&qo(e.tag,e.attrsMap.type,r)&&Er(e,r,\"true\",u[t])}(e),e}function pa(e){var t;if(t=Fr(e,\"v-for\")){var n=function(e){var t=e.match(Xo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Qo,\"\"),i=r.match(Yo);i?(n.alias=r.replace(Yo,\"\").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&A(e,n)}}function da(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function va(e){var t=e.name.replace(ia,\"\");return t||\"#\"!==e.name[0]&&(t=\"default\"),ea.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'\"'+t+'\"',dynamic:!1}}function ha(e){var t=e.match(ra);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ma(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ya=/^xmlns:NS\\d+/,ga=/^NS\\d+:/;function _a(e){return ua(e.tag,e.attrsList.slice(),e.parent)}var ba=[mo,go,{preTransformNode:function(e,t){if(\"input\"===e.tag){var n,r=e.attrsMap;if(!r[\"v-model\"])return;if((r[\":type\"]||r[\"v-bind:type\"])&&(n=Ir(e,\"type\")),r.type||n||!r[\"v-bind\"]||(n=\"(\"+r[\"v-bind\"]+\").type\"),n){var i=Fr(e,\"v-if\",!0),o=i?\"&&(\"+i+\")\":\"\",a=null!=Fr(e,\"v-else\",!0),s=Fr(e,\"v-else-if\",!0),c=_a(e);pa(c),jr(c,\"type\",\"checkbox\"),fa(c,t),c.processed=!0,c.if=\"(\"+n+\")==='checkbox'\"+o,da(c,{exp:c.if,block:c});var u=_a(e);Fr(u,\"v-for\",!0),jr(u,\"type\",\"radio\"),fa(u,t),da(c,{exp:\"(\"+n+\")==='radio'\"+o,block:u});var l=_a(e);return Fr(l,\"v-for\",!0),jr(l,\":type\",n),fa(l,t),da(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var $a,wa,Ca={expectHTML:!0,modules:ba,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Hr(e,r,i),!1;if(\"select\"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return '+(n&&n.number?\"_n(val)\":\"val\")+\"});\";r=r+\" \"+Br(t,\"$event.target.multiple ? $$selectedVal : $$selectedVal[0]\"),Mr(e,\"change\",r,null,!0)}(e,r,i);else if(\"input\"===o&&\"checkbox\"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,\"value\")||\"null\",o=Ir(e,\"true-value\")||\"true\",a=Ir(e,\"false-value\")||\"false\";Er(e,\"checked\",\"Array.isArray(\"+t+\")?_i(\"+t+\",\"+i+\")>-1\"+(\"true\"===o?\":(\"+t+\")\":\":_q(\"+t+\",\"+o+\")\")),Mr(e,\"change\",\"var $$a=\"+t+\",$$el=$event.target,$$c=$$el.checked?(\"+o+\"):(\"+a+\");if(Array.isArray($$a)){var $$v=\"+(r?\"_n(\"+i+\")\":i)+\",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(\"+Br(t,\"$$a.concat([$$v])\")+\")}else{$$i>-1&&(\"+Br(t,\"$$a.slice(0,$$i).concat($$a.slice($$i+1))\")+\")}}else{\"+Br(t,\"$$c\")+\"}\",null,!0)}(e,r,i);else if(\"input\"===o&&\"radio\"===a)!function(e,t,n){var r=n&&n.number,i=Ir(e,\"value\")||\"null\";Er(e,\"checked\",\"_q(\"+t+\",\"+(i=r?\"_n(\"+i+\")\":i)+\")\"),Mr(e,\"change\",Br(t,i),null,!0)}(e,r,i);else if(\"input\"===o||\"textarea\"===o)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&\"range\"!==r,u=o?\"change\":\"range\"===r?Wr:\"input\",l=\"$event.target.value\";s&&(l=\"$event.target.value.trim()\"),a&&(l=\"_n(\"+l+\")\");var f=Br(t,l);c&&(f=\"if($event.target.composing)return;\"+f),Er(e,\"value\",\"(\"+t+\")\"),Mr(e,u,f,null,!0),(s||a)&&Mr(e,\"blur\",\"$forceUpdate()\")}(e,r,i);else if(!F.isReservedTag(o))return Hr(e,r,i),!1;return!0},text:function(e,t){t.value&&Er(e,\"textContent\",\"_s(\"+t.value+\")\",t)},html:function(e,t){t.value&&Er(e,\"innerHTML\",\"_s(\"+t.value+\")\",t)}},isPreTag:function(e){return\"pre\"===e},isUnaryTag:bo,mustUseProp:jn,canBeLeftOpenTag:$o,isReservedTag:Wn,getTagNamespace:Zn,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(\",\")}(ba)},xa=g(function(e){return p(\"type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap\"+(e?\",\"+e:\"\"))});function ka(e,t){e&&($a=xa(t.staticKeys||\"\"),wa=t.isReservedTag||T,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||d(e.tag)||!wa(e.tag)||function(e){for(;e.parent;){if(\"template\"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every($a)))}(t);if(1===t.type){if(!wa(t.tag)&&\"slot\"!==t.tag&&null==t.attrsMap[\"inline-template\"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Aa=/^([\\w$_]+|\\([^)]*?\\))\\s*=>|^function\\s*(?:[\\w$]+)?\\s*\\(/,Oa=/\\([^)]*?\\);*$/,Sa=/^[A-Za-z_$][\\w$]*(?:\\.[A-Za-z_$][\\w$]*|\\['[^']*?']|\\[\"[^\"]*?\"]|\\[\\d+]|\\[[A-Za-z_$][\\w$]*])*$/,Ta={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ea={esc:[\"Esc\",\"Escape\"],tab:\"Tab\",enter:\"Enter\",space:[\" \",\"Spacebar\"],up:[\"Up\",\"ArrowUp\"],left:[\"Left\",\"ArrowLeft\"],right:[\"Right\",\"ArrowRight\"],down:[\"Down\",\"ArrowDown\"],delete:[\"Backspace\",\"Delete\",\"Del\"]},Na=function(e){return\"if(\"+e+\")return null;\"},ja={stop:\"$event.stopPropagation();\",prevent:\"$event.preventDefault();\",self:Na(\"$event.target !== $event.currentTarget\"),ctrl:Na(\"!$event.ctrlKey\"),shift:Na(\"!$event.shiftKey\"),alt:Na(\"!$event.altKey\"),meta:Na(\"!$event.metaKey\"),left:Na(\"'button' in $event && $event.button !== 0\"),middle:Na(\"'button' in $event && $event.button !== 1\"),right:Na(\"'button' in $event && $event.button !== 2\")};function Da(e,t){var n=t?\"nativeOn:\":\"on:\",r=\"\",i=\"\";for(var o in e){var a=La(e[o]);e[o]&&e[o].dynamic?i+=o+\",\"+a+\",\":r+='\"'+o+'\":'+a+\",\"}return r=\"{\"+r.slice(0,-1)+\"}\",i?n+\"_d(\"+r+\",[\"+i.slice(0,-1)+\"])\":n+r}function La(e){if(!e)return\"function(){}\";if(Array.isArray(e))return\"[\"+e.map(function(e){return La(e)}).join(\",\")+\"]\";var t=Sa.test(e.value),n=Aa.test(e.value),r=Sa.test(e.value.replace(Oa,\"\"));if(e.modifiers){var i=\"\",o=\"\",a=[];for(var s in e.modifiers)if(ja[s])o+=ja[s],Ta[s]&&a.push(s);else if(\"exact\"===s){var c=e.modifiers;o+=Na([\"ctrl\",\"shift\",\"alt\",\"meta\"].filter(function(e){return!c[e]}).map(function(e){return\"$event.\"+e+\"Key\"}).join(\"||\"))}else a.push(s);return a.length&&(i+=function(e){return\"if(!$event.type.indexOf('key')&&\"+e.map(Ma).join(\"&&\")+\")return null;\"}(a)),o&&(i+=o),\"function($event){\"+i+(t?\"return \"+e.value+\"($event)\":n?\"return (\"+e.value+\")($event)\":r?\"return \"+e.value:e.value)+\"}\"}return t||n?e.value:\"function($event){\"+(r?\"return \"+e.value:e.value)+\"}\"}function Ma(e){var t=parseInt(e,10);if(t)return\"$event.keyCode!==\"+t;var n=Ta[e],r=Ea[e];return\"_k($event.keyCode,\"+JSON.stringify(e)+\",\"+JSON.stringify(n)+\",$event.key,\"+JSON.stringify(r)+\")\"}var Ia={on:function(e,t){e.wrapListeners=function(e){return\"_g(\"+e+\",\"+t.value+\")\"}},bind:function(e,t){e.wrapData=function(n){return\"_b(\"+n+\",'\"+e.tag+\"',\"+t.value+\",\"+(t.modifiers&&t.modifiers.prop?\"true\":\"false\")+(t.modifiers&&t.modifiers.sync?\",true\":\"\")+\")\"}},cloak:S},Fa=function(e){this.options=e,this.warn=e.warn||Sr,this.transforms=Tr(e.modules,\"transformCode\"),this.dataGenFns=Tr(e.modules,\"genData\"),this.directives=A(A({},Ia),e.directives);var t=e.isReservedTag||T;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Pa(e,t){var n=new Fa(t);return{render:\"with(this){return \"+(e?Ra(e,n):'_c(\"div\")')+\"}\",staticRenderFns:n.staticRenderFns}}function Ra(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ha(e,t);if(e.once&&!e.onceProcessed)return Ba(e,t);if(e.for&&!e.forProcessed)return za(e,t);if(e.if&&!e.ifProcessed)return Ua(e,t);if(\"template\"!==e.tag||e.slotTarget||t.pre){if(\"slot\"===e.tag)return function(e,t){var n=e.slotName||'\"default\"',r=qa(e,t),i=\"_t(\"+n+(r?\",\"+r:\"\"),o=e.attrs||e.dynamicAttrs?Ga((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(e){return{name:b(e.name),value:e.value,dynamic:e.dynamic}})):null,a=e.attrsMap[\"v-bind\"];!o&&!a||r||(i+=\",null\");o&&(i+=\",\"+o);a&&(i+=(o?\"\":\",null\")+\",\"+a);return i+\")\"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:qa(t,n,!0);return\"_c(\"+e+\",\"+Va(t,n)+(r?\",\"+r:\"\")+\")\"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Va(e,t));var i=e.inlineTemplate?null:qa(e,t,!0);n=\"_c('\"+e.tag+\"'\"+(r?\",\"+r:\"\")+(i?\",\"+i:\"\")+\")\"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return qa(e,t)||\"void 0\"}function Ha(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push(\"with(this){return \"+Ra(e,t)+\"}\"),t.pre=n,\"_m(\"+(t.staticRenderFns.length-1)+(e.staticInFor?\",true\":\"\")+\")\"}function Ba(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Ua(e,t);if(e.staticInFor){for(var n=\"\",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?\"_o(\"+Ra(e,t)+\",\"+t.onceId+++\",\"+n+\")\":Ra(e,t)}return Ha(e,t)}function Ua(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||\"_e()\";var o=t.shift();return o.exp?\"(\"+o.exp+\")?\"+a(o.block)+\":\"+e(t,n,r,i):\"\"+a(o.block);function a(e){return r?r(e,n):e.once?Ba(e,n):Ra(e,n)}}(e.ifConditions.slice(),t,n,r)}function za(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?\",\"+e.iterator1:\"\",s=e.iterator2?\",\"+e.iterator2:\"\";return e.forProcessed=!0,(r||\"_l\")+\"((\"+i+\"),function(\"+o+a+s+\"){return \"+(n||Ra)(e,t)+\"})\"}function Va(e,t){var n=\"{\",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s=\"directives:[\",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:\"'+o.name+'\",rawName:\"'+o.rawName+'\"'+(o.value?\",value:(\"+o.value+\"),expression:\"+JSON.stringify(o.value):\"\")+(o.arg?\",arg:\"+(o.isDynamicArg?o.arg:'\"'+o.arg+'\"'):\"\")+(o.modifiers?\",modifiers:\"+JSON.stringify(o.modifiers):\"\")+\"},\")}if(c)return s.slice(0,-1)+\"]\"}(e,t);r&&(n+=r+\",\"),e.key&&(n+=\"key:\"+e.key+\",\"),e.ref&&(n+=\"ref:\"+e.ref+\",\"),e.refInFor&&(n+=\"refInFor:true,\"),e.pre&&(n+=\"pre:true,\"),e.component&&(n+='tag:\"'+e.tag+'\",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+=\"attrs:\"+Ga(e.attrs)+\",\"),e.props&&(n+=\"domProps:\"+Ga(e.props)+\",\"),e.events&&(n+=Da(e.events,!1)+\",\"),e.nativeEvents&&(n+=Da(e.nativeEvents,!0)+\",\"),e.slotTarget&&!e.slotScope&&(n+=\"slot:\"+e.slotTarget+\",\"),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some(function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ka(n)}),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==ca||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map(function(e){return Ja(t[e],n)}).join(\",\");return\"scopedSlots:_u([\"+a+\"]\"+(r?\",null,true\":\"\")+(!r&&i?\",null,false,\"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):\"\")+\")\"}(e,e.scopedSlots,t)+\",\"),e.model&&(n+=\"model:{value:\"+e.model.value+\",callback:\"+e.model.callback+\",expression:\"+e.model.expression+\"},\"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];if(n&&1===n.type){var r=Pa(n,t.options);return\"inlineTemplate:{render:function(){\"+r.render+\"},staticRenderFns:[\"+r.staticRenderFns.map(function(e){return\"function(){\"+e+\"}\"}).join(\",\")+\"]}\"}}(e,t);o&&(n+=o+\",\")}return n=n.replace(/,$/,\"\")+\"}\",e.dynamicAttrs&&(n=\"_b(\"+n+',\"'+e.tag+'\",'+Ga(e.dynamicAttrs)+\")\"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ka(e){return 1===e.type&&(\"slot\"===e.tag||e.children.some(Ka))}function Ja(e,t){var n=e.attrsMap[\"slot-scope\"];if(e.if&&!e.ifProcessed&&!n)return Ua(e,t,Ja,\"null\");if(e.for&&!e.forProcessed)return za(e,t,Ja);var r=e.slotScope===ca?\"\":String(e.slotScope),i=\"function(\"+r+\"){return \"+(\"template\"===e.tag?e.if&&n?\"(\"+e.if+\")?\"+(qa(e,t)||\"undefined\")+\":undefined\":qa(e,t)||\"undefined\":Ra(e,t))+\"}\",o=r?\"\":\",proxy:true\";return\"{key:\"+(e.slotTarget||'\"default\"')+\",fn:\"+i+o+\"}\"}function qa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&\"template\"!==a.tag&&\"slot\"!==a.tag){var s=n?t.maybeComponent(a)?\",1\":\",0\":\"\";return\"\"+(r||Ra)(a,t)+s}var c=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Wa(i)||i.ifConditions&&i.ifConditions.some(function(e){return Wa(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,u=i||Za;return\"[\"+o.map(function(e){return u(e,t)}).join(\",\")+\"]\"+(c?\",\"+c:\"\")}}function Wa(e){return void 0!==e.for||\"template\"===e.tag||\"slot\"===e.tag}function Za(e,t){return 1===e.type?Ra(e,t):3===e.type&&e.isComment?(r=e,\"_e(\"+JSON.stringify(r.text)+\")\"):\"_v(\"+(2===(n=e).type?n.expression:Xa(JSON.stringify(n.text)))+\")\";var n,r}function Ga(e){for(var t=\"\",n=\"\",r=0;r<e.length;r++){var i=e[r],o=Xa(i.value);i.dynamic?n+=i.name+\",\"+o+\",\":t+='\"'+i.name+'\":'+o+\",\"}return t=\"{\"+t.slice(0,-1)+\"}\",n?\"_d(\"+t+\",[\"+n.slice(0,-1)+\"])\":t}function Xa(e){return e.replace(/\\u2028/g,\"\\\\u2028\").replace(/\\u2029/g,\"\\\\u2029\")}new RegExp(\"\\\\b\"+\"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments\".split(\",\").join(\"\\\\b|\\\\b\")+\"\\\\b\");function Ya(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),S}}function Qa(e){var t=Object.create(null);return function(n,r,i){(r=A({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Ya(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Ya(e,c)}),t[o]=s}}var es,ts,ns=(es=function(e,t){var n=la(e.trim(),t);!1!==t.optimize&&ka(n,t);var r=Pa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=A(Object.create(e.directives||null),n.directives)),n)\"modules\"!==a&&\"directives\"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var s=es(t.trim(),r);return s.errors=i,s.tips=o,s}return{compile:t,compileToFunctions:Qa(t)}})(Ca),rs=(ns.compile,ns.compileToFunctions);function is(e){return(ts=ts||document.createElement(\"div\")).innerHTML=e?'<a href=\"\\n\"/>':'<div a=\"\\n\"/>',ts.innerHTML.indexOf(\"&#10;\")>0}var os=!!z&&is(!1),as=!!z&&is(!0),ss=g(function(e){var t=Yn(e);return t&&t.innerHTML}),cs=wn.prototype.$mount;return wn.prototype.$mount=function(e,t){if((e=e&&Yn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if(\"string\"==typeof r)\"#\"===r.charAt(0)&&(r=ss(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement(\"div\");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){var i=rs(r,{outputSourceRange:!1,shouldDecodeNewlines:os,shouldDecodeNewlinesForHref:as,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return cs.call(this,e,t)},wn.compile=rs,wn});");

/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1c66c4b1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/EXEC.vue?vue&type=template&id=8d9731fe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parent"},[(_vm.refresher)?_c('iframe',{ref:"iframe",staticClass:"iframe",attrs:{"width":_vm.iframe.width,"height":_vm.iframe.height,"frameborder":"0","src":_vm.src}}):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/llexec/EXEC.vue?vue&type=template&id=8d9731fe&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("795b");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/llexec/code-generator.js


// import * as Node from '../llsvg/node.js'
var injector = function injector(_ref) {
  var _ref$water = _ref.water,
      water = _ref$water === void 0 ? {} : _ref$water;
  var EGRAPH_ID = "_APP_".concat(Number(Math.random() * 100000).toFixed(0));
  var JSON_ID = "_JSON_".concat(Number(Math.random() * 100000).toFixed(0));
  var APPID_REPLACER = "____APPID____";
  var ENGRAPH_WATER_REPLACER = "____ENGRAPH_WATER____";
  var BASEURL_REPLACER = "/*BASE_URL*/";
  var VUE_ENGINE_REPLACER = "/*VUE_ENGINE*/";
  var SANDBOX_ENGINE_REPLACER = "/*SANDBOX_ENGINE*/";
  var APPJSON_REPLACER = "____APPJSON____"; // eslint-disable-next-line import/no-webpack-loader-syntax

  var head = __webpack_require__("5be2").default; // eslint-disable-next-line import/no-webpack-loader-syntax


  var app = __webpack_require__("b0b3").default; // eslint-disable-next-line import/no-webpack-loader-syntax


  var body = __webpack_require__("b23a").default; // eslint-disable-next-line import/no-webpack-loader-syntax


  var vueEngine = __webpack_require__("f8db").default; // eslint-disable-next-line import/no-webpack-loader-syntax


  var sandboxEngine = __webpack_require__("9a7b").default;

  head = head.replace(VUE_ENGINE_REPLACER, vueEngine);
  head = head.replace(SANDBOX_ENGINE_REPLACER, sandboxEngine); // this can let other domain use this...

  if (true) {
    head = head.replace(BASEURL_REPLACER, 'https://en-node-graph-gui.netlify.com');
  } else {}

  body = body.replace(APPID_REPLACER, EGRAPH_ID);
  body = body.replace(APPJSON_REPLACER, JSON_ID);
  body = body.replace(APPJSON_REPLACER, JSON_ID);
  body = body.replace(ENGRAPH_WATER_REPLACER, encodeURIComponent(JSON.stringify(water)));
  app = app.replace(APPID_REPLACER, EGRAPH_ID); // eslint-disable-next-line import/no-webpack-loader-syntax

  var html = __webpack_require__("d6e4").default;

  html = html.replace("<!--HEAD-->", head);
  html = html.replace("<!--APP-->", app);
  html = html.replace("<!--BODY-->", body);
  return html;
};
var generate = function generate(_ref2) {
  var water = _ref2.water;
  return injector({
    water: water
  });
};
var codeToBlobURL = function codeToBlobURL(_ref3) {
  var code = _ref3.code;
  return URL.createObjectURL(new Blob([code], {
    type: 'text/html'
  }));
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/EXEC.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
 // import * as Node from '../llsvg/node'

/* harmony default export */ var EXECvue_type_script_lang_js_ = ({
  props: {
    // playing: {
    //   default: false
    // },
    mode: {
      default: 'preview'
    },
    water: {}
  },
  created: function created() {
    var _this = this;

    this.$on('reload', function () {
      _this.reload();
    });
    this.$on('push', function (v) {
      _this.pushData(v);
    });
  },
  components: {// DevExec: () => import('./DevExec.vue')
  },
  computed: {// nodes: {
    //   get () {
    //     return this.water.nodes
    //   },
    //   set (v) {
    //     this.water.nodes = v
    //     return v
    //   }
    // },
    // timeinfo: {
    //   get () {
    //     return this.water.timeinfo
    //   },
    //   set (v) {
    //     this.water.timeinfo = v
    //     return v
    //   }
    // },
    // timeline: {
    //   get () {
    //     return this.water.timeline
    //   },
    //   set (v) {
    //     this.water.timeline = v
    //     return v
    //   }
    // },
    // activeNodes () {
    //   return (this.nodes || []).filter(n => {
    //     return !n.trashed
    //   })
    // },
    // links () {
    //   return (Node.getLinks({ nodes: this.nodes }))
    // }
  },
  watch: {// playing () {
    //   if (this.playing) {
    //     this.play()
    //   } else {
    //     this.pause()
    //   }
    // }
    // refresher () {
    //   if (this.refresher) {
    //     this.$nextTick(() => {
    //     })
    //   }
    // },
    // links () {
    //   this.reload()
    // },
    // activeNodes () {
    //   this.reload()
    // },
    // nodes () {
    //   this.reload()
    // }
  },
  data: function data() {
    return {
      refresher: true,
      // isProd: process.env.NODE_ENV === 'production',
      iframe: {
        width: 100,
        height: 100
      },
      src: 'about:blank'
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this2 = this;

      var dimension, doOnOrientationChange;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              doOnOrientationChange = function _ref() {
                dimension();
              };

              window.addEventListener('reload', function (evt) {
                _this2.refresher = false;

                _this2.$nextTick(function () {
                  _this2.refresher = true;
                });
              }, false);
              window.addEventListener('sync-all', function (evt) {
                if (evt.type === 'sync-all') {
                  var iframe = _this2.$refs['iframe'];

                  if (iframe) {
                    var toSend = JSON.parse(JSON.stringify(evt.detail)); // console.log(toSend)

                    delete toSend.nodes; // REMOVE NODES

                    iframe.contentWindow.postMessage({
                      type: evt.type,
                      data: toSend
                    }, window.location.origin);
                  }
                }
              }, false);

              dimension = function dimension() {
                var rect = _this2.$el.getBoundingClientRect();

                _this2.iframe.width = Number(rect.width.toFixed(0));
                _this2.iframe.height = Number(rect.height.toFixed(0));
                var iframeDom = _this2.$refs['iframe'];

                if (iframeDom) {
                  iframeDom.width = Number("".concat(_this2.iframe.width));
                  iframeDom.height = Number("".concat(_this2.iframe.height));
                  iframeDom.style.width = "".concat(_this2.iframe.width, "px");
                  iframeDom.style.height = "".concat(_this2.iframe.height, "px");
                }
              };

              this.$emit('el', this.$el);
              window.addEventListener('resize', dimension, true);
              dimension();
              window.addEventListener('full-resize', function () {
                dimension();
              }, false);
              window.addEventListener('orientationchange', doOnOrientationChange);
              _context.next = 11;
              return this.reload();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    // pause () {
    //   let iframe = this.$refs['iframe']
    //   if (iframe) {
    //     iframe.contentWindow.postMessage({ type: 'pause' }, window.location.origin)
    //   }
    // },
    // play () {
    //   let iframe = this.$refs['iframe']
    //   if (iframe) {
    //     iframe.contentWindow.postMessage({ type: 'play' }, window.location.origin)
    //   }
    // },
    // tryGet (fn = () => {}) {
    //   let insta = fn()
    //   if (insta) {
    //     return Promise.resolve(insta)
    //   }
    //   return new Promise((resolve) => {
    //     let tt = setInterval(() => {
    //       let result = fn()
    //       if (result) {
    //         clearInterval(tt)
    //         resolve(result)
    //       }
    //     }, 0)
    //   })
    // },
    // async pushData (v) {
    //   let sender = await this.getSender()
    //   sender(v)
    // },
    // async getSender () {
    //   let iframe = await this.tryGet(() => {
    //     return this.$refs['iframe']
    //   })
    //   return iframe.contentWindow.postMessage
    // },
    reload: function reload() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.refresher = false;

        _this3.$forceUpdate();

        setTimeout(function () {
          _this3.restartUI();

          _this3.refresher = true;

          _this3.$forceUpdate();

          _this3.$nextTick(function () {
            resolve();
          });
        }, 5);
      });
    },
    restartUI: function restartUI() {
      var code = generate({
        water: this.water
      });
      var url = codeToBlobURL({
        code: code
      });
      this.src = url;
    }
  }
});
// CONCATENATED MODULE: ./src/llexec/EXEC.vue?vue&type=script&lang=js&
 /* harmony default export */ var llexec_EXECvue_type_script_lang_js_ = (EXECvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/llexec/EXEC.vue?vue&type=style&index=0&id=8d9731fe&scoped=true&lang=css&
var EXECvue_type_style_index_0_id_8d9731fe_scoped_true_lang_css_ = __webpack_require__("117b");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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

// CONCATENATED MODULE: ./src/llexec/EXEC.vue






/* normalize component */

var component = normalizeComponent(
  llexec_EXECvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8d9731fe",
  null
  
)

/* harmony default export */ var EXEC = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (EXEC);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=enigraph.umd.js.map