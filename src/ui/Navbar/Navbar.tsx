import React, { useState } from 'react';
import './styles.css';

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
                    <div className="item">
                        Inicio
                    </div>
                    <div className="item">
                        Turnos
                    </div>
                </div>

                <div className="login" onClick={handleToggleMenuBtn}>
                    Iniciar Sesion
                </div>
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
