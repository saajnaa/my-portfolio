import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SendMail from './services/Nodemailer-Service.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Email Service is running');
});

app.post('/contact', SendMail);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
