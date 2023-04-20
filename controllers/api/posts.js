const Post = require("../../models/post");
const User = require("../../models/user");
const Comment = require("../../models/comment");

// Add a post
async function createPost(req, res) {
  try {
    const { picture, caption, userId, username } = req.body;

    // Find the user
    const user = await User.findById(userId);
    // Create a new Post with the _id set to userId
    const post = new Post({
      userId: userId,
      picture: picture,
      caption: caption,
      username: user.name,
    });
    await post.save();

    // Add post to user's posts array
    user.posts.push(post);
    await user.save();

    res.status(200).json(post);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function getPosts(req, res) {
  try {
    console.log("getPosts: before fetching posts");
    const posts = await Post.find({}).populate({
      path: "comments",
      model: Comment,
    });
    console.log("getPosts: after fetching posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

const addComment = async (req, res) => {
  try {
    console.log("Request Body: ", req.body);
    const { postId, userId, username, text } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // Create a new Comment
    const comment = new Comment({ userId, username, text });
    console.log("New Comment: ", comment);
    await comment.save();

    // Add comment to post's comments array
    post.comments.push(comment);
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function getComments(req, res) {
  try {
    const post = await Post.findById(req.params.postId).populate("comments");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post.comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function deletePost(req, res) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.remove();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createPost,
  getPosts,
  addComment,
  getComments,
  deletePost,
};
