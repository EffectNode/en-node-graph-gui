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
import Vue from 'vue'
import * as THREE from 'three'
import loadJS from 'load-js'

function getTagContent (str, start, end) {
  if (str.indexOf(start) === -1) {
    return false
  }
  return str.slice(str.indexOf(start) + start.length, str.indexOf(end))
}

const getCompoInfo = (compoStr) => {
  var output = {}
  compoStr = compoStr.trim()
  output.template = getTagContent(compoStr, '<template>', '</template>') || ''
  output.script = getTagContent(compoStr, '<script>', '</script>') || ''
  output.style = getTagContent(compoStr, '<style>', '</style>') || getTagContent(compoStr, '<style scoped>', '</style>')

  var scoped = !!getTagContent(compoStr, '<style scoped>', '</style>')
  output.styleScoped = scoped
  return output
}

export const compile = async ({ src, noCSS, library = [] }) => {
  let info = getCompoInfo(src)
  var scopeID = ' data-s-' + (Math.ceil(Math.random() * 100000)).toString(36)
  let css = JSON.stringify(info.style)
  info.template = info.template.replace('>', `${scopeID}>`)

  if (noCSS) {
    css = JSON.stringify('')
  }

  /* eslint-disable */

  let code = `
    var css = ${css};
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    function addScope (styleElt, scopeName) {

      function process() {

        var sheet = styleElt.sheet;
        var rules = sheet.cssRules;
        for ( var i = 0; i < rules.length; ++i ) {
          let rule = rules[i];

          if ( rule.type === 4 ) {

            // console.log(rule)
            for ( var j = 0; j < rule.cssRules.length; ++j ) {

              let scopedSelectors = [];
              let subRule = rule.cssRules[j];

              subRule.selectorText.split(/\s*,\s*/).forEach(function(sel) {

                scopedSelectors.push(scopeName+' '+sel);
                let segments = sel.match(/([^ :]+)(.+)?/);
                scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));
              });

              let scopedRule = scopedSelectors.join(',') + subRule.cssText.substr(subRule.selectorText.length);

              rule.deleteRule(j);
              rule.insertRule(scopedRule, j);
              // console.log(rule);
            }

            continue;
          }

          if ( rule.type !== 1 )
            continue;

          let scopedSelectors = [];

          rule.selectorText.split(/\s*,\s*/).forEach(function(sel) {

            scopedSelectors.push(scopeName+' '+sel);
            let segments = sel.match(/([^ :]+)(.+)?/);
            scopedSelectors.push(segments[1] + scopeName + (segments[2]||''));
          });

          let scopedRule = scopedSelectors.join(',') + rule.cssText.substr(rule.selectorText.length);
          sheet.deleteRule(i);
          sheet.insertRule(scopedRule, i);
        }
      }

      try {
        // firefox may fail sheet.cssRules with InvalidAccessError
        process();
      } catch (ex) {

        if ( ex instanceof DOMException && ex.code === DOMException.INVALID_ACCESS_ERR ) {

          styleElt.sheet.disabled = true;
          styleElt.addEventListener('load', function onStyleLoaded() {

            styleElt.removeEventListener('load', onStyleLoaded);

            // firefox need this timeout otherwise we have to use document.importNode(style, true)
            setTimeout(function() {

              process();
              styleElt.sheet.disabled = false;
            });
          });
          return;
        }

        throw ex;
      }
    }

    head.appendChild(style);
    if (${info.styleScoped}) {
      addScope(style, '[${scopeID}]');
    }
  `

  /* eslint-enable */

  // inject template property into the export Object
  info.script = `var mycompo = { template: '<div></div>' };` + info.script
  info.script = info.script.replace('export default {', `mycompo = { \n\ttemplate: ${JSON.stringify(info.template)},`)

  let end = `
    return mycompo;
  `
  // console.log(info)
  let output = code + info.script + end

  window.THREE = THREE

  // console.log(library)

  await loadJS(library.filter(f => f.url).map((lib) => {
    return {
      url: lib.url
    }
  }))

  /* eslint-disable */
  let runner = new Function('Vue', 'THREE', 'window', 'loadJS', output)
  /* eslint-enable */

  let result = runner(Vue, THREE, window, loadJS)

  // console.log(result)
  return result
}

export const addDeps = ({ vue, dep = {} }) => {
  vue.components = {
    ...vue.components,
    ...dep
  }
  return vue
}

export const Cache = {}

export const makeCompo = async ({ src, library = [] }) => {
  if (Cache[src]) {
    return Cache[src]
  } else {
    let vueComp = await compile({
      src,
      noCSS: false,
      library
    })
    vueComp = addDeps({
      vue: vueComp,
      dep: {
        // Object3D: require('../vfx/FreeJS/Object3D.vue').default
      }
    })
    Cache[src] = vueComp
    return vueComp
  }
}
