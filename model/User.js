const Sequelize = require('sequelize');
const connectDB = require("../config/db");

const User = connectDB.define('customers', {
  // id integer AUTO_INCREMENT primary key,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // firstName VARCHAR(50) not null,
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // lastName VARCHAR(50) not null,
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  // ccId VARCHAR(20) not null,
  // FOREIGN KEY (ccId) REFERENCES creditcards(id)
  ccId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'creditcards',
      key: 'id'
    }
  },  
  // address VARCHAR(200) not null,
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },  
  // email VARCHAR(50) not null,
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  // password VARCHAR(20) not null,
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;