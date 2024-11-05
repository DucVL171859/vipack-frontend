import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import designServices from "services/designServices";

const DesignDetails = ({ blogId }) => {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getAllDesign();
        }

        fetchData();
    }, []);

    const getAllDesign = async () => {
        let resOfDesign = await designServices.getAllDetail();
        if (resOfDesign.data) {
            let matchedDesign = resOfDesign.data.filter(design => design.blogId === blogId);
            if (matchedDesign) {
                setDesigns(matchedDesign);
            } else {
                return;
            }
        }
    }

    const getCollectionTitle = () => {
        switch (blogId) {
            case '67054015ff8f629e37efe654': return 'Đinh Bộ Lĩnh';
            case '6705423dff8f629e37efe657': return 'Hai Bà Trưng';
            default: return '';
        }
    }

    return (
        designs && (
            <Box sx={{ padding: 2, maxWidth: '1200px', alignItems: 'center', margin: '0 auto' }}>
                <Typography variant="h5" align="center" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                    Khám Phá Những Hình Ảnh VIPACK Sử Dụng Trong Bộ Sưu Tập {getCollectionTitle()}
                </Typography>

                <Box sx={{ marginY: 2 }}>
                    {designs && designs.map((design, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginY: 1,
                            paddingBottom: 1
                        }}>
                            <img
                                src={design.image}
                                alt={design.title}
                                style={{ width: '80px', height: '80px', borderRadius: '8px' }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                                <Typography variant="h6" fontWeight='bold'>
                                    {design.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {design.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        )
    )
}

export default DesignDetails;