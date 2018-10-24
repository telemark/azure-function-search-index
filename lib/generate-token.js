const jwt = require('jsonwebtoken')
const pkg = require('../package.json')

module.exports = () => {
  const key = process.env.SEARCH_SERVICE_JWT_KEY
  const payload = {
    system: pkg.name
  }
  return `Bearer ${jwt.sign(payload, key)}`
}
