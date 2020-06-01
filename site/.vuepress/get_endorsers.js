var request = require("request");
require('dotenv').config()

var options = {
  method: 'GET',
  url: 'https://api.sendinblue.com/v3/contacts/lists/7/contacts',
  qs: {limit: '50', offset: '0'},
  headers: {
    accept: 'application/json',
    'api-key': process.env.API_KEY
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  saveToJson(body);
 
})

function saveToJson(body) {
	var fs = require('fs');

	const locationString = body;
	const locationObject = JSON.parse(locationString);

	fs.writeFile('contacts.json', JSON.stringify(locationObject), (err) => {
	  if (err) throw err
	  console.log('The file has been saved!')
	})
}