const Contact = require('../models/Contact');
const { sendContactEmail } = require('../config/emailConfig');

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Save to database
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email notification
    const emailSent = await sendContactEmail({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: emailSent 
        ? 'Message sent successfully!' 
        : 'Message saved but email notification failed',
      data: contact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { submitContact, getContacts };