const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code',
  params: {phoneNumber: '<REQUIRED>', verifyCode: '<REQUIRED>'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});