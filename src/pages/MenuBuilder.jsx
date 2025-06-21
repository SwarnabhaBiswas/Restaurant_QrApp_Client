import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MinimalTemplate from '/src/Components/templates/MinimalTemplate';
import ClassicTemplate from '/src/Components/templates/ClassicTemplate';
import ModernTemplate from '/src/Components/templates/ModernTemplate';

export default function MenuBuilder() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTemplate = queryParams.get('template') || 'minimal';

  const [items, setItems] = useState([{ name: '', price: '' }]);
  const [template, setTemplate] = useState(selectedTemplate);

  useEffect(() => {
    setTemplate(selectedTemplate);
  }, [selectedTemplate]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', price: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const renderTemplate = () => {
    switch (template) {
      case 'classic':
        return <ClassicTemplate items={items} />;
      case 'modern':
        return <ModernTemplate items={items} />;
      case 'minimal':
      default:
        return <MinimalTemplate items={items} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Build Your Menu
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Panel: Form */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Menu Items</h3>
          {items.map((item, index) => (
            <div key={index} className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Item name"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                className="w-1/3 p-2 border rounded"
              />
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 hover:text-red-700 font-bold px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addItem}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Item
          </button>
        </div>

        {/* Right Panel: Template Preview */}
        <div className="p-4 bg-white rounded shadow overflow-auto max-h-[600px]">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Live Preview</h3>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}
