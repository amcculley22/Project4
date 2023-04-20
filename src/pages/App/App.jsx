import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//pages
import FeedPage from "../FeedPage/FeedPage";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import styles from "./App.module.scss";
import CreatePost from "../CreatePost/CreatePost";
import Profile from "../Profile/Profile";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <Routes>
            <Route
              path="/feed"
              element={<FeedPage user={user} setUser={setUser} />}
            />
            <Route
              path="/newpost"
              element={<CreatePost user={user} setUser={setUser} />}
            />
            <Route path="/*" element={<Navigate to="/feed" />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
