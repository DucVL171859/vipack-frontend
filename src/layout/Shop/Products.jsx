import { Card, CardMedia, CardContent, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import shopServices from 'services/shopServices';

const formatPrice = (price) => {
    return price.toLocaleString('vi-VN');
};

const Products = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [listOfProduct, setListOfProduct] = useState([]);
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [showButtonTimeout, setShowButtonTimeout] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await getAllProduct();
        };

        fetchData();
    }, []);

    const getAllProduct = async () => {
        let res = await shopServices.getAllProduct();
        if (res) {
            setListOfProduct(res.data.products);
        }
    };

    const handleMouseEnter = (id) => {
        setHoveredProductId(id);
        let timeout = setTimeout(() => {
            setShowButtonTimeout(id);
        }, 1000);
        setShowButtonTimeout(timeout);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
        if (showButtonTimeout) {
            clearTimeout(showButtonTimeout);
            setShowButtonTimeout(null);
        }
    };

    return (
        <Grid container spacing={isMobile ? 1 : 2} columns={isMobile ? 2 : 3}>
            {listOfProduct && listOfProduct.map((product) => (
                <Grid item xs={1} key={product._id}>
                    <Card sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            image={hoveredProductId === product._id ? product.image2 : product.image}
                            alt={product.name}
                            sx={{
                                height: isMobile ? 220 : 400,
                                objectFit: 'cover',
                                transition: '1s ease',
                                '&:hover': {
                                    opacity: '0.6',
                                },
                            }}
                            onMouseEnter={() => handleMouseEnter(product._id)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" sx={{ display: 'inline', fontWeight: 600 }}>
                                {product.price && `${formatPrice(product.price)} VND`}
                            </Typography>
                        </CardContent>
                        {hoveredProductId === product._id && (
                            <Button
                                variant="contained"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    border: '1px solid white',
                                    opacity: hoveredProductId === product._id ? 1 : 0,
                                    transition: 'opacity 3s ease',
                                    zIndex: 2,
                                }}
                                onClick={() => {/* Handle view detail */ }}
                            >
                                View Details
                            </Button>
                        )}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Products;