// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const app = express();
// // const port = 5000;
// // allows information to be sent from frontend to the backend : cors
// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// function sendEmail({ recipient_email, subject, message }) {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: myemail,
//         pass: mypassword,
//       },
//     });

//     const mail_configs = {
//       from: myemail,

//       to: recipient_email,
//       subject: subject,
//       text: message,
//     };
//     transporter.sendMail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: `An error has occured` });
//       }
//       return resolve({ message: `Email sent sucessfully` });
//     });
//   });
// }

// app.get("/", async (req, res) => {
//   sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// //nam

// app.get("/abc", async (req, res) => {
//   console.log("Server is working properly (v1)");

//   res.status(200).send();
// });

// app.post("/send", async (req, res) => {
//   sendEmail(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`);
// });
// -------------------------------------------------------------------------new code
// var myemail = "shubhangishrivastavahb13@gmail.com";
// var mypassword = "xqds tqfe gtzx uldh";
// app.post("/send", (req, res) => {
//   const { recipient_email, subject, message } = req.body;

//   // Send the email
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: myemail,
//       pass: mypassword,
//     },
//   });

//   transporter.sendMail({
//     from: myemail,
//     to: recipient_email,
//     subject: subject,
//     text: message,
//   });
//   res.status(200).send("Email sent!");
//   //   res.status(200).json({ success: true });
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000.");
// });
