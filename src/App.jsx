import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ManualInput from './pages/ManualInput';
import Ocr from './pages/Ocr';
import TemplateSelect from './pages/TemplateSelect';
import Preview from './pages/Preview';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/manual" element={<ManualInput />} />
      {/* <Route path="/ocr" element={<Ocr />} /> */}
      <Route path="/template" element={<TemplateSelect />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
}
