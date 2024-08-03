import React from "react";
import { Paper, Typography } from "@mui/material";

// Composant pour afficher une publication
const Post = ({post}) => {
    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
            <Typography variant="caption">Posté par {post.author}</Typography>
        </Paper>
    )
}

export default Post