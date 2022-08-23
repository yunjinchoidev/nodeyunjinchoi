const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:1111@yunjinchoi.ltc9y3z.mongodb.net/?retryWrites=true&w=majority',{
    // useNewUrlParser: true, userUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})