// require model datatypes
const { Model, DataTypes } = require("sequelize");
//bcrypt
const bcrypt = require("bcrypt");
//require sequelize
const sequelize = require("../config/connection");

//create User model
class User extends Model {
  //check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//create fields/columns for User model
User.init(
  {
    //id
    id: {
      //integer
      type: DataTypes.INTEGER,
      //no null values
      allowNull: false,
      //primary key
      primaryKey: true,
      //auto increment
      autoIncrement: true,
    },
    //username
    username: {
      //string
      type: DataTypes.STRING,
      //no null values
      allowNull: false,
    },
    //password
    password: {
      //string
      type: DataTypes.STRING,
      //no null values
      allowNull: false,
      //validate length
      validate: {
        len: [4],
      },
    },
  },
  {
    //hooks
    hooks: {
      //before create
      beforeCreate: async (newUserData) => {
        //hash password
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //return newUserData
        return newUserData;
      },
      //before update
      beforeUpdate: async (updatedUserData) => {
        //hash password
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        //return updatedUserData
        return updatedUserData;
      },
    },
    //sequelize
    sequelize,
    //freeze table name
    freezeTableName: true,
    //timestamps
    timestamps: false,
    //underscored
    underscored: true,
    //model name
    modelName: "user",
  }
);

//export
module.exports = User;
