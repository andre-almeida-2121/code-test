import React, { useState } from "react";
import PostCard from "../components/PostCard";
import DeleteAlert from "../components/DeleteAlert";
import EditPostModal from "../components/EditPostModal";
// import { useQuery } from "@tanstack/react-query";
import "../style.css";

/* const fetchPosts = async () => {
  const response = await fetch("https://dev.codeleap.co.uk/careers/");
  if (!response.ok) throw new Error("Failed to fetch posts");
  const data = await response.json();
  console.log("dados esperados", data);
  return data.results;
};
*/
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
      created_at: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  /*
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const handleCreatePost = async () => {
    if (!title || !content) return;

    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          title,
          content,
        }),
      });

      const data = await response.json();
      console.log("Resposta do backend ao criar post:", data);

      const fetchResponse = await fetch("https://dev.codeleap.co.uk/careers/");
      const postsAfterCreate = await fetchResponse.json();
      console.log("Posts disponíveis depois do post:", postsAfterCreate);

      setTitle("");
      setContent("");

      refetch(); // Update data
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }; */

  const openDeleteAlert = (post) => {
    setPostToDelete(post);
    setIsDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== postToDelete.id));
    setIsDeleteOpen(false);
  };

  /*
  const handleConfirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await fetch(`https://dev.codeleap.co.uk/careers/${postToDelete.id}/`, {
        method: "DELETE",
      });
      setIsDeleteOpen(false);
      setPostToDelete(null);
      refetch();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }; */

  const openEditModal = (post) => {
    setPostToEdit(post);
    setIsEditOpen(true);
  };

  const handleSaveEdit = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  /*
  const handleSaveEdit = async (updatedPost) => {
    try {
      await fetch(`https://dev.codeleap.co.uk/careers/${updatedPost.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedPost.title,
          content: updatedPost.content,
        }),
      });
      setIsEditOpen(false);
      setPostToEdit(null);
      refetch();
    } catch (error) {
      console.error("Error editing post:", error);
    }
  }; */

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
            currentUser={username}
            onDelete={openDeleteAlert}
            onEdit={openEditModal}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
