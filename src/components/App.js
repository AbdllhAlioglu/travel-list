import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  // Reset Button
  const handleResetButton = () => {
    setItems([]);
  };

  // Add Item
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // Toggle Packed
  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Edit Item
  const handleEditItem = (id, description) => {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, description } : item))
    );
  };

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onRemoveItem={handleRemoveItem}
          onTogglePacked={handleTogglePacked}
          onResetButton={handleResetButton}
          onEditItem={handleEditItem}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
