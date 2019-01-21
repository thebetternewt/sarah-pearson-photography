const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allPrismicGalleryPost {
        edges {
          node {
            id
            uid
            type
            data {
              category
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allPrismicGalleryPost.edges.map(({ node }) => {
      createPage({
        path: `${node.data.category}/${node.uid}`,
        component: path.resolve(`./src/templates/galleryPost.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
