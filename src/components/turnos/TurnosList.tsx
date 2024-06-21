import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import HealingRoundedIcon from '@mui/icons-material/HealingRounded';
import PinRoundedIcon from '@mui/icons-material/PinRounded';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Turno {
  nombrePaciente: string;
  dniPaciente: string;
  idMedicoEspecialista: string;
  motivoConsulta: string;
  fechaHoraCita: string;
}

const TurnosList = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);

  useEffect(() => {
    const loginAndFetchTurnos = async () => {
      try {
        // Realizar la solicitud de inicio de sesión
        const loginResponse = await axios.get('http://localhost:8080/login', {
          params: {
            login: 'prueba@gmail.com', // Reemplaza con el correo del usuario
            password: '123' // Reemplaza con la contraseña del usuario
          }
        });
        const token = loginResponse.data.token;

        // Realizar la solicitud de turnos utilizando el token JWT obtenido
        const turnosResponse = await axios.get('http://localhost:8080/pacientes/mis/turnos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Establecer los turnos en el estado del componente
        setTurnos(turnosResponse.data);
      } catch (error) {
        console.error('Error al obtener los datos de los turnos:', error);
      }
    };

    loginAndFetchTurnos();
  }, []);

  if (turnos.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {turnos.map((turno, index) => (
        <div key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircleRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nombre y apellido" secondary={turno.nombrePaciente} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PinRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="DNI" secondary={turno.dniPaciente} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HealingRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Medico Especialista" secondary={turno.idMedicoEspecialista} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EditNoteRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Motivo de consulta" secondary={turno.motivoConsulta} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessTimeRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Fecha y hora de cita" secondary={turno.fechaHoraCita} />
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default TurnosList;
