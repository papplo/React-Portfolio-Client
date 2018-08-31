import sanityClient from '../../lib/sanity'
const query = `*[_type == "works"] {
  _id,
  title,
  publishedAt,
  mainImage,
  "cats": categories[]->title,
  "poster": mainImage.asset->url,
  }[0...50]`

export const FETCH_CMS = dispatch =>  {
  return dispatch => {
    dispatch(fetchCmsBegin())
    sanityClient.fetch(query)
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

export const fetchCmsBegin = () => ({
  type: FETCH_CMS_BEGIN
})

export const fetchCmsSuccess = works => ({
  type: FETCH_CMS_SUCCESS,
  payload: { works }
})

export const fetchCmsFail = error => ({
  type: FETCH_CMS_FAILURE,
  payload: { error }
})
