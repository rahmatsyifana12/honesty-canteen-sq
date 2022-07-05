const { Product, Inbox, User } = require("../models");
const ResponseError = require("../utils/error");

class InboxService {

    async addSeller(productId) {
        try {
            const product = await Product.findOne({ where: { id: productId } });
            const content = `Your product, ${product.name} with a price of ${product.price}
                has been purchased. Withdraw your money from the balance box immediately!`;

            await Inbox.create({ studentId: product.studentId, content });
        } catch (error) {
            if (!error.statusCode) {
                console.log('error at add seller', error.message);
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async addBuyer(studentId, productId) {
        try {
            const product = await Product.findOne({ where: { id: productId } });
            console.log(product);
            const content = `You have purchased a product, ${product.name} with a price of ${product.price}. Add your money into the 
                balance box immediately!`;

            await Inbox.create({ studentId, content });
        } catch (error) {
            console.log('error at add buyer', error.message);
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