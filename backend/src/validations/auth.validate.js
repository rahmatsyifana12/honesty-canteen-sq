const joi = require('joi');

const passwordSchema = joi.string()
    .min(6)
    .max(32)

    .regex(/[0-9]/)
    .rule({ message: '{#label} requires at least a number' })

    .regex(/[a-z]/)
    .rule({ message: '{#label} requires at least a lowercase character' })

const newUserSchema = joi.object({
    studentId: joi.string()
        .min(5)
        .max(5)

        .regex(/^\d+$/)
        .rule({ message: '{#label} can only be numeric' })

        .required(),

    password: passwordSchema.required()
});

module.exports = { newUserSchema };