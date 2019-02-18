import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from '../../gatsby-config'

const builder = imageUrlBuilder(sanityConfig.api)

export function imageUrlFor(source) {
  return builder.image(source)
}
