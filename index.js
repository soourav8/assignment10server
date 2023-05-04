const express = require("express");
const app = express()
const cors = require('cors')

const port = 5000

app.use(cors());
const chef = require('./chef.json')


app.get('/', (req, res) => {
  res.send(chef)
  
})

app.get('/:id', (req, res)=>{
  const id = req.params.id;
  
  const selectedChef = chef.find(item => item.id == id);
  console.log(selectedChef)
  res.send(selectedChef);  
})
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})