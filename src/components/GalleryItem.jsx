import React from "react";

const GalleryItem = () => {
    return (
        <div className="gallery-item">
            <div className="gallery-img">
                <img src="assets/img/gallery/01.jpg" alt="" />
            </div>
            <div className="gallery-content">
                <a className="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                        className="fal fa-plus"></i></a>
            </div>
        </div>
    )
}
export default GalleryItem