const axios = require('axios')
const generateToken = require('./generate-token')

module.exports = async (context, payload) => {
  const url = `${process.env.SEARCH_SERVICE_URL}/indexes/${payload.index}`
  axios.defaults.headers.common['Authorization'] = generateToken()
  try {
    const { data } = await axios.delete(url)
    context.log(`delete-index - ${payload.index} - success`)
    return data
  } catch (error) {
    context.log.error(`delete-index - ${payload.index} - ${error}`)
    return { success: false }
  }
}
