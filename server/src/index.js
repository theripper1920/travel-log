const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
  res.json({
    message: 'HELLO BROTHER!',
  });
});

app.use(middlewares.notFound);

app.use(middlewares.errorhandler);

const port = process.env.PORT || 1920;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
