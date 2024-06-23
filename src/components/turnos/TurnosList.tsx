import React from 'react';
import { Turno, Especialista } from './types';

interface TurnosListProps {
  turnos: Turno[];
  especialistas: Especialista[];
}

const TurnosList: React.FC<TurnosListProps> = ({ turnos, especialistas }) => {
  return (
    <div>
      {turnos.map(turno => (
        <div key={turno.id}>
          <h2>Turno N°: {turno.id}</h2>
          <p>Motivo de Consulta: {turno.motivoConsulta}</p>
          <p>Fecha y Hora de la Cita: {new Date(turno.fechaHoraCita).toLocaleString()}</p>
          <p>ID del especialista: {turno.idMedicoEspecialista}</p>
          {especialistas.filter(especialista => especialista.id === turno.idMedicoEspecialista).map(especialista => (
            <div key={especialista.id}>
              <h3>Información del Especialista:</h3>
              <p>Nombre: {especialista.nombre}</p>
              <p>Especialidad: {especialista.especialidad}</p>
              <p>Horarios de Consulta: {especialista.horariosConsulta}</p>
              <p>Ubicación: {especialista.ubicacion}</p>
              <p>Fecha de Creación: {especialista.fechaCreacion}</p>
              <br />
            </div>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
};

export default TurnosList;
