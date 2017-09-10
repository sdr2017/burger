var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(req, cb) {
    orm.insertOne("burgers", req, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
  	console.log("condition", condition);
    orm.updateOne("burgers", condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;