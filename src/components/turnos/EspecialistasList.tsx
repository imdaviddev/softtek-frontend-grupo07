import React from 'react';
import { Especialista } from './types';

interface EspecialistasListProps {
  especialistas: Especialista[];
}

const EspecialistasList: React.FC<EspecialistasListProps> = ({ especialistas }) => {
  return (
    <div>
      <h2>Lista de Especialistas:</h2>
      {especialistas.map(especialista => (
        <div key={especialista.id}>
          <h3>{especialista.nombre}</h3>
          <p>Especialidad: {especialista.especialidad}</p>
          <p>Horarios de Consulta: {especialista.horariosConsulta}</p>
          <p>Ubicación: {especialista.ubicacion}</p>
          <p>Fecha de Creación: {especialista.fechaCreacion}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default EspecialistasList;
