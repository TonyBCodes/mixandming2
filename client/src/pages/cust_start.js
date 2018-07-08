// JavaScript source code
import React, { Component } from "react";
import CustLog from "./cust_login";
import CustReg from "./cust_reg";
//import API from "../utils/API";

class CustStart extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (
            <div className="container-fluid wpc-about">
                <div className="row">
                    <div className="wpc-about-us ">
                        <CustLog />
                        <CustReg />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustStart;

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
