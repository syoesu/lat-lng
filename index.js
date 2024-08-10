const express = require('express');
const app = express();
const path = require('node:path');

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));

const logMiddleware = (req, res, next) => {
  console.log(req.method, req.path);
  next();
}

app.get('/', logMiddleware, (req, res) => {
  res.render(path.resolve(__dirname, 'views/index.ejs'));
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('start listening');
});