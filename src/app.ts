import {Application, Request, Response} from 'express';
import express = require('express');

const app: Application = express();

const port = 3000;

app.get('/toto', (req: Request, res: Response) => {
  res.send('Hello toto');
});

app.listen(port, () => {
  console.log(`Server started on port:${port} !`);
});
