const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many contact attempts. Please try again later.',
});

router.post('/contact', contactLimiter, submitContact);
router.get('/contacts', getContacts);

module.exports = router;