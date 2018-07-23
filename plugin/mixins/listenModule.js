/**
 * Created by mas on 2018/3/18.
 */
import {bus} from '../utils'
export let listenModule = {
  created() {
    bus.$on('onBack', () => {
      if (this.$getService()) {
        this.hide()
      }
    })
  },
  watch: {
    showFlag(val) {
      this.$updateService(val)
    }
  }
}
