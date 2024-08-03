import React, { useState } from "react"
import {useHistory} from 'react-router-dom'
import { TextField, Button, Container, Typography } from "@mui/material"
import authService from '../../serivces/authService'

// Composant d'enregistrement d'utilisateur
const Sinscrire = () => {
    // Etat local pour gérer les valeurs du formulaire
    const [form, setForm] = useState({ username: '', email: '', password: '' })
    const history = useHistory()

    // Gestion des changements dans les champs de formulaire
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Gestion de la soumission du formulaire
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await authService.register(form)
            history.push('/login')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center">
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    label="Username"
                    fullWidth
                    margin="normal"
                    variant="outlined" 
                />
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
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    S'inscrire
                </Button>
            </form>
        </Container>
    )
}

export default Sinscrire