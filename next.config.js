// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/friends-of-victoria-park.github.io/' : ''
}