import BreadcrumbImage from '../../public/assets/img/breadcrumb/01.jpg'
const Login = () => {
    return (
        <main className="main">

            {/* breadcrumb */}
            <div className="site-breadcrumb" style={{ backgroundImage: `url(${BreadcrumbImage})` }}>
                <div className="container">
                    <h2 className="breadcrumb-title">Login</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Login</li>
                    </ul>
                </div>
            </div>
            {/* breadcrumb end */}


            {/* login area */}
            <div className="login-area py-120">
                <div className="container">
                    <div className="col-md-5 mx-auto">
                        <div className="login-form">
                            <div className="login-header">
                                <img src="assets/img/logo/logo.png" alt="" />
                                <p>Login with your eduka account</p>
                            </div>
                            <form action="#">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Your Password" />
                                </div>
                                <div className="d-flex justify-content-between mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="remember" />
                                        <label className="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                    <a href="forgot-password.html" className="forgot-pass">Forgot Password?</a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="theme-btn"><i className="far fa-sign-in"></i> Login</button>
                                </div>
                            </form>
                            <div className="login-footer">
                                <p>Don't have an account? <a href="register.html">Register.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login area end */}

        </main>
    )
}
export default Login