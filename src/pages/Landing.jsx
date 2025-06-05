import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome! Choose input method</h2>
      <button onClick={() => navigate('/manual')}>Enter Menu Manually</button>
      <button onClick={() => navigate('/upload-pdf')}>Upload PDF</button>
    </div>
  );
}
