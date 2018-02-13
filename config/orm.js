var connection = require("./connection.js");

var orm = {
  // ORM is creating a simple method for performing a query of the entire table.
  // Use callback to ensure that data is returned only once the query is done.
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // Adding a burger to the database
  insertOne: function(table, colName, callback) {
    var queryString = "INSERT INTO " + table +  " (burger_name) VALUES (?)";

    connection.query(queryString, [colName], function(err, result) {
      if (err) throw err;
      callback(result);
      
    });
  },

  // Updating burger to devoured
  updateOne: function(table, condition, callback) {
    var queryString = "UPDATE " + table +  " SET devoured = 1 WHERE " + condition;

    connection.query(queryString, [condition], function(err, result) {
      if (err) throw err;
      callback(result);
       
    });
  }
};

module.exports = orm;
