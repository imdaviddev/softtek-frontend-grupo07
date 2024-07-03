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
import * as turnosService from '../../services/turnosService';
import { IMisTurnosResponse } from '../../models';
import { FechaTurnoCard } from '..';

const SolicitarTurno = () => {
    const [especialidades, setEspecialidades] = useState<string[]>([]);
    const [turnosDisponibles, setTurnosDisponibles] = useState<IMisTurnosResponse[]>([]);
    const [showTurnosGrid, setShowTurnosGrid] = useState(false); 
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            especialidad: '',
            motivo: ''
        }
    });
    const especialidadValue = watch('especialidad');
    const motivoValue = watch('motivo');

    const getTurnosDisponiblesPorEspecialidad = (especialidad: string) => {
        turnosService.getTurnosPorEspecialidad(especialidad)
            .then((turnos) => {
                setTurnosDisponibles(turnos);
                setShowTurnosGrid(true); 
            })
            .catch((error) => {
                console.error('Error fetching turnos:', error);
            });
    }

    const getEspecialidades = () => {
        turnosService.getEspecialidades()
            .then((especialidades) => {
                setEspecialidades(especialidades);
            })
            .catch((error) => {
                console.error('Error fetching especialidades:', error);
            });
    }

    const onSubmit = (data: any) => {
        getTurnosDisponiblesPorEspecialidad(data.especialidad); 
    };

    useEffect(() => {
        getEspecialidades();
    }, []);

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    width: '90%',
                    maxWidth:'800px',
                    margin: '0 auto',
                    mt: 5,
                }}
            >
                <CardContent>
                    <Typography fontSize={22}>Solicitar turno</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{gap: "10px", display: "flex", flexDirection: "column"}}>
                        <div style={{gap: "5px", display: "flex", flexDirection: "column"}}>
                            <Typography>Especialidad requerida</Typography>
                            <Controller
                                name="especialidad"
                                control={control}
                                rules={{ required: 'Debe seleccionar una especialidad' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        value={especialidadValue}
                                        onChange={(newValue) => field.onChange(newValue)}
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
                        <div style={{gap: "5px", display: "flex", flexDirection: "column"}}>
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
                    {turnosDisponibles.map((turno) => (
                        <FechaTurnoCard key={turno.id} day={turno.fechaHoraCita} specialist={turno.especialista.nombre} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default SolicitarTurno;
