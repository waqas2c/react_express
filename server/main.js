var express = require('express')
var app = new express()
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('../app/index.ejs', {})
})
app.listen(3000, function () {
  console.log('server running on port 3000')
})
