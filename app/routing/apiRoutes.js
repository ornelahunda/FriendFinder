// This file contains two routes:

// 1. A GET route with the url /api/friends. 
//    This will be used to display a JSON of all possible friends.

// 2. A POST routes /api/friends. 
//    This will be used to handle incoming survey results.
//    This route will also be used to handle the compatibility logic.


// Pull in required dependencies
var path = require('path');

// Import the array of friend entries
var friends = require('../data/friends.js');

// Export the API routes
module.exports = function (app) {
	// console.log('api routes worked!!!');

	// All the friend list entered in the array
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	// Method to enter a new friend 
	app.post('/api/friends', function (req, res) {

		// Set the value of the user input object in a variable

		var userInput = req.body;
		// console.log(JSON.stringify(userInput));

		var userScores = userInput.scores;
		// console.log( userScores);

		//Variables to hold best match 
		var matchName = '';
		var matchImage = '';
		
		// Make the initial value of the difference very big for comparison purpose
		var totalDifference = 10000; 


		// Create a loop to compare user with previous Friends in the list
		
		for (var i = 0; i < friends.length; i++) {
			// console.log(JSON.stringify(friends[i]));

			// calculate the difference for each question
			var difference = 0;
			for (var j = 0; j < userScores.length; j++) {
				difference += Math.abs(friends[i].scores[j] - userScores[j]);
			}
			// console.log(difference);

			// If lowest difference, record the friend match
			if (difference < totalDifference) {
				console.log('Closest match found = ' + difference);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);

				totalDifference = difference;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({
			status: 'OK',
			matchName: matchName,
			matchImage: matchImage
		});
	});
};