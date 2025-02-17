// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();
// const userRoutes = require('./routes/userRoutes')

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_URL)
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log("MongoDB Connection Error",err));

// app.use('/api/',userRoutes)

// app.get("/", (req, res) => {
//     res.send("Hello From the Server");
// })

// app.listen(process.env.PORT || 9000, () => {
//     console.log(`Server is running ${process.env.PORT}`);
// })


const app = require('./app');
// const port = process.env.PORT || 3000;

app.listen(9090, () => {
    console.log('Server is running on port');
});