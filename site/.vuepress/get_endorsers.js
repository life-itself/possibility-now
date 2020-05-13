var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.sendinblue.com/v3/contacts/lists/7/contacts',
  qs: {limit: '50', offset: '0'},
  headers: {
    accept: 'application/json',
    'api-key': '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'
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