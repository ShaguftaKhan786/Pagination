import express from 'express'

import { getProducts, addProduct,getProduct,deleteProduct,updateProduct } from "../controller/product.controller";

const router = express.Router();

router.get('/get-products',getProducts)
router.get('/get-products/:product_id',getProduct)
router.post('/add-product',addProduct)
router.delete('/delete-product/:product_id',deleteProduct)
router.patch('/update-product/:product_id',updateProduct)

export default router;

