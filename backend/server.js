import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SendMail from './services/Nodemailer-Service.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.post('/', SendMail);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
