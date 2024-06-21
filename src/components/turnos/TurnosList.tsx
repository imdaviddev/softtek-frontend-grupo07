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

export default function TurnosList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nombre y apellido" secondary="Lionel Messi" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PinRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DNI" secondary="99999999" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HealingRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medico Especialista" secondary="Dr. Luis Mendoza" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EditNoteRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Motivo de consulta" secondary="Dolor de panza" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fecha y hora de cita" secondary="Lunes 24 de Marzo, 18:30hs" />
      </ListItem>

    </List>
  );
}

/** 
 * Con datos reales
 * 
 * import React, { useEffect, useState } from 'react';
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
  medicoEspecialista: string;
  motivoConsulta: string;
  fechaHoraCita: string;
}

const TurnosList = () => {
  const [turno, setTurno] = useState<Turno | null>(null);

  useEffect(() => {
    const fetchTurno = async () => {
      try {
        const response = await axios.get('https://tu-endpoint.com/api/turnos/1'); // Reemplaza con tu endpoint
        setTurno(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del turno:', error);
      }
    };

    fetchTurno();
  }, []);

  if (!turno) {
    return <p>Cargando...</p>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
        <ListItemText primary="Medico Especialista" secondary={turno.medicoEspecialista} />
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
    </List>
  );
};

export default TurnosList;
**/
