const { Product } = require("../models");
const ResponseError = require("../utils/error");

class ProductService {

    async getAll() {
        const products = Product.findAll();

        return products;
    }

}

module.exports = new ProductService();