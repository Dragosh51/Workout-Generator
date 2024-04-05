const config = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  createDatabase: true,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK', config.DB)

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.cart = require('./cart.model')(sequelize, Sequelize);
db.checkout = require('./checkout.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.workouts = require('./workouts.model')(sequelize, Sequelize);

module.exports = db;