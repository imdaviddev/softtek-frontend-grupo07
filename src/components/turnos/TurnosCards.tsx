import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import TurnosList from "../turnos/TurnosList";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function TurnosCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N1
          </Avatar>
        }
        title="Turno N° 1"
        subheader="Hospital San Martin"
      />
      <CardContent>
        <TurnosList />
      </CardContent>

      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button>Modificar</Button>
            <Button>Eliminar</Button>
          </ButtonGroup>
        </Box>
      </CardActions>
    </Card>
  );
}