const jwt = require('jsonwebtoken');
const productService = require("../services/product.service");

async function getAll(req, res) {
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

async function add(req, res) {
    const { name, description, image, price } = req.body;
    const accessToken = req.headers['authorization'].split(' ')[1];
    const studentId = jwt.decode(accessToken).studentId;

    try {
        
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

module.exports = {
    getAll
};