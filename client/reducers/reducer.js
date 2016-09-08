// var actions = require('../actions/actions');

var initialState = {
	message: "Hello From Redux initial state from Reducers.js"
}

var  reducerCreator = function(state, action){
	// state = state || initialState;
	return {message : 'Hello from Reducer'};
};
// if you have many different function then use this : 
// exports.reducerCreator = reducerCreator; 
//if you only have one object then use this because it will 
// export the only object 
module.exports = reducerCreator;