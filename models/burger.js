// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  
  insertOne: function(table, colName, callback) {
    orm.insertOne("burgers", colName, function(res) {
      callback(res);
    });
  },

  updateOne: function(table, condition, callback) {
    orm.updateOne("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;
