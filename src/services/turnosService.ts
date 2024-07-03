import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getEspecialidades() {
    try {
        const response = await axios.get(`${apiUrl}/especialistas/especialidades`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching especialidades:', error);
        throw error;
    }
}

export async function getTurnosPorEspecialidad(especialidad: string) {
    try {
        const response = await axios.get(`${apiUrl}/turnos/especialidad/${especialidad}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching turnos:', error);
        throw error;
    }
}