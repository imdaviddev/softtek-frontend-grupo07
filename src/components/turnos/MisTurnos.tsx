import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { eliminarTurno, getMisTurnos } from "../../services/usuarioService";
import RecetaModal from "./RecetaModal";
import { IMisTurnosResponse } from "../../models";
import { userInfo } from 'os';

const MisTurnosTable = () => {
    const [rows, setRows] = useState<IMisTurnosResponse[]>([]);
    const [error, setError] = useState<string>("");

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', text: '' });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTurnoId, setSelectedTurnoId] = useState<number | null>(null);

    const navigate = useNavigate(); // Crear una instancia de useNavigate

    const handleCloseModal = () => setModalOpen(false);
    const handleCloseDialog = () => setDialogOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMisTurnos();
                setRows(response);
            } catch (error) {
                setError("Error al cargar los turnos");
            }
        };
        fetchData();
    }, []);

    if (error || !rows) {
        return <p>{error}</p>;
    }

    if (rows.length === 0) {
        return <p>No posee ningun turno</p>;
    }

    const handleEliminar = async () => {
        if (selectedTurnoId !== null) {
            try {
                await eliminarTurno(selectedTurnoId);
                const updatedRows = rows.filter(row => row.id !== selectedTurnoId);
                setRows(updatedRows);
            } catch (error) {
                console.error("Error al eliminar el turno:", error);
            } finally {
                setSelectedTurnoId(null);
                handleCloseDialog();
            }
        }
    };

    const handleEliminarClick = (turnoId: number) => {
        setSelectedTurnoId(turnoId);
        setDialogOpen(true);
    };

    const handleEditarClick = (turnoId: number) => {
        navigate(`/turnos-modificar/${turnoId}`);
    };

    const sendEmail = async (turno: IMisTurnosResponse) => {
        try {
            const templateParams = {
                to_email: `prueba@gmail.com`, // Correo del usuario
                subject: `Detalles del Turno N°${turno.id}`,
                message: `
                    Motivo de Consulta: ${turno.motivoConsulta}
                    Fecha y Hora de la Cita: ${new Date(turno.fechaHoraCita).toLocaleString()}
                    Nombre del Especialista: ${turno.especialista?.nombre}
                `
            };
            await emailjs.send(
                'service_13wchd7', // Service ID
                'template_hzznazo', // Template ID
                templateParams,
                '2mU4JfYEJfiZI8udF' // User ID
            );
            alert('Correo enviado exitosamente!');
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            alert('Error al enviar el correo.');
        }
    };

    function ver_receta(receta: any) {
        setModalContent({
            title: 'Detalles de la Receta',
            text: ` ${receta.descripcion}`,
        });
        setModalOpen(true);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "10%" }}>Turno N°</TableCell>
                            <TableCell style={{ width: "20%" }}>Motivo de Consulta</TableCell>
                            <TableCell style={{ width: "20%" }}>Fecha y Hora de la Cita</TableCell>
                            <TableCell style={{ width: "20%" }}>Nombre del especialista</TableCell>
                            <TableCell style={{ width: "30%" }}>Acciones</TableCell>
                            <TableCell>Receta</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.motivoConsulta}</TableCell>
                                <TableCell>{new Date(row.fechaHoraCita).toLocaleString()}</TableCell>
                                <TableCell>{row.especialista?.nombre}</TableCell>
                                <TableCell>
                                    <Stack spacing={2} direction="row">
                                        <Button size="small" variant="outlined" startIcon={<EditIcon />} onClick={() => handleEditarClick(row.id)}>
                                            Editar
                                        </Button>
                                        <Button size="small" variant="outlined" startIcon={<DeleteForeverIcon />} onClick={() => handleEliminarClick(row.id)}>
                                            Eliminar
                                        </Button>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    {row.receta ? (
                                        <Button size="small" variant="outlined" startIcon={<DownloadIcon />} onClick={() => ver_receta(row.receta)}>
                                            Disponible
                                        </Button>
                                    ) : (
                                        <Button size="small" variant="outlined" disabled>
                                            No disponible
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <RecetaModal
                open={modalOpen}
                handleClose={handleCloseModal}
                title={modalContent.title}
                text={modalContent.text}
            />
            <Dialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmar eliminacion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea eliminar el turno?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleCloseDialog}>Cancelar</Button>
                    <Button variant="outlined" startIcon={<DeleteForeverIcon />} onClick={handleEliminar} autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MisTurnosTable;
