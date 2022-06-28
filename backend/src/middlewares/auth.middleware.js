const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { User } = require('../models');

async function authenticate(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const accessToken = authHeader.split(' ')[1];

        jwt.verify(accessToken, config.jwt.accessSecret);

        const studentId = jwt.decode(accessToken).studentId;
        const user = await User.findOne({ where: { studentId } });

        if (!user.accessToken) {
            return res.status(401).json({
                status: 'fail',
                message: 'Unauthorized error'
            });
        }

        return next();
    } catch (error) {
        return res.status(401).json({
            status: 'fail',
            message: 'Unauthorized error'
        });
    }
}

module.exports = { authenticate };