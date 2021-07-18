
//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS 

const express = require('express');
const router = express.Router();
const axios = require('axios');


// DONOT PREFIX ANY ROUTE WITH STATS. LOOK UP MAIN INDEX.JS 

router.get('/', async (req,res)=>{
    //THIS PAGE DISPLAYS THE INDEX
    const rawInfo = await axios.get('https://api.covidtracking.com/v1/states/current.json');
    console.log(rawInfo);
    const Data = rawInfo.data;
    res.render('stats/index', {Data});
    
})
router.get('/:cName', (req,res)=>{
    const { cName } = req.params;
    //THIS PAGE DISPLAYS THE STATS REGARDING A PARTICULAR COUNTRY. cName IS COUNTRY-NAME
    res.send(`You're viewing STATS page for ${cName}.`);
})


module.exports = router;