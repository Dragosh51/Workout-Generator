const express = require('express');
const router = express.Router()
const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const db = require('../models')
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: __dirname + '/../.env' });
const auth = require('../middleware/verifyToken');

const createPK = (str) => {
    const today = new Date();
    const dd = today.getDate();
    const mm = parseInt(String(today.getMonth() + 1)); //January is 0!
    const yyyy = parseInt(today.getFullYear());
    let pk = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            pk = pk + str[i];
        } else {
            pk = str;
        }
    }
    pk = pk + dd + mm + yyyy;
    console.log(pk);
    return pk;
}

// Retrieve All Users (GET)
router.post('/authFacebook', async (req, res) => {
    try {
        console.log('AUTH FACEBOOK GET ROUTE')
        // Query the database to get all users
        // const { rows } = await pool.query('SELECT user_id, username, email FROM "User"');

        // Send the response
        // res.json(rows);
    } catch (error) {
        console.error('Error retrieving all users', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/user", auth, (req, res) => {
    console.log("CALLING FETCH USER ROUTE ", "\n", Date());
    console.log("FETCH USER ", req.user.id);
    db.user
        .findOne({
            where: {
                userID: req.user.id,
            },
        })
        .then((user) => {
            let newUser = {
                name: user.name,
                email: user.email,
            };
            console.log("NEW USER", newUser);
            res.status(200).json(newUser);
        })
        .catch((err) => res.status(401).json(err));
});

router.post('/login', async (req, res) => {
    try {
        console.log('AUTH LOGIN', req.body.email);

        const { email, psw } = req.body;
        if (!email) {
            return res.status(400).json({ msg: 'Enter email!' });
        }
        if (!psw) {
            return res.status(400).json({ msg: 'Enter password!' });
        }

        const user = await db.user.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ msg: 'Wrong email!' });
        }

        console.log('USER_FOUND', user);

        const isValidPassword = await bcrypt.compare(psw, user.password);

        if (!isValidPassword) {
            return res.status(400).json({ msg: 'Wrong password!' });
        }

        console.log('SECRET_TOKEN:', process.env.SECRET_TOKEN);

        const token = jwt.sign(
            { id: user.ID },
            process.env.SECRET_TOKEN,
            { expiresIn: 43200 }
        );

        const newUser = {
            ID: user.ID,
            name: user.name,
            email: user.email,
        };

        res.status(200).json({
            user: newUser,
            token: token,
        });
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// router.post('/login', async (req, res) => {
//     try {
//         console.log('AUTH LOGIN', req.body.email);

//         const { email, psw } = req.body;
//         if (!email) {
//             return res.status(400).json({ msg: "Enter email!" });
//         }
//         if (!psw) {
//             return res.status(400).json({ msg: "Enter password!" });
//         }

//         db.user
//             .findOne({ where: { email } })
//             .then((user) => {
//                 if (!user)
//                     return res.status(400).json({ msg: "Wrong email!" });
//                 console.log('USER_FOUND', user);
//                 console.log(psw, user.password)
//                 bcrypt

//                     .compare(psw, user.password)
//                     .then((isValid) => {
//                         console.log(psw, user.password)
//                         if (!isValid)
//                             return res
//                                 .status(400)
//                                 .json({ msg: "Wrong password!" });

//                         jwt.sign(
//                             {
//                                 id: user.ID,
//                             },
//                             process.env.SECRET_TOKEN,
//                             { expiresIn: 43200 },
//                             (err, token) => {
//                                 if (err) throw err;

//                                 let newUser = {
//                                     ID: user.ID,
//                                     name: user.name,
//                                     email: user.email,
//                                 };

//                                 res.status(200).json({
//                                     user: newUser,
//                                     token: token,
//                                 });
//                             }
//                         );
//                     })
//                     .catch((err) => console.log(err));
//             })

//     } catch (error) {
//         console.error('Error retrieving all users', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

router.post('/register', async (req, res) => {
    try {
        console.log('AUTH REGISTER', req.body.email);

        const newUser = await user.create({
            // userID: createPK(req.body.name),
            name: req.body.name.toLowerCase(),
            email: req.body.email,
            password: bcrypt.hashSync(req.body.psw, 8)
        });

        console.log(newUser);

        res.status(200).send({ msg: 'Registration successful!' });
    } catch (error) {
        console.error('Error during user registration', error);
        res.status(500).send({ msg: error.message });
    }
});

// router.post('/register', async (req, res) => {
//     try {
//         console.log('AUTH REGISTER', req.body.email)

//         user.create({
//             userID: createPK(req.body.name),
//             name: req.body.name.toLowerCase(),
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.psw, 8)
//         })
//             .then((user) => {
//                 console.log(user);
//                 res.status(200).send({msg: 'Registration successful!'})

//             })
//             .catch((err) => {
//                 console.log(err);
//                 res.status(500).send({ msg: err.message });
//             });
//         // Query the database to get all users
//         // const { rows } = await pool.query('SELECT user_id, username, email FROM "User"');

//         // Send the response
//         res.json(req.body.email);
//     } catch (error) {
//         console.error('Error retrieving all users', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });



module.exports = router;