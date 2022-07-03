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

async function withDraw(req, res) {
    const { balance } = req.body;
    try {
        canteenBalanceBoxService.withdraw(balance);
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
    const accessToken = req.headers['authorization'].split(' ')[1];
    const studentId = jwt.decode(accessToken).studentId;
    let balance;
    try {
        balance = canteenBalanceBoxService.get();
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

module.exports = { addBalance, withDraw };