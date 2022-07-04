const canteenBalanceBoxService = require('../services/canteenBalanceBox.service');

async function addBalance(req, res) {
    const { balance } = req.body;

    try {
        await canteenBalanceBoxService.add(balance);
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

async function withdraw(req, res) {
    const { balance } = req.body;

    try {
        await canteenBalanceBoxService.withdraw(balance);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully withdraw balance'
    });
}

async function getBalance(req, res) {
    let balance;

    try {
        balance = await canteenBalanceBoxService.get();
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully get balance',
        data: { balance }
    });
}

module.exports = { addBalance, withdraw, getBalance };