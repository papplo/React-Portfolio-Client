import sanityClient from '../../lib/sanity'
import {query} from '../../lib/sanity'

export const FETCH_CMS = (dispatch) =>  {
  return dispatch => {
    // FIX: Now this fetch to sanity is hardwired to handle "works"-type docuements, this needs to be dynamic in the upcoming versions
    dispatch(fetchCmsBegin('works'))
    sanityClient.fetch(query("works", 0, 15))
    .then(works => {
      dispatch(fetchCmsSuccess(works))
      return works
    })
    .catch(error => {
      dispatch(fetchCmsFail(error))
    })
  }
}

export const FETCH_CMS_BEGIN   = "FETCH_CMS_BEGIN"
export const FETCH_CMS_SUCCESS = "FETCH_CMS_SUCCESS"
export const FETCH_CMS_FAILURE = "FETCH_CMS_FAILURE"

export const fetchCmsBegin = (record) => ({
  type: FETCH_CMS_BEGIN,
  record: record
})

export const fetchCmsSuccess = works => ({
  type: FETCH_CMS_SUCCESS,
  payload: { works }
})

export const fetchCmsFail = error => ({
  type: FETCH_CMS_FAILURE,
  payload: { error }
})
