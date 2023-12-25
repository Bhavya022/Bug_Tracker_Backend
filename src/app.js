// backend/src/app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const bugRoutes = require('./routes/bugRoutes');
app.use('/api/bugs', bugRoutes);

module.exports = app;
