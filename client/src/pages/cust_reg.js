// JavaScript source code
import React, { Component } from "react";
//import API from "../utils/API";

class CustReg extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (

            <div className="col-lg-6 col-md-6">
                <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                    <h3><i>Register</i></h3>
                    <span>Please register as a new customer.</span>
                    <form>
                        <input type="email" placeholder='Email Address' className="six_col" />
                        <br />
                        <button>Register</button>
                        {!this.state.isHidden && <textarea id="reg_msg">test</textarea>}
                    </form>
                </div>
            </div>
        )
    }
}

export default CustReg;

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
