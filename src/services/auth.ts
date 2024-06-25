import axios from 'axios';

const API_URL = 'http://localhost:8080'

interface LoginResponse {
    success: boolean;
    data?: any;
    error?: string;
}

class AuthService {
    async login(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await axios.get(`${API_URL}/login`, {
                params: {
                    login: email,
                    password: password
                }
            });

            if (response.status === 200 && response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                return { success: true, data: response.data };
            }

            return { success: false, error: 'Error desconocido' };

        }
        catch (error: any) {
            if (error.response && error.response.status === 401) {
                return { success: false, error: 'Usuario o contraseña incorrectos' };
            }
            return { success: false, error: 'Ha ocurrido un error en el inicio de sesión' };
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

}

export default new AuthService();
