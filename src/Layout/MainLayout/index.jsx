import React from 'react'
import Logo from '../../assets/logo.png'
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'



function Layout({ children }) {
    const navigate = useNavigate()
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#f4f4f4' }}>
                <Toolbar sx={{ color: "#000000", justifyContent: "space-between" }}>
                    <Box>
                        <img src={Logo} alt="Logo de la tienda de café" width="200" height="80" />
                    </Box>
                    <Box>
                        <Button color="inherit" onClick={() => navigate("/")}>Menu</Button>
                        <Button color="inherit" onClick={() => navigate("/nuestro-cafe")}>Nuestro Café</Button>
                        <Button color="inherit">Noticias</Button>
                    </Box>

                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout

