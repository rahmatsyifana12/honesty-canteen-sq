const canteenBalanceBoxService = require('../services/canteenBalanceBox.service');

async function addBalance(req, res) {
    const { balance } = req.body;
    try {
        canteenBalanceBoxService.add(balance);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully add balance'
    });
}

module.exports = { addBalance };