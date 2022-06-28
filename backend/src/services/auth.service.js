const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { User } = require("../models");
const ResponseError = require("../utils/error");

class AuthService {

    async register(studentId, password) {
        const user = await User.findOne({ where: { studentId } });
        if (user) {
            throw new ResponseError('User already exists', 400);
        }

        if (studentId.length !== 5) {
            throw new ResponseError('Student ID is invalid', 400);
        }

        const strNum1 = studentId.substring(0, 3);
        const strnum2 = studentId.substring(3, 5);

        let sum = 0;
        for (let i=0; i<strNum1.length; i++) {
            sum += parseInt(strNum1[i]);
        }

        if (sum != parseInt(strnum2)) {
            throw new ResponseError('Student ID is invalid', 400);
        }

        const hashedPassword = bcrypt.hashSync(
            password,
            config.hashRounds
        );

        await User.create({ studentId, password: hashedPassword });
    }

    async login(studentId, password) {
        const user = await User.findOne({ where: { studentId } });
        if (!user) {
            throw new ResponseError('Student ID is incorrect', 400);
        }

        if (!bcrypt.compareSync(password, user.password)) {
            throw new ResponseError('Password is incorrect', 400);
        }

        const accessToken = jwt.sign(
            { studentId },
            config.jwt.accessSecret,
            { expiresIn: config.jwt.accessExpire }
        );

        user.accessToken = accessToken;
        await user.save();

        return accessToken;
    }

    async logout(studentId) {
        const user = await User.findOne({ where: { studentId } });
        if (!user) {
            throw new ResponseError('User not found', 404);
        }

        user.accessToken = null;

        await user.save();
    }

}

module.exports = new AuthService();