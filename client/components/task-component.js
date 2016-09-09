var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/actions');

var TaskComponent = React.createClass({
	onDelete: function(event){
		event.preventDefault();
		// console.log("delete ");
		// var itemDelete = this.refs
		console.log(this.props.id);
		this.props.dispatch(actions.deleteListItem(this.props.id));
	},
	onUpdateForm: function(event){
        event.preventDefault();
        var item = this.refs.updateInput.value;
        // console.log('updated task!!');
        this.props.dispatch(actions.updateListItem(this.props.id, item));
    },
	render: function(){
	return (
               <div>
                <li ref={this.props.id} key={this.props.id}>{this.props.title}</li>
                <input type="button" onClick={this.onDelete} value="delete"/>
                <form onSubmit={this.onUpdateForm}>
                    <input ref="updateInput"/>
                    <button type='submit'>Submit</button>
                </form>
                </div>
	);
}});
var Container = connect()(TaskComponent);
module.exports = Container;