const express = require('express');
const dbConnection = require('./config/dbConnection');
require('dotenv').config(); 
const authRoutes = require('./routes/authentication');
const menuRoutes = require('./routes/menuManagement');
const orderRoutes = require('./routes/orderManagement');

const app = express();
const PORT = process.env.PORT || 5000;  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoutes);
app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);
app.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT} `);
});