import axios from "api/aixos";

const getAllBlogs = async () => {
    return await axios.get('/api/blogs');
}

const getBlogsById = async (id) => {
    return await axios.get(`/api/blogs/${id}`);
}

const createNewBlog = async (newBlog) => {
    return await axios.post('/api/blogs', newBlog);
}

const updateBlog = async (id, updateBlog) => {
    return await axios.put(`/api/blogs/${id}`, updateBlog);
}

const deleteBlog = async (id) => {
    let token = sessionStorage.getItem('token');
    try {
        let res = await axios.delete(`/api/blogs/${id}`);
        if (res.status === 204) {
            return res;
        } else {
            throw new Error(`Request failed with status`);
        }
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllBlogs,
    getBlogsById,
    createNewBlog,
    updateBlog,
    deleteBlog
};