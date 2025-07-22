const CourseCard = ({data}) => {
    // Calculate full, half, and empty stars
    const fullStars = Math.floor(data.rating);
    const hasHalfStar = data.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="course-item wow fadeInUp" data-wow-delay=".25s">
            <div className="course-img">
                <span className="course-tag"><i className="far fa-bookmark"></i> {data.tag}</span>
                <img src={data.image} alt={data.title} />
                <a href="course-single.html" className="btn"><i className="far fa-link"></i></a>
            </div>
            <div className="course-content">
                <div className="course-meta">
                    <span className="course-meta-left"><i className="far fa-book"></i> {data.lessons} Lessons</span>
                    <div className="course-rating">
                        {Array.from({ length: fullStars }).map((_, idx) => (
                            <i key={`full-${idx}`} className="fas fa-star"></i>
                        ))}
                        {hasHalfStar && (
                            <i className="fa-solid fa-star-half-stroke"></i>
                        )}
                        {Array.from({ length: emptyStars }).map((_, idx) => (
                            <i key={`empty-${idx}`} className="far fa-star"></i>
                        ))}
                        <span>({data.rating})</span>
                    </div>
                </div>
                <h4 className="course-title">
                    <a href="course-single.html">{data.title}</a>
                </h4>
                <p className="course-text">
                    {data.description}
                </p>
                <div className="course-bottom">
                    <div className="course-bottom-left">
                        <span><i className="far fa-users"></i>{data.seats} Seats</span>
                        <span><i className="far fa-clock"></i>{data.duration} Years</span>
                    </div>
                    <span className="course-price">${data.price}</span>
                </div>
            </div>
        </div>
    )
}
export default CourseCard