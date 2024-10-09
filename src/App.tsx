import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Obrigado from './pages/Obrigado';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Obrigado" element={<Obrigado />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}
