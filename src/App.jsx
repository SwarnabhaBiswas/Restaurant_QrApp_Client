import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ManualInput from './pages/ManualInput';
import UploadPDF from './pages/UploadPDF';
import TemplateSelect from './pages/TemplateSelect';
import Preview from './pages/Preview';
import Navbar from './Components/Nav';
import TemplateChooser from './pages/TemplateChooser';
import MenuBuilder from './pages/MenuBuilder';

export default function App() {
  const [pdfUrl, setPdfUrl] = useState('');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/manual" element={<ManualInput />} />
        <Route path="/upload-pdf" element={<UploadPDF setPdfUrl={setPdfUrl} />} />
        <Route path="/template" element={<TemplateSelect />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/menu-templates" element={<TemplateChooser />} />
        <Route path="/menu-builder" element={<MenuBuilder />} />
      </Routes>
    </>
  );
}
