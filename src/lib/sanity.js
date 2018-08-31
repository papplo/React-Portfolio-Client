import sanityClient from '@sanity/client'
export default sanityClient({
  projectId: 'pphn0i1g',
  dataset: 'production',
  useCdn: true
})

export const query = (type, start, limit) => {

  type  !== 'undefined' ? type = 'works' : type
  start !== 'undefined' ? start = 0 : start
  limit !== 'undefined' ? limit = 50 : limit

  return `*[_type == "${type}"] {
    _id,
    title,
    publishedAt,
    mainImage,
    "cats": categories[]->title,
    "poster": mainImage.asset->url,
  }[${start}...${limit}]`
}
