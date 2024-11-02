import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import P1 from 'assets/fake-products/P1.png';
import P3 from 'assets/fake-products/P3.png';

const products = [
    { id: 1, image: P1 },
    { id: 3, image: P3 },
];

const PreProduct = () => {
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
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PreProduct;
