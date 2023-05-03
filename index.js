const express = require("express");
const app = express()

const port = 5000

const chef = require('./chef.json')


app.get('/', (req, res) => {
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})