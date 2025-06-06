import { useEffect, useState } from 'react';
import QRCode from 'qrcode';


export default function Preview() {
  const [link, setLink] = useState('');
  const [qr, setQr] = useState('');

useEffect(() => {
  const menu = JSON.parse(localStorage.getItem('menu'));
  const template = localStorage.getItem('template');
  const restaurantName = localStorage.getItem('restaurantName'); 

  fetch(`http://localhost:5000/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ menu, template, restaurantName }),
  })
    .then(res => res.json())
    .then(async ({ url }) => {
      setLink(url);
      const qrData = await QRCode.toDataURL(url);
      setQr(qrData);
    });
}, []);

  return (
    <div>
      <h2>Preview</h2>
      {qr && <img src={qr} alt="QR Code" />}
      <p>Menu Link: <a href={link} target="_blank">{link}</a></p>
    </div>
  );
}
