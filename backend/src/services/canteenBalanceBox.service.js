const { CanteenBalanceBox } = require("../models");

class CanteenBalanceBoxService {

    async add(balance) {
        const canteenBalanceBox = CanteenBalanceBox.findOne({ where: { id: 1 } });
        canteenBalanceBox.balance += balance;

        canteenBalanceBox.save();
    }

}

module.exports = new CanteenBalanceBoxService();