
//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS 

const express = require('express');
const router = express.Router();
const axios = require('axios');
const State = require('../models/states');
const states = require('../seeds/states');



//ASYNC FUNCTION TO GET STATE NAME BY ABBREVIATION VIA DB
// const getState = async (data) => {
//     let states = [];
//     for (let d of data) {
//         const abv = d.state;
//         states += await State.findOne({ stateCode: abv });
//     }
//     return states;
// }



// DONOT PREFIX ANY ROUTE WITH STATS. LOOK UP MAIN INDEX.JS 

router.get('/', async (req,res)=>{
    //THIS PAGE DISPLAYS THE INDEX
    const rawInfo = await axios.get('https://api.covidtracking.com/v1/states/current.json');
    const Data = rawInfo.data;
    res.render('stats/index', { Data, states });
})




router.get('/:cName', (req,res)=>{
    const { cName } = req.params;
    //THIS PAGE DISPLAYS THE STATS REGARDING A PARTICULAR COUNTRY. cName IS COUNTRY-NAME
    res.send(`You're viewing STATS page for ${cName}.`);
})


module.exports = router;