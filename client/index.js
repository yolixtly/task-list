var React = require('react');
var ReactDOM = require('react-dom');
//connect component with store
var Provider = require('react-redux').Provider;

var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions/actions');
var Form = require('./components/form-component');

var HelloWorld = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.fetchData());
	},
    submitForm: function(item){
        this.props.dispatch(actions.saveListItem(item));
        this.props.dispatch(actions.fetchData());
    },
    render: function(){
    	console.log("the array : ", this.props.tasks);
    	var todos = this.props.tasks.map(function(value){
    	 	return <li key={value.id}>{value.title}</li>
    	 });
        return (
        	<div>
        	<Form onTodoSubmit={this.submitForm} />
        	{todos}
        	</div>
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
