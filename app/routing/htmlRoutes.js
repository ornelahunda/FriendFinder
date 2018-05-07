// This file should include two routes:

// 1. A GET Route to /survey which should display the survey page.
// 2. A default, catch-all route that leads to home.html which displays the home page.


//Required Dependencies:
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('It worked!!!');

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};