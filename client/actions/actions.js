require('isomorphic-fetch');

var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
var SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS';
var SAVE_DATA_ERROR = 'SAVE_DATA_ERROR';
var UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
var UPDATE_DATA_ERROR = 'UPDATE_DATA_ERROR';

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
//SAVING THE DATA ACTIONS: 
//this is a Sync Success function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var saveDataSuccess = function(item){
  return {
    type: SAVE_DATA_SUCCESS,
    item: item
  };
};
//this is a Sync Error function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var saveDataError = function(error){
  return {
    type: SAVE_DATA_ERROR,
    error: error
  };
};
//UPDATE THE DATA ACTIONS: 
//this is a Sync Success function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var updateDataSuccess = function(item){
  return {
    type: UPDATE_DATA_SUCCESS,
    item: item
  };
};
//this is a Sync Error function dispatched from the Fetch Async which handles the Thunk asyn request to the backend 
var updateDataError = function(error){
  return {
    type: UPDATE_DATA_ERROR,
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

var saveListItem = function(item) {
  return function(dispatch) {
    var url = 'http://localhost:8080/tasks';
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({title: item})
    }).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response.json();
    })
    .then(function(data) {
     console.log("POST DATA: ", data);
     return dispatch(
      // we are not going to sending back from the server side ?
      saveDataSuccess()
      );
   })
    .catch(function(error) {
      return dispatch(
        saveDataError(error)
        );
    });
  };
};

var updateListItem = function(id, item) {
  return function(dispatch) {
    var url = 'http://localhost:8080/tasks/' + id;
    return fetch(url, {
      method: 'put',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({title: item})
    }).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response.json();
    })
    .then(function(data) {
     console.log("POST DATA: ", data);
     return dispatch(
      // we are not going to sending back from the server side ?
      //saveDataSuccess()
        fetchData() // refactor this later
        // call a new action to update the store with the new todo
      );
   })
    .catch(function(error) {
      return dispatch(
        saveDataError(error)
        );
    });
  };
};

exports.fetchData = fetchData;
exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;

exports.UPDATE_DATA_SUCCESS = UPDATE_DATA_SUCCESS;
exports.updateDataSuccess = updateDataSuccess;
exports.UPDATE_DATA_ERROR = UPDATE_DATA_ERROR;
exports.updateDataError = updateDataError;
exports.updateListItem = updateListItem;

exports.SAVE_DATA_SUCCESS = SAVE_DATA_SUCCESS;
exports.saveDataSuccess = saveDataSuccess;
exports.SAVE_DATA_ERROR = SAVE_DATA_ERROR;
exports.saveDataError = saveDataError;
exports.saveListItem = saveListItem;
