import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import DeleteAlert from "../components/DeleteAlert";
import EditPostModal from "../components/EditPostModal";
// import { useQuery } from "@tanstack/react-query";
import "../style.css";

// Failed try to fetch posts from an external API
// const fetchPosts = async () => {
//   const response = await fetch("https://dev.codeleap.co.uk/careers/");
//   if (!response.ok) throw new Error("Failed to fetch posts");
//   const data = await response.json();
//   console.log("dados esperados", data);
//   return data.results;
// };

const Home = ({ username }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]); // State to hold posts
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // State to control delete alert visibility
  const [postToDelete, setPostToDelete] = useState(null); // State to hold the post to delete
  const [isEditOpen, setIsEditOpen] = useState(false); // State to control edit modal visibility
  const [postToEdit, setPostToEdit] = useState(null); // State to hold the post to edit

  // Create a new post via local server and update the posts state
  const handleCreatePost = async () => {
    if (!title || !content) return;

    try {
      const response = await fetch("http://localhost:3001/posts", {
        // Adjusted URL to match local server
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          title,
          content,
          created_datetime: new Date().toISOString(),
        }),
      });

      const newPost = await response.json();

      setPosts([newPost, ...posts]); // Add a new post at the beginning
      setTitle(""); // Clear title input
      setContent(""); // Clear content input
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  // Fetch posts from the local server when the component is mounted
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        // Sorting posts by most recent date
        setPosts(
          data.sort(
            (a, b) =>
              new Date(b.created_datetime) - new Date(a.created_datetime)
          )
        );
      } catch (err) {
        console.error("Error getting posts:", err);
      }
    };
    fetchPosts();
  }, []);

  // Failed try to use React Query to fetch posts
  // const { data: posts = [], refetch } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: fetchPosts,
  // });

  // Failed try to handle post creation
  // const handleCreatePost = async () => {
  //   if (!title || !content) return;

  //   try {
  //     const response = await fetch("https://dev.codeleap.co.uk/careers/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username,
  //         title,
  //         content,
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log("Resposta do backend ao criar post:", data);

  //     const fetchResponse = await fetch("https://dev.codeleap.co.uk/careers/");
  //     const postsAfterCreate = await fetchResponse.json();
  //     console.log("Posts disponíveis depois do post:", postsAfterCreate);

  //     setTitle("");
  //     setContent("");

  //     refetch(); // Update data
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //   }
  // };

  // Open delete alert modal for the selected post
  const openDeleteAlert = (post) => {
    setPostToDelete(post);
    setIsDeleteOpen(true);
  };

  // Handle post delettion via local server and update the posts state
  const handleConfirmDelete = async () => {
    if (!postToDelete) return;

    try {
      await fetch(`http://localhost:3001/posts/${postToDelete.id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter((p) => p.id !== postToDelete.id));
      setIsDeleteOpen(false);
    } catch (err) {
      console.error("Erro deleting post:", err);
    }
  };

  // Failed try to handle post deletion
  // const handleConfirmDelete = async () => {
  //   if (!postToDelete) return;
  //   try {
  //     await fetch(`https://dev.codeleap.co.uk/careers/${postToDelete.id}/`, {
  //       method: "DELETE",
  //     });
  //     setIsDeleteOpen(false);
  //     setPostToDelete(null);
  //     refetch();
  //   } catch (error) {
  //     console.error("Error deleting post:", error);
  //   }
  // };

  // Open edit modal for the selected post
  const openEditModal = (post) => {
    setPostToEdit(post);
    setIsEditOpen(true);
  };

  // Handle post editing via local server and update the posts state
  const handleSaveEdit = async (updatedPost) => {
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${updatedPost.id}`,
        {
          // Send PATCH request to update post
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: updatedPost.title,
            content: updatedPost.content,
          }),
        }
      );

      const patchedPost = await response.json();

      setPosts(
        posts.map((post) => (post.id === patchedPost.id ? patchedPost : post))
      );
    } catch (err) {
      console.error("Error editing post:", err);
    }
  };

  // Failed try to handle post editing
  // const handleSaveEdit = async (updatedPost) => {
  //   try {
  //     await fetch(`https://dev.codeleap.co.uk/careers/${updatedPost.id}/`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: updatedPost.title,
  //         content: updatedPost.content,
  //       }),
  //     });
  //     setIsEditOpen(false);
  //     setPostToEdit(null);
  //     refetch();
  //   } catch (error) {
  //     console.error("Error editing post:", error);
  //   }
  // };

  return (
    <div className="home-container">
      <header className="header">
        <h1>CodeLeap Network</h1>
      </header>
      <div className="home-body">
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

        {/* DeleteAlert component to confirm post deletion */}

        <DeleteAlert
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={handleConfirmDelete}
        />

        {/* EditPostModal component to edit a post */}

        <EditPostModal
          isOpen={isEditOpen}
          post={postToEdit}
          onClose={() => setIsEditOpen(false)}
          onSave={handleSaveEdit}
        />

        {/* PostCard component to display each post */}
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
    </div>
  );
};

export default Home;
