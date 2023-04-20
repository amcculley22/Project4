import React, { useState, useEffect } from "react";
import styles from "./SinglePost.module.scss";
import { addComment, getComments, deletePost } from "../../utilities/post-api";

export default function SinglePost({ post, isProfilePage }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  console.log("Post object in SinglePost:", post);

  useEffect(() => {
    fetchComments();
  }, [post._id]);

  const fetchComments = async () => {
    const fetchedComments = await getComments(post._id);
    setComments(fetchedComments);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const toggleDeleteOption = () => {
    setShowDeleteOption(!showDeleteOption);
  };

  async function handleAddComment(postId, text) {
    try {
      const response = await addComment(postId, text);
      setComments(response);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  async function handleDeletePost(postId) {
    try {
      await deletePost(postId);
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  const commentList = comments.map((comment, index) => (
    <p key={index} className={styles.comment}>
      {comment.text}
    </p>
  ));

  return (
    <div className={styles.singlePost}>
      <img className={styles.picture} src={post.picture} alt="Post" />
      <p>
        <span className={styles.username}>{post.username}</span>: {post.caption}
      </p>
      {commentList}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment(post._id, newComment);
        }}
        className={styles.commentForm}
      >
        <input
          className={styles.commentInput}
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button className={styles.commentButton} type="submit">
          Post Comment
        </button>
      </form>
      {isProfilePage && (
        <>
          <button className={styles.optionsButton} onClick={toggleDeleteOption}>
            &#x2022;&#x2022;&#x2022;
          </button>
          {showDeleteOption && (
            <button
              className={styles.deleteButton}
              onClick={() => handleDeletePost(post._id)}
            >
              Delete Post
            </button>
          )}
        </>
      )}
    </div>
  );
}
