var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dummyData = [
	{
	id: 1,
	title: "Task 1"
	},
	{
	id: 2,
	title: "Task 2"
	},
	{
	id: 3,
	title: "Task 3"
	}
];

//we use this instead of passing it 
//everytime as parameter in every endpoint
app.use(bodyParser.json());
var idCounter = dummyData.length;
// var dummyData = require('./dummyData');
console.log(dummyData);
app.use('/', express.static('build'));

app.get('/tasks', function(request, response){
	response.send(dummyData);
});

app.post('/tasks', function(req, res){
	if(req.body == undefined){
		 return res.sendStatus(405);
	}

	idCounter++;
					// since we pass the id here we dont need to pass the id
					// on the body on the action.js
	dummyData.push({id: idCounter, title: req.body.title});
	//updates the Id for the new item
	// idCounter++;
	

	res.status(201).json({});
});

app.put('/tasks/:id', function(request, response){
	//loop in the dummy data 
	if(!request.body.title || !request.params.id){
		return response.sendStatus(404);
	} 
	for(var i = 0; i < dummyData.length; i++){
		if(dummyData[i].id == request.params.id) {
			dummyData[i].title = request.body.title;
		}
	}
	//find the id we are looking for
	//update that id 
	response.json({});
});

app.listen(8080, function () {
  console.log('Listening at 8080!');
});
