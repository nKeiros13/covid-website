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

let countryOptions = {
	method: "GET",
	url: "https://covid-19-data.p.rapidapi.com/country",
	params: { name: "italy" },
	headers: {
		"x-rapidapi-key": "7031c91018msh98fbccce7eac202p1cda26jsn5823e0a1f254",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});

const getCountryDataByName = async () => {
	try {
		let rawInfo = await axios.request(countryOptions);
		console.log(rawInfo);
		return rawInfo.data;
	} catch (e) {
		console.log("Error--");
		console.log(e);
	}
};

const getData = async () => {
	try {
		let rawInfo = await axios.request(options);
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
	console.log(cName);
	let Data = await getCountryDataByName();
	res.render("world/show", { Data });
});

module.exports = router;
