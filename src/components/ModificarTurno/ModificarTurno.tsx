import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTurnoById, modificarTurno } from '../../services/usuarioService';

const ModificarTurno = () => {
  const { turnoId } = useParams();
  const [citaData, setCitaData] = useState({
    motivoConsulta: '',
    fechaHoraCita: '',
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getTurnoById(turnoId);
        setCitaData(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, [turnoId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCitaData({
      ...citaData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    // falta llamar a la funcion modificarTurno
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Modificar Turno
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Motivo de Consulta"
              name="motivoConsulta"
              value={citaData.motivoConsulta}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Fecha"
              name="fechaHoraCita"
              type="text"
              value={citaData.fechaHoraCita}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Guardar Cambios
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ModificarTurno;
