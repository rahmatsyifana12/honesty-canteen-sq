const authService = require("../services/auth.service");

async function register(req, res) {
    const { studentId, password } = req.body;
    try {
        await authService.register(studentId, password);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
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