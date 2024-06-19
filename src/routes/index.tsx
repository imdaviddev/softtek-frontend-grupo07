import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../ui';
import Inicio from '../pages/Inicio';
import Turnos from '../pages/Turnos';
import NotFound from '../pages/NotFound';
import { PAGINA_INICIAR_SESION, PAGINA_INICIO, PAGINA_TURNOS } from './routes';
import IniciarSesion from '../pages/IniciarSesion';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={PAGINA_INICIO} element={<Inicio />} />

        <Route
          path={PAGINA_TURNOS}
          element={<Turnos />}
        />
        <Route
          path={PAGINA_INICIAR_SESION}
          element={<IniciarSesion />}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
