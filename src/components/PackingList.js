import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onRemoveItem,
  onTogglePacked,
  onResetButton,
  onEditItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  // Sorted Items
  let sortedItems;

  // Sort Items
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              onRemoveItem={onRemoveItem}
              onTogglePacked={onTogglePacked}
              onEditItem={onEditItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Eklenme sırasına göre</option>
            <option value="description">İsme göre</option>
            <option value="packed">Hazırlanma durumuna göre</option>
          </select>
          <button onClick={onResetButton}>Tümünü Temizle</button>
        </div>
      </div>
    </>
  );
}
