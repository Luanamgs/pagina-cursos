import React from 'react';
import './App.scss';
import Navbar from './componentes/Navbar';
import { BrowserRouter} from 'react-router-dom';
import Cursos from './componentes/Cursos.js';
import CursosContainer from './componentes/CursosContainer/CursosContainer.js';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Cursos/>
      <CursosContainer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
