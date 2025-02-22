const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.listen(9001, () => {
    console.log('Server is running on port');
});

module.exports = app;
