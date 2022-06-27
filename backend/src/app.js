const express = require('express');
const { sequelize } = require('./models');
const app = express();

const port = 5000;
app.use(express.json());

app.listen(port, async () => {
    await sequelize.authenticate();
    console.log('Server is running at http://localhost:' + port);
});