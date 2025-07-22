import React from "react";

const TeamCard = () => {
    return (
        <div className="team-item wow fadeInUp" data-wow-delay=".25s">
            <div className="team-img">
                <img src="assets/img/team/01.jpg" alt="thumb" />
            </div>
            <div className="team-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="team-content">
                <div className="team-bio">
                    <h5><a href="teacher-single.html">Angela T. Vigil</a></h5>
                    <span>Associate Professor</span>
                </div>
            </div>
            <span className="team-social-btn"><i className="far fa-share-nodes"></i></span>
        </div>
    )
}
export default TeamCard