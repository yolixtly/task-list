var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');

var TaskComponent = React.createClass({
	onUpdateForm: function(event){
        event.preventDefault();
        var item = this.refs.updateInput.value;
        console.log('updatef form fired');
        this.props.dispatch(actions.updateListItem(this.props.id, item));
    },
	render: function(){
	return (
               <div>
                <li key={this.props.id}>{this.props.title}</li>
                <form onSubmit={this.onUpdateForm}>
                    <input ref="updateInput"/>
                    <button type='submit'>Submit</button>
                </form>
                </div>
	);
}});
var Container = connect()(TaskComponent);
module.exports = Container;