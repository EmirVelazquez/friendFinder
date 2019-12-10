# Friend Finder 

This full-stack site takes in results from the users' survey, then compares theirs answers with those from other users in the api json database. The app then displays the name and picture of the user with the best overall match. It utilizes Express to handle routing.

## Technologies Used
- JavaScript
- Node.js
- NPM's
- Express 
- Git 
- Heroku

## Detail of Friend Finder
* User gets the home page path, then can hit the start survey button.
* User gets sent to the survey path and the client displays the survey.
* User fills out form in its entirety before hitting submit.
* User will then get the result for the best match according to their results compared with everyone in the api database.

### Organization in App
1. Server.js file to create connection with Express server.
2. App directory that holds three subdirectories; data, public, & routing.
3. Data directory holds the js file with the data array of users.
4. Public directory holds the css, and html paths.
5. Routing directory handles the js files for the path handling as well as the logic for posting new data and getting results.

### Links to Github repo and Heroku Live Site
- GitHub Repo
https://github.com/EmirVelazquez/friendFinder
- Heroku Deployed
https://damp-woodland-23972.herokuapp.com/