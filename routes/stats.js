//THIS PAGE IS SOLELY DEDICATED TOWARDS STATS

const express = require("express");
const router = express.Router();
const axios = require("axios");
const State = require("../models/states");
const states = require("../seeds/states");

//ASYNC FUNCTION TO GET STATE NAME BY ABBREVIATION VIA DB
// const getState = async (data) => {
//     let states = [];
//     for (let d of data) {
//         const abv = d.state;
//         states += await State.findOne({ stateCode: abv });
//     }
//     return states;
// }

//ASYNC FUNCTION TO GET DATA FROM COVID.
// const getData = async () => {
// 	const rawInfo = await axios.get(
// 		"https://api.covidtracking.com/v1/states/current.json"
// 	);
// 	const Data = rawInfo.data;
// 	return Data;
// };

// DONOT PREFIX ANY ROUTE WITH STATS. LOOK UP MAIN INDEX.JS

router.get("/", async (req, res) => {
	//THIS PAGE DISPLAYS THE INDEX
	const rawInfo = await axios.get(
		"https://api.covidtracking.com/v1/states/current.json"
	);
	const Data = rawInfo.data;
	res.render("stats/index", { Data, states });
});

router.get("/:sName", async (req, res) => {
	let { sName } = req.params;
	sName = sName.charAt(0).toUpperCase() + sName.slice(1); //Capitalize first letter.
	const rawInfo = await axios.get(
		"https://api.covidtracking.com/v1/states/current.json"
	);
	const Data = rawInfo.data;
	for (let state of states) {
		if (sName === state.name) {
			for (let data of Data) {
				if (state.abbreviation === data.state) {
					res.render("stats/show", { data, state });
				}
			}
			break;
		}
	}
});

module.exports = router;
