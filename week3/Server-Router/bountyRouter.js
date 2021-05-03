const express = require('express');
const bountyRouter = express.Router();
const {v4:uuid} =require('uuid');

// Data
const bounties = [
    {
        firstName: "Cad",
        lastName: "Bane",
        living: true,
        bountyAmount: 80000,
        type: "Sith",
        _ID: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 950000,
        type: "Sith",
        _ID: uuid()
    },
    {
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 200000,
        type: "Jedi",
        _ID: uuid()
    },
    {
        firstName: "Lukex",
        lastName: "Sky Walker",
        living: true,
        bountyAmount: 900000,
        type: "Sith",
        _ID: uuid()
    },
    {
        firstName: "Minch",
        lastName: "Yoda",
        living: true,
        bountyAmount: 1000000,
        type: "Jedi",
        _ID: uuid()
    }
]

// Routes
bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._ID = uuid();
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounties list.`)
    });

bountyRouter.route("/:ID")
    .get((req, res) => {
        res.send(bounties.filter(req.params._ID))
    })
    .delete((req, res) => {
        res.send(`DELETE on /bounty/${req.params._ID} endpoint`)
    })

module.exports = bountyRouter