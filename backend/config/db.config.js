module.exports = {
    HOST: "localhost",
       USER: "root",
       PASSWORD: "Cetateanul1",
       DB: "workout-generator",
       dialect: "mysql",
       pool: {
           max: 10,
           min: 2,
           acquire: 30000,
           idle: 30000,
       },
  }


