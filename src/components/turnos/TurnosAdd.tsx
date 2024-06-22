import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import HealingRoundedIcon from '@mui/icons-material/HealingRounded';
import PinRoundedIcon from '@mui/icons-material/PinRounded';

export default function TurnosAdd() {
  const [formValues, setFormValues] = useState({
    nombrePaciente: '',
    dniPaciente: '',
    idMedicoEspecialista: '',
    motivoConsulta: '',
    fechaHoraCita: '',
    otroCampo: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://tu-endpoint.com/api/turnos', formValues);
      console.log('Turno agregado:', response.data);
    } catch (error) {
      console.error('Error al agregar el turno:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ maxWidth: 600 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircleRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="nombrePaciente"
                name="nombrePaciente"
                label="Nombre Paciente"
                variant="standard"
                value={formValues.nombrePaciente}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PinRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="dniPaciente"
                name="dniPaciente"
                label="DNI Paciente"
                variant="standard"
                value={formValues.dniPaciente}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <HealingRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="idMedicoEspecialista"
                name="idMedicoEspecialista"
                label="ID Médico Especialista"
                variant="standard"
                value={formValues.idMedicoEspecialista}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <EditNoteRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="motivoConsulta"
                name="motivoConsulta"
                label="Motivo de Consulta"
                variant="standard"
                value={formValues.motivoConsulta}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccessTimeRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="fechaHoraCita"
                name="fechaHoraCita"
                label="Fecha y Hora de Cita"
                variant="standard"
                value={formValues.fechaHoraCita}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircleRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="otroCampo"
                name="otroCampo"
                label="Otro Campo"
                variant="standard"
                value={formValues.otroCampo}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button type="submit" variant="contained" color="primary">
                Agregar Turno
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
