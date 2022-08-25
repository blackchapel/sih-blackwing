const {
    productList,
    productById,
    productCreate
} = require('./../services/product.service');

const createProduct = async (req, res) => {
    try {
        let result = await productCreate(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const getProductById = async (req, res) => {
    try {
        let result = await productById(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
}

const getProductList = async (req, res) => {
    try {
        let result = await productList(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

module.exports = {
    createProduct,
    getProductById,
    getProductList
};