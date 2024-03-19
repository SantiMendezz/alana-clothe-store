import './App.css';
import Navbar from './componentes/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import PreguntasFrecuentes from './paginas/PreguntasFrecuentes';
import Productos from './paginas/Productos';
import QuienesSomos from './paginas/QuienesSomos';
import GuiaDeTalles from './paginas/GuiaDeTalles';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Navbar />
        <Routes>
          <Route exact path='/alana-clothe-store' element={<Inicio/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes/>} />
          <Route path='/productos' element={<Productos/>} />
          <Route path='/quienes-somos' element={<QuienesSomos/>} />
          <Route path='/guia-de-talles' element={<GuiaDeTalles/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
