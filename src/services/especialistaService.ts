import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

class EspecialistaService {
    async getEspecialista(id: number) {
        try {
            const response = await axios.get(`${apiUrl}/especialistas/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching especialista with ID ${id}:`, error);
        }
    }
}

export default new EspecialistaService
