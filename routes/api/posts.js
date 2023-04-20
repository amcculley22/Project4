const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  addComment,
  getComments,
  deletePost,
} = require("../../controllers/api/posts");

// Add a post
router.post("/api/newpost", createPost);
router.get("/api/posts", getPosts);
router.post("/api/posts/:postId/comments", (req, res) => {
  console.log("addComment route hit");
  addComment(req, res);
});
router.get("/api/posts/:postId/comments", getComments);
router.delete("/api/posts/:postId", deletePost);

module.exports = router;
