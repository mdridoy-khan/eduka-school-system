import React from "react";

const BlogCard = () => {
    return (
        <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
            <div className="blog-date"><i className="fal fa-calendar-alt"></i> June 18, 2024</div>
            <div className="blog-item-img">
                <img src="assets/img/blog/01.jpg" alt="Thumb" />
            </div>
            <div className="blog-item-info">
                <div className="blog-item-meta">
                    <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-comments"></i> 03 Comments</a></li>
                    </ul>
                </div>
                <h4 className="blog-title">
                    <a href="blog-single.html">There are many variations passage have suffered
                        available.</a>
                </h4>
                <a className="theme-btn" href="blog-single.html">Read More<i
                        className="fas fa-arrow-right-long"></i></a>
            </div>
        </div>
    )
}
export default BlogCard