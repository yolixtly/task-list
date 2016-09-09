var React = require('react');

var Form = React.createClass({
	onFormSubmit(event){
		event.preventDefault();
		//Grabs the value from the input on submit
		var newTask = this.refs.theInput.value;
		console.log('NewTask ', newTask);
		this.props.onTodoSubmit(newTask);
		//Clears the value on Submit
		this.refs.theInput.value = '';
	},
	render: function(){
	return (
		<div className="form-wrapper">
		<form onSubmit={this.onFormSubmit} className='input-group'>
			<input placeholder='Enter a new Task' 
			className="form-control" ref="theInput" />
			<span className="input-group-btn">
				<button type='submit' className="btn btn-secondary">Submit</button>
			</span>
			</form>
		</div>
	);
}});

module.exports = Form;