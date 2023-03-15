import React from 'react'
import { Container, Typography, Box, Paper, CardMedia } from '@mui/material'
import Banner from '../../assets/banner.jpeg'
import './index.css'

function NuestroCafe() {
    return (
        <Box sx={{ bgcolor: '#f9f9f9' }}>
            <CardMedia
                component="img"
                image={Banner}
                alt="Coffee Banner"
            />
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h3" sx={{ mb: 4 }}>
                    CAFE ENCANTO
                </Typography>
                <Paper sx={{ p: 4 }}>
                    <Typography variant="body1">
                    Somos una cadena de cafeterías reconocidas por su calidad y buen ambiente a nivel regional, teniendo presencia en diferentes lugares de la región Colombiana. Con un equipo de trabajo sólido y profesional, brindando a nuestros CLIENTES el mejor lugar para disfrutar de la bebida más popular del mundo, el café, ofreciendo los Mejores productos y la más alta calidad de SERVICIO
                    </Typography>
                </Paper>
            </Container>
        </Box>
    )
}

export default NuestroCafe
