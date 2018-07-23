export function getParentAndOffsetByNode(node) {
  let result = {
    offset: node.offsetTop,
    parent: null
  }
  let el = node.parentNode
  while (el) {
    result.offset += el.offsetTop
    if (el.scrollHeight > el.clientHeight) {
      result.parent = el
      break
    } else {
      el = el.parentNode
    }
  }
  return result
}
