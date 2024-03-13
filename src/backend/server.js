import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const productRouter = require("./routes/productRoute.js")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productRouter);
app.use("/users", userRouter);

mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 3100;

app.listen(PORT, () =>
  console.log(`server is running: http://localhost:${PORT}/`)
);
