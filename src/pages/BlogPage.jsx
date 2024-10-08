import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from "layout/Home/Footer";
import Header from "layout/Home/Header";
import blogServices from "services/blogServices";

const BlogPage = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getAllBlogs = async () => {
            let resOfBlogs = await blogServices.getAllBlogs();
            if (resOfBlogs) {
                setBlogs(resOfBlogs.data);
                console.log(resOfBlogs.data);
            }
        };

        getAllBlogs();
    }, []);

    const handleViewDetail = (slug) => {
        navigate(`/blogs/${slug}`);
    };

    return (
        <>
            <Header />
            <Box sx={{ padding: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Container>
                        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }} justifyContent="center">
                            <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'left' }}>
                                <Typography variant="h4">Việt Nam Sử Thư Đình</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}
                                sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, marginTop: { xs: 2, sm: 0 } }}>
                                <TextField
                                    variant="outlined"
                                    placeholder="Tìm kiếm câu chuyện..."
                                    sx={{ width: '300px' }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Grid container spacing={2}>
                    {blogs.map((blog) => (
                        <Grid item xs={12} sm={6} md={4} key={blog._id}>
                            <Card onClick={() => handleViewDetail(blog._id)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog.imageUrl}
                                    alt={blog.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{blog.title}</Typography>
                                    <Typography color="textSecondary">
                                        {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default BlogPage;