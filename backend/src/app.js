const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
const PORT = 5000 || config.port;

app.use(express.json());
app.use(routes);

app.listen(PORT, async () => {
    await sequelize.authenticate();
    console.log('Server is running at http://localhost:' + PORT);
});