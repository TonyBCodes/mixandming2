// JavaScript source code
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import UserLogin from "./usr_login";
import CustStart from "./cust_start";
import UserRegister from "./usr_register";
import CustInfo from "./cust_info";
import EventInfo from "./event_info";
import EventModal from "./event_modal";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/usr_login' component={UserLogin} />
            <Route exact path='/usr_register' component={UserRegister} />
            <Route exact path='/cust_start' component={CustStart} />
            <Route exact path='/cust_info' component={CustInfo} />
            <Route exact path='/event_info' component={EventInfo} />
            <Route exact path='/event_modal' component={EventModal}/>
        </Switch>
    </main>
)

export default Main;