import { Grid } from '@mui/material';
import TurnosCardsUser from '../../components/UserCard';
import MisTurnos from '../../components/turnos/MisTurnos';

const Turnos = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
        <Grid item xs={5} md={2}>
          <TurnosCardsUser />
        </Grid>
        <Grid item xs={5} md={9}>
          <MisTurnos />
        </Grid>
      </Grid>
    </div>
  );
};

export default Turnos;
