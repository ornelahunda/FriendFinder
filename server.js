// Requiring dependencies:
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure the Express application
var app = express();

// Sets the port on which server is going to be listening
var PORT = process.env.PORT || 3000;

//// Expose the public directory to access CSS files
// app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start the server to start listening on PORT 
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});