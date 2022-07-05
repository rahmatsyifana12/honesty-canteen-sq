const { Product, Inbox } = require("../models");
const ResponseError = require("../utils/error");

class InboxService {

    async add(productId) {
        try {
            const product = await Product.findOne({ where: { id: productId } });
            const content = `Your product, ${product.name} with a price of ${product.price}
                has been bought. Withdraw your money immediately!`;

            await Inbox.create({ studentId: product.studentId, content });
        } catch (error) {
            if (!error.statusCode) {
                console.log(error.message);
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async getAll(studentId) {
        try {
            const inboxes = await Inbox.findAll({ where: { studentId } });

            return inboxes;
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async delete(inboxId, studentId) {
        try {
            const inbox = await Inbox.findOne({ where: { id: inboxId } });
            if (inbox.studentId !== studentId) {
                throw new ResponseError('Unauthorized error', 401);
            }

            const count = await Inbox.destroy({ where: { id: inboxId } });
            if (count === 0) {
                throw new ResponseError('Inbox not found', 404);
            }
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

}

module.exports = new InboxService();