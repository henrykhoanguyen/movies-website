const Sequelize = require('sequelize');
const connectDB = require('../config/db');

const Sales = connectDB.define('sales', {
  // id INTEGER AUTO_INCREMENT primary key,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // customerId integer not null,
  // FOREIGN KEY (customerId) REFERENCES customers(id),
  customerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id'
    }
  },
  // movieId varchar(10) not null,
  // FOREIGN KEY (movieId) REFERENCES movies(id)
  movieId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'movies',
      key: 'id'
    }
  },
  // saleDate date not null,
  saleDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
});

module.exports = Sales;