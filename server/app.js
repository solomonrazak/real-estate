import express from 'express';
import dotenv from 'dotenv';
import postRoute from './routes/post.route.js';
import userRoute from './routes/auth.route.js';


dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json()) // to be able to use json format or send json data
app.use("/api/posts", postRoute) // common end point
app.use("/api/auth", userRoute)



app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

