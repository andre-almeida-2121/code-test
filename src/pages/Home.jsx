import React, { useState } from "react";
import PostCard from "../components/PostCard";
import DeleteAlert from "../components/DeleteAlert";
import EditPostModal from "../components/EditPostModal";
import "../style.css";

const Home = ({ username }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleCreatePost = () => {
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      username,
      created_datetime: new Date().toISOString(),
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const openDeleteAlert = (post) => {
    setPostToDelete(post);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== postToDelete.id));
    setIsDeleteOpen(false);
  };

  const openEditModal = (post) => {
    setPostToEdit(post);
    setIsEditOpen(true);
  };

  const handleSaveEdit = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
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

      <DeleteAlert
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <EditPostModal
        isOpen={isEditOpen}
        post={postToEdit}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSaveEdit}
      />

      <section className="post-list">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            loggedUser={username}
            onDelete={() => openDeleteAlert(post)}
            onEdit={() => openEditModal(post)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
