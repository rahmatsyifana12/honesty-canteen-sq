const authService = require("../services/auth.service");

function register(req, res) {
    const { studentId, password } = req.body;

    const isRegistered = authService.register(studentId, password);
    if (!isRegistered) {
        return res.status(400).json({
            status: 'fail',
            message: 'Fail to register'
        });
    }

    return res.status(201).json({
        status: 'success',
        message: 'Successfully registered an account'
    });
}

module.exports = {
    register
};