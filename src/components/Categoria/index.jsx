import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

function Categoria({ title, children }) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2" gutterBottom>
                    {title}
                </Typography>
            </Grid>
            {children.map((child, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <Paper sx={{ p: 2 }}>{child}</Paper>
                </Grid>
            ))}
        </Grid>
    )
}

export default Categoria