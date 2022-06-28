const { Product } = require("../models");
const ResponseError = require("../utils/error");

class ProductService {

    async getAll() {
        const products = Product.findAll();

        return products;
    }

    async add(studentId, reqBody) {
        await Product.create({ studentId, reqBody });
    }

}

module.exports = new ProductService();