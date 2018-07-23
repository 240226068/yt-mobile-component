/**
 * Created by mas on 2018/3/17.
 */
export function delayed(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
