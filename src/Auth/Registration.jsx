import BreadcrumbImage from '../../public/assets/img/breadcrumb/01.jpg'
const Registration = () => {
    return (
        <main className="main">

            {/* breadcrumb */}
            <div className="site-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbImage})` }}>
                <div className="container">
                    <h2 className="breadcrumb-title">Register</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Register</li>
                    </ul>
                </div>
            </div>
            {/* breadcrumb end */}


            {/* register area */}
            <div className="login-area py-120">
                <div className="container">
                    <div className="col-md-5 mx-auto">
                        <div className="login-form">
                            <div className="login-header">
                                <img src="assets/img/logo/logo.png" alt="" />
                                <p>Create your eduka account</p>
                            </div>
                            <form action="#">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Your Password" />
                                </div>
                                <div className="form-check form-group">
                                    <input className="form-check-input" type="checkbox" value="" id="agree" />
                                    <label className="form-check-label" for="agree">
                                    I agree with the <a href="#">Terms Of Service.</a>
                                    </label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="theme-btn"><i className="far fa-paper-plane"></i> Register</button>
                                </div>
                            </form>
                            <div className="login-footer">
                                <p>Already have an account? <a href="login.html">Login.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* register area end */}

        </main>
    )
}
export default Registration