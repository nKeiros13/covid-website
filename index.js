//NODE PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');

const stats = require('./routes/stats');
const leads = require('./routes/leads');

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
