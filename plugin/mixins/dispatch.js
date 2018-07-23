/**
 * Created by mas on 2017/9/23.
 */
export const dispatch = {
  methods: {
    dispatch(componentName, eventName) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      let params = [].slice.call(arguments, 2)
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}
