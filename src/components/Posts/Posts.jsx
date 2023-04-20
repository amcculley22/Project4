// Posts.js
import React from "react";
import styles from "./Posts.module.scss";
import SinglePost from "../SinglePost/SinglePost";

export default function Posts({ posts, isProfilePage }) {
  // Sort posts by createdAt, in descending order (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const postItems = sortedPosts.map((post, index) => (
    <SinglePost
      key={post.id || index}
      post={post}
      isProfilePage={isProfilePage}
    />
  ));

  return <main className={styles.Posts}>{postItems}</main>;
}
