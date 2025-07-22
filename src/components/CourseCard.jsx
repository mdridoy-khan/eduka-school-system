import React from "react";

const CourseCard = () => {
    return (
        <div className="course-item wow fadeInUp" data-wow-delay=".25s">
            <div className="course-img">
                <span className="course-tag"><i className="far fa-bookmark"></i> Drama</span>
                <img src="assets/img/course/01.jpg" alt="" />
                <a href="course-single.html" className="btn"><i className="far fa-link"></i></a>
            </div>
            <div className="course-content">
                <div className="course-meta">
                    <span className="course-meta-left"><i className="far fa-book"></i> 10 Lessons</span>
                    <div className="course-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <span>(4.0)</span>
                    </div>
                </div>
                <h4 className="course-title">
                    <a href="course-single.html">Acting And Drama</a>
                </h4>
                <p className="course-text">
                    There are many variations of passages orem psum available but the majority have
                    suffer alteration in some form by injected.
                </p>
                <div className="course-bottom">
                    <div className="course-bottom-left">
                        <span><i className="far fa-users"></i>75 Seats</span>
                        <span><i className="far fa-clock"></i>04 Years</span>
                    </div>
                    <span className="course-price">$750</span>
                </div>
            </div>
        </div>
    )
}
export default CourseCard