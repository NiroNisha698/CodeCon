const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
