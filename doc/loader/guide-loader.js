var vueDocs = require('vue-docgen-api')
module.exports = function (source) {
  this.cacheable(true)
  let value = vueDocs.parse(this.resourcePath)
  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `module.exports = ${value}`
}
