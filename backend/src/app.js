const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();
const port = 5000;

app.use(express.json());
app.use(routes);

app.listen(port, async () => {
    await sequelize.authenticate();
    console.log('Server is running at http://localhost:' + port);
});