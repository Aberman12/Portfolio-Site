var express = require("express");
var bodyParser = require("body-parser");
var router = require("./router.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api", router);

app.listen(3003, function() {
  console.log("listening on port 3003!");
});
