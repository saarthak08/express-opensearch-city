import express = require('express');
import errorHandler from './utils/error-handling';
const asyncify = require('express-asyncify');

const app = asyncify(express());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 3000;

app.use('/api/v1', require('./routes'));

app.listen(port, () => {
  console.log(`Server started on port:${port}!`);
});

errorHandler(app);
