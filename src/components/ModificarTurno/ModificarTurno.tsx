import { Button, Container, Grid, Select, MenuItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTurnoById, modificarTurno, crearTurno } from '../../services/usuarioService';
import { getEspecialistas } from '../../services/especialistaService';
import { IEspecialista } from '../../models';

const ModificarTurno = () => {
    const { turnoId } = useParams();
    const navigate = useNavigate();
    const [citaData, setCitaData] = useState({
        idMedicoEspecialista: '',
        motivoConsulta: '',
        fechaHoraCita: '',
    });
    const [especialistas, setEspecialistas] = useState<IEspecialista[]>([]);
    const [isNewTurno, setIsNewTurno] = useState<boolean>(true); // Para determinar si es un nuevo turno o modificación

    useEffect(() => {
        const loadData = async () => {
            try {
                if (turnoId) {
                    const data = await getTurnoById(Number(turnoId));
                    setCitaData(data);
                    setIsNewTurno(false);
                } else {
                    setIsNewTurno(true);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };
        loadData();
    }, [turnoId]);

    useEffect(() => {
        const loadEspecialistas = async () => {
            try {
                const especialistasData = await getEspecialistas();
                setEspecialistas(especialistasData);
            } catch (error) {
                console.error('Error loading especialistas:', error);
            }
        };
        loadEspecialistas();
    }, []);

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
            if (isNewTurno) {
                await crearTurno(citaData); // Lógica para crear un nuevo turno
                alert('Turno creado exitosamente');
            } else {
                await modificarTurno(Number(turnoId), citaData); // Lógica para modificar un turno existente
                alert('Turno modificado exitosamente');
            }
            navigate('/turnos');
        } catch (error) {
            console.error('Error modificando/creando el turno:', error);
            alert('Error al modificar/crear el turno');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {isNewTurno ? 'Crear Nuevo Turno' : 'Modificar Turno'}
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
                            label="Fecha y Hora"
                            name="fechaHoraCita"
                            type="text"
                            value={citaData.fechaHoraCita}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select
                            fullWidth
                            label="Especialista"
                            name="idMedicoEspecialista"
                            value={citaData.idMedicoEspecialista}
                            onChange={handleChange}
                            variant="outlined"
                        >
                            {especialistas.map(especialista => (
                                <MenuItem key={especialista.id} value={especialista.id}>
                                    {especialista.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            {isNewTurno ? 'Crear Turno' : 'Guardar Cambios'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ModificarTurno;
