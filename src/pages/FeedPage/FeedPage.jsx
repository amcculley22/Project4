import { useState, useEffect, useRef } from "react";
import styles from "./FeedPage.module.scss";
import Posts from "../../components/Posts/Posts";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import { getPosts } from "../../utilities/post-api";
import Nav from "../../components/Nav/Nav";

export default function FeedPage({ user, setUser }) {
  const [postItems, setPostItems] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.FeedPage}>
      <nav className={styles.Nav}>
        <Nav user={user} setUser={setUser} />
      </nav>
      <div className={styles.Content}>
        <div className={styles.Posts}>
          <Posts
            user={user}
            setUser={setUser}
            postItems={postItems}
            posts={posts}
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
