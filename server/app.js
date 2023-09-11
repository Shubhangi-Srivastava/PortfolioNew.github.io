const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;

function sendEmail() {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myemail,
        pass: mypassword,
      },
    });

    const mail_configs = {
      from: myemail,
      to: "shubgre@gmail.com",
      subject: "Testing Koding 101 Email",
      text: "Just checking if this email will be sent",
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: `Email sent sucessfully` });
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

// var email = "shubgre@gmail.com";
var myemail = "shubhangishrivastavahb13@gmail.com";
var mypassword = "xqds tqfe gtzx uldh";
