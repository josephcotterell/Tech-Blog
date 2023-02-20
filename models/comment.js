// require Model, DataTypes
const { Model, DataTypes } = require("sequelize");
//require sequelize
const sequelize = require("../config/connection");

//class comment
class Comment extends Model {}

//create comment model
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

//export
module.exports = Comment;
