const express = require('express');
const { TeamMember } = require('./model');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', (req, res, next) => {
  TeamMember
      .create(req.body)
      .then((success) => res.status(201).send('Successful post!'))
      .catch((err) => res.status(301).send('Server error occurred'));
})

module.exports = app;
