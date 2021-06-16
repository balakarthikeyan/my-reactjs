const express = require("express");
const router = express.Router();
const ContactModel = require("../models/contact");
const ContactCtrl = require("../controllers/contact");

router.get("/", ContactCtrl.index);

router.get("/fetchcontact", ContactCtrl.fetchContact)

router.post("/addcontact", ContactCtrl.addContact)

router.get("/getcontact/:id", ContactCtrl.getContact)

router.put("/updatecontact/:id", ContactCtrl.updateContact)

router.delete("/deletecontact/:id", ContactCtrl.deleteContact)

module.exports = router;