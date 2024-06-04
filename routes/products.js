const express = require("express");
const router = express.Router();
const { getProdDetails } = require("../controller/productsController");

router.get("/", getProdDetails);

module.exports = router;
