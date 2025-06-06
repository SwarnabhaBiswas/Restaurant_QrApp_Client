// src/pages/ViewPdf.jsx
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// ✅ Use local worker from /public
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

function ViewPdf() {
  const { filename } = useParams();
  const pdfUrl = `http://localhost:5000/uploads/${filename}`;
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>View Uploaded PDF</h2>
      <Document
        file={pdfUrl}
        onLoadSuccess={onLoadSuccess}
        loading="Loading PDF..."
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default ViewPdf;
