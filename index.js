const express = require('express')
const app = express()
const port = 5000

const mongoose1 = require('mongoose')
mongoose1.connect('mongodb+srv://kjh0102:abcd1234@cluster0.lwpef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {    
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요~~똥인데요~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})