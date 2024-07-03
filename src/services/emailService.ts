import emailjs from 'emailjs-com';
import { MisTurnosReponse } from '../models';

export const sendEmailTurno = async (turno: MisTurnosResponse) => {
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
        await EmailJSResponseStatus.send(
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