// const express = require("express");
// const Product = require("../models/product.js");
import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add a product
router.post("/", async (req, res) => {
  const { company, title, desc, price, offer, images } = req.body;
  const product = new Product({company,title,desc,price,offer,images});
  try {
    const newProduct = await product.save();
    res.status(200).json(newProduct)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
});


// module.exports = router;
export default router