import React, { Component } from "react";
import CocktailSearch from "../apis/cocktails_api"


class EventModal extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (
            <div className="modal modalfeat cust-about-form" id="drinkmodal">
                <div className="row rowcenter">
                    <div className="col-md-1 "/>
                    <div className="col-md-4 ">
                        <div className="row">
                            <input type="text" placeholder='Drink Name' className="col-md-10 pad-lg-0 " />
                            <input type="text" placeholder='Drink Ingredient' className="col-md-10 pad-lg-0 " />
                        </div>
                        <a href="" className="wpc-upcoming-reg">Search</a>
                    </div>
                    <div className="col-md-1 " />
                    <div className="col-md-4 ">
                        <div className=" wpc-upcom">
                            <div className="wpc-upcoming-head"><img src="./img/depositphotos_18605195-stock-photo-several-glasses-of-different-drinks.jpg" alt="Select A Drink" />
                                <div className="wpc-upcoming-body">
                                    <span className='wpc-upcoming-date'>18 march, 2017</span>
                                </div>
                                <a href="" className="wpc-upcoming-reg">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                );
            }
        }
        
    export default EventModal;