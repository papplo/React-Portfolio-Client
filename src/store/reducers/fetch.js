import {
  FETCH_CMS_BEGIN,
  FETCH_CMS_SUCCESS,
  FETCH_CMS_FAILURE
} from '../actions'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CMS_SUCCESS:
      return {
        ...state,
        loading: false,
        works: action.payload.works
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