// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    'postcss-mixins': {},
    'saladcss-bem': {
      'style': 'suit', // suit or bem, suit by default,
      'separators': {
        'component': '-',
        'descendent': '-',
        'modifier': '__' // overwrite any default separator for chosen style
      },
      'shortcuts': {
        'utility': 'util', //override at-rule name,
        'component-namespace': 'name',
        'component': 'b',
        'descendent': 'e',
        'modifier': 'm'
      }
    },
    'postcss-nested': {},
    'postcss-cssnext': {}
  }
}
