import axios from 'axios';
import { IEspecialista } from '../models';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getEspecialista(id: number): Promise<IEspecialista> {
    try {
        const response = await axios.get(`${apiUrl}/especialistas/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching especialista with ID ${id}:`, error);
        throw error; 
    }
}

export async function getEspecialistas(): Promise<IEspecialista[]> {
    try {
        const response = await axios.get(`${apiUrl}/especialistas`);
        return response.data;
    } catch (error) {
        console.error(`Error fetchig especialistas`, error);
        throw error; 
    }
}