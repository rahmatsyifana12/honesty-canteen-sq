const jwt = require('jsonwebtoken');
const productService = require("../services/product.service");

async function getAllProducts(req, res) {
    let products;
    try {
        products = await productService.getAll();
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully found all products',
        data: { products }
    });
}

async function addProduct(req, res) {
    const accessToken = req.headers['authorization'].split(' ')[1];
    const studentId = jwt.decode(accessToken).studentId;

    try {
        await productService.add(studentId, req.body);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully added a product'
    });
}

async function buyProduct(req, res) {
    const { productId } = req.params;

    try {
        await productService.buy(productId);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully bought a product'
    });
}

module.exports = {
    getAllProducts,
    addProduct,
    buyProduct
};