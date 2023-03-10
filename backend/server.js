const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes/routes');
const path = require('path');


const API_PORT = 5001;
const app = express();
//new 
app.use(express.json());



app.use(cors());


// // this is our MongoDB database
// const dbRoute =
//   'mongodb://<your-db-username-here>:<your-db-password-here>@ds249583.mlab.com:49583/fullstack_app';

// // connects our back end code with the database
// mongoose.connect(dbRoute, { useNewUrlParser: true });

// let db = mongoose.connection;

// db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format



// Commented out
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(logger('dev'));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend', 'build')));
app.get('/*', (req, res) => {
    console.log('in here')
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  })

// append /api for our http requests
app.use('/api', routes);



// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));