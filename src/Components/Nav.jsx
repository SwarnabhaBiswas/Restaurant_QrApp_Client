import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MenuQR
        </h1>
        <div className="space-x-6">
          <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth' })} className="bg-white text-gray-700 hover:text-blue-600 focus:outline-none">About</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })} className="bg-white text-gray-700 hover:text-blue-600 focus:outline-none">Contact</button>
        </div>
      </div>
    </nav>
  );
}
