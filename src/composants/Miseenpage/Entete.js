import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import authService from '../../services/authService'

// Composant pour afficher l'en-tete de la page
const Entete = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    // Gestion de la déconnexion d'un utilisateur
    const handleLogout = () => {
        authService.logout()
        window.location.reload()
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    DevConnect
                </Typography>
                <Button color="inherit" component={Link} to="/">Accueil</Button>
                {user ? (
                    <>
                        <Button color="inherit" component={Link} to={`/profile/${user.username}`}>Profile</Button>
                        <Button color="inherit" onClick={handleLogout}>Déconnexion</Button>
                    </>
                ): (
                    <>
                        <Button color="inherit" component={Link} to='/login'>Se Connecter</Button>
                        <Button color="inherit" component={Link} to='/register'>S'inscrire</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Entete