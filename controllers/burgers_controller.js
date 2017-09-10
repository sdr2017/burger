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
	var newBurger = req.body.newBurger;
	console.log(newBurger);
  burger.insert([
    newBurger
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  buerger.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
