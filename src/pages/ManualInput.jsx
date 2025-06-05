import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ManualInput() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const [dish, setDish] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const addItem = () => {
    if (!category || !dish || !price) return;
    setItems([...items, { category, dish, price }]);
    setDish('');
    setPrice('');
  };

  const saveMenu = () => {
    localStorage.setItem('menu', JSON.stringify(items));
    navigate('/template');
  };

  return (
    <div>
      <h2>Manual Menu Entry</h2>
      <input placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <input placeholder="Dish" value={dish} onChange={e => setDish(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={addItem}>Add Item</button>

      <h3>Preview:</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.category} - {item.dish}: ₹{item.price}</li>
        ))}
      </ul>
      <button onClick={saveMenu}>Next: Choose Template</button>
    </div>
  );
}
