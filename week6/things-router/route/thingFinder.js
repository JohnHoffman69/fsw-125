const express = require("express");
const thingFinder = express.Router();
const { v4: uuidv4 } = require('uuid');


const inventoryItems = [
    {
        name: "orange",
        type: "food",
        price: 5,
        _id: uuidv4()
    },
    {
        name: "pants",
        type: "clothing",    
        price: 78,
        _id: uuidv4()
    },
    {
        name: "computer",
        type: "technology",
        price: 1985,
        _id: uuidv4()
    },
    {
        name: "shirt",
        type: "clothing",
        price: 54,
        _id: uuidv4()
    },
    {
        name: "kit kat",
        type: "candy",
        price: 3,
        _id: uuidv4()
    },
    {
        name: "ham",
        type: "food",
        price: 8,
        _id: uuidv4()
    },
    {
        name: "rice",
        type: "food",
        price: 11,        
        _id: uuidv4()
    }
];


// GET ALL
thingFinder
     .get("/", (req, res) => {
     res.status(200).send(inventoryItems)
 })
 
 
 // GET BY TYPE
     .get("/search/type", (req, res, next) => {
     const type = req.query.type
     console.log(type)
 
     if(!type){
         const error = new Error("You must provide a valid type.")
         return next(error)
     }
     const filteredInventory = inventoryItems.filter(items => items.type === type)
     res.status(200).send(filteredInventory)
 });
 
 
 module.exports = thingFinder