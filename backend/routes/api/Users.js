const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require('../../models/User');
/**
 * @route   POST api/users
 * @desc    Get all users
 * @access  Private
 */

router.post('/', (req, res) => {
    const {first_name6, last_name6, email6, password6 } = req.body;

    //simple validation
    if(!first_name6 || !last_name6 || !email6 || !password6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    User.findOne({ email6})
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists' });

            const newUser = new User({
                first_name6,
                last_name6,
                email6,
                password6
            });

            //Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password6, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password6 = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                        config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            first_name6: user.first_name6,
                                            last_name6: user.last_name6,
                                            email6:user.email6
                                        }
                                    });
                                }
                            )
                        });
                });
            })
        })
        

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'projectforsliit@gmail.com', // generated ethereal user
            pass: '01012018@sliit' // generated ethereal password
        }
    });

    // send mail with defined transport object
    const mailOptions = {
        from: 'projectforsliit@gmail.com', // sender address
        to: email6, // list of receivers
        subject: 'Login Credentials', // Subject line
        html: 'Username: '+ email6 + 'Password: '+ password6// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
});




module.exports = router;