
//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS 

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    //THIS PAGE DISPLAYS THE INDEX
    res.render('stats/index');
})
router.get('/:cName', (req,res)=>{
    const { cName } = req.params;
    //THIS PAGE DISPLAYS THE STATS REGARDING A PARTICULAR COUNTRY. cName IS COUNTRY-NAME
    res.send(`You're viewing STATS page for ${cName}.`);
})


module.exports = router;