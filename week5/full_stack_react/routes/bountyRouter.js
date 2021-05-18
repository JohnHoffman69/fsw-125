const express = require('express');
const bountyRouter = express.Router();
const {v4: uuid} = require('uuid');

// Data
const bounties = [
    {
        firstName: "Cad",
        lastName: "Bane",
        living: true,
        bountyAmount: 80000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 950000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 200000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Luke",
        lastName: "Sky Walker",
        living: true,
        bountyAmount: 900000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Minch",
        lastName: "Yoda",
        living: true,
        bountyAmount: 1000000,
        type: "Jedi",
        _id: uuid()
    }
]

// Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
        res.send(newBounty);
    });

bountyRouter.route("/:bountyId")
    .put((req, res) => {
        const bountyID = req.params.bountyID
        const updatedBountyObject = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID);
        console.log(updatedBountyObject)
        const updatedBounty = Object.assign(bounties[bountyIndex], updatedBountyObject);
        res.send(bounties[bountyIndex]);
    })
    .delete((req, res) => {
        const bountyID = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty...`)
    });

module.exports = bountyRouter