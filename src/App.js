import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import DiseaseInfo from './pages/DiseaseInfo';
import WhatIsHCMP from './pages/Diseaseinfo/whatIsHCMP';
import Symptoms from './pages/Diseaseinfo/Symptoms';
import Diagnosis from './pages/Diseaseinfo/Diagnosis';
import ClinicalCourse from './pages/Diseaseinfo/ClinicalCourse';
import Life from './pages/Life';
import Drugs from './pages/Treatment/Drugs';
import Surgery from './pages/Treatment/Surgery';
import Devices from './pages/Treatment/Devices';
import Treatment from './pages/Treatment/Treatment';
import About from './pages/About';
import History from './pages/Treatment/History';
import Genetics from './pages/Diseaseinfo/Genetic';
import Projects from './pages/Projects';
import Map from './pages/Projects/Map';
import Registr from './pages/Projects/Registr';

function App() {
  return (
     <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="disease-info" element={<DiseaseInfo />} />
        <Route path="disease-info/what-is-hcm" element={<WhatIsHCMP />} />
        <Route path="disease-info/genetics" element={<Genetics />} />
        <Route path="disease-info/symptoms" element={<Symptoms />} />
        <Route path="disease-info/diagnosis" element={<Diagnosis />} />
        <Route path="disease-info/clinical-course" element={<ClinicalCourse />} />
        <Route path="life" element={<Life />} />
        <Route path="life/medication" element={<Drugs />} />
        <Route path="life/surgery" element={<Surgery />} />
        <Route path="life/devices" element={<Devices />} />
        <Route path="life/treatment" element={<Treatment />} />
        <Route path="life/history" element={<History />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/map" element={<Map />} />
        <Route path="projects/registr" element={<Registr />} />
        <Route path="about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
