const { Product } = require("../models");
const ResponseError = require("../utils/error");

class ProductService {

    async getAll() {
        try {
            const products = Product.findAll();

            return products;
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async add(studentId, reqBody) {
        try {
            await Product.create({ studentId, ...reqBody });
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async buy(productId) {
        try {
            const count = await Product.destroy({ where: { id: productId } });
            // console.log(count);
            if (count === 0) {
                throw new ResponseError('Product not found', 404);
            }
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

}

module.exports = new ProductService();