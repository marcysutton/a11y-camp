/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const template = path.resolve(`./src/templates/markdown-page.js`)
    return graphql(
        `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create pages from Markdown.
        const pages = result.data.allMarkdownRemark.edges

        pages.forEach((page, index) => {
            createPage({
                path: page.node.frontmatter.path,
                component: template,
                context: {
                    id: page.node.id
                },
            })
        })

        return null
    })
}
