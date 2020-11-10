# JSP Take-Home Coding Challenge #2: Roster

Welcome to the Roster! This full-stack application keeps track of all the members of your team: it is built with React, Node.js/Express.js and SQLite3/Sequelize.

## Getting Set Up

❗️ This application requires [Node.js](https://nodejs.org/en/) to be installed. However, not all project dependencies are not compatible with the most recent versions of Node. Please ensure you are working with Node.js v12.x!

From the root directory, run:

```sh
npm install
```

Next, `npm run seed` will seed the local SQLite database, which lives in a local file, `database.sqlite3`. **Warning: This will drop the database if it already exists!**

Finally, run `npm start`, which will start both the server and the React build process.

## Major Project Dependencies

React
 - v16.8.6
Node.js
 - v12.x
Express.js
 - v4.17.1
SQLite3
 - v4.2.0
Sequelize
 - v5.8.8

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client is [axios](https://github.com/axios/axios).
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. I can click a button inside the empty "NEW TEAMMATE" card at the bottom that says 'Join the team!'.

2. Clicking the 'Join the team!' button displays a form allowing me to fill out all of my team member information as per the data model (see `backend/model.js`).

3. Filling out the form will create a new team member in the database that persists on reload.

4. I can see team member cards for all of the new team members I have created.

## Going Above and Beyond the Requirements

Given the time expectations of this exercise, we don't expect anyone to submit anything super fancy, but if you find yourself with extra time, feel free to add items to showcase your unique strengths.

## Submitting the Assignment

### Option 1 (Preferred)

Upload your repo (with README, including instructions on how to run your app) to your GitHub. Either make it public or share to the HRJSP1 team. Then use [this form](https://forms.gle/LQYm3ohiYc9Gtf7AA) to submit your repo.

### Option 2

Create a bundle of your work by running `npm run bundle` in the repo root.

This generates a bundle file called `take-home-exercise` based on your local master branch. Upload this file to your Google Drive using the same account that you use for JSP. Then, use [this form](https://forms.gle/LQYm3ohiYc9Gtf7AA) to submit the file.

Good luck!
