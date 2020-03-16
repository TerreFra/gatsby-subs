/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wordpress.ikom.dev`,
        protocol: `https`,
        hostingWPCOM: false
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Alegreya','Roboto Slab']
        }
      }
    }
  ]
}
