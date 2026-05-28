import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MagazinePortfolio from './components/MagazinePortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MagazinePortfolio />} />
        <Route path="/projects" element={<MagazinePortfolio />} />
        <Route path="/projects/:id" element={<MagazinePortfolio />} />
        <Route path="/blog" element={<MagazinePortfolio />} />
        <Route path="/blog/:id" element={<MagazinePortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
