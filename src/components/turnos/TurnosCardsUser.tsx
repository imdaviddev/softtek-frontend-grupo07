import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { blue } from "@mui/material/colors";
import * as React from "react";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PinRoundedIcon from "@mui/icons-material/PinRounded";
import Avatar from "@mui/material/Avatar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import perfilImage from "../../assets/perfil.jpg";
import { UserData } from "./types";

interface TurnosCardsUserProps {
  userData: UserData;
}

const TurnosCardsUser: React.FC<TurnosCardsUserProps> = ({ userData }) => {
  return (
    <Card sx={{ minWidth: 345, margin: '25px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {userData.nombre.charAt(0)}
          </Avatar>
        }
        title=""
      />
      <CardMedia
        component="img"
        image={perfilImage}
        alt="User Perfil"
        sx={{
          width: "50%",
          height: "auto",
          margin: "0 auto"
        }}
      />
      <CardContent>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircleRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Nombre y Apellido"
              secondary={userData.nombre}
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PinRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="DNI" secondary={userData.dni} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroidRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Numero celular"
              secondary={userData.numeroCelular}
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AlternateEmailRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary={userData.email} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default TurnosCardsUser;
