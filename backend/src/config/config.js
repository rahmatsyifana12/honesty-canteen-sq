const dotenv = require('dotenv');

dotenv.config();
const { env } = process;

const config = {
    hashRounds: 10,
    port: env.PORT,
    jwt: {
        accessSecret: env.ACCESS_TOKEN_SECRET,
        accessExpire: '1d'
    }
};

module.exports = config;