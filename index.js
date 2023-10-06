const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// main routes
app.use('/api/allDrugs', require('./routes/allDrugsRoutes'));
app.use('/api/indications', require('./routes/indicationRoutes'));

//test route
app.get('/', (req, res) => {
  res.send('<h1>Hello World! . that is backend of fulltask</h1>');
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(port, (err) => {
      if (err) throw err;
      console.log('Server listening on port'.red, port.yellow);
    });      
})