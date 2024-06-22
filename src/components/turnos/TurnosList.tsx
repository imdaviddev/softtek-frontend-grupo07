import axios from 'axios';
import { useEffect, useState } from 'react';

interface Turno {
  id: number;
  motivoConsulta: string;
  fechaHoraCita: string;
  idMedicoEspecialista: number;
  // Agrega más propiedades según sea necesario
}

interface Especialista {
  id: number;
  nombre: string;
  especialidad: string;
  horariosConsulta: string;
  ubicacion: string;
  fechaCreacion: string;
}

interface UserData {
  nombre: string;
  dni: string;
  numeroCelular: string;
  email: string;
  token: string;
}

const TurnosList = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos de usuario
        const loginResponse = await axios.get<UserData>('http://localhost:8080/login', {
          params: {
            login: 'prueba@gmail.com',
            password: '123'
          }
        });
        setUserData(loginResponse.data);

        // Obtener listado de turnos
        const turnosResponse = await axios.get<Turno[]>('http://localhost:8080/pacientes/mis/turnos', {
          headers: {
            Authorization: `Bearer ${loginResponse.data.token}`
          }
        });
        setTurnos(turnosResponse.data);

        // Obtener listado de especialistas
        const especialistasResponse = await axios.get<Especialista[]>('http://localhost:8080/especialistas');
        setEspecialistas(especialistasResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData || !turnos.length || !especialistas.length) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Listado de Turnos</h1>
      <br></br>
      <div>
        <h2>Información del Usuario:</h2>
        <p>Nombre: {userData.nombre}</p>
        <p>DNI: {userData.dni}</p>
        <p>Número de Celular: {userData.numeroCelular}</p>
        <p>Email: {userData.email}</p>
        <br></br>
      </div>
      <div>
        <h2>Listado de Turnos:</h2>
        {turnos.map(turno => (
          <div key={turno.id}>
            <p>Turno N°: {turno.id}</p>
            <p>Motivo de Consulta: {turno.motivoConsulta}</p>
            <p>Fecha y Hora de la Cita: {new Date(turno.fechaHoraCita).toLocaleString()}</p>
            <p>ID del especialista: {1}</p>
            {especialistas.filter(especialista => especialista.id === 1).map(especialista => (
              <div key={especialista.id}>
                <h3>Información del Especialista:</h3>
                <p>Nombre: {especialista.nombre}</p>
                <p>Especialidad: {especialista.especialidad}</p>
                <p>Horarios de Consulta: {especialista.horariosConsulta}</p>
                <p>Ubicación: {especialista.ubicacion}</p>
                <p>Fecha de Creación: {especialista.fechaCreacion}</p>
                <br></br>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurnosList;
