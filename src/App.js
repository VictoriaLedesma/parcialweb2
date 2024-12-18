import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import { Toaster } from 'sonner'

import Nosotros from './components/nosotros';
import Inicio from './components/inicio';
import Contacto from './components/contacto';
import Resultado from './components/resultado';
import Login from './components/login';
import Registrarse from './components/registrarse';

function App() {
  return (
    <Router>
        <Toaster richColors />
        <Routes>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
    </Router>
  );
}

export default App;

