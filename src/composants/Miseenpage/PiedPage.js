import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

// Composant pour le pied de page
const PiedPage = () => {
    return (
        <AppBar position="static" style={{ top:'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="body1" style={{ flexGrow: 1, textAlign:'center' }}>
                    &copy; 2024 DevConnect by Joan W. AYISSI NDONG, Developer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default PiedPage