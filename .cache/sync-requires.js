const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/francesco/Documenti/Gatsby/gatsby-subs/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/francesco/Documenti/Gatsby/gatsby-subs/src/pages/index.js")))
}

