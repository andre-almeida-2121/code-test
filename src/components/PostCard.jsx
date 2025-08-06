import React from "react";
import "../style.css";

const PostCard = ({ post, currentUser, onEdit, onDelete }) => {
  const isOwner = post.username === currentUser;

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.title}</strong>
        {isOwner && (
          <div className="post-actions">
            <button onClick={() => onDelete(post)} className="delete-btn">
              🗑
            </button>
            <button onClick={() => onEdit(post)} className="edit-btn">
              ✎
            </button>
          </div>
        )}
      </div>
      <div className="post-body">
        <div className="post-meta">
          <span className="username">@{post.username}</span>
          <span className="timestamp">{post.created_datetime}</span>
        </div>
        <p className="post-content">{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
