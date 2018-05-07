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
module.exports = function(app) {
	// console.log('api routes worked!!!');

	// All the friend list entered in the array
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Method to enter a new friend 
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};