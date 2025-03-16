const express = require('express');
const app = express();
const port = 4000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/about', (req, res) => {
  res.render('about'); 
});

app.get('/contact', (req, res) => {
  res.render('contact'); 
});

app.get('/submitted', (req, res) => {
  res.render('submitted'); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
