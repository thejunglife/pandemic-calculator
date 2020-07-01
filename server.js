require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()


app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

require('mongoose').connect(process.env.NODE_ENV === 'production' ? production.env.MONGODB_URI : 'mongodb://localhost/bootcamp', {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))
