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

module.exports = {
    getAll
};