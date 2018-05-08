# Friend Finder

Friend Finder app (essentially a dating app in progress), was built using Node and Express servers. 
First user is sent to the home page and that page leads to a survey. 
When the user submits the survey, it will sent a result back which is going to be the their match.

# DEMO 
This app is deployed to Heroku, here it is the link:

https://rocky-woodland-65018.herokuapp.com/

# Technologies used and implementation details

* Node.js
* This app uses Express to handle routing
* The server.js file uses the npm packages: express, body-parser, path.

body-parser NPM Package - https://www.npmjs.com/package/inquirer

express NPM Package - https://www.npmjs.com/package/express

path NPM Package - https://www.npmjs.com/package/path

* It includes two js files that handle the routing:

1. The html-routes.js file includes two routes:

    + A GET Route to /survey which should display the survey page.
    + A default, catch-all route that leads to home.html which displays the home page.

2. The api-routes.js file includes two routes:
     + A GET route with the url /api/friends.This will be used to display a JSON of all possible friends.

     + A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


* Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

* Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

* The person with the closest match will be the one with the "least" amount of difference.

* Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.

* The result will display both the name and picture of the closest match.

# Built With

Visual Studio - Text Editor

Bootstrap - Wireframe

# Authors
Ornela Hunda