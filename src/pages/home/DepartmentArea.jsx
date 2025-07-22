import React from "react";

const DepartmentArea = () => {
    return (
        <div className="department-area bg py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Department</span>
                            <h2 className="site-title">Browse Our <span>Department</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="department-slider owl-carousel owl-theme">
                    <div className="department-item">
                        <div className="department-icon">
                            <img src="assets/img/icon/monitor.svg" alt="" />
                        </div>
                        <div className="department-info">
                            <h4 className="department-title"><a href="academic-single.html">Business And Finance</a></h4>
                            <p>There are many variations of passages the majority have some injected humour.</p>
                            <div className="department-btn">
                                <a href="academic-single.html">Read More<i className="fas fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="department-item">
                        <div className="department-icon">
                            <img src="assets/img/icon/law.svg" alt="" />
                        </div>
                        <div className="department-info">
                            <h4 className="department-title"><a href="academic-single.html">Law And Criminology</a></h4>
                            <p>There are many variations of passages the majority have some injected humour.</p>
                            <div className="department-btn">
                                <a href="academic-single.html">Read More<i className="fas fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="department-item">
                        <div className="department-icon">
                            <img src="assets/img/icon/data.svg" alt="" />
                        </div>
                        <div className="department-info">
                            <h4 className="department-title"><a href="academic-single.html">IT And Data Science</a></h4>
                            <p>There are many variations of passages the majority have some injected humour.</p>
                            <div className="department-btn">
                                <a href="academic-single.html">Read More<i className="fas fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="department-item">
                        <div className="department-icon">
                            <img src="assets/img/icon/health.svg" alt="" />
                        </div>
                        <div className="department-info">
                            <h4 className="department-title"><a href="academic-single.html">Health And Medicine</a></h4>
                            <p>There are many variations of passages the majority have some injected humour.</p>
                            <div className="department-btn">
                                <a href="academic-single.html">Read More<i className="fas fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="department-item">
                        <div className="department-icon">
                            <img src="assets/img/icon/art.svg" alt="" />
                        </div>
                        <div className="department-info">
                            <h4 className="department-title"><a href="academic-single.html">Art And Design</a></h4>
                            <p>There are many variations of passages the majority have some injected humour.</p>
                            <div className="department-btn">
                                <a href="academic-single.html">Read More<i className="fas fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepartmentArea