/**
 * Created by mas on 2018/3/27.
 */
export function inView (el, preLoad = 1) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * preLoad &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth * preLoad &&
    rect.right > 0
}
