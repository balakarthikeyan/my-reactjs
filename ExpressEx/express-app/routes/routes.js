const express = require("express");
const router = express.Router();
const employees = [];

router.get("/", (req, res)=>{
    res.render("index", {employees});
});

router.get("/form", (req, res)=>{
    data = { name : "", email : "", phone : "", comments: ""};
    var form = {}
        form.method = "add";
    res.render("form", {data, form});
});

router.post("/add", (req, res)=>{
    employees.push(req.body);
    res.redirect("/");
});

router.get("/fetch/:id", (req, res)=>{
    data = employees[req.params.id];
    var form = {}
        form.method = "update/"+req.params.id;    
    res.render("form", {data, form});
});

router.get("/delete/:id", (req, res)=>{
    employees.splice(req.params.id, 1);
    res.redirect("/");
});

router.post('/update/:id', (req, res) => {
    const user = employees[req.params.id];
    if(user) {
        employees[req.params.id] = req.body
        res.redirect("/");
    } else 
	return res.json({ message: 'Issue while Updating' });
});

router.get("/user/:email", (req, res)=>{
    const foundUser = employees.find((user) => {
        return user.email === req.params.email
    });
    res.send(foundUser);
});

module.exports = router;