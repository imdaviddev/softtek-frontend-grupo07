import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { useParams } from 'react-router-dom'; // Importar useParams
import { getTurnoById, modificarTurno } from '../../services/usuarioService'; // Ajusta la ruta según sea necesario

const ModificarTurno = () => {
  const { turnoId } = useParams(); // Obtener el turnoId de la URL
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
    e.preventDefault();
    try {
      await modificarTurno(turnoId, citaData);
      console.log('Datos de la cita modificados correctamente:', citaData);
      // Añade lógica adicional como redirigir a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error modificando turno:', error);
      // Manejo de errores, como mostrar un mensaje al usuario
    }
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
