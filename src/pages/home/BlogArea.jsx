import React from "react";
import BlogCard from "../../components/BlogCard";

const BlogArea = () => {
    return (
        <div className="blog-area py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Our Blog</span>
                            <h2 className="site-title">Latest News & <span>Blog</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <BlogCard />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogArea