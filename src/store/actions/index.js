import sanityClient from '../../lib/sanity'
import {query} from '../../lib/sanity'

export const FETCH_CMS = (dispatch, recordType) =>  {
  const FETCH_TYPE = recordType // create constant for inner scope
  return (dispatch) => {
    dispatch(fetchCmsBegin(FETCH_TYPE))
    sanityClient.fetch(query(FETCH_TYPE, 0, 10))

    .then(result => {
      dispatch(fetchCmsSuccess(result, FETCH_TYPE))
      return result
    })
    .catch(error => {
      dispatch(fetchCmsFail(error))
    })
  }
}


export const FETCH_CMS_BEGIN   = "FETCH_CMS_BEGIN"
export const fetchCmsBegin = (recordType) => ({
  type: FETCH_CMS_BEGIN +' _'+ recordType.toUpperCase(),
  recordType: recordType
})

export const FETCH_CMS_SUCCESS = "FETCH_CMS_SUCCESS"
export const fetchCmsSuccess = (result, recordType) => ({
  type: FETCH_CMS_SUCCESS,
  payload: {[recordType]: result},
  [recordType]: result
})

export const FETCH_CMS_FAILURE = "FETCH_CMS_FAILURE"
export const fetchCmsFail = error => ({
  type: FETCH_CMS_FAILURE,
  payload: { error }
})
