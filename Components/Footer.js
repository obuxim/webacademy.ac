import React from 'react'
import Newsletter from './Newsletter'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
       <Newsletter />
        <footer className="dark-footer skin-dark-footer">
            <div>
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="footer-widget">
                    <img src="assets/img/webacademy.png" className="img-footer" alt />
                    <div className="footer-add">
                        <p>4967  Sardis Sta, Victoria 8007, Montreal.</p>
                        <p>+1 246-345-0695</p>
                        <p>info@learnup.com</p>
                    </div>
                    </div>
                </div>		
                <div className="col-lg-2 col-md-3">
                    <div className="footer-widget">
                    <h4 className="widget-title">About</h4>
                    <ul className="footer-menu">
                        <li><Link href="/courses"><a>All Courses</a></Link></li>
                        <li><Link href="/about"><a>About Us</a></Link></li>
                        <li><Link href="/contact"><a>Contact Us</a></Link></li>
                        <li><Link href="/"><a>Free Quizzes</a></Link></li>
                        <li><Link href="/resourse"><a>Free Resources</a></Link></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3">
                    <div className="footer-widget">
                    <h4 className="widget-title">Useful Links</h4>
                    <ul className="footer-menu">
                        <li><Link href="/blog"><a>Blogs</a></Link></li>
                        <li><Link href="/privacy"><a> Privacy Policy</a></Link></li>
                        <li><Link href="/term"><a>Terms & Condition</a></Link></li>
                        <li><Link href="/redeem"><a>Redeem Voucher </a></Link></li>
                        <li><Link href="/certificate"><a>Certificate Validate </a></Link></li>
                    </ul>
                    </div>
                </div>

                </div>
            </div>
            </div>
            <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <p className="mb-0">© 2020 LearnUp. Designd By <a href="https://themezhub.com">Themezhub</a>.</p>
                </div>
                <div className="col-lg-6 col-md-6 text-right">
                    <ul className="footer-bottom-social">
                    <li><a href="#"><i className="ti-facebook" /></a></li>
                    <li><a href="#"><i className="ti-twitter" /></a></li>
                    <li><a href="#"><i className="ti-instagram" /></a></li>
                    <li><a href="#"><i className="ti-linkedin" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="registermodal">
                <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
                <div className="modal-body">
                <h4 className="modal-header-title">Log In</h4>
                <div className="login-form">
                    <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="*******" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                    </div>
                    </form>
                </div>
                <div className="social-login mb-3">
                    <ul>
                    <li>
                        <input id="reg" className="checkbox-custom" name="reg" type="checkbox" />
                        <label htmlFor="reg" className="checkbox-custom-label">Save Password</label>
                    </li>
                    <li className="right"><a href="#" className="theme-cl">Forget Password?</a></li>
                    </ul>
                </div>
                <div className="modal-divider"><span>Or login via</span></div>
                <div className="social-login ntr mb-3">
                    <ul>
                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook" />Facebook</a></li>
                    <li><a href="#" className="btn connect-google"><i className="ti-google" />Google</a></li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="mt-2">Haven't Any Account? <a href="register.html" className="link">Click here</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="sign-up" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="sign-up">
                <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
                <div className="modal-body">
                <h4 className="modal-header-title">Sign Up</h4>
                <div className="login-form">
                    <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="*******" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Sign Up</button>
                    </div>
                    </form>
                </div>
                <div className="modal-divider"><span>Or Signup via</span></div>
                <div className="social-login ntr mb-3">
                    <ul>
                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook" />Facebook</a></li>
                    <li><a href="#" className="btn connect-google"><i className="ti-google" />Google</a></li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="mt-3"><i className="ti-user mr-1" />Already Have An Account? <a href="#" className="link">Go For LogIn</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default Footer
