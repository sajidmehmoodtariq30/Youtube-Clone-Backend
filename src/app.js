import cookieParser from "cookie-parser";
import cors from "cors";
import express, { urlencoded } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/",(req,res)=>{
  res.send("Api is running");
})

// routes
import userRouter from './routes/userRoutes.js';

app.use("/api/v1/users", userRouter)

export default app;

// app.use is used for middlewares and configurations
// cors (cross origin resource sharing) is used to enable other urls to send and receive data.
// express.json enables us to recieve json data while also sets a limit.
// express.urlencoded enables server to read data from url while encoding it too.
// express.static is used to store temporary static files that will be transferred to our database or other server
// cookie parser is used to get data and to send from cookies and using cookies securely
