import React, { useState } from "react";
import PostCard from "../components/PostCard";
import "../style.css";

const Home = ({ username }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      username,
      created_at: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>CodeLeap Network</h1>
      </header>

      <section className="create-post">
        <h2>What’s on your mind?</h2>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Hello world"
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content here"
        />

        <button
          onClick={handleCreatePost}
          disabled={!title || !content}
          className={!title || !content ? "disabled" : ""}
        >
          Create
        </button>
      </section>

      <section className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} loggedUser={username} />
        ))}
      </section>
    </div>
  );
};

export default Home;
