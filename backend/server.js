import express from "express"
import products from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 6000;

connectDB();
const app = express()

app.get("/",(req,res) => {
    res.send("API is running on the home route!!")
})

app.get("/api/products",(req,res) => {
    res.json(products)
})

app.get("/api/products/:id",(req,res) => {
    let product = products.find(prod => prod._id === req.params.id)
    res.json(product)
})

app.listen(port, () => {
    console.log(`Server running on port ${process.env.PORT} !`)
})

