import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRoutes from './routes/user.routes.js'
import chatRoutes from './routes/chat.routes.js'

const app = express();

connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/chat', chatRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on Port ${PORT}`
  )
);
