// JavaScript source code
import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import CLogin from "../apis/cust_login_api";

class CustReg extends Component {
    state = {
        email: "",
        message: "",
        isHidden: true
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    renderCustRegRedirect = () => {
        this.props.history.push('/cust_info/' + this.state.email);
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log('handling form submit...');

        if (this.state.email) {

            if (CLogin.checkforuser(this.state.email)) {

                console.log('email found');

                //redirct to login page
                this.setState({ isHidden : false });
                this.setState({ message: "The email you entered is already associated with an account.  Please log in." });
            }
            else {
                //redirect to register page
                //send email as prop
                console.log('email not found');
                this.renderCustRegRedirect();
            }

        }
        else {
            console.log('this.state.email not found');
        }
    };




    render() {
        return (

            <div className="col-lg-6 col-md-6">
                <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                    <h3><i>Register</i></h3>
                    <span>Please register as a new customer.</span>
                    <form>
                        <input type="email" name="email" placeholder='Email Address' className="six_col" onChange={this.handleInputChange} />
                        <br />
                        <button type="submit" onClick={this.handleSubmit}>Register</button>
                        {!this.state.isHidden && <textarea id="reg_msg">{this.state.message}</textarea>}
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CustReg);

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
