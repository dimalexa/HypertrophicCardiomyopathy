import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DiseaseInfo from './pages/DiseaseInfo';
import Treatment from './pages/Treatment';
import LegalRights from './pages/LegalRights';
import SCDCalculator from './pages/SCDCalculator';

function App() {
  return (
     <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="disease-info" element={<DiseaseInfo />} />
        <Route path="treatment" element={<Treatment />} />
        <Route path="legal-rights" element={<LegalRights />} />
        <Route path="SCD-calculator" element={<SCDCalculator />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
