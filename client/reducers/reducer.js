var actions = require('../actions/actions');

// we dont need this anymore when we use thunk 
// because the initialState will come from the backend
// just in case leave it
var initialState = {
	message: "Hello From Redux initial state from Reducers.js"
}

var  reducerCreator = function(state, action){
	state = state || initialState;
	if(action.type === actions.FETCH_DATA_SUCCESS) {
			return {
				message: action.data.message
			};
		}
		if(action.type === actions.FETCH_DATA_ERROR) {
			return {
				error : action.error
			};
		}
	return state;
};
// if you have many different function then use this : 
// exports.reducerCreator = reducerCreator; 
//if you only have one object then use this because it will 
// export the only object 
module.exports = reducerCreator;