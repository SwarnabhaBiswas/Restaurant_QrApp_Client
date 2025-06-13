import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-screen top-0 absolute">
    <nav className="bg-tertiary shadow-md p-1.5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
          <img
          src={logo}
          alt="MenuQR Logo"
          className="h-20 w-20 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1
          className="text-[1.7rem] font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MenuQR
        </h1>
        </div>
        <div className="space-x-6">
          <button onClick={() => navigate("/template")} className="h-15 w-40 bg-tertiary text-gray-700 hover:text-blue-600 focus:outline-none">Templates</button>
          <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: 'smooth' })} className="h-15 w-40 bg-tertiary text-gray-700 hover:text-blue-600 focus:outline-none">About</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })} className="h-15 w-40 bg-tertiary text-gray-700 hover:text-blue-600 focus:outline-none">Contact</button>
        </div>
      </div>
    </nav>
  </div>
  );
}
