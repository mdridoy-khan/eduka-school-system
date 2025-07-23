import BreadcrumbImage from '../../../public/assets/img/breadcrumb/01.jpg'
const CourseSingle = () => {
    return (
        <main className="main">

            {/* breadcrumb */}
            <div className="site-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbImage})` }}>
                <div className="container">
                    <h2 className="breadcrumb-title">Course Single</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Course Single</li>
                    </ul>
                </div>
            </div>
            {/* breadcrumb end */}


            {/* course-single */}
            <div className="course-single-area py-120">
                <div className="container">
                    <div className="course-single-wrapper">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="course-details">
                                    <div className="course-details-img mb-30">
                                        <img src="assets/img/course/single.jpg" alt="thumb" />
                                    </div>
                                    <div className="course-details">
                                        <h3 className="mb-20">Computer Science And Engineering</h3>
                                        <p className="mb-20">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                            velit, sed quia non numquam eius modi tempora incidunt ut labore et.
                                        </p>
                                        <p className="mb-20">
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising pain was born and I will give you a complete account of the system, and
                                            expound the actual teachings of the great explorer of the truth, the
                                            master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                            itself, because it is pleasure, but because those who do not know how to pursue
                                            pleasure rationally encounter consequences that are extremely painful. Nor again
                                            is there anyone who loves or pursues or desires to obtain pain of itself,
                                            because it is pain, but because occasionally circumstances occur in which toil
                                            and pain can procure him some great pleasure. To take a trivial example
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 mb-20">
                                                <img src="assets/img/course/01.jpg" alt="" />
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <img src="assets/img/course/02.jpg" alt="" />
                                            </div>
                                        </div>
                                        <p className="mb-20">
                                            Power of choice is untrammelled and when nothing prevents our being able to do
                                            what we like best, every pleasure is to be welcomed and every pain avoided. But
                                            in certain circumstances and owing to the claims of duty or the obligations of
                                            business it will frequently occur that pleasures have to be repudiated and
                                            annoyances accepted. The wise man therefore always holds in these matters to
                                            this principle of selection.
                                        </p>
                                        <div className="my-4">
                                            <div className="mb-3">
                                                <h3 className="mb-3">Course Requirement</h3>
                                                <p>Aliquam facilisis rhoncus nunc, non vestibulum mauris volutpat non.
                                                    Vivamus tincidunt accumsan urna, vel aliquet nunc commodo tristique.
                                                    Nulla facilisi. Phasellus vel ex nulla. Nunc tristique sapien id mauris
                                                    efficitur, porta scelerisque nisl dignissim. Vestibulum ante ipsum
                                                    primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at
                                                    mollis tellus. Proin consequat, orci nec bibendum viverra, ante orci
                                                    suscipit dolor, et condimentum felis dolor ac lectus.</p>
                                            </div>
                                            <ul className="course-single-list">
                                                <li><i className="fas fa-check"></i>Fusce justo risus placerat in risus eget
                                                    tincidunt consequat elit.</li>
                                                <li><i className="fas fa-check"></i>Nunc fermentum sem sit amet dolor laoreet
                                                    placerat.</li>
                                                <li><i className="fas fa-check"></i>Nullam rhoncus dictum diam quis ultrices.
                                                </li>
                                                <li><i className="fas fa-check"></i>Integer quis lorem est uspendisse eu augue
                                                    porta ullamcorper dictum.</li>
                                                <li><i className="fas fa-check"></i>Quisque tristique neque arcu ut venenatis
                                                    felis malesuada et.</li>
                                            </ul>
                                        </div>
                                        <div className="my-4">
                                            <h3 className="mb-3">Professional Experience</h3>
                                            <p>Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue
                                                ligula. Orci varius natoque penatibus et magnis dis parturient montes,
                                                nascetur ridiculus mus. Cras quis venenatis neque. Donec volutpat tellus
                                                lobortis mi ornare eleifend. Fusce eu nisl ut diam ultricies accumsan.
                                                Integer lobortis vestibulum nunc id porta. Curabitur aliquam arcu sed ex
                                                dictum, a facilisis urna porttitor. Fusce et mattis nisl. Sed iaculis libero
                                                consequat justo auctor iaculis. Vestibulum sed ex et magna tristique
                                                bibendum. Sed hendrerit neque nec est suscipit, id faucibus dolor convallis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="course-single-sidebar">
                                    <div className="widget">
                                        <h4 className="widget-title">Course Info</h4>
                                        <div className="course-single-info">
                                            <div className="single-info author">
                                                <div className="author-img">
                                                    <img src="assets/img/course/teacher.jpg" alt="#" />
                                                </div>
                                                <div className="single-info-content">
                                                    <h4>Teacher</h4>
                                                    <span>Frank Mitchel</span>
                                                </div>
                                            </div>
                                            <div className="single-info category">
                                                <i className="far fa-bolt"></i>
                                                <div className="single-info-content">
                                                    <h4>Category</h4>
                                                    <span>Science & Engineering</span>
                                                </div>
                                            </div>
                                            <div className="single-info s-enroll">
                                                <i className="far fa-users"></i>
                                                <div className="single-info-content">
                                                    <h4>Enrolled</h4>
                                                    <span>50 Students</span>
                                                </div>
                                            </div>
                                            <div className="single-info rattings">
                                                <i className="far fa-clock"></i>
                                                <div className="single-info-content">
                                                    <h4>Course Time</h4>
                                                    <span>04 Years</span>
                                                </div>
                                            </div>
                                            <div className="single-info rattings">
                                                <i className="far fa-dollar"></i>
                                                <div className="single-info-content">
                                                    <h4>Course Fees</h4>
                                                    <span>$20,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" className="theme-btn">Enroll Now<i className="fas fa-arrow-right-long"></i></a>
                                    </div>
                                    <div className="widget">
                                        <h4 className="widget-title">Course Features</h4>
                                        <div className="course-feature-list">
                                            <a href="#"><i className="far fa-book-open"></i> Lectures <span>20</span></a>
                                            <a href="#"><i className="far fa-pencil"></i> Quizes <span>12</span></a>
                                            <a href="#"><i className="far fa-clock"></i> Duration <span>4 Years</span></a>
                                            <a href="#"><i className="far fa-globe"></i> Language <span>English</span></a>
                                            <a href="#"><i className="far fa-fill-drip"></i> Skill Level <span>Basic</span></a>
                                            <a href="#"><i className="far fa-location-dot"></i> Location <span>On
                                                    Campus</span></a>
                                            <a href="#"><i className="far fa-users"></i> Students <span>90</span></a>
                                            <a href="#"><i className="far fa-graduation-cap"></i> Certificate
                                                <span>Yes</span></a>
                                            <a href="#"><i className="far fa-check-circle"></i> Assessments <span>Yes</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* course-single end*/}

        </main>
    )
}
export default CourseSingle