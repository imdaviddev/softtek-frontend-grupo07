import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function obtenerToken() {
    const userStr = localStorage.getItem('user');
    let user = null;
    if (!userStr) {
        return null;
    }
    try {
        user = JSON.parse(userStr);
    } catch (error) {
        console.error('Error parsing user object from localStorage:', error);
    }
    return user?.token || null;
}

export async function getMisTurnos() {
    const token = obtenerToken();
    if (!token) {
        return Promise.reject('No hay token');
    }
    try {
        const response = await axios.get(`${apiUrl}/pacientes/mis/turnos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching mis turnos:', error);
        throw error;
    }
}

export async function eliminarTurno(id: number) {
    const token = obtenerToken();
    if (!token) {
        return Promise.reject('No hay token');
    }
    try {
        const response = await axios.delete(`${apiUrl}/turnos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting turno:', error);
        throw error;
    }
}
