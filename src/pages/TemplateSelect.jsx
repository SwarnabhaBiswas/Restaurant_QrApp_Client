import { useNavigate } from 'react-router-dom';
import template1 from "../assets/modern.png";
import template2 from "../assets/minimal.png";
import template3 from "../assets/classic.png";

const templateImages = {
  modern: template1,
  minimal: template2,
  classic: template3,
};

export default function TemplateSelect() {
  const navigate = useNavigate();

  const pickTemplate = (name) => {
    localStorage.setItem('template', name);
    navigate('/manual');
  };

  return (
    <div className="w-screen h-screen mt-24 bg-white ">
      <h2 className="text-black font-bold text-4xl px-4 pt-6 pb-4 text-center">Choose a Look That <br/> Fits Your Restaurant </h2>
      <h3 className='text-black font-normal text-xl text-center'>Select one of our professionally designed menu templates <br /> and personalize it to match your brand. </h3>
      <div className="flex justify-center items-center" style={{ display: 'flex', gap: 20 }}>
        {['template1', 'template2', 'template3'].map(temp => (
          <div className=" mt-10 border border-gray-500 " key={temp}>
            <h3>{temp.toUpperCase()}</h3>
<<<<<<< HEAD
            <div  style={{ width: 200, height: 150, background: '#ddd' }}>
              <img src={`./${temp}.png`} alt={temp} width="100%" />
=======
            <div style={{ width: 200, height: 120, background: '#ddd' }}>
              <img src={templateImages[temp]} alt={temp} width="100% height=100%" />
>>>>>>> a02eaee815b1ec32e5c4bc68a3bd09ee0f1a3e44
            </div>
            <button className="mt-7 flex justify-center items-center" onClick={() => pickTemplate(temp)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}
