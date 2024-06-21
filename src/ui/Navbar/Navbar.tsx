import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import {
    PAGINA_CARTILLA_ESPECIALISTAS,
    PAGINA_INICIAR_SESION,
    PAGINA_INICIO,
    PAGINA_TURNOS,
} from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

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
                <div className="items">
                    <NavLink
                        to={PAGINA_INICIO}
                        className={({ isActive }) => (isActive ? 'item active' : 'item')}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to={PAGINA_TURNOS}
                        className={({ isActive }) => (isActive ? 'item active' : 'item')}
                    >
                        Turnos
                    </NavLink>
                    <NavLink
                        to={PAGINA_CARTILLA_ESPECIALISTAS}
                        className={({ isActive }) => (isActive ? 'item active' : 'item')}
                    >
                        Cartilla
                    </NavLink>
                </div>

                {isLoggedIn ? (
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                ) : (
                    <Button component={NavLink} to={PAGINA_INICIAR_SESION} variant="contained" color="primary">
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
