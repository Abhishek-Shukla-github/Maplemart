import express from 'express'
import { Router } from 'express'
import asyncHandler from '../middleware/asyncHandler.js';
import Product from "../models/productModel.js"

const router = Router();

router.get("/", asyncHandler (async(req,res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get("/:id",asyncHandler (async(req,res) => {
    let product = await Product.findById(req.params.id)
    res.json(product)
}))

export default router

