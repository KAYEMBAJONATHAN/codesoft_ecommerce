const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRoutes = require('./Components/Routes/productRoutes');
const connectDB = require('./Config/DB');

const app = express();

const PORT = process.env.PORT || 5000;
const api = process.env.API_URL;
connectDB();
require('dotenv').config();

// Use the cors middleware before defining routes
app.use(cors());
app.options('*', cors());

app.use(`${api}/products`, productRoutes);

// Remove this line, it's not needed
// app.use(express.json);

app.use(bodyParser.json());
app.use(morgan('tiny'));

mongoose
  .connect(process.env.MONGOOSE_STRING)
  .then(() => {
    console.log('Mongoose connection is ready');
  })
  .catch((err) => {
    console.log('connection failed', err);
  });

app.listen(5000, () => console.log(`Server running on port ${PORT}`));
