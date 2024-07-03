import { Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as routes from '../../routes/routes';
import './styles.css';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenuBtn = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const isLoggedIn = !!localStorage.getItem('user');

    return (
        <nav className="navbar">
            <div className="logo">AlMedin</div>

            <div className={`toggle-menu ${toggleMenu ? 'visible' : 'oculto'}`}>
                <div className="items" onClickCapture={handleToggleMenuBtn}>
                    <NavLink
                        to={routes.PAGINA_INICIO}
                        className={({ isActive }) => (isActive ? 'item active' : 'item')}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to={routes.PAGINA_CARTILLA_ESPECIALISTAS}
                        className={({ isActive }) => (isActive ? 'item active' : 'item')}
                    >
                        Cartilla
                    </NavLink>

                    {isLoggedIn && (
                        <NavLink
                            to={routes.PAGINA_TURNOS}
                            className={({ isActive }) => (isActive ? 'item active' : 'item')}
                        >
                            Mis Turnos
                        </NavLink>
                    )}

                    {isLoggedIn && (
                        <NavLink
                            to={routes.PAGINA_SOLICITAR_TURNO}
                            className={({ isActive }) => (isActive ? 'item active' : 'item')}
                        >
                            Solicitar turno
                        </NavLink>
                    )}

                </div>

                {isLoggedIn ? (
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                ) : (
                    <Button component={NavLink} to={routes.PAGINA_INICIAR_SESION} variant="contained" color="primary">
                        Iniciar Sesión
                    </Button>
                )}
            </div>

            <div
                className={`toggle-menu-btn ${toggleMenu ? 'cerrar' : 'visible'}`}
                onClick={handleToggleMenuBtn}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
