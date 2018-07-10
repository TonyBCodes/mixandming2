// JavaScript source code
const express = require('express');
const router = express.Router();
const axios = require("axios");
const CircularJSON = require("circular-json");

require("dotenv").config();
//const APIKey = process.env.COCKTAILDB_API_KEY;
//Developer API key is 1
const APIKey = "1";

module.exports = function (router) {

    //Lookup full cocktail details of a single cocktail by id
    //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
    router.get("/api/searchby_id/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/lookup.php?i=${searchTerm}`)
            .then((results) => {
                const data = results.data.results;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Get full details of a multiple cocktails by drink name
    //https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    router.get("/api/searchby_name/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/search.php?s=${searchTerm}`)
            .then((results) => {
                const data = results.data.results;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Lookup full cocktail details of a multiple cocktails by drink ingrediant
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka
    router.get("/api/searchby_ing/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/filter.php?i=${searchTerm}`)
            .then((results) => {
                const data = results.data.results;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Lookup all current ingredients list
    //https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
    router.get("/api/ing_list", (req, res) => {
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/list.php?i=list`)
            .then((results) => {
                const data = results.data.results;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

};