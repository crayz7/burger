var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.render("index", hbsObject);
  });
});

// Adding a burger route
router.post("/create", function(req, res) {
  burger.insertOne([
    "burger_name",
  ], [
    req.body.burger_name
  ], function(data) {
    // Update the page
    res.redirect('/');
  });
});

// Update the selected burger
router.put("/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
