import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useNavigate } from 'react-router-dom';


export default function Preview() {
  const [link, setLink] = useState('');
  const [qr, setQr] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  const menu = JSON.parse(localStorage.getItem('menu'));
  const template = localStorage.getItem('template');
  const restaurantName = localStorage.getItem('restaurantName'); 
  console.log("Sending to /generate:", {
  menu: JSON.parse(localStorage.getItem("menu")),
  template: localStorage.getItem("template"),
  restaurantName: localStorage.getItem("restaurantName")
});

 fetch(`${import.meta.env.VITE_API_URL}/generate`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ menu, template, restaurantName }),
})
  .then(res => {
    if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }
    return res.json(); 
  })
  .then(async ({ url }) => {
    setLink(url);
    const qrData = await QRCode.toDataURL(url);
    setQr(qrData);
  })
  .catch(err => {
    console.error("Error in preview fetch:", err);
  });


}, []);

  return (
    <div
      className="h-[87vh] w-screen  flex items-center justify-center bg-[url('./assets/food2.jpg')] bg-cover bg-center overflow-x-hidden overflow-y-hidden"
    >
      <div className="bg-tertiary/80 mt-[3%] backdrop-blur-md rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-600 rounded-full p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-secondary mb-2">Menu Ready!</h2>
        <p className="text-secondary mb-6">
          Your restaurant menu is now live.<br />
          Scan or share the QR code below to access it.
        </p>

        {qr && <img src={qr} alt="QR Code" className="mx-auto mb-4 w-48 h-48" />}

        <div className="flex justify-center gap-4 mb-4">
          <a href={qr} download="menu-qr.png">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Download QR
            </button>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Preview
            </button>
          </a>
        </div>

        <p className="text-sm text-secondary">
          Need to edit your menu?{' '}
          <button
            className="text-blue-600 underline"
            onClick={() => navigate('/manual')}
          >
            Go back
          </button>
        </p>
      </div>
    </div>
  );
}
