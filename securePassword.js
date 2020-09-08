const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const User = require('./model/User');
const Sequelize = require('sequelize');
const queryInterface = connectDB.getQueryInterface();

updateSecurePassword = async() => {

  const users = await User.findAll({
    attributes: ['id', 'password']
  });
  
  queryInterface.changeColumn("customers", "password", {
    type: Sequelize.STRING(128),
    allowNull: false
  });

  // console.log(users);
  for( var i = 0; i < users.length; i++){
    const id = users[i].dataValues.id;

    bcrypt.hash(users[i].dataValues.password, 10, async (err, hashPass) => {
      // console.log(id, hashPass, hashPass.length);

      await User.update({ password: hashPass }, {
        where: {
          id: id
        }
      });

    });
  }
}

updateSecurePassword();