import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
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

const card = (
  <React.Fragment>
    <CardContent>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EditNoteRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Motivo de la consulta" secondary="123" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeRoundedIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fecha y hora de la cita" secondary="123" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HealingRoundedIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medico Especialista" secondary="123" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AddLocationRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ubicacion" secondary="123" />
      </ListItem>
    </CardContent>

    <CardActions>
      <Button size="small">Modificar</Button>
      <Button size="small">Eliminar</Button>
    </CardActions>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
