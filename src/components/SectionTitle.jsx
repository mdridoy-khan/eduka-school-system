import React from "react";

const SectionTitle = ({ title, colortext, subtitle, description }) => {
  return (
    <div className="site-heading text-center">
        <span className="site-title-tagline"><i className="far fa-book-open-reader"></i>{" "}{subtitle}</span>
        <h2 className="site-title">{title} <span>{colortext}</span></h2>
        <p>{description}</p>
    </div>
  );
}

export default SectionTitle;