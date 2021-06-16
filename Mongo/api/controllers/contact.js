const ContactModel = require("../models/contact");

exports.index = (req, res)=>{
    res.json({
        status : true,
        message: "Application Working"
    });
}

exports.fetchContact = (req, res) => {
    ContactModel.find()
        .then((results) => {
            res.status(200).json({data : results})
        })
        .catch(err => {
            res.status(400).json({
                error : err,
                message: "Went wrong"
            })
        })
}

exports.addContact = (req, res) => {
    ContactModel.create(req.body)
        .then(() => {
            res.status(200).json({message : "Saved"})
        })
        .catch(err => {
            res.status(400).json({
                error : err,
                message: "Went wrong"
            })
        })
}

exports.getContact = (req, res) => {
    ContactModel.findById(req.params.id)
        .then((found) => {
            res.status(200).json({data : found})
        })
        .catch(err => {
            res.status(400).json({
                error : err,
                message: "Went wrong"
            })
        })
}

exports.updateContact = (req, res) => {
    ContactModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).json({message : "Updated"})
        })
        .catch(err => {
            res.status(400).json({
                error : err,
                message: "Went wrong"
            })
        })
}

exports.deleteContact = (req, res) => {
    ContactModel.findByIdAndRemove(req.params.id, req.body)
        .then(() => {
            res.status(200).json({message : "Deleted"})
        })
        .catch(err => {
            res.status(400).json({
                error : err,
                message: "Went wrong"
            })
        })
}