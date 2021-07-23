//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS

const express = require("express");
const router = express.Router();
const axios = require("axios");
const states = require("../seeds/states");

//ASYNC FUNCTION TO GET DATA FROM COVID.
const getData = async () => {
	try {
		let rawInfo = await axios.get(
			"https://api.covidtracking.com/v1/states/current.json"
		);
		// console.log(rawInfo);
		console.log("Successfully got data!");
		rawInfo = rawInfo.data;
		return rawInfo;
	} catch (e) {
		console.log("Errors--");
		console.log(e);
	}
};

const findStateByName = (sName, Data) => {
	for (let state of states) {
		if (sName === state.name) {
			for (let data of Data) {
				if (state.abbreviation === data.state) {
					return { data, state };
				}
			}
		}
	}
};

// DONOT PREFIX ANY ROUTE WITH STATS. LOOK UP MAIN INDEX.JS

router.get("/", async (req, res) => {
	//THIS PAGE DISPLAYS THE INDEX
	const Data = await getData();
	res.render("stats/index", { Data, states });
});

router.get("/:sName", async (req, res) => {
	let { sName } = req.params;
	sName = sName.charAt(0).toUpperCase() + sName.slice(1); //Capitalize first letter.
	const Data = await getData();
	const { data, state } = findStateByName(sName, Data);
	res.render("stats/show", { data, state });
});

module.exports = router;
