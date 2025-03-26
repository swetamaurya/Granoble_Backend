const nodemailer = require('nodemailer'); 
const dotenv = require("dotenv")
dotenv.config()


 
const sendEmail = async ({ name, email, mobile, description }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,        
      pass: process.env.SMTP_PASSWORD,    
    },
  });

  const mailOptions = {
    from: `"${name} via Granoble Website" <${process.env.SMTP_EMAIL}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong><br/>${description}</p>
    `,
  };
  

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
