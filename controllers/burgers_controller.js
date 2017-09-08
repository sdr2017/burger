var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insert([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

module.exports = router;
