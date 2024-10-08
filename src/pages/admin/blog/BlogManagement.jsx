import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import blogServices from "services/blogServices";

const BlogManagement = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = async () => {
        try {
            let resOfBlogs = await blogServices.getAllBlogs();
            if (resOfBlogs) {
                console.log(resOfBlogs.data)
                setBlogs(resOfBlogs.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleView = (slug) => {
        navigate(`${slug}`);
    };

    const handleEdit = (id) => {
    };

    const handleDelete = async (blog) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn ẩn blog này?");
        if (confirmDelete) {
            let resOfDelete = await blogServices.deleteBlog(blog._id);
            if (resOfDelete) {
                toast.success('Bạn đã ẩn blog thành công');
                getAllBlogs();
            }
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">ID</Typography></TableCell>
                            <TableCell><Typography variant="h6">Chủ đề</Typography></TableCell>
                            <TableCell><Typography variant="h6">Ngày tạo</Typography></TableCell>
                            <TableCell><Typography variant="h6">Trạng thái</Typography></TableCell>
                            <TableCell><Typography variant="h6">Hành động</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {blogs.map((blog) => (
                            <TableRow key={blog._id}>
                                <TableCell>{blog._id}</TableCell>
                                <TableCell>{blog.title}</TableCell>
                                <TableCell>{new Date(blog.createdAt).toLocaleDateString('en-GB')}</TableCell>
                                <TableCell>{blog.status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleView(blog._id)}
                                        style={{ background: '#7850c4' }}
                                    >
                                        Xem
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEdit(blog._id)}
                                        style={{ background: 'green' }}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleDelete(blog)}
                                        style={{ background: 'red' }}
                                    >
                                        Ẩn
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default BlogManagement;