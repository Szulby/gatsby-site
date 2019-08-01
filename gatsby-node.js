/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/page-2.jsx`)
  return graphql(
    `
      query {
        gcms {
          blogs {
            id
            title
            some
          }
        }
      }
    `,
    { limit: 1 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.gcms.blogs.forEach(blog => {
      createPage({
        path: `/${blog.id}`,
        component: blogPostTemplate,
        context: {
          title: `${blog.title}`,
          content: `${blog.some}`,
        },
      })
    })
  })
}
