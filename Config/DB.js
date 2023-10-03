require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongoose connection success');
  } catch (err) {
    console.error('Mongoose connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
