const State = require('../models/states');
const stateSeeds = require('./states');

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

const seedDB = async () => {
    await State.deleteMany({});
    for (let state of stateSeeds) {
        await new State({
            stateName: state.name,
            stateCode: state.abbreviation
        }).save();
    }
}

seedDB()
    .then(() => {
        console.log("Operation completed!");
        mongoose.connection.close();
    })
    .catch(e => {
        console.log('Error!');
        console.log(e);
    })
