var router = require("express").Router();
var transporter = require("./transporter.js");

module.exports = {
  post: router.post("/send", (req, res, next) => {
    console.log(req.body, "from inside post");
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
      from: name,
      to: "aberman12@yahoo.com", //Change to email address that you want to receive messages on
      subject: message,
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: "fail"
        });
      } else {
        res.json({
          msg: "success"
        });
      }
    });
  })
};
