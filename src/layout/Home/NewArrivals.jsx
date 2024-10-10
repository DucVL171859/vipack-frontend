import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import P1 from 'assets/fake-products/P1.png';
import P2 from 'assets/fake-products/P2.png';
import P3 from 'assets/fake-products/P3.png';
import P4 from 'assets/fake-products/P4.png';
import P5 from 'assets/fake-products/P5.png';
import P6 from 'assets/fake-products/P6.png';

const products = [
    { id: 1, name: 'Product 1', image: P1, oldPrice: 150000, newPrice: 119000 },
    { id: 2, name: 'Product 2', image: P2, oldPrice: 150000, newPrice: 119000 },
    { id: 3, name: 'Product 3', image: P3, oldPrice: 150000, newPrice: 119000 },
    { id: 4, name: 'Product 4', image: P4, oldPrice: 150000, newPrice: 119000 },
];

const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const NewArrivals = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: isMobile ? 1 : 4,
                pt: 3,
                width: isMobile ? '90%' : '100%',
                maxWidth: '1125px',
                margin: '0 auto'
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, pb: 2 }}>
                SẢN PHẨM SẮP RA MẮT
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: isMobile ? '3px' : 4,
                    width: '100%',
                    justifyItems: 'center'
                }}
            >
                {products.slice(0, 6).map((product) => (
                    <Box key={product.id} sx={{ textAlign: 'center', width: '100%', mb: 4 }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: isMobile ? '160px' : '100%',
                                height: isMobile ? '220px' : '400px',
                                objectFit: 'cover',
                            }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>{product.name}</Typography>
                        <Typography variant="body1" sx={{ display: 'inline', mr: 1, fontWeight: 600 }}>
                            {formatPrice(product.newPrice)}
                        </Typography>
                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'grey', display: 'inline' }}>
                            {formatPrice(product.oldPrice)}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/shop"
                    sx={{
                        bgcolor: 'unset',
                        color: '#000',
                        border: '1px solid #000'
                    }}
                >
                    Xem tất cả
                </Button>
            </Box>
        </Box>
    );
};

export default NewArrivals;
