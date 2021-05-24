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

// General bounty handling
bountyRouter.route("/")
.get((req, res) => {
    res.send(bounties)
})
.post((req, res) => {
    console.log(req.body);
    const newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send(newBounty);
})

// Specific bounty handling
bountyRouter.route("/:bountyID")
.put((req, res) => {
    const bountyID = req.params.bountyID;
    const updatedBountyObject = req.body;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID);
    console.log(updatedBountyObject)
    Object.assign(bounties[bountyIndex], updatedBountyObject);
    res.send(bounties[bountyIndex]);
})
.delete((req, res) => {
    const bountyID = req.params.bountyID;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID);
    bounties.splice(bountyIndex, 1);
    res.send('Successfully removed bounty from the database!')
})

module.exports = bountyRouter;