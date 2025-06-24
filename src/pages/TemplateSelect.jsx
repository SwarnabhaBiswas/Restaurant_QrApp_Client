import { useNavigate } from 'react-router-dom';
import modernImg from "../assets/modern.png";
import minimalImg from "../assets/minimal.png";
import classicImg from "../assets/classic.png";

const templates = [
  { key: 'modern', label: 'Modern', image: modernImg },
  { key: 'minimal', label: 'Minimal', image: minimalImg },
  { key: 'classic', label: 'Classic', image: classicImg },
];

export default function TemplateSelect() {
  const navigate = useNavigate();

  const pickTemplate = (name) => {
    localStorage.setItem('template', name);
    navigate('/manual');
  };

  return (
    <div className="w-screen h-[640px] mt-24 bg-white font-sans">
      <h2 className="text-black font-bold text-4xl px-4 pt-6 pb-4 text-center">
        Choose a Look That <br /> Fits Your Restaurant
      </h2>
      <h3 className="text-black font-normal text-xl text-center">
        Select one of our professionally designed menu templates <br /> and personalize it to match your brand.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10 px-4">
        {templates.map(({ key, label, image }) => (
          <div key={key} className="border border-gray-300 rounded-lg p-4 text-center shadow">
            
            <div className="w-full aspect-[4/3] rounded overflow-hidden">
            <h3 className="text-xl text-black font-semibold mb-3">{label}</h3>

              <img
                src={image}
                alt={label}
                className="w-full h-full object-contain"
              />
            </div>

            <button
              className="mt-5 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              onClick={() => pickTemplate(key)}
            >
              Choose
            </button>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}
