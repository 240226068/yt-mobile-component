/**
 * Created by mas on 2018/5/4.
 */
export class Theme {
  constructor(filed, custom, value) {
    let self = this

    this.filed = filed

    this.currentTheme = value

    this.store = {}

    this.data = function () {
      let res = {}
      res[self.filed] = self.get(this)
      return res
    }

    this.created = function () {
      self.watch(this)
    }

    this.destroyed = function () {
      self.remove(this)
    }

    this.get = function () {
      return self.currentTheme
    }

    this.set = function (val) {
      if (val === self.value) return
      self.currentTheme = val
      self.emit()
    }
  }

  watch(context) {
    this.store[context._uid] = context
    context[this.filed] = this.get()
  }

  remove(context) {
    if (this.store[context._uid]) {
      delete this.store[context._uid]
    }
  }

  emit() {
    for (const key in this.store) {
      this.store[key][this.filed] = this.get()
    }
  }
}
