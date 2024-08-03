import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Container, Typography, Paper } from '@mui/material'

// Composant pour afficher le profil utilisateur
const Profile = () => {
    const [profile, setProfile] = useState(null)
    const { username } = useParams()

    // On récupère les informations du profil utilisateur
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/${username}`)
                setProfile(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchProfile()
    }, [username])

    if (!profile) {
        <div>Chargement...</div>
    }

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4">
                    {profile.username}
                </Typography>
                <Typography variant="body1">
                    {profile.email}
                </Typography>
            </Paper>
        </Container>
    )
}

export default Profile