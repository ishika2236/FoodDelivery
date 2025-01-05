const express = require('express');
const dbConnection = require('./config/dbConnection');

const app = express();







app.listen(5000, () => {
    dbConnection();
    console.log('Server is running on port 3000');
});