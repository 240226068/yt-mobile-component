/**
 * Created by mas on 2018/5/1.
 */
var hljs = require('highlight.js')
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {
      }
    }
    return ''
  }
})
var path = require('path')

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

function requireIt(fileName) {
  let loader = ''
  if (/\.vue$/.test(fileName)) {
    loader = `!!${path.join(__dirname, './guide-loader.js!')}`
  } else if (/\.md$/.test(fileName)) {
    loader = `!!${path.join(__dirname, './md-loader.js!')}`
  }
  fileName = resolve(fileName)
  return new Promise((resolve, reject) => {
    this.loadModule(loader + fileName, (error, source, sourceMap, module) => {
      error ? reject(error) : resolve(this.exec(source, fileName))
    })
  })
}

function requireList(list) {
  return new Promise((resolve, reject) => {
    list = list.map(item => requireIt.call(this, item))
    Promise.all(list).then(resolve, reject)
  })
}

function requireExample(fileName) {
  let loader = `!!text-loader!`
  fileName = resolve(fileName)
  return new Promise((resolve, reject) => {
    this.loadModule(loader + fileName, (error, source, sourceMap, module) => {
      if (error) {
        reject(error)
      } else {
        source = this.exec(source, fileName)
        source = '```html\n' + source + '```'
        source = md.render(source)
        resolve(source)
      }
    })
  })
}

function requireExamples(list) {
  return new Promise((resolve, reject) => {
    let results = list.map(item => requireExample.call(this, item.path))
    Promise.all(results).then((res) => {
      list = list.map((item, index) => {
        item.html = res[index]
        return item
      })
      resolve(list)
    }, reject)
  })
}

function requireSection(section) {
  return new Promise((resolve, reject) => {
    let optionPromise = requireList.call(this, section.options || [])
    let contentPromise = requireList.call(this, section.contents || [])
    let examplePromise = requireExamples.call(this, section.examples || [])
    Promise.all([optionPromise, contentPromise, examplePromise])
           .then((result) => {
             section.options = result[0]
             section.contents = result[1]
             section.examples = result[2]
             resolve(section)
           }, reject)
  })
}

module.exports = function (source) {
  this.cacheable && this.cacheable(true)
  let callback = this.async()
  let config = this.exec(source, this.resourcePath)
  let { sections } = config
  sections = sections.map(section => requireSection.call(this, section))
  Promise.all(sections)
         .then((result) => {
           config.sections = result
           callback(null, `module.exports = ${JSON.stringify(config)}`)
         })
}
