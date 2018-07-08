// JavaScript source code
import React, { Component } from "react";
//import API from "../utils/API";

class CustInfo extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (
            <div className="container-fluid cust-about">
                <div className="row">
                    <div className="cust-about-us ">
                        <div className="col-lg-12 col-md-12">
                            <div className="cust-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                                <h3><i>Enter Your Information</i></h3>
                                <row>
                                    <h5>Email address:</h5>
                                </row>
                                <form>
                                    <row>
                                        <input type="password" placeholder='Enter Password' className="col-md-6 pad-lg-0 " />
                                        <input type="password" placeholder='Confirm Password' className="col-md-6 pad-lg-0 " />
                                        <h6 id="passwordHelpBlock" className="form-text text-muted">
                                            Your password must be 8-16 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                        </h6>
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" placeholder='Enter First Name' className="col-md-6 pad-lg-0 " />
                                        <input type="text" placeholder='Enter Last Name' className="col-md-6 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" placeholder='Address Line 1' className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <row>
                                        <input type="text" placeholder='Address Line 2' className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" placeholder='City' className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" placeholder='State / Province' className="col-md-7 pad-lg-0 " />
                                        <input type="text" placeholder='Zip / Postal Code' className="col-md-3 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" placeholder='Phone Number' className="col-md-5 pad-lg-0 " />
                                        <input type="date" placeholder='Date of Birth' className="col-md-5 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <button>Save Your Information</button>
                                    <br />
                                    {!this.state.isHidden && <textarea id="cust_info_msg">Customer Info Message</textarea>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustInfo;

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
