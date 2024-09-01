// @ts-nocheck
const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://43.202.36.104:8080",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    }),
  )
}
