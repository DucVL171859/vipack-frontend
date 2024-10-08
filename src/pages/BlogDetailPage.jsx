import Footer from "layout/Home/Footer";
import Header from "layout/Home/Header";
import BlogTitle from "layout/Blog/BlogTitle";
import BlogContent from "layout/Blog/BlogContent";
import { useEffect, useState } from "react";

import blogServices from "services/blogServices";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {

    const { slug } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const getBlog = async () => {
            try {
                let resOfBlog = await blogServices.getBlogsById(slug);
                if (resOfBlog) {
                    setBlog(resOfBlog.data);
                    console.log(resOfBlog.data);
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
            <BlogTitle title={blog.title} />
            <BlogContent content={blog.content} imgURL={blog.imageUrl} />
            <Footer />
        </>
    )
}

export default BlogDetailPage;