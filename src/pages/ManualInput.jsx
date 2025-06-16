import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Nav";
import { useNavigate } from "react-router-dom";
import template1 from "../assets/modern.png";
import template2 from "../assets/minimal.png";
import template3 from "../assets/classic.png";

const templateImages = {
  modern: template1,
  minimal: template2,
  classic: template3,
};

const ManualInput = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const template = localStorage.getItem("template");
    setSelectedTemplate(template);
  }, []);

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
    navigate("/preview");
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div 
        className=""
        style={{ padding: "2rem" }}>
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
        </div>
        <div className="template-preview flex-1 ml-20">
          {selectedTemplate ? (
            <>
              <h3>Selected Template Preview</h3>
              <img
                src={templateImages[selectedTemplate]}
                alt={`Template ${selectedTemplate}`}
                style={{ width: "70%", height: "100%", borderRadius: "8px" }}
              />
            </>
          ) : (
            <p>No template selected</p>
          )}
        </div>
      </div>
      <button 
      className="ml-7"
      onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Next: Preview Menu
      </button>
    </div>
  );
};

export default ManualInput;
