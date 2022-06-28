const { Product } = require("../models");

class ProductService {

    async getAll() {
        const products = Product.findAll();

        return products;
    }

}

module.exports = new ProductService();