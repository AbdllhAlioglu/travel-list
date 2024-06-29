import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleResetButton = () => {
    setItems([]);
  };

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

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
