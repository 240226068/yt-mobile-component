/**
 * Created by mas on 2018/3/18.
 */
import {bus} from '../utils'
export let listenPage = {
  created() {
    bus.$on('onBack', () => {
      if (!this.$getService()) {
        this.$router.$back()
      }
    })
  }
}
