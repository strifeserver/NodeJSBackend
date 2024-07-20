const express = require('express');
const cors = require('cors'); // Import the cors package
const { connect } = require('./db');
const routes = require('./app/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors()); // This will allow requests from any origin

app.use(express.json());
app.use('/api', routes);

connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });

module.exports = app;
