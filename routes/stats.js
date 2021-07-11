
//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS 

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("You're viewing STATS PAGE!");
})
router.get('/:cName', (req,res)=>{
    const { cName } = req.params;
    res.send(`You're viewing STATS page for ${cName}.`);
})


module.exports = router;