import React, { useState } from "react";

export default function Item({
  itemObj,
  onRemoveItem,
  onTogglePacked,
  onEditItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(itemObj.description);

  // Remove Item
  const handleRemove = () => {
    onRemoveItem(itemObj.id);
  };

  // Toggle Packed
  const handleCheckboxChange = () => {
    onTogglePacked(itemObj.id);
  };

  // Edit Item
  const handleEditChange = (e) => {
    setNewDescription(e.target.value);
  };

  // Edit Submit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditItem(itemObj.id, newDescription);
    setIsEditing(false);
  };

  // Edit Click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <li className="item">
      <input
        type="checkbox"
        checked={itemObj.packed}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newDescription}
            onChange={handleEditChange}
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "0.8rem",
            }}
          />
        </form>
      ) : (
        <span
          style={
            itemObj.packed
              ? { textDecoration: "line-through", opacity: 0.7 }
              : {}
          }
        >
          {itemObj.quantity} {itemObj.description}
        </span>
      )}
      <button onClick={handleEditClick}>📝</button>
      <button onClick={handleRemove}>🗑️</button>
    </li>
  );
}
