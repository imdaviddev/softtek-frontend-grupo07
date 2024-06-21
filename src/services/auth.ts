import axios from 'axios';

const API_URL = 'http://localhost:8080'

class AuthService {
    async login(email: string, password: string) {
        const response = await axios.get(`${API_URL}/login`, {
            params: {
                login: email,
                password: password
            }
        });
        console.log(response)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
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
