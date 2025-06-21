import { useNavigate } from 'react-router-dom';

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
            <div  style={{ width: 200, height: 150, background: '#ddd' }}>
              <img src={`./${temp}.png`} alt={temp} width="100%" />
            </div>
            <button className="mt-7 flex justify-center items-center" onClick={() => pickTemplate(temp)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}
