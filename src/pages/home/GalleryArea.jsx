import React from "react";
import GalleryItem from "../../components/GalleryItem";

const GalleryArea = () => {
    return (
        <div className="gallery-area py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline"><i className="far fa-book-open-reader"></i> Gallery</span>
                            <h2 className="site-title">Our Photo <span>Gallery</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="row popup-gallery">
                    <div className="col-md-4 wow fadeInUp" data-wow-delay=".25s">
                        <GalleryItem />
                        <GalleryItem />
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay=".50s">
                        <GalleryItem />
                        <GalleryItem />
                    </div>
                    <div className="col-md-4 wow fadeInUp" data-wow-delay=".75s">
                        <GalleryItem />
                        <GalleryItem />
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default GalleryArea