import Footer from "layout/Home/Footer";
import Header from "layout/Home/Header";
import BlogTitle from "layout/Blog/BlogTitle";
import BlogContent from "layout/Blog/BlogContent";
import { useEffect, useState } from "react";

import blogServices from "services/blogServices";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const BlogDetailPage = () => {

    const { slug } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const getBlog = async () => {
            try {
                let resOfBlog = await blogServices.getBlogsById(slug);
                if (resOfBlog) {
                    setBlog(resOfBlog.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getBlog();
    }, [slug]);

    return (
        <>
            <Header />
            <div>
                <BlogTitle title={blog.title} />
                <BlogContent content={blog.content} imgURL={blog.imageUrl} />

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h5" align="center" fontWeight="bold">
                        KHÁM PHÁ NHỮNG HÌNH ẢNH VIPACK SỬ DỤNG TRONG BỘ SƯU TẬP ĐINH BỘ LĨNH
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: 2 }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/vipack-project.appspot.com/o/blogs-image1%2FIMG_0042%20(1).jpg?alt=media&token=842d238e-dbf6-4a56-b552-9a9b88186926"
                            alt="Description of Image" style={{ maxWidth: '100%', height: '600px', borderRadius: '8px' }} />
                        <img src="https://firebasestorage.googleapis.com/v0/b/vipack-project.appspot.com/o/blogs-image1%2FIMG_0048.jpg?alt=media&token=a79d6985-7abd-48e3-860d-dc8169c784df"
                            alt="Description of Image" style={{ maxWidth: '100%', height: '600px', borderRadius: '8px' }} />
                        <img src="https://firebasestorage.googleapis.com/v0/b/vipack-project.appspot.com/o/blogs-image1%2FIMG_0044%20(1).jpg?alt=media&token=e2115d8f-897b-48f7-9a2b-50ecf8b489a9"
                            alt="Description of Image" style={{ maxWidth: '100%', height: '600px', borderRadius: '8px' }} />
                    </Box>

                    {[
                        {
                            icon: '🔔',
                            text: "Trống Đồng: Hãy cùng chiêm ngưỡng trống đồng - biểu tượng vĩ đại của văn hóa Việt Nam! Với hoa văn tinh xảo, trống đồng không chỉ gợi nhớ về cội nguồn lịch sử mà còn mang đến cảm giác vừa cổ điển vừa hiện đại, thể hiện niềm tự hào của dân tộc.",
                            align: 'left'
                        },
                        {
                            icon: '🌾',
                            text: "Cờ Lau: Cờ lau không chỉ là một biểu tượng, mà còn là hình ảnh gắn liền với tinh thần dũng cảm của Đinh Bộ Lĩnh. Mang thông điệp về lòng kiên cường và quyết tâm, hình ảnh cờ lau trong thiết kế tạo ra phong cách giản dị nhưng đậm chất lịch sử, khẳng định sự tự cường của dân tộc.",
                            align: 'right'
                        },
                        {
                            icon: '🐉',
                            text: "Rồng Thời Đinh: Hình tượng rồng thời Đinh mang trong mình quyền lực và uy nghiêm. Rồng được khắc họa một cách giản dị nhưng vẫn thể hiện sự bảo hộ và quyền lực tối cao của hoàng đế. Đây là biểu tượng khẳng định vị thế độc lập của đất nước dưới triều Đinh Tiên Hoàng.",
                            align: 'left'
                        },
                        {
                            icon: '⛰️',
                            text: "Ngọn Núi Thời Đinh: Ngọn núi này, nằm ở Ninh Bình, là biểu tượng của triều đại Đinh Tiên Hoàng. Nó không chỉ mang trong mình sức mạnh và ý chí bất khuất của dân tộc mà còn trở thành điểm du lịch hấp dẫn và nơi tưởng niệm các anh hùng dân tộc.",
                            align: 'right'
                        },
                        {
                            icon: '🐃',
                            text: "Đinh Bộ Lĩnh Cưỡi Trâu: Cảnh tượng Đinh Bộ Lĩnh cưỡi trâu không chỉ thể hiện sự gần gũi với nhân dân mà còn là biểu tượng cho khát vọng độc lập và thống nhất. Trâu đại diện cho sức lao động và kiên trì, hòa quyện với hình ảnh của một vị vua yêu nước.",
                            align: 'left'
                        },
                        {
                            icon: '🪶',
                            text: "Chim Hạc: Trên trống đồng thời Đinh, chim hạc được khắc họa với dáng vẻ thanh thoát, biểu trưng cho sự trường thọ, hạnh phúc và bình an. Đây là một biểu tượng văn hóa độc đáo, thể hiện tinh thần nghệ thuật thời kỳ này.",
                            align: 'right'
                        },
                        {
                            icon: '🌊',
                            text: "Hình Ảnh Sông Nước: Trong trận đánh của Đinh Bộ Lĩnh, hình ảnh sông nước không chỉ là bối cảnh địa lý mà còn phản ánh chiến thuật quân sự, biểu trưng cho sức sống và ý chí kiên cường của nhân dân Việt Nam trong cuộc đấu tranh giành độc lập.",
                            align: 'left'
                        },
                        {
                            icon: '✨',
                            text: "Hoa Văn Trống Đồng: Hoa văn sóng nước kết hợp với cờ lau và hoa văn rồng nhỏ xen kẽ, tượng trưng cho sức mạnh dân tộc. Từng chi tiết trên trống đồng đều chứa đựng những giá trị văn hóa sâu sắc, kết nối chúng ta với lịch sử và niềm tự hào dân tộc.",
                            align: 'right'
                        }
                    ].map((section, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            justifyContent: section.align === 'left' ? 'flex-start' : 'flex-end',
                            alignItems: 'center',
                            marginY: 1
                        }}>
                            {section.align === 'left' && (
                                <Box sx={{
                                    width: 80, height: 80, borderRadius: '50%', backgroundColor: '#e0e0e0',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 2,
                                    boxShadow: 2
                                }}>
                                    <Typography fontSize={40}>{section.icon}</Typography>
                                </Box>
                            )}
                            <Typography sx={{ maxWidth: '70%', textAlign: section.align === 'left' ? 'left' : 'right' }}>
                                {section.text}
                            </Typography>
                            {section.align === 'right' && (
                                <Box sx={{
                                    width: 56, height: 56, borderRadius: '50%', backgroundColor: '#e0e0e0',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 2,
                                    boxShadow: 2
                                }}>
                                    <Typography fontSize={24}>{section.icon}</Typography>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>

            </div>
            <Footer />
        </>
    )
}

export default BlogDetailPage;