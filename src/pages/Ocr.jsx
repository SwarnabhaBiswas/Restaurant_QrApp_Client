import { useState } from 'react';
import Tesseract from 'tesseract.js';
import { useNavigate } from 'react-router-dom';

export default function Ocr() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImg = e => setImg(URL.createObjectURL(e.target.files[0]));

  const extractText = () => {
    setLoading(true);
    Tesseract.recognize(img, 'eng').then(({ data: { text } }) => {
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
      const menu = [];
      let cat = 'General';
      lines.forEach(line => {
        const match = line.match(/(.+?)\s+(\d+)/);
        if (match) {
          menu.push({ category: cat, dish: match[1], price: match[2] });
        } else {
          cat = line;
        }
      });
      localStorage.setItem('menu', JSON.stringify(menu));
      navigate('/template');
    });
  };

  return (
    <div>
      <h2>Upload menu image</h2>
      <input type="file" accept="image/*" onChange={handleImg} />
      {img && <img src={img} width="300" />}
      <button onClick={extractText} disabled={loading}>
        {loading ? 'Extracting...' : 'Extract & Continue'}
      </button>
    </div>
  );
}
