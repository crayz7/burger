// Dependencies
var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");

var app = express();
var port = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require routes
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port", port);
});