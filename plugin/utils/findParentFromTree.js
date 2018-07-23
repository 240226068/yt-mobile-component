/**
 * Created by mas on 2018/5/6.
 */
export function findParentFromTree(tree, node, id = 'id', children = 'children') {
  if (!tree || !tree.length || !node) return []
  const fn = (list, code) => {
    let res = []
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      if (item[id] === code) {
        res.push(item)
        break
      } else if (item[children] && item[children].length) {
        let child = fn(item[children], code)
        if (child && child.length) {
          res = [item].concat(child)
          break
        }
      }
    }
    return res
  }
  return fn(tree, node)
}
