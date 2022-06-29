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

}

module.exports = new ProductService();