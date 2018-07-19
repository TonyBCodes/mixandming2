// JavaScript source code
import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid wpc-about">
                    <div className="row divcenter" id="home">
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

                <div id="about" className="container-fluid wpc-about">
                    <div className="row divcenter">

                        <div className="col-lg-6 col-md-6">
                            <div className="wpc-about-form marg-lg-t140 marg-lg-140 marg-sm-b0 marg-sm-t0">
                                <h3><i>What is </i>Mix And Ming?</h3>
                                <span>Mix and Ming is a fun, interactive, educational addition to any event. You and your guests will share the experience of learning to make your favorite cocktails.</span>
                                <p/>
                                <span>Activities are led by our highly skilled bartender who are both fun and informative.  You'll have the opportunity to master the shake, the pour and the layer.  You'll learn fun facts about cocktails and the sprits used to make them. We offer non stop fun from start to finish. There are prizes and every guest leaves with a special gift they can use to practice what they have learned.</span>
                                <p />
                                <span>If you are looking for something different for an adult birthday, bridal shower, bachelor or bachelorette party, couple’s night, girl’s night, or hanging with the buddies, book a event with Mix and Ming.</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                                <h3>About <i>Us</i></h3>
                                <span>We get caught up in our lives, with work, school, taking care of family.</span>
                                <p />
                                <span>We often don’t get to mix and mingle with friends and acquaintances.</span>
                                <p />
                                <span>Mix and Ming was conceived in the summer of 2018 as an activity for the owner's brother's birthday.  The weekend is always a time for gathering, having a delicious meal and good drinks with family and friends.</span>
                                <p />
                                <span>This particular weekend a bartender was hired to teach the guests how to make different cocktails. An extraordinary time was had by all. Mix and Ming is an event where friends and family come together to learn to make cocktaile, laugh and spend time.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="services" className="wpc-our-service">
                    <img src="img/home1/service_bg.jpg" className="wpc-img" alt="img" />
                    <div className="container pad-lg-0 ">
                        <div className="row">
                            <div className="col-lg-12">
                                <header className='wpc-header marg-lg-t110 marg-sm-t50'>
                                    <h2>Our Services</h2>
                                    <h3>What we Offer</h3>
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
                                                <h3>Mix and Ming Event</h3>
                                                <p>2 Hour, bartender led, Mix and Ming event. </p>
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