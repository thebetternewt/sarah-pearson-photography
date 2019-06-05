const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
            title
            mainImage {
              asset {
                url
              }
            }
            category {
              title
            }
            gallery {
              id
              title
            }
          }
        }
      }
    }
  `)

  posts.data.allSanityPost.edges.map(({ node }) => {
    createPage({
      path: `${node.category.title}/${node.slug.current}`,
      component: path.resolve(`./src/templates/galleryPost.js`),
      context: {
        id: node.id,
      },
    })

    createPage({
      path: `galleries/${node.slug.current}}`,
      component: path.resolve(`./src/templates/GalleryPage.js`),
      context: {
        id: node.gallery.id,
      },
    })
  })
}
