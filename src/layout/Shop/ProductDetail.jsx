import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Container,
} from '@mui/material';
import P1 from 'assets/fake-products/P1.png';

const product = {
    name: 'Sample Product',
    brand: 'Sample Brand',
    oldPrice: 199.99,
    newPrice: 149.99,
    description: 'This is a sample description of the product, detailing its features and benefits.',
    imageUrl: P1,
};

const ProductDetail = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} m={2}>
                    <Paper elevation={3}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} m={2}>
                    <Box padding={2}>
                        <Typography variant="h4">{product.name}</Typography>
                        <Typography variant="h6" color="text.secondary">{product.brand}</Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            ${product.oldPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="h5" color="primary">${product.newPrice.toFixed(2)}</Typography>
                    </Box>

                    <Box padding={2}>
                        <Typography variant="body1">{product.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetail;