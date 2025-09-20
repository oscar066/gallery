const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// =================================================
//            DATABASE CONNECTION
// =================================================
// This section is what we are updating.

// 1. Get the config file
const config = require('./_config');

// 2. Get the current environment
// If NODE_ENV is not set, we'll default to 'development'
const node_env = process.env.NODE_ENV || 'development';

// 3. Get the correct database URI from the config file
const db_url = config.mongoURI[node_env];

// 4. Connect to the database
mongoose.connect(db_url,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err);
});


// Test if the database has connected successfully
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected successfully');
});

// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());


app.use('/', index);
app.use('/image', image);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});