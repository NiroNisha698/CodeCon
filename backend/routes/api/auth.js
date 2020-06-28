const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

const User = require('../../models/User');
/**
 * @route   POST api/auth
 * @desc    Auth user
 * @access  Public
 */

router.post('/', (req, res) => {
    const { email6, password6 } = req.body;

    //simple validation
    if(!email6 || !password6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    User.findOne({ email6 })
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User Does not exists' });

            //Validate password
            bcrypt.compare(password6, user.password6)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { email6: user.email6 },
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
                })
        })
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 * */

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password6')
        .then(user => res.json(user));

});


module.exports = router;