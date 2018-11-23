const addIndex = require('../lib/add-index')

module.exports = async function (context, mySbMsg) {
  context.log(`${mySbMsg.id} - start`)
  const result = await addIndex(context, mySbMsg.payload)
  context.log(`${mySbMsg.id} - ${JSON.stringify(result)}`)
  context.log('Finished')
}
