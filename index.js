const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World Anh Minh')
})

app.listen(3000)