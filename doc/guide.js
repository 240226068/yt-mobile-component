/**
 * Created by mas on 2018/4/29.
 */

module.exports = {
  sections: [
    {
      name: 'cell',
      path: '/cell',
      options: [
        'plugin/components/cell/index.vue'
      ],
      contents: [
        'doc/md/cell.md'
      ],
      examples: [
        {
          text: 'demo源码',
          path: 'src/example/cell.vue'
        }
      ]
    },
    {
      name: 'swipeCell',
      path: '/swipeCell',
      options: [
        'plugin/components/swipeCell/index.vue'
      ],
      contents: [],
      examples: [
        {
          text: 'demo源码',
          path: 'src/example/swipeCell.vue'
        }
      ]
    },
    {
      name: 'badge',
      path: '/badge',
      options: [
        'plugin/components/badge/index.vue'
      ],
      contents: [
        'doc/md/badge.md'
      ],
      examples: [
        {
          text: 'demo源码',
          path: 'src/example/badge.vue'
        }
      ]
    }
  ]
}
