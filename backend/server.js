import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 6000;

connectDB();
const app = express()

//Body Parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res) => {
    res.send("API is running on the home route!!")
})

app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${process.env.PORT} !`)
})

