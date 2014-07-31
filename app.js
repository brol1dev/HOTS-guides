var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// Logger
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/hello', function(req, res) {
	res.json({msg: 'hola'});
});

app.listen(3000, function() {
	console.log('Listening on port %d', this.address().port);
});