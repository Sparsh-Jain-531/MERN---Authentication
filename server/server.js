import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import morgan from "morgan";

const app = express();
const port=process.env.PORT || 4000;
connectDB()

const allowOrigins = ["http://localhost:5173"]

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:allowOrigins, credentials:true}));


app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);

//API Endpoints
app.get('/',(req, res) => {
    res.send('API working!')
})

app.listen(port,()=>console.log(`Server started on port: ${port}`))