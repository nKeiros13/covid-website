//THIS PAGE IS SOLELY DEDICATED TOWARDS WORLD STATS AND COUNTRIES

const express = require("express");
const router = express.Router();
const axios = require("axios");
const countries = require("../node_modules/country-json/src/country-by-abbreviation.json");

let options = {
	method: "GET",
	url: "https://covid-19-data.p.rapidapi.com/totals",
	params: { format: "json" },
	headers: {
		"x-rapidapi-key": "7031c91018msh98fbccce7eac202p1cda26jsn5823e0a1f254",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	},
};

const getData = async () => {
	try {
		let rawInfo = await axios.request(options);
		// console.log(rawInfo);
		console.log(countries);
		return rawInfo.data;
	} catch (error) {
		console.log(error);
	}
};

// DONOT PREFIX ANY ROUTE WITH WORLD. LOOK UP MAIN INDEX.JS
router.get("/", async (req, res) => {
	const Data = await getData();
	console.log(Data);
	res.render("world/index", { Data });
});

router.get("/:cName", async (req, res) => {
	let { cName } = req.params;
	cName = cName.charAt(0).toUpperCase() + cName.slice(1); //Capitalize first letter.
	
});

module.exports = router;
