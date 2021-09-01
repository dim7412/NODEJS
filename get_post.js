
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/form', function(req, res){
  res.render('form');
});
@@ -12,6 +14,11 @@ app.get('/form_receiver', function(req, res){
  var description = req.query.description;
  res.send(title+','+description);
});
app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
});
app.get('/topic/:id', function(req, res){
  var topics = [
    'Javascript is....',