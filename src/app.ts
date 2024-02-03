import express from 'express';
import dotenv from 'dotenv';
import { Routes } from './routes/routes';
const app = express();
dotenv.config({ path: "../dotenv" });
const port = process.env.PORT || 3654;

app.use('/', Routes);

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});