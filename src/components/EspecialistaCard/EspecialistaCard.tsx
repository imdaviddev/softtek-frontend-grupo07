import React from 'react';
import './styles.css'; // Archivo CSS para los estilos
import { IEspecialista } from '../../mocks/especialistas';

interface Props {
    especialista: IEspecialista;
}

const EspecialistaCard: React.FC<Props> = ({especialista}) => {
    return (
        <div className="especialista-card sombra radius15 fondoceleste">
            <div className="imagen">
            </div>
            <div className="contenido-principal">
                <h2 className="titulo">{especialista.nombre.toUpperCase()}</h2>
                <ul>
                    <li className="direccion">{especialista.ubicacion}</li>
                </ul>
                <div className="badges-container">
                    <span className="badge">{especialista.especialidad.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
}

export default EspecialistaCard;
