import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DiseaseInfo from './pages/DiseaseInfo';
import WhatIsHCMP from './pages/Diseaseinfo/whatIsHCMP';
import Symptoms from './pages/Diseaseinfo/Symptoms';
import Diagnosis from './pages/Diseaseinfo/Diagnosis';
import ClinicalCourse from './pages/Diseaseinfo/ClinicalCourse';
import Treatment from './pages/Treatment';
import Drugs from './pages/Treatment/Drugs';
import Surgery from './pages/Treatment/Surgery';
import Devices from './pages/Treatment/Devices';
import Life from './pages/Treatment/Life';
import LegalRights from './pages/LegalRights';
import SCDCalculator from './pages/SCDCalculator';

function App() {
  return (
     <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="disease-info" element={<DiseaseInfo />} />
        <Route path="disease-info/what-is-hcm" element={<WhatIsHCMP />} />
        <Route path="disease-info/symptoms" element={<Symptoms />} />
        <Route path="disease-info/diagnosis" element={<Diagnosis />} />
        <Route path="disease-info/clinical-course" element={<ClinicalCourse />} />
        <Route path="treatment" element={<Treatment />} />
        <Route path="treatment/medication" element={<Drugs />} />
        <Route path="treatment/surgery" element={<Surgery />} />
        <Route path="treatment/devices" element={<Devices />} />
        <Route path="treatment/lifestyle" element={<Life />} />
        <Route path="legal-rights" element={<LegalRights />} />
        <Route path="SCD-calculator" element={<SCDCalculator />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
