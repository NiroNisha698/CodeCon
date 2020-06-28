const router = require('express').Router();
const path = require('path');
let Contact = require('../models/Contact');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const message = req.body.message;
   

    const newContact = new Contact({
        fullName,
        email,
        message,
    });

    newContact.save()
        .then(() => res.json('Message added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
