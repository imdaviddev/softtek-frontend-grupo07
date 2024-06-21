import React, { useState } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { PAGINA_CARTILLA_ESPECIALISTAS, PAGINA_INICIAR_SESION, PAGINA_INICIO, PAGINA_TURNOS } from '../../routes/routes';

const Navbar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenuBtn = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className="navbar">
            <div className="logo">
                AlMedin
            </div>

            <div className={`toggle-menu ${toggleMenu ? "visible" : "oculto"}`}>
                <div className="items">
                    <NavLink to={PAGINA_INICIO} className={({ isActive}) =>
                        isActive ? "item active" : "item"
                    }>
                        Inicio
                    </NavLink>
                    <NavLink to={PAGINA_TURNOS} className={({ isActive}) =>
                        isActive ? "item active" : "item"
                    }>
                        Turnos
                    </NavLink>
                    <NavLink to={PAGINA_CARTILLA_ESPECIALISTAS} className={({ isActive}) =>
                        isActive ? "item active" : "item"
                    }>
                        Cartilla
                    </NavLink>
                </div>

                <NavLink to={PAGINA_INICIAR_SESION} className="login">Iniciar Sesion</NavLink>
            </div>

            <div className={`toggle-menu-btn ${toggleMenu ? 'cerrar' : 'visible'}`} onClick={handleToggleMenuBtn}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;
