import { useEffect } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import AboutSection from "../Components/AboutSection";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

export default function Landing() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className='w-screen h-screen'>
      <main>
        <section className="bg-secondary mt-40 py-20 text-center px-6">
          <h1 className="text-4xxl font-bold text-primary mb-4 tracking-[5px]">Welcome to MenuQR</h1>
          <p className="mt-10 tracking-[3px] text-lg text-tertiary mb-6">
            Convert your menu to an elegant QR view in minutes — no login, no hassle.
          </p>
        </section>

        <section className="text-center py-16 bg-white">
          <h2 className="text-[30px] font-semibold mb-4 text-blue-700">Choose Your Option</h2>
          <div className="space-x-4 mt-10">
            <button
              onClick={() => navigate("/upload-pdf")}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Upload Menu Image/PDF
            </button>
            <button
              onClick={() => navigate("/template")}
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900"
            >
              Enter Menu Manually
            </button>
          </div>
        </section>

        <section id="about">
        <AboutSection />
      </section>
        <ContactForm id="contact"/>
      </main>
          <Footer />
    </div>
  );
}
