import { useState } from 'react';
import axios from 'axios';

export default function UploadPdf() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload-pdf`,
        formData
      );
      setUrl(res.data.url);
      setQrCode(res.data.qrCode);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to upload. Try again.");
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = qrCode;
    a.download = 'menu-qr.png';
    a.click();
  };

  return (
    <div
      className="h-[87vh] w-screen">
    <div className="h-full flex items-center justify-center bg-[url('./assets/paperpages.jpg')] bg-cover">
      <div className="bg-tertiary/80 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Upload your menu (PDF only)</h2>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 border text-secondary border-gray-300 px-3 py-2 rounded w-full"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-6"
        >
          Upload PDF
        </button>

        {url && (
          <div className=" bg-tertiary/30 backdrop-blur-md p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <div className="mt-4">
              <div className="flex items-center mb-2 text-blue-700">
                <span className="ml-2 font-medium">QR Code:</span>
              </div>

              <img
                src={qrCode}
                alt="QR Code"
                className="w-40 h-40 mx-auto border rounded shadow-sm"
              />
              
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-tertiary p-1 bg-primary rounded hover:text-secondary block"
              >
                Go to Menu
              </a>

              <button
                onClick={handleDownload}
                className="mt-3 text-sm bg-primary hover:text-tertiary"
              >
                Download QR Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
