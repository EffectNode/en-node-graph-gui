
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

export const compile = ({ src, noCSS = false }) => {
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

  return output
}
