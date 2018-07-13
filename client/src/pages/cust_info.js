// JavaScript source code
import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import axios from "axios";

class CustInfo extends Component {
    state = {
        email: this.props.match.params.email,
        password: "",
        conf_pw: "",
        firstname: "",
        lastname: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        dob: "",
        message: "",
        isHidden: true
    }

    renderEventInfoRedirect = () => {
        console.log('in the function');
        this.props.history.push("/event_info/" + this.state.email);
        // return <Redirect to={'/cust_info' + this.state.email} />;
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        console.log('handling form submit...');

        axios.post("/api/signup", this.state)
            .then((res) => {
                console.log(res);
                //this.renderEventInfoRedirect();
            })
            .catch((err) => {
                console.log(err);
            });
    };


    render() {
        return (
            <div className="container-fluid cust-about">
                <div className="row">
                    <div className="cust-about-us ">
                        <div className="col-lg-12 col-md-12">
                            <div className="cust-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                                <h3><i>Enter Your Information</i></h3>
                                <row>
                                    <h5>Email address: {this.props.match.params.email}</h5>
                                </row>
                                <form>
                                    <row>
                                        <input type="password" name="password" placeholder='Enter Password' onChange={this.handleInputChange} className="col-md-6 pad-lg-0 " />
                                        <input type="password" name="conf_pw" placeholder='Confirm Password' onChange={this.handleInputChange} className="col-md-6 pad-lg-0 " />
                                        <h6 id="passwordHelpBlock" className="form-text text-muted">
                                            Your password must be 8-16 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                        </h6>
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" name="firstname" placeholder='Enter First Name' onChange={this.handleInputChange} className="col-md-6 pad-lg-0 " />
                                        <input type="text" name="lastname" placeholder='Enter Last Name' onChange={this.handleInputChange} className="col-md-6 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" name="addr1" placeholder='Address Line 1' onChange={this.handleInputChange} className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <row>
                                        <input type="text" name="addr2" placeholder='Address Line 2' onChange={this.handleInputChange} className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" name="city" placeholder='City' onChange={this.handleInputChange} className="col-md-10 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" name="state" placeholder='State / Province' onChange={this.handleInputChange} className="col-md-7 pad-lg-0 " />
                                        <input type="text" name="zip" placeholder='Zip / Postal Code' onChange={this.handleInputChange} className="col-md-3 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <row>
                                        <input type="text" name="phone" placeholder='Phone Number' onChange={this.handleInputChange} className="col-md-5 pad-lg-0 " />
                                        <input type="date" name="dob" placeholder='Date of Birth' onChange={this.handleInputChange} className="col-md-5 pad-lg-0 " />
                                    </row>
                                    <br />
                                    <button type="submit" onClick={this.handleSubmit}>Save Your Information</button>
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