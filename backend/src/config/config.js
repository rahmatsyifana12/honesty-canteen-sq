const dotenv = require('dotenv');

dotenv.config();
const { env } = process;

const config = {
    hashRounds: 10,
    port: env.PORT,
    jwt: {
        accessSecret: env.ACCESS_TOKEN_SECRET,
        accessExpire: '1d'
    },
    development: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: 'postgres'
    },
    test: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: 'postgres'
    },
    production: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        dialect: 'postgres'
    }
};

module.exports = config;