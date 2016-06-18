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
			<h1 className="text-center page-title">About</h1>
			<p>This small web app was built on React. I have built this with help from an instructor for the purpose of learning react.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">React</a> - This was the JS framework used.
				</li>
				<li> 
					<a href="http://openweathermap.org/">Open Weather Map</a> - I used the open weather map API to search for weather data by city. 
				</li>
				<li> 
					<a href="https://heroku.com/">Heroku</a> - The platform used to launch the app. 
				</li>
			</ul>
		</div>
	)
};

module.exports = About;