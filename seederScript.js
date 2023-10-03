require('dotenv').config();
const connectDB = require('./Config/DB');
const Product = require('./Components/Models/Products');
const productsData = require('./data/products');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log('Data Import Success');

        process.exit();
    } catch (error) {
        console.error('Error with data import', error);
        process.exit(1);
    }
};

importData();
