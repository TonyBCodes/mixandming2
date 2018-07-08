// JavaScript source code
import React, { Component } from "react";
import EventModal from "./event_modal";
//import API from "../utils/API";

class EventInfo extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (
            <div className="container-fluid cust-about max1024w">
                <div className="cust-about-us ">
                    <div className="col-lg-12 col-md-12">
                        <div className="cust-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                            <h3><i>Event Information</i></h3>
                            <div className="row">
                                <h5>Email address:</h5>
                            </div>
                            <br />
                            <div className="row">
                                <h5>Event specifics must be finalized and event payment must be completed 14 days before event date.</h5>
                            </div>
                            <div>
                                <form>
                                    <div className="row">
                                        <input type="text" placeholder='Event Name' className="col-md-10 pad-lg-0 " />
                                    </div>
                                    <br />
                                    <div className="row">
                                        <input type="text" placeholder='Event Date' className="col-md-5 pad-lg-0 " />
                                        <input type="text" placeholder='Event Strart Time' className="col-md-5 pad-lg-0 " />
                                        <input type="text" placeholder='Number of Participants' className="col-md-5 pad-lg-0 " />
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-12 wpc-header wpc-upcoming marg-lg-t95 marg-sm-t50'>
                                            <h3>Select Six Cocktails</h3>
                                        </div>
                                    </div>
                                    <div className="row colorblack">
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 1</span>
                                                    <h6>Drink 1 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 2</span>
                                                    <h6>Drink 2 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 3</span>
                                                    <h6>Drink 3 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row colorblack">
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 4</span>
                                                    <h6>Drink 4 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 5</span>
                                                    <h6>Drink 5 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="./img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 6</span>
                                                    <h6>Drink 6 Name</h6>
                                                    <a href="" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <row>
                                        <div className="dropdown">
                                            <input type="text" placeholder='Address Line 1' className="dropdown col-md-10 pad-lg-0 " />
                                            <div className="dropdown-content">
                                                <p>Option1</p>
                                                <p>Option2</p>
                                                <p>Option3</p>
                                            </div>
                                        </div>
                                    </row>
                                    <br />
                                    <button>Save Your Information</button>
                                    <br />
                                    {!this.state.isHidden && <textarea id="cust_info_msg">Customer Info Message</textarea>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default EventInfo;

    //    handleInputChange = event => {
    //        const { name, value } = event.target
    //        this.setState({
    //            [name]: value
    //        });
    //    };

    //    handleSubmit = event => {
    //        event.preventDefault();
    //        if (this.state.email && this.state.password) {
    //            API.loginUser({
    //                email: this.state.email,
    //                password: this.state.password
    //            }).then(res => {
    //                console.log(res);
    //                this.props.history.push("/");
    //            })
    //                .catch(err => console.log(err));
    //        };
    //    };