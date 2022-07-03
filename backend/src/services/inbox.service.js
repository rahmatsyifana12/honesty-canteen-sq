const { Product, Inbox } = require("../models");
const ResponseError = require("../utils/error");

class InboxService {

    async add(productId) {
        const product = await Product.findOne({ where: { id: productId } });
        const content = `Your product, ${product.name} with a price of ${product.price}
            has been bought. Withdraw your money immediately!`;

        await Inbox.create({ studentId: product.studentId, content });
    }

}

module.exports = new InboxService();