//NODE PACKAGES
const express = require("express");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");

const statRoutes = require("./routes/stats");
const leadRoutes = require("./routes/leads");
const worldRoutes = require("./routes/world");
const indiaRoutes = require("./routes/india");

//-----------------------------------------------------------------------------------------------------------//
//MONGOOSE SETUP AND MONGO DB GOES HERE
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/covid-website", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
// 	console.log("SUCCESSFULLY CONNECTED TO MONGODB");
// });

//-----------------------------------------------------------------------------------------------------------//
//MIDDLEWARE
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.use("/stats", statRoutes);
app.use("/leads", leadRoutes);
app.use("/world", worldRoutes);
app.use("/india", indiaRoutes);
//----------------------------------------------------------------------------------------------------------//

app.get("/", (req, res) => {
	res.redirect("/world");
});

app.listen(3000, () => {
	console.log("LISTENING ON PORT 3000");
});
