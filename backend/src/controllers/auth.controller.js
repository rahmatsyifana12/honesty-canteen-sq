function register(req, res) {
    const { studentId, password } = req.body;

    return res.status(201).json({
        status: 'success',
        message: 'Successfully registered an account'
    });
}

module.exports = {
    register
};