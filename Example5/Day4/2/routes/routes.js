const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index", { 
        employees: [
            { "name": "Balakarthikeyan", "company" : "Unimoni", "exp" : "7+"},
            { "name": "Ramesh", "company" : "Hexaware", "exp" : "6+"},
            { "name": "Vivek", "company" : "Adlabs", "exp" : "8+"}
        ]
    });
});

module.exports = router;