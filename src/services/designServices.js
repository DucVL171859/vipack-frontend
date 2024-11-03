import axios from "api/aixos"

const createDetail = async (createdData) => {
    return await axios.post(`/api/design-details`, createdData);
}

const getAllDetail = async () => {
    return await axios.get(`/api/design-details`);
}

const getDetailById = async (detailId) => {
    return await axios.get(`/api/design-details/${detailId}`);
}

const updateDetail = async (detailId, updatedData) => {
    return await axios.put(`/api/design-details/${detailId}`, updatedData);
}

const deleteDetail = async (detailId) => {
    return await axios.delete(`/api/design-details/${detailId}`);
}

export default {
    createDetail,
    getAllDetail,
    getDetailById,
    updateDetail,
    deleteDetail
}