const express = require('express')
const index = require('./routes/index')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('./public'))
app.use('/', index)


app.listen(5000, () => {console.log('listening on port 5000')})