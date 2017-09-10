//CONNECT TO ORM IN CONFIG FOLDER
var orm = require('../config/orm.js');

var burger = {
	
	//FOR DISPLAYING INITIAL UNEATEN BURGERS FROM DB TO HTML
	all: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
  
  	//FOR ADDING A NEW BURGER TO THE DB FROM HTML
	insert: function(req, cb) {
		orm.insertOne("burgers", req, function(res) {
			cb(res);
		});
	},

	//FOR CHANGING A BURGER FROM "UNEATEN" TO "EATEN" IN THE DB FROM HTML
	update: function(condition, cb) {
		orm.updateOne("burgers", condition, function(res) {
			cb(res);
		});
	},
};

module.exports = burger;