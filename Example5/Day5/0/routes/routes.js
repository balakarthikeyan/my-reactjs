const express = require("express");
const router = express.Router();
const employees = [];

router.get("/", (req, res)=>{
    res.render("index", {employees});
});

router.get("/form", (req, res)=>{
    data = { name : ""};
    res.render("form", {data});
});

router.post("/add", (req, res)=>{
    employees.push(req.body);
    res.redirect("/");
});

router.get("/fetch/:id", (req, res)=>{
    data = employees[req.params.id];
    res.render("form", {data});
});

router.get("/delete/:id", (req, res)=>{
    employees.splice(req.params.id, 1);
    res.redirect("/");
});

router.get("/user/:email", (req, res)=>{
    const foundUser = employees.find((user) => {
        return user.email === req.params.email
    });
    res.send(foundUser);
});

module.exports = router;