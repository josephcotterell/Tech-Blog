// require sequelize model datatypes
const { Model, DataTypes } = require("sequelize");
//require sequelize
const sequelize = require("../config/connection");

// class post
class Post extends Model {}

//create post model
Post.init(
  {
    //title
    title: DataTypes.STRING,
    //content
    body: DataTypes.STRING,
  },
  {
    //sequelize
    sequelize,
  }
);

//export
module.exports = Post;
