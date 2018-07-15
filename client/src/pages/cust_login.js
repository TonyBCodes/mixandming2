// JavaScript source code
import React, { Component } from "react";
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import axios from "axios";
//import API from "../utils/API";

class CustLogin extends Component {
    state = {
        email: "",
        password: "",
        message: "Incorrect email or password.  Please try again.",
        isHidden: true,
        loggedin: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    componentWillMount() {
        this.setState({ message: "Incorrect Password. \n Please try again or request password reset." });
    }

    handleSubmit = event => {
        event.preventDefault();

        //console.log('handling form submit...');
        //console.log(this.state);
        axios.post("/api/login", this.state)
            .then((res) => {
                console.log(res.data);
                //this.renderEventInfoRedirect();
                if (res.data === true) {
                    console.log("1");
                    this.setState({ loggedin: true });
                }
                else {
                    console.log("incorrect password condition");
                    this.setState({ isHidden: false });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        if (this.state.loggedin === true) {
            let red_path = `/event_info/${this.state.email}`;
            return <Redirect to={red_path} />;
        }
        else {
            return (
                <div className="col-lg-6 col-md-6">
                    <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                        <h3><i>Login</i></h3>
                        <span>Existing customers, please enter your email and password.</span>
                        <form>
                            <input type="email" name="email" placeholder='Email Address' onChange={this.handleInputChange} className="six_col" />
                            <br />
                            <input type="password" name="password" placeholder='Password' onChange={this.handleInputChange} className="six_col" />
                            <br />
                            <button type="submit" onClick={this.handleSubmit}>Login</button>
                            <br />
                            {!this.state.isHidden && <textarea name="message" id="lgn_msg" value={this.state.value}></textarea>}
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default CustLogin;