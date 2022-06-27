const { Router } = require('express');
const { register } = require('../controllers/auth.controller');

const router = Router();

router.post('/api/v1/auth/register', register);

module.exports = router;