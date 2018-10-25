const axios = require('axios')
const generateToken = require('./generate-token')

module.exports = async (context, payload) => {
  const url = `${process.env.SEARCH_SERVICE_URL}/documents`
  axios.defaults.headers.common['Authorization'] = generateToken()
  try {
    const { data } = await axios.put(url, payload)
    context.log(`add-index - ${payload.id} - success`)
    return data
  } catch (error) {
    context.log.error(`add-index - ${payload.id} - ${error}`)
    return { success: false }
  }
}
