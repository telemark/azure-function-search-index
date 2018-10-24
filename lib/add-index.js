const axios = require('axios')
const generateToken = require('./generate-token')

module.exports = async (context, payload) => {
  const url = `${process.env.SEARCH_SERVICE_URL}/documents`
  axios.defaults.headers.common['Authorization'] = generateToken()
  try {
    const { data } = await axios.put(url, payload)
    context.log(`add-index - success - ${payload.id}`)
    return data
  } catch (error) {
    context.log.error(`add-index - ${error}`)
    throw error
  }
}
