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
    <div>
      <h2>Choose Template</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        {['modern', 'minimal', 'classic'].map(temp => (
          <div key={temp}>
            <h3>{temp.toUpperCase()}</h3>
            <div style={{ width: 200, height: 120, background: '#ddd' }}>
              <img src={templateImages[temp]} alt={temp} width="100% height=100%" />
            </div>
            <button onClick={() => pickTemplate(temp)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}
