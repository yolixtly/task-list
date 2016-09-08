var actions = require('../actions/actions');


// we dont need this anymore when we use thunk 
// because the state will come from the backend
// leave it in case that the backend didnt work or 
// if we would not dispatch the fetch action from the component
// then this will be displayed
//this initial state should match the value that we are returning from the Success action
// {dummyData: []} vs {dummyData: action.data}
var initialState = {dummyData: []};

var reducerCreator = function(state, action){
	state = state || initialState;
	if(action.type === actions.FETCH_DATA_SUCCESS) {
		// console.log('from reducer', action.data);
			return {
				dummyData: action.data
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