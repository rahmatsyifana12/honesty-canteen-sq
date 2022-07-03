const inboxService = require("../services/inbox.service");

async function addInbox(req, res) {
    const { productId } = req.params;

    try {
        await inboxService.add(productId);
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

async function getAllInboxes(req, res) {
    const accessToken = req.headers['authorization'].split(' ')[1];
    const studentId = jwt.decode(accessToken).studentId;
    let inboxes;

    try {
        inboxes = await inboxService.getAll(studentId);
    } catch (error) {
        return res.status(error.statusCode).json({
            status: 'fail',
            message: error.message
        });
    }
}

module.exports = { addInbox, getAllInboxes };