var express = require("express");
var burger = require("../models/burger.js");
var path = require("path");
var router = express.Router();

//FOR DISPLAYING INITIAL UNEATEN BURGERS FROM DB TO HTML
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);//handlebars
	});
});

//FOR ADDING A NEW BURGER TO THE DB FROM HTML
router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	burger.insert(
		[req.body.burger_name], 
		function() {
			res.redirect("/");
  		}
  	);
});

//FOR CHANGING A BURGER FROM "UNEATEN" TO "EATEN" IN THE DB FROM HTML
router.put("/", function(req, res) {
	console.log(req.body.burger);
	var condition = req.body.burger;

	burger.update(condition, function() {
		res.redirect("/");
	});
});

module.exports = router;
