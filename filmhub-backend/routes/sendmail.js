// // Installed Modules
// const nodemailer = require("nodemailer");
// const mailGun = require("nodemailer-mailgun-transport");

// const User = require("../mongoose_model/User");

// //configure mailgun
// const auth = {
//      auth: {
//           api_key: "",
//           domain: ""
//      }
// }

// //creating a transport
// const transport = nodemailer.createTransport(mailGun(auth));


// const sendEmail = (subject,text,cb) => {
// const getAllEmails =  User.find({ email }); 
// const mailOptions = {
//     from: "filmhub2020@gmail.com",
//     to: getAllEmails,
//     subject,
//     text
// }

// transport.sendMail(mailOptions, (err,data)=>{
// if (err) {
//      cb(err,null)
// } else {
//      cb(null,"Message sent!!")
// }
// });
// }


// module.exports = sendEmail;
