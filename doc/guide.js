/**
 * Created by mas on 2018/4/29.
 */

module.exports = {
  sections: [
    {
      name: 'page',
      path: '/page',
      options: [
        'plugin/components/page/index.vue',
        'plugin/components/header/index.vue'
      ],
      contents: [
        'doc/md/page.md'
      ],
      examples: [
        {
          text: 'demo源码',
          path: 'doc/example/page.vue'
        }
      ],
      children: [

      ]
    }
  ]
}
