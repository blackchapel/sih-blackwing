const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createProduct,
    getProductById,
    getProductList
} = require('./../controllers/product.controller');

const router = new express.Router();

router.get('/', getProductList);

router.get('/:id', getProductById);

router.post('/', [auth.verifyJwtToken, auth.userTypeBidder], createProduct);

module.exports = router;