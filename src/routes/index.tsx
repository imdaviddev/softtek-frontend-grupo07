import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Footer, Navbar } from '../ui';
import Inicio from '../pages/Inicio/Inicio';
import Turnos from '../pages/Turnos/Turnos';
import NotFound from '../pages/ErrorPages/NotFound';
import {
  PAGINA_INICIAR_SESION, PAGINA_INICIO, PAGINA_TURNOS, PAGINA_CARTILLA_ESPECIALISTAS,
  PAGINA_SOLICITAR_TURNO
} from './routes';
import IniciarSesion from '../pages/Usuarios/IniciarSesion';
import CartillaEspecialistas from '../pages/CartillaEspecialista/CartillaEspecialistas';
import CrearTurno from '../pages/Turnos/CrearTurno';


interface Props{
  children: React.ReactNode;
}

const RutaPrivada: React.FC<Props> = ({children}) => {
  return localStorage.getItem('user') ? children: <Navigate to={PAGINA_INICIAR_SESION} replace/>
}

const RutaAutenticado: React.FC<Props> = ({children}) => {
  return localStorage.getItem('user') ? <Navigate to={PAGINA_INICIO} replace/>: children;
}

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={PAGINA_INICIO} element={<Inicio />} />

        <Route
          path={PAGINA_TURNOS}
          element={
          <RutaPrivada>
            <Turnos />
          </RutaPrivada>
          }
        />
        <Route
          path={PAGINA_INICIAR_SESION}
          element={
          <RutaAutenticado>
            <IniciarSesion />
          </RutaAutenticado>
        }
        />
        <Route
          path={PAGINA_CARTILLA_ESPECIALISTAS}
          element={<CartillaEspecialistas />}
        />
        <Route
          path={PAGINA_SOLICITAR_TURNO}
          element={
          <RutaPrivada>
            <CrearTurno />
          </RutaPrivada>
        }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
