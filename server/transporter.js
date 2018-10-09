var nodemailer = require("nodemailer");
require("dotenv").config();
const username = process.env.EMAIL;
const password = process.env.PASS;
console.log("made it to router", username, password);
var transport = {
  service: "Gmail",
  //   secure: false,
  //   port: 587,
  auth: {
    user: username,
    pass: password
  }
};

module.exports = transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log("you have an error sir: ", error);
  } else {
    console.log("Server is ready to take messages");
  }
});
