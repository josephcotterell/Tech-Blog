//user const
const User = require("./User");
//post const
const Post = require("./Post");
//comment const
const Comment = require("./Comment");

//post belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comments belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//export
module.exports = { User, Post, Comment };
