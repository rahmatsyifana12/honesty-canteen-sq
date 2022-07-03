const { CanteenBalanceBox } = require("../models");

class CanteenBalanceBoxService {

    async add(balance) {
        try {
            const canteenBalanceBox = CanteenBalanceBox.findOne({ where: { id: 1 } });
            canteenBalanceBox.balance += balance;

            canteenBalanceBox.save();
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

    async withdraw(balance) {
        try {
            const canteenBalanceBox = CanteenBalanceBox.findOne({ where: { id: 1 } });
            if (balance > canteenBalanceBox.balance) {
                throw new ResponseError('Canteen balance box is not enough');
            }

            canteenBalanceBox.balance -= balance;

            canteenBalanceBox.save();
        } catch (error) {
            if (!error.statusCode) {
                throw new ResponseError('Internal server error', 500);
            }
            throw error;
        }
    }

}

module.exports = new CanteenBalanceBoxService();