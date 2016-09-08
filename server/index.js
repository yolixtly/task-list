var express = require('express');
var app = express();

app.use('/', express.static('build'));

app.get('/api/hello', function(request, response){
	response.json({message: 'Hello From express!!'});
});

app.listen(8080, function () {
  console.log('Listening at 8080!');
});
