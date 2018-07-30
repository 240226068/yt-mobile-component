var hljs = require('highlight.js')
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return ''
  }
});
module.exports = function (source) {
  this.cacheable && this.cacheable(true);
  let value = md.render(source)
  return `module.exports = ${JSON.stringify(value)}`
}
