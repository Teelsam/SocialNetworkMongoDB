const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
//requires packages 


const PORT = process.env.PORT || 3001;//sets PORT options
const app = express(); //runs express as app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//tells app to use specifics 
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
  }); //prints which port is running 
});
