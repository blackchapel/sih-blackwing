const Product = require('./../models/product.schema');

const productList = async (req) => {
    let result, products;
    products = await Product.find({});

    result = {
        message: 'Product List',
        data: {
            products
        }
    };
    return result;
}

const productById = async (req) => {
    let result;

    const product = await Product.findById(req.params.id);

    if (!product) {
        result = {
            message: 'Product not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Product details',
        data: product
    };
    return result;
}

const productCreate = async (req) => {
    let result;
    let newProduct = {
        title: req.body.title,
        description: req.body.description,
        mrp: req.body.mrp,
        offeredprice: req.body.offeredprice,
        availability: req.body.availability,
        hsncode: req.body.hsncode,
        thumbnail: req.file,
        categores: req.body.categories,
        specifications: req.body.specifications
    }

    newProduct = new Product(newProduct);
    await newProduct.save();
    
    result = {
        message: 'Product successfully created',
        data: newProduct
    };
    return result;
}

module.exports = {
    productList,
    productById,
    productCreate
};