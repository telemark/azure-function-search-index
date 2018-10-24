const axios = require('axios')
const generateToken = require('./generate-token')
const pkg = require('../package.json')

module.exports = async (context, payload) => {
  const url = `${process.env.SEARCH_SERVICE_URL}/documents`
  const token = generateToken({ key: process.env.SEARCH_SERVICE_JWT_KEY, payload: { system: pkg.name } })
  axios.defaults.headers.common['Authorization'] = token
  if (!payload) {
    throw new Error('Missing required input: payload')
  }
  try {
    const { data } = await axios.put(url, payload)
    context.log(`add-index - success - ${payload.id}`)
    return data
  } catch (error) {
    context.log.error(`add-index - ${error}`)
    throw error
  }
}
