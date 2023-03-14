import React from 'react'
import Logo from '../../assets/logo.png'
import { Container, Box, AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material'



function Layout({ children }) {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#8C5042' }}>
                <Toolbar>
                    <Avatar sx={{ width: 50, height: 50, mr: 2 }}>
                        <img src={Logo} alt="Logo de la tienda de café" width="50" height="50" />
                    </Avatar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Cafe Expression
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

