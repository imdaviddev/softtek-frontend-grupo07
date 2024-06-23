import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AddLocationRoundedIcon from '@mui/icons-material/AddLocationRounded';
import HealingRoundedIcon from '@mui/icons-material/HealingRounded';

import { Especialista, Turno } from './types';

interface TurnosCardsInfoProps {
  turno: Turno;
  especialista: Especialista;
}

const TurnosCardsInfo: React.FC<TurnosCardsInfoProps> = ({ turno, especialista }) => {
  return (
  <React.Fragment>
    <CardContent>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HealingRoundedIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medico Especialista" secondary={especialista.nombre} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EditNoteRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Motivo de la consulta" secondary={turno.motivoConsulta} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AddLocationRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ubicacion" secondary={especialista.ubicacion} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeRoundedIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fecha y hora de la cita" secondary={turno.fechaHoraCita} />
      </ListItem>

    </CardContent>

    <CardActions>
      <Button size="small">Modificar</Button>
      <Button size="small">Eliminar</Button>
    </CardActions>
    
  </React.Fragment>
);};

export default TurnosCardsInfo;
