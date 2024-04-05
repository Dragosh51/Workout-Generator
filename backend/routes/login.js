const express = require('express');
const router = express.Router()
const passport = require('passport');

// Login Endpoint (POST)
// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/api/users/success', // Redirect on successful login
//     failureRedirect: '/api/users/failure', // Redirect on failed login
//     failureFlash: true,
// }));

// Endpoint for handling login requests
router.post('/login', (req, res, next) => {
    // Use the local strategy for authentication
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        // If authentication fails, respond accordingly
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        // If authentication is successful, log in the user
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }

            // Respond with a success message and the user object
            return res.status(200).json({ success: true, user });
        });
    })(req, res, next);
});

// Example success and failure routes
router.get('/api/users/success', (req, res) => {
    res.json({ success: true, user: req.user });
});

router.get('/api/users/failure', (req, res) => {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
});

module.exports = router;