import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"; 
import postRoute from './routes/post.route.js';
import userRoute from './routes/auth.route.js';


dotenv.config();

const PORT = process.env.PORT || 8005;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,

}))
app.use(express.json()) // to be able to use json format or send json data
app.use(cookieParser()) // cookie parser middleware to set and read cookies

app.use("/api/posts", postRoute) // common end point
app.use("/api/auth", userRoute)




app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

