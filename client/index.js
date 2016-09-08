var React = require('react');
var ReactDOM = require('react-dom');
//connect component with store
var Provider = require('react-redux').Provider;

var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions/actions');


var HelloWorld = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.fetchData());
	},
    render: function(){
    	console.log("the array : ", this.props.tasks);
    	 var arrayData = this.props.tasks;
    	 console.log("the arrayData : ", arrayData);
    	 // var task = arrayData.map(function(value){
    	 // 	return <div>value.id</div>
    	 // });
        return (
        	<div>{this.props.tasks[0].title}</div>
    	);
    }
});

var mapStateToProps = function(state, props) {
    return {
        tasks: state.dummyData
    };
};

var Container = connect(mapStateToProps)(HelloWorld);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    		<Container />
    	</Provider>,
    	 document.getElementById('app'));
});
