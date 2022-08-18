// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/Friends-of-Victoria-Park.github.io/' : ''
}