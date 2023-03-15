import React from 'react'
import Logo from '../../assets/logo.png'
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, Link, Icon } from '@mui/material'
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
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
            <Container maxWidth="md">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" component="p">
                            Horario de Atención:
                        </Typography>
                        <Typography variant="body1" component="p">
                            Lunes a Viernes de 8 a.m. a 10 p.m.
                        </Typography>
                        <Typography variant="body1" component="p">
                            Sabados de 8 a.m. a 8 p.m.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} container justify="center" justifyContent="space-between">
                        <Link href="https://www.facebook.com" target="_blank">
                            <Icon>
                                <Facebook />
                            </Icon>
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <Icon>
                                <Instagram />
                            </Icon>
                        </Link>
                        <Link href="https://twitter.com/" target="_blank">
                            <Icon>
                                <Twitter />
                            </Icon>
                        </Link>
                        <Link href="https://www.whatsapp.com/?lang=es" target="_blank">
                            <Icon>
                                <WhatsApp />
                            </Icon>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} container justify="flex-end">
                        <Typography variant="body2" component="p">
                            Sitio Diseñado "Estudiantes Remigton" logo © 2023 Usuario Contribución
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            );
        </>
    )
}

export default Layout

