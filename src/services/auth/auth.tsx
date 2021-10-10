import API from '../api';

export const apiLogin = (userData: any) => API.post('/auth/login', userData);
export const apiGetUser = () => {
    const token = localStorage.getItem('auth_token')
    return API.get("/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
