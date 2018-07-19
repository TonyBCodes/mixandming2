// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Navbar = () => (

    <div className="container-fluid pad-lg-0">
        <div className="row">
            <div className="col-lg-12 ">
                <div className="wpc-header-menu">
                    <div className="wpc-navigation">
                        <nav>
                            <ul className="main-menu">
                                <li className="menu-item logo"><HashLink to="/#home"><img className="menulogo" src="/img/logo1.jpg" alt="Mix and Ming" /></HashLink></li>
                                <li className="menu-item"> <HashLink to="/#home">Home</HashLink></li>
                                <li className="menu-item"><HashLink to="/#about">About Us</HashLink></li>
                                <li className="menu-item"><HashLink to="/#services">Services</HashLink></li>
                                <li className="menu-item"><a href="">Gallery</a></li>
                                <li className="menu-item"><a href="">FAQ</a></li>
                                <li className="menu-item"><HashLink className="" to="/cust_start/#top">Book an Event</HashLink></li>
                                <li className="menu-item"><a className="" href="/cust_start">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="logo2"><a href="index.html">Chicago</a></div>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;