import {Application, Request, Response} from 'express';
import express = require('express');

const app: Application = express();

const port = process.env.PORT || 3000;

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello! Server is up and running');
});

app.listen(port, () => {
  console.log(`Server started on port:${port} !`);
});
