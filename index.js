// modified from Getting Started on Heroku with Node.js web page 

const express = require('express');
const app = express()

// set up app
app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// get index.ejs page from server, rendering index
app.get('/', function (req, res) {
  res.render('index')
})

// run app
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

// render index.ejs on post request
app.post('/', function (req, res) {
  res.render('index')
})

// modified from Scaling an Express.js Application with Memcache on Heroku
app.post('/bid1', function(req, res){
   console.log(req.body);
   res.send("received your request!");
});
