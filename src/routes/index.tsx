import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../ui';
import Inicio from '../pages/Inicio';
import Turnos from '../pages/Turnos/Turnos';
import NotFound from '../pages/ErrorPages/NotFound';
import {
  PAGINA_INICIAR_SESION, PAGINA_INICIO, PAGINA_TURNOS, PAGINA_CARTILLA_ESPECIALISTAS,
  PAGINA_SOLICITAR_TURNO
} from './routes';
import IniciarSesion from '../pages/Usuarios/IniciarSesion';
import CartillaEspecialistas from '../pages/CartillaEspecialista/CartillaEspecialistas';
import CrearTurno from '../pages/Turnos/CrearTurno';

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
          path={PAGINA_CARTILLA_ESPECIALISTAS}
          element={<CartillaEspecialistas />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path={PAGINA_SOLICITAR_TURNO}
          element={<CrearTurno />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
