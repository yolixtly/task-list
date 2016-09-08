var express = require('express');
var app = express();

var dummyData = require('./dummyData');

app.use('/', express.static('build'));



app.get('/api/hello', function(request, response){
	response.send(dummyData);
});

app.listen(8080, function () {
  console.log('Listening at 8080!');
});
