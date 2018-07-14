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
        message: "",
        isHidden: true,
        loggedin: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    renderEventInfoRedirect = () => {
        console.log("2");
        return <Redirect to="/" />;
    }

    handleSubmit = event => {
        event.preventDefault();

        //console.log('handling form submit...');
        //console.log(this.state);
        axios.post("/api/login", this.state)
            .then((res) => {
                console.log(res);
                //this.renderEventInfoRedirect();
                switch (res.data) {
                    case true: {
                        console.log("1");
                        this.setState({ loggedin: true });
                        break;
                    }
                    case false: {
                        this.setState({ isHidden: false });
                        this.setState({ message:"Incorrect Password. \n Please try again or request password reset." });
                        break;
                    }
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
                            {!this.state.isHidden && <textarea id="lgn_msg">Login Message</textarea>}
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default CustLogin;

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
