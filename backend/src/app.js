import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import userRouter from "./routers/user"
import roomRouter from "./routers/room"
import messageRouter from "./routers/message"



const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());

app.use("/api", userRouter)
app.use("/api", roomRouter)
app.use("/api", messageRouter)

// connnect database
mongoose.connect('mongodb://localhost:27017/chat')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})