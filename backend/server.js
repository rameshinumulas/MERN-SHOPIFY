const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
app.use('/api', routes);

// MONGODB_CONNECTION
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
