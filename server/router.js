var router = require("express").Router();
var post = require("./post.js");

router.route("/send").post(post.post);

module.exports = router;
