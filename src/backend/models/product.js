// const mongoose = require("mongoose")
import mongoose from 'mongoose';


const imageSchema = new mongoose.Schema({
        id: {type: mongoose.Types.ObjectId,required: true},
        src: {type: String},
        thumbnail: {type: String},
        alternate: {type: String},
        active: {type: Boolean},
})
const productsSchema = new mongoose.Schema({
    company: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type:String, required: true},
    price: {type: Number, required: true},
    offer: {type: Number, required: true},
    images: [imageSchema],
})

export default mongoose.model("Product", productsSchema)