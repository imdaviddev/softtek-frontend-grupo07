import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainComponent from "./MainComponent";
import TurnosCardsUser from "./TurnosCardsUser";
import TurnosCardsInfo from "./TurnosCardsInfo";
import { UserData, Turno, Especialista } from "./types";

const Turnos = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {userData && <TurnosCardsUser userData={userData} />}
        </Grid>

        <Grid item xs={8}>
          {turnos.length > 0 &&
            especialistas.length > 0 &&
            turnos.map((turno, index) => (
              <TurnosCardsInfo
                key={index}
                turno={turno}
                especialista={especialistas[index % especialistas.length]}
              />
            ))}
        </Grid>
        <MainComponent
          onUserData={setUserData}
          onTurnos={setTurnos}
          onEspecialistas={setEspecialistas}
        />
      </Grid>
    </Box>
  );
};

export default Turnos;
