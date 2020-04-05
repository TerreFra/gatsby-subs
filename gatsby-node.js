const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions; 

    const blogPostTemplate = path.resolve('./src/layouts/BlogpostLayout.js');
    const pagesTemplate = path.resolve('./src/layouts/PagesLayout.js');

    return graphql(`
    {
        allWordpressPost {
            nodes {
                slug
                categories {
                    slug
                  }
            }
        }
        allWordpressPage {
            nodes {
                slug
                content
            }
          }
    }`).then(result => {

        // Create Post.
        result.data.allWordpressPost.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.slug,
                    category: node.categories[0].slug
                }
            })
        })

        // Create Pages.
        result.data.allWordpressPage.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: pagesTemplate,
                context: {
                    slug: node.slug,
                }
            })
        })

    })
}