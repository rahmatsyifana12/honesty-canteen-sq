const { Router } = require('express');
const { register } = require('../controllers/auth.controller');
const { validate } = require('../middlewares/validate.middleware');
const { newUserSchema } = require('../validations/auth.validate');

const router = Router();

router.post('/api/v1/auth/register', validate(newUserSchema), register);

module.exports = router;