const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions; 
    const blogPostTemplate = path.resolve('./src/layouts/BlogpostLayout.js');

    return graphql(`
    {
        allWordpressPost {
            nodes {
                slug
            }
        }
    }`).then(result => {
        result.data.allWordpressPost.nodes.forEach((node) => {
            createPage({
                path: node.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.slug
                }
            })
        })
    })
}