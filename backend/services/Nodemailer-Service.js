import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


const SendMail = async (req, res)=>{


  const { name, email, message } = req.body;

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
      text: message,     
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!', infomessage: info.message });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }



}

export default SendMail;