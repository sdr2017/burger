// Import MySQL connection.
var connection = require("connection.js");

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

	insertOne: function(table, cols, insertObject, cb){
		var queryString += "INSERT INTO " + table;
		queryString += "(";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES ";
		queryString += insertObject;
		queryString += ") ";

		connection.query(queryString, vals, function(err, result) {
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