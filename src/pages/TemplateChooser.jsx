import { useNavigate } from "react-router-dom";
import minimalImg from "/src/assets/minimal.png";
import classicImg from "/src/assets/classic.png";
import modernImg from "/src/assets/modern.png";

export default function TemplateChooser() {
  const navigate = useNavigate();

  const templates = [
    {
      name: "Minimal",
      id: "minimal",
      image: minimalImg,
      description: "Clean and modern with focus on content.",
    },
    {
      name: "Classic",
      id: "classic",
      image: classicImg,
      description: "Elegant and traditional, ideal for restaurants.",
    },
    {
      name: "Modern",
      id: "modern",
      image: modernImg,
      description: "Trendy, bold style for cafes and bars.",
    },
  ];

  const handleSelect = (templateId) => {
    navigate(`/menu-builder?template=${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Choose a Menu Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {templates.map((template) => (
          <div key={template.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <img src={template.image} alt={`${template.name} preview`} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{template.name}</h3>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <button
              onClick={() => handleSelect(template.id)}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
