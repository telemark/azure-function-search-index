const axios = require('axios')
const generateToken = require('./generate-token')
const pkg = require('../package.json')

module.exports = async (context, payload) => {
  const url = `${process.env.SEARCH_SERVICE_URL}/indexes/${payload.index}`
  const token = generateToken({ key: process.env.SEARCH_SERVICE_JWT_KEY, payload: { system: pkg.name } })
  axios.defaults.headers.common['Authorization'] = token
  try {
    const { data } = await axios.delete(url)
    context.log(`delete-index - success - ${payload.index}`)
    return data
  } catch (error) {
    context.log.error(`delete-index - ${error}`)
    throw error
  }
}
