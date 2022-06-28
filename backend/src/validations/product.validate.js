const joi = require('joi');

const newProductSchema = joi.object({
    name: joi.string()
        .min(3)
        .max(64)
        .required(),

    image: joi.string()
        .required(),

    description: joi.string()
        .min(3)
        .max(255)
        .required(),

    price: joi.number()
        .required()
});

module.exports = { newProductSchema };