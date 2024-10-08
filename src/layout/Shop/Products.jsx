import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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
    { id: 5, name: 'Product 5', image: P5, oldPrice: 150000, newPrice: 119000 },
    { id: 6, name: 'Product 6', image: P6, oldPrice: 150000, newPrice: 119000 },
];

const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const Products = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
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
    )
}

export default Products;