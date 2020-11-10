const express = require('express');
const { TeamMember } = require('./model');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/team', async (req, res, next) => {
  console.log(req.body);
  res.send('ok');
})

module.exports = app;
