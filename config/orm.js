// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";"
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},

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

	updateOne: function(table, objColVals, condition, cb) {
    	var queryString = "UPDATE " + table;

	    queryString += " SET ";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE ";
	    queryString += condition;

    	connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
      		}
      		cb(result);
    	});
	}
};

module.exports = orm