import { useState, useEffect, useRef } from "react";
import styles from "./Profile.module.scss";
import Posts from "../../components/Posts/Posts";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import { getPosts } from "../../utilities/post-api";
import Nav from "../../components/Nav/Nav";

export default function Profile({ user, setUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => post.userId === user._id);

  return (
    <div className={styles.Profile}>
      <nav className={styles.Nav}>
        <Nav user={user} setUser={setUser} />
      </nav>
      {/* Add this div for the user's name */}
      <div className={styles.UserName}>
        <h1>{user.name}'s Posts</h1>
      </div>
      <div className={styles.Content}>
        <div className={styles.Posts}>
          <Posts
            user={user}
            setUser={setUser}
            posts={filteredPosts}
            isProfilePage={true}
          />
        </div>
        <div className={styles.MapContainer}>
          <img
            className={styles.Map}
            src="https://www.apple.com/newsroom/images/product/apps/standard/Apple_Maps_01302020_LP_hero.jpg.og.jpg"
            alt="Apple Maps"
          />
        </div>
      </div>
    </div>
  );
}
