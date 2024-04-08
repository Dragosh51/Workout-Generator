const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models')

const app = express();
const port = process.env.PORT || 5343;

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Express session middleware (required for Passport)
app.use(session({ secret: 'your_session_secret', resave: false, saveUninitialized: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Initialize Passport.js
// app.use(passport.initialize());
// app.use(passport.session());

// Your existing routes
// app.use('/login', require('./routes/login'));
app.use('/registration', require('./routes/registration'));
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/workouts', require('./routes/workouts'));

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

db.sequelize
.sync()
.then(() =>
  app.listen(port, () => console.log(`Server listening on port ${port}`))
); 