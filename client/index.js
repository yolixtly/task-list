var React = require('react');
var ReactDOM = require('react-dom');
//connect component with store
var Provider = require('react-redux').Provider;

var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions/actions');


var HelloWorld = React.createClass({
	componentWillMount: function(){
		this.props.dispatch(actions.fetchData());
	},
    render: function(){
        return (
        	<div>{this.props.messageFromComponent}</div>
    	);
    }
});

var mapStateToProps = function(state, props) {
		console.log('something happened', props);
    return {
        messageFromComponent: state.message
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
