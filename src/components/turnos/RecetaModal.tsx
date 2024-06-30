import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { jsPDF } from 'jspdf';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface BasicModalProps {
    open: boolean;
    handleClose: () => void;
    title: string;
    text: string;
}

export default function BasicModal({ open, handleClose, title, text }: BasicModalProps) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch((err) => {
                console.error('Error al copiar el texto: ', err);
            });
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text(title, 10, 10);
        doc.text(text, 10, 20);
        doc.save('AlMedin | Receta Medica.pdf');
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {text}
                </Typography>

                <Stack spacing={1} direction="row">
                    <Button variant="outlined" startIcon={<ContentCopyIcon />} onClick={handleCopy} sx={{ mt: 2, ml: 2}}>
                        Copiar Texto
                    </Button>
                    <Button variant="outlined" startIcon={<PictureAsPdfIcon />} onClick={handleDownloadPDF} sx={{ mt: 2, ml: 2 }}>
                        Descargar PDF
                    </Button>
                    <Button variant="outlined" onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
                        Cerrar
                    </Button>
                </Stack>

            </Box>
        </Modal>
    );
}
