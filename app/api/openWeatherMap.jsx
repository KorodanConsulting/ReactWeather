var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=aac59931c0697f278389239af1289b73&units=imperial';

// API key: aac59931c0697f278389239af1289b73
// API url: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=aac59931c0697f278389239af1289b73

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			debugger;
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}