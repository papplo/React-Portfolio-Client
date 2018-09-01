import { combineReducers } from 'redux'
import { default as FETCH } from './fetch'
export { initialStore } from './fetch'

export default combineReducers({
  FETCH: FETCH
})
