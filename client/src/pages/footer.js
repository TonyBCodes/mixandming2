// JavaScript source code
// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (

    <div className="wpc-footer footer_marg">
        <br />
        <div className="container pad-lg-0">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="wpc-footer-item">
                        <a href="">
                            <div className="logo">
                                <Link to="/"><img className="menulogo" src="/img/logo1.jpg" alt="Mix and Ming" /></Link>
                            </div>
                        </a>
                        <span>The best event concept ever!</span>

                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="wpc-footer-item marg-lg-t67 marg-lg-b90 marg-sm-t0 marg-sm-b0 marg-xs-t0">
                        <h5>contact us:</h5>
                        <ul>
                            <li><span>Sharon Hill PA USA</span></li>
                            <li><a href="mailto:info@mixandming.com"><span>info@mixandming.com</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12">
                    <footer className='wpc-copyright '>
                        <span>
                            © 2017 All Rights Reserved.
            </span>
                    </footer>
                </div>
            </div>
        </div>
    </div>

);

export default Footer;

//marg - lg - t67 marg - lg - b90 marg - sm - t0 marg - sm - b0 marg - xs - t0