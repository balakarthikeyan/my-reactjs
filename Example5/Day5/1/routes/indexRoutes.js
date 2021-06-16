const express = require("express");
const router = express.Router();

const Contacts = require("../models/contact");

// const db = [];

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/form", (req, res) => {
    res.render("form")
})

router.post("/addcontact", (req, res) => {
    // console.log(req.body)
    Contacts.create(req.body)
        .then(() => {
            console.log("stored data");
            res.send("stored data");
        })
        .catch(err => {
            console.log(err)
        })
});

router.get("/user/:id", (req, res) => {
    //find the user and send it using res.send()
    Contacts.findById(req.params.id)
        .then((foundUser) => {
            res.send(foundUser);
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get("/fetch/all", (req, res) => {
    Contacts.find()
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;