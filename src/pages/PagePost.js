import React from "react";
import { useParams } from "react-router-dom";
import Post from "../composants/Posts/Post";
import { Container } from "@mui/material";
import { Title } from "@mui/icons-material";

// Page pour afficher une publication spécifique
const PagePost = () => {
    const { id } = useParams()
    const post = {
        Title: 'Mon premier Post',
        content: 'Je suis un développeur et c\'est ma première publication',
        author: 'Joan Ndong'
    }

    return (
        <Container>
            <Post post={post} />
        </Container>
    )
}

export PagePost