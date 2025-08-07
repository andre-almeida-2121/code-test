import React, { useState, useEffect } from "react";
import "../style.css";

const EditPostModal = ({ isOpen, post, onClose, onSave }) => {
  // Local state to hold the title and content of the post being edited
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  // Update input fields when the post prop changes
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  // It does not render anything if the modal is not open
  if (!isOpen) return null;

  // Save the edited post and close the modal
  const handleSave = () => {
    if (!title || !content) return;
    onSave({ ...post, title, content });
    onClose();
  };

  return (
    <div className="edit-overlay">
      <div className="edit-modal">
        <h2>Edit item</h2>

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

        <div className="edit-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
