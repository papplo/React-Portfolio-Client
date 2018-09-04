import sanityClient from '@sanity/client'
export default sanityClient({
  projectId: 'pphn0i1g',
  dataset: 'production',
  useCdn: true
})

export const query = (type = 'works', start = 0, limit = 50) => {

  return `*[_type == "${type}"] {
    _type,
    _id,
    title, subtitle, publishedAt, mainImage,
    body[]{..., "asset": asset->},
    "name": name,
    "cats": categories[]->title,
    "poster": mainImage.asset->url,
    ...
  }[${start}...${limit}]`
}
