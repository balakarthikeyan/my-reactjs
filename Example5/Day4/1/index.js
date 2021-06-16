const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser')

app.use(express.static("css"));

app.get("/", (req, res)=>{
    //res.send("Hello world by Express");
    res.sendFile(__dirname+"/index.html");
});

app.get("/about", (req, res)=>{
    //res.send("About us");
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res)=>{
    //res.send("Contact us");
    res.sendFile(__dirname+"/contactus.html");
});

app.get("/user/:username", (req, res)=>{
    res.send(req.params.username);
});

app.post("/send/data",(req, res)=>{
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    console.log(req.body);
    res.json({
         "name": "Balakarthikeyan", 
         "company" : "Unimoni", 
         "exp" : "7+"
    });
})

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});
