const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const { connectDB } = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors()); // this thing is special

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/manufacturers', require('./routes/manufacturersRoutes'));

// app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
