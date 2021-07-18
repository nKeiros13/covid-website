//NODE PACKAGES
const express = require('express');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const axios = require('axios');

const stats = require('./routes/stats');
const leads = require('./routes/leads');
const State = require('./models/states');

//-----------------------------------------------------------------------------------------------------------//
//MONGOOSE SETUP AND MONGO DB GOES HERE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/covid-website', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("SUCCESSFULLY CONNECTED TO MONGODB");
});

//-----------------------------------------------------------------------------------------------------------//
//MIDDLEWARE
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));


app.use('/stats', stats);
app.use('/leads', leads);
//----------------------------------------------------------------------------------------------------------//



app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000");
})
