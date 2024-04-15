import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
dotenv.config();



mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.log("couldnt connect")
  console.log(err);
});[]


const app = express();

app.use(cors());

// Use import.meta.url to get the current file path
const __filename = new URL(import.meta.url).pathname;
// Use path.dirname to get the directory name
const __dirname = path.dirname(__filename);

// Serve static files from the 'images' directory
app.use('/api/images', express.static(path.join(__dirname, 'images')));


app.get("/", (req, res)=>{
  res.json("hello");
})

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
