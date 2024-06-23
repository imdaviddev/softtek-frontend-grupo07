import axios from 'axios';
import { useEffect, useState } from 'react';
import { Especialista, Turno, UserData } from './types';

interface MainComponentProps {
  onUserData: (data: UserData) => void;
  onTurnos: (data: Turno[]) => void;
  onEspecialistas: (data: Especialista[]) => void;
}

const MainComponent: React.FC<MainComponentProps> = ({ onUserData, onTurnos, onEspecialistas }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [turnos, setTurnos] = useState<Turno[]>([]);
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
        onUserData(loginResponse.data);

        // Obtener listado de turnos
        const turnosResponse = await axios.get<Turno[]>('http://localhost:8080/pacientes/mis/turnos', {
          headers: {
            Authorization: `Bearer ${loginResponse.data.token}`
          }
        });
        setTurnos(turnosResponse.data);
        onTurnos(turnosResponse.data);

        // Obtener listado de especialistas
        const especialistasResponse = await axios.get<Especialista[]>('http://localhost:8080/especialistas');
        setEspecialistas(especialistasResponse.data);
        onEspecialistas(especialistasResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [onUserData, onTurnos, onEspecialistas]);

  return <p></p>; // Este componente no renderiza nada directamente
};

export default MainComponent;
