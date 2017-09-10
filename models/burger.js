var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
  
	insert: function(req, cb) {
		orm.insertOne("burgers", req, function(res) {
			cb(res);
		});
	},

	update: function(condition, cb) {
		orm.updateOne("burgers", condition, function(res) {
			cb(res);
		});
	},
};

module.exports = burger;