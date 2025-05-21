const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Contact form submission route
router.post('/submit', contactController.sendContactEmail);

module.exports = router; 