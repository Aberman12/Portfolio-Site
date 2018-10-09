var nodemailer = require("nodemailer");
const creds = require("../email.config");
console.log("made it to router");
var transport = {
  service: "Gmail",
  //   secure: false,
  //   port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

module.exports = transporter = nodemailer.createTransport(transport);
console.log("transporter inside transpoerter!!!!!!!!!", transporter);

transporter.verify((error, success) => {
  if (error) {
    console.log("you have an error sir: ", error);
  } else {
    console.log("Server is ready to take messages");
  }
});
