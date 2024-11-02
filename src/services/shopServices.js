import axios from "api/aixos";

const getAllProduct = async (name, categoryId) => {
    return await axios.get(`/api/products`,
        {
            params: {
                name: name,
                categoryId: categoryId
            }
        }
    );
}

export default {
    getAllProduct
}