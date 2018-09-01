import {
  FETCH_CMS_BEGIN,
  FETCH_CMS_SUCCESS,
  FETCH_CMS_FAILURE
} from '../actions'

export const initialState = {
  payload: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CMS_BEGIN:
      return {
        ...state,
        loading: true,
        // types: action.record,
        error: null
      }
    case FETCH_CMS_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload
      }
    case FETCH_CMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        works: []
    }
    default:
      return state
  }
}
