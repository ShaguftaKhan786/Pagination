
import Product from '../model/product.model'
import fs from 'fs'
import mongoose from "mongoose";



export const getProducts = async (req,res) =>{

    let page = Number(req.query.page)
    let limit = Number(req.query.limit)
    try {
        const data = await Product.find().limit(limit * 1).skip((page-1)*limit);
        
        res.status(200).json({
            data:data,
            message:'Successfully fetched!'
        })
    } catch (error) {
         res.status(400).json({
             message:error.message,
         })
    }
 }

 
export const addProduct =(req,res)=>{
    try {
       
            const {name} = req.body; //destructuring

            const prodData = new Product({
                name:name,
                
            }); //creating object
            console.log(prodData)
            const saveData = prodData.save(); //save data in db

            if(prodData){
                res.status(201).json({
                    data:prodData,
                    message:'Successfully data inserted!',
                }) 
            }
       
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}


export const getProduct = async (req,res) =>{
    try {
        const productID = req.params.product_id;
        const data = await Product.findOne({_id:productID}).populate('category');
        if(data){
            res.status(200).json({
                data:data,
                message:'Single Category data!',

            })
        }
   } catch (error) {
        res.status(400).json({
            message:error.message
        })
   }
}

export const deleteProduct = async (req,res) =>{
    try {
        const productID = req.params.product_id;
        const data = await Product.deleteOne({_id:productID})
        if(data.acknowledged){
            fs.unlinkSync('./uploads'+proData.image)
            res.status(200).json({
                message:'Deleted Successfully'
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message:error.message
        })
   }
}

export const updateProduct = async (req,res) =>{

    try {
        const productID = req.params.product_id;
            const {name} = req.body; //destructuring
            const proData = await Product.findOne({_id:productID});
            if(updateProduct.acknowledged){

                res.status(200).json({
                    message:'Update Successfully'
                })
            }
        }
        catch (error) {
            res.status(400).json({
                message:error.message
            })
           
         
    }



  
}
