var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//we use this instead of passing it 
//everytime as parameter in every endpoint
app.use(bodyParser.json());

var dummyData = require('./dummyData');
console.log(dummyData);
app.use('/', express.static('build'));

app.get('/tasks', function(request, response){
	response.send(dummyData);
});

app.post('/tasks', function(req, res){
	if(req.body == undefined){
		 return res.sendStatus(405);
	}
	var newItem = dummyData.push(req.body);
	res.status(201).json("it Worked!");
});

app.listen(8080, function () {
  console.log('Listening at 8080!');
});
