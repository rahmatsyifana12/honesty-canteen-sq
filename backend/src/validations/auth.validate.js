const joi = require('joi');

const newUserSchema = joi.object({
    studentId: joi.string()
        .min(5)
        .max(5)

        .regex(/^\d+$/)
        .rule({ message: '{#label} can only be numeric' })

        .required(),

    password: joi.string()
        .min(2)
        .max(32)
        .required()
});

module.exports = { newUserSchema };