//user const
const User = require("./user");
//post const
const Post = require("./post");
//comment const
const Comment = require("./comment");

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
