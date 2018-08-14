/**
 * Created by mas on 2018/4/1.
 */
export class PackingEvent {
  static VERTICAL() {
    return 'vertical'
  }

  static HORIZONTAL() {
    return 'horizontal'
  }

  static RIGHT() {
    return 'right'
  }

  static LEFT() {
    return 'left'
  }

  static TOP() {
    return 'top'
  }

  static BOTTOM() {
    return 'bottom'
  }

  constructor({el, direction = PackingEvent.VERTICAL(), prevent = true, stop = true, disabled = false, start, move, end}) {
    this.el = el
    this.direction = direction
    this.start = start
    this.move = move
    this.end = end
    this.prevent = prevent
    this.stop = stop
    this.disabled = disabled
    this.bindEvent()
  }

  setDisabled(disabled) {
    this.disabled = disabled
  }

  bindEvent() {
    const fn = (e, name) => {
      if (this.disabled) return
      this[name](e)
    }
    this.el.addEventListener('touchstart', (e) => fn(e, '_start'))
    this.el.addEventListener('touchmove', (e) => fn(e, '_move'))
    this.el.addEventListener('touchend', (e) => fn(e, '_end'))
    this.el.addEventListener('touchcancel', (e) => fn(e, '_end'))
  }

  _start(event) {
    this._Intent = true
    this._judgeIntent = true
    this.startX = this._moveX = event.touches[0].clientX
    this.startY = this._moveY = event.touches[0].clientY
    !this.start || this.start({e: event, x: this.startX, y: this.startY})
  }

  _move(event) {
    if (!this._Intent) return
    let moveX = event.touches[0].clientX
    let moveY = event.touches[0].clientY
    let deltaX = moveX - this.startX
    let deltaY = moveY - this.startY
    let deltaMoveX = moveX - this._moveX
    let deltaMoveY = moveY - this._moveY
    this._moveX = moveX
    this._moveY = moveY
    if (this._judgeIntent) {
      if (!this._judgeDirection(deltaX, deltaY)) {
        this._Intent = false
        return
      }
      this._judgeIntent = false
    }
    !this.prevent || event.preventDefault()
    !this.stop || event.stopPropagation()
    !this.move || this.move({e: event, x: moveX, y: moveY, deltaX, deltaY, deltaMoveX, deltaMoveY})
  }

  _end(event) {
    if (this._judgeIntent) return
    this._Intent = true
    this._judgeIntent = true
    this.endX = event.changedTouches[0].clientX
    this.endY = event.changedTouches[0].clientY
    let direction = ''
    let moveX = this.endX - this.startX
    let moveY = this.endY - this.startY
    if (this.direction === PackingEvent.HORIZONTAL()) {
      direction = moveX > 0 ? PackingEvent.RIGHT() : PackingEvent.LEFT()
    } else {
      direction = moveY > 0 ? PackingEvent.TOP() : PackingEvent.BOTTOM()
    }
    !this.end || this.end({e: event, x: this.endX, y: this.endY, moveX: moveX, moveY: moveY, direction: direction})
  }

  _judgeDirection(deltaX, deltaY) {
    let res = Math.abs(deltaY) - Math.abs(deltaX)
    if (this.direction === PackingEvent.HORIZONTAL()) {
      return res < 0
    } else if (this.direction === PackingEvent.VERTICAL()) {
      return res > 0
    }
  }
}
