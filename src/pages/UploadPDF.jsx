import React, { useState } from 'react';

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please choose a PDF file.");

    const formData = new FormData();
    formData.append("pdf", file);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/upload-pdf`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
    setQrCode(data.qrCode);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Upload your menu (PDF only)</h2>
      <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpload}>
        Upload PDF
      </button>

      {url && (
        <div className="mt-6">
          <p className="mb-2">✅ Menu URL:</p>
          <a href={url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{url}</a>

          <div className="mt-6">
            <p className="mb-2">📱 QR Code:</p>
            <img src={qrCode} alt="QR Code" className="border p-2 w-40" />
            <a
              href={qrCode}
              download="menu-qr.png"
              className="mt-2 block text-green-700 underline"
            >
              Download QR Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPDF;