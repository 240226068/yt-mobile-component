/**
 * Created by mas on 2018/5/6.
 */
export function findNodeFromTree( tree, node, id = 'id', children = 'children' ) {
  if (!node || !node.length || !tree || !tree.length) return []
  const findItem = ( item, list ) => {
    for (let i = 0; i < list.length; i++) {
      if (list[ i ][ id ] === item) {
        return list[ i ]
      } else if (list[ i ][ children ] && list[ i ][ children ].length) {
        let res = findItem(item, list[ i ][ children ])
        if (res) {
          return res
        }
      }
    }
    return null
  }
  return node.map(item => findItem(item, tree))
}
