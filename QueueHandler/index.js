const addIndex = require('../lib/add-index')
const deleteIndex = require('../lib/delete-index')

module.exports = async function (context, mySbMsg) {
  const doAction = mySbMsg.action === 'delete' ? deleteIndex : mySbMsg.action === 'add' ? addIndex : false
  if (doAction !== false) {
    const result = doAction(mySbMsg.payload)
    context.log(result)
  } else {
    context.log(`Unknown action - ${mySbMsg.action}`)
  }
}
