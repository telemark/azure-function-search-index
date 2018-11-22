const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
  host: process.env.ELASTIC_HOST,
  log: 'error'
})

module.exports = async (context, document) => {
  try {
    const data = await client.create(document)
    return data
  } catch (error) {
    context.log.error(`add-index - ${document.id} - ${error}`)
    return { success: false }
  }
}
