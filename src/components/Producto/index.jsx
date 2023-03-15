import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'

function ProductCard({ imageSrc, title, price, onAdd }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={imageSrc}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    $ {price}
                </Typography>
            </CardContent>
            <Button onClick={onAdd} variant="contained" sx={{ backgroundColor: "#7DB166" }}>
                Agregar
            </Button>
        </Card>
    )
}

export default ProductCard
