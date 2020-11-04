"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail( subject,text,cb) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
 
  const getAllEmails =  User.find({ email });  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'mail@filmhub.me', // sender address
    to: getAllEmails, // list of receivers
    subject, // Subject line
    text, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendEmail().catch(console.error);


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


module.exports = sendEmail;
