const express = require('express');
const reqFilter = require('./middileware');
const app = express();

const route = express.Router();

route.use(reqFilter);


app.get('/', (req, res) => {
  res.send('Hello this is Home page');
});
route.get('/about', (req, res) => {
  res.send('Hello this is About page');
});
route.get('/contact', (req, res) => {
  res.send('Hello this is Contact page');
});

app.use('/', route);
app.listen(5000);

