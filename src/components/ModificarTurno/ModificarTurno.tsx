import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const fetchCitaData = async () => {
  // llamar al back
  return {
    motivoConsulta: 'Chequeo general',
    fecha: '2024-07-10',
    hora: '10:00',
    nombreEspecialista: 'Dr. Pérez'
  };
};

const ModificarTurno = () => {
  const [citaData, setCitaData] = useState({
    motivoConsulta: '',
    fecha: '',
    hora: '',
    nombreEspecialista: ''
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCitaData();
      setCitaData(data);
    };
    loadData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCitaData({
      ...citaData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos modificados al backend
    console.log('Datos de la cita modificados:', citaData);
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
              name="fecha"
              type="date"
              value={citaData.fecha}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Hora"
              name="hora"
              type="time"
              value={citaData.hora}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre del Especialista"
              name="nombreEspecialista"
              value={citaData.nombreEspecialista}
              onChange={handleChange}
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
