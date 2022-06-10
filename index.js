const express = require('express');
const database = require('./database');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/authRoutes');

const app = express();

const start = async () => {
  await database.connect();
  app.use(cors());
  app.use(express.json());
  app.use('/', authRouter);
   app.get('/', (req, res) => {
     res.send('Hello World');
   });
  app.listen(5000,() => {
    console.log('app is running on port 5000');
  });
}

start();
