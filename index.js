const express = require('express')
const app = express()
const port = 4949

app.get('/', (req, res) => {
  res.send('You did it shankar')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})