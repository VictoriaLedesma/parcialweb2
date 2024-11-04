import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 

import Nosotros from './components/nosotros';
import Inicio from './components/inicio';
import Contacto from './components/contacto';

function App() {
  return (

  <Router>
      <div className='App' >
      </div>
      <Routes>
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
  </Router>

  );
}

export default App;
