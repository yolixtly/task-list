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

var generateNewId = function(req){
	var newId;
	var idArray = [];
	dummyData.forEach(function(value){
		console.log('value', value.id);
		// why this is not working ?
			return idArray.push(value.id);
	});
	// console.log(idArray, 'idArray');
	//if req.body.id === undefined then
	if(req.body.id === undefined){
		newId = 1;
	} else {
		dummyData.forEach(function(value){
			return idArray.push(value.id);
		});
	}
	//create a newId for the new element with value 1 
	// else find the maximum request ID
	// and add 1 to it so it is serialized for every new item.
								//this is an array of Ids
	console.log(Math.max(idArray), 'max id');
	console.log(dummyData, 'dummyData');
	console.log(idArray, 'idArray');

};


app.post('/tasks', function(req, res){
	if(req.body == undefined){
		 return res.sendStatus(405);
	}
	console.log(' generateNewId :', generateNewId(req));

	var newItem = dummyData.push(req.body);
	res.status(201).json("it Worked!");
});

app.listen(8080, function () {
  console.log('Listening at 8080!');
});
