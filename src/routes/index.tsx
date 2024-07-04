import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../ui";
import Inicio from "../pages/Inicio/Inicio";
import Turnos from "../pages/Turnos/Turnos";
import NotFound from "../pages/ErrorPages/NotFound";
import * as routes from "../routes/routes";
import IniciarSesion from "../pages/Usuarios/IniciarSesion";
import CartillaEspecialistas from "../pages/CartillaEspecialista/CartillaEspecialistas";
import CrearTurno from "../pages/Turnos/CrearTurno";
import EditarTurno from "../pages/Turnos/EditarTurno";

interface Props {
  children: React.ReactNode;
}

const RutaPrivada: React.FC<Props> = ({ children }) => {
  return localStorage.getItem("user") ? (
    children
  ) : (
    <Navigate to={routes.PAGINA_INICIAR_SESION} replace />
  );
};

const RutaAutenticado: React.FC<Props> = ({ children }) => {
  return localStorage.getItem("user") ? (
    <Navigate to={routes.PAGINA_INICIO} replace />
  ) : (
    children
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.PAGINA_INICIO} element={<Inicio />} />

        <Route
          path={routes.PAGINA_TURNOS}
          element={
            <RutaPrivada>
              <Turnos />
            </RutaPrivada>
          }
        />
        <Route
          path={routes.PAGINA_INICIAR_SESION}
          element={
            <RutaAutenticado>
              <IniciarSesion />
            </RutaAutenticado>
          }
        />
        <Route
          path={routes.PAGINA_CARTILLA_ESPECIALISTAS}
          element={<CartillaEspecialistas />}
        />
        <Route
          path={routes.PAGINA_SOLICITAR_TURNO}
          element={
            <RutaPrivada>
              <CrearTurno />
            </RutaPrivada>
          }
        />
        <Route
          path={routes.PAGINA_MODIFICAR_TURNO}
          element={
            <RutaPrivada>
              <EditarTurno />
            </RutaPrivada>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
