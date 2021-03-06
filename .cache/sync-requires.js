const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-layouts-blogpost-layout-js": hot(preferDefault(require("/Users/ikommerce/Documents/Gatsby/gatsby-subs/src/layouts/BlogpostLayout.js"))),
  "component---src-layouts-pages-layout-js": hot(preferDefault(require("/Users/ikommerce/Documents/Gatsby/gatsby-subs/src/layouts/PagesLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ikommerce/Documents/Gatsby/gatsby-subs/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ikommerce/Documents/Gatsby/gatsby-subs/src/pages/index.js")))
}

