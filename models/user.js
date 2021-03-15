const mongoose = require("mongoose");
var bcrypt = reequire("bcryptjs")


const UserSchema = new mongoose.Schemma({
    // Giving the User model a first name of type STRING
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      // Giving the User model a last name of type STRING
      lastName:  {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      // Giving the User model a email of type STRING
      email:   {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      // Giving the User model a password of type STRING
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 20]
        }
      },
    
})

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before password is created the password is encrypted
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });