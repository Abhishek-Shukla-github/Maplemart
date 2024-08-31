import asyncHandler from '../middleware/asyncHandler.js';
import Product from "../models/productModel.js"

const getProducts = asyncHandler (async(req,res) => {
    const products = await Product.find({})
    return res.json(products)
})

const getProductById = asyncHandler (async(req,res) => {
    let product = await Product.findById(req.params.id)
    if (product) {
        return res.json(product);
      } else {
        res.status(404);
        throw new Error('Product not found');
      }
})

export {getProducts, getProductById}