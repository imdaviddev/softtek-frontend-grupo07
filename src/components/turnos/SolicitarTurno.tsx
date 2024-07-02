import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import CardActions from '@mui/joy/CardActions';


const SolicitarTurno = () => {
    const renderCard = (day, specialist) => (
        <Card variant="outlined" sx={{ mt: 2 }}>
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
                    mt: 5, // Añadir margen superior para separarlo del borde superior
                }}
            >
                <CardContent>
                    <Typography>Solicitar turno</Typography>
                    <div>
                        <Typography>Especialidad requerida</Typography>
                        <Select defaultValue="dog">
                            <Option value="dog">Dog</Option>
                            <Option value="cat">Cat</Option>
                        </Select>
                        <Typography>Motivo de consulta</Typography>
                        <Textarea minRows={2} />
                        <Button sx={{ mt: 2 }}>Buscar</Button>
                    </div>
                </CardContent>
            </Card>

            <Grid container spacing={2} sx={{ width: '75%', margin: '0 auto', mt: 3 }}>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
                <Grid xs={12} sm={6}>
                    {renderCard('Martes 18', 'Especialista Juan')}
                </Grid>
            </Grid>
        </>
    );
};

export default SolicitarTurno;
