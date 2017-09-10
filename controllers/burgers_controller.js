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
	console.log(req.body.burger_name);
  burger.insert([
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
	console.log(req.body.burger);
  var condition = req.body.burger;

  burger.update(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
