// JavaScript source code
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { PowerSelect } from 'react-power-select';
import { Redirect, withRouter } from 'react-router-dom';
import axios from "axios";
//import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';

//import 'react-power-select/dist/react-power-select.css';

class ConfirmEventInfo extends Component {
    state = {
        eventid: "",
        email: null,
        cust_id: null,
        event_name: "",
        event_date: "",
        event_start: "",
        event_pax: 0,
        selected_drink: "",
        drink1_id: "",
        drink1_name: "Drink 1",
        drink1_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink2_id: "",
        drink2_name: "Drink 2",
        drink2_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink3_id: "",
        drink3_name: "Drink 3",
        drink3_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink4_id: "",
        drink4_name: "Drink 4",
        drink4_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink5_id: "",
        drink5_name: "Drink 5",
        drink5_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        drink6_id: "",
        drink6_name: "Drink 6",
        drink6_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
        addon1: "",
        addon1_quant: 0,
        addon2: "",
        addon2_quant: 0,
        addon3: "",
        addon3_quant: 0,
        addon4: "",
        addon4_quant: 0,
        addon5: "",
        addon5_quant: 0,
        addon6: "",
        addon6_quant: 0,
        notes: "",
        drink_chooser: [],
        message: "",
        isHidden: true,
        search_type: "",
        search_value: "",
    };



    componentWillMount() {
        console.log(this.props.match.params);
        if (this.props.match.params.eventnum) {
            this.setState({ eventid: this.props.match.params.eventnum });
        }
        let searchTerm = this.props.match.params.eventnum;
        console.log(searchTerm);
        axios.get("/api/get_event/", searchTerm)
            .then(resp => {
                console.log(resp);
                this.setState({
                    email: null,
                    cust_id: null,
                    event_name: "",
                    event_date: "",
                    event_start: "",
                    event_pax: 0,
                    selected_drink: "",
                    drink1_id: "",
                    drink1_name: "Drink 1",
                    drink1_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    drink2_id: "",
                    drink2_name: "Drink 2",
                    drink2_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    drink3_id: "",
                    drink3_name: "Drink 3",
                    drink3_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    drink4_id: "",
                    drink4_name: "Drink 4",
                    drink4_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    drink5_id: "",
                    drink5_name: "Drink 5",
                    drink5_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    drink6_id: "",
                    drink6_name: "Drink 6",
                    drink6_pic: "/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg",
                    addon1: "",
                });
            });
    }

    handleChange = ({ option }) => {
        this.setState({
            selectedOption: option
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        //super();
        console.log(this.state);
        return (
            <div className="container-fluid cust-about max1024w">
                <div className="cust-about-us marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                    <div className="row">
                        <div className="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item"><h2>Event Name:</h2></li>
                                <li class="list-group-item">Event Date:</li>
                                <li class="list-group-item">Event Time:</li>
                                <li class="list-group-item">Number of Participants:</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item">Event Address:</li>
                                <li class="list-group-item">Event Address:</li>
                                <li class="list-group-item">Event City:</li>
                                <li class="list-group-item">Event State:</li>
                                <li class="list-group-item">Event Zip:</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item">Drink 1:</li>
                                <li class="list-group-item">Drink 2:</li>
                                <li class="list-group-item">Drink 3:</li>
                                <li class="list-group-item">Drink 4:</li>
                                <li class="list-group-item">Drink 5:</li>
                                <li class="list-group-item">Drink 6:</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <ul class="list-group">
                                    <li class="list-group-item">Credit Card #: <input type="text" class="form-control" id="ccnum"/></li>
                                    <li class="list-group-item">Credit Card Exp:<input type="text" class="form-control" id="ccexp" /></li>
                                    <li class="list-group-item">Credit Card CCV:<input type="text" class="form-control" id="ccccv" /></li>
                                    <li class="list-group-item">Credit Card Zip:<input type="text" class="form-control" id="cczip" /></li>
                                    <li class="list-group-item">Name on Credit Card:<input type="text" class="form-control" id="ccname" /></li>
                                </ul>
                                <button type="button" class="btn btn-primary">Submit for Payment</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}

export default ConfirmEventInfo;