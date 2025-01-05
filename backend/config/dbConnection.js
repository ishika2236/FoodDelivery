const mongoose  = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/FoodDelivery', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
}   
module.exports = dbConnection;