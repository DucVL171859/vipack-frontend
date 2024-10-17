import aixos from "api/aixos";

const getOrder = async () => {
    return await aixos.get('/api/orders');
}

export default {
    getOrder
}