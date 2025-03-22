import React, { useState } from "react";

export default function Item({
  itemObj,
  onRemoveItem,
  onTogglePacked,
  onEditItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(itemObj.description);

  const handleRemove = () => {
    onRemoveItem(itemObj.id);
  };

  const handleCheckboxChange = () => {
    onTogglePacked(itemObj.id);
  };

  const handleEditChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditItem(itemObj.id, newDescription);
    setIsEditing(false);
  };

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
