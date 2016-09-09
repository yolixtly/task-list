var actions = require('../actions/actions');
var update = require('react-addons-update');


// we dont need this anymore when we use thunk 
// because the state will come from the backend
// leave it in case that the backend didnt work or 
// if we would not dispatch the fetch action from the component
// then this will be displayed
//this initial state should match the value that we are returning from the Success action
// {dummyData: []} vs {dummyData: action.data} real answer is:
// We need it because before the async comes back on the first render,
// we are calling map on a property that doesn’t exist, and it chokes.
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
		if(action.type === actions.SAVE_DATA_SUCCESS) {
		// console.log('from reducer', action.data);
		 var newState = update(state, {
		 	dummyData : {$push : action.item}
		 });
			return {

				dummyData: update(
					)
			};
		}
		if(action.type === actions.SAVE_DATA_ERROR) {
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