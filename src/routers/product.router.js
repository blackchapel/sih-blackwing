const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createProduct,
    getProductById,
    getProductList
} = require('./../controllers/product.controller');
const upload = require('./../utilities/multer');

const router = new express.Router();

router.get('/', getProductList);

router.get('/:id', getProductById);

router.post('/', [auth.verifyJwtToken, auth.userTypeBidder], upload.single('file'),createProduct);

module.exports = router;