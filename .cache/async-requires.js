// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-layouts-blogpost-layout-js": () => import("./../src/layouts/BlogpostLayout.js" /* webpackChunkName: "component---src-layouts-blogpost-layout-js" */),
  "component---src-layouts-pages-layout-js": () => import("./../src/layouts/PagesLayout.js" /* webpackChunkName: "component---src-layouts-pages-layout-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

