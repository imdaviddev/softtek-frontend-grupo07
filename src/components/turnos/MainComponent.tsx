import axios from 'axios';
import { useEffect, useState } from 'react';
import EspecialistasList from './EspecialistasList';
import TurnosList from './TurnosList';
import UserInfo from './UserInfo';
import { Especialista, Turno, UserData } from './types';

const MainComponent = () => {
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
    return <p></p>;
  }

  return (
    <div>
      <h1>Listado de Turnos</h1>
      <br />
      <UserInfo userData={userData} />
      <TurnosList turnos={turnos} especialistas={especialistas} />
      <EspecialistasList especialistas={especialistas} />
    </div>
  );
};

export default MainComponent;
