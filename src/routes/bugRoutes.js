// backend/src/routes/bugRoutes.js
const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

router.get('/', bugController.getAllBugs);
router.post('/', bugController.createBug);

module.exports = router;
