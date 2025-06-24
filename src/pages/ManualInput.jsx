import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../Components/Nav";
import MinimalTemplate from '../assets/minimal.png';
import ClassicTemplate from '../assets/classic.png';
import ModernTemplate from '../assets/modern.png';

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const UtensilsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const templateImages = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  classic: ClassicTemplate,
};

const ManualInput = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const dishRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const template = localStorage.getItem("template") || "modern";
    setSelectedTemplate(template);
    console.log(template);
  }, []);

  const addItem = (e) => {
    e.preventDefault();
    if (category && dish && price && !isNaN(price)) {
      if (editingIndex !== null) {
        const updatedMenu = [...menu];
        updatedMenu[editingIndex] = { category, dish, price: parseFloat(price) };
        setMenu(updatedMenu);
        setEditingIndex(null);
      } else {
        setMenu([...menu, { category, dish, price: parseFloat(price) }]);
      }
      setCategory("");
      setDish("");
      setPrice("");

      if (dishRef.current) {
        dishRef.current.focus();
      }
    }
  };

  const editItem = (index) => {
    const item = menu[index];
    setCategory(item.category);
    setDish(item.dish);
    setPrice(item.price.toString());
    setEditingIndex(index);
    if (dishRef.current) {
      dishRef.current.focus();
    }
  };

  const deleteItem = (index) => {
    setMenu(menu.filter((_, i) => i !== index));
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setCategory("");
    setDish("");
    setPrice("");
  };

  const handleSubmit = () => {
    localStorage.setItem("menu", JSON.stringify(menu));
    localStorage.setItem("restaurantName", restaurantName);
    navigate("/preview");
  };

  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (

    <div className="min-h-screen w-screen bg-gradient-to-br from-tertiary to-blue-50">
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-between h-16 w-full max-w-7xl">
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  <UtensilsIcon />
                </div>
                <h1 className="text-2xl font-bold text-secondary">Menu Builder</h1>
              </div>
              <div className="text-sm text-gray-500">
                {menu.length} items added
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-secondary mb-4">Restaurant Information</h2>
                <input
                  type="text"
                  placeholder="Enter restaurant name"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-lg"
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                  <div className="text-primary">
                    <PlusIcon />
                  </div>
                  <span className="ml-2">{editingIndex !== null ? "Edit Menu Item" : "Add Menu Item"}</span>
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select category</option>
                      <option value="Appetizers">Appetizers</option>
                      <option value="Main Course">Main Course</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Soups & Salads">Soups & Salads</option>
                      <option value="Sides">Sides</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dish Name</label>
                    <input
                      type="text"
                      placeholder="Enter dish name"
                      value={dish}
                      ref={dishRef}
                      onChange={(e) => setDish(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem(e);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Enter price"
                      value={price}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*\.?\d*$/.test(val)) setPrice(val);
                      }}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem(e);
                        }
                      }}
                    />
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={addItem}
                      className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-200 font-medium flex items-center justify-center"
                    >
                      <PlusIcon />
                      <span className="ml-2">{editingIndex !== null ? "Update Item" : "Add Item"}</span>
                    </button>
                    
                    {editingIndex !== null && (
                      <button
                        onClick={cancelEdit}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {menu.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
                    <div className="text-green-600">
                      <EyeIcon />
                    </div>
                    <span className="ml-2">Current Menu Items</span>
                  </h3>
                  
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {menu.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-white bg-primary px-2 py-1 rounded">
                              {item.category}
                            </span>
                          </div>
                          <h4 className="font-medium text-secondary mt-1">{item.dish}</h4>
                          <p className="text-green-600 font-semibold">₹{item.price}</p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => editItem(idx)}
                            className="p-2 text-primary hover:bg-blue-100 rounded-lg transition-colors duration-200"
                          >
                            <EditIcon />
                          </button>
                          <button
                            onClick={() => deleteItem(idx)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary mb-4">Template Preview</h3>
                {selectedTemplate ? (
                  <div className="relative">
                    <img
                      src={templateImages[selectedTemplate]}
                      alt={`Template ${selectedTemplate}`}
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm capitalize">
                      {selectedTemplate}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">No template selected</p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary mb-4">Live Menu Preview</h3>
                
                {restaurantName && (
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-secondary mb-2">{restaurantName}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
                  </div>
                )}

                {Object.keys(groupedMenu).length > 0 ? (
                  <div className="space-y-6 max-h-96 overflow-y-auto">
                    {Object.entries(groupedMenu).map(([cat, items]) => (
                      <div key={cat} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {cat}
                        </h4>
                        <div className="space-y-2">
                          {items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2">
                              <span className="text-secondary font-medium">{item.dish}</span>
                              <span className="text-green-600 font-semibold">₹{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-300 mx-auto mb-4 flex justify-center">
                      <UtensilsIcon />
                    </div>
                    <p className="text-gray-500 mt-4">Add menu items to see preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {menu.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Preview Menu
                <div className="ml-2">
                  <ArrowRightIcon />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualInput;