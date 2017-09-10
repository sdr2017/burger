var express = require("express");
var burger = require("../models/burger.js");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);//handlebars
  });
  //res.sendFile(path.join(__dirname, "..","views", "index.html"));
});

router.post("/", function(req, res) {
	var newBurger = req.body.burger_name;
	console.log(req.body.burger_name);
  burger.insert([
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
	console.log(req.params)
  var condition = "id = " + req.params;

  console.log("condition", condition);

  burger.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
