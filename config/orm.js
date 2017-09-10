// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
	
	//FOR DISPLAYING INITIAL UNEATEN BURGERS FROM DB TO HTML
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";"
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},

	//FOR ADDING A NEW BURGER TO THE DB FROM HTML
	//insert into burgers( id, burger_name, devoured, date_added) VALUES(default,'Baby You Can Chive My Car Burger',default,DEFAULT);
	insertOne: function(table, req, cb){
		var queryString = "INSERT INTO " + table;
		queryString += "(id, burger_name, devoured, date_added";
		queryString += ") ";
		queryString += "VALUES (default, '";
		queryString += req.toString();
		queryString += "', default, default); ";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
      		};
      		cb(result);
      	});
	},

	//FOR CHANGING A BURGER FROM "UNEATEN" TO "EATEN" IN THE DB FROM HTML
	//UPDATE burgers SET devoured=1 WHERE id=3;
	updateOne: function(table, condition, cb) {
		console.log("condition", condition);
    	
    	var queryString = "UPDATE " + table;

	    queryString += " SET devoured=1 ";
	    queryString += " WHERE id=";
	    queryString += condition;
	    queryString += ';'

	    console.log(queryString);

    	connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
      		}
      		cb(result);
    	});
	}
};

module.exports = orm