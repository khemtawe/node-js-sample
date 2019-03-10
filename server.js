const express = require('express');
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.post('/', function (req, res) {
  res.render('index');
})

