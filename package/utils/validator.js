import AsyncValidator from 'async-validator'
import { Toast } from '../$toast'

export function validator(model, rules, autoShowMessage = true) {
  let validator = new AsyncValidator(rules)
  return new Promise((resolve, reject) => {
    validator.validate(model, (errors, fields) => {
      if (errors && autoShowMessage) {
        let messages = errors.map(error => error.message) || []
        let msg = messages.length > 0 ? messages[0] : ''
        Toast(msg, 'tool')
      }
      resolve({ success: !errors, result: errors })
    })
  })
}
