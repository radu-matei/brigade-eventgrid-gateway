const { events } = require('brigadier')

events.on("Microsoft.Storage.BlobDeleted", (e, p) => {
  console.log(e)
})

events.on("Microsoft.Storage.BlobCreated", (e, p) => {
  console.log(e)
})

events.on("exec", (e, p) => {
  console.log(e);
})