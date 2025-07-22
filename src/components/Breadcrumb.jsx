import React from "react";
import Image from '../../public/assets/img/breadcrumb/01.jpg'
const Breadcrumb = () => {
    return (
        <div className="site-breadcrumb" style={{ backgroundImage: `url(${Image})` }}>
            <div className="container">
                <h2 className="breadcrumb-title">Courses</h2>
                <ul className="breadcrumb-menu">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Courses</li>
                </ul>
            </div>
        </div>
    )
}
export default Breadcrumb