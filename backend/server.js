const app = require('./app')

// APP RUNNING
const PORT = 3000
app.listen(PORT, (err) => {
  if (err) {
    console.log("App failed to run: ", err)
    return
  }
  console.log(`App running on PORT: ${PORT}`)
})