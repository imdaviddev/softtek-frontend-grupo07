import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { blue } from "@mui/material/colors";
import axios from "axios";
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

export default function RecipeReviewCard() {
  const [userData, setUserData] = React.useState<UserData | null>(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>(
          "http://localhost:8080/login",
          {
            params: {
              login: "prueba@gmail.com",
              password: "123",
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Cargando...</p>;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {userData.nombre.charAt(0)}
          </Avatar>
        }
        title={userData.nombre}
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
}
