import { useEffect, useState } from "react";
import { getMisTurnos, eliminarTurno } from "../../services/usuarioService";
import { MisTurnosResponse } from "./types";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/material/Button';
import Table from "@mui/joy/Table";
import DownloadIcon from '@mui/icons-material/Download';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import RecetaModal from "./RecetaModal";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from 'emailjs-com';

const MisTurnosTable = () => {
    const [rows, setRows] = useState<MisTurnosResponse[]>([]);
    const [error, setError] = useState<string>("");

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', text: '' });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTurnoId, setSelectedTurnoId] = useState<number | null>(null);

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

    const sendEmail = async (turno: MisTurnosResponse) => {
        try {
            const templateParams = {
                to_email: "prueba@gmail.com", // Correo del usuario
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
            <Table hoverRow>
                <thead>
                    <tr>
                        <th style={{ width: "7%" }}>Turno N°</th>
                        <th>Motivo de Consulta</th>
                        <th>Fecha y Hora de la Cita</th>
                        <th>Nombre del especialista</th>
                        <th style={{ width: "30%" }}>Acciones</th>
                        <th>Receta</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.motivoConsulta}</td>
                            <td>{new Date(row.fechaHoraCita).toLocaleString()}</td>
                            <td>{row.especialista?.nombre}</td>
                            <td>
                                <ButtonGroup spacing="0.2rem" aria-label="spacing button group" >
                                    
                                    <Button size="small" variant="outlined" startIcon={<EditIcon />} onClick={function () { }}>
                                        Editar
                                    </Button>
                                    
                                    <Button size="small" variant="outlined" startIcon={<DeleteForeverIcon />} onClick={() => handleEliminarClick(row.id)}>
                                        Eliminar
                                    </Button>
                                    
                                    <Button size="small" variant="outlined" startIcon={<SendIcon />} onClick={() => sendEmail(row)}>
                                        Enviar Correo
                                    </Button>

                                </ButtonGroup>
                            </td>
                            <td>
                                {row.receta ? (
                                    <Button size="small" variant="outlined" startIcon={<DownloadIcon />} onClick={() => ver_receta(row.receta)} >
                                        Disponible
                                    </Button>
                                ) : (
                                    <Button size="small" variant="outlined" disabled>
                                        Aun no cargada
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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
