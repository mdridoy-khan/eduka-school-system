import React from "react";
import ChooseCard from "../../components/ChooseCard";

const ChooseArea = () => {
    return (
        <div className="choose-area pt-80 pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content wow fadeInUp" data-wow-delay=".25s">
                            <div className="choose-content-info">
                                <div className="site-heading mb-0">
                                    <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Why Choose Us</span>
                                    <h2 className="site-title text-white mb-10">We Are Expert & <span>Do Our Best</span> For Your Goal</h2>
                                    <p className="text-white">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when many desktop and web page editors looking at its
                                        layout.
                                    </p>
                                </div>
                                <div className="choose-content-wrap">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <ChooseCard />
                                        </div>
                                        <div className="col-md-6">
                                            <ChooseCard />
                                        </div>
                                        <div className="col-md-6">
                                            <ChooseCard />
                                        </div>
                                        <div className="col-md-6">
                                            <ChooseCard />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-img wow fadeInRight" data-wow-delay=".25s">
                            <img src="assets/img/choose/01.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseArea