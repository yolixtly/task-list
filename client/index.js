var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = function() {
    return (
        <div>Hello World!</div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<HelloWorld />, document.getElementById('app'));
});
