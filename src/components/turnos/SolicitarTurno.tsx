import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import CardActions from '@mui/joy/CardActions';
import * as turnosService from '../../services/turnosService';

const SolicitarTurno = () => {
    const [especialidades, setEspecialidades] = useState([]);
    const [turnosDisponibles, setTurnosDisponibles] = useState([]);
    const [showTurnosGrid, setShowTurnosGrid] = useState(false); // Estado para controlar la visibilidad del grid
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            especialidad: '',
            motivo: ''
        }
    });
    const especialidadValue = watch('especialidad');
    const motivoValue = watch('motivo');

    const getTurnosDisponiblesPorEspecialidad = (especialidad) => {
        turnosService.getTurnosPorEspecialidad(especialidad)
            .then((turnos) => {
                setTurnosDisponibles(turnos);
                setShowTurnosGrid(true); // Mostrar el grid después de obtener los turnos
                console.log('Turnos disponibles:', turnos);
            })
            .catch((error) => {
                console.error('Error fetching turnos:', error);
            });
    }

    const getEspecialidades = () => {
        turnosService.getEspecialidades()
            .then((especialidades) => {
                setEspecialidades(especialidades);
                console.log('Especialidades:', especialidades);
            })
            .catch((error) => {
                console.error('Error fetching especialidades:', error);
            });
    }

    useEffect(() => {
        getEspecialidades();
    }, []);

    const onSubmit = data => {
        getTurnosDisponiblesPorEspecialidad(data.especialidad); // Llamar a la función con la especialidad seleccionada
        console.log('Form data:', data);
    };

    const renderCard = (day, specialist) => (
        <Card variant="outlined" sx={{ mt: 2 }} key={`${day}-${specialist}`}>
            <CardContent>
                <Typography>{day}</Typography>
                <Typography>{specialist}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="solid">Solicitar</Button>
            </CardActions>
        </Card>
    );

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    width: '75%',
                    margin: '0 auto',
                    mt: 5,
                }}
            >
                <CardContent>
                    <Typography>Solicitar turno</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Typography>Especialidad requerida</Typography>
                            <Controller
                                name="especialidad"
                                control={control}
                                rules={{ required: 'Debe seleccionar una especialidad' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        value={especialidadValue}
                                        onChange={(event, newValue) => field.onChange(newValue)}
                                    >
                                        {especialidades.map((especialidad) => (
                                            <Option key={especialidad} value={especialidad}>
                                                {especialidad}
                                            </Option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.especialidad && (
                                <Typography color="danger">{errors.especialidad.message}</Typography>
                            )}
                        </div>
                        <div>
                            <Typography>Motivo de consulta</Typography>
                            <Controller
                                name="motivo"
                                control={control}
                                rules={{
                                    required: 'Debe ingresar un motivo de consulta',
                                    maxLength: {
                                        value: 50,
                                        message: 'El motivo no puede exceder los 50 caracteres'
                                    }
                                }}
                                render={({ field }) => (
                                    <Textarea {...field} minRows={2} />
                                )}
                            />
                            {errors.motivo && (
                                <Typography color="danger">{errors.motivo.message}</Typography>
                            )}
                        </div>
                        <Button
                            type="submit"
                            sx={{ mt: 2 }}
                            disabled={!especialidadValue || motivoValue.length > 500}
                        >
                            Buscar
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {showTurnosGrid && (
                <Grid container spacing={2} sx={{ width: '75%', margin: '0 auto', mt: 3 }}>
                    {turnosDisponibles.map((turno, index) => (
                        <Grid key={index} xs={12} sm={6}>
                            {renderCard(turno.fechaHoraCita, turno.especialista.nombre)}
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default SolicitarTurno;
