import React from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onRemoveItem,
  onTogglePacked,
  onResetButton,
  onEditItem,
}) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              onRemoveItem={onRemoveItem}
              onTogglePacked={onTogglePacked}
              onEditItem={onEditItem}
            />
          ))}
        </ul>
        <button onClick={onResetButton}>Reset</button>
      </div>
    </>
  );
}
