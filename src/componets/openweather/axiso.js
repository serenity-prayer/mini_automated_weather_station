import axios from "axios";

const datat = [];

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/onecall/timemachine',
  params: {lat: '37.774929', lon: '-122.419418', dt: '1590094153 '},
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': `${process.env.REACT_APP_API_URL}`
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    datat = response;
}).catch(function (error) {
});

export default datat;