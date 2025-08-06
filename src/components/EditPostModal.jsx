import React, { useState, useEffect } from "react";
import "../style.css";

const EditPostModal = ({ isOpen, post, onClose, onSave }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!isOpen) return null;

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
