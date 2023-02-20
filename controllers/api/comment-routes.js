//express router
const router = require("express").Router();
//import comment model
const { Comment } = require("../../models/");
//import withAuth middleware
const withAuth = require("../../utils/auth");

//create new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//export
module.exports = router;
