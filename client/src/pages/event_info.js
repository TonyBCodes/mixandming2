// JavaScript source code
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import CocktailSearch from "../apis/cocktails_api"
import { PowerSelect } from 'react-power-select'
//import API from "../utils/API";

class EventInfo extends Component {
    state = {
        email: "",
        event_name: "",
        event_date: "",
        event_start: "",
        event_pax: 0,
        drink1_id:"",
        drink1_name:"",
        drink1_pic: "",
        drink2_id: "",
        drink2_name: "",
        drink2_pic: "",
        drink3_id: "",
        drink3_name: "",
        drink3_pic: "",
        drink4_id: "",
        drink4_name: "",
        drink4_pic: "",
        drink5_id: "",
        drink5_name: "",
        drink5_pic: "",
        drink6_id: "",
        drink6_name: "",
        drink6_pic: "",
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
        drink_chooser:[],
        message: "",
        isHidden: true,
        search_type: "",
        search_value:""
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(event) {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({ showModal: true });
    }

    handleCloseModal(event) {
        event.preventDefault();
        this.setState({ showModal: false });
    }

    ing_option_list() {
        let drink_ing = CocktailSearch.ing_list;
        console.log(drink_ing);
        let drink_ing_arr = Object.values(drink_ing);
        return drink_ing_arr;
    }

    handleChange = ({ option }) => {
        this.setState({
            selectedOption: option
        })
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
                                        <input type="text" placeholder='Event Name' name="event_name" className="col-md-10 pad-lg-0 " />
                                    </div>
                                    <br />
                                    <div className="row">
                                        <input type="text" placeholder='Event Date' name="event_date" className="col-md-5 pad-lg-0 " />
                                        <input type="text" placeholder='Event Strart Time' name="event_time" className="col-md-5 pad-lg-0 " />
                                        <input type="text" placeholder='Number of Participants' name="event_pax" className="col-md-5 pad-lg-0 " />
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink1" className="wpc-upcoming-reg">Choose Drink</a>
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink2" className="wpc-upcoming-reg">Choose Drink</a>
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink3" className="wpc-upcoming-reg">Choose Drink</a>
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink4" className="wpc-upcoming-reg">Choose Drink</a>
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink5" className="wpc-upcoming-reg">Choose Drink</a>
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
                                                    <a href="" onClick={this.handleOpenModal} id="drink6" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div Classname="row">
                                        <div className="dropdown">
                                            <input type="text" placeholder='Address Line 1' className="dropdown col-md-10 pad-lg-0 " />
                                            <div className="dropdown-content">
                                                <p>Option1</p>
                                                <p>Option2</p>
                                                <p>Option3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <button>Save Your Information</button>
                                    <br />
                                    {!this.state.isHidden && <textarea id="cust_info_msg">Customer Info Message</textarea>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="eventModal"
                    overlayClassName=""
                >
                    <div className="cust-about-form" id="drinkmodal">
                        <div className="row rowcenter">
                            <div className="col-md-4 ">
                                <h5>Search by drink name OR ingredient</h5>
                            </div>
                        </div>
                        <div className="row rowcenter">
                            <div className="col-md-1 " />
                            <div className="col-md-4 ">
                                <div className="row">
                                    <input type="text" placeholder='Drink Name' className="col-md-10 pad-lg-0 " />
                                    <input type="text" placeholder='Ingredient Name' className="col-md-10 pad-lg-0 " />
                                </div>
                                <PowerSelect
                                    options={this.ing_option_list}
                                    selected={this.state.selectedOption}
                                    onChange={this.handleChange}
                                />
                                <a href="" className="wpc-upcoming-reg">Search</a>
                            </div>
                            <div className="col-md-1 " />
                            <div className="col-md-6 ">
                                <div className=" wpc-upcom">
                                    <div className="wpc-upcoming-head"><img src="./img/depositphotos_18605195-stock-photo-several-glasses-of-different-drinks.jpg" alt="Select A Drink" />
                                        <div className="wpc-upcoming-body">
                                            <span className='wpc-upcoming-date'>Drink Name Placeholder</span>
                                        </div>
                                        <a href="" onClick={this.handleCloseModal} className="wpc-upcoming-reg">Select</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div >
        )
    }
}

export default EventInfo;