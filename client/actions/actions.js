require('isomorphic-fetch');

var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

//this is a Sync Success function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var fetchDataSuccess = function(data){
	return {
		type: FETCH_DATA_SUCCESS,
		data: data
	};
};
//this is a Sync Error function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var fetchDataError = function(error){
  return {
    type: FETCH_DATA_ERROR,
    error: error
  };
};
//Fetch async calls
var fetchData = function(){
	return function(dispatch){
	//match it to the server.js
	var url = 'http://localhost:8080/tasks';
	//this fetch is available thanks to Thunk middleware which will be handled by the reducers once
	//the action is dispatch to the reducer and then in the store
	return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })
 
       .then(function(data) {
          // console.log("fetchDATA resolved promise in Actions: ", data);
           return dispatch(
           	//this will pass the entire object comming from the backend
           	//better to leave it like this and point to the speficic data in reducers 
               fetchDataSuccess(data)
           );
       })
       .catch(function(error) {
           return dispatch(
               fetchDataError(error)
           );
       });
   }
};

exports.fetchData = fetchData;
exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;
