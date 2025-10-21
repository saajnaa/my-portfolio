import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());


const SendMail = async (req, res)=>{


const {name , email , message} = req.body
  //============================ node mailer =============================================
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'saajnaa.123@gmail.com', // Replace with your Gmail address
        pass: process.env.pass,   // Replace with your App Password


      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender address
      to: 'saajnaa.123@gmail.com',
      subject: name,
        html: `
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', infomessage: info });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }



}

export default SendMail;