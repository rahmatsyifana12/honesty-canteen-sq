const { Product } = require("../models");
const ResponseError = require("../utils/error");

class ProductService {

    async getAll() {
        const products = Product.findAll();

        return products;
    }

    async add(studentId, reqBody) {
        try {
            await Product.create({ studentId, ...reqBody });
        } catch (error) {
            throw new ResponseError('Internal server error', 500);
        }
    }

}

module.exports = new ProductService();