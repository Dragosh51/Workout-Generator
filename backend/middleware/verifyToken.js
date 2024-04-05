const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
  const token = req.header('auth-token');
    // console.log('VERIFY TOKEN', token);
  if (!token)
    return res
      .status(401)
      .json({ msg: 'You are not loged in or not Autorized' });

  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Not Autorized' });
  }
};

module.exports = auth;