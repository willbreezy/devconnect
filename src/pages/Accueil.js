import React from "react";
import ListePost from "../composants/Posts/ListePost";
import { Container, Typography } from "@mui/material";

// Page d'accueil
const Accueil = () => {
    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Bienvenue sur DevConnect
            </Typography>
            <ListePost />
        </Container>
    )
}

export default Accueil