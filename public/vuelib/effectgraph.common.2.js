((typeof self !== 'undefined' ? self : this)["webpackJsonpeffectgraph"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpeffectgraph"] || []).push([[2],{

/***/ "65c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37f3048f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/DevExec.vue?vue&type=template&id=6f353588&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"full"},[(_vm.water)?_c('SandBox',{attrs:{"water":_vm.water}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/llexec/DevExec.vue?vue&type=template&id=6f353588&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37f3048f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/SandBox.vue?vue&type=template&id=353899c0&scoped=true&
var SandBoxvue_type_template_id_353899c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.activeNodes && _vm.water)?_c('div',{staticClass:"app-entry-dom"},_vm._l((_vm.activeNodes),function(node){return _c('GraphNode',{key:node._id,attrs:{"nodeMap":_vm.nodeMap,"nodes":_vm.activeNodes,"node":node}})}),1):_vm._e()}
var SandBoxvue_type_template_id_353899c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/llexec/SandBox.vue?vue&type=template&id=353899c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37f3048f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/GraphNode.vue?vue&type=template&id=59aa00ad&
var GraphNodevue_type_template_id_59aa00ad_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.compo && _vm.node)?_c(_vm.compo,{ref:"me",tag:"Component",attrs:{"parentNode":_vm.parentNode,"parentComponent":_vm.nodeMap[_vm.node.to],"isRootNode":!!!_vm.node.to,"components":_vm.nodeMap,"nodes":_vm.nodes,"node":_vm.node},on:{"exec":_vm.onExec,"ready":_vm.onReady,"remove":_vm.onRemove}}):_vm._e()}
var GraphNodevue_type_template_id_59aa00ad_staticRenderFns = []


// CONCATENATED MODULE: ./src/llexec/GraphNode.vue?vue&type=template&id=59aa00ad&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__("5a89");

// EXTERNAL MODULE: ./node_modules/load-js/index.js
var load_js = __webpack_require__("2100");
var load_js_default = /*#__PURE__*/__webpack_require__.n(load_js);

// CONCATENATED MODULE: ./src/llexec/vue-compile.js





// // npm i @babel/standalone@7.0.0-beta.32 babel-plugin-transform-object-rest-spread babel-plugin-transform-es2015-modules-umd --save
// import * as Babel from '@babel/standalone/babel.js'
// var dynamicSpread = require('babel-plugin-transform-object-rest-spread')
// Babel.registerPlugin('transform-object-rest-spread', dynamicSpread)
// // var umd = require('babel-plugin-transform-es2015-modules-umd')
// // Babel.registerPlugin('transform-es2015-modules-umd', umd)
// // var es6 = [
// //   [ 'transform-object-rest-spread', { 'useBuiltIns': true } ],
// //   [
// //     'transform-es2015-modules-umd',
// //     {
// //       exactGlobals: true
// //     }
// //   ]
// // ]
// var es6 = [
//   [ 'transform-object-rest-spread', { 'useBuiltIns': true } ]
//   // [
//   //   'transform-es2015-modules-umd',
//   //   {
//   //     exactGlobals: true
//   //   }
//   // ]
// ]




function getTagContent(str, start, end) {
  if (str.indexOf(start) === -1) {
    return false;
  }

  return str.slice(str.indexOf(start) + start.length, str.indexOf(end));
}

var getCompoInfo = function getCompoInfo(compoStr) {
  var output = {};
  compoStr = compoStr.trim();
  output.template = getTagContent(compoStr, '<template>', '</template>') || '';
  output.script = getTagContent(compoStr, '<script>', '</script>') || '';
  output.style = getTagContent(compoStr, '<style>', '</style>') || getTagContent(compoStr, '<style scoped>', '</style>');
  var scoped = !!getTagContent(compoStr, '<style scoped>', '</style>');
  output.styleScoped = scoped;
  return output;
};

var compile =
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var src, noCSS, _ref$library, library, info, scopeID, css, code, end, output, runner, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            src = _ref.src, noCSS = _ref.noCSS, _ref$library = _ref.library, library = _ref$library === void 0 ? [] : _ref$library;
            info = getCompoInfo(src);
            scopeID = ' data-s-' + Math.ceil(Math.random() * 100000).toString(36);
            css = JSON.stringify(info.style);
            info.template = info.template.replace('>', "".concat(scopeID, ">"));

            if (noCSS) {
              css = JSON.stringify('');
            }
            /* eslint-disable */


            code = "\n    var css = ".concat(css, ";\n    var head = document.head || document.getElementsByTagName('head')[0];\n    var style = document.createElement('style');\n    style.type = 'text/css';\n    if (style.styleSheet) {\n      style.styleSheet.cssText = css;\n    } else {\n      style.appendChild(document.createTextNode(css));\n    }\n\n    function addScope (styleElt, scopeName) {\n\n      function process() {\n\n        var sheet = styleElt.sheet;\n        var rules = sheet.cssRules;\n        for ( var i = 0; i < rules.length; ++i ) {\n          let rule = rules[i];\n\n          if ( rule.type === 4 ) {\n\n            // console.log(rule)\n            for ( var j = 0; j < rule.cssRules.length; ++j ) {\n\n              let scopedSelectors = [];\n              let subRule = rule.cssRules[j];\n\n              subRule.selectorText.split(/s*,s*/).forEach(function(sel) {\n\n                scopedSelectors.push(scopeName+' '+sel);\n                let segments = sel.match(/([^ :]+)(.+)?/);\n                scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));\n              });\n\n              let scopedRule = scopedSelectors.join(',') + subRule.cssText.substr(subRule.selectorText.length);\n\n              rule.deleteRule(j);\n              rule.insertRule(scopedRule, j);\n              // console.log(rule);\n            }\n\n            continue;\n          }\n\n          if ( rule.type !== 1 )\n            continue;\n\n          let scopedSelectors = [];\n\n          rule.selectorText.split(/s*,s*/).forEach(function(sel) {\n\n            scopedSelectors.push(scopeName+' '+sel);\n            let segments = sel.match(/([^ :]+)(.+)?/);\n            scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));\n          });\n\n          let scopedRule = scopedSelectors.join(',') + rule.cssText.substr(rule.selectorText.length);\n          sheet.deleteRule(i);\n          sheet.insertRule(scopedRule, i);\n        }\n      }\n\n      try {\n        // firefox may fail sheet.cssRules with InvalidAccessError\n        process();\n      } catch (ex) {\n\n        if ( ex instanceof DOMException && ex.code === DOMException.INVALID_ACCESS_ERR ) {\n\n          styleElt.sheet.disabled = true;\n          styleElt.addEventListener('load', function onStyleLoaded() {\n\n            styleElt.removeEventListener('load', onStyleLoaded);\n\n            // firefox need this timeout otherwise we have to use document.importNode(style, true)\n            setTimeout(function() {\n\n              process();\n              styleElt.sheet.disabled = false;\n            });\n          });\n          return;\n        }\n\n        throw ex;\n      }\n    }\n\n    head.appendChild(style);\n    if (").concat(info.styleScoped, ") {\n      addScope(style, '[").concat(scopeID, "]');\n    }\n  ");
            /* eslint-enable */
            // inject template property into the export Object

            info.script = "var mycompo = { template: '<div></div>' };" + info.script;
            info.script = info.script.replace('export default {', "mycompo = { \n\ttemplate: ".concat(JSON.stringify(info.template), ","));
            end = "\n    return mycompo;\n  "; // console.log(info)

            output = code + info.script + end;
            window.THREE = three_module;
            console.log(library);
            _context.next = 15;
            return load_js_default()(library.filter(function (f) {
              return f.url;
            }).map(function (lib) {
              return {
                url: lib.url
              };
            }));

          case 15:
            /* eslint-disable */
            runner = new Function('Vue', 'THREE', 'window', output);
            /* eslint-enable */

            result = runner(external_commonjs_vue_commonjs2_vue_root_Vue_default.a, three_module, window);
            console.log(result);
            return _context.abrupt("return", result);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function compile(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var vue_compile_addDeps = function addDeps(_ref3) {
  var vue = _ref3.vue,
      _ref3$dep = _ref3.dep,
      dep = _ref3$dep === void 0 ? {} : _ref3$dep;
  vue.components = Object(objectSpread["a" /* default */])({}, vue.components, dep);
  return vue;
};
var Cache = {};
var makeCompo =
/*#__PURE__*/
function () {
  var _ref5 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref4) {
    var src, _ref4$library, library, vueComp;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            src = _ref4.src, _ref4$library = _ref4.library, library = _ref4$library === void 0 ? [] : _ref4$library;

            if (!Cache[src]) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", Cache[src]);

          case 5:
            _context2.next = 7;
            return compile({
              src: src,
              noCSS: false,
              library: library
            });

          case 7:
            vueComp = _context2.sent;
            vueComp = vue_compile_addDeps({
              vue: vueComp,
              dep: {// Object3D: require('../vfx/FreeJS/Object3D.vue').default
              }
            });
            Cache[src] = vueComp;
            return _context2.abrupt("return", vueComp);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function makeCompo(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/GraphNode.vue?vue&type=script&lang=js&



//
//
//
//

/* harmony default export */ var GraphNodevue_type_script_lang_js_ = ({
  props: {
    node: {},
    nodes: {},
    nodeMap: {}
  },
  data: function data() {
    var _this = this;

    return {
      parentNode: this.nodes.find(function (n) {
        return n._id === _this.node.to;
      }),
      compo: false,
      self: {},
      rAFID: 0,
      execFnc: function execFnc() {}
    };
  },
  beforeDestroy: function beforeDestroy() {
    window.cancelAnimationFrame(this.rAFID);
  },
  created: function created() {
    var _this2 = this;

    var rAF = function rAF() {
      _this2.rAFID = window.requestAnimationFrame(rAF);

      _this2.execFnc();
    };

    this.rAFID = window.requestAnimationFrame(rAF);
  },
  methods: {
    onExec: function onExec(v) {
      this.execFnc = v;
    },
    onReady: function onReady(compos) {
      var _this3 = this;

      var tt = setInterval(function () {
        var me = _this3.nodeMap[_this3.node._id] = compos;
        var parent = _this3.nodeMap[_this3.node.to];

        if (parent) {
          clearInterval(tt);
          me.$emit('addToParent', {
            parent: parent,
            me: me
          });
          parent.$emit('addChild', {
            child: me,
            me: parent
          });
        }
      }, 1);
    },
    onRemove: function onRemove() {
      var me = this.$refs['me'];
      var parent = this.nodeMap[this.node.to];

      if (this.nodeMap[this.node._id]) {
        this.nodeMap[this.node._id].$emit('removeFromParent', {
          me: me,
          parent: parent
        });
      }

      if (this.node.to) {
        this.nodeMap[this.node.to].$emit('removeChild', {
          me: parent,
          child: me
        });
      }
    },
    getCompos: function () {
      var _getCompos = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_ref) {
        var node, temp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                node = _ref.node;
                temp = "\n        <template>\n          <div class=\"omg-this-compo\" nodeid=\"".concat(node._id, "\"></div>\n        </template>\n        <script>\n        export default {\n        };\n        ", '<', "/script>\n        <style>\n        </style>\n      ");
                _context.next = 4;
                return makeCompo({
                  src: node.src || temp,
                  library: node.library || []
                });

              case 4:
                this.compo = _context.sent;
                this.$forceUpdate();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCompos(_x) {
        return _getCompos.apply(this, arguments);
      }

      return getCompos;
    }(),
    init: function init() {}
  },
  mounted: function mounted() {
    this.getCompos({
      node: this.node
    });
  }
});
// CONCATENATED MODULE: ./src/llexec/GraphNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var llexec_GraphNodevue_type_script_lang_js_ = (GraphNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/llexec/GraphNode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  llexec_GraphNodevue_type_script_lang_js_,
  GraphNodevue_type_template_id_59aa00ad_render,
  GraphNodevue_type_template_id_59aa00ad_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GraphNode = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/SandBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
 // import * as Node from '../llsvg/node.js'

/* harmony default export */ var SandBoxvue_type_script_lang_js_ = ({
  components: {
    GraphNode: GraphNode
  },
  props: {
    water: {}
  },
  computed: {
    nodes: function nodes() {
      return this.water.nodes;
    },
    activeNodes: function activeNodes() {
      return this.nodes.filter(function (a) {
        return !a.trashed;
      }).slice();
    }
  },
  watch: {
    water: function water() {}
  },
  data: function data() {
    return {
      nodeMap: {}
    };
  },
  mounted: function mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/llexec/SandBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var llexec_SandBoxvue_type_script_lang_js_ = (SandBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/llexec/SandBox.vue?vue&type=style&index=0&lang=css&
var SandBoxvue_type_style_index_0_lang_css_ = __webpack_require__("923e");

// CONCATENATED MODULE: ./src/llexec/SandBox.vue






/* normalize component */

var SandBox_component = Object(componentNormalizer["a" /* default */])(
  llexec_SandBoxvue_type_script_lang_js_,
  SandBoxvue_type_template_id_353899c0_scoped_true_render,
  SandBoxvue_type_template_id_353899c0_scoped_true_staticRenderFns,
  false,
  null,
  "353899c0",
  null
  
)

/* harmony default export */ var SandBox = (SandBox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/llexec/DevExec.vue?vue&type=script&lang=js&



//
//
//
//
//
//

/* harmony default export */ var DevExecvue_type_script_lang_js_ = ({
  props: {
    nodes: {}
  },
  components: {
    SandBox: SandBox
  },
  data: function data() {
    return {
      water: {
        nodes: this.nodes
      }
    };
  },
  methods: {
    postMessage: function () {
      var _postMessage = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(evt) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(evt); // let sandbox = await this.tryGet(() => this.$refs.sandbox)

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function postMessage(_x) {
        return _postMessage.apply(this, arguments);
      }

      return postMessage;
    }(),
    tryGet: function tryGet() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return new Promise(function (resolve) {
        var tt = setInterval(function () {
          var result = fn();

          if (result) {
            clearInterval(tt);
            resolve(result);
          }
        }, 0);
      });
    }
  },
  watch: {
    nodes: function nodes() {
      this.water.nodes = this.nodes;
    }
  }
});
// CONCATENATED MODULE: ./src/llexec/DevExec.vue?vue&type=script&lang=js&
 /* harmony default export */ var llexec_DevExecvue_type_script_lang_js_ = (DevExecvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/llexec/DevExec.vue





/* normalize component */

var DevExec_component = Object(componentNormalizer["a" /* default */])(
  llexec_DevExecvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DevExec = __webpack_exports__["default"] = (DevExec_component.exports);

/***/ }),

/***/ "923e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SandBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d47b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SandBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SandBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SandBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bd71":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".app-entry-dom,.full,body,html{width:100%;height:100%}html{overflow:hidden}body{margin:0}.app-entry-dom{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;overflow:scroll;-webkit-overflow-scrolling:touch}", ""]);

// exports


/***/ }),

/***/ "d47b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bd71");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("d841d61c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

}]);
//# sourceMappingURL=effectgraph.common.2.js.map