import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ManualInput from './pages/ManualInput';
import UploadPDF from './pages/UploadPDF';
import TemplateSelect from './pages/TemplateSelect';
import Preview from './pages/Preview';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/manual" element={<ManualInput />} />
      <Route path="/upload-pdf" element={<UploadPDF />} />
      <Route path="/template" element={<TemplateSelect />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
}
