const express = require('express');
const app = express()

// set app configuration variables
app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded())
app.set('view engine', 'ejs')

// get route for index
app.get('/', function (req, res) {
  res.render('index')
})

// run app
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

// post route for index
app.post('/', function (req, res) {
  res.render('index')
})

// behavior for forms on index.ejs
app.post('/bid1', function(req, res){
   console.log(req.body);
   res.send("received your request!");
});
