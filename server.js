const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./routes/products");

app.use(cors());
app.use("/productDetails", productsRouter);

app.listen(3002);