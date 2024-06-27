import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

class UsuarioService {

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    async getMisTurnos() {
        const token = this.obtenerToken();
        if (token == null) {
            return Promise.reject('No hay token');
        }
        return axios.get(`${apiUrl}/pacientes/mis/turnos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    obtenerToken() {
        const userStr = localStorage.getItem('user');
        let user: { token?: string } | null = null;
        if (!userStr) {
            return null;
        }
        user = JSON.parse(userStr);
        if (!user || !user.token) {
            return null;
        }
        return user.token;
    }

}

export default new UsuarioService();
