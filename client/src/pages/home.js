﻿// JavaScript source code
import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid pad-lg-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wpc-swiper wpc-home3 marg-lg-t90  marg-sm-t60">
                                <div className="swiper-container" data-autoplay="5000" data-touch="1" data-mouse="0" data-slides-per-view="1" data-loop="0" data-speed="1000">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide swiper-slide-bg">
                                            <img className="slider-img" src="img/pexels-photo-1189257.jpeg" alt="img" />
                                        </div>
                                        <div className="swiper-slide swiper-slide-bg">
                                            <img className="slider-img" src="img/depositphotos_165724552-stock-photo-barman-making-cocktail-for-friends.jpg" alt="img" />
                                        </div>
                                        <div className="swiper-slide swiper-slide-bg">
                                            <img className="slider-img" src="img/depositphotos_30418149-stock-photo-many-glasses-of-cocktails-on.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid wpc-about">
                    <div className="row">
                        <div className="wpc-about-us ">
                            <div className="col-lg-5 col-md-6">
                                <div className="wpc-about-title marg-lg-t225 marg-lg-b100 marg-sm-b0 marg-sm-t0">
                                    <h2>About Us</h2>
                                    <h3>who we are</h3>
                                    <span>Sed mauris massa, rutrum eget dignissim in, maximus non mauris. Maecenas vestibulum blandit mauris.</span>
                                    <p>Ьaximus non mauris. Maecenas vestibulum blandit mauris, quis cursus ex aliquam vitae. Fusce iaculis, sem eu facilisis fermentum, quam ligula consectetur sem, et feugiat ligula eros a erat. Aliquam id bibendum nibh, quis pretium nulla.</p>
                                    <a href="about.html">learn more</a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                                    <h3>book <i>table</i></h3>
                                    <span>Fusce iaculis, sem eu facilisis fermentum, quam ligula consectetur sem, et feugiat ligula</span>
                                    <form>
                                        <input type="text" className="datepicker two_col" placeholder='Date' />
                                        <input type="text" placeholder='Time' className="two_col" />
                                        <input type="text" placeholder='№ People' className="two_col" />
                                        <input type="text" placeholder='Your name' className="three_col" />
                                        <input type="text" placeholder='Your phone' className="three_col1" />
                                        <textarea placeholder='Comment'></textarea>
                                        <button>book now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpc-our-service">
                    <img src="img/home1/service_bg.jpg" className="wpc-img" alt="img" />
                    <div className="container pad-lg-0 ">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className='wpc-header marg-lg-t110 marg-sm-t50'>
                                    <h2>Our Services</h2>
                                    <h3>What we propose</h3>
                                </header>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-12 pad-lg-0">
                                <div className="swiper-container marg-lg-b105 marg-md-b50" data-autoplay="7000" data-touch="1" data-mouse="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="2" data-lg-slides="3" data-loop="0" data-add-slides="3" data-slides-per-view="responsive" data-speed="1000">
                                    <div className="swiper-wrapper marg-lg-b100">
                                        <div className="swiper-slide">
                                            <div className="wpc-service-item marg-lg-t185">
                                                <div className="wpc-service-logo wpc-service-logo1"></div>
                                                <h3>food delivery</h3>
                                                <p>Nullam scelerisque justo non enim elementum enenatis fauc</p>
                                                <span>On orders <i>over $50 Free</i></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="wpc-service-item marg-lg-t185">
                                                <div className="wpc-service-logo wpc-service-logo2"></div>
                                                <h3>loundge zone</h3>
                                                <p>Nullam scelerisque justo non enim elementum enenatis fauc</p>
                                                <span>works to <i>02-00 everyday</i></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="wpc-service-item marg-lg-t185">
                                                <div className="wpc-service-logo wpc-service-logo3"></div>
                                                <h3>wine list</h3>
                                                <p>Nullam scelerisque justo non enim elementum enenatis fauc</p>
                                                <span>more than <i>100 positions</i></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="wpc-service-item marg-lg-t185">
                                                <div className="wpc-service-logo wpc-service-logo3"></div>
                                                <h3>wine list</h3>
                                                <p>Nullam scelerisque justo non enim elementum enenatis fauc</p>
                                                <span>more than <i>100 positions</i></span>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="wpc-service-item marg-lg-t185">
                                                <div className="wpc-service-logo wpc-service-logo3"></div>
                                                <h3>wine list</h3>
                                                <p>Nullam scelerisque justo non enim elementum enenatis fauc</p>
                                                <span>more than <i>100 positions</i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;