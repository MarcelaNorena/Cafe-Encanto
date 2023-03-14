import React from 'react'
import { Container, Box, AppBar, Toolbar, Typography, Button } from '@mui/material'

function Layout({ children }) {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="https://tu-logo-aqui.png" alt="Logo de la tienda de café" width="100" height="50" />
                    </Typography>
                    <Button color="inherit">Menu</Button>
                    <Button color="inherit">Nuestro Café</Button>
                    <Button color="inherit">Noticias</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl">
                <Box mt={8}>
                    {children}
                </Box>
            </Container>
        </>
    )
}

export default Layout

