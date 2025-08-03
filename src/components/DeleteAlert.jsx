import React from "react";
import "../style.css";

const DeleteAlert = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-overlay">
      <div className="delete-modal">
        <h2>Are you sure you want to delete this item?</h2>
        <div className="delete-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAlert;
