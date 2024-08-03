import axios from "axios";

const API_URL = 'http://localhost:5000/api/users'

/*
Service pour la gestion de l'authentification

On commence par inscrire un utilisateur
*/
const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData)
    return response.data
}

// Connexion d'un utilisateur
const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData)
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Déconnexion d'un utilisateur
const logout = () => {
    localStorage.removeItem('user')
}

export default { register, login, logout }