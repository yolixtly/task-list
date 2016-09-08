var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/reducer');
//because we are using module.exports inside of the reducer.js
//we can simply pass reducers but if we have many functions
//then pass reducers.TheObject you are interested 
var store = createStore(reducers, applyMiddleware(thunk));
module.exports  = store;