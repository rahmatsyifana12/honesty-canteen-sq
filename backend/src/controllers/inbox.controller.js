async function addInbox(req, res) {
    const { productId } = req.params;

    try {
        
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Successfully added an inbox'
    });
}

module.exports = { addInbox };