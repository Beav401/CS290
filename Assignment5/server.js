/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3004;

var twitData = require('./twitData');


app.engine('handlebars', exphbs({defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next) {
//	console.log(twitData);
	res.status(200).render('mainPage', {
		twits: twitData,
		modal: true,
		oneTwit: false
	});
});

app.get('/index.html', function(req, res, next) {
       
	 res.status(200).render('mainPage', {
                twits: twitData,
                modal: true,
		oneTwit: false
        });
});

app.get('/twit/:n', function(req, res, next) {
	var n = parseInt(req.params.n, 10);
//	console.log("n: ", n);
//	console.log(twitData[n]);
	if( n>=0 && n<=7 ) {	
        res.status(200).render('mainPage', {
                twits: [twitData[n]],
		modal: false,
		oneTwit: true
        });
	}
	else{
		next();
	}
});


app.get('*', function (req, res) {
  res.status(404).render('404page');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
