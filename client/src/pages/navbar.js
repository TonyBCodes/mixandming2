// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => (

    <div className="container-fluid pad-lg-0">
        <div className="row">
            <div className="col-lg-12 ">
                <div className="wpc-header-menu">
                    <div className="wpc-navigation">
                        <nav>
                            <ul className="main-menu">
                                <li className="menu-item logo"><Link to="/"><img className="menulogo" src="./img/logo1.jpg" alt="Mix and Ming" /></Link></li>
                                <li className="menu-item"> <Link to="/">Home</Link></li>
                                <li className="menu-item"><a className="" href="">About Us</a></li>
                                <li className="menu-item"><a className="" href="">Services</a></li>
                                <li className="menu-item"><a href="">Gallery</a></li>
                                <li className="menu-item"><a href="">FAQ</a></li>
                                <li className="menu-item"><Link className="" to="/cust_start">Book an Event</Link></li>
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