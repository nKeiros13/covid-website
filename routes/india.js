//THIS PAGE IS SOLELY DEDICATED TOWARDS DATA FROM INDIA//
const express = require("express");
const router = express.Router();
const axios = require("axios");

let APIdata = async () => {
	let countryOptions = {
		method: "GET",
		url: "https://data.covid19india.org/v4/min/data.min.json",
	};
	try {
		let rawInfo = await axios.request(countryOptions);
		return rawInfo.data;
	} catch (e) {
		console.log("Errors -- " + e);
	}
};

router.get("/", async (req, res) => {
	let Data = await APIdata();
	//console.log(typeof Data);
	// for (let items in Data) {

	// 	// console.log(Data[items].total.confirmed);
	// 	console.log(Data[items].total);
	// }

	res.render("india/index", { Data });
});

router.get("/:sAbbr", async (req, res) => {
	let Data = await APIdata();
	let { sAbbr } = req.params;
	console.log(sAbbr);

	res.render("india/states", { Data, sAbbr });
});

module.exports = router;
