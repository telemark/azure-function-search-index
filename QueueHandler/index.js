const addIndex = require('../lib/add-index')
const deleteIndex = require('../lib/delete-index')

module.exports = function (context, mySbMsg) {
  const doAction = mySbMsg.action === 'delete' ? deleteIndex : mySbMsg.action === 'add' ? addIndex : false
  if (doAction !== false) {
    context.log(`${mySbMsg.id} - ${mySbMsg.action}`)
    doAction(context, mySbMsg.payload)
      .then(result => {
        context.log(result)
        context.log('Finished')
        context.done()
      })
  } else {
    context.log(`Unknown action - ${mySbMsg.action}`)
    context.log('Finished')
    context.done()
  }
}
