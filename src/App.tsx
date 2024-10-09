import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Obrigado from './pages/Obrigado';

import 'aos/dist/aos.css';
import AOS from 'aos';


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      easing: 'ease-in-out', // efeito de easing
      once: true, // se deve animar apenas uma vez
    });
  }, []);

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
