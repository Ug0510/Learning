// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema called 'contactSchema'
const contactSchema = new mongoose.Schema({
    // 'name' field represents the name of the contact
    name: {
        type: String,       // Data type: String
        required: true      // Field is required
    },
    // 'number' field represents the contact number
    number: {
        type: Number,       // Data type: String
        required: true      // Field is required
    }
});

// Create a Mongoose model named 'Contact' based on the 'contactSchema'
const Contact = mongoose.model('Contact', contactSchema);

//exporting module to use it outside
module.exports = Contact;