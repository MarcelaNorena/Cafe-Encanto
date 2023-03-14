import React from 'react'
import { Container, Typography, Box, Paper, CardMedia } from '@mui/material'
import Banner from '../../assets/banner.jpeg'
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
                    Nuestro Café Orgánico
                </Typography>
                <Paper sx={{ p: 4 }}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in convallis diam, a egestas ex. Fusce interdum dui lectus, in viverra metus luctus vitae. Sed at ultricies velit. Nulla facilisi. Integer fringilla congue est vel commodo. Sed auctor gravida nibh, in molestie neque bibendum vel. Vivamus vitae metus aliquam, euismod metus a, dictum sapien.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in convallis diam, a egestas ex. Fusce interdum dui lectus, in viverra metus luctus vitae. Sed at ultricies velit. Nulla facilisi. Integer fringilla congue est vel commodo. Sed auctor gravida nibh, in molestie neque bibendum vel. Vivamus vitae metus aliquam, euismod metus a, dictum sapien.
                    </Typography>
                </Paper>
            </Container>
        </Box>
    )
}

export default NuestroCafe
