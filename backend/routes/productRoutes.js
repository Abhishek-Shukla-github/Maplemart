import express from 'express'
import { Router } from 'express'
import { getProductById, getProducts } from '../controller/productController.js';


const router = Router();

router.route("/").get(getProducts)
router.route("/:id").get(getProductById)

export default router

