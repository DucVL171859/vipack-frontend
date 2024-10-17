import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import MainCard from "components/MainCard";
import { useEffect, useState } from "react";
import orderServices from "services/orderServices";

const OrderManagement = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const getOrder = async () => {
            let resOfOrder = await orderServices.getOrder();
            if (resOfOrder) {
                setOrder(resOfOrder.data);
                console.log(resOfOrder.data)
            }
        }

        getOrder();
    }, []);

    return (
        <MainCard>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">Khách hàng</Typography></TableCell>
                            <TableCell><Typography variant="h6">Thời gian mua</Typography></TableCell>
                            <TableCell><Typography variant="h6">Thời gian mua</Typography></TableCell>
                            <TableCell><Typography variant="h6">Trạng thái</Typography></TableCell>
                            <TableCell><Typography variant="h6">Hành động</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order && order.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell>{order.shippingAddress.name} / {order.shippingAddress.phoneNumber}</TableCell>
                                <TableCell>{new Date(order.createdAt).toLocaleDateString('en-GB')}</TableCell>
                                <TableCell></TableCell>
                                <TableCell>{order.status}</TableCell>
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
        </MainCard>
    )
}

export default OrderManagement;