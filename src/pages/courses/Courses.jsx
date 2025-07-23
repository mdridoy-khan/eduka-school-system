import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <main className="main">

            {/* breadcrumb */}
            <Breadcrumb />
            {/* breadcrumb end */}

            
            {/* course-area */}
            <div className="course-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Drama</span>
                                            <img src="assets/img/course/01.jpg" alt="" />
                                            <Link to="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Acting And Drama</Link>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Design</span>
                                            <img src="assets/img/course/02.jpg" alt="" />
                                            <Link to="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Art And Design</Link>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Science</span>
                                            <img src="assets/img/course/03.jpg" alt="" />
                                            <Link href="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Biology And Conservation</Link>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Science</span>
                                            <img src="assets/img/course/04.jpg" alt="" />
                                            <Link to="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Science And Engineering</Link>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Health</span>
                                            <img src="assets/img/course/05.jpg" alt="" />
                                            <Link to="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Health Administration</Link>
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
                                </div>
                                <div className="col-md-6">
                                    <div className="course-item">
                                        <div className="course-img">
                                            <span className="course-tag"><i className="far fa-bookmark"></i> Finance</span>
                                            <img src="assets/img/course/06.jpg" alt="" />
                                            <Link to="/course-single" className="btn"><i className="far fa-link"></i></Link>
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
                                                <Link to="/course-single">Accounting And Finance</Link>
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
                                </div>
                            </div>
                            {/* pagination */}
                            <div className="pagination-area">
                                <div aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="far fa-arrow-left"></i></span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="far fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* pagination end */}
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-sidebar">
                                <div className="widget search">
                                    <h5 className="widget-title">Search</h5>
                                    <form className="search-form">
                                        <input type="text" className="form-control" placeholder="Search Here..." />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="widget category">
                                    <h4 className="widget-title">Course Category</h4>
                                    <div className="category-list">
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Business And Finance</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Law And Criminology</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>IT And Data Science</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Health And Medicine</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Art And Design</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Information Technology</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Acting And Drama</a>
                                        <a href="#"><i className="far fa-long-arrow-right"></i>Human Resource</a>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h5 className="widget-title">Location Type</h5>
                                    <form action="#">
                                        <select className="form-select" name="location">
                                            <option value="">Choose Location</option>
                                            <option value="1">On Campus</option>
                                            <option value="2">Online</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="widget">
                                    <h5 className="widget-title">Program Level</h5>
                                    <form action="#">
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="program" value="1" id="level1" checked />
                                        <label className="form-check-label" for="level1">
                                            Graduate
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="program" value="2" id="level2" />
                                        <label className="form-check-label" for="level2">
                                            Undergraduate
                                        </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* course-area end*/}

        </main>
    )
}
export default Courses