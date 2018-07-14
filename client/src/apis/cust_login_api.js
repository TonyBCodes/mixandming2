// JavaScript source code
import axios from "axios";

export default {
    // Gets all books
    getUser: function () {
        return axios.get("/auth/check");
    },
    loginUser: function (loginData) {
        return axios.post("/auth/login/", loginData);
    },
    // Saves a book to the database
    registerUser: function (registerData) {
        return axios.post("/auth/register", registerData);
    },
    logoutUser: function () {
        return axios.get("/auth/logout/");
    },
    checkforuser: function (email) {
        let checkpath = `/api/cust_exists/${email}`;
        //`/event_info/${this.state.email}`
        console.log(checkpath);
        return axios.get({checkpath});
    }
};