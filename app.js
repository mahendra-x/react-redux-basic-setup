const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//imports all routes hereby
const products = require("./routes/product");

app.use(bodyParser.urlencoded({ extended: false })); //imp
app.use(bodyParser.json()) //imp

app.use("/api/v1", products);

module.exports = app;
