import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManualInput = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  // 🧠 Use refs to focus dish input
  const dishRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    if (category && dish && price && !isNaN(price)) {
      setMenu([...menu, { category, dish, price }]);
      setDish("");
      setPrice("");

      // Focus back to dish input
      if (dishRef.current) {
        dishRef.current.focus();
      }
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("menu", JSON.stringify(menu));
    localStorage.setItem("restaurantName", restaurantName);
    navigate("/template");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Enter Your Menu</h2>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Restaurant Name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          style={{ marginBottom: "1rem", display: "block", width: "300px" }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dish"
          value={dish}
          ref={dishRef}
          onChange={(e) => setDish(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*\.?\d*$/.test(val)) setPrice(val);
          }}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <h4>Preview</h4>
        <ul>
          {menu.map((item, idx) => (
            <li key={idx}>
              {item.category} - {item.dish} - ₹{item.price}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Choose Template
      </button>
    </div>
  );
};

export default ManualInput;
