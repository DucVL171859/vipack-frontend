import React, { useEffect, useRef, useState } from 'react';
import { Container, TextField, Button, Paper } from '@mui/material';
import { toast } from 'react-toastify';
import blogServices from 'services/blogServices';
import { useParams } from 'react-router-dom';
import MainCard from 'components/MainCard';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogView = () => {
    const myRef = useRef();
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const getBlog = async () => {
            try {
                let resOfBlog = await blogServices.getBlogsById(slug);
                setBlog(resOfBlog.data);
            } catch (error) {
                toast.error('Blog này không còn tồn tại');
            }
        };

        getBlog();
    }, [slug]);

    const handleEditToggle = () => {
        setIsEditMode(!isEditMode);
    };

    const handleActivate = async () => {
        try {
            toast.success('Blog activated successfully!');
        } catch (error) {
            toast.error('Error activating blog');
        }
    };

    const handleContentChange = (content) => {
        setBlog({ ...blog, content });
    };

    const handleTitleChange = (event) => {
        setBlog({ ...blog, title: event.target.value });
    };

    const handleSave = async () => {
        try {
            await blogServices.updateBlog(slug, blog);
            toast.success('Cập nhật thành công');
            setIsEditMode(false);
        } catch (error) {
            toast.error('Cập nhật thất bại');
        }
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <MainCard>
            <Container maxWidth="xl" style={{ marginTop: '20px' }}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <div ref={myRef} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <TextField
                                label="Trạng thái"
                                value={blog.status}
                                disabled
                                variant="outlined"
                                style={{ marginBottom: '10px', width: '200px' }}
                            />
                            <TextField
                                label="Ngày tạo"
                                value={new Date(blog.createdAt).toLocaleDateString('en-GB')}
                                disabled
                                variant="outlined"
                                style={{ marginBottom: '10px', width: '200px', display: 'block' }}
                            />
                        </div>
                        <Button onClick={handleActivate} color="secondary" variant="contained">
                            Kích hoạt
                        </Button>
                    </div>
                    <TextField
                        label="Tiêu đề"
                        value={blog.title}
                        onChange={handleTitleChange}
                        disabled={!isEditMode}
                        variant="outlined"
                        fullWidth
                        style={{ marginTop: '20px' }}
                    />
                    {isEditMode ? (
                        <ReactQuill
                            value={blog.content}
                            onChange={handleContentChange}
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                    ['bold', 'italic', 'underline'],
                                ],
                            }}
                            style={{ height: '300px', marginTop: '20px' }}
                        />
                    ) : (
                        <TextField
                            label="Nội dung"
                            value={blog.content}
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            disabled
                            style={{ marginTop: '20px' }}
                        />
                    )}
                    <div style={{ marginTop: '20px' }}>
                        {isEditMode ? (
                            <Button onClick={handleSave} color="primary" variant="contained">Lưu</Button>
                        ) : (
                            <Button onClick={handleEditToggle} color="primary" variant="contained">Sửa</Button>
                        )}
                        <Button onClick={handleCancel} color="info" variant="outlined" style={{ marginLeft: '10px' }}>Quay lại</Button>
                    </div>
                </Paper>
            </Container>
        </MainCard>
    );
};

export default BlogView;