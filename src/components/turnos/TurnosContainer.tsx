import Grid from "@mui/material/Grid";
import TurnosCardsUser from "./TurnosCardsUser";

import "./componentsTurnos.css"

export default function TurnosContainer() {
  // Aquí puedes añadir más cards en el futuro
  const cards = [1, 2, 3, 4].map((_, index) => (
    <Grid item key={index}>
      <TurnosCardsUser />
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "50vh", padding: 2 }}
    >
      {cards}
    </Grid>
  );
}