var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var router = require("./router.js");

var app = express();
app.use(cors());
app.set("port", process.env.PORT || 3003);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api", router);

app.listen(app.get("port"), function() {
  console.log("successfully connected on port: ", 3003);
});
