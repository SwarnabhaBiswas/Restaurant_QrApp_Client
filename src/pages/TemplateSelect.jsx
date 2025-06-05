import { useNavigate } from 'react-router-dom';

export default function TemplateSelect() {
  const navigate = useNavigate();

  const pickTemplate = (name) => {
    localStorage.setItem('template', name);
    navigate('/preview');
  };

  return (
    <div>
      <h2>Choose Template</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        {['modern', 'minimal', 'classic'].map(temp => (
          <div key={temp}>
            <h3>{temp.toUpperCase()}</h3>
            <div style={{ width: 200, height: 150, background: '#ddd' }}>
              <img src={`/${temp}.png`} alt={temp} width="100%" />
            </div>
            <button onClick={() => pickTemplate(temp)}>Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
}
