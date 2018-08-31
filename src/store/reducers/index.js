import { combineReducers } from 'redux'
import { default as folio } from './fetch'
export { initialStore } from './fetch'

export default combineReducers({
  folio: folio
})
