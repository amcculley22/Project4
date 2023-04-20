import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";
import styles from "./Nav.module.scss";

export default function NavBar({ user, setUser, handleLogout }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleNewPostClick = () => {
    navigate("/newpost");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.Nav}>
      <button onClick={toggleDropdown}>
        {user ? `${user.name}` : "My Profile"}
      </button>
      {showDropdown && (
        <div className={styles.dropdown}>
          <button onClick={handleProfileClick}>My Profile</button>
          <UserLogOut user={user} setUser={setUser} />
        </div>
      )}
      &nbsp; &nbsp;
      <button onClick={handleHomeClick}>HOME</button>
      &nbsp; &nbsp;
      <button onClick={handleNewPostClick}>New Post</button>
    </nav>
  );
}
