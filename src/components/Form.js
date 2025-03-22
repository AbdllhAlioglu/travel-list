import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Change Quantity
  const handleChangeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  // Change Description
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return alert("Lütfen bir eşya ismi girin");

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Seyahatiniz için neye ihtiyacınız var?</h3>
        <select value={quantity} onChange={handleChangeQuantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Eşya ismi..."
          value={description}
          onChange={handleChange}
        />
        <button>Ekle</button>
      </form>
    </>
  );
}
