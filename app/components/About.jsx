var React = require('react');

// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Components</h3>
// 		)
// 	}
// });

var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>Thanks for checking out the about page</p>
		</div>
	)
};

module.exports = About;