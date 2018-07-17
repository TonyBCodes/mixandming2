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

class EventInfo extends Component {
    state = {
        email: null,
        event_name: "",
        event_date: "",
        event_start: "",
        event_pax: 0,
        selected_drink: "",
        drink1_id: "",
        drink1_name: "Drink 1",
        drink1_pic: "",
        drink2_id: "",
        drink2_name: "Drink 2",
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
        drink_chooser: [],
        message: "",
        isHidden: true,
        search_type: "",
        search_value: "",
        option_list: [],
        drink_arr: [],
        drink_list: [],
        drinknamesearch: null,
        drinkingsearch: null,
        //react image gallery settings
        showIndex: true,
        showBullets: true,
        infinite: true,
        showThumbnails: true,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        //slideDuration: 450,
        //slideInterval: 2000,
        thumbnailPosition: 'bottom'
    };

    ass_drink_select = (drinks) => {
        var IMAGES = [];
        for (let i = 0; i < drinks.length; i++) {

            let new_drink = {
                original: drinks[i].strDrinkThumb,
                thumbnail: drinks[i].strDrinkThumb,
                thumbnailWidth: 320,
                thumbnailHeight: 320,
                //isSelected: false,
                originalTitle: drinks[i].strDrink,
                thumbnailTitle: drinks[i].strDrink,
                description: drinks[i].strDrink,
                //description: drinks[i].idDrink
                drinkid: drinks[i].idDrink
            };

            IMAGES.push(new_drink);
        }
        this.setState({
            stuff: IMAGES
        })
        console.log(IMAGES);
    }

    init_image = () => {
        var IMAGES = [{
            src: "/img/depositphotos_18605195-stock-photo-several-glasses-of-different-drinks.jpg",
            thumbnail: "/img/depositphotos_18605195-stock-photo-several-glasses-of-different-drinks.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 320,
            isSelected: false,
            caption: "",
            thumbnailCaption: "",
            tag: {}
        }];
        this.setState({
            stuff: IMAGES
        })
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentWillMount() {
        if (this.props.match.params.email) {
            this.setState({ email: this.props.match.params.email });
        }
        ReactModal.setAppElement('#root');
    }

    componentDidMount() {
        this.ing_option_list();
    }

    handleOpenModal(event) {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({ selected_drink: event.target.id });
        this.setState({ showModal: true });
        this.init_image();
        this.ing_clear(event);
        this.name_clear(event);
    }

    handleCloseModal(event) {
        event.preventDefault();
        this.setState({ showModal: false });
        this.ing_clear(event);
        this.name_clear(event);
    }

    ing_option_list() {
        axios.get("/api/ing_list").then(res => {
            let drink_ing_arr = res.data.drinks.map(a => a.strIngredient1);
            // let drink_ing_arr = Object.values(res.data.drinks);
            console.log(drink_ing_arr);
            drink_ing_arr.sort();
            this.setState({ option_list: drink_ing_arr });
        }).catch(error => console.log(error));
    }

    ing_search = (event) => {
        event.preventDefault();
        let searchTerm = this.state.selectedOption;
        console.log(searchTerm);
        axios.get("/api/searchby_ing/" + searchTerm).then(res => {
            console.log(res);
            let drink_arr = res.data;
            //drink_arr.sort();
            this.ass_drink_select(drink_arr);
        }).catch(error => console.log(error));

    }

    name_clear = (event) => {
        event.preventDefault();
        this.setState({ drinknamesearch: "" });
    }

    ing_clear = (event) => {
        event.preventDefault();
        this.setState({ selectedOption: "" });
        this.setState({ drinkingsearch: "" });
    }


    name_search = (event) => {
        event.preventDefault();
        console.log(this.state.drinknamesearch);
        let searchTerm = this.state.drinknamesearch;
        axios.get("/api/searchby_name/" + searchTerm).then(res => {
            console.log(res.data);
            let drink_arr = res.data;
            //drink_arr.sort();
            this.ass_drink_select(drink_arr);
            //this.setState({ drink_list: drink_ing_arr });
        }).catch(error => console.log(error));
    }

    _onImageClick = (event) => {
        console.log('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex(), this.state.stuff[this._imageGallery.getCurrentIndex()].drinkid, this.state.stuff[this._imageGallery.getCurrentIndex()].original, this.state.stuff[this._imageGallery.getCurrentIndex()].originalTitle);
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
        return (
            <div className="container-fluid cust-about max1024w">
                <div className="cust-about-us ">
                    <div className="col-lg-12 col-md-12">
                        <div className="cust-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                            <h3><i>Event Information</i></h3>
                            <div className="row">
                                <h5>Logged in as: {this.state.email}</h5>
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
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 1</span>
                                                    <h6>{this.state.email}</h6>
                                                    <a href="" onClick={this.handleOpenModal} id="drink1" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
                                                </div>
                                                <div className="wpc-upcoming-body">
                                                    <span className='wpc-upcoming-date'>Select Drink 2</span>
                                                    <h6>{this.statedrink2_name}</h6>
                                                    <a href="" onClick={this.handleOpenModal} id="drink2" className="wpc-upcoming-reg">Choose Drink</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className=" wpc-upcom">
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
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
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
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
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
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
                                                <div className="wpc-upcoming-head"><img src="/img/stock-photo-barman-show-bartender-pours-alcoholic-cocktails-439101094.jpg" alt="" />
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
                                    <input type="text" name="drinknamesearch" onChange={this.handleInputChange} placeholder='Drink Name' value={this.state.drinknamesearch} className="col-md-10 pad-lg-0 " />
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <a href="" id="namesearch" onClick={this.name_search} className="wpc-upcoming-reg ">Search</a>
                                            <a href="" id="nameclear" onClick={this.name_clear} className="wpc-upcoming-reg ">Clear</a>
                                        </div>
                                    </div>
                                    <div className="demo">
                                        <PowerSelect
                                            options={this.state.option_list}
                                            selected={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            placeholder="Click for options"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <a href="" id="ingsearch" onClick={this.ing_search} className="wpc-upcoming-reg ">Search</a>
                                            <a href="" id="ingclear" onClick={this.ing_clear} className="wpc-upcoming-reg ">Clear</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-md-1 " />
                            <div className="col-md-6 ">
                                {this.state.stuff
                                    ? <ImageGallery
                                        ref={i => this._imageGallery = i}
                                        items={this.state.stuff}
                                        lazyLoad={false}
                                        onClick={this._onImageClick.bind(this)}
                                        infinite={this.state.infinite}
                                        showBullets={this.state.showBullets}
                                        showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                                        showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                                        showThumbnails={this.state.showThumbnails}
                                        showIndex={this.state.showIndex}
                                        showNav={this.state.showNav}
                                        thumbnailPosition={this.state.thumbnailPosition}
                                        additionalClass="app-image-gallery"
                                    />
                                    : <div />
                                }
                            </div>
                        </div>
                    </div>
                </ReactModal>
            </div >
        )
    }
}

export default EventInfo;

////<div className=" wpc-upcom">
////    <div className="wpc-upcoming-head"><img src="/img/depositphotos_18605195-stock-photo-several-glasses-of-different-drinks.jpg" alt="Select A Drink" />
////        <div className="wpc-upcoming-body">
////            <span className='wpc-upcoming-date'>Drink Name Placeholder</span>
////        </div>
////        <a href="" onClick={this.handleCloseModal} className="wpc-upcoming-reg">Select</a>
////    </div>
////</div>


////slideDuration = { parseInt(this.state.slideDuration) }
////slideInterval = { parseInt(this.state.slideInterval) }
////onImageLoad = { this._onImageLoad }
////onSlide = { this._onSlide.bind(this) }
////onPause = { this._onPause.bind(this) }
////onScreenChange = { this._onScreenChange.bind(this) }
////onPlay = { this._onPlay.bind(this) }

//<input type="text" name="drinkingsearch" onChange={this.handleInputChange} placeholder='Ingredient Name' value={this.state.drinkingsearch || this.state.selectedOption} className="col-md-10 pad-lg-0 " />

//<br />
//    <div className="row">
//        <div className="dropdown">
//            <input type="text" placeholder='Address Line 1' className="dropdown col-md-10 pad-lg-0 " />
//            <div className="dropdown-content">
//                <p>Option1</p>
//                <p>Option2</p>
//                <p>Option3</p>
//            </div>
//        </div>
//    </div>