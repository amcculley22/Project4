import styles from "./CreatePost.module.scss";
import React, { useState, useEffect } from "react";
import { createPost } from "../../utilities/post-api";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import {
  MyCloudinaryImage,
  cloudName,
} from "../../components/Cloudinary/Cloudinary";

export default function CreatePost({ user, setUser }) {
  const userId = user._id;
  const navigate = useNavigate();

  const [caption, setCaption] = useState("");
  const [picture, setPicture] = useState("");
  const [post, setPost] = useState({ picture, caption, userId });

  useEffect(() => {}, [caption]);

  useEffect(() => {}, [picture]);

  useEffect(() => {
    console.log(post);
  }, [post]);

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handlePictureChange = async (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "ml_default");

    console.log("Uploading image..."); // Add this line

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dizsfrpzi/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const jsonResponse = await response.json();

      if (response.ok) {
        // Add this block
        console.log("Image uploaded successfully:", jsonResponse);
        setPicture(jsonResponse.url);
      } else {
        console.error("Error uploading image:", jsonResponse);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleAddPost = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const newPostData = { picture, caption, userId };
    const newPost = await createPost(newPostData);
    navigate("/feed");
    return newPost;
  };
  return (
    <div className={styles.createPost}>
      <nav className={styles.Nav}>
        <Nav user={user} />
      </nav>
      <form>
        {/* ... */}
        <label>Picture</label>
        <div className={styles.pictureContainer}>
          <input
            className={styles.inputs}
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
          ></input>
          {picture && (
            <img src={picture} alt="preview" className={styles.previewImage} />
          )}
        </div>
        {/* ... */}
        <label>Caption</label>
        <input
          className={styles.inputs}
          type="text"
          name="name"
          value={caption} // Set the value of the input field to the caption state
          onChange={handleCaptionChange} // Add an onChange event handler
        ></input>
        <button type="submit" onClick={handleAddPost}>
          Post ;)
        </button>
      </form>
    </div>
  );
}
