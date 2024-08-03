import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { TextField, Button, Container, Typography } from "@mui/material";
import authService from '../../services/authService'

// Composant pour la connexion des utilisateurs
const SeConnecter = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const history = useHistory()

    // Mise à jour de l'état du formulaire
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Soumission du formulaire de connexion
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.login(form)
            history.push('/')
        } catch (error) {
            console.error(error);
            
        }
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center">
                SeConnecter
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="outlined" color="primary" fullWidth>
                    SeConnecter
                </Button>
            </form>
        </Container>
     )
}

export default SeConnecter