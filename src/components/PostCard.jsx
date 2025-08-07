import React from "react";
import { formatDistanceToNow } from "date-fns";
import "../style.css";

const PostCard = ({ post, currentUser, onEdit, onDelete }) => {
  const isOwner = post.username === currentUser; // Check if the current user is the owner of the post

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.title}</strong>
        {/* Show edit and delete buttons only if the current user is the owner of the post */}
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
          {/* Format the post creation date to show how long ago it was created */}
          <span className="timestamp">
            {formatDistanceToNow(
              post.created_datetime
                ? new Date(post.created_datetime)
                : new Date(),
              {
                addSuffix: true,
              }
            )}
          </span>
        </div>
        <p className="post-content">{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
