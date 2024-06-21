import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const fetchTurnos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/turnos');
        setTurnos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los turnos:', error);
      }
    };

    fetchTurnos();
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
