import mongoose from "mongoose";
import Category from './../model/category.model'
const Schema = mongoose.Schema;
const Product = new mongoose.Schema({
    name: { 
        type: String,
        require:true
    },
    
   
  });

export default mongoose.model('Product',Product)
